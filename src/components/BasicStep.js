import React from "react";
import Field from "./common/Field";
import RadioboxField from "./common/RadioboxField";
const BasicStep = props => {
	const {
		values,
		errors,
		onChange,
		onRadio,
		genders
	} = props;
	return (
		<div className='step'>
			<Field
				id="username"
				labelText="Firstname"
				type="text"
				placeholder="Enter firstname"
				name="username"
				value={values.username}
				onChange={onChange}
				error={errors.username}
			/>
			<Field
				id="userSurname"
				labelText="Lastname"
				type="text"
				placeholder="Enter lastname"
				name="userSurname"
				value={values.userSurname}
				onChange={onChange}
				error={errors.userSurname}
			/>
			<Field
				id="password"
				labelText="Password"
				type="password"
				placeholder="Enter password"
				name="password"
				value={values.password}
				onChange={onChange}
				error={errors.password}
			/>
			<Field
				id="repeatPassword"
				labelText="Repeat password"
				type="password"
				placeholder="Repeat password"
				name="repeatPassword"
				value={values.repeatPassword}
				onChange={onChange}
				error={errors.repeatPassword}
			/>
			<RadioboxField
				className="form-check-input"
				id="gender"
				labelText="Gender"
				name="gender"
				selectedValue={values.gender}
				options = {genders}
				onRadio={onRadio}
				options={genders}
			/>
		</div>
	);
};

export default BasicStep;
	