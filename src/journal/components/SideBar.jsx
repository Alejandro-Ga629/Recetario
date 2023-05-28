import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';


export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: {sm: drawerWidth}, flexShrink: { sm: 0 } }}
    
    >
        <Drawer
            variant='permanent' //temporary si lo mostramos de manera condicional
            open
            sx={{
                display: { sx: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        
        >
            <Toolbar>
                <Typography variant='h5' noWrap component='div'>
                    Alejandro Gallegos
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text }/>
                                    <ListItemText secondary={'akshfdsflr3hf23jrewebf3hdqwjbf3h  sdewiugqwlnf3iuh'}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>

                    ))
                }

            </List>

        </Drawer>

    </Box>
  )
}
