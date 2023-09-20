import React from "react";
import { useState } from "react"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';



function AddToFavoritesButton({ countryName, change, favorites, error }) {
    const handleOnClick = () => {
        const value = countryName.country
        const alreadyFavorited = favorites.includes(value); 
            if (alreadyFavorited) {
              error(true);
            } else {
              error(false);
              change(value);
            }
    } 

    return (
        <button type='submit' onClick={handleOnClick}>Add to Favorites</button>
    )
};

function FavoritesSection({ change, favorites, error }) {
    const [countryName, setCountryName] = useState({
        country: ''
    });

    const handleInputChange = (e) => {
        const { value, name } = e.target;

        setCountryName({ [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <>
            <h1>Favorite Destinations</h1>
            <form onSubmit={handleSubmit}>
                Country Name: <input
                    type='text'
                    name='country'
                    value={countryName.country}
                    onChange={handleInputChange} />
                <AddToFavoritesButton countryName={countryName} change={change} favorites={favorites} error={error} />
            </form>
            <p>Add Favorites Here</p>
        </>
    )
}

export default FavoritesSection