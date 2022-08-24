// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import validator from 'validator'
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

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

Handler.post((req: NextApiRequest, res: NextApiResponse) => {

    const {name, username, email, password}: userDataInterface = req.body

    //empty check
    if (!name || !username || !password || !email)
        return res.status(400).send('bad data')

    //check length
    if (username.length > 20 || name.length > 30 || password.length > 20 || email.length > 100)
        return res.status(400).send('some data is too long')

    //check username string
    if(!validator.isAlphanumeric(username))
        return res.status(400).send('username should have just letter and number')

    //check email
    if(!validator.isEmail(email))
        return res.status(400).send('email is invalid')

    
        

    res.send('ok')
})


export default Handler