// Message Configuration Details View
function viewConfigurationMessage(component) {
	var messageTemp = new Object();
	var partTempList = new Array();
	var partTemp = new Object();
	
	var messageIndex = "messageDivv_0";
	var messageDiv = null;
	var partIndex = "partDivv_0";
	var partDiv = null;
	
	messageTemp = component;
	
	messageDiv = document.createElement('div');
	messageDiv.setAttribute('id', messageIndex);
	
	getComponentNamePosition('configurationMessageTemplate').setAttribute('value', messageTemp.message_id);
	getRootContentPosition('configurationMessageTemplate').children[0].children[1].children[0].setAttribute('value', messageTemp.name);
	getRootContentPosition('configurationMessageTemplate').children[1].children[1].children[0].setAttribute('value', messageTemp.documentation);
	
	messageDiv.innerHTML = document.getElementById('configurationMessageTemplate').innerHTML;
	document.getElementById('configurationOperationDiv').appendChild(messageDiv);
	
	partTempList = messageTemp.part;
	
	for(var i = 0; i < partTempList.length; i++) {
		partTemp = partTempList[i];
		
		partDiv = document.createElement('div');
		partDiv.setAttribute('id', partIndex);
		
		getChildContentPosition('configurationPartTemplate').children[0].children[1].children[0].setAttribute('value', partTemp.name);
		getChildContentPosition('configurationPartTemplate').children[1].children[1].children[0].setAttribute('value', partTemp.element);
		getChildContentPosition('configurationPartTemplate').children[2].children[1].children[0].setAttribute('value', partTemp.type);
		getChildContentPosition('configurationPartTemplate').children[3].children[1].children[0].setAttribute('value', partTemp.documentation);
		
		partDiv.innerHTML = document.getElementById('configurationPartTemplate').innerHTML;
		document.getElementById(messageIndex).appendChild(partDiv);
	}
	
	messageIndex = jumpIndex(messageIndex);
}

// Variable Configuration Details View
function viewConfigurationVariable(component) {
	var variableTemp = new Object();
	var initializeTempList = new Array();
	var initializeTemp = new Object();
	var fromTempList = new Array();
	var fromTemp = new Object();
	
	var variableIndex = "variableDivv_0";
	var variableDiv = null;
	var initializeIndex = "initializeDivv_0";
	var initializeDiv = null;
	var fromIndex = "fromDivv_0";
	var fromDiv = null;
	
	variableTemp = component;
	
	variableDiv = document.createElement('div');
	variableDiv.setAttribute('id', variableIndex);
	
	getComponentNamePosition('configurationVariableTemplate').setAttribute('value', variableTemp.variable_id);
	getRootContentPosition('configurationVariableTemplate').children[0].children[1].children[0].setAttribute('value', variableTemp.name);
	getRootContentPosition('configurationVariableTemplate').children[1].children[1].children[0].setAttribute('value', variableTemp.type);
	getRootContentPosition('configurationVariableTemplate').children[2].children[1].children[0].setAttribute('value', variableTemp.documentation);
	
	variableDiv.innerHTML = document.getElementById('configurationVariableTemplate').innerHTML;
	document.getElementById('configurationOperationDiv').appendChild(variableDiv);
	
	initializeTempList = variableTemp.initialize;
	
	for(var i = 0; i < initializeTempList.length; i++) {
		initializeTemp = initializeTempList[i];
		
		initializeDiv = document.createElement('div');
		initializeDiv.setAttribute('id', initializeIndex);
		
		getChildContentPosition('configurationInitializeTemplate').children[0].children[1].children[0].setAttribute('value', initializeTemp.part);
		getChildContentPosition('configurationInitializeTemplate').children[1].children[1].children[0].setAttribute('value', initializeTemp.documentation);
		
		initializeDiv.innerHTML = document.getElementById('configurationInitializeTemplate').innerHTML;
		document.getElementById(variableIndex).appendChild(initializeDiv);
		
		fromTempList = initializeTemp.from;
		
		for(var j = 0; j < fromTempList.length; j++) {
			fromTemp = fromTempList[j];
			
			fromDiv = document.createElement('div');
			fromDiv.setAttribute('id', fromIndex);
			
			getChildContentPosition('configurationFromTemplate').children[0].children[1].children[0].setAttribute('value', fromTemp.variable);
			getChildContentPosition('configurationFromTemplate').children[1].children[1].children[0].setAttribute('value', fromTemp.part);
			getChildContentPosition('configurationFromTemplate').children[2].children[1].children[0].setAttribute('value', fromTemp.expression);
			getChildContentPosition('configurationFromTemplate').children[3].children[1].children[0].setAttribute('value', fromTemp.documentation);
			
			fromDiv.innerHTML = document.getElementById('configurationFromTemplate').innerHTML;
			document.getElementById(initializeIndex).appendChild(fromDiv);
		}
		
		initializeIndex = jumpIndex(initializeIndex);
	}
	
	variableIndex = jumpIndex(variableIndex);
}

