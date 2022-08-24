import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


const ListItem = ({id,title,Icon, selectedItem, setSelected}) => {
    return(
        <ListItemButton
            selected={selectedItem === id}
            onClick={()=>setSelected(id)}
        >

            <ListItemIcon>
                <Icon htmlColor={selectedItem === id ? 'gold' : '#d1d5db'}/>
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{style:{'fontFamily': 'anjoman', color: selectedItem === id ? 'gold' : ''}}} primary={title} />

            
        </ListItemButton>
    )
}

export default ListItem