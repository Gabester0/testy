import React from 'react';

const list = props=>{

  const states = ['alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware','district_of_columbia','florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new_hampshire','new_jersey','new_mexico','new_york','north_carolina','north_dakota','ohio','oklahoma','oregon','pennsylvania','puerto_rico','rhode_island','south_carolina','south_dakota','tennessee','texas','utah','vermont','virginia','washington','west_virginia','wisconsin','wyoming'];

  return (
    <form>
      <fieldset>
        <label>Choose a State</label>
        <br/>
        <select id="state" value={props.state} onChange={props.handleChange}>
          {states.map(state=> (<option key={state} value={state}>{state}</option>) )}
        </select>
      </fieldset>
      <fieldset>
        <button onClick={props.next} disabled={props.nextDisabled}>Next page</button>
        <button onClick={props.prev} disabled={props.prevDisabled}>Previous page</button>
      </fieldset>
    </form>
  )
} 

export default list;