import React from 'react'
import { useNavigate } from 'react-router-dom'
import Data from '../Database/DataBarca'
import 'bootstrap/dist/css/bootstrap.css';
import Addd from './Addd';
import { useState } from 'react';

export default function Phones() {
  const [Jeu,setJeu]= useState(Data)
  const ajout=(NewJeu)=>{
      const Update=[...Jeu,{...NewJeu,id:Jeu.length+1}]
      setJeu(Update)
  }
  return (
    <div className="d-flex flex-row">
               {Jeu.map((player)=>(
        <div class="card mb-3" key={player.id} style={{maxWidth: "540px"}}>
            
        <div class="row g-0">
          <div class="col-md-4">
            <img src={player.image} class="img-fluid rounded-start" alt="..."/>
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

<Addd onAddd={ajout}/>
    </div>
  )
}