import React from "react";
import CheckboxField from "./common/CheckboxField";
const AvatarStep = props => {
	const {
		values,
		errors,
		onCheck,
		onChangeAvatar
	} = props;
	return (
		<div className='step'>
			<div className='avatar'>
				{!(values.avatar) ? <img src='./images/default-avatar.59337bae.png' alt='' /> : <img src={values.avatar} alt='' />}
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
					{errors.avatar ? <div className="invalid-feedback">{errors.avatar}</div> : null}
				</div>
			</div>
			<CheckboxField
				className="form-check-input"
				type="checkbox"
				id="agreeConfidential"
				labelText="Confirm the processing of data"
				name="agreeConfidential"
				value={values.agreeConfidential}
				onChange={onCheck}
				checked={values.agreeConfidential}
				error={errors.agreeConfidential}
			/>
		</div>
	);
};

export default AvatarStep;
	