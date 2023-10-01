import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import './App.css'
import ListOfDestinations from './components/ListOfDestinations'
import AllFavorites from './components/AllFavorites'
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
        <img src={plane__background} alt='A view from a window of the right side of a plane. A sunset and clouds surround its wing.' />
      </div>

    <header className='total-intro'>
      <div className='title-box'>
        <h1 className='application-title'>Find Your</h1>
        <h1 className='application-title'>Ultimate Vacation</h1>
      </div>
      <section className='about'>
        <h2 className='initial'>About</h2>
        <h2 className='after-hover'>How it works:</h2>
        <p>Welcome to my travel application! Here, you are provided with a list of possible travel destinations. You'll have no problem picking your next vacay spot. You can add a destination to your favorites by clicking the plane next to each. If you are unable to find your destination (or just want to add it manually), you can do so with the text box.</p>
        <p className='more'>Feedback? I'd love to hear it! Here is my github repo link: <a href='https://github.com/shakelviabraden/travel-app'>Repo</a></p>
      </section>
    </header>

    <section id='grid-container'>
      <div className='sidebar'id='1'>
          <AllFavorites />
      </div>

      <div className='destinations' id='2'>
        <CountryForm error={handleStateError} />
        <ListOfDestinations error={handleStateError} />
      </div>
    </section>
    </>
  )
};

export default App
