import React from "react";
const Buttons = props => {
	const {
		activeStep,
		onPrev,
		onSubmit
	} = props;
	return (
		<div>
			<button
				type="button"
				className="btn btn-primary m-2"
				onClick={onPrev}
				disabled={!activeStep}
			>
				Previous
			</button>
			<button
				type="button"
				className="btn btn-primary m-2"
				onClick={onSubmit}
			>
				Next
			</button>
		</div>
	);
};

export default Buttons;
	
