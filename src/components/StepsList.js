import React from "react";

const StepsList = props => {
	const {
		steps,
		activeStep
	} = props;
	return (
		<ul className="steps-list">
			{
				steps.map(item => {
					return <li key={item.id} className={`steps-list__item ${activeStep === item.id ? 'active' : ''}`}>{item.name}</li>
				})
			}
		</ul>
	);
};

export default StepsList;
	