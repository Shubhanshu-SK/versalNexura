import { useState } from 'react'
import css from './dontMiss.module.css'
import React from 'react'

function DontMiss() {
    
  return (
    <div className={css.dontMiss}>
        <div>
            <h1>Don't Miss Out!</h1>
        </div>
        <p>
            be the first to know about our latest events. Join the Nexura community today!
        </p>
        <div className={`containEvent ${css.containEvent}`}>

        </div>
        <div>
            
            Innovation Meets Expertise In Our Range Of Services
        </div>
    </div>
  )
}

export default DontMiss