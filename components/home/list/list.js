import ListItem from "./listItem";
import List from "@mui/material/List"
import DashboardIcon from '@mui/icons-material/Dashboard';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupIcon from '@mui/icons-material/Group';
import PestControlIcon from '@mui/icons-material/PestControl';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Profile from '../profile/profile'
import { useSession } from "next-auth/react";

const NavList = () => {
    const listData = [
      {
        id: 1,
        title: "داشبورد",
        path: "/dashboard",
        icon: DashboardIcon,
        btn: true,
        force: false,
      },
      {
        id: 2,
        title: "توانایی‌ها",
        path: "/skills",
        icon: BoltIcon,
        btn: true,
        force: false,
      },
      {
        id: 3,
        title: "منابع",
        path: "/sources",
        icon: GroupIcon,
        btn: true,
        force: false,
      },
      {
        id: 4,
        title: "موانع",
        path: "/obstacles",
        icon: PestControlIcon,
        btn: true,
        force: false,
      },
      {
        id: 5,
        title: "اهداف",
        path: "/targets",
        icon: ModeStandbyIcon,
        btn: true,
        force: false,
      },
      {
        id: 6,
        title: "حساب کاربری",
        path: "/auth",
        icon: ModeStandbyIcon,
        btn: true,
        force: true,
      },
      {
        id: 6,
        title: "ثبت نام",
        path: "/auth/signup",
        icon: ModeStandbyIcon,
        btn: false,
        force: true,
      },
      {
        id: 6,
        title: "ورود",
        path: "/auth/signin",
        icon: ModeStandbyIcon,
        btn: false,
        force: true,
      },
    ];


    const isBanned = useSelector(state => state.banuser.banned)
    const [selected, setSelected] = useState(1)
    const router = useRouter()
    const {status} = useSession()

    useEffect(()=>{
        if(router.route == '/') return 
        const currentItem = listData.find(el => el.path === router.route)
        setSelected(currentItem?.id)
    },[router])

    const setSelectedItem = (id, path) => {
        setSelected(id)
        router.push(path)
    }

    return(
        <div>

            <Profile/>

            <List
                sx={{'marginTop': '0px', 'paddingTop': '0px '}}
            >
                {
                    listData.map(el => {
                        if(!el.btn) return 
                        if(status=='unauthenticated') { 
                            return <ListItem key={el.id} disabled={el.force ? false : true } id={el.id} title={el.title} Icon={el.icon} path={el.path} selectedItem={selected} setSelectedItem={setSelectedItem} />
                        }
                        if(el.force) return 
                        return <ListItem key={el.id} id={el.id} title={el.title} Icon={el.icon} path={el.path} selectedItem={selected} setSelectedItem={setSelectedItem} />

                    })
                }
            </List>
        </div>

    )
}

export default NavList