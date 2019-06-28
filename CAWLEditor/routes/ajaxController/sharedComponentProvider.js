var express = require('express');
var router = express.Router();

// Import Async Node Module
var async = require('async');

// Import MySQL Database
var mysql = require('mysql');
var connection = null;

// Shared Component Information
var sharedMessageInfo = null;
var sharedVariableInfo = null;
var sharedOntologyInfo = null;
var sharedServiceProviderInfo = null;
var sharedNodeInfo = null;

/* AJAX POST Process */
router.post('/', function(req, res, next) {
    var msg = req.body.msg;
    
    // Response Shared Component
    if(msg == "getSharedComponent") {
    	async.waterfall([
    		connectMySQL,
    		getSharedMessage,
    		getSharedPart,
    		getSharedVariable,
    		getSharedInitialize,
    		getSharedFrom,
    		getSharedOntology,
    		getSharedServiceProvider,
    		getSharedService,
    		getSharedNode,
    		getSharedNodeMessage,
    		getSharedNodePart,
    		getSharedNodeVariable,
    		getSharedNodeInitialize,
    		getSharedNodeFrom,
    		getSharedNodeWait,
    		getSharedCondition,
    		getSharedCase,
    		getSharedEvent,
    		getSharedContext,
    		getSharedRule,
    		getSharedConstraint,
    		getSharedSubject,
    		getSharedVerb,
    		getSharedObject,
    		getSharedInvoke,
    		disconnectMySQL
    	], function(err) {
    		res.send({result:true,message:sharedMessageInfo,variable:sharedVariableInfo,ontology:sharedOntologyInfo,serviceProvider:sharedServiceProviderInfo,node:sharedNodeInfo});
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

// Get Shared Message
function getSharedMessage(callback) {
	sharedMessageInfo = new Array();
	
	var query = "SELECT * FROM element_message";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, results);
	});
}

// Get Shared Part
function getSharedPart(sharedMessage, callback) {
	var sharedMessageTemp = null;
	var sharedPartTempList = null;
	var sharedPartTemp = null;
	
	var query = "SELECT * FROM element_part";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		for(var i = 0; i < sharedMessage.length; i++) {
			if(sharedMessage[i].node_id == null) {
				sharedMessageTemp = new Object();
				sharedMessageTemp.message_id = sharedMessage[i].message_id;
				sharedMessageTemp.name = sharedMessage[i].name;
				sharedMessageTemp.documentation = sharedMessage[i].documentation;
				
				sharedPartTempList = new Array();
				
				for(var j = 0; j < results.length; j++) {
					if(sharedMessage[i].message_id == results[j].message_id) {
						sharedPartTemp = new Object();
						sharedPartTemp.name = results[j].name;
						sharedPartTemp.element = results[j].element;
						sharedPartTemp.type = results[j].type;
						sharedPartTemp.documentation = results[j].documentation;
						
						sharedPartTempList.push(sharedPartTemp);
					}
				}
				
				sharedMessageTemp.part = sharedPartTempList;
				sharedMessageInfo.push(sharedMessageTemp);
			}
		}
		
		callback(null);
	});
}

// Get Shared Variable
function getSharedVariable(callback) {
	sharedVariableInfo = new Array();
	
	var query = "SELECT * FROM element_variable";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, results);
	});
}

// Get Shared Initialize
function getSharedInitialize(sharedVariable, callback) {
	var query = "SELECT * FROM element_initialize";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedVariable, results);
	});
}

