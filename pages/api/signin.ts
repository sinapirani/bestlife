import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import validator from 'validator'
import bcrypt from 'bcrypt'

export interface userDataInterface {
    name: string,
    username: string,
    password: string,
    email: string
}


const Handler = nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
        res.status(404).end("notfound"); 
    },
})

Handler.post(async(req,res) => {
    const client = await MongoClient.connect(process.env.MONGO)
    const db = client.db('bestlife')

    const { name, username, email, password }: userDataInterface = req.body


    
    //empty check
    if (!name || !username || !password || !email)
        return res.status(400).send('bad data')

    //check length
    if (username.length > 20 || name.length > 30 || password.length > 20 || email.length > 100)
        return res.status(400).send('some data is too long')

    //check username string
    if (!validator.isAlphanumeric(username))
        return res.status(400).send('username should have just letter and number')

    //check email
    if (!validator.isEmail(email))
        return res.status(400).send('email is invalid')

    const user = await db.collection('users').findOne({username})
    if(!user)
        return res.status(400).send('username not exist')
    
    bcrypt.compare(password, user.password)
        .then(isTrue => {
            if(!isTrue)
                return res.status(400).send('password not match')
            return res.status(200).send('ok')
        })



})


export default Handler