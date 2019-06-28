// Request Shared Component
function getSharedComponent() {
	// Get Shared Component
	$.ajax({
		url:'http://203.253.23.46:3000/ajaxController/sharedComponentProvider',
        dataType:'json',
        type:'POST',
        data:{'msg':'getSharedComponent'},
        success:function(result) {
        	if(result['result'] == true) {
        		// Set Shared Message Component
        		sharedMessageComponent = new Array();
        		sharedMessageComponent = result['message'];
        		
        		// Set Shared Variable Component
        		sharedVariableComponent = new Array();
        		sharedVariableComponent = result['variable'];
        		
        		// Set Shared Ontology Component
        		sharedOntologyComponent = new Array();
        		sharedOntologyComponent = result['ontology'];
        		
        		// Set Shared Service Provider Component
        		sharedServiceProviderComponent = new Array();
        		sharedServiceProviderComponent = result['serviceProvider'];
        		
        		// Set Shared Node Component
        		sharedNodeComponent = new Array();
        		sharedNodeComponent = result['node'];
        	}
        }
    });
}

// Request CAWL Document Generation
function generateCAWLDocument() {
	var activeTreeData = $('#activeTreeDiv').tree('toJson');
	var workflowData = JSON.stringify($('#diagramScreenWorkflowDiv').flowchart('getData'));
	
	$.ajax({
		url:'http://203.253.23.46:3000/ajaxController/cawlDocumentGenerator',
		dataType:'json',
		type:'POST',
		data:{'msg':'generateCAWLDocument','cawlName':cawlName,'cawlNamespace':cawlNamespace,'cawlVersion':cawlVersion,'cawlDocumentation':cawlDocumentation,'activeTreeInfo':activeTreeData,'workflowInfo':workflowData},
		success:function(result) {
        	if(result['result'] == true) {
        		displayCAWLDocumentSource(result['value']);
        		displayCAWLDocumentValidation("");
        	}
        }
	});
}

// Request CAWL Document Validation
function checkCAWLDocumentValidation() {
	var cawlDocument = $('#sourceScreenTextarea').val();
	
	$.ajax({
		url:'http://203.253.23.46:3000/ajaxController/cawlDocumentValidationChecker',
		dataType:'json',
		type:'POST',
		data:{'msg':'checkCAWLDocumentValidation','cawlDocument':cawlDocument},
		success:function(result) {
			if(result['result'] == true) {
				displayCAWLDocumentValidation(result['value']);
			}
		}
	});
}

// Request CAWL Document Save
function saveCAWLDocument() {
	var cawlDocument = $('#sourceScreenTextarea').val();
	
	$.ajax({
		url:'http://203.253.23.46:3000/ajaxController/cawlDocumentManager',
		dataType:'json',
		type:'POST',
		data:{'msg':'saveCAWLDocument','cawlName':cawlName,'cawlDocument':cawlDocument},
		success:function(result) {
			if(result['result'] == true) {
				alert("The CAWL document has been saved.");
			}
		}
	});
}

// Request Create Configuration Component DB
function createConfigurationComponentDB(type, value) {
	var jsonValue = JSON.stringify(value);
	
	$.ajax({
		url:'http://203.253.23.46:3000/ajaxController/configurationComponentCreater',
		dataType:'json',
		type:'POST',
		data:{'msg':'createConfigurationComponent','type':type,'value':jsonValue},
		success:function(result) {
			if(result['result'] == true) {
				displayCreateConfigurationComponentResult(result['componetID'], result['validationResult'], result['validationValue'], type, value);
			}
		}
	});
}

// Request Update Configuration Component DB
function updateConfigurationComponentDB(type, value) {
	var selectedNode = $('#configurationSharedTreeDiv').tree('getSelectedNode');
	
	$.ajax({
		url:'http://203.253.23.46:3000/ajaxController/configurationComponentDeleter',
		dataType:'json',
		type:'POST',
		data:{'msg':'deleteConfigurationComponent','type':selectedNode.type,'name':selectedNode.name},
		success:function(result) {
			if(result['result'] == true) {
			}
		}
	});
	
	var jsonValue = JSON.stringify(value);
	
	$.ajax({
		url:'http://203.253.23.46:3000/ajaxController/configurationComponentCreater',
		dataType:'json',
		type:'POST',
		data:{'msg':'createConfigurationComponent','type':type,'value':jsonValue},
		success:function(result) {
			if(result['result'] == true) {
				displayUpdateConfigurationComponentResult(result['componetID'], result['validationResult'], result['validationValue'], type, value);
			}
		}
	});
}

