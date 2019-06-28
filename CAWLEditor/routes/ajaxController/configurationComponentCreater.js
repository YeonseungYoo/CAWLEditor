var express = require('express');
var router = express.Router();

// Import Async Node Module
var async = require('async');

// Import MySQL Database
var mysql = require('mysql');
var connection = null;

// Import Xsd Schema Validator Node Module
var validator = require('xsd-schema-validator');

// Component Type
var componentType = null;

// Component Value
var componentValue = null;

// Component ID
var componetID = null;

// CAWL Document Info
var cawlDocumentInfo = null;

// Validation Result
var validationResult = null;

// Validation Value
var ValidationValue = null;

/* AJAX POST Process */
router.post('/', function(req, res, next) {
    var msg = req.body.msg;
    
    // Response Create Configuration Component Result
    if(msg == "createConfigurationComponent") {
    	async.waterfall([
    		function(callback) {
    			componentType = req.body.type;
    			
    			componentValue = JSON.parse(req.body.value);
    			
    	    	callback(null);
    		},
    		connectMySQL,
    		checkComponentID,
    		generateDocument,
    		checkValidation,
    		generateDocumentDB,
    		disconnectMySQL
    	], function(err) {
    		res.send({result:true,componetID:componetID,validationResult:validationResult,validationValue:ValidationValue});
    	});
    }
});

// CAWL Component Database Connection
function connectMySQL(callback) {
	connection = mysql.createConnection({
		host:'127.0.0.1',
		port:'3306',
		user:'root',
		password:'root',
		database:'component'
	});
	
	connection.connect();
	
	callback(null);
}

// Check Configuration Component ID
function checkComponentID(callback) {
	if(componentType == 'Message') {
		componetID = componentValue.message_id;
	} else if(componentType == 'Variable') {
		componetID = componentValue.variable_id;
	} else if(componentType == 'Ontology') {
		componetID = componentValue.ontology_id;
	} else if(componentType == 'ServiceProvider') {
		componetID = componentValue.serviceprovider_id;
	} else if(componentType == 'Node') {
		componetID = componentValue.node_id;
	}
	
	callback(null);
}

// Configuration Component Geneate Document
function generateDocument(callback) {
	if(componentType == 'Message') {
		cawlDocumentInfo = messageDocumentGenerating();
	} else if(componentType == 'Variable') {
		cawlDocumentInfo = variableDocumentGenerating();
	} else if(componentType == 'Ontology') {
		cawlDocumentInfo = ontologyDocumentGenerating();
	} else if(componentType == 'ServiceProvider') {
		cawlDocumentInfo = serviceProviderDocumentGenerating();
	} else if(componentType == 'Node') {
		cawlDocumentInfo = nodeDocumentGenerating();
	}
	
	callback(null);
}

// Configuration Component Document Check Validation
function checkValidation(callback) {
	validator.validateXML(cawlDocumentInfo, './CAWL_Schema/' + componentType + 'Schema.xsd', function(err, result) {
		if(err) {
//			console.log(err);
		}
		
		var validResult = JSON.stringify(result.valid);
		
		if(validResult == "true") {
			validationResult = "true";
			
			ValidationValue = "The " + componetID + " Element is Saved.";
		} else {
			validationResult = "false";
			
			var text = "";
			
			for(var i = 0; i < result.messages.length; i++) {
				text += result.messages[i] + "\n";
			}
			
			ValidationValue = text;
		}
		
		callback(null);
	});
}

// Generate Document To DB
function generateDocumentDB(callback) {
	if(validationResult == "true") {
		if(componentType == 'Message') {
			generateMessageElementDB();
		} else if(componentType == 'Variable') {
			generateVariableElementDB();
		} else if(componentType == 'Ontology') {
			generateOntologyElementDB();
		} else if(componentType == 'ServiceProvider') {
			generateServiceProviderElementDB();
		} else if(componentType == 'Node') {
			generateNodeElementDB();
		}
	}
	
	callback(null);
}

// CAWL Component Database Disconnection
function disconnectMySQL(callback) {
	connection.end();
	
	callback(null);
}

