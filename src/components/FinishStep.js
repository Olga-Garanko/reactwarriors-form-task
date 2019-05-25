import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";
const FinishStep = props => {
	const {
		state,
		onReset
	} = props;
	return (
		<div className='step'>
			<div className='avatar'>
				<img src={state.avatar} alt='' />
			</div>
			<div>{state.username} {state.userSurname}</div>
			<div>Email: {state.email}</div>
			<div>Mobile: {state.phone}</div>
			<div>Location: 
				{state.country && countries.find(item => +item.id === +state.country).name} , 
				{state.city && cities[state.city] && cities[state.city].name}
			</div>
			<button
				type="button"
				className="btn btn-primary w-100"
				onClick={onReset}
			>
				Reset
			</button>	
		</div>
	);
};

export default FinishStep;
	