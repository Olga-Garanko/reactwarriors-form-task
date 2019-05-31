import React from "react";
import Field from "./common/Field";
import SelectField from "./common/SelectField";
import countries from "../data/countries";
import cities from "../data/cities";
const getCitiesByCountry = countryId => {
		let newCities = [];
		Object.keys(cities).forEach(key => {
			if (Number(cities[key].country) === Number(countryId)) {
				newCities.push({
				id: key,
				name: cities[key].name
			});
		}
		});
		return newCities;
};
const ContactsStep = props => {
	const {
		state,
		onChange,
		onChangeCountry
	} = props;
	const optionsCitiesByCountry = getCitiesByCountry(state.country);
	return (
		<div className='step'>
			<Field
				id="email"
				labelText="Email"
				type="text"
				placeholder="Enter email"
				name="email"
				value={state.email}
				onChange={onChange}
				error={state.errors.email}
			/>
			<Field
				id="phone"
				labelText="Mobile"
				type="text"
				placeholder="Enter mobile (000) 000-0000"
				name="phone"
				value={state.phone}
				onChange={onChange}
				error={state.errors.phone}
			/>
			<SelectField
				className="form-control"
				id="country"
				labelText="Country"
				name="country"
				value={state.country}
				options={countries}
				onChange={onChangeCountry}
				error={state.errors.country}
			/>
			<SelectorField
				className="form-control"
				id="city"
				labelText="City"
				name="city"
				value={state.city}
				options={optionsCitiesByCountry}
				onChange={onChange}
				error={state.errors.city}
			/>
		</div>
	);
};

export default ContactsStep;
	