// Generate Message Document
function messageDocumentGenerating() {
	var messageDocument = "";
    var messageObj = null;
    var partObj = null;
    
    messageObj = componentValue;
    
    messageDocument += "<message";
    
    if(messageObj.name != "") {
        messageDocument += " name=\"" + messageObj.name + "\"";
    }
    
    messageDocument += ">";
    
    if(messageObj.documentation != "") {
        messageDocument += "<documentation>" + messageObj.documentation + "</documentation>";
    }
    
    for(var j = 0; j < messageObj.part.length; j++) {
        partObj = messageObj.part[j];
        
        messageDocument += "<part";
        
        if(partObj.name != "") {
            messageDocument += " name=\"" + partObj.name + "\"";
        }
        
        if(partObj.element != "") {
            messageDocument += " element=\"" + partObj.element + "\"";
        }
        
        if(partObj.type != "") {
            messageDocument += " type=\"" + partObj.type + "\"";
        }
        
        messageDocument += ">";
        
        if(partObj.documentation != "") {
            messageDocument += "<documentation>" + partObj.documentation + "</documentation>";
        }
        
        messageDocument += "</part>";
    }
    
    messageDocument += "</message>";
	
	return messageDocument;
}

// Generate Variable Document
function variableDocumentGenerating() {
	var variableDocument = "";
    var variableObj = null;
    var initializeObj = null;
    var fromObj = null;
    
    variableObj = componentValue;
    
    variableDocument += "<variable";
    
    if(variableObj.name != "") {
    	variableDocument += " name=\"" + variableObj.name + "\"";
    }
    
    if(variableObj.type != "") {
    	variableDocument += " type=\"" + variableObj.type + "\"";
    }
    
    variableDocument += ">";
    
    if(variableObj.documentation != "") {
    	variableDocument += "<documentation>" + variableObj.documentation + "</documentation>";
    }
    
    for(var j = 0; j < variableObj.initialize.length; j++) {
    	initializeObj = variableObj.initialize[j];
    	
    	variableDocument += "<initialize";
    	
    	if(initializeObj.part != "") {
    		variableDocument += " part=\"" + initializeObj.part + "\"";
    	}
    	
    	variableDocument += ">";
    	
    	if(initializeObj.documentation != "") {
    		variableDocument += "<documentation>" + initializeObj.documentation + "</documentation>";
    	}
    	
    	for(var k = 0; k < initializeObj.from.length; k++) {
    		fromObj = initializeObj.from[k];
    		
    		variableDocument += "<from";
    		
    		if(fromObj.variable != "") {
    			variableDocument += " variable=\"" + fromObj.variable + "\"";
    		}
    		
    		if(fromObj.part != "") {
    			variableDocument += " part=\"" + fromObj.part + "\"";
    		}
    		
    		if(fromObj.expression != "") {
    			variableDocument += " expression=\"" + fromObj.expression + "\"";
    		}
    		
    		variableDocument += ">";
    		
    		if(fromObj.documentation != "") {
    			variableDocument += "<documentation>" + fromObj.documentation + "</documentation>";
    		}
    		
    		variableDocument += "</from>";
    	}
    	
    	variableDocument += "</initialize>";
    }
    
    variableDocument += "</variable>";
	
	return variableDocument;
}

// Generate Ontology Document
function ontologyDocumentGenerating() {
	var ontologyDocument = "";
    var ontologyObj = null;
    
    ontologyObj = componentValue;
    
    ontologyDocument += "<ontology";
    
    if(ontologyObj.location != "") {
        ontologyDocument += " location=\"" + ontologyObj.location + "\"";
    }
    
    if(ontologyObj.namespace != "") {
        ontologyDocument += " namespace=\"" + ontologyObj.namespace + "\"";
    }
    
    ontologyDocument += ">";
    
    if(ontologyObj.documentation != "") {
        ontologyDocument += "<documentation>" + ontologyObj.documentation + "</documentation>";
    }
    
    ontologyDocument += "</ontology>";
	
	return ontologyDocument;
}

