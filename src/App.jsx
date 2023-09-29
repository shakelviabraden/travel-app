import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import './App.css'
import ListOfDestinations from './components/ListOfDestinations'
import AllFavorites from './components/AllFavorites'
import LoadingButton from '@mui/lab/LoadingButton';
import plane__background from './images/plane__background.jpeg';
import CountryForm from './components/CountryForm';




function App() {
 const [ error, setError ] = useState(null);

  // i have began to create this state in my redux store
  // const handleStateDelete = (value) => {
  //   {setFavorites(favorites.filter((place) => value != place))}
  // }
  
  const handleStateError = (value) => {
    {setError(value)}
  };


  if (error) {
    return (<Alert severity="error" onClose={() => {setError(false)}}>Whoops! It looks like you've already added this country. Add another.</Alert>)
  }

  return (
    <>
     <div className='bg'>
        <img src={plane__background} alt='Boat on a river' />
      </div>

    <header className='intro'>
      <div className='titleBox'>
        <h1 className='applicationTitle'>A Travel Application</h1>
      </div>
    </header>

    <section>
      <p>Welcome to my travel application. Here, you are provided with a list of possible travel destinations! You can add a destination to your favorites by clicking the favorite icon. If you are unable to find your destination (or just want to add it manually), you can do so with this handy text box.</p>
      <p>Feedback? I'd love to hear it! Here is my github repo link: <a href='https://github.com/shakelviabraden/travel-app'>Repo</a></p>
    </section>
    
      <div className='components'>
        <AllFavorites />
        <CountryForm error={handleStateError} />
        <ListOfDestinations error={handleStateError} />
      </div>
    </>
  )
};

export default App
