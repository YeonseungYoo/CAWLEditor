var express = require('express');
var router = express.Router();

// Import Async Node Module
var async = require('async');

// Import XMLHttpRequest Node Module
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Context Information
var subjectInfo = null;
var verbInfo = null;
var objectInfo = null;

/* AJAX POST Process */
router.post('/', function(req, res, next) {
    var msg = req.body.msg;
    
    // Response Context Information
    if(msg == "subject") {
        async.waterfall([
        	getSubjectInfo
        ], function(err) {
            res.send({result:true, subjectInfo:subjectInfo});
        });
    }
    
    if(msg == "verb") {
        async.waterfall([
        	getVerbInfo
        ], function(err) {
            res.send({result:true, verbInfo:verbInfo});
        });
    }
    
    if(msg == "object") {
        async.waterfall([
        	function(callback) {
                var taggetSubject = req.body.subject;
                var taggetVerb = req.body.verb;
                
                callback(null, taggetSubject, taggetVerb);
            },
        	getObjectInfo
        ], function(err) {
            res.send({result:true, objectInfo:objectInfo});
        });
    }
});

// Get Subject Information
function getSubjectInfo(callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://203.253.23.10:8180/subjects");
	xhr.setRequestHeader('Content-type', "application/json");
	xhr.send();
	
	xhr.addEventListener('load', function() {
		subjectInfo = xhr.responseText;
		
		callback(null);
	});
}

// Get Verb Information
function getVerbInfo(callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://203.253.23.10:8180/predicates");
	xhr.setRequestHeader('Content-type', "application/json");
	xhr.send();
	
	xhr.addEventListener('load', function() {
		verbInfo = xhr.responseText;
		
		callback(null);
	});
}

// Get Object Information
function getObjectInfo(taggetSubject, taggetVerb, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://203.253.23.10:8180/objects?subject=" + taggetSubject + "&predicate=" + taggetVerb);
	xhr.setRequestHeader('Content-type', "application/json");
	xhr.send();
	
	xhr.addEventListener('load', function() {
		objectInfo = xhr.responseText;
		
		callback(null);
	});
}

module.exports = router;