// Generate Service Provider Document
function serviceProviderDocumentGenerating() {
	var serviceProviderDocument = "";
    var serviceProviderObj = null;
    var serviceObj = null;
    
    serviceProviderObj = componentValue;
    
    serviceProviderDocument += "<serviceProvider";
    
    if(serviceProviderObj.name != "") {
        serviceProviderDocument += " name=\"" + serviceProviderObj.name + "\"";
    }
    
    if(serviceProviderObj.location != "") {
        serviceProviderDocument += " location=\"" + serviceProviderObj.location + "\"";
    }
    
    serviceProviderDocument += ">";
    
    if(serviceProviderObj.documentation != "") {
        serviceProviderDocument += "<documentation>" + serviceProviderObj.documentation + "</documentation>";
    }
    
    for(var j = 0; j < serviceProviderObj.service.length; j++) {
        serviceObj = serviceProviderObj.service[j];
        
        serviceProviderDocument += "<service";
        
        if(serviceObj.operation != "") {
            serviceProviderDocument += " operation=\"" + serviceObj.operation + "\"";
        }
        
        serviceProviderDocument += ">";
        
        if(serviceObj.documentation != "") {
            serviceProviderDocument += "<documentation>" + serviceObj.documentation + "</documentation>";
        }
        
        serviceProviderDocument += "</service>";
    }
    
    serviceProviderDocument += "</serviceProvider>";
    
    return serviceProviderDocument;
}

