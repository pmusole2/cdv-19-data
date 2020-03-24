import React from 'react'

export const Country = (props) => (
    <div>
        <ul>
            <a href="#home" id={props.item.country} onClick={props.showDetails}>
                {props.item.country} : Cases - {props.item.cases} || Deaths - {props.item.deaths} || Recovered - {props.item.recovered}
            </a>
        </ul>
    </div>
)