// Get Shared From
function getSharedFrom(sharedVariable, sharedInitialize, callback) {
	var sharedVariableTemp = null;
	var sharedInitializeTempList = null;
	var sharedInitializeTemp = null;
	var sharedFromTempList = null;
	var sharedFromTemp = null;
	
	var query = "SELECT * FROM element_from";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		for(var i = 0; i < sharedVariable.length; i++) {
			if(sharedVariable[i].node_id == null) {
				sharedVariableTemp = new Object();
				sharedVariableTemp.variable_id = sharedVariable[i].variable_id;
				sharedVariableTemp.name = sharedVariable[i].name;
				sharedVariableTemp.type = sharedVariable[i].type;
				sharedVariableTemp.documentation = sharedVariable[i].documentation;
				
				sharedInitializeTempList = new Array();
				
				for(var j = 0; j < sharedInitialize.length; j++) {
					if(sharedVariable[i].variable_id == sharedInitialize[j].variable_id) {
						sharedInitializeTemp = new Object();
						sharedInitializeTemp.part = sharedInitialize[j].part;
						sharedInitializeTemp.documentation = sharedInitialize[j].documentation;
						
						sharedFromTempList = new Array();
						
						for(var k = 0; k < results.length; k++) {
							if(sharedInitialize[j].initialize_id == results[k].initialize_id) {
								sharedFromTemp = new Object();
								sharedFromTemp.variable = results[k].variable;
								sharedFromTemp.part = results[k].part;
								sharedFromTemp.expression = results[k].expression;
								sharedFromTemp.documentation = results[k].documentation;
								
								sharedFromTempList.push(sharedFromTemp);
							}
						}
						
						sharedInitializeTemp.from = sharedFromTempList;
						sharedInitializeTempList.push(sharedInitializeTemp);
					}
				}
				
				sharedVariableTemp.initialize = sharedInitializeTempList;
				sharedVariableInfo.push(sharedVariableTemp);
			}
		}
		
		callback(null);
	});
}

// Get Shared Ontology
function getSharedOntology(callback) {
	sharedOntologyInfo = new Array();
	
	var sharedOntologyTemp = null;
	
	var query = "SELECT * FROM element_ontology";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		for(var i = 0; i < results.length; i++) {
			sharedOntologyTemp = new Object();
			sharedOntologyTemp.ontology_id = results[i].ontology_id;
			sharedOntologyTemp.location = results[i].location;
			sharedOntologyTemp.namespace = results[i].namespace;
			sharedOntologyTemp.documentation = results[i].documentation;
			
			sharedOntologyInfo.push(sharedOntologyTemp);
		}
		
		callback(null);
	});
}

// Get Shared Service Provider
function getSharedServiceProvider(callback) {
	sharedServiceProviderInfo = new Array();
	
	var query = "SELECT * FROM element_serviceprovider";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, results);
	});
}

// Get Shared Service
function getSharedService(sharedServiceProvider, callback) {
	var sharedServiceProviderTemp = null;
	var sharedServiceTempList = null;
	var sharedServiceTemp = null;
	
	var query = "SELECT * FROM element_service";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		for(var i = 0; i < sharedServiceProvider.length; i++) {
			sharedServiceProviderTemp = new Object();
			sharedServiceProviderTemp.serviceprovider_id = sharedServiceProvider[i].serviceprovider_id;
			sharedServiceProviderTemp.name = sharedServiceProvider[i].name;
			sharedServiceProviderTemp.location = sharedServiceProvider[i].location;
			sharedServiceProviderTemp.documentation = sharedServiceProvider[i].documentation;
			
			sharedServiceTempList = new Array();
			
			for(var j = 0; j < results.length; j++) {
				if(sharedServiceProvider[i].serviceprovider_id == results[j].serviceprovider_id) {
					sharedServiceTemp = new Object();
					sharedServiceTemp.operation = results[j].operation;
					sharedServiceTemp.documentation = results[j].documentation;
					
					sharedServiceTempList.push(sharedServiceTemp);
				}
			}
			
			sharedServiceProviderTemp.service = sharedServiceTempList;
			sharedServiceProviderInfo.push(sharedServiceProviderTemp);
		}
		
		callback(null);
	});
}

// Get Shared Node
function getSharedNode(callback) {
	sharedNodeInfo = new Array();
	
	var query = "SELECT * FROM element_node";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, results);
	});
	
}

// Get Shared NodeMessage
function getSharedNodeMessage(sharedNode, callback) {
	var query = "SELECT * FROM element_message";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, results);
	});
}

// Get Shared NodePart
function getSharedNodePart(sharedNode, sharedMessage, callback) {
	var query = "SELECT * FROM element_part";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, results);
	});
}

// Get Shared NodeVariable
function getSharedNodeVariable(sharedNode, sharedMessage, sharedPart, callback) {
	var query = "SELECT * FROM element_variable";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, results);
	});
}

// Get Shared NodeInitialize
function getSharedNodeInitialize(sharedNode, sharedMessage, sharedPart, sharedVariable, callback) {
	var query = "SELECT * FROM element_initialize";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, results);
	});
}

// Get Shared NodeFrom
function getSharedNodeFrom(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, callback) {
	var query = "SELECT * FROM element_from";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, results);
	});
}

