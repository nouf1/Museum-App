import React from 'react'
import { Link, Button } from 'react-router-dom'
import './entro'

export default function Entro() {
    return (
      <div className="entro">
        
        <Link to={'/museumList' }>
            <h3>I am here </h3>
        </Link>

      </div>
    )
  }
