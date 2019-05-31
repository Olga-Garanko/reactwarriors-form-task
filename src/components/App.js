import React from "react";
import Field from "./Field";
import CheckboxField from "./common/CheckboxField";
import RadioboxField from "./common/RadioboxField";
import SelectField from "./common/SelectField";
import StepsList from "./StepsList";
import BasicStep from "./BasicStep";
import ContactsStep from "./ContactsStep";
import AvatarStep from "./AvatarStep";
import FinishStep from "./FinishStep";
import validator from "./services/validator";
import Buttons from "./common/Buttons";
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
			values: {
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
			},
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
			values: {
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
			},
			errors: {}
		});
	};

	onSubmit = event => {
		event.preventDefault();
		const errors = {};
		formValidator(this.state.values);

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
					{ this.state.activeStep === 0 && <BasicStep values={this.values} errors={this.errors} onChange={this.onChange} onRadio={this.onRadio} /> }
					{ this.state.activeStep === 1 && <ContactsStep values={this.values} errors={this.errors}  onChange={this.onChange} onChangeCountry={this.onChangeCountry} /> }
					{ this.state.activeStep === 2 && <AvatarStep values={this.values} errors={this.errors} onCheck={this.onCheck} onChangeAvatar={this.onChangeAvatar} /> }
					{ this.state.activeStep === 3 && <FinishStep  values={this.values} onReset={this.onReset} /> }
					{ !(this.state.activeStep === (this.state.steps.length - 1)) && <Buttons activeStep={this.activeStep} onPrev={this.onPrev}  onSubmit={this.onSubmit} /> }

				</form>
			</div>
		);
	}
}
