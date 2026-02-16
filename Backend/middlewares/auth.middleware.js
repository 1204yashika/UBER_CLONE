const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports.authUser = async (req, res, next)=>{
	const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

	if(!token){
		return res.status(401).json({message: "Access denied. No token provided."})
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