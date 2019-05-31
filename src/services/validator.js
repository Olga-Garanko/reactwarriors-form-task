const formValidator = (values, activeStep) =>  {
	let nameRegExp	= /^[a-zа-яієїґ'\s]{2,30}$/i,
		emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
		phoneRegExp = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
	switch (activeStep) {
	case 0: 
		if (this.state.values.username.length < 3 && !nameRegExp.test(this.state.values.username)) {
			errors.username = "Must be 3 characters or more, only letters";
		}
		if (this.state.values.userSurname.length < 3 && !nameRegExp.test(this.state.values.userSurname)) {
			errors.userSurname = "Must be 3 characters or more";
		}
		if (this.state.values.password < 3) {
			errors.password = "Must be 3 characters or more";
		}
		if (this.state.values.password !== this.state.values.repeatPassword) {
			errors.repeatPassword = "Must be equal password";
		}
		break;
	case 1: 
		if (!emailRegExp.test(this.state.values.email)) {
			errors.email = "Must be symbol @";
		}
		if (!phoneRegExp.test(this.state.values.phone)) {
			errors.phone = "Must be only digitals and +";
		}
		if (this.state.values.country === "0") {
			errors.country = "Choose country";
		}
		if (this.state.values.city === "0") {
			errors.city = "Choose city";
		}
		break;
	case 2:
		if (!this.state.values.agreeConfidential) {
			errors.agreeConfidential = "You should agree";
		}
		if (!this.state.values.avatar) {
			errors.avatar = "Required";
		}
		break;
	}
}