// Ontology Configuration Details View
function viewConfigurationOntology(component) {
	var ontologyTemp = new Object();
	
	var ontologyIndex = "ontologyDivv_0";
	var ontologyDiv = null;
	
	ontologyTemp = component;
	
	ontologyDiv = document.createElement('div');
	ontologyDiv.setAttribute('id', ontologyIndex);
	
	getComponentNamePosition('configurationOntologyTemplate').setAttribute('value', ontologyTemp.ontology_id);
	getRootContentPosition('configurationOntologyTemplate').children[0].children[1].children[0].setAttribute('value', ontologyTemp.location);
	getRootContentPosition('configurationOntologyTemplate').children[1].children[1].children[0].setAttribute('value', ontologyTemp.namespace);
	getRootContentPosition('configurationOntologyTemplate').children[2].children[1].children[0].setAttribute('value', ontologyTemp.documentation);
	
	ontologyDiv.innerHTML = document.getElementById('configurationOntologyTemplate').innerHTML;
	document.getElementById('configurationOperationDiv').appendChild(ontologyDiv);
}

// Service Provider Configuration Details View
function viewConfigurationServiceProvider(component) {
	var serviceProviderTemp = new Object();
	var serviceTempList = new Array();
	var serviceTemp = new Object();
	
	var serviceProviderIndex = "serviceProviderDivv_0";
	var serviceProviderDiv = null;
	var serviceIndex = "serviceDivv_0";
	var serviceDiv = null;
	
	serviceProviderTemp = component;
	
	serviceProviderDiv = document.createElement('div');
	serviceProviderDiv.setAttribute('id', serviceProviderIndex);
	
	getComponentNamePosition('configurationServiceProviderTemplate').setAttribute('value', serviceProviderTemp.serviceprovider_id);
	getRootContentPosition('configurationServiceProviderTemplate').children[0].children[1].children[0].setAttribute('value', serviceProviderTemp.name);
	getRootContentPosition('configurationServiceProviderTemplate').children[1].children[1].children[0].setAttribute('value', serviceProviderTemp.location);
	getRootContentPosition('configurationServiceProviderTemplate').children[2].children[1].children[0].setAttribute('value', serviceProviderTemp.documentation);
	
	serviceProviderDiv.innerHTML = document.getElementById('configurationServiceProviderTemplate').innerHTML;
	document.getElementById('configurationOperationDiv').appendChild(serviceProviderDiv);
	
	serviceTempList = serviceProviderTemp.service;
	
	for(var i = 0; i < serviceTempList.length; i++) {
		serviceTemp = serviceTempList[i];
		
		serviceDiv = document.createElement('div');
		serviceDiv.setAttribute('id', serviceIndex);
		
		getChildContentPosition('configurationServiceTemplate').children[0].children[1].children[0].setAttribute('value', serviceTemp.operation);
		getChildContentPosition('configurationServiceTemplate').children[1].children[1].children[0].setAttribute('value', serviceTemp.documentation);
		
		serviceDiv.innerHTML = document.getElementById('configurationServiceTemplate').innerHTML;
		document.getElementById(serviceProviderIndex).appendChild(serviceDiv);
	}
	
	serviceProviderIndex = jumpIndex(serviceProviderIndex);
}

