import { HomeHead } from "./head/head"
import NavList from "./list/list"


export const Layout = ({children})=> {
    return(
        <>
            <HomeHead/> 

            <div className=" w-full flex justify-center items-center text-gray-300 font-[anjoman] " dir="rtl">
                <div className="w-2/12 min-h-screen bg-[#181E29]">
                    <NavList/>
                </div>
                <main className=" w-10/12 px-6 min-h-screen bg-[#111620]">{children}</main>
            </div>        
        </>
    )
}