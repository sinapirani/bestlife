import Link from "next/link"


const Auth = () => {
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center ">
            <p className=" text-4xl font-extrabold">هنوز وارد نشدید!</p>
            <div className=" mt-7 flex justify-evenly gap-x-6">
                <Link href={'/auth/signup'}><button className=" bg-white hover:bg-white/50 duration-200 text-gray-800 rounded-xl px-6 py-2">ثبت نام</button></Link>
                <Link href={'/auth/signin'}><button className="  hover:bg-white/20 duration-300 rounded-xl px-6 py-2">ورود</button></Link>
            </div>
        </div>
    )
}

export default Auth