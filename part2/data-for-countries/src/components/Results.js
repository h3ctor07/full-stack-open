const Results = ({results, handleButton}) => {
    if (results.length === 0){
        return (<p>Type to filter</p>)
    } else if (results.length === 1){
      const country = results[0]
      return (
        <div>
          <h1>{country.name.common}</h1>
          <p>capital: {country.capital[0]}</p>
          <p>area: {country.area}</p>
          <h2>Languages:</h2>
          <ul>
            {
              Object.values(country.languages).map(lang =>
                <li key={lang}>{lang}</li>
              )
            }
          </ul>
          <img src={results[0].flags.png} alt={`flag of results`}/>
        </div>
      )
    } else if (results.length <= 10){
      return (
        <ul>
          {results.map(x => 
          <li key={x.name.common}><span>{x.name.common}</span><button onClick={handleButton}>show</button></li>
          )}
        </ul>
      )
    } else if(results.length > 10){
      return (
        <p>Too many matches, specify another filter</p>
      )
    }
  }

  export default Results