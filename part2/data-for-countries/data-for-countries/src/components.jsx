
const Search = ({ value, onChange }) => {
    return (
        <>
            Find countries: <input value={value}
                onChange={onChange} />
        </>
    )
}

const Countries = ({ name, onClick }) => {
    return (
        <>
            <li className="countrylist"> {name} <Button onClick={onClick} /></li>
        </>
    )
}

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            show
        </button>
    )
}

const Country = ({ country, weather }) => {
    console.log(weather)
    return (
        <>
            <h1>{country.name.common}</h1>
            <ul>
                Capital: {country.capital}
            </ul>
            <ul>
                Area: {country.area}
            </ul>
            <ul>
                Population: {country.population}
            </ul>
            <ul>
                Currency: {Object.values(country.currencies)[0].name}
            </ul>
            <ul>
                Continent: {country.continents}
            </ul>
            <ul>
                Languages: {Object.values(country.languages).map(lan => <Languages language={lan} key={lan} />)}
            </ul>
            <ul className="flag">
                {country.flag}
            </ul>
            {weather === null ? <h2>Weather not now</h2> :
                <>
                    <h2>Weather right now</h2>
                    <ul>
                        Temperature: {weather.temp}
                    </ul>
                    <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} />
                    <ul>
                        Wind: {weather.wind}
                    </ul>
                </>
            }
        </>
    )
}

const Languages = ({ language }) => {
    return (
        <li>
            {language}
        </li>
    )
}

export { Search, Countries, Country }