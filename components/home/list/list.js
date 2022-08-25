import ListItem from "./listItem";
import List from "@mui/material/List"
import DashboardIcon from '@mui/icons-material/Dashboard';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupIcon from '@mui/icons-material/Group';
import PestControlIcon from '@mui/icons-material/PestControl';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


const NavList = () => {
    const listData = [
       {id: 1, title: 'داشبورد' ,path:'/dashboard', icon: DashboardIcon},
       {id: 2, title: 'توانایی‌ها', path: '/skills', icon: BoltIcon},
       {id: 3, title: 'منابع', path: '/sources', icon: GroupIcon},
       {id: 4, title: 'موانع', path: '/obstacles', icon: PestControlIcon},
       {id: 5, title: 'اهداف', path: '/targets', icon: ModeStandbyIcon},
       {id: 6, title: 'حساب کاربری', path: '/auth', icon: ModeStandbyIcon},
    ]

    const [selected, setSelected] = useState(1)
    const router = useRouter()

    useEffect(()=>{
        if(router.route != '/'){
            console.log(router.route)
            console.log('selected', selected);
            const currentItem = listData.find(el => el.path === router.route)
            console.log('current item', currentItem);
            setSelected(currentItem.id)
        }
    },[])
    const setSelectedItem = (id, path) => {
        setSelected(id)
        router.push(path)
    }

    return(
        <List>
            {
                listData.map(el => {
                    return <ListItem id={el.id} title={el.title} Icon={el.icon} path={el.path} selectedItem={selected} setSelectedItem={setSelectedItem} />
                })
            }
        </List>
    )
}

export default NavList