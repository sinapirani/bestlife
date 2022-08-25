import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


const ListItem = ({disabled, id,title,Icon, path, selectedItem, setSelectedItem}) => {
    return(
        <ListItemButton
            
            disabled={disabled}
            selected={selectedItem === id}
            onClick={()=>setSelectedItem(id, path)}
        >

            <ListItemIcon>
                <Icon htmlColor={selectedItem === id ? 'gold' : '#d1d5db'}/>
            </ListItemIcon>
            <p>{title}</p>

            
        </ListItemButton>
    )
}

export default ListItem