const userModel = require("../models/user.model");


module.exports.createUser = async({
	firstName, lastName, email, password
})=>{
	if(!firstName || !email || !password){
		throw new Error("All field are required");
	}
	const user = userModel.create({
		fullname: {
			firstName,
			lastName
		},
		email,
		password
	})

	return user;

}