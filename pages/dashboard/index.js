import Link from "next/link"
import Grows from "../../components/dashboard/growth/grows"


const Dashboard = () => {
    return (
        <div className="w-full min-h-screen pt-6 flex justify-start items-center flex-col">

            <Grows/>

        </div>
    )
}


export default Dashboard