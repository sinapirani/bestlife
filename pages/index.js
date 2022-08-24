import { HomeHead } from '../components/home/head/head'
import {useSession} from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Home() {
  const {data,status} = useSession()
  const router = useRouter()

  useEffect(()=>{
    if(status == 'unauthenticated')
      router.push('/dashboard')
  })

  return (
    <div className=' w-full h-screen bg-[#111620]'>

    </div>
  )
}
