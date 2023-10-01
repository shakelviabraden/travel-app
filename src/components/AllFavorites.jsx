import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { removeCountry } from '../store';
import './AllFavorites.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#125BCC',

      },
    },
  });
  
  const Emoji = (props) => {
    return (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
    )
  };


function AllFavorites() {
    const favorites2 = useSelector((state) => {
        return state.favorites
      })
    
    const dispatch = useDispatch()

    function DeleteButton(place) {
    
        const handleOnClick = () => {
           dispatch(removeCountry(place.place))
        }
        return (
            <ThemeProvider theme={theme}>
            <IconButton aria-label="delete" size="medium" color="primary" onClick={handleOnClick}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            </ThemeProvider>
        );
    }

    return (
        <>
           <h1 className='title'>Favorite Destinations</h1>
           <div className='description'>
            <p>Your favorite spots. Do I see a vacay coming up? <Emoji label={'eyes'} symbol={'👀'} />
            </p>
            <p>Check back for more soon. Wouldn't it be cool if you see it on a map? <Emoji label={'map pin'} symbol={'📍'} /> </p>
            </div>
            <br />
        <Grid container spacing={2} className='grid-container'>
            {favorites2.map((place, index) => {
                return (<Grid item xs="auto" key={index} className='favorites'>
                    <div>
                        <p>{index + 1}.{place}
                        <DeleteButton place={place} index={index} />
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