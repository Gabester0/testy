import React from 'react';

const list = props=>{

	const states = ['alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware','district_of_columbia','florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new_hampshire','new_jersey','new_mexico','new_york','north_carolina','north_dakota','ohio','oklahoma','oregon','pennsylvania','puerto_rico','rhode_island','south_carolina','south_dakota','tennessee','texas','utah','vermont','virginia','washington','west_virginia','wisconsin','wyoming'];

	return (
		<form>
			<fieldset>
				<label>{props.selected}</label>
				<br/>
				<select id="state" value={props.state} onChange={props.handleChange}>
					{states.map(state=> (<option key={state} value={state}>{state}</option>) )}
				</select>
				<div className="row">
					<button className="flexItem flexItem__btn" onClick={props.prev} disabled={props.prevDisabled}>&#171;</button>
					<p className="flexItem">{`page ${props.pageCount}`}</p>
					<button className="flexItem flexItem__btn" onClick={props.next} disabled={props.nextDisabled}>&#187;</button>
				</div>
			</fieldset>
		</form>
	)
}

export default list;