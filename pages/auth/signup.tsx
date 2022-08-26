
import { Slide, SlideProps, SnackbarOrigin } from "@mui/material";
import React, { useState } from "react"
import SnackHandler from "./SnackHandler";


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

const Signup = () => {

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

    const {name, username, email, password} = user

    const formHandler = (e: React.FormEvent) => {
        e.preventDefault()
        if (username.length > 20) return fireError('یوزرنیم باید کمتر از 20 کاراکتر باشد')
        if (!username.match(/^[a-z][a-z0-9]*$/i)) return fireError('یوزرنیم باید ترکیبی از عدد و حروف انگلیسی باشد و با عدد شروع نشود')
        if (name.length > 30) return fireError('نام باید کوتاه تر از 30 کاراکتر باشد')
        if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) return fireError(' پسورد باید بین 6 تا 6 کاراکتر و شامل حروف و عددانگلیسی و حروف ویژه($#%) باشد')

        return fireSuccess('با موفقیت انجام شد')

    }

    const stateChanger = (value) => {
        setState(value)
    }



    return(
        <div className="w-full h-screen flex justify-center items-center">

            <SnackHandler state={state} setState={stateChanger} />

            <div className=" py-12 px-14 bg-[#1f283a] rounded-xl flex justify-center items-center">
                <form onSubmit={formHandler} className=" gap-y-1 flex flex-col justify-center items-center">
                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUser({...user, name: e.currentTarget.value})} className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="text" placeholder="نام و نام خانوادگی" />
                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUser({...user, email: e.currentTarget.value})} className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="email" placeholder='ایمیل' />
                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUser({...user, username: e.currentTarget.value})} className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="text" placeholder="یوزر نیم" />
                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setUser({...user, password: e.currentTarget.value})} className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="password" placeholder="پسورد" />
                    <input className=" w-11/12 mt-4 px-5 py-2 bg-yellow-500 rounded-lg text-gray-800" type="submit" value="ثبت نام" />
                </form>
            </div>
        </div>
    )
}
export default Signup