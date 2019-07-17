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

    const general = (
        <div
            onClick={props.click}
            id={props.id} 
            className="card">
            <div className="card-general">
                <h3>{props.name}</h3>
                <p>{props.address}<br/>
                    {props.city} {props.postal_code}, {props.state}<br/>
                    {props.country}<br/>
                    {props.phone}
                </p>
                <a href={props.website_url} rel="noopener noreferrer" target="_blank">
                    {truncate(props.website_url)}
                </a>
            </div>
        </div>
)

    const detail = (
        <div 
            onClick={props.click}
            id={props.id} 
            className="card">
            <div className="card-general">
                <Map
                	lat={props.lat}
                    lng={props.lng}
                />
            </div>
	    </div>
    )
      

    return (props.detail ? detail : general)
}

export default Brewcard;