import React, {useState, useEffect} from 'react';
import axios from 'axios'
function App() {
  const [countries, setCountries] = useState([])

  //just playing with the axios promise and the REST countries API 

  
  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, []);

  const displayCountries = () => {
    return (
      countries.map((countrie) =>  <p key={countrie.name}>{countrie.name}</p>)
    )
  }


  console.log(countries);

  return (
    <div >
      <h1>My Countries Info Page</h1>
      {displayCountries()}
    </div>
  );
}

export default App;