// Generate Node Document
function nodeDocumentGenerating() {
	var nodeDocument = "";
	var nodeObj = null;
	var messageObj = null;
    var partObj = null;
    var variableObj = null;
    var initializeObj = null;
    var fromObj = null;
    var waitObj = null;
    var conditionObj = null;
    var caseObj = null;
    var eventObj = null;
    var contextObj = null;
    var ruleObj = null;
    var constraintObj = null;
    var subjectObj = null;
    var vervObj = null;
    var objectObj = null;
    var invokeObj = null;
    
    nodeObj = componentValue;
    
	nodeDocument += "<node";
    
    if(nodeObj.name != "") {
    	nodeDocument += " name=\"" + nodeObj.name + "\"";
    }
    
    if(nodeObj.state != "") {
    	nodeDocument += " state=\"" + nodeObj.state + "\"";
    }
    
    nodeDocument += ">";
    
    if(nodeObj.documentation != "") {
    	nodeDocument += "<documentation>" + nodeObj.documentation + "</documentation>";
    }
    
    for(var j = 0; j < nodeObj.message.length; j++) {
        messageObj = nodeObj.message[j];
        
        nodeDocument += "<message";
        
        if(messageObj.name != "") {
        	nodeDocument += " name=\"" + messageObj.name + "\"";
        }
        
        nodeDocument += ">";
        
        if(messageObj.documentation != "") {
        	nodeDocument += "<documentation>" + messageObj.documentation + "</documentation>";
        }
        
        for(var k = 0; k < messageObj.part.length; k++) {
            partObj = messageObj.part[k];
            
            nodeDocument += "<part";
            
            if(partObj.name != "") {
            	nodeDocument += " name=\"" + partObj.name + "\"";
            }
            
            if(partObj.element != "") {
            	nodeDocument += " element=\"" + partObj.element + "\"";
            }
            
            if(partObj.type != "") {
            	nodeDocument += " type=\"" + partObj.type + "\"";
            }
            
            nodeDocument += ">";
            
            if(partObj.documentation != "") {
            	nodeDocument += "<documentation>" + partObj.documentation + "</documentation>";
            }
            
            nodeDocument += "</part>";
        }
        
        nodeDocument += "</message>";
    }
    
    for(var j = 0; j < nodeObj.variable.length; j++) {
        variableObj = nodeObj.variable[j];
        
        nodeDocument += "<variable";
        
        if(variableObj.name != "") {
        	nodeDocument += " name=\"" + variableObj.name + "\"";
        }
        
        if(variableObj.type != "") {
        	nodeDocument += " type=\"" + variableObj.type + "\"";
        }
        
        nodeDocument += ">";
        
        if(variableObj.documentation != "") {
        	nodeDocument += "<documentation>" + variableObj.documentation + "</documentation>";
        }
        
        for(var k = 0; k < variableObj.initialize.length; k++) {
            initializeObj = variableObj.initialize[k];
            
            nodeDocument += "<initialize";
            
            if(initializeObj.part != "") {
            	nodeDocument += " part=\"" + initializeObj.part + "\"";
            }
            
            nodeDocument += ">";
            
            if(initializeObj.documentation != "") {
            	nodeDocument += "<documentation>" + initializeObj.documentation + "</documentation>";
            }
            
            for(var l = 0; l < initializeObj.from.length; l++) {
                fromObj = initializeObj.from[l];
                
                nodeDocument += "<from";
                
                if(fromObj.variable != "") {
                	nodeDocument += " variable=\"" + fromObj.variable + "\"";
                }
                
                if(fromObj.part != "") {
                	nodeDocument += " part=\"" + fromObj.part + "\"";
                }
                
                if(fromObj.expression != "") {
                	nodeDocument += " expression=\"" + fromObj.expression + "\"";
                }
                
                nodeDocument += ">";
                
                if(fromObj.documentation != "") {
                	nodeDocument += "<documentation>" + fromObj.documentation + "</documentation>";
                }
                
                nodeDocument += "</from>";
            }
            
            nodeDocument += "</initialize>";
        }
        
        nodeDocument += "</variable>";
    }
    
    for(var j = 0; j < nodeObj.wait.length; j++) {
        waitObj = nodeObj.wait[j];
        
        nodeDocument += "<wait";
        
        if(waitObj.joinCondition != "") {
        	nodeDocument += " joinCondition=\"" + waitObj.joinCondition + "\"";
        }
        
        nodeDocument += ">";
        
        if(waitObj.documentation != "") {
        	nodeDocument += "<documentation>" + waitObj.documentation + "</documentation>";
        }
        
        nodeDocument += "</wait>";
    }
    
    for(var j = 0; j < nodeObj.condition.length; j++) {
        conditionObj = nodeObj.condition[j];
        
        nodeDocument += "<condition";
        
        if(conditionObj.expression != "") {
        	nodeDocument += " expression=\"" + conditionObj.expression + "\"";
        }
        
        nodeDocument += ">";
        
        if(conditionObj.documentation != "") {
        	nodeDocument += "<documentation>" + conditionObj.documentation + "</documentation>";
        }
        
        for(var k = 0; k < conditionObj.case.length; k++) {
            caseObj = conditionObj.case[k];
            
            nodeDocument += "<case";
            
            if(caseObj.name != "") {
            	nodeDocument += " name=\"" + caseObj.name + "\"";
            }
            
            if(caseObj.expression != "") {
            	nodeDocument += " expression=\"" + caseObj.expression + "\"";
            }
            
            nodeDocument += ">";
            
            if(caseObj.documentation != "") {
            	nodeDocument += "<documentation>" + caseObj.documentation + "</documentation>";
            }
            
            for(var l = 0; l < caseObj.event.length; l++) {
                eventObj = caseObj.event[l];
                
                nodeDocument += "<event";
                
                if(eventObj.name != "") {
                	nodeDocument += " name=\"" + eventObj.name + "\"";
                }
                
                if(eventObj.operation != "") {
                	nodeDocument += " operation=\"" + eventObj.operation + "\"";
                }
                
                nodeDocument += ">";
                
                if(eventObj.documentation != "") {
                	nodeDocument += "<documentation>" + eventObj.documentation + "</documentation>";
                }
                
                nodeDocument += "</event>";
            }
            
            nodeDocument += "</case>";
        }
        
        for(var k = 0; k < conditionObj.context.length; k++) {
            contextObj = conditionObj.context[k];
            
            nodeDocument += "<context";
            
            if(contextObj.name != "") {
            	nodeDocument += " name=\"" + contextObj.name + "\"";
            }
            
            if(contextObj.priority != "") {
            	nodeDocument += " priority=\"" + contextObj.priority + "\"";
            }
            
            nodeDocument += ">";
            
            if(contextObj.documentation != "") {
            	nodeDocument += "<documentation>" + contextObj.documentation + "</documentation>";
            }
            
            for(var l = 0; l < contextObj.rule.length; l++) {
                ruleObj = contextObj.rule[l];
                
                nodeDocument += "<rule";
                
                if(ruleObj.name != "") {
                	nodeDocument += " name=\"" + ruleObj.name + "\"";
                }
                
                if(ruleObj.expression != "") {
                	nodeDocument += " expression=\"" + ruleObj.expression + "\"";
                }
                
                nodeDocument += ">";
                
                if(ruleObj.documentation != "") {
                	nodeDocument += "<documentation>" + ruleObj.documentation + "</documentation>";
                }
                
                for(var m = 0; m < ruleObj.constraint.length; m++) {
                    constraintObj = ruleObj.constraint[m];
                    
                    nodeDocument += "<constraint";
                    
                    if(constraintObj.name != "") {
                    	nodeDocument += " name=\"" + constraintObj.name + "\"";
                    }
                    
                    nodeDocument += ">";
                    
                    if(constraintObj.documentation != "") {
                    	nodeDocument += "<documentation>" + constraintObj.documentation + "</documentation>";
                    }
                    
                    for(var n = 0; n < constraintObj.subject.length; n++) {
                        subjectObj = constraintObj.subject[n];
                        
                        nodeDocument += "<subject";
                        
                        if(subjectObj.type != "") {
                        	nodeDocument += " type=\"" + subjectObj.type + "\"";
                        }
                        
                        nodeDocument += ">";
                        
                        if(subjectObj.value != "") {
                        	nodeDocument += subjectObj.value;
                        }
                        
                        nodeDocument += "</subject>";
                    }
                    
                    for(var n = 0; n < constraintObj.verb.length; n++) {
                        verbObj = constraintObj.verb[n];
                        
                        nodeDocument += "<verb";
                        
                        nodeDocument += ">";
                        
                        if(verbObj.value != "") {
                        	nodeDocument += verbObj.value;
                        }
                        
                        nodeDocument += "</verb>";
                    }
                    
                    for(var n = 0; n < constraintObj.object.length; n++) {
                        objectObj = constraintObj.object[n];
                        
                        nodeDocument += "<object";
                        
                        if(objectObj.type != "") {
                        	nodeDocument += " type=\"" + objectObj.type + "\"";
                        }
                        
                        nodeDocument += ">";
                        
                        if(objectObj.value != "") {
                        	nodeDocument += objectObj.value;
                        }
                        
                        nodeDocument += "</object>";
                    }
                    
                    nodeDocument += "</constraint>";
                }
                
                nodeDocument += "</rule>";
            }
            
            nodeDocument += "</context>";
        }
        
        nodeDocument += "</condition>";
    }
    
    for(var j = 0; j < nodeObj.invoke.length; j++) {
        invokeObj = nodeObj.invoke[j];
        
        nodeDocument += "<invoke";
        
        if(invokeObj.operation != "") {
        	nodeDocument += " operation=\"" + invokeObj.operation + "\"";
        }
        
        nodeDocument += ">";
        
        if(invokeObj.documentation != "") {
        	nodeDocument += "<documentation>" + invokeObj.documentation + "</documentation>";
        }
        
        nodeDocument += "</invoke>";
    }
    
    nodeDocument += "</node>";
    
    return nodeDocument;
}

