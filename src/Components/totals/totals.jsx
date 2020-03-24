import React from 'react'
import './totals.css'

export class Totals extends React.Component {
    constructor(){
        super()
        this.state = {
            baseUrl: 'https://corona.lmao.ninja/all',
            countries: []
        }
    }

    componentDidMount(){
        fetch('https://corona.lmao.ninja/all')
        .then(res => res.json())
        .then(data => (this.setState({countries: data})))
        .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <div className="totals total-cases">
                    <h2>Total Recorded Cases</h2>
                    <h3>{this.state.countries.cases}</h3>
                </div>
                <div className="totals total-deaths">
                    <h2>Total Deaths</h2>
                    <h3>{this.state.countries.deaths}</h3>
                </div>
                <div className="totals total-deaths">
                    <h2>Total Recovered</h2>
                    <h3>{this.state.countries.recovered}</h3>
                </div>
            </div>
        )
    }
}