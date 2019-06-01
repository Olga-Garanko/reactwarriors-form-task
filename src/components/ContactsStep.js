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
		values,
		errors,
		onChange,
		onChangeCountry
	} = props;
	const optionsCitiesByCountry = getCitiesByCountry(values.country);
	return (
		<div className='step'>
			<Field
				id="email"
				labelText="Email"
				type="text"
				placeholder="Enter email"
				name="email"
				value={values.email}
				onChange={onChange}
				error={errors.email}
			/>
			<Field
				id="phone"
				labelText="Mobile"
				type="text"
				placeholder="Enter mobile (000) 000-0000"
				name="phone"
				value={values.phone}
				onChange={onChange}
				error={errors.phone}
			/>
			<SelectField
				className="form-control"
				id="country"
				labelText="Country"
				name="country"
				value={values.country}
				options={countries}
				onChange={onChangeCountry}
				error={errors.country}
			/>
			<SelectField
				className="form-control"
				id="city"
				labelText="City"
				name="city"
				value={values.city}
				options={optionsCitiesByCountry}
				onChange={onChange}
				error={errors.city}
			/>
		</div>
	);
};

export default ContactsStep;
	