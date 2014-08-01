function factorial(x) {
	if(x <= 1) return 1;
	return x * factorial(x-1);
}

function User(firstName,lastName,age){

	this.firstName = firstName;

	this.lastName = lastName;

	this.age = age;

};

function greetUser(u){

	return "hi there" + u.firstName + u.lastName;

};