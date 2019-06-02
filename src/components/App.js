import React from "react";
import StepsList from "./StepsList";
import BasicStep from "./BasicStep";
import ContactsStep from "./ContactsStep";
import AvatarStep from "./AvatarStep";
import FinishStep from "./FinishStep";
import formValidator from "../services/validator";
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
		const newValues = {
			...this.state.values,
			[event.target.name]: event.target.value
		};
		this.setState({
			values: newValues
		});
	};

	onChangeCountry = event => {
		const newValues = {
			...this.state.values,
			[event.target.name]: event.target.value,
			city: 0
		};
		this.setState({
			values: newValues,
		});
	};

	onCheck = event => {
		const newValues = {
			...this.state.values,
			[event.target.name]: event.target.checked
		};
		this.setState({
			values: newValues
		});
	};

	onRadio = event => {
		const newValues = {
			...this.state.values,
			gender: event.target.value
		};
		this.setState({
			values: newValues
		});
	};
	onChangeAvatar = event => {
		const reader = new FileReader();
		reader.onload = event => {
			const newValues = {
				...this.state.values,
				avatar: event.target.result
			};
			this.setState({
				values: newValues
			});
		};
		reader.readAsDataURL(event.target.files[0]);
		console.log(this.state.avatar)
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
		let errors = formValidator(this.state.values, this.state.activeStep);
		

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
					{ this.state.activeStep === 0 && <BasicStep values={this.state.values} errors={this.state.errors} onChange={this.onChange} onRadio={this.onRadio} genders={this.state.genders} /> }
					{ this.state.activeStep === 1 && <ContactsStep values={this.state.values} errors={this.state.errors}  onChange={this.onChange} onChangeCountry={this.onChangeCountry} /> }
					{ this.state.activeStep === 2 && <AvatarStep values={this.state.values} errors={this.state.errors} onCheck={this.onCheck} onChangeAvatar={this.onChangeAvatar} /> }
					{ this.state.activeStep === 3 && <FinishStep  values={this.state.values} onReset={this.onReset} /> }
					{ !(this.state.activeStep === (this.state.steps.length - 1)) && <Buttons activeStep={this.activeStep} onPrev={this.onPrev}  onSubmit={this.onSubmit} /> }

				</form>
			</div>
		);
	}
}