//Get Shared NodeWait
function getSharedNodeWait(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, callback) {
	var query = "SELECT * FROM element_wait";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, results);
	});
}

// Get Shared Condition
function getSharedCondition(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, callback) {
	var query = "SELECT * FROM element_condition";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, results);
	});
}

// Get Shared Case
function getSharedCase(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, callback) {
	var query = "SELECT * FROM element_case";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, results);
	});
}

// Get Shared Event
function getSharedEvent(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, callback) {
	var query = "SELECT * FROM element_event";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, results);
	});
}

// Get Shared Context
function getSharedContext(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, callback) {
	var query = "SELECT * FROM element_context";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, results);
	});
}

// Get Shared Rule
function getSharedRule(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, callback) {
	var query = "SELECT * FROM element_rule";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, results);
	});
}

// Get Shared Constraint
function getSharedConstraint(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, sharedRule, callback) {
	var query = "SELECT * FROM element_constraint";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, sharedRule, results);
	});
}

// Get Shared Subject
function getSharedSubject(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, sharedRule, sharedConstraint, callback) {
	var query = "SELECT * FROM element_subject";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, sharedRule, sharedConstraint, results);
	});
}

//Get Shared Verb
function getSharedVerb(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, sharedRule, sharedConstraint, sharedSubject, callback) {
	var query = "SELECT * FROM element_verb";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, sharedRule, sharedConstraint, sharedSubject, results);
	});
}

//Get Shared Object
function getSharedObject(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, sharedRule, sharedConstraint, sharedSubject, sharedVerb, callback) {
	var query = "SELECT * FROM element_object";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		callback(null, sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, sharedRule, sharedConstraint, sharedSubject, sharedVerb, results);
	});
}

