import React from 'react'
import Players from '../Database/DataReal'
import 'bootstrap/dist/css/bootstrap.css';
import Add from './Add';
import { useState } from 'react';
export default function JoueursReal() {
    const [Joueurs,setPlayers]= useState(Players)
    const handleAdd=(NewPlayer)=>{
        const updateYear=[...Joueurs,{...NewPlayer,id:Joueurs.length+1}]
        setPlayers(updateYear)
    }
  return (
    <div className="d-flex flex-row">
         {Joueurs.map((player)=>(
        <div class="card mb-3" key={player.id} style={{maxWidth: "540px"}}>

            
        <div class="row g-0">
          <div class="col-md-4">
            <img src={player.image} style={{ width: "138%", height: "auto" }}/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{player.name}</h5>
              <h5>{player.age}</h5>
              <p class="card-text"></p>
              
              <p class="card-text"><small class="text-body-secondary"></small></p>
            </div>
          </div>
        </div>

      </div>
      ))
   
    }
<Add onAdd={handleAdd}/>
    </div>


  )
}