// Generate Message Element To DB
function generateMessageElementDB() {
	var query = "INSERT INTO element_message (message_id, node_id, name, documentation) " +
	"VALUES('" + componentValue.message_id + "', " + null + ", '" + componentValue.name + "', '" + componentValue.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < componentValue.part.length; i++) {
		generatePartElementDB(componentValue.message_id + "_" + String(i), componentValue.message_id, componentValue.part[i]);
	}
}

// Generate Part Element To DB
function generatePartElementDB(newIndex, index, part) {
	var query = "INSERT INTO element_part (part_id, message_id, name, element, type, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + part.name + "', '" + part.element + "', '" + part.type + "', '" + part.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
}

// Generate Variable Element To DB
function generateVariableElementDB() {
	var query = "INSERT INTO element_variable (variable_id, node_id, name, type, documentation) " +
	"VALUES('" + componentValue.variable_id + "', " + null + ", '" + componentValue.name + "', '" + componentValue.type + "', '" + componentValue.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < componentValue.initialize.length; i++) {
		generateInitializeElementDB(componentValue.variable_id + "_" + String(i), componentValue.variable_id, componentValue.initialize[i]);
	}
}

// Generate Initialize Element To DB
function generateInitializeElementDB(newIndex, index, initialize) {
	var query = "INSERT INTO element_initialize (initialize_id, variable_id, part, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + initialize.part + "', '" + initialize.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < initialize.from.length; i++) {
		generateFromElementDB(newIndex + "_" + String(i), newIndex, initialize.from[i]);
	}
}

