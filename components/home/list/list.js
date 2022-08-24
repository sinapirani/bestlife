import ListItem from "./listItem";
import List from "@mui/material/List"
import DashboardIcon from '@mui/icons-material/Dashboard';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupIcon from '@mui/icons-material/Group';
import PestControlIcon from '@mui/icons-material/PestControl';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';


const NavList = () => {
    const listData = [
       {id: 1, title: 'داشبورد', icon: DashboardIcon},
       {id: 2, title: 'توانایی‌ها', icon: BoltIcon},
       {id: 3, title: 'منابع', icon: GroupIcon},
       {id: 4, title: 'موانع', icon: PestControlIcon},
       {id: 5, title: 'اهداف', icon: ModeStandbyIcon}
    ]


    return(
        <List>
            {
                listData.map(el => {
                    return <ListItem id={el.id} title={el.title} Icon={el.icon} />
                })
            }
        </List>
    )
}

export default NavList