import { HomeHead } from "./head/head"
import NavList from "./list/list"
import {useSession} from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { changeUserBanStatus } from '../../redux/banuser'
import { useDispatch, useSelector } from 'react-redux'



export const Layout = ({children})=> {

    const router = useRouter()
    const {status} = useSession()
    const dis = useDispatch()
    
    //if user authenticated the aplication go to dashboard
    /*
        if user unauthenticated and route is in '/auth' or it child noting happen!
        else we ban user in redux and push the route to '/auth'
        
    */
    useEffect(()=>{
    if(status == 'authenticated') router.push('/dashboard')
    if(status == 'unauthenticated'){
        dis(changeUserBanStatus(true))
        if(router.route.startsWith('/auth')) return 
        router.push('/auth')
    } 
    },[status])

    return(
        <>
            <HomeHead/> 

            <div className=" relative w-full flex justify-center items-start text-gray-300 font-[anjoman] " dir="rtl">
                <div className="w-2/12 sticky top-0 min-h-screen max-h-fit bg-[#181E29]">
                    <NavList/>
                </div>
                <main className="  w-10/12 px-6 min-h-screen max-h-fit bg-[#111620]">{children}</main>
            </div>        
        </>
    )
}