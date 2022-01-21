import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function FetchPlanets() {
  const [planets, setPlanets] = useState([])
  
let navigate =useNavigate()
  useEffect(() =>{
    axios
      .get('https://swapi.dev/api/planets/')
      .then(response => {
          console.log(response)
          setPlanets(response.data.results)
            
    })
      .catch(error => {
          console.log(error);
      })
    },([]))

               return(
               <div className="planets">
                 <button onClick={()=> {navigate('/Starships')}}>Ships</button>
                   {planets.map(planet=> <li key={planet.name}><h2>{planet.name} </h2> 
                        <div>Population:  {planet.population}</div>
                        <div>Climate:  {planet.climate}</div>
                        <div>Terrain:  {planet.terrain}</div><br/></li>) }
                        
               </div>
           )        
    
} 

export default FetchPlanets

