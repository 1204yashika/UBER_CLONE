const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service')
const {validationResult}  = require('express-validator')
const blacklistModel = require('../models/blaklistToken.model');

module.exports.registerCaptain = async (req, res, next)=>{
	const  errors = validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array()})
	}
	const {
		fullname: {firstName, lastName} = {}, 
		email, 
		password, 
		vehicle: {color, plate, capacity, vehicleType}} = req.body;

	const isCaptainExist = await captainModel.findOne({email});

	if(isCaptainExist){
		return res.status(400).json({message: "Captain with this email already exist"})
	}
	
	const hashedPassword = await captainModel.hashedPassword(password);
	const captain = await captainService.createCaptain({
	firstName, 
	lastName,
	email,
	password: hashedPassword,
	color,
	plate,
	capacity,
	vehicleType
	})

	const token = captain.generateAuthToken();

	res.status(201).json({token, captain})
}

module.exports.loginCaptain = async (req, res, next)=>{
	const  errors = validationResult(req);
	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array()})
	}

	const {email, password} = req.body;

	const captain = await captainModel.findOne({email}).select("+password");

	if(!captain){
		return res.status(401).json({message: "Invalid email or password"})
	}

	const isPasswordValid = await captain.comparePassword(password);

	if(!isPasswordValid){
		return res.status(401).json({message: "Invalid email or password"})
	}

	const token = captain.generateAuthToken();

	res.cookie('token', token);

	res.status(200).json({token, captain})
}

module.exports.getCaptainProfile = async (req, res, next)=>{
	res.status(200).json({captain: req.captain})
}

module.exports.logoutCaptain = async (req, res, next)=>{
	res.clearCookie('token');
	const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');
	await blacklistModel.create({token})
	res.status(200).json({message: "Logged out successfully"})
} 
