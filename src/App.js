import React from 'react';
import { Totals } from './Components/totals/totals'
import './App.css';
import { Countries } from './Components/countries-component/countries-component';
import { SearchBox } from './Components/Search-Box/searchBox'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      apiCall: 'https://corona.lmao.ninja/countries',
      allCountries: [],
      searchValue:'',
      countryDetails: 'prince',
      flag: '',
      countryName: ''
    }
  }

  componentDidMount(){
    fetch(this.state.apiCall)
    .then(res => res.json())
    .then(data => this.setState({allCountries : data}))
    .catch(err => console.error(err))
  }

  showDetails = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    fetch(`https://corona.lmao.ninja/countries/${e.target.id}?strict=true`)
    .then(res => res.json())
    .then(data => this.setState({ countryDetails: data, flag:data.countryInfo.flag, countryName:data.country }, () => console.log(this.state.countryDetails)))
    .catch(err => console.log(err))
    
  }

  searchCountry = e => this.setState({searchValue: e.target.value})

  hideDetails = (e) => {
    e.target.parentElement.style.display = 'none'
    this.setState({countryDetails: 'prince'},console.log(this.state.countryDetails))
    
  }
  
  render(){
    const {allCountries, searchValue} = this.state
    const filteredCountries = allCountries.filter(item => item.country.toLowerCase().includes(searchValue.toLowerCase()))
    const showDiv = {
      display: this.state.countryDetails.country === this.state.countryName ? 'block' : 'none',
      color: 'black',
      position: 'absolute',
      top: '100px',
      left: '50%',
      width: '500px',
      height: '500px',
      backgroundColor: 'gray',
      marginLeft: '-250px',
      border: 'none',
      borderRadius: '7px'
    }

    const btnStyle ={
      position:'absolute',
      right:0,
      top:0,
      border: 'none',
      outline: 'none',
      borderRadius:'3px'
    }
    
    return (
      <div className="App">
        <h1>COVID-19 Stats</h1>
        <Totals />
        <SearchBox placeholder="Search Countries" searchCountry={this.searchCountry} />
        <Countries showDetails={this.showDetails} allCountries={filteredCountries} />
        <div style={showDiv}>
          <button style={btnStyle} onClick={this.hideDetails} >X</button>
          <h1>{this.state.countryDetails.country}</h1>
          <img src={this.state.flag} alt="" width='150px' height="80px" />
        </div>
      </div>
    ); 
  }
}



export default App;