import Link from "next/link"
import SourcesGrows from "../../components/dashboard/growth/sources"
import SkillsGrows from '../../components/dashboard/growth/skillsGrow'
import React from 'react'
import Obstacles from "../../components/dashboard/growth/obstacles"
import {signIn, useSession} from 'next-auth/react'
import { NextPage } from "next"


const Dashboard: NextPage = (): JSX.Element => {


    return (
        <div className="w-full gap-x-5 flex justify-center items-start min-h-screen pt-6  ">
            
            <SkillsGrows/>
            <SourcesGrows/>
            <Obstacles/>

        </div>
    )
}


export default Dashboard