import React from "react";
import StepsList from "./StepsList";
import Field from "./Field";
import Check from "./Check";
import Radio from "./Radio";
import Selector from "./Selector";
import BasicStep from "./BasicStep";
import ContactsStep from "./ContactsStep";
import AvatarStep from "./AvatarStep";
import FinishStep from "./FinishStep";
import Buttons from "./Buttons";
export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			activeStep: 0,
			steps: [
				{id: 0,	name: 'Basic'},
				{id: 1,	name: 'Contacts'},
				{id: 2,	name: 'Avatar'},
				{id: 3, name: 'Finish'},
			],
			username: "",
			userSurname: "",
			email: "",
			phone: "",
			password: "",
			repeatPassword: "",
			agreeConfidential: true,
			gender: "male",
			country: 0,
			city: 0,
			avatar: "",
			errors: {
				username: false,
				userSurname: false,
				email: false,
				phone: false,
				password: false,
				repeatPassword: false,
				agreeConfidential: false,
			},
			genders: [{
					id: "male",
					value: "male",
					labelText: "Male"
				},
				{
					id: "female",
					value: "female",
					labelText: "Female"
				},
			],
		};
	};
	
	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onChangeCountry = event => {
		this.setState({
			[event.target.name]: event.target.value,
			city: 0
		});
	};

	onCheck = event => {
		this.setState({
			[event.target.name]: event.target.checked
		});
	};

	onRadio = event => {
		this.setState({
			gender: event.target.value
		});
		console.log(this.state.gender);
	};

	onChangeAvatar = event => {
		const reader = new FileReader();
		reader.onload = event => {
			this.setState({
				avatar: event.target.result
			});
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	onPrev = () => {
		if (this.state.activeStep > 0) this.setState({activeStep: this.state.activeStep - 1})
	};

	onReset = () => {
		this.setState({
			activeStep: 0,
			username: "",
			userSurname: "",
			email: "",
			phone: "",
			password: "",
			repeatPassword: "",
			agreeConfidential: true,
			gender: "male",
			country: "0",
			city: "0",
			avatar: "",
			errors: {}
		});
	};

	onSubmit = event => {
		event.preventDefault();
		const errors = {};
			let nameRegExp	= /^[a-zа-яієїґ'\s]{2,30}$/i,
				emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
				phoneRegExp = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
		switch (this.state.activeStep) {
			case 0: 
				if (this.state.username.length < 3 && !nameRegExp.test(this.state.username)) {
					errors.username = "Must be 3 characters or more, only letters";
				}
				if (this.state.userSurname.length < 3 && !nameRegExp.test(this.state.userSurname)) {
					errors.userSurname = "Must be 3 characters or more";
				}
				if (this.state.password < 3) {
					errors.password = "Must be 3 characters or more";
				}
				if (this.state.password !== this.state.repeatPassword) {
					errors.repeatPassword = "Must be equal password";
				}
				break;
			case 1: 
				if (!emailRegExp.test(this.state.email)) {
					errors.email = "Must be symbol @";
				}
				if (!phoneRegExp.test(this.state.phone)) {
					errors.phone = "Must be only digitals and +";
				}
				if (this.state.country === "0") {
					errors.country = "Choose country";
				}
				if (this.state.city === "0") {
					errors.city = "Choose city";
				}
				break;
			case 2:
				if (!this.state.agreeConfidential) {
					errors.agreeConfidential = "You should agree";
				}
				if (!this.state.avatar) {
					errors.avatar = "Required";
				}
				break;
			}
			if (Object.keys(errors).length > 0) {
				this.setState({
					errors: errors
				});
			} else {
				this.setState({
					errors: {}
			});
			console.log("submit", this.state);
			if (this.state.activeStep < this.state.steps.length) this.setState({activeStep: this.state.activeStep + 1})
		}
	};

	render() {

		return (
			<div className="form-container card">
				<StepsList steps={this.state.steps} activeStep={this.state.activeStep} />
				<form className="form card-body">
					{ this.state.activeStep === 0 && <BasicStep state={this.state} onChange={this.onChange} onRadio={this.onRadio} /> }
					{ this.state.activeStep === 1 && <ContactsStep state={this.state} onChange={this.onChange} onChangeCountry={this.onChangeCountry} /> }
					{ this.state.activeStep === 2 && <AvatarStep state={this.state} onCheck={this.onCheck} onChangeAvatar={this.onChangeAvatar} /> }
					{ this.state.activeStep === 3 && <FinishStep state={this.state} onReset={this.onReset} /> }
					{ !(this.state.activeStep === (this.state.steps.length - 1)) && <Buttons activeStep={this.activeStep} onPrev={this.onPrev}  onSubmit={this.onSubmit} /> }

				</form>
			</div>
		);
	}
}
