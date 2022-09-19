import { useState, useEffect } from "react";
import axios from "axios"

import Results from "./components/Results"
import Search from "./components/Search"

const App = () =>{
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const hook = () =>{
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        console.log(response.data)
        setData(response.data)
      })
  }
  useEffect(hook,[])
  // console.log(data.map(x => x.name.common.toUpperCase()));
  



  const handleSearch = (event) => {
    setSearch(event.target.value)   
  }

  const handleButton = (event) => {
    const countryName = event.target.parentNode.querySelector('span').innerText;
    setSearch(countryName)
    
  }

  const filteredCountries = search
    ? data.filter(x => x.name.common.toUpperCase().includes(search.toUpperCase()))
    : []

    console.log('filtered:', filteredCountries)

  return(
    <div>
      <Search search={search} handleSearch={handleSearch}  />
      <Results results={filteredCountries} handleButton={handleButton} />
    </div>
  )
}

export default App;
