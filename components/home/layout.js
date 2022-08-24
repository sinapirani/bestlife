import { HomeHead } from "./head/head"
import NavList from "./list/list"


export const Layout = ({children})=> {
    return(
        <>
            <HomeHead/> 

            <div className=" w-full flex justify-center items-center" dir="rtl">
                <div className="w-2/12 min-h-screen bg-green-500">
                    <NavList/>
                </div>
                <main className=" w-10/12 min-h-screen bg-red-400">{children}</main>
            </div>        
        </>
    )
}