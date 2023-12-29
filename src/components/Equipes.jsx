import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/equipes.css'
export default function Home() {
    const nav=useNavigate()
  return (
    <div>
      <div className="d-flex flex-row">
      <nav onClick={()=>{nav('/JoueursReal')}}>Real Madrid</nav>
      <nav onClick={()=>{nav('/JoueursBarca')}}>Fc Barcelone</nav>
      </div>
    </div>
  )
}
