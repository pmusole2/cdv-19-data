import React from 'react'
import {Country} from './render'
import './countries.styles.css'

export const Countries = ({allCountries, showDetails}) => (
    <div>
        {
           allCountries.map(item => <Country showDetails={showDetails} key={item.country} item={item} />)
        }
        
    </div>
)