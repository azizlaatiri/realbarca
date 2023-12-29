import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'
export default function Addd({onAddd}) {
    const[NewJeu,setNewJeu]=useState({
        name:"",
        image:"",
        age:""
    })
    const ajout=()=>{
        if(NewJeu.name.trim()==='' || NewJeu.image.trim()==='' || NewJeu.age.trim()===''){
            Swal.fire({
                icon:"error",
                title:"oops",
                text:"please fill in all fields"
            })
            return
        }
        onAddd(NewJeu)
        setNewJeu({
            name:"",
            image:"",
            age:""
        })
        Swal.fire({
            icon:'success',
            title:'player added',
            showConfirmButton: false,
            timer:1500
        })
    }
  return (
    <div>
      <form>
      <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={NewJeu.name}
            onChange={(e) => setNewJeu({ ...NewJeu, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Image
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={NewJeu.image}
            onChange={(e) => setNewJeu({ ...NewJeu, image: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Age
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={NewJeu.age}
            onChange={(e) => setNewJeu({ ...NewJeu, age: e.target.value })}
          />
          <button className="btn btn-primary" type="button" onClick={ajout}>
          Add Player
        </button>

        </div>
      </form>
    </div>
  )
}