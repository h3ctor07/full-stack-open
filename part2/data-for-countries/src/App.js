import { useState, useEffect } from "react";
import axios from "axios"

import Results from "./components/Results"
import Search from "./components/Search"

const App = () =>{
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState({})

  //countries API
  const countriesHook = () =>{
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        if (search !== ""){
          setCountries(response.data.filter(country => 
            country.name.common.toUpperCase().includes(search.toUpperCase())
          ))
        } else {
          setCountries([])
        }
      })
  }
  useEffect(countriesHook,[search])

  const weatherHook = () => {
    if (countries.length === 1){
      const [lat, long] = countries[0].latlng
      const API_KEY = process.env.REACT_APP_API_KEY

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
      axios
        .get(url)
        .then(response => {
          const data = response.data
          console.log(data);
          setWeather({
            name: countries[0].capital[0],
            temp: data.main.temp,
            wind: data.wind.speed,
            icon: data.weather[0].icon,
            desc: data.weather[0].description
          })
        })
    }
  }

  useEffect(weatherHook, [countries])

  console.log(weather);

  //EVENT HANDLERS
  const handleSearch = (event) => {
    setSearch(event.target.value)   
  }

  const handleButton = (event) => {
    const countryName = event.target.parentNode.querySelector('span').innerText;
    setSearch(countryName)
    
  }


  //Weather

  return(
    <div>
      <Search search={search} handleSearch={handleSearch}  />
      <Results 
        results={countries} 
        handleButton={handleButton}
        weather={weather}/>
    </div>
  )
}

export default App;
