var express = require('express');
var router = express.Router();

// Import Async Node Module
var async = require('async');

// Import MySQL Database
var mysql = require('mysql');
var connection = null;

// Import XML Formatter
var format = require('xml-formatter');

// CAWL Document Information
var cawlName = null;
var cawlNamespace = null;
var cawlVersion = null;
var cawlDocumentation = null;

var activeTreeInfo = null;
var workflowInfo = null;

// CAWL Tag Information
var messageInfo = null;
var variableInfo = null;
var ontologyInfo = null;
var serviceProviderInfo = null;
var activatorInfo = null;
var flowInfo = null;
var nodeInfo = null;

var cawlDocumentInfo = null;

var nodeOverlapCheck = null;

/* AJAX POST Process */
router.post('/', function(req, res, next) {
    var msg = req.body.msg;
    
    // Response CAWL Document Generation
    if(msg == "generateCAWLDocument") {
        async.waterfall([
            function(callback) {
                cawlName = req.body.cawlName;
                cawlNamespace = req.body.cawlNamespace;
                cawlVersion = req.body.cawlVersion;
                cawlDocumentation = req.body.cawlDocumentation;
                
                activeTreeInfo = req.body.activeTreeInfo;
                activeTreeInfo = eval(activeTreeInfo);
                
                messageInfo = activeTreeInfo[0];
                variableInfo = activeTreeInfo[1];
                ontologyInfo = activeTreeInfo[2];
                serviceProviderInfo = activeTreeInfo[3];
                activatorInfo = activeTreeInfo[4];
                flowInfo = activeTreeInfo[5];
                nodeInfo = activeTreeInfo[6];
                
                workflowInfo = req.body.workflowInfo;
                workflowInfo = JSON.parse(workflowInfo);
                
                callback(null);
            },
            connectMySQL,
            startCAWLTag,
            generateMessageTag,
            generateVariableTag,
            generateOntologyTag,
            generateServiceProviderTag,
            generateActivatorTag,
            generateFlowTag,
            endCAWLTag,
            disconnectMySQL
        ], function(err) {
            res.send({result:true,value:cawlDocumentInfo});
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

// Start CAWL Tag
function startCAWLTag(callback) {
    cawlDocumentInfo = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    
    cawlDocumentInfo += "<CAWL";
    
    if(cawlName != "") {
        cawlDocumentInfo += " name=\"" + cawlName + "\"";
    }
    
    if(cawlNamespace != "") {
        cawlDocumentInfo += " namespace=\"" + cawlNamespace + "\"";
    }
    
    if(cawlVersion != "") {
        cawlDocumentInfo += " version=\"" + cawlVersion + "\"";
    }
    
    cawlDocumentInfo += ">";
    
    if(cawlDocumentation != "") {
        cawlDocumentInfo += "<documentation>" + cawlDocumentation + "</documentation>";
    }
    
    callback(null);
}

// Generate Message Tag
function generateMessageTag(callback) {
	cawlDocumentInfo += messageTagGenerating();
	
	callback(null);
}

// Generate Variable Tag
function generateVariableTag(callback) {
	cawlDocumentInfo += variableTagGenerating();
	
	callback(null);
}

// Generate Ontology Tag
function generateOntologyTag(callback) {
	cawlDocumentInfo += ontologyGenerating();
	
	callback(null);
}

// Generate Service Provider Tag
function generateServiceProviderTag(callback) {
	cawlDocumentInfo += serviceProviderGenerating();
	
	callback(null);
}

// Generate Activator Tag
function generateActivatorTag(callback) {
    cawlDocumentInfo += activatorGenerating();
    
    callback(null);
}

// Generate Flow Tag
function generateFlowTag(callback) {
	cawlDocumentInfo += flowGenerating();
	
	callback(null);
}

// End CAWL Tag
function endCAWLTag(callback) {
    cawlDocumentInfo += "</CAWL>";
    
    var options = {indentation: '\t'};
    cawlDocumentInfo = format(cawlDocumentInfo, options);
    
    callback(null);
}

// CAWL Component Database Disconnection
function disconnectMySQL(callback) {
    connection.end();
    
    callback(null);
}

function messageTagGenerating() {
    var messageDocument = "";
    var messageObj = null;
    var partObj = null;
    
    if(messageInfo.children) {
        for(var i = 0; i < messageInfo.children.length; i++) {
        	
            if(messageInfo.children[i].value) {
                messageObj = messageInfo.children[i].value;
                
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
            }
            
        }
    }
    
    return messageDocument;
}

function variableTagGenerating() {
    var variableDocument = "";
    var variableObj = null;
    var initializeObj = null;
    var fromObj = null;
    
    if(variableInfo.children) {
        for(var i = 0; i < variableInfo.children.length; i++) {
            
            if(variableInfo.children[i].value) {
                variableObj = variableInfo.children[i].value;
                
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
            }
            
        }
    }
    
    return variableDocument;
}

function ontologyGenerating() {
    var ontologyDocument = "";
    var ontologyObj = null;
    
    if(ontologyInfo.children) {
        ontologyDocument += "<baseOntologies>";
        
        for(var i = 0; i < ontologyInfo.children.length; i++) {
            
            if(ontologyInfo.children[i].value) {
                ontologyObj = ontologyInfo.children[i].value;
                
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
            }
            
        }
        
        ontologyDocument += "</baseOntologies>";
    }
    
    return ontologyDocument;
}

function serviceProviderGenerating() {
    var serviceProviderDocument = "";
    var serviceProviderObj = null;
    var serviceObj = null;
    
    if(serviceProviderInfo.children) {
        for(var i = 0; i < serviceProviderInfo.children.length; i++) {
            
            if(serviceProviderInfo.children[i].value) {
                serviceProviderObj = serviceProviderInfo.children[i].value;
                
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
            }
            
        }
    }
    
    return serviceProviderDocument;
}

function activatorGenerating() {
    var activatorDocument = "";
    var activatorObj = null;
    var messageObj = null;
    var partObj = null;
    var variableObj = null;
    var initializeObj = null;
    var fromObj = null;
    var conditionObj = null;
    var caseObj = null;
    var eventObj = null;
    var contextObj = null;
    var ruleObj = null;
    var constraintObj = null;
    var subjectObj = null;
    var vervObj = null;
    var objectObj = null;
    
    if(activatorInfo.children) {
        for(var i = 0; i < activatorInfo.children.length; i++) {
            
            if(activatorInfo.children[i].value) {
                activatorObj = activatorInfo.children[i].value;
                
                activatorDocument += "<activator";
                
                if(activatorObj.name != "") {
                    activatorDocument += " name=\"" + activatorObj.name + "\"";
                }
                
                activatorDocument += ">";
                
                if(activatorObj.documentation != "") {
                    activatorDocument += "<documentation>" + activatorObj.documentation + "</documentation>";
                }
                
                for(var j = 0; j < activatorObj.message.length; j++) {
                    messageObj = activatorObj.message[j];
                    
                    activatorDocument += "<message";
                    
                    if(messageObj.name != "") {
                        activatorDocument += " name=\"" + messageObj.name + "\"";
                    }
                    
                    activatorDocument += ">";
                    
                    if(messageObj.documentation != "") {
                        activatorDocument += "<documentation>" + messageObj.documentation + "</documentation>";
                    }
                    
                    for(var k = 0; k < messageObj.part.length; k++) {
                        partObj = messageObj.part[k];
                        
                        activatorDocument += "<part";
                        
                        if(partObj.name != "") {
                            activatorDocument += " name=\"" + partObj.name + "\"";
                        }
                        
                        if(partObj.element != "") {
                            activatorDocument += " element=\"" + partObj.element + "\"";
                        }
                        
                        if(partObj.type != "") {
                            activatorDocument += " type=\"" + partObj.type + "\"";
                        }
                        
                        activatorDocument += ">";
                        
                        if(partObj.documentation != "") {
                            activatorDocument += "<documentation>" + partObj.documentation + "</documentation>";
                        }
                        
                        activatorDocument += "</part>";
                    }
                    
                    activatorDocument += "</message>";
                }
                
                for(var j = 0; j < activatorObj.variable.length; j++) {
                    variableObj = activatorObj.variable[j];
                    
                    activatorDocument += "<variable";
                    
                    if(variableObj.name != "") {
                        activatorDocument += " name=\"" + variableObj.name + "\"";
                    }
                    
                    if(variableObj.type != "") {
                        activatorDocument += " type=\"" + variableObj.type + "\"";
                    }
                    
                    activatorDocument += ">";
                    
                    if(variableObj.documentation != "") {
                        activatorDocument += "<documentation>" + variableObj.documentation + "</documentation>";
                    }
                    
                    for(var k = 0; k < variableObj.initialize.length; k++) {
                        initializeObj = variableObj.initialize[k];
                        
                        activatorDocument += "<initialize";
                        
                        if(initializeObj.part != "") {
                            activatorDocument += " part=\"" + initializeObj.part + "\"";
                        }
                        
                        activatorDocument += ">";
                        
                        if(initializeObj.documentation != "") {
                            activatorDocument += "<documentation>" + initializeObj.documentation + "</documentation>";
                        }
                        
                        for(var l = 0; l < initializeObj.from.length; l++) {
                            fromObj = initializeObj.from[l];
                            
                            activatorDocument += "<from";
                            
                            if(fromObj.variable != "") {
                                activatorDocument += " variable=\"" + fromObj.variable + "\"";
                            }
                            
                            if(fromObj.part != "") {
                                activatorDocument += " part=\"" + fromObj.part + "\"";
                            }
                            
                            if(fromObj.expression != "") {
                                activatorDocument += " expression=\"" + fromObj.expression + "\"";
                            }
                            
                            activatorDocument += ">";
                            
                            if(fromObj.documentation != "") {
                                activatorDocument += "<documentation>" + fromObj.documentation + "</documentation>";
                            }
                            
                            activatorDocument += "</from>";
                        }
                        
                        activatorDocument += "</initialize>";
                    }
                    
                    activatorDocument += "</variable>";
                }
                
                for(var j = 0; j < activatorObj.condition.length; j++) {
                    conditionObj = activatorObj.condition[j];
                    
                    activatorDocument += "<condition";
                    
                    if(conditionObj.expression != "") {
                        activatorDocument += " expression=\"" + conditionObj.expression + "\"";
                    }
                    
                    activatorDocument += ">";
                    
                    if(conditionObj.documentation != "") {
                        activatorDocument += "<documentation>" + conditionObj.documentation + "</documentation>";
                    }
                    
                    for(var k = 0; k < conditionObj.case.length; k++) {
                        caseObj = conditionObj.case[k];
                        
                        activatorDocument += "<case";
                        
                        if(caseObj.name != "") {
                            activatorDocument += " name=\"" + caseObj.name + "\"";
                        }
                        
                        if(caseObj.expression != "") {
                            activatorDocument += " expression=\"" + caseObj.expression + "\"";
                        }
                        
                        activatorDocument += ">";
                        
                        if(caseObj.documentation != "") {
                            activatorDocument += "<documentation>" + caseObj.documentation + "</documentation>";
                        }
                        
                        for(var l = 0; l < caseObj.event.length; l++) {
                            eventObj = caseObj.event[l];
                            
                            activatorDocument += "<event";
                            
                            if(eventObj.name != "") {
                                activatorDocument += " name=\"" + eventObj.name + "\"";
                            }
                            
                            if(eventObj.operation != "") {
                                activatorDocument += " operation=\"" + eventObj.operation + "\"";
                            }
                            
                            activatorDocument += ">";
                            
                            if(eventObj.documentation != "") {
                                activatorDocument += "<documentation>" + eventObj.documentation + "</documentation>";
                            }
                            
                            activatorDocument += "</event>";
                        }
                        
                        activatorDocument += "</case>";
                    }
                    
                    for(var k = 0; k < conditionObj.context.length; k++) {
                        contextObj = conditionObj.context[k];
                        
                        activatorDocument += "<context";
                        
                        if(contextObj.name != "") {
                            activatorDocument += " name=\"" + contextObj.name + "\"";
                        }
                        
                        if(contextObj.priority != "") {
                            activatorDocument += " priority=\"" + contextObj.priority + "\"";
                        }
                        
                        activatorDocument += ">";
                        
                        if(contextObj.documentation != "") {
                            activatorDocument += "<documentation>" + contextObj.documentation + "</documentation>";
                        }
                        
                        for(var l = 0; l < contextObj.rule.length; l++) {
                            ruleObj = contextObj.rule[l];
                            
                            activatorDocument += "<rule";
                            
                            if(ruleObj.name != "") {
                                activatorDocument += " name=\"" + ruleObj.name + "\"";
                            }
                            
                            if(ruleObj.expression != "") {
                                activatorDocument += " expression=\"" + ruleObj.expression + "\"";
                            }
                            
                            activatorDocument += ">";
                            
                            if(ruleObj.documentation != "") {
                                activatorDocument += "<documentation>" + ruleObj.documentation + "</documentation>";
                            }
                            
                            for(var m = 0; m < ruleObj.constraint.length; m++) {
                                constraintObj = ruleObj.constraint[m];
                                
                                activatorDocument += "<constraint";
                                
                                if(constraintObj.name != "") {
                                    activatorDocument += " name=\"" + constraintObj.name + "\"";
                                }
                                
                                activatorDocument += ">";
                                
                                if(constraintObj.documentation != "") {
                                    activatorDocument += "<documentation>" + constraintObj.documentation + "</documentation>";
                                }
                                
                                for(var n = 0; n < constraintObj.subject.length; n++) {
                                    subjectObj = constraintObj.subject[n];
                                    
                                    activatorDocument += "<subject";
                                    
                                    if(subjectObj.type != "") {
                                        activatorDocument += " type=\"" + subjectObj.type + "\"";
                                    }
                                    
                                    activatorDocument += ">";
                                    
                                    if(subjectObj.value != "") {
                                        activatorDocument += subjectObj.value;
                                    }
                                    
                                    activatorDocument += "</subject>";
                                }
                                
                                for(var n = 0; n < constraintObj.verb.length; n++) {
                                    verbObj = constraintObj.verb[n];
                                    
                                    activatorDocument += "<verb";
                                    
                                    activatorDocument += ">";
                                    
                                    if(verbObj.value != "") {
                                        activatorDocument += verbObj.value;
                                    }
                                    
                                    activatorDocument += "</verb>";
                                }
                                
                                for(var n = 0; n < constraintObj.object.length; n++) {
                                    objectObj = constraintObj.object[n];
                                    
                                    activatorDocument += "<object";
                                    
                                    if(objectObj.type != "") {
                                        activatorDocument += " type=\"" + objectObj.type + "\"";
                                    }
                                    
                                    activatorDocument += ">";
                                    
                                    if(objectObj.value != "") {
                                        activatorDocument += objectObj.value;
                                    }
                                    
                                    activatorDocument += "</object>";
                                }
                                
                                activatorDocument += "</constraint>";
                            }
                            
                            activatorDocument += "</rule>";
                        }
                        
                        activatorDocument += "</context>";
                    }
                    
                    activatorDocument += "</condition>";
                }
                
                for(var key in workflowInfo.links) {
                    var linkTemp = workflowInfo.links[key];
                    var strList1 = linkTemp.fromOperator.split('_');
                    var strList2 = linkTemp.toOperator.split('_');
                    
                    
                    if(strList1[0] == "Activator") {
                        if(flowInfo.children) {
                            for(var keyI = 0; keyI < flowInfo.children.length; keyI++) {
                                
                                if(flowInfo.children[keyI].value) {
                                    if(flowInfo.children[keyI].value.flow_id == strList2[1]) {
                                        activatorDocument += "<activate flow=\"";
                                        activatorDocument += flowInfo.children[keyI].value.name;
                                        activatorDocument += "\"></activate>";
                                    }
                                }
                            }
                        }
                    }
                }
                
                activatorDocument += "</activator>";
            }
            
        }
    }
    
    return activatorDocument;
}

function flowGenerating() {
    var flowDocument = "";
    var flowObj = null;
    var messageObj = null;
    var partObj = null;
    var variableObj = null;
    var initializeObj = null;
    var fromObj = null;
    var sourceObj = null;
    var sinkObj = null;
    
    var linkDocument = "";
    nodeOverlapCheck = new Array();
    
    if(flowInfo.children) {
        for(var i = 0; i < flowInfo.children.length; i++) {
            
            if(flowInfo.children[i].value) {
                flowObj = flowInfo.children[i].value;
                
                flowDocument += "<flow";
                
                if(flowObj.name != "") {
                    flowDocument += " name=\"" + flowObj.name + "\"";
                }
                
                flowDocument += ">";
                
                if(flowObj.documentation != "") {
                    flowDocument += "<documentation>" + flowObj.documentation + "</documentation>";
                }
                
                for(var j = 0; j < flowObj.message.length; j++) {
                    messageObj = flowObj.message[j];
                    
                    flowDocument += "<message";
                    
                    if(messageObj.name != "") {
                        flowDocument += " name=\"" + messageObj.name + "\"";
                    }
                    
                    flowDocument += ">";
                    
                    if(messageObj.documentation != "") {
                        flowDocument += "<documentation>" + messageObj.documentation + "</documentation>";
                    }
                    
                    for(var k = 0; k < messageObj.part.length; k++) {
                        partObj = messageObj.part[k];
                        
                        flowDocument += "<part";
                        
                        if(partObj.name != "") {
                            flowDocument += " name=\"" + partObj.name + "\"";
                        }
                        
                        if(partObj.element != "") {
                            flowDocument += " element=\"" + partObj.element + "\"";
                        }
                        
                        if(partObj.type != "") {
                            flowDocument += " type=\"" + partObj.type + "\"";
                        }
                        
                        flowDocument += ">";
                        
                        if(partObj.documentation != "") {
                            flowDocument += "<documentation>" + partObj.documentation + "</documentation>";
                        }
                        
                        flowDocument += "</part>";
                    }
                    
                    flowDocument += "</message>";
                }
                
                for(var j = 0; j < flowObj.variable.length; j++) {
                    variableObj = flowObj.variable[j];
                    
                    flowDocument += "<variable";
                    
                    if(variableObj.name != "") {
                        flowDocument += " name=\"" + variableObj.name + "\"";
                    }
                    
                    if(variableObj.type != "") {
                        flowDocument += " type=\"" + variableObj.type + "\"";
                    }
                    
                    flowDocument += ">";
                    
                    if(variableObj.documentation != "") {
                        flowDocument += "<documentation>" + variableObj.documentation + "</documentation>";
                    }
                    
                    for(var k = 0; k < variableObj.initialize.length; k++) {
                        initializeObj = variableObj.initialize[k];
                        
                        flowDocument += "<initialize";
                        
                        if(initializeObj.part != "") {
                            flowDocument += " part=\"" + initializeObj.part + "\"";
                        }
                        
                        flowDocument += ">";
                        
                        if(initializeObj.documentation != "") {
                            flowDocument += "<documentation>" + initializeObj.documentation + "</documentation>";
                        }
                        
                        for(var l = 0; l < initializeObj.from.length; l++) {
                            fromObj = initializeObj.from[l];
                            
                            flowDocument += "<from";
                            
                            if(fromObj.variable != "") {
                                flowDocument += " variable=\"" + fromObj.variable + "\"";
                            }
                            
                            if(fromObj.part != "") {
                                flowDocument += " part=\"" + fromObj.part + "\"";
                            }
                            
                            if(fromObj.expression != "") {
                                flowDocument += " expression=\"" + fromObj.expression + "\"";
                            }
                            
                            flowDocument += ">";
                            
                            if(fromObj.documentation != "") {
                                flowDocument += "<documentation>" + fromObj.documentation + "</documentation>";
                            }
                            
                            flowDocument += "</from>";
                        }
                        
                        flowDocument += "</initialize>";
                    }
                    
                    flowDocument += "</variable>";
                }
                
                for(var j = 0; j < flowObj.source.length; j++) {
                    sourceObj = flowObj.source[j];
                    
                    flowDocument += "<source";
                    
                    if(sourceObj.name != "") {
                        flowDocument += " name=\"" + sourceObj.name + "\"";
                    }
                    
                    flowDocument += ">";
                    
                    if(sourceObj.documentation != "") {
                        flowDocument += "<documentation>" + sourceObj.documentation + "</documentation>";
                    }
                    
                    flowDocument += "</source>";
                }
                
                if(nodeInfo.children) {
                    var nodeList = new Array();
                    var nodeTempList = new Array();
                    
                    for(var j in workflowInfo.links) {
                        if("Flow_" + flowObj.flow_id == workflowInfo.links[j].fromOperator) {
                            var checkNode = workflowInfo.links[j].toOperator.split('_');
                            
                            if(checkNode[0] == "Node") {
                                nodeList.push(workflowInfo.links[j].toOperator);
                            }
                        }
                    }
                    
                    for(var j = 0; j < nodeList.length; j++) {
                        var nodeId = nodeList[j].split('_');
                        
                        flowDocument += nodeGenerating(nodeId[1]);
                        
                        var nodeName = null;
                        
                        for(var k = 0; k < nodeInfo.children.length; k++) {
                            if(nodeInfo.children[k].value) {
                                if(nodeId[1] == nodeInfo.children[k].value.node_id) {
                                    nodeName = nodeInfo.children[k].value.name;
                                }
                            }
                        }
                        
                        linkDocument += "<link";
                        
                        for(var k = 0; k < flowObj.source.length; k++) {
                            linkDocument += " from=\"";
                            
                            var sourceTemp = flowObj.source[k];
                            
                            linkDocument += sourceTemp.name;
                            
                            linkDocument += "\"";
                        }
                        
                        for(var k in workflowInfo.links) {
                            if(nodeList[j] == workflowInfo.links[k].toOperator) {
                                linkDocument += " to=\"";
                                
                                linkDocument += nodeName;
                                
                                linkDocument += "\"";
                            }
                        }
                        
                        linkDocument += "></link>";
                        
                        var nextNodeCheck = true;
                        
                        for(var k in workflowInfo.links) {
                            if(nodeList[j] == workflowInfo.links[k].fromOperator) {
                                var nextNodeCheckTemp = workflowInfo.links[k].toOperator.split('_');
                                
                                if(nextNodeCheckTemp[0] != "Flow") {
                                    nextNodeCheck = false;
                                }
                            }
                        }
                        
                        if(nextNodeCheck) {
                            linkDocument += "<link from=\"";
                            
                            linkDocument += nodeName;
                            
                            for(var k = 0; k < flowObj.sink.length; k++) {
                                linkDocument += "\" to=\"";
                                
                                var sinkTemp = flowObj.sink[k];
                                
                                linkDocument += sinkTemp.name;
                            }
                            
                            linkDocument += "\"></link>";
                        }
                        
                    }
                    
                    for(var check in workflowInfo.links) {
                        for(var j = 0; j < nodeList.length; j++) {
                            for(var k in workflowInfo.links) {
                                if(nodeList[j] == workflowInfo.links[k].fromOperator) {
                                    var checkNode = workflowInfo.links[k].toOperator.split('_');
                                    
                                    if(checkNode[0] == "Node") {
                                        nodeTempList.push(workflowInfo.links[k].toOperator);
                                    }
                                }
                            }
                        }
                        
                        if(nodeTempList.length == 0) {
                            break;
                        }
                        
                        nodeList = nodeTempList;
                        nodeTempList = new Array();
                        
                        var overCheckFront = new Array();
                        var overCheckBack = new Array();
                        var toggleFront = true;
                        var toggleBack = true;
                        
                        var overSink = new Array;
                        
                        for(var j = 0; j < nodeList.length; j++) {
                            var nodeId = nodeList[j].split('_');
                            
                            flowDocument += nodeGenerating(nodeId[1]);
                            
                            var nodeName = null;
                            
                            for(var k = 0; k < nodeInfo.children.length; k++) {
                                if(nodeInfo.children[k].value) {
                                    if(nodeId[1] == nodeInfo.children[k].value.node_id) {
                                        nodeName = nodeInfo.children[k].value.name;
                                    }
                                }
                            }
                            
                            for(var k in workflowInfo.links) {
                                if(nodeList[j] == workflowInfo.links[k].toOperator) {
                                    for(var l = 0; l < overCheckFront.length; l++) {
                                        if(overCheckFront[l] == workflowInfo.links[k].fromOperator) {
                                            toggleFront = false;
                                            break;
                                        }
                                    }
                                    
                                    for(var l = 0; l < overCheckBack.length; l++) {
                                        if(overCheckBack[l] == workflowInfo.links[k].toOperator) {
                                            toggleBack = false;
                                            break;
                                        }
                                    }
                                    
                                    if(toggleFront || toggleBack) {
                                        linkDocument += "<link from=\"";
                                        
                                        for(var l = 0; l < nodeInfo.children.length; l++) {
                                            if(nodeInfo.children[l].value) {
                                                if("Node_" + nodeInfo.children[l].value.node_id == workflowInfo.links[k].fromOperator) {
                                                    linkDocument += nodeInfo.children[l].value.name;
                                                }
                                            }
                                        }
                                        
                                        linkDocument += "\"";
                                        
                                        linkDocument += " to=\"";
                                        
                                        linkDocument += nodeName;
                                        
                                        linkDocument += "\"></link>";
                                        
                                        overCheckFront.push(workflowInfo.links[k].fromOperator);
                                        overCheckBack.push(workflowInfo.links[k].toOperator);
                                    }
                                }
                            }
                            
                            var nextNodeCheck = true;
                            
                            for(var k in workflowInfo.links) {
                                if(nodeList[j] == workflowInfo.links[k].fromOperator) {
                                    var nextNodeCheckTemp = workflowInfo.links[k].toOperator.split('_');
                                    
                                    if(nextNodeCheckTemp[0] != "Flow") {
                                        nextNodeCheck = false;
                                    }
                                }
                            }
                            
                            if(nextNodeCheck) {
                                var sinkCheck = true;
                                
                                for(var k = 0; k < overSink.length; k++) {
                                    if(overSink[k] == nodeName) {
                                        sinkCheck = false;
                                        break;
                                    }
                                }
                                
                                if(sinkCheck) {
                                    linkDocument += "<link from=\"";
                                    
                                    linkDocument += nodeName;
                                    
                                    for(var k = 0; k < flowObj.sink.length; k++) {
                                        linkDocument += "\" to=\"";
                                        
                                        var sinkTemp = flowObj.sink[k];
                                        
                                        linkDocument += sinkTemp.name;
                                    }
                                    
                                    linkDocument += "\"></link>";
                                    
                                    overSink.push(nodeName);
                                }
                            }
                            
                            toggleFront = true;
                            toggleBack = true;
                        }
                    }
                }
                
                for(var j = 0; j < flowObj.sink.length; j++) {
                    sinkObj = flowObj.sink[j];
                    
                    flowDocument += "<sink";
                    
                    if(sinkObj.name != "") {
                        flowDocument += " name=\"" + sinkObj.name + "\"";
                    }
                    
                    flowDocument += ">";
                    
                    if(sinkObj.documentation != "") {
                        flowDocument += "<documentation>" + sinkObj.documentation + "</documentation>";
                    }
                    
                    flowDocument += "</sink>";
                }
                
                flowDocument += linkDocument;
                linkDocument = "";
                
                flowDocument += "</flow>";
            }
            
        }
    }
    
    return flowDocument;
}

function nodeGenerating(nodeName) {
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
    
    var overlapCheck = true;
    
    for(var confirmVariable = 0; confirmVariable < nodeOverlapCheck.length; confirmVariable++) {
        if(nodeOverlapCheck[confirmVariable] == nodeName) {
            overlapCheck = false;
        }
    }
    
    if(overlapCheck) {
        
        for(var i = 0; i < nodeInfo.children.length; i++) {
            if(nodeInfo.children[i].value) {
                if(nodeName == nodeInfo.children[i].value.node_id) {
                    nodeObj = nodeInfo.children[i].value;
                    
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
                        
                        for(var k in workflowInfo.links) {
                            var linkTemp = workflowInfo.links[k];
                            var strList1 = linkTemp.fromOperator.split('_');
                            var strList2 = linkTemp.toOperator.split('_');
                            
                            if(strList1[0] == "Node") {
                                if(strList2[0] == "Flow") {
                                    
                                    if(nodeObj.node_id == strList1[1]) {
                                        for(var l = 0; l < flowInfo.children.length; l++) {
                                            if(flowInfo.children[l].value.flow_id == strList2[1]) {
                                                nodeDocument += " subflow=\"";
                                                nodeDocument += flowInfo.children[l].value.name;
                                                nodeDocument += "\"";
                                            }
                                        }
                                    }
                                    
                                }
                            }
                            
                        }
                        
                        nodeDocument += ">";
                        
                        if(invokeObj.documentation != "") {
                            nodeDocument += "<documentation>" + invokeObj.documentation + "</documentation>";
                        }
                        
                        nodeDocument += "</invoke>";
                    }
                    
                    if(nodeObj.invoke.length == 0) {
                        for(var j in workflowInfo.links) {
                            var linkTemp = workflowInfo.links[j];
                            var strList1 = linkTemp.fromOperator.split('_');
                            var strList2 = linkTemp.toOperator.split('_');
                            
                            if(strList1[0] == "Node") {
                                if(strList2[0] == "Flow") {
                                    
                                    if(nodeObj.node_id == strList1[1]) {
                                        for(var k = 0; k < flowInfo.children.length; k++) {
                                            if(flowInfo.children[k].value.flow_id == strList2[1]) {
                                                nodeDocument += "<invoke";
                                                nodeDocument += " subflow=\"";
                                                nodeDocument += flowInfo.children[k].value.name;
                                                nodeDocument += "\">";
                                                nodeDocument += "</invoke>";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                    nodeDocument += "</node>";
                    
                    nodeOverlapCheck.push(nodeName);
                }
            }
        }
    }
    
    return nodeDocument;
}

module.exports = router;
