import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.scss';

import Brewcard from './Brewcard';
import Controls from './Controls/Controls';

function App() {

  const endpoint = 'https://api.openbrewerydb.org/breweries?per_page=50&by_state=';

  const [brewNames, setbrewNames] = useState();
  const [selectedstate, setselectedstate] = useState('');
  const [page, setpage] = useState();

  const fetch = async(endpoint, selectedstate)=>{
    const breweries = await axios.get(endpoint + selectedstate);
    setbrewNames(breweries.data);
  }

  useEffect(()=>{
    setpage(1);
    fetch(endpoint, selectedstate);
  }, []);

  function handleChange(event){
    setselectedstate(event);
    fetch(endpoint, event);
    console.log(selectedstate)
  }

  // function nextPage(){
  //   let next = page + 1;
  //   setpage(next);
  //   fetch(endpoint, `${selectedstate}, &page=${next}`);
  //   console.log(page)
  // }
  // function prevPage(){
  //   const prev = page + 1;
  //   setpage(prev);
  //   console.log(page)
  // }

  const renderList = ()=>{
    console.log(brewNames,selectedstate, page)
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
        <h1>Good Brew</h1>

        { selectedstate !== '' ? (<h4>You are currently viewing page {page} of breweries in {selectedstate}</h4>) : (<h4>Please select a state</h4>)}

        <Controls
          state={selectedstate}
          value={selectedstate}
          handleChange={e=> handleChange(e.target.value)}
        //  next={()=> nextPage()}
        //  prev={()=> prevPage()}
          />

          { brewNames ? renderList(brewNames) : null}

      </header>
    </div>
  );
}

export default App;