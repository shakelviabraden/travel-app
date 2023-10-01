import React from "react";
import { useState } from "react"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { addCountry } from '../store';




function AddToFavoritesButton({ countryName, error }) {
    const dispatch = useDispatch()
    const favorites2 = useSelector((state) => {
        return state.favorites
    })

    const handleOnClick = () => {
        const value = countryName

        const alreadyFavorited = favorites2.includes(value); 
            if (alreadyFavorited) {
              error(true);
            } else {
              error(false);
              dispatch(addCountry(value));
            }
    } 

    return (
        <button type='submit' onClick={handleOnClick}>Add to Favorites</button>
    )
};

function CountryForm({ error }) {
    const [countryName, setCountryName] = useState([]);

    const handleInputChange = (e) => {
        const { value } = e.target;

        setCountryName(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <>
            <p>Want to add a country manually? Do it here!</p>
            <form onSubmit={handleSubmit}>
                Country Name: <input
                    type='text'
                    name='country'
                    value={countryName}
                    onChange={handleInputChange} />
                <AddToFavoritesButton countryName={countryName} error={error} />
            </form>
        </>
    )
}

export default CountryForm