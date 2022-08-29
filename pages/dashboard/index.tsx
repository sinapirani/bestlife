import Link from "next/link"
import SourcesGrows from "../../components/dashboard/growth/sources"
import SkillsGrows from '../../components/dashboard/growth/skillsGrow'
import React from 'react'
import Obstacles from "../../components/dashboard/growth/obstacles"
import {signIn, useSession} from 'next-auth/react'
import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import { getToken } from "next-auth/jwt"


const Dashboard: NextPage = (): JSX.Element => {


    return (
        <div className="w-full gap-x-5 flex justify-center items-start min-h-screen pt-6  ">
            
            <SkillsGrows/>
            <SourcesGrows/>
            <Obstacles/>

        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async({req}) => {
    
    const token = await getToken({req})
    console.log(token);
    
    return{
        props:{
            jwt: ''
        }
    }
}



export default Dashboard