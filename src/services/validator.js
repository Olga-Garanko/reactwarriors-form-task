const formValidator = (values, activeStep) =>  {
	let errors = {};
	let nameRegExp	= /^[a-zа-яієїґ'\s]{2,30}$/i,
		emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
		phoneRegExp = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
	switch (activeStep) {
	case 0: 
		if (values.username.length < 3 && !nameRegExp.test(values.username)) {
			errors.username = "Must be 3 characters or more, only letters";
		}
		if (values.userSurname.length < 3 && !nameRegExp.test(values.userSurname)) {
			errors.userSurname = "Must be 3 characters or more";
		}
		if (values.password < 3) {
			errors.password = "Must be 3 characters or more";
		}
		if (values.password !== values.repeatPassword) {
			errors.repeatPassword = "Must be equal password";
		}
		break;
	case 1: 
		if (!emailRegExp.test(values.email)) {
			errors.email = "Must be symbol @";
		}
		if (!phoneRegExp.test(values.phone)) {
			errors.phone = "Must be only digitals and +";
		}
		if (values.country === "0") {
			errors.country = "Choose country";
		}
		if (values.city === "0") {
			errors.city = "Choose city";
		}
		break;
	case 2:
		if (!values.agreeConfidential) {
			errors.agreeConfidential = "You should agree";
		}
		if (!values.avatar) {
			errors.avatar = "Required";
		}
		break;
	}
	return errors;
}
export default formValidator