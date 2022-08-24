import Link from "next/link"
import Grows from "../../components/dashboard/growth/grows"
import SkillsGrows from '../../components/dashboard/growth/skillsGrow'


const Dashboard = () => {
    return (
        <div className="w-full bg-red-500 min-h-screen max-h-fit pt-6 flex flex-col justify-start items-center ">

            <Grows/>
            <SkillsGrows/>
            <SkillsGrows/>


        </div>
    )
}


export default Dashboard