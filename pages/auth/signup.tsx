
import { Slide, SlideProps, SnackbarOrigin } from "@mui/material";
import React, { useState } from "react"
import ErorrSnack from "./errorSnack";


interface stateInterface extends SnackbarOrigin {
    open: boolean,
    message: string
}
type TransitionProps = Omit<SlideProps, 'direction'>;
const transition = (props: TransitionProps) => {
    return <Slide {...props} direction='up' />
}

const Signup = () => {

    const [state, setState] = useState<stateInterface>({
        message: '',
        open: false,
        horizontal: 'left',
        vertical: 'bottom'
    })
    const { open, vertical, horizontal } = state

    const fireError = (text:string) => {
        setState({ ...state, open: true, message: text })
    }

    const formHandler = (e: React.FormEvent) => {
        e.preventDefault()
        fireError('email is invalid')
    }

    const stateChanger = (value) => {
        setState(value)
    }



    return(
        <div className="w-full h-screen flex justify-center items-center">

            <ErorrSnack state={state} setState={stateChanger} />

            <div className=" py-12 px-14 bg-[#1f283a] rounded-xl flex justify-center items-center">
                <form onSubmit={formHandler} className=" gap-y-1 flex flex-col justify-center items-center">
                    <input className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="text" placeholder="نام و نام خانوادگی" />
                    <input className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="email" placeholder='ایمیل' />
                    <input className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="text" placeholder="یوزر نیم" />
                    <input className=" w-11/12 rounded-md outline-none bg-[#35435e] px-4 py-2" type="password" placeholder="پسورد" />
                    <input className=" w-11/12 mt-4 px-5 py-2 bg-yellow-500 rounded-lg text-gray-800" type="submit" value="ثبت نام" />
                </form>
            </div>
        </div>
    )
}
export default Signup