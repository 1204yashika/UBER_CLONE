const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
	fullname: {
		firstName: {
			type: String,
			required: true,
			minlength: [3, 'First name must be 3 character or more']
		},
		lastName: {
			type: String,
			minlength: [3, 'Last name must be 3 character or more']
		}
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		match: [/\S+@\S+\.\S+/, 'Invalid email address'],
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	socketId: {
		type: String,
	},
	status: {
		type: String,
		enum: ['active', 'inactive'],
		default: 'inactive',
	},
	vehicle: {
		color: {
			type: String,
			required: true,
			minlength: [3, 'Vehicle color must be 3 character or more']
		},
		plate: {
			type: String,
			required: true,
			minlength: [3, 'Vehicle plate must be 3 character or more']
		},
		capacity: {
			type: Number,
			required: true,
			min: [1, 'Vehicle capacity must be at least 1']
		},
		vehicleType: {
			type: String,
			required: true,
			enum: ['car', 'motorcycle', 'auto'],
		}
	},
	location: {
		lat:{
			type: Number,
		},
		long:{
			type: Number,
		}
	}
})

captainSchema.methods.generateAuthToken = function(){
	const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
	return token;
}

captainSchema.methods.comparePassword = async function(password){
	return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashedPassword = async function(password){
	return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;