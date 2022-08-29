
import { Slide, SlideProps, SnackbarOrigin } from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"
import { ThreeCircles } from "react-loader-spinner";
import SnackHandler from "../../components/auth/snackHandler";


interface stateInterface extends SnackbarOrigin {
    open: boolean,
    message: string,
    bg: string,
    color: string
}

interface userInterface {
    email: string,
    password: string
}

const SigninPage = () => {

    const router = useRouter()

    useEffect(()=>{
        console.log(router.query);
        const query = router.query
        if(query?.error) return fireError('اطلاعات نادرست')
    }, [router.query])

    const [state, setState] = useState<stateInterface>({
        message: '',
        open: false,
        horizontal: 'left',
        vertical: 'bottom',
        bg: '',
        color: ''
    })
    const { open, vertical, horizontal } = state

    const fireError = (text: string,) => {
        setState({ ...state, open: true, message: text, bg: 'red', color: 'white' })
    }
    const fireSuccess = (text: string,) => {
        setState({ ...state, open: true, message: text, bg: 'green', color: 'white' })
    }



    const [user, setUser] = useState<userInterface>({
        email: 'sinapiranidev@gmail.com',
        password: 'sdfdDw4$#$d'
    })

    const [loading, setLoading] = useState(false)
    const { email, password } = user

    const formHandler = (e: React.FormEvent) => {

        e.preventDefault()
        if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) return fireError(' پسورد باید بین 6 تا 6 کاراکتر و شامل حروف و عددانگلیسی و حروف ویژه($#%) باشد')
        setLoading(true)
        return signIn('credentials', {email, password})
    }

    const stateChanger = (value) => {
        setState(value)
    }

    const {status} = useSession() 
    if(status == 'loading') return <p>loading</p>
    if(status == 'authenticated'){
        router.push('/dashboard')
        return ''
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">

            <SnackHandler state={state} setState={stateChanger} />

            <div className=" py-12 px-14 bg-[#1f283a] rounded-xl flex justify-center items-center">
                <form onSubmit={formHandler} className=" gap-y-1 flex flex-col justify-center items-center">
                    <input autoComplete="username" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, email: e.currentTarget.value })} className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="email" placeholder='ایمیل' />
                    <input autoComplete="on" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, password: e.currentTarget.value })} className=" w-11/12 mb-4 rounded-md outline-none bg-[#35435e] px-4 py-2" type="password" placeholder="پسورد" />
                    <input className={` ${loading ? 'hidden' : ''} w-11/12  px-5 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-lg text-gray-800`} type="submit" value="ورود" />
                    <ThreeCircles
                        height="50"
                        width="50"
                        color="rgb(234,179,8)"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={loading}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor=""
                        innerCircleColor=""
                        middleCircleColor=""
                    />
                </form>
            </div>
        </div>
    )
}
export default SigninPage