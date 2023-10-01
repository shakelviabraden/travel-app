import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { addCountry } from '../store'
import FlightIcon from '@mui/icons-material/Flight';
import { useGetAllDestinationsQuery } from '../store';


function FavoriteButton ({destination, error}) {
    const favorites2 = useSelector((state) => {
        return state.favorites
      })
    const dispatch = useDispatch()


    const handleOnClick = () => {
        const value = destination.name.common

        const alreadyFavorited = favorites2.includes(value); 
            if (alreadyFavorited) {
                error(true);
            } else {
                error(false);
                dispatch(addCountry(value));
            }
    } 

    return (
        <IconButton aria-label="flight" size="small" onClick={handleOnClick}>
            <FlightIcon fontSize="large" />
        </IconButton>
    )
}

function ListOfDestinations({error}) {
    const { data, isLoading } = useGetAllDestinationsQuery();

    
  if (isLoading) {
    return (
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
    )}
    
    return (
        <div>
            <h1>All Destinations</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    {data.map((destination, index) => {
                        return (<Grid item xs={2} key={index}>
                            <div>
                                <h5>{destination.name.common}</h5>
                                <FavoriteButton destination={destination} error={error}/>
                            </div>
                        </Grid>)
                    })}
                </Grid>
            </Box>
        </div>);
}

export default ListOfDestinations