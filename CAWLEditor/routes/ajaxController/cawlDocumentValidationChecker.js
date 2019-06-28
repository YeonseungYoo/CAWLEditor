var express = require('express');
var router = express.Router();

// Import Async Node Module
var async = require('async');

// Import Xsd Schema Validator Node Module
var validator = require('xsd-schema-validator');

// CAWL Document Information
var cawlDocumentInfo = null;

// CAWL Document Validation Result
var resultValue = null;

/* AJAX POST Process */
router.post('/', function(req, res, next) {
    var msg = req.body.msg;
    
    // Response CAWL Document Valitaion Result
    if(msg == "checkCAWLDocumentValidation") {
    	async.waterfall([
    		function(callback) {
    			cawlDocumentInfo = req.body.cawlDocument;
    	    	
    	    	callback(null);
    		},
    		checkCAWLDocumentValidation
    	], function(err) {
    		res.send({result:true,value:resultValue});
    	});
    }
});

function checkCAWLDocumentValidation(callback) {
	validator.validateXML(cawlDocumentInfo, './CAWL_Schema/CAWLSchema.xsd', function(err, result) {
		if(err) {
//			console.log(err);
		}
		
		var validResult = JSON.stringify(result.valid);
		
		if(validResult == "true") {
			resultValue = "The CAWL Source Code is Valid.";
		} else {
			var text = "";
			
			for(var i = 0; i < result.messages.length; i++) {
				text += result.messages[i] + "\n";
			}
			
			resultValue = text;
		}
		
		callback(null);
	});
}

module.exports = router;
