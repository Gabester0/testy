import React from 'react';
//import classes from './Controls.css';

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
        <div className="row">
          <button className="oneThird" onClick={props.prev} disabled={props.prevDisabled}>&lArr;</button>
          <p className="oneThird">{props.pageCount}</p>
          <button className="oneThird" onClick={props.next} disabled={props.nextDisabled}>&rArr;</button>
        </div>
      </fieldset>
    </form>
  )
} 

export default list;