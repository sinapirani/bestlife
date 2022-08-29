

const EmptyAlert = () => {
    return(
        <div className=" w-5/6 py-6 gap-y-4 flex flex-col justify-center items-center rounded-md mx-auto mt-12 bg-elementbg">
            <p>شما هیچ توانایی،منبع،مانع ای اضافه نکردید</p>
            <button className=" bg-yellow-500 text-gray-800 px-4 py-1 rounded-md">اضافه کردن</button>
        </div>
    )
}
export default EmptyAlert