// Request Delete Configuration Component DB
function deleteConfigurationComponentDB(type, name) {
	$.ajax({
		url:'http://203.253.23.46:3000/ajaxController/configurationComponentDeleter',
		dataType:'json',
		type:'POST',
		data:{'msg':'deleteConfigurationComponent','type':type,'name':name},
		success:function(result) {
			if(result['result'] == true) {
			}
		}
	});
}

// Request Operation Information from Service Broker
function requestOperation(obj, value) {
	var operationList = ["IoTAltoMove", "IoTAltoReporting", "IoTAltoComeBack", "IoTTurtlebotMoveOne", "IoTTurtlebotMoveTwo", "IoTTurtlebotMoveThree", "IoTTurtlebotMoveFour", "IoTTurtlebotMoveHome"];
	
	if(obj.length == 0) {
		for(var i = 0; i < operationList.length; i++) {
			var newOption = new Option(operationList[i]);
			obj.options[i] = newOption;
		}
		
		if(value != '') {
			for(var i = 0; i < obj.options.length; i++) {
				if(value == obj.options[i].text) {
					obj.options[i].selected = true;
				}
			}
		}
	}
}

// Request Subject Information from Context-Engine
function requestSubject(obj, value) {
	var subjectList = null;
	
	if(obj.length == 0) {
		$.ajax({
			url:'http://203.253.23.46:3000/ajaxController/contextInfoBroker',
			dataType:'json',
			type:'POST',
			data:{'msg':'subject'},
			success:function(result) {
				if(result['result'] == true) {
					subjectList = JSON.parse(result['subjectInfo']);
					
					for(var i = 0; i < subjectList.length; i++) {
						var newOption = new Option(subjectList[i]);
						obj.options[i] = newOption;
					}
					
					if(value != '') {
						for(var i = 0; i < obj.options.length; i++) {
							if(value == obj.options[i].text) {
								obj.options[i].selected = true;
							}
						}
					}
				}
			}
		});
	}
}

// Request Verb Information from Context-Engine
function requestVerb(obj, value) {
	var verbList = null;
	
	if(obj.length == 0) {
		$.ajax({
			url:'http://203.253.23.46:3000/ajaxController/contextInfoBroker',
			dataType:'json',
			type:'POST',
			data:{'msg':'verb'},
			success:function(result) {
				if(result['result'] == true) {
					verbList = JSON.parse(result['verbInfo']);
					
					for(var i = 0; i < verbList.length; i++) {
						var newOption = new Option(verbList[i]);
						obj.options[i] = newOption;
					}
					
					if(value != '') {
						for(var i = 0; i < obj.options.length; i++) {
							if(value == obj.options[i].text) {
								obj.options[i].selected = true;
							}
						}
					}
				}
			}
		});
	}
}

// Request Object Information from Context-Engine
function requestObject(obj, value) {
	var objectList = null;
	
	var subjectValue = null;
	var verbValue = null;
	
	setTimeout(function() {
		if(obj.length == 0) {
			var targetDiv = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
			var targetDivLen = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children.length - 2;
			
			for(var i = 0; i < targetDivLen; i++) {
		        var targetText = targetDiv.children[i + 2].children[0].children[0].children[0].children[0].innerHTML;
		        
		        if(targetText == "Subject") {
		          var subDiv = targetDiv.children[i + 2].children[0].children[1].children[0].children[1].children[1].children[0];
		          
		          subjectValue = subDiv.options[subDiv.selectedIndex].text;
		        }
		        
		        if(targetText == "Verb") {
		          var verbDiv = targetDiv.children[i + 2].children[0].children[1].children[0].children[0].children[1].children[0];
		          
		          verbValue = verbDiv.options[verbDiv.selectedIndex].text;
		        }
		    }
			
			$.ajax({
				url:'http://203.253.23.46:3000/ajaxController/contextInfoBroker',
				dataType:'json',
				type:'POST',
				data:{'msg':'object', 'subject':subjectValue, 'verb':verbValue},
				success:function(result) {
					if(result['result'] == true) {
						objectList = JSON.parse(result['objectInfo']);
						
						for(var i = 0; i < objectList.length; i++) {
							var newOption = new Option(objectList[i]);
							obj.options[i] = newOption;
						}
						
						if(value != '') {
							for(var i = 0; i < obj.options.length; i++) {
								if(value == obj.options[i].text) {
									obj.options[i].selected = true;
								}
							}
						}
					}
				}
			});
		}
	}, 500);
}
