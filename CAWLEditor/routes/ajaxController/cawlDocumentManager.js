var express = require('express');
var router = express.Router();

// Import Async Node Module
var async = require('async');

// Import File System Node Module
var fs = require('fs');

// CAWL Document Name
var cawlName = null;

// CAWL Document Information
var cawlDocumentInfo = null;

/* AJAX POST Process */
router.post('/', function(req, res, next) {
    var msg = req.body.msg;
    
    // Response CAWL Document Valitaion Result
    if(msg == "saveCAWLDocument") {
    	async.waterfall([
    		function(callback) {
    			cawlName = req.body.cawlName;
    			cawlDocumentInfo = req.body.cawlDocument;
    	    	
    	    	callback(null);
    		},
    		saveCAWLDocument
    	], function(err) {
    		res.send({result:true});
    	});
    }
});

function saveCAWLDocument(callback) {
	var data = cawlDocumentInfo;
	
	fs.writeFileSync('./CAWL_Document/' + cawlName + '.xml', data, 'utf8');
	
	callback(null);
}

module.exports = router;
