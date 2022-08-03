
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import PlantContainer from './PlantContainer';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import NewPlantForm from './NewPlantForm';


function App() {
 const [plants, setPlants]=useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/plants')
      .then(res=>res.json())
      .then(plantsData => setPlants(plantsData))
  },[])
  console.log(plants)
  return (
    <div>
      <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/plantcontainer" element={<PlantContainer plants={plants}/>}/>
          <Route path="/NewPlantForm" element={<NewPlantForm setPlants={setPlants}/>}/>
          
        </Routes>

    </div>
    
  );
}

export default App;
