var express = require ("express");
var app = express();

var router = express.Router();
var mongoose = require ("mongoose");
var Employee = require("./models/employee");
var bodyParser = require("body-parser");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


mongoose.connect("mongodb://localhost/techminds" , function(){
	console.log("connected db successfully !!!");
})



//getting the data
router.get("/employee" , function(req,res){
	Employee.getEmployee(function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	})
})


//putting the data

router.post("/employee1" , function(req,res){
	var employeeObj = req.body;

	Employee.createEmployee(employeeObj,function(err,custData){
		if(err){
			throw err;
		}
		res.json(custData);
	})
})

//edit the data
router.put("/employee/:id",function(req,res){
	var userId = req.params.id;
		var employeeObj = req.body;
Employee.editEmployee(userId,employeeObj,function(err , empData){
	if(err){
		throw err;
	}
	res.json(empData);
})
})

//delete the data

router.delete("/employee2/:id" , function(req,res){
var userId = req.params.id;
Employee.deleteEmployee(userId,function(err , empoData){
if(err){
	throw err;
}
res.json(empoData);


})
})


app.use("/api" , router);
var PORT = process.env.PORT ||4003 ;
app.listen(PORT , function(){
	console.log("port is"+PORT);

})




