import React from 'react'
import { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './App.css'
import ListOfDestinations from './components/ListOfDestinations'
import AllFavorites from './components/AllFavorites'
import LoadingButton from '@mui/lab/LoadingButton';
import logo from './images/travel-logo.jpg'
import CountryForm from './components/CountryForm';

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
    <header style={{display: 'flex'}}>
      <div>
        <img src={logo} alt='Boat on a river' />
      </div>
      <div>
        <h1 className='applicationTitle'>A Travel Application</h1>
        <p>Welcome to my travel application. Here, you are provided with a list of possible travel destinations! You can add a destination to your favorites by clicking the favorite icon. If you are unable to find your destination (or just want to add it manually), you can do so with this handy text box.</p>
        <p>Feedback? I'd love to hear it! Here is my github repo link: <a href='https://github.com/shakelviabraden/travel-app'>Repo</a></p>
      </div>
    </header>
    <AllFavorites favorites={favorites} changeDelete={handleStateDelete}/>
     <CountryForm favorites={favorites} change={handleState} error={handleStateError}/>
     <ListOfDestinations allDestinations={allDestinations} change={handleState} error={handleStateError} favorites={favorites}/>
    </>
  )
};

export default App
