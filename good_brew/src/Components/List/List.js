import React from 'react';

// const axios = require('axios');
  
// const breweries = async () => {
//   try {
//     return await axios.get('https://api.openbrewerydb.org/breweries?by_state=pennsylvania')
//   }
//   catch (err){
//     console.error(err)
//   }
// }

// const paBreweries = async () => {
//   const paBrew = await breweries()
//   if(paBrew){
//     return paBrew.data;
//   }
// }

// const data = paBreweries();

const list = props=>{
  return (
      <ul>
          {props.listEl}
      </ul>
  )
} 

export default list;