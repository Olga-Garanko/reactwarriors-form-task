import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";
const FinishStep = props => {
	const {
		values,
		onReset
	} = props;
	return (
		<div className='step'>
			<div className='avatar'>
				<img src={values.avatar} alt='' />
			</div>
			<div>{values.username} {values.userSurname}</div>
			<div>Email: {values.email}</div>
			<div>Mobile: {values.phone}</div>
			<div>Location: 
				{values.country && countries.find(item => +item.id === +values.country).name} , 
				{values.city && cities[values.city] && cities[values.city].name}
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
	