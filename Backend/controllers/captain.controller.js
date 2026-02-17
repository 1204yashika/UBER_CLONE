const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service')
const {validationResult}  = require('express-validator')

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
	
	const captain = await captainService.createCaptain({
	firstName, 
	lastName,
	email,
	password,
	color,
	plate,
	capacity,
	vehicleType
	})

	const token = captain.generateAuthToken();

	res.status(201).json({token, captain})
}