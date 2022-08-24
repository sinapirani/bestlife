import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


const ListItem = ({id,title,Icon, selectedItem}) => {
    return(
        <ListItemButton>

            <ListItemIcon>
                <Icon htmlColor='gold'/>
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{style:{'fontFamily': 'anjoman', color:'gold'}}} primary={title} />

            
        </ListItemButton>
    )
}

export default ListItem