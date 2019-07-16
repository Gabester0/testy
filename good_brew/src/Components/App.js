import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.scss';

import Brewcard from './Brewcard';
import Controls from './Controls/Controls';

function App() {

  const endpoint = 'https://api.openbrewerydb.org/breweries?by_state=';

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
    setpage(1);
    fetch(endpoint, event);
  }

  function nextPage(s){
    const next = page + 1;
    const curSelectedState = s;
    setpage(next);
    setselectedstate(curSelectedState);
    fetch(endpoint, `${curSelectedState}&page=${next}`);

  }
  function prevPage(s){
    const prev = page - 1;
    const curSelectedState = s;
    setpage(prev);
    setselectedstate(curSelectedState);
    fetch(endpoint, `${curSelectedState}&page=${prev}`);
  }

  const renderList = ()=>{
//  console.log(brewNames, selectedstate)
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

        {/* selectedstate !== '' ? (<h6>You are currently viewing page {page} of breweries in {selectedstate}</h6>) : (<h4>Please select a state</h4>)*/}

        <Controls
          selected={selectedstate ? selectedstate : "Choose a state"}
          state={selectedstate}
          value={selectedstate}
          handleChange={e=> handleChange(e.target.value)}
          nextDisabled={brewNames ? brewNames.length !== 20 : false}
          prevDisabled={page > 1 ? false : true}
          pageCount={page}
          next={(event)=> {
            event.preventDefault();
            const s = selectedstate;
            nextPage(s);
          }}
          prev={(event)=> {
            event.preventDefault();
            const s = selectedstate;
            prevPage(s)
          }}
          />

          { brewNames ? renderList(brewNames) : null}

      </header>
    </div>
  );
}

export default App;