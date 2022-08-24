import Link from "next/link"
import SourcesGrows from "../../components/dashboard/growth/sources"
import SkillsGrows from '../../components/dashboard/growth/skillsGrow'
import Obstacles from '../../components/dashboard/growth/Obstacles'



const Dashboard = () => {
    return (
        <div className="w-full gap-x-5 flex justify-center items-start min-h-screen pt-6  ">
            
            <SkillsGrows/>
            <SourcesGrows/>
            <Obstacles/>

        </div>
    )
}


export default Dashboard