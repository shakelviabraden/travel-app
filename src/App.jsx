import React from 'react'
import { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './App.css'
import ListOfDestinations from './components/ListOfDestinations'
import FavoritesSection from './components/FavoritesSection'
import AllFavorites from './components/AllFavorites'
import LoadingButton from '@mui/lab/LoadingButton';

function App() {
  const [ allDestinations, setAllDestinations ] = useState([])
  const [loading, setLoading] = useState(true)
  const [ favorites, setFavorites ] = useState([]);
  const [ error, setError ] = useState(null);

  const handleState = (value) => { 
    {setFavorites([...favorites, value])}
    };

  const handleStateDelete = (value) => {
    {setFavorites(favorites.filter((place) => value != place))}
  }
  
  const handleStateError = (value) => {
    {setError(value)}
  };

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const data = await fetch('https://restcountries.com/v3.1/all')
        const response = await data.json()
        setAllDestinations(response)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getDestinations();
  }, [])

  if (loading) {
    return (
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
    )
}


  if (error) {
    return (<Alert severity="error" onClose={() => {setError(false)}}>Whoops! It looks like you've already added this country. Add another.</Alert>)
  }

  return (
    <>
     <FavoritesSection favorites={favorites} change={handleState} error={handleStateError}/>
     <AllFavorites favorites={favorites} changeDelete={handleStateDelete}/>
     <ListOfDestinations allDestinations={allDestinations} change={handleState} error={handleStateError} favorites={favorites}/>
    </>
  )
};

export default App
