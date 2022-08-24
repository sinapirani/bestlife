

const ListItem = ({id,text,icon}) => {
    return(
        <ListItemButton>

            <ListItemText>
                {text}
            </ListItemText>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            
        </ListItemButton>
    )
}

export default ListItem