// Generate From Element To DB
function generateFromElementDB(newIndex, index, from) {
	var query = "INSERT INTO element_from (from_id, initialize_id, variable, part, expression, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + from.variable + "', '" + from.part + "', '" + from.expression + "', '" + from.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
}

// Generate Ontology Element To DB
function generateOntologyElementDB() {
	var query = "INSERT INTO element_ontology (ontology_id, location, namespace, documentation) " +
	"VALUES('" + componentValue.ontology_id + "', '" + componentValue.location + "', '" + componentValue.namespace + "', '" + componentValue.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
}

// Generate Service Provider Element To DB
function generateServiceProviderElementDB() {
	var query = "INSERT INTO element_serviceprovider (serviceprovider_id, name, location, documentation) " +
	"VALUES('" + componentValue.serviceprovider_id +"', '" + componentValue.name + "', '" + componentValue.location + "', '" + componentValue.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < componentValue.service.length; i++) {
		generateServiceElementDB(componentValue.serviceprovider_id + "_" + String(i), componentValue.serviceprovider_id, componentValue.service[i]);
	}
}

// Generate Service Element To DB
function generateServiceElementDB(newIndex, index, service) {
	var query = "INSERT INTO element_service (service_id, serviceprovider_id, operation, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + service.operation + "', '" + service.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
}

// Generate Node Element To DB
function generateNodeElementDB() {
	var query = "INSERT INTO element_node (node_id, name, state, documentation) " +
	"VALUES('" + componentValue.node_id + "', '" + componentValue.name + "', '" + componentValue.state + "', '" + componentValue.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < componentValue.message.length; i++) {
		generateReuseMessageElementDB(componentValue.node_id + "_" + String(i), componentValue.node_id, componentValue.message[i]);
	}
	
	for(var i = 0; i < componentValue.variable.length; i++) {
		generateReuseVariableElementDB(componentValue.node_id + "_" + String(i), componentValue.node_id, componentValue.variable[i]);
	}
	
	for(var i = 0; i < componentValue.wait.length; i++) {
		generateWaitElementDB(componentValue.node_id + "_" + String(i), componentValue.node_id, componentValue.wait[i]);
	}
	
	for(var i = 0; i < componentValue.condition.length; i++) {
		generateConditionElementDB(componentValue.node_id + "_" + String(i), componentValue.node_id, componentValue.condition[i]);
	}
	
	for(var i = 0; i < componentValue.invoke.length; i++) {
		generateInvokeElementDB(componentValue.node_id + "_" + String(i), componentValue.node_id, componentValue.invoke[i]);
	}
}

// Generate Reuse Message Element To DB
function generateReuseMessageElementDB(newIndex, index, message) {
	var query = "INSERT INTO element_message (message_id, node_id, name, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + message.name + "', '" + message.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < message.part.length; i++) {
		generatePartElementDB(newIndex + "_" + String(i), newIndex, message.part[i]);
	}
}

// Generate Reuse Variable Element To DB
function generateReuseVariableElementDB(newIndex, index, variable) {
	var query = "INSERT INTO element_variable (variable_id, node_id, name, type, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + variable.name + "', '" + variable.type + "', '"  + variable.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < variable.initialize.length; i++) {
		generateInitializeElementDB(newIndex + "_" + String(i), newIndex, variable.initialize[i]);
	}
}