// Get Shared Invoke
function getSharedInvoke(sharedNode, sharedMessage, sharedPart, sharedVariable, sharedInitialize, sharedFrom, sharedWait, sharedCondition, sharedCase, sharedEvent, sharedContext, sharedRule, sharedConstraint, sharedSubject, sharedVerb, sharedObject, callback) {
	var sharedNodeTemp = null;
	var sharedMessageTempList = null;
	var sharedMessageTemp = null;
	var sharedPartTempList = null;
	var sharedPartTemp = null;
	var sharedVariableTempList = null;
	var sharedVariableTemp = null;
	var sharedInitializeTempList = null;
	var sharedInitializeTemp = null;
	var sharedFromTempList = null;
	var sharedFromTemp = null;
	var sharedWaitTempList = null;
	var sharedWaitTemp = null;
	var sharedConditionTempList = null;
	var sharedConditionTemp = null;
	var sharedCaseTempList = null;
	var sharedCaseTemp = null;
	var sharedEventTempList = null;
	var sharedEventTemp = null;
	var sharedContextTempList = null;
	var sharedContextTemp = null;
	var sharedRuleTempList = null;
	var sharedRuleTemp = null;
	var sharedConstraintTempList = null;
	var sharedConstraintTemp = null;
	var sharedSubjectTempList = null;
	var sharedSubjectTemp = null;
	var sharedVerbTempList = null;
	var sharedVerbTemp = null;
	var sharedObjectTempList = null;
	var sharedObjectTemp = null;
	var sharedInvokeTempList = null;
	var sharedInvokeTemp = null;
	
	var query = "SELECT * FROM element_invoke";
	connection.query(query, function (error, results, fields) {
		if(error) {
			console.log(error);
		}
		
		for(var i = 0; i < sharedNode.length; i++) {
			sharedNodeTemp = new Object();
			sharedNodeTemp.node_id = sharedNode[i].node_id;
			sharedNodeTemp.name = sharedNode[i].name;
			sharedNodeTemp.state = sharedNode[i].state;
			sharedNodeTemp.documentation = sharedNode[i].documentation;
			
			// Message Tag
			sharedMessageTempList = new Array();
			
			for(var j = 0; j < sharedMessage.length; j++) {
				if(sharedMessage[j].node_id != null) {
					if(sharedNode[i].node_id == sharedMessage[j].node_id) {
						sharedMessageTemp = new Object();
						sharedMessageTemp.name = sharedMessage[j].name;
						sharedMessageTemp.documentation = sharedMessage[j].documentation;
						
						sharedPartTempList = new Array();
						
						for(var k = 0; k < sharedPart.length; k++) {
							if(sharedMessage[j].message_id == sharedPart[k].message_id) {
								sharedPartTemp = new Object();
								sharedPartTemp.name = sharedPart[k].name;
								sharedPartTemp.element = sharedPart[k].element;
								sharedPartTemp.type = sharedPart[k].type;
								sharedPartTemp.documentation = sharedPart[k].documentation;
								
								sharedPartTempList.push(sharedPartTemp);
							}
						}
						
						sharedMessageTemp.part = sharedPartTempList;
						sharedMessageTempList.push(sharedMessageTemp);
					}
				}
			}
			
			sharedNodeTemp.message = sharedMessageTempList;
			
			// Variable Tag
			sharedVariableTempList = new Array();
			
			for(var j = 0; j < sharedVariable.length; j++) {
				if(sharedVariable[j].node_id != null) {
					if(sharedNode[i].node_id == sharedVariable[j].node_id) {
						sharedVariableTemp = new Object();
						sharedVariableTemp.name = sharedVariable[j].name;
						sharedVariableTemp.type = sharedVariable[j].type;
						sharedVariableTemp.documentation = sharedVariable[j].documentation;
						
						sharedInitializeTempList = new Array();
						
						for(var k = 0; k < sharedInitialize.length; k++) {
							if(sharedVariable[j].variable_id == sharedInitialize[k].variable_id) {
								sharedInitializeTemp = new Object();
								sharedInitializeTemp.part = sharedInitialize[k].part;
								sharedInitializeTemp.documentation = sharedInitialize[k].documentation;
								
								sharedFromTempList = new Array();
								
								for(var l = 0; l < sharedFrom.length; l++) {
									if(sharedInitialize[k].initialize_id == sharedFrom[l].initialize_id) {
										sharedFromTemp = new Object();
										sharedFromTemp.variable = sharedFrom[l].variable;
										sharedFromTemp.part = sharedFrom[l].part;
										sharedFromTemp.expression = sharedFrom[l].expression;
										sharedFromTemp.documentation = sharedFrom[l].documentation;
										
										sharedFromTempList.push(sharedFromTemp);
									}
								}
								
								sharedInitializeTemp.from = sharedFromTempList;
								sharedInitializeTempList.push(sharedInitializeTemp);
							}
						}
						
						sharedVariableTemp.initialize = sharedInitializeTempList;
						sharedVariableTempList.push(sharedVariableTemp);
					}
				}
			}
			
			sharedNodeTemp.variable = sharedVariableTempList;
			
			// Wait Tag
			sharedWaitTempList = new Array();
			
			for(var j = 0; j < sharedWait.length; j++) {
				if(sharedNode[i].node_id == sharedWait[j].node_id) {
					sharedWaitTemp = new Object();
					sharedWaitTemp.joinCondition = sharedWait[j].joinCondition;
					sharedWaitTemp.documentation = sharedWait[j].documentation;
					
					sharedWaitTempList.push(sharedWaitTemp);
				}
			}
			
			sharedNodeTemp.wait = sharedWaitTempList;
			
			// Condition Tag
			sharedConditionTempList = new Array;
			
			for(var j = 0; j < sharedCondition.length; j++) {
				if(sharedNode[i].node_id == sharedCondition[j].node_id) {
					sharedConditionTemp = new Object();
					sharedConditionTemp.expression = sharedCondition[j].expression;
					sharedConditionTemp.documentation = sharedCondition[j].documentation;
					
					sharedCaseTempList = new Array();
					
					for(var k = 0; k < sharedCase.length; k++) {
						if(sharedCondition[j].condition_id == sharedCase[k].condition_id) {
							sharedCaseTemp = new Object();
							sharedCaseTemp.name = sharedCase[k].name;
							sharedCaseTemp.expression = sharedCase[k].expression;
							sharedCaseTemp.documentation = sharedCase[k].documentation;
							
							sharedEventTempList = new Array();
							
							for(var l = 0; l < sharedEvent.length; l++) {
								if(sharedCase[k].case_id == sharedEvent[l].case_id) {
									sharedEventTemp = new Object();
									sharedEventTemp.name = sharedEvent[l].name;
									sharedEventTemp.operation = sharedEvent[l].operation;
									sharedEventTemp.documentation = sharedEvent[l].documentation;
									
									sharedEventTempList.push(sharedEventTemp);
								}
							}
							
							sharedCaseTemp.event = sharedEventTempList;
							sharedCaseTempList.push(sharedCaseTemp);
						}
					}
					
					sharedConditionTemp.case = sharedCaseTempList;
					
					sharedContextTempList = new Array();
					
					for(var k = 0; k < sharedContext.length; k++) {
						if(sharedCondition[j].condition_id == sharedContext[k].condition_id) {
							sharedContextTemp = new Object();
							sharedContextTemp.name = sharedContext[k].name;
							sharedContextTemp.priority = sharedContext[k].priority;
							sharedContextTemp.documentation = sharedContext[k].documentation;
							
							sharedRuleTempList = new Array();
							
							for(var l = 0; l < sharedRule.length; l++) {
								if(sharedContext[k].context_id == sharedRule[l].context_id) {
									sharedRuleTemp = new Object();
									sharedRuleTemp.name = sharedRule[l].name;
									sharedRuleTemp.expression = sharedRule[l].expression;
									sharedRuleTemp.documentation = sharedRule[l].documentation;
									
									sharedConstraintTempList = new Array();
									
									for(var m = 0; m < sharedConstraint.length; m++) {
										if(sharedRule[l].rule_id == sharedConstraint[m].rule_id) {
											sharedConstraintTemp = new Object();
											sharedConstraintTemp.name = sharedConstraint[m].name;
											sharedConstraintTemp.documentation = sharedConstraint[m].documentation;
											
											sharedSubjectTempList = new Array();
											
											for(var n = 0; n < sharedSubject.length; n++) {
												if(sharedConstraint[m].constraint_id == sharedSubject[n].constraint_id) {
													sharedSubjectTemp = new Object();
													sharedSubjectTemp.type = sharedSubject[n].type;
													sharedSubjectTemp.value = sharedSubject[n].value;
													
													sharedSubjectTempList.push(sharedSubjectTemp);
												}
											}
											
											sharedConstraintTemp.subject = sharedSubjectTempList;
											
											sharedVerbTempList = new Array();
											
											for(var n = 0; n < sharedVerb.length; n++) {
												if(sharedConstraint[m].constraint_id == sharedVerb[n].constraint_id) {
													sharedVerbTemp = new Object();
													sharedVerbTemp.value = sharedVerb[n].value;
													
													sharedVerbTempList.push(sharedVerbTemp);
												}
											}
											
											sharedConstraintTemp.verb = sharedVerbTempList;
											
											sharedObjectTempList = new Array();
											
											for(var n = 0; n < sharedObject.length; n++) {
												if(sharedConstraint[m].constraint_id == sharedObject[n].constraint_id) {
													sharedObjectTemp = new Object();
													sharedObjectTemp.type = sharedObject[n].type;
													sharedObjectTemp.value = sharedObject[n].value;
													
													sharedObjectTempList.push(sharedObjectTemp);
												}
											}
											
											sharedConstraintTemp.object = sharedObjectTempList;
											
											sharedConstraintTempList.push(sharedConstraintTemp);
										}
									}
									
									sharedRuleTemp.constraint = sharedConstraintTempList;
									sharedRuleTempList.push(sharedRuleTemp);
								}
							}
							
							sharedContextTemp.rule = sharedRuleTempList;
							sharedContextTempList.push(sharedContextTemp);
						}
					}
					
					sharedConditionTemp.context = sharedContextTempList;
					
					sharedConditionTempList.push(sharedConditionTemp);
				}
			}
			
			sharedNodeTemp.condition = sharedConditionTempList;
			
			// Invoke Tag
			sharedInvokeTempList = new Array();
			
			for(var j = 0; j < results.length; j++) {
				if(sharedNode[i].node_id == results[j].node_id) {
					sharedInvokeTemp = new Object();
					sharedInvokeTemp.operation = results[j].operation;
					sharedInvokeTemp.documentation = results[j].documentation;
					
					sharedInvokeTempList.push(sharedInvokeTemp);
				}
			}
			
			sharedNodeTemp.invoke = sharedInvokeTempList;
			
			// Final Operation
			sharedNodeInfo.push(sharedNodeTemp);
		}
		
		callback(null);
	});
}

// CAWL Component Database Disconnection
function disconnectMySQL(callback) {
	connection.end();
	
	callback(null);
}

module.exports = router;
