import React from 'react'

export const SearchBox = ({searchCountry, placeholder}) => (
    <div>
        <input
            type="search"
            placeholder={placeholder}
            onChange={searchCountry} 
        />
    </div>
)