// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import validator from 'validator'
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt'

interface userDataInterface {
    name: string,
    username: string,
    password: string,
    email: string
}

const Handler = nextConnect<NextApiRequest,NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("notfound");
    },
})

Handler.post(async(req: NextApiRequest, res: NextApiResponse) => {

    const {name, username, email, password}: userDataInterface = req.body
    const csrf = req.cookies['next-auth.csrf-token']
    if(!csrf) return res.status(400)
    
    
    //empty check
    if (!name || !username || !password || !email)
        return res.status(400).send('bad data')

    //check length
    if (username.length > 20 || username.length < 5 || name.length > 30 || name.length < 2 || password.length > 20 || email.length > 100)
        return res.status(400).send('some data is too long')

    //check username string
    if(!validator.isAlphanumeric(username))
        return res.status(400).send('username should have just ENGLISH letter and number')

    //check email
    if(!validator.isEmail(email))
        return res.status(400).send('email is invalid')

    //check Password
    if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/))
        return res.status(400).send('password must have 6-16 character and have number and at least one special character')


    try{
        const client = await MongoClient.connect(process.env.MONGO)
        const db = client.db('bestlife')

        const isUsernameExist = await db.collection('users').findOne({username})
        if(isUsernameExist)
            return res.status(409).send('username is exist')

            
        const isEmailExist = await db.collection('users').findOne({ email })
        if(isEmailExist)
            return res.status(410).send('email is exist')

        const hash = bcrypt.hashSync(password,10)

        await db.collection('users').insertOne({
            name: name,
            username: username,
            email: email,
            password: hash,
        })
        return res.status(204).send('added')

    }
    catch(e){
        console.log('err: ', e);
        res.status(500).send('server Err!')
    }
})


export default Handler