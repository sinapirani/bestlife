import { ListItemButton, ListItemText } from "@mui/material"
import List from "@mui/material/List"
import DashboardIcon from '@mui/icons-material/Dashboard';
import BoltIcon from '@mui/icons-material/Bolt';
import GroupIcon from '@mui/icons-material/Group';
import PestControlIcon from '@mui/icons-material/PestControl';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';


const NavList = () => {
    const listData = [
       {id: 1, text: 'داشبورد', DashboardIcon},
       {id: 2, text: 'توانایی‌ها', BoltIcon},
       {id: 3, text: 'منابع', GroupIcon},
       {id: 4, text: 'موانع', PestControlIcon},
       {id: 5, text: 'اهداف', ModeStandbyIcon}
    ]

    return(
        <List>
            
        </List>
    )
}

export default NavList