// Node Configuration Details View
function viewConfigurationNode(component) {
	var nodeTemp = new Object();
	var messageTempList = new Array();
	var messageTemp = new Object();
	var partTempList = new Array();
	var partTemp = new Object();
	var variableTempList = new Array();
	var variableTemp = new Object();
	var initializeTempList = new Array();
	var initializeTemp = new Object();
	var fromTempList = new Array();
	var fromTemp = new Object();
	var waitTempList = new Array();
	var waitTemp = new Object();
	var conditionTempList = new Array();
	var conditionTemp = new Object();
	var caseTempList = new Array();
	var caseTemp = new Object();
	var eventTempList = new Array();
	var eventTemp = new Object();
	var contextTempList = new Array();
	var contextTemp = new Object();
	var ruleTempList = new Array();
	var ruleTemp = new Object();
	var constraintTempList = new Array();
	var constraintTemp = new Object();
	var subjectTempList = new Array();
	var subjectTemp = new Object();
	var verbTempList = new Array();
	var verbTemp = new Object();
	var objectTempList = new Array();
	var objectTemp = new Object();
	var invokeTempList = new Array();
	var invokeTemp = new Object();
	
	var nodeIndex = "nodeDivv_0";
	var nodeDiv = null;
	var messageIndex = "messageDivv_0";
	var messageDiv = null;
	var partIndex = "partDivv_0";
	var partDiv = null;
	var variableIndex = "variableDivv_0";
	var variableDiv = null;
	var initializeIndex = "initializeDivv_0";
	var initializeDiv = null;
	var fromIndex = "fromDivv_0";
	var fromDiv = null;
	var waitIndex = "waitDivv_0";
	var waitDiv = null;
	var conditionIndex = "conditionDivv_0";
	var conditionDiv = null;
	var caseIndex = "caseDivv_0";
	var caseDiv = null;
	var eventIndex = "eventDivv_0";
	var eventDiv = null;
	var contextIndex = "contextDivv_0";
	var contextDiv = null;
	var ruleIndex = "ruleDivv_0";
	var ruleDiv = null;
	var constraintIndex = "constraintDivv_0";
	var constraintDiv = null;
	var subjectIndex = "subjectDivv_0";
	var subjectDiv = null;
	var verbIndex = "verbDivv_0";
	var verbDiv = null;
	var objectIndex = "objectDivv_0";
	var objectDiv = null;
	var invokeIndex = "invokeDivv_0";
	var invokeDiv = null;
	
	nodeTemp = component;
	
	nodeDiv = document.createElement('div');
	nodeDiv.setAttribute('id', nodeIndex);
	
	getComponentNamePosition('configurationNodeTemplate').setAttribute('value', nodeTemp.node_id);
	getRootContentPosition('configurationNodeTemplate').children[0].children[1].children[0].setAttribute('value', nodeTemp.name);
	getRootContentPosition('configurationNodeTemplate').children[1].children[1].children[0].setAttribute('value', nodeTemp.state);
	getRootContentPosition('configurationNodeTemplate').children[2].children[1].children[0].setAttribute('value', nodeTemp.documentation);
	
	nodeDiv.innerHTML = document.getElementById('configurationNodeTemplate').innerHTML;
	document.getElementById('configurationOperationDiv').appendChild(nodeDiv);
	
	messageTempList = nodeTemp.message;
	variableTempList = nodeTemp.variable;
	waitTempList = nodeTemp.wait;
	conditionTempList = nodeTemp.condition;
	invokeTempList = nodeTemp.invoke;
	
	for(var i = 0; i < messageTempList.length; i++ ) {
		messageTemp = messageTempList[i];
		
		messageDiv = document.createElement('div');
		messageDiv.setAttribute('id', messageIndex);
		
		getChildContentPosition('configurationReuseMessageTemplate').children[0].children[1].children[0].setAttribute('value', messageTemp.name);
		getChildContentPosition('configurationReuseMessageTemplate').children[1].children[1].children[0].setAttribute('value', messageTemp.documentation);
		
		messageDiv.innerHTML = document.getElementById('configurationReuseMessageTemplate').innerHTML;
		document.getElementById(nodeIndex).appendChild(messageDiv);
		
		partTempList = messageTemp.part;
		
		for(var j = 0; j < partTempList.length; j++) {
			partTemp = partTempList[j];
			
			partDiv = document.createElement('div');
			partDiv.setAttribute('id', partIndex);
			
			getChildContentPosition('configurationPartTemplate').children[0].children[1].children[0].setAttribute('value', partTemp.name);
			getChildContentPosition('configurationPartTemplate').children[1].children[1].children[0].setAttribute('value', partTemp.element);
			getChildContentPosition('configurationPartTemplate').children[2].children[1].children[0].setAttribute('value', partTemp.type);
			getChildContentPosition('configurationPartTemplate').children[3].children[1].children[0].setAttribute('value', partTemp.documentation);
			
			partDiv.innerHTML = document.getElementById('configurationPartTemplate').innerHTML;
			document.getElementById(messageIndex).appendChild(partDiv);
		}
		
		messageIndex = jumpIndex(messageIndex);
	}
	
	for(var i = 0; i < variableTempList.length; i++) {
		variableTemp = variableTempList[i];
		
		variableDiv = document.createElement('div');
		variableDiv.setAttribute('id', variableIndex);
		
		getChildContentPosition('configurationReuseVariableTemplate').children[0].children[1].children[0].setAttribute('value', variableTemp.name);
		getChildContentPosition('configurationReuseVariableTemplate').children[1].children[1].children[0].setAttribute('value', variableTemp.type);
		getChildContentPosition('configurationReuseVariableTemplate').children[2].children[1].children[0].setAttribute('value', variableTemp.documentation);
		
		variableDiv.innerHTML = document.getElementById('configurationReuseVariableTemplate').innerHTML;
		document.getElementById(nodeIndex).appendChild(variableDiv);
		
		initializeTempList = variableTemp.initialize;
		
		for(var j = 0; j < initializeTempList.length; j++) {
			initializeTemp = initializeTempList[j];
			
			initializeDiv = document.createElement('div');
			initializeDiv.setAttribute('id', initializeIndex);
			
			getChildContentPosition('configurationInitializeTemplate').children[0].children[1].children[0].setAttribute('value', initializeTemp.part);
			getChildContentPosition('configurationInitializeTemplate').children[1].children[1].children[0].setAttribute('value', initializeTemp.documentation);
			
			initializeDiv.innerHTML = document.getElementById('configurationInitializeTemplate').innerHTML;
			document.getElementById(variableIndex).appendChild(initializeDiv);
			
			fromTempList = initializeTemp.from;
			
			for(var k = 0; k < fromTempList.length; k++) {
				fromTemp = fromTempList[k];
				
				fromDiv = document.createElement('div');
				fromDiv.setAttribute('id', fromIndex);
				
				getChildContentPosition('configurationFromTemplate').children[0].children[1].children[0].setAttribute('value', fromTemp.variable);
				getChildContentPosition('configurationFromTemplate').children[1].children[1].children[0].setAttribute('value', fromTemp.part);
				getChildContentPosition('configurationFromTemplate').children[2].children[1].children[0].setAttribute('value', fromTemp.expression);
				getChildContentPosition('configurationFromTemplate').children[3].children[1].children[0].setAttribute('value', fromTemp.documentation);
				
				fromDiv.innerHTML = document.getElementById('configurationFromTemplate').innerHTML;
				document.getElementById(initializeIndex).appendChild(fromDiv);
			}
			
			initializeIndex = jumpIndex(initializeIndex);
		}
		
		variableIndex = jumpIndex(variableIndex);
	}
	
	for(var i = 0; i < waitTempList.length; i++) {
		waitTemp = waitTempList[i];
		
		waitDiv = document.createElement('div');
		waitDiv.setAttribute('id', waitIndex);
		
		getChildContentPosition('configurationWaitTemplate').children[0].children[1].children[0].setAttribute('value', waitTemp.joinCondition);
		getChildContentPosition('configurationWaitTemplate').children[1].children[1].children[0].setAttribute('value', waitTemp.documentation);
		
		waitDiv.innerHTML = document.getElementById('configurationWaitTemplate').innerHTML;
		document.getElementById(nodeIndex).appendChild(waitDiv);
	}
	
	for(var i = 0; i < conditionTempList.length; i++) {
		conditionTemp = conditionTempList[i];
		
		conditionDiv = document.createElement('div');
		conditionDiv.setAttribute('id', conditionIndex);
		
		getChildContentPosition('configurationConditionTemplate').children[0].children[1].children[0].setAttribute('value', conditionTemp.expression);
		getChildContentPosition('configurationConditionTemplate').children[1].children[1].children[0].setAttribute('value', conditionTemp.documentation);
		
		conditionDiv.innerHTML = document.getElementById('configurationConditionTemplate').innerHTML;
		document.getElementById(nodeIndex).appendChild(conditionDiv);
		
		caseTempList = conditionTemp.case;
		contextTempList = conditionTemp.context;
		
		for(var j = 0; j < caseTempList.length; j++) {
			caseTemp = caseTempList[j];
			
			caseDiv = document.createElement('div');
			caseDiv.setAttribute('id', caseIndex);
			
			getChildContentPosition('configurationCaseTemplate').children[0].children[1].children[0].setAttribute('value', caseTemp.name);
			getChildContentPosition('configurationCaseTemplate').children[1].children[1].children[0].setAttribute('value', caseTemp.expression);
			getChildContentPosition('configurationCaseTemplate').children[2].children[1].children[0].setAttribute('value', caseTemp.documentation);
			
			caseDiv.innerHTML = document.getElementById('configurationCaseTemplate').innerHTML;
			document.getElementById(conditionIndex).appendChild(caseDiv);
			
			eventTempList = caseTemp.event;
			
			for(var k = 0; k < eventTempList.length; k++) {
				eventTemp = eventTempList[k];
				
				eventDiv = document.createElement('div');
				eventDiv.setAttribute('id', eventIndex);
				
				getChildContentPosition('configurationEventTemplate').children[0].children[1].children[0].setAttribute('value', eventTemp.name);
				getChildContentPosition('configurationEventTemplate').children[1].children[1].children[0].setAttribute('value', eventTemp.operation);
				getChildContentPosition('configurationEventTemplate').children[2].children[1].children[0].setAttribute('value', eventTemp.documentation);
				
				eventDiv.innerHTML = document.getElementById('configurationEventTemplate').innerHTML;
				document.getElementById(caseIndex).appendChild(eventDiv);
			}
			
			caseIndex = jumpIndex(caseIndex);
		}
		
		for(var j = 0; j < contextTempList.length; j++) {
			contextTemp = contextTempList[j];
			
			contextDiv = document.createElement('div');
			contextDiv.setAttribute('id', contextIndex);
			
			getChildContentPosition('configurationContextTemplate').children[0].children[1].children[0].setAttribute('value', contextTemp.name);
			getChildContentPosition('configurationContextTemplate').children[1].children[1].children[0].setAttribute('value', contextTemp.priority);
			getChildContentPosition('configurationContextTemplate').children[2].children[1].children[0].setAttribute('value', contextTemp.documentation);
			
			contextDiv.innerHTML = document.getElementById('configurationContextTemplate').innerHTML;
			document.getElementById(conditionIndex).appendChild(contextDiv);
			
			ruleTempList = contextTemp.rule;
			
			for(var k = 0; k < ruleTempList.length; k++) {
				ruleTemp = ruleTempList[k];
				
				ruleDiv = document.createElement('div');
				ruleDiv.setAttribute('id', ruleIndex);
				
				getChildContentPosition('configurationRuleTemplate').children[0].children[1].children[0].setAttribute('value', ruleTemp.name);
				getChildContentPosition('configurationRuleTemplate').children[1].children[1].children[0].setAttribute('value', ruleTemp.expression);
				getChildContentPosition('configurationRuleTemplate').children[2].children[1].children[0].setAttribute('value', ruleTemp.documentation);
				
				ruleDiv.innerHTML = document.getElementById('configurationRuleTemplate').innerHTML;
				document.getElementById(contextIndex).appendChild(ruleDiv);
				
				constraintTempList = ruleTemp.constraint;
				
				for(var l = 0; l < constraintTempList.length; l++) {
					constraintTemp = constraintTempList[l];
					
					constraintDiv = document.createElement('div');
					constraintDiv.setAttribute('id', constraintIndex);
					
					getChildContentPosition('configurationConstraintTemplate').children[0].children[1].children[0].setAttribute('value', constraintTemp.name);
					getChildContentPosition('configurationConstraintTemplate').children[1].children[1].children[0].setAttribute('value', constraintTemp.documentation);
					
					constraintDiv.innerHTML = document.getElementById('configurationConstraintTemplate').innerHTML;
					document.getElementById(ruleIndex).appendChild(constraintDiv);
					
					subjectTempList = constraintTemp.subject;
					verbTempList = constraintTemp.verb;
					objectTempList = constraintTemp.object;
					
					for(var m = 0; m < subjectTempList.length; m++) {
						subjectTemp = subjectTempList[m];
						
						subjectDiv = document.createElement('div');
						subjectDiv.setAttribute('id', subjectIndex);
						
						getChildContentPosition('configurationSubjectTemplate').children[0].children[1].children[0].setAttribute('value', subjectTemp.type);
						getChildContentPosition('configurationSubjectTemplate').children[1].children[1].children[0].setAttribute('value', subjectTemp.value);
						
						subjectDiv.innerHTML = document.getElementById('configurationSubjectTemplate').innerHTML;
						document.getElementById(constraintIndex).appendChild(subjectDiv);
					}
					
					for(var m = 0; m < verbTempList.length; m++) {
						verbTemp = verbTempList[m];
						
						verbDiv = document.createElement('div');
						verbDiv.setAttribute('id', verbIndex);
						
						getChildContentPosition('configurationVerbTemplate').children[0].children[1].children[0].setAttribute('value', verbTemp.value);
						
						verbDiv.innerHTML = document.getElementById('configurationVerbTemplate').innerHTML;
						document.getElementById(constraintIndex).appendChild(verbDiv);
					}
					
					for(var m = 0; m < objectTempList.length; m++) {
						objectTemp = objectTempList[m];
						
						objectDiv = document.createElement('div');
						objectDiv.setAttribute('id', objectIndex);
						
						getChildContentPosition('configurationObjectTemplate').children[0].children[1].children[0].setAttribute('value', objectTemp.type);
						getChildContentPosition('configurationObjectTemplate').children[1].children[1].children[0].setAttribute('value', objectTemp.value);
						
						objectDiv.innerHTML = document.getElementById('configurationObjectTemplate').innerHTML;
						document.getElementById(constraintIndex).appendChild(objectDiv);
					}
					
					constraintIndex = jumpIndex(constraintIndex);
				}
				
				ruleIndex = jumpIndex(ruleIndex);
			}
			
			contextIndex = jumpIndex(contextIndex);
		}
		
		conditionIndex = jumpIndex(conditionIndex);
	}
	
	for(var i = 0; i < invokeTempList.length; i++) {
		invokeTemp = invokeTempList[i];
		
		invokeDiv = document.createElement('div');
		invokeDiv.setAttribute('id', invokeIndex);
		
		getChildContentPosition('configurationInvokeTemplate').children[0].children[1].children[0].setAttribute('value', invokeTemp.operation);
		getChildContentPosition('configurationInvokeTemplate').children[1].children[1].children[0].setAttribute('value', invokeTemp.documentation);
		
		invokeDiv.innerHTML = document.getElementById('configurationInvokeTemplate').innerHTML;
		document.getElementById(nodeIndex).appendChild(invokeDiv);
	}
	
	nodeIndex = jumpIndex(nodeIndex);
}
