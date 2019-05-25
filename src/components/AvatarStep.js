import React from "react";
import Field from "./Field";
import Check from "./Check";
const AvatarStep = props => {
	const {
		state,
		onCheck,
		onChangeAvatar
	} = props;
	return (
		<div className='step'>
			<div className='avatar'>
				{!(state.avatar) ? <img src='./images/default-avatar.59337bae.png' alt='' /> : <img src={state.avatar} alt='' />}
			</div>
			<div className="form-group">
				<div className="custom-file">
					<input
						type="file"
						className="custom-file-input"
						id="avatar"
						name="avatar"
						onChange={onChangeAvatar}
					/>
					<label className="custom-file-label" htmlFor="avatar">Choose file</label>
					{state.errors.avatar ? <div className="invalid-feedback">{state.errors.avatar}</div> : null}
				</div>
			</div>
			<Check
				className="form-check-input"
				type="checkbox"
				id="agreeConfidential"
				labelText="Confirm the processing of data"
				name="agreeConfidential"
				value={state.agreeConfidential}
				onChange={onCheck}
				checked={state.agreeConfidential}
				error={state.errors.agreeConfidential}
			/>
		</div>
	);
};

export default AvatarStep;
	