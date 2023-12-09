import React, { useState } from 'react'
import Pets from './Pets';
import TransitionsModal from './Popup';


const Home = () => {
   const [selectedPet ,setSelectedPet] = useState(null);

   const handleCardClick = (pet) => {
    setSelectedPet(pet);
   };
       

  return (
    <div>
       <h1>List of Pets</h1>       
      <ul>
       <Pets onCardClick={handleCardClick}/>
       {selectedPet && <TransitionsModal pet = {selectedPet}/>}
        
      </ul>
    </div>
  )
}

export default Home;
