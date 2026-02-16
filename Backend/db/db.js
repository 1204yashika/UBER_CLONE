const mongoose = require("mongoose");

const connectToDb = ()=>{
	mongoose.connect(process.env.DB_CONNECT)
		.then(()=>{
			console.log('Connect to DB');
		})
		.catch((e)=>console.log(e))
}

module.exports = connectToDb