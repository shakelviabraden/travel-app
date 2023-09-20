import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function AllFavorites({ favorites, changeDelete}) {


    function DeleteButton({place, changeDelete}) {
        return (
            <IconButton aria-label="delete" size="small" onClick={()=> changeDelete(place)}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        );
    }

    return (
        <>
           <h1>Favorite Destinations</h1>
            <p>Your favorite countries will display here.</p>
            <br />
        <Grid container spacing={2}>
            {favorites.map((place, index) => {
                return (<Grid item xs={2} key={index}>
                    <div>
                        <p>{index + 1}.{place}
                        <DeleteButton place={place} index={index} changeDelete={changeDelete}/>
                        </p>
                    </div>
                </Grid>
                );
            })}
            </Grid>
        </>


    )
};

export default AllFavorites