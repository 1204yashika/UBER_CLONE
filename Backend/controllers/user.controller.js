const userModel = require('../models/user.model');
const userService = require('../services/user.service')
const {validationResult}  = require('express-validator')
const blacklistModel = require('../models/blaklistToken.model');

module.exports.registerUser = async (req, res, next)=>{
	console.log("req.body", req.body);
	const  errors = validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array()})
	}

	const {fullname: {firstName, lastName} = {}, email, password} = req.body;

	const isUserExist = await userModel.findOne({email});

	if(isUserExist){
		return res.status(400).json({message: "User with this email already exist"})
	}

	const hashedPassword = await userModel.hashedPassword(password);

	const user = await userService.createUser({
		firstName, 
		lastName,
		email,
		password: hashedPassword
	})
	console.log("user", user);
	const token = user.generateAuthToken();

	res.status(201).json({token, user})
}


module.exports.loginUser = async (req, res, next)=>{
	const  errors = validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array()})
	}

	const {email, password} = req.body;

	const user = await userModel.findOne({email}).select("+password");

	if(!user){
		return res.status(401).json({message: "Invalid email or password"})
	}

	const isPasswordValid = await user.comparePassword(password);

	if(!isPasswordValid){
		return res.status(401).json({message: "Invalid email or password"})
	}

	const token = user.generateAuthToken();

	res.cookie('token', token);

	res.status(200).json({token, user})
}

module.exports.getUserProfile = async (req, res, next)=>{
	res.status(200).json({user: req.user})
}

module.exports.logoutUser = async (req, res, next)=>{
	res.clearCookie('token');
	const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');
	await blacklistModel.create({token})
	res.status(200).json({message: "Logged out successfully"})
}