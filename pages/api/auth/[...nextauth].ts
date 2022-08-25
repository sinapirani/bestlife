import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";


const options: NextAuthOptions = {
    session:{
        strategy:'jwt'
    },
    providers:[
        Credentials({
            type:'credentials',
            credentials:{
                email: {label: 'email', type: 'email'},
                password: {label: 'password', type: 'password'}
            },
            authorize(credentials, req) {
                const {email,password} = credentials as {
                    email: string,
                    password: string
                },

            },
        })
    ]
}

export default NextAuth(options)