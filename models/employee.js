var mongoose = require ("mongoose");
var employeeSchema = mongoose.Schema({

fname:{
type: String ,
required :true
},

lname:{
type: String ,
required :true
},
email:{
type: String ,
required :true
},
mob:{
type: String ,
required :true
},
city:{
type: String ,
required :true
},
pincode:{
type: String ,
required :true
}


})




var Employee = module.exports = mongoose.model("employee" ,employeeSchema ,"employee" )

module.exports.getEmployee = function(callback){
	return Employee.find(callback)
}

module.exports.createEmployee = function(employeeObj , callback){

return Employee.create(employeeObj,callback)	
}


