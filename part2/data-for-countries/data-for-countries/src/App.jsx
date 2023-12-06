import { useState, useEffect } from 'react'
import './App.css'
import { Search, Countries, Country } from './components'
import { getAll, getWeather } from './requests'

function App() {
  const [newSearch, setSearch] = useState("")
  const [countries, setCountries] = useState([])
  const [matching, setMatching] = useState([])
  const [showOne, setShowOne] = useState(true)
  const [weather, setWeather] = useState(null)

  const allCountries = () => {
    getAll()
      .then(data => {
        setCountries(data)
      })
  }
  useEffect(allCountries, [])

  useEffect(() => {
    console.log("running effect")
    if (showOne && matching.length === 1) {
      const country = matching[0]
      const lat = country.latlng[0]
      const lon = country.latlng[1]
      getWeather({ lat, lon })
        .then(data => { 
          const temp = data.main.temp
          const wind = data.wind.speed 
          const icon = data.weather[0].icon
          setWeather({ temp, wind, icon })
        })
    }
  }, [showOne, matching])

  const handleSearch = (event) => {
    const searchValue = event.target.value
    setSearch(searchValue)

    let matching = []

    for (const country of countries) {
      if ((country.name.common.toLowerCase()).includes(searchValue)) {
        matching = matching.concat(country)
      }
    }
    if (matching.length <= 10 && matching.length > 1) {
      setMatching(matching)
      setShowOne(false)
    } else if (matching.length === 1) {
      setMatching(matching)
      setShowOne(true)
    } else {
      setMatching([])
      setShowOne(false)
    }
  }

  const handleShow = (country) => {
    let matching = []
    setShowOne(true)
    matching = matching.concat(country)
    setMatching(matching)
  }


  return (
    <>
      <h1>Countries</h1>
      <div>
        <Search value={newSearch} onChange={handleSearch} />
      </div>
      <ul>
        {showOne ?
          matching.map(country => <Country
            country={country}
            key={country.name.official}
            weather={weather} 
            />) :
          matching.map(country => <Countries
            name={country.name.common}
            key={country.name.official}
            onClick={() => { handleShow(country) }} />)
        }
      </ul>
    </>
  )
}

export default App
