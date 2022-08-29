import { useSession } from "next-auth/react"
import Image from "next/image"
import { useEffect } from "react"
import validator from "validator"

const Profile = () => {

    const {data,status} = useSession()

    useEffect(()=>{
        console.log(data);
    },[status])
    
    if (status == 'loading') return <p>loading</p>
    if (status == 'unauthenticated') return

    return (
        <div className="w-full mb-3 pt-4 px-2 flex justify-center items-center gap-x-2 ">
            <Image className=" rounded-full" src={'/avatar.png'} height={50} width={50} />
            <p>{data.user.name}</p>
            <p>{data.user.email}</p>
        </div>
    )
}
export default Profile
