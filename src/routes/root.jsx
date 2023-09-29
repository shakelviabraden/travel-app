import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { Outlet,Link } from "react-router-dom";


export default function NavigationBar() {
    return (
        <div>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={24}>
            <BottomNavigation
            showLabels className='navigation-bar'>
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />

                {
                    /*i want to link here, but when i wrap this component the link for router, it makes the label go away. Not sure how to fix it. Cant pass Link as onClick event*/
                }
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />}/>
                
                <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />

            </BottomNavigation>
        </Paper>
        <Outlet />
        </div>
    )
};