import React from "react";
import Field from "./common/Field";
import RadioboxField from "./common/RadioboxField";
const BasicStep = props => {
	const {
		state,
		onChange,
		onRadio
	} = props;
	return (
		<div className='step'>
			<Field
				id="username"
				labelText="Firstname"
				type="text"
				placeholder="Enter firstname"
				name="username"
				value={state.username}
				onChange={onChange}
				error={state.errors.username}
			/>
			<Field
				id="userSurname"
				labelText="Lastname"
				type="text"
				placeholder="Enter lastname"
				name="userSurname"
				value={state.userSurname}
				onChange={onChange}
				error={state.errors.userSurname}
			/>
			<Field
				id="password"
				labelText="Password"
				type="password"
				placeholder="Enter password"
				name="password"
				value={state.password}
				onChange={onChange}
				error={state.errors.password}
			/>
			<Field
				id="repeatPassword"
				labelText="Repeat password"
				type="password"
				placeholder="Repeat password"
				name="repeatPassword"
				value={state.repeatPassword}
				onChange={onChange}
				error={state.errors.repeatPassword}
			/>
			<RadioboxField
				className="form-check-input"
				id="gender"
				labelText="Gender"
				name="gender"
				selectedValue={state.gender}
				onRadio={onRadio}
				options={state.genders}
			/>
		</div>
	);
};

export default BasicStep;
	