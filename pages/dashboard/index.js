import Link from "next/link"


const Dashboard = () => {
    return (
        <div>
            <p>dashboard</p>
            <Link href={'skills'}>
                <button>skills</button>
            </Link>
        </div>
    )
}


export default Dashboard