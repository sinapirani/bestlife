
import { Slide, SlideProps, SnackbarOrigin } from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
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
    name: string,
    username: string,
    email: string,
    password: string
}

const SignupPage = () => {

    const router = useRouter()
    const [state, setState] = useState<stateInterface>({
        message: '',
        open: false,
        horizontal: 'left',
        vertical: 'bottom',
        bg: '',
        color: ''
    })
    const { open, vertical, horizontal } = state

    const fireError = (text:string,) => {
        setState({ ...state, open: true, message: text, bg: 'red', color: 'white' })
    }
    const fireSuccess = (text: string,) => {
        setState({ ...state, open: true, message: text, bg: 'green', color: 'white' })
    }



    const [user, setUser] = useState<userInterface>({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)
    const {name, username, email, password} = user

    const formHandler = (e: React.FormEvent) => {
        
        e.preventDefault()
        if (username.length > 20 || username.length < 5) return fireError('یوزرنیم باید بین 5 تا 20 کاراکتر باشد')
        if (!username.match(/^[a-z][a-z0-9]*$/i)) return fireError('یوزرنیم باید ترکیبی از عدد و حروف انگلیسی باشد و با عدد شروع نشود')
        if (name.length > 30 || name.length < 2) return fireError('نام باید بین 2 تا 30 کاراکتر باشد')
        if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) return fireError(' پسورد باید بین 6 تا 6 کاراکتر و شامل حروف و عددانگلیسی و حروف ویژه($#%) باشد')
        
        setLoading(true)
        const data = {name, username, email, password}
        axios.post('http://localhost:3000/api/signup',data)
        .then(res => {
            setLoading(false)
            if (res.status == 204) fireSuccess('ثبت نام شما با موفقیت انجام شد. بصورت خودکار به صفحه ورود منتقل خواهید شد')
            setTimeout(() => {
                router.push('/auth/signin')
            }, 4000);
        })
        .catch((e) => {
            setLoading(false)
            if (e.response.status == 410) return fireError('این ایمیل از قبل موجود است')
            if (e.response.status == 409) return fireError('این یوزرنیم از قبل موجود است')
            return fireError('خطایی رخ داد')
        })
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
    return(
        <div className="w-full h-screen flex justify-center items-center">

            <SnackHandler state={state} setState={stateChanger} />

            <div className=" py-12 px-14 bg-[#1f283a] rounded-xl flex justify-center items-center">
                <form onSubmit={formHandler} className=" gap-y-1 flex flex-col justify-center items-center">
                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUser({...user, name: e.currentTarget.value})} className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="text" placeholder="نام و نام خانوادگی" />
                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUser({...user, email: e.currentTarget.value})} className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="email" placeholder='ایمیل' />
                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUser({...user, username: e.currentTarget.value})} className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="text" placeholder="یوزر نیم" />
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...user, password: e.currentTarget.value })} className=" w-11/12 mb-4 rounded-md outline-none bg-[#35435e] px-4 py-2" type="password" placeholder="پسورد" />
                    <input className={` ${loading ? 'hidden' : ''} w-11/12  px-5 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-lg text-gray-800`} type="submit" value="ثبت نام" />
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
export default SignupPage