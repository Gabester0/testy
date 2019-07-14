import React, {useState, useEffect} from 'react';
//import list from './List/List';
import '../App.css';
import Brewcard from './Brewcard';
import axios from 'axios';

function App() {

  const [brewNames, setbrewNames] = useState();

  const fetch = async()=>{
    const breweries = await axios.get('https://api.openbrewerydb.org/breweries?by_state=pennsylvania');
    setbrewNames(breweries.data);
  }

  useEffect(()=>{
    fetch();
  }, []);

  const renderList = ()=>{
    console.log(brewNames)
    return(
      <ul>
          {brewNames.map(item =>(
            <Brewcard
            key={item.id}
            name={item.name}
            address={item.street}
            city={item.city}
            postal_code={item.postal_code}
            state={item.state}
            country={item.country}
            phone={item.phone}
            website_url={item.website_url}/>
          ))}
      </ul> 
    )
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hey I made this sort of TOTALLY</p>
        { brewNames ? renderList(brewNames) : null}

      </header>
    </div>
  );
}

export default App;