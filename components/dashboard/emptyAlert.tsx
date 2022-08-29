import Link from "next/link"


const EmptyAlert = () => {
    return(
        <div className=" w-5/6 py-6 gap-y-4 flex flex-col justify-center items-center rounded-md mx-auto mt-12 bg-elementbg">
            <p>شما هیچ توانایی،منبع،مانع ای اضافه نکردید</p>
            <Link href={'/skills'}>
                <button className=" bg-yellow-500 hover:bg-yellow-500/70 duration-300 text-gray-800 px-4 py-1 rounded-md">اضافه کردن</button>
            </Link>
            
        </div>
    )
}
export default EmptyAlert