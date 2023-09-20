import * as React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



function FavoriteButton({ destination, change , error, favorites}) {
    const handleOnClick = () => {
        const value = destination.name.common
        const alreadyFavorited = favorites.includes(value); 
            if (alreadyFavorited) {
              error(true);
            } else {
              error(false);
              change(value);
            }
    } 
    
     return (<Stack direction="row" spacing={2}>
         <Button variant="outlined" onClick={handleOnClick}> Favorite </Button> 
         </Stack>)
 };
 


function ListOfDestinations({ allDestinations, change, error, favorites}) {

    return (
        <div>
            <h1>All Destinations</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    {allDestinations.map((destination, index) => {
                        return (<Grid item xs={2} key={index}>
                            <div>
                                <h5>{destination.name.common}</h5>
                                <FavoriteButton destination={destination} change = {change} error={error} favorites={favorites}/>
                            </div>
                        </Grid>)
                    })}
                </Grid>
            </Box>
        </div>);
}

export default ListOfDestinations