// Generate Wait Element To DB
function generateWaitElementDB(newIndex, index, wait) {
	var query = "INSERT INTO element_wait (wait_id, node_id, joinCondition, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + wait.joinCondition + "', '" + wait.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
}

// Generate Condition Element To DB
function generateConditionElementDB(newIndex, index, condition) {
	var query = "INSERT INTO element_condition (condition_id, node_id, expression, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + condition.expression + "', '" + condition.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < condition.case.length; i++) {
		generateCaseElementDB(newIndex + "_" + String(i), newIndex, condition.case[i]);
	}
	
	for(var i = 0; i < condition.context.length; i++) {
		generateContextElementDB(newIndex + "_" + String(i), newIndex, condition.context[i]);
	}
}

// Generate Case Element To DB
function generateCaseElementDB(newIndex, index, caseTemp) {
	var query = "INSERT INTO element_case (case_id, condition_id, name, expression, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + caseTemp.name + "', '" + caseTemp.expression + "', '" + caseTemp.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < caseTemp.event.length; i++) {
		generateEventElementDB(newIndex + "_" + String(i), newIndex, caseTemp.event[i]);
	}
}

// Generate Event Element To DB
function generateEventElementDB(newIndex, index, event) {
	var query = "INSERT INTO element_event (event_id, case_id, name, operation, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + event.name + "', '" + event.operation + "', '" + event.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
}

// Generate Context Element To DB
function generateContextElementDB(newIndex, index, context) {
	var query = "INSERT INTO element_context (context_id, condition_id, name, priority, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + context.name + "', '" + context.priority + "', '" + context.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < context.rule.length; i++) {
		generateRuleElementDB(newIndex + "_" + String(i), newIndex, context.rule[i]);
	}
}

// Generate Rule Element To DB
function generateRuleElementDB(newIndex, index, rule) {
	var query = "INSERT INTO element_rule (rule_id, context_id, name, expression, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + rule.name + "', '" + rule.expression + "', '" + rule.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < rule.constraint.length; i++) {
		generateConstraintElementDB(newIndex + "_" + String(i), newIndex, rule.constraint[i]);
	}
}

// Generate Constraint Element To DB
function generateConstraintElementDB(newIndex, index, constraint) {
	var query = "INSERT INTO element_constraint (constraint_id, rule_id, name, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + constraint.name + "', '" + constraint.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
	
	for(var i = 0; i < constraint.subject.length; i++) {
		generateSubjectElementDB(newIndex + "_" + String(i), newIndex, constraint.subject[i]);
	}
	
	for(var i = 0; i < constraint.verb.length; i++) {
		generateVerbElementDB(newIndex + "_" + String(i), newIndex, constraint.verb[i]);
	}
	
	for(var i = 0; i < constraint.object.length; i++) {
		generateObjectElementDB(newIndex + "_" + String(i), newIndex, constraint.object[i]);
	}
}

// Generate Subject Element To DB
function generateSubjectElementDB(newIndex, index, subject) {
	var query = "INSERT INTO element_subject (subject_id, constraint_id, type, value) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + subject.type + "', '" + subject.value + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
}

// Generate Verb Element To DB
function generateVerbElementDB(newIndex, index, verb) {
	var query = "INSERT INTO element_verb (verb_id, constraint_id, value) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + verb.value + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
}

// Generate Object Element To DB
function generateObjectElementDB(newIndex, index, object) {
	var query = "INSERT INTO element_object (object_id, constraint_id, type, value) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + object.type + "', '" + object.value + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
}

// Generate Invoke Element To DB
function generateInvokeElementDB(newIndex, index, invoke) {
	var query = "INSERT INTO element_invoke (invoke_id, node_id, operation, documentation) " +
	"VALUES('" + newIndex + "', '" + index + "', '" + invoke.operation + "', '" + invoke.documentation + "')";
	
	connection.query(query, function (error, results, fields) {
        if(error) {
            console.log(error);
        }
	});
}

module.exports = router;
