import { MongoClient } from "mongodb";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { userDataInterface } from "../signin";


const options:NextAuthOptions = {
    session:{
        strategy:'jwt'
    },
    providers:[
        Credentials({
            type:'credentials',
            credentials:{
            },
            async authorize(credentials) {
                const {email,password} = credentials as {
                    email: string,
                    password: string
                }
                
                const client = await MongoClient.connect(process.env.MONGO)
                const db = client.db('bestlife')
                const user = await db.collection<userDataInterface>('users').findOne({email})
                    if(!user){
                        console.log('usernot found');
                        console.log('user', user);
                        return null
                    } 
                const isPassValid = await bcrypt.compare(password, user.password)
                    if(!isPassValid){
                        console.log('pass invalid');
                        return null
                    }
                const {username, email:userEmail} = user
                return {username, userEmail}
            },
        })
    ],
    pages:{
        signIn:'/auth/signin',
        signOut: '/auth',
        error: ''
    },
    callbacks:{
        async session({ session, token, user }) {
            return session
        },
        async jwt({user,token}) {
            return {...user, ...token}
        }    
    }
}


export default NextAuth(options)