
import data from './data';
import React from 'react';
import Tours from './components/Tours';
import './App.css';
import  { useState } from 'react';

function App() {
  
  const[tours,setTours]=useState(data)

  function removeTour(id)
  {
   const newTours = tours.filter(key => key.id!== id);
   setTours(newTours);
  }
  if(tours.length === 0)
  {
    return(
      <div className='refresh'>
         <h2>No tours left</h2>
         <button className='btn-white bgcolor' onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }


  return (
    <div>
       
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;

































































