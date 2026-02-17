const captainModel = require("../models/captain.model");
const blacklistModel = require("../models/blaklistToken.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports.authUser = async (req, res, next)=>{
	const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

	if(!token){
		return res.status(401).json({message: "Access denied. No token provided."})
	}

	const isBlacklisted = await blacklistModel.findOne({token});
	
	if(isBlacklisted){
		return res.status(401).json({message: "Unauthorised"})
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await userModel.findById(decoded._id);

		if(!user){
			return res.status(401).json({message: "Invalid token. User not found."})
		}

		req.user = user;
		return next();
	} catch (error) {
		res.status(400).json({message: "Unauthorized. Invalid token."})
	}
}

module.exports.authCaptain = async (req, res, next)=>{
	const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

	if(!token){
		return res.status(401).json({message: "Access denied. No token provided."})
	}

	const isBlacklisted = await blacklistModel.findOne({token});
	
	if(isBlacklisted){
		return res.status(401).json({message: "Unauthorised"})
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const captain = await captainModel.findById(decoded._id);

		if(!captain){
			return res.status(401).json({message: "Invalid token. Captain not found."})
		}

		req.captain = captain;
		return next();
	} catch (error) {
		res.status(400).json({message: "Unauthorized. Invalid token."})
	}
}