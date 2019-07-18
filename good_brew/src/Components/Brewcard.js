import React from 'react';
import Map from './Map';

function Brewcard(props){

    function truncate(string){
        if(string.length <= 46){
            return string;
        } else {
            const arr = string.split("");
            return (arr.splice(0, 44).join("") + '...');
        }
    }

    return (

        <div className="card">
            <div id={`general${props.id}`} className="card-general">
                <span className="type">{props.type}</span>
                <button id={`btn-general${props.id}`} className="info-button" onClick={props.click}>More Info</button>
                <h2>{props.name}</h2>
                <p className="brewery-contact">
                    <span className="label">Address:</span>
                    {props.address}<br/>
                    {props.city} {props.postal_code}, {props.state}<br/>
                    {props.country}<br/>
                    <span className="label">Phone:</span>
                    {props.phone}
                    <br/>
                    <a href={props.website_url} rel="noopener noreferrer" target="_blank">
                        {truncate(props.website_url)}
                    </a>
                </p>
            </div>

            <div id={`details${props.id}`} style={{display: 'none'}} className="card-general">
                <span className="type">{props.type}</span>
                <button id={`btn-details${props.id}`} className="info-button" onClick={props.click}>Back</button>
                <h2>{props.name}</h2>
                <Map
                    id={`details${props.id}`}
                	lat={props.lat}
                    lng={props.lng}
                />
            </div>
	    </div>
        )
      }

export default Brewcard;