import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


const ListItem = ({disabled, id,title,Icon, path, selectedItem, setSelectedItem}) => {
    return(
        <ListItemButton
            sx={{'cursor': disabled ? 'not-allowed' : ''}}
            disabled={disabled}
            selected={selectedItem === id}
            onClick={()=>setSelectedItem(id, path)}
        >

            <ListItemIcon>
                <Icon htmlColor={selectedItem === id ? 'gold' : '#d1d5db'}/>
            </ListItemIcon>
            <p className={selectedItem == id ? 'text-yellow-500' : ''}>{title}</p>

            
        </ListItemButton>
    )
}

export default ListItem