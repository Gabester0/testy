import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.scss';

import Brewcard from './Brewcard';
import Controls from './Controls';


function App() {

	const endpoint = 'https://api.openbrewerydb.org/breweries?by_state=';

	const [brewNames, setbrewNames] = useState();
	const [selectedstate, setselectedstate] = useState('pennsylvania');
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

	function setdetails(event){
		const id = event.target.id.slice(11, 15);
		const type = event.target.id.slice(4, 11);
		if(type === "general"){
			document.getElementById(`general${id}`).style.display = 'none';
			document.getElementById(`details${id}`).style.display = 'block';
		} 
		if(type === "details"){
			document.getElementById(`details${id}`).style.display = 'none';
			document.getElementById(`general${id}`).style.display = 'block';
		}
	}

	const renderList = ()=>{
		return(
			<div className="card-grid">
				{brewNames.map(item =>{
					return (
					<Brewcard
						key={item.id}
						id={item.id}
						type={item.brewery_type}
						name={item.name}
						address={item.street}
						city={item.city}
						postal_code={item.postal_code}
						state={item.state}
						country={item.country}
						phone={item.phone}
						website_url={item.website_url}
						lat={item.latitude}
						lng={item.longitude}
						click={(event)=> setdetails(event)}
						/>
					)
				})}
			</div>
		)
	};

	return (
		<div className="App">
			<header className="App-header">
				<div className="header">
					<h1>Good Brew</h1>
				</div>

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
				<section>
					{ brewNames ? renderList(brewNames) : null}
				</section>
				<footer>
					<p>&copy; 2019 Gabriel Eipper</p>
					<p>Made with Create React App, Open Brewery DB, Google Maps React, and SASS</p>
				</footer>
			</header>
		</div>
	);
}

export default App;