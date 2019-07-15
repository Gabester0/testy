import React from 'react';

const brewcard = (props) => (
        <div id={props.id}>
            <h3>{props.name}</h3>
                <p>{props.address}<br/>
                {props.city} {props.postal_code}, {props.state}<br/>
                {props.country}<br/>
                {props.phone}</p>
                <a href={props.website_url} rel="noopener noreferrer" target="_blank">{props.website_url}</a>
        </div>
)

export default brewcard;