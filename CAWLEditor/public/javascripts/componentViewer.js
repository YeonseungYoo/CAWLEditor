// Message Details View
function viewMessage(component) {
	var messageTemp = new Object();
	var partTempList = new Array();
	var partTemp = new Object();
	
	var messageIndex = "messageDiv_0";
	var messageDiv = null;
	var partIndex = "partDiv_0";
	var partDiv = null;
	
	messageTemp = component;
	
	messageDiv = document.createElement('div');
	messageDiv.setAttribute('id', messageIndex);
	
	getComponentNamePosition('messageTemplate').setAttribute('value', messageTemp.message_id);
	getRootContentPosition('messageTemplate').children[0].children[1].children[0].setAttribute('value', messageTemp.name);
	getRootContentPosition('messageTemplate').children[1].children[1].children[0].setAttribute('value', messageTemp.documentation);
	
	messageDiv.innerHTML = document.getElementById('messageTemplate').innerHTML;
	document.getElementById('detailsDiv').appendChild(messageDiv);
	
	partTempList = messageTemp.part;
	
	for(var i = 0; i < partTempList.length; i++) {
		partTemp = partTempList[i];
		
		partDiv = document.createElement('div');
		partDiv.setAttribute('id', partIndex);
		
		getChildContentPosition('partTemplate').children[0].children[1].children[0].setAttribute('value', partTemp.name);
		getChildContentPosition('partTemplate').children[1].children[1].children[0].setAttribute('value', partTemp.element);
		getChildContentPosition('partTemplate').children[2].children[1].children[0].setAttribute('value', partTemp.type);
		getChildContentPosition('partTemplate').children[3].children[1].children[0].setAttribute('value', partTemp.documentation);
		
		partDiv.innerHTML = document.getElementById('partTemplate').innerHTML;
		document.getElementById(messageIndex).appendChild(partDiv);
	}
	
	messageIndex = jumpIndex(messageIndex);
}

// Variable Details View
function viewVariable(component) {
	var variableTemp = new Object();
	var initializeTempList = new Array();
	var initializeTemp = new Object();
	var fromTempList = new Array();
	var fromTemp = new Object();
	
	var variableIndex = "variableDiv_0";
	var variableDiv = null;
	var initializeIndex = "initializeDiv_0";
	var initializeDiv = null;
	var fromIndex = "fromDiv_0";
	var fromDiv = null;
	
	variableTemp = component;
	
	variableDiv = document.createElement('div');
	variableDiv.setAttribute('id', variableIndex);
	
	getComponentNamePosition('variableTemplate').setAttribute('value', variableTemp.variable_id);
	getRootContentPosition('variableTemplate').children[0].children[1].children[0].setAttribute('value', variableTemp.name);
	getRootContentPosition('variableTemplate').children[1].children[1].children[0].setAttribute('value', variableTemp.type);
	getRootContentPosition('variableTemplate').children[2].children[1].children[0].setAttribute('value', variableTemp.documentation);
	
	variableDiv.innerHTML = document.getElementById('variableTemplate').innerHTML;
	document.getElementById('detailsDiv').appendChild(variableDiv);
	
	initializeTempList = variableTemp.initialize;
	
	for(var i = 0; i < initializeTempList.length; i++) {
		initializeTemp = initializeTempList[i];
		
		initializeDiv = document.createElement('div');
		initializeDiv.setAttribute('id', initializeIndex);
		
		getChildContentPosition('initializeTemplate').children[0].children[1].children[0].setAttribute('value', initializeTemp.part);
		getChildContentPosition('initializeTemplate').children[1].children[1].children[0].setAttribute('value', initializeTemp.documentation);
		
		initializeDiv.innerHTML = document.getElementById('initializeTemplate').innerHTML;
		document.getElementById(variableIndex).appendChild(initializeDiv);
		
		fromTempList = initializeTemp.from;
		
		for(var j = 0; j < fromTempList.length; j++) {
			fromTemp = fromTempList[j];
			
			fromDiv = document.createElement('div');
			fromDiv.setAttribute('id', fromIndex);
			
			getChildContentPosition('fromTemplate').children[0].children[1].children[0].setAttribute('value', fromTemp.variable);
			getChildContentPosition('fromTemplate').children[1].children[1].children[0].setAttribute('value', fromTemp.part);
			getChildContentPosition('fromTemplate').children[2].children[1].children[0].setAttribute('value', fromTemp.expression);
			getChildContentPosition('fromTemplate').children[3].children[1].children[0].setAttribute('value', fromTemp.documentation);
			
			fromDiv.innerHTML = document.getElementById('fromTemplate').innerHTML;
			document.getElementById(initializeIndex).appendChild(fromDiv);
		}
		
		initializeIndex = jumpIndex(initializeIndex);
	}
	
	variableIndex = jumpIndex(variableIndex);
}

// Ontology Details View
function viewOntology(component) {
	var ontologyTemp = new Object();
	
	var ontologyIndex = "ontologyDiv_0";
	var ontologyDiv = null;
	
	ontologyTemp = component;
	
	ontologyDiv = document.createElement('div');
	ontologyDiv.setAttribute('id', ontologyIndex);
	
	getComponentNamePosition('ontologyTemplate').setAttribute('value', ontologyTemp.ontology_id);
	getRootContentPosition('ontologyTemplate').children[0].children[1].children[0].setAttribute('value', ontologyTemp.location);
	getRootContentPosition('ontologyTemplate').children[1].children[1].children[0].setAttribute('value', ontologyTemp.namespace);
	getRootContentPosition('ontologyTemplate').children[2].children[1].children[0].setAttribute('value', ontologyTemp.documentation);
	
	ontologyDiv.innerHTML = document.getElementById('ontologyTemplate').innerHTML;
	document.getElementById('detailsDiv').appendChild(ontologyDiv);
}

// Service Provider Details View
function viewServiceProvider(component) {
	var serviceProviderTemp = new Object();
	var serviceTempList = new Array();
	var serviceTemp = new Object();
	
	var serviceProviderIndex = "serviceProviderDiv_0";
	var serviceProviderDiv = null;
	var serviceIndex = "serviceDiv_0";
	var serviceDiv = null;
	
	serviceProviderTemp = component;
	
	serviceProviderDiv = document.createElement('div');
	serviceProviderDiv.setAttribute('id', serviceProviderIndex);
	
	getComponentNamePosition('serviceProviderTemplate').setAttribute('value', serviceProviderTemp.serviceprovider_id);
	getRootContentPosition('serviceProviderTemplate').children[0].children[1].children[0].setAttribute('value', serviceProviderTemp.name);
	getRootContentPosition('serviceProviderTemplate').children[1].children[1].children[0].setAttribute('value', serviceProviderTemp.location);
	getRootContentPosition('serviceProviderTemplate').children[2].children[1].children[0].setAttribute('value', serviceProviderTemp.documentation);
	
	serviceProviderDiv.innerHTML = document.getElementById('serviceProviderTemplate').innerHTML;
	document.getElementById('detailsDiv').appendChild(serviceProviderDiv);
	
	serviceTempList = serviceProviderTemp.service;
	
	for(var i = 0; i < serviceTempList.length; i++) {
		serviceTemp = serviceTempList[i];
		
		serviceDiv = document.createElement('div');
		serviceDiv.setAttribute('id', serviceIndex);
		
		getChildContentPosition('serviceTemplate').children[0].children[1].children[0].setAttribute('value', serviceTemp.operation);
		getChildContentPosition('serviceTemplate').children[1].children[1].children[0].setAttribute('value', serviceTemp.documentation);
		
		serviceDiv.innerHTML = document.getElementById('serviceTemplate').innerHTML;
		document.getElementById(serviceProviderIndex).appendChild(serviceDiv);
	}
	
	serviceProviderIndex = jumpIndex(serviceProviderIndex);
}

// Activator Details View
function viewActivator(component) {
	var activatorTemp = new Object();
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
	
	var activatorIndex = "activatorDiv_0";
	var activatorDiv = null;
	var messageIndex = "messageDiv_0";
	var messageDiv = null;
	var partIndex = "partDiv_0";
	var partDiv = null;
	var variableIndex = "variableDiv_0";
	var variableDiv = null;
	var initializeIndex = "initializeDiv_0";
	var initializeDiv = null;
	var fromIndex = "fromDiv_0";
	var fromDiv = null;
	var conditionIndex = "conditionDiv_0";
	var conditionDiv = null;
	var caseIndex = "caseDiv_0";
	var caseDiv = null;
	var eventIndex = "eventDiv_0";
	var eventDiv = null;
	var contextIndex = "contextDiv_0";
	var contextDiv = null;
	var ruleIndex = "ruleDiv_0";
	var ruleDiv = null;
	var constraintIndex = "constraintDiv_0";
	var constraintDiv = null;
	var subjectIndex = "subjectDiv_0";
	var subjectDiv = null;
	var verbIndex = "verbDiv_0";
	var verbDiv = null;
	var objectIndex = "objectDiv_0";
	var objectDiv = null;
	
	activatorTemp = component;
	
	activatorDiv = document.createElement('div');
	activatorDiv.setAttribute('id', activatorIndex);
	
	getComponentNamePosition('activatorTemplate').setAttribute('value', activatorTemp.activator_id);
	getRootContentPosition('activatorTemplate').children[0].children[1].children[0].setAttribute('value', activatorTemp.name);
	getRootContentPosition('activatorTemplate').children[1].children[1].children[0].setAttribute('value', activatorTemp.documentation);
	
	activatorDiv.innerHTML = document.getElementById('activatorTemplate').innerHTML;
	document.getElementById('detailsDiv').appendChild(activatorDiv);
	
	messageTempList = activatorTemp.message;
	variableTempList = activatorTemp.variable;
	conditionTempList = activatorTemp.condition;
	
	for(var i = 0; i < messageTempList.length; i++ ) {
		messageTemp = messageTempList[i];
		
		messageDiv = document.createElement('div');
		messageDiv.setAttribute('id', messageIndex);
		
		getChildContentPosition('reuseMessageTemplate').children[0].children[1].children[0].setAttribute('value', messageTemp.name);
		getChildContentPosition('reuseMessageTemplate').children[1].children[1].children[0].setAttribute('value', messageTemp.documentation);
		
		messageDiv.innerHTML = document.getElementById('reuseMessageTemplate').innerHTML;
		document.getElementById(activatorIndex).appendChild(messageDiv);
		
		partTempList = messageTemp.part;
		
		for(var j = 0; j < partTempList.length; j++) {
			partTemp = partTempList[j];
			
			partDiv = document.createElement('div');
			partDiv.setAttribute('id', partIndex);
			
			getChildContentPosition('partTemplate').children[0].children[1].children[0].setAttribute('value', partTemp.name);
			getChildContentPosition('partTemplate').children[1].children[1].children[0].setAttribute('value', partTemp.element);
			getChildContentPosition('partTemplate').children[2].children[1].children[0].setAttribute('value', partTemp.type);
			getChildContentPosition('partTemplate').children[3].children[1].children[0].setAttribute('value', partTemp.documentation);
			
			partDiv.innerHTML = document.getElementById('partTemplate').innerHTML;
			document.getElementById(messageIndex).appendChild(partDiv);
		}
		
		messageIndex = jumpIndex(messageIndex);
	}
	
	for(var i = 0; i < variableTempList.length; i++) {
		variableTemp = variableTempList[i];
		
		variableDiv = document.createElement('div');
		variableDiv.setAttribute('id', variableIndex);
		
		getChildContentPosition('reuseVariableTemplate').children[0].children[1].children[0].setAttribute('value', variableTemp.name);
		getChildContentPosition('reuseVariableTemplate').children[1].children[1].children[0].setAttribute('value', variableTemp.type);
		getChildContentPosition('reuseVariableTemplate').children[2].children[1].children[0].setAttribute('value', variableTemp.documentation);
		
		variableDiv.innerHTML = document.getElementById('reuseVariableTemplate').innerHTML;
		document.getElementById(activatorIndex).appendChild(variableDiv);
		
		initializeTempList = variableTemp.initialize;
		
		for(var j = 0; j < initializeTempList.length; j++) {
			initializeTemp = initializeTempList[j];
			
			initializeDiv = document.createElement('div');
			initializeDiv.setAttribute('id', initializeIndex);
			
			getChildContentPosition('initializeTemplate').children[0].children[1].children[0].setAttribute('value', initializeTemp.part);
			getChildContentPosition('initializeTemplate').children[1].children[1].children[0].setAttribute('value', initializeTemp.documentation);
			
			initializeDiv.innerHTML = document.getElementById('initializeTemplate').innerHTML;
			document.getElementById(variableIndex).appendChild(initializeDiv);
			
			fromTempList = initializeTemp.from;
			
			for(var k = 0; k < fromTempList.length; k++) {
				fromTemp = fromTempList[k];
				
				fromDiv = document.createElement('div');
				fromDiv.setAttribute('id', fromIndex);
				
				getChildContentPosition('fromTemplate').children[0].children[1].children[0].setAttribute('value', fromTemp.variable);
				getChildContentPosition('fromTemplate').children[1].children[1].children[0].setAttribute('value', fromTemp.part);
				getChildContentPosition('fromTemplate').children[2].children[1].children[0].setAttribute('value', fromTemp.expression);
				getChildContentPosition('fromTemplate').children[3].children[1].children[0].setAttribute('value', fromTemp.documentation);
				
				fromDiv.innerHTML = document.getElementById('fromTemplate').innerHTML;
				document.getElementById(initializeIndex).appendChild(fromDiv);
			}
			
			initializeIndex = jumpIndex(initializeIndex);
		}
		
		variableIndex = jumpIndex(variableIndex);
	}
	
	for(var i = 0; i < conditionTempList.length; i++) {
		conditionTemp = conditionTempList[i];
		
		conditionDiv = document.createElement('div');
		conditionDiv.setAttribute('id', conditionIndex);
		
		getChildContentPosition('conditionTemplate').children[0].children[1].children[0].setAttribute('value', conditionTemp.expression);
		getChildContentPosition('conditionTemplate').children[1].children[1].children[0].setAttribute('value', conditionTemp.documentation);
		
		conditionDiv.innerHTML = document.getElementById('conditionTemplate').innerHTML;
		document.getElementById(activatorIndex).appendChild(conditionDiv);
		
		caseTempList = conditionTemp.case;
		contextTempList = conditionTemp.context;
		
		for(var j = 0; j < caseTempList.length; j++) {
			caseTemp = caseTempList[j];
			
			caseDiv = document.createElement('div');
			caseDiv.setAttribute('id', caseIndex);
			
			getChildContentPosition('caseTemplate').children[0].children[1].children[0].setAttribute('value', caseTemp.name);
			getChildContentPosition('caseTemplate').children[1].children[1].children[0].setAttribute('value', caseTemp.expression);
			getChildContentPosition('caseTemplate').children[2].children[1].children[0].setAttribute('value', caseTemp.documentation);
			
			caseDiv.innerHTML = document.getElementById('caseTemplate').innerHTML;
			document.getElementById(conditionIndex).appendChild(caseDiv);
			
			eventTempList = caseTemp.event;
			
			for(var k = 0; k < eventTempList.length; k++) {
				eventTemp = eventTempList[k];
				
				eventDiv = document.createElement('div');
				eventDiv.setAttribute('id', eventIndex);
				
				getChildContentPosition('eventTemplate').children[0].children[1].children[0].setAttribute('value', eventTemp.name);
				getChildContentPosition('eventTemplate').children[1].children[1].children[0].setAttribute('value', eventTemp.operation);
				getChildContentPosition('eventTemplate').children[2].children[1].children[0].setAttribute('value', eventTemp.documentation);
				
				eventDiv.innerHTML = document.getElementById('eventTemplate').innerHTML;
				document.getElementById(caseIndex).appendChild(eventDiv);
			}
			
			caseIndex = jumpIndex(caseIndex);
		}
		
		for(var j = 0; j < contextTempList.length; j++) {
			contextTemp = contextTempList[j];
			
			contextDiv = document.createElement('div');
			contextDiv.setAttribute('id', contextIndex);
			
			getChildContentPosition('contextTemplate').children[0].children[1].children[0].setAttribute('value', contextTemp.name);
			getChildContentPosition('contextTemplate').children[1].children[1].children[0].setAttribute('value', contextTemp.priority);
			getChildContentPosition('contextTemplate').children[2].children[1].children[0].setAttribute('value', contextTemp.documentation);
			
			contextDiv.innerHTML = document.getElementById('contextTemplate').innerHTML;
			document.getElementById(conditionIndex).appendChild(contextDiv);
			
			ruleTempList = contextTemp.rule;
			
			for(var k = 0; k < ruleTempList.length; k++) {
				ruleTemp = ruleTempList[k];
				
				ruleDiv = document.createElement('div');
				ruleDiv.setAttribute('id', ruleIndex);
				
				getChildContentPosition('ruleTemplate').children[0].children[1].children[0].setAttribute('value', ruleTemp.name);
				getChildContentPosition('ruleTemplate').children[1].children[1].children[0].setAttribute('value', ruleTemp.expression);
				getChildContentPosition('ruleTemplate').children[2].children[1].children[0].setAttribute('value', ruleTemp.documentation);
				
				ruleDiv.innerHTML = document.getElementById('ruleTemplate').innerHTML;
				document.getElementById(contextIndex).appendChild(ruleDiv);
				
				constraintTempList = ruleTemp.constraint;
				
				for(var l = 0; l < constraintTempList.length; l++) {
					constraintTemp = constraintTempList[l];
					
					constraintDiv = document.createElement('div');
					constraintDiv.setAttribute('id', constraintIndex);
					
					getChildContentPosition('constraintTemplate').children[0].children[1].children[0].setAttribute('value', constraintTemp.name);
					getChildContentPosition('constraintTemplate').children[1].children[1].children[0].setAttribute('value', constraintTemp.documentation);
					
					constraintDiv.innerHTML = document.getElementById('constraintTemplate').innerHTML;
					document.getElementById(ruleIndex).appendChild(constraintDiv);
					
					subjectTempList = constraintTemp.subject;
					verbTempList = constraintTemp.verb;
					objectTempList = constraintTemp.object;
					
					for(var m = 0; m < subjectTempList.length; m++) {
						subjectTemp = subjectTempList[m];
						
						subjectDiv = document.createElement('div');
						subjectDiv.setAttribute('id', subjectIndex);
						
						getChildContentPosition('subjectTemplate').children[0].children[1].children[0].setAttribute('value', subjectTemp.type);
						getChildContentPosition('subjectTemplate').children[1].children[1].children[0].setAttribute('value', subjectTemp.value);
						
						subjectDiv.innerHTML = document.getElementById('subjectTemplate').innerHTML;
						document.getElementById(constraintIndex).appendChild(subjectDiv);
					}
					
					for(var m = 0; m < verbTempList.length; m++) {
						verbTemp = verbTempList[m];
						
						verbDiv = document.createElement('div');
						verbDiv.setAttribute('id', verbIndex);
						
						getChildContentPosition('verbTemplate').children[0].children[1].children[0].setAttribute('value', verbTemp.value);
						
						verbDiv.innerHTML = document.getElementById('verbTemplate').innerHTML;
						document.getElementById(constraintIndex).appendChild(verbDiv);
					}
					
					for(var m = 0; m < objectTempList.length; m++) {
						objectTemp = objectTempList[m];
						
						objectDiv = document.createElement('div');
						objectDiv.setAttribute('id', objectIndex);
						
						getChildContentPosition('objectTemplate').children[0].children[1].children[0].setAttribute('value', objectTemp.type);
						getChildContentPosition('objectTemplate').children[1].children[1].children[0].setAttribute('value', objectTemp.value);
						
						objectDiv.innerHTML = document.getElementById('objectTemplate').innerHTML;
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
	
	activatorIndex = jumpIndex(activatorIndex);	
}

// Flow Details View
function viewFlow(component) {
	var flowTemp = new Object();
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
	var sourceTempList = new Array();
	var sourceTemp = new Object();
	var sinkTempList = new Array();
	var sinkTemp = new Object();
	
	var flowIndex = "flowDiv_0";
	var flowDiv = null;
	var messageIndex = "messageDiv_0";
	var messageDiv = null;
	var partIndex = "partDiv_0";
	var partDiv = null;
	var variableIndex = "variableDiv_0";
	var variableDiv = null;
	var initializeIndex = "initializeDiv_0";
	var initializeDiv = null;
	var fromIndex = "fromDiv_0";
	var fromDiv = null;
	var sourceIndex = "sourceDiv_0";
	var sourceDiv = null;
	var sinkIndex = "sinkDiv_0";
	var sinkDiv = null;
	
	flowTemp = component;
	
	flowDiv = document.createElement('div');
	flowDiv.setAttribute('id', flowIndex);
	
	getComponentNamePosition('flowTemplate').setAttribute('value', flowTemp.flow_id);
	getRootContentPosition('flowTemplate').children[0].children[1].children[0].setAttribute('value', flowTemp.name);
	getRootContentPosition('flowTemplate').children[1].children[1].children[0].setAttribute('value', flowTemp.documentation);
	
	flowDiv.innerHTML = document.getElementById('flowTemplate').innerHTML;
	document.getElementById('detailsDiv').appendChild(flowDiv);
	
	messageTempList = flowTemp.message;
	variableTempList = flowTemp.variable;
	sourceTempList = flowTemp.source;
	sinkTempList = flowTemp.sink;
	
	for(var i = 0; i < messageTempList.length; i++ ) {
		messageTemp = messageTempList[i];
		
		messageDiv = document.createElement('div');
		messageDiv.setAttribute('id', messageIndex);
		
		getChildContentPosition('reuseMessageTemplate').children[0].children[1].children[0].setAttribute('value', messageTemp.name);
		getChildContentPosition('reuseMessageTemplate').children[1].children[1].children[0].setAttribute('value', messageTemp.documentation);
		
		messageDiv.innerHTML = document.getElementById('reuseMessageTemplate').innerHTML;
		document.getElementById(flowIndex).appendChild(messageDiv);
		
		partTempList = messageTemp.part;
		
		for(var j = 0; j < partTempList.length; j++) {
			partTemp = partTempList[j];
			
			partDiv = document.createElement('div');
			partDiv.setAttribute('id', partIndex);
			
			getChildContentPosition('partTemplate').children[0].children[1].children[0].setAttribute('value', partTemp.name);
			getChildContentPosition('partTemplate').children[1].children[1].children[0].setAttribute('value', partTemp.element);
			getChildContentPosition('partTemplate').children[2].children[1].children[0].setAttribute('value', partTemp.type);
			getChildContentPosition('partTemplate').children[3].children[1].children[0].setAttribute('value', partTemp.documentation);
			
			partDiv.innerHTML = document.getElementById('partTemplate').innerHTML;
			document.getElementById(messageIndex).appendChild(partDiv);
		}
		
		messageIndex = jumpIndex(messageIndex);
	}
	
	for(var i = 0; i < variableTempList.length; i++) {
		variableTemp = variableTempList[i];
		
		variableDiv = document.createElement('div');
		variableDiv.setAttribute('id', variableIndex);
		
		getChildContentPosition('reuseVariableTemplate').children[0].children[1].children[0].setAttribute('value', variableTemp.name);
		getChildContentPosition('reuseVariableTemplate').children[1].children[1].children[0].setAttribute('value', variableTemp.type);
		getChildContentPosition('reuseVariableTemplate').children[2].children[1].children[0].setAttribute('value', variableTemp.documentation);
		
		variableDiv.innerHTML = document.getElementById('reuseVariableTemplate').innerHTML;
		document.getElementById(flowIndex).appendChild(variableDiv);
		
		initializeTempList = variableTemp.initialize;
		
		for(var j = 0; j < initializeTempList.length; j++) {
			initializeTemp = initializeTempList[j];
			
			initializeDiv = document.createElement('div');
			initializeDiv.setAttribute('id', initializeIndex);
			
			getChildContentPosition('initializeTemplate').children[0].children[1].children[0].setAttribute('value', initializeTemp.part);
			getChildContentPosition('initializeTemplate').children[1].children[1].children[0].setAttribute('value', initializeTemp.documentation);
			
			initializeDiv.innerHTML = document.getElementById('initializeTemplate').innerHTML;
			document.getElementById(variableIndex).appendChild(initializeDiv);
			
			fromTempList = initializeTemp.from;
			
			for(var k = 0; k < fromTempList.length; k++) {
				fromTemp = fromTempList[k];
				
				fromDiv = document.createElement('div');
				fromDiv.setAttribute('id', fromIndex);
				
				getChildContentPosition('fromTemplate').children[0].children[1].children[0].setAttribute('value', fromTemp.variable);
				getChildContentPosition('fromTemplate').children[1].children[1].children[0].setAttribute('value', fromTemp.part);
				getChildContentPosition('fromTemplate').children[2].children[1].children[0].setAttribute('value', fromTemp.expression);
				getChildContentPosition('fromTemplate').children[3].children[1].children[0].setAttribute('value', fromTemp.documentation);
				
				fromDiv.innerHTML = document.getElementById('fromTemplate').innerHTML;
				document.getElementById(initializeIndex).appendChild(fromDiv);
			}
			
			initializeIndex = jumpIndex(initializeIndex);
		}
		
		variableIndex = jumpIndex(variableIndex);
	}
	
	for(var i = 0; i < sourceTempList.length; i++) {
		sourceTemp = sourceTempList[i];
		
		sourceDiv = document.createElement('div');
		sourceDiv.setAttribute('id', sourceIndex);
		
		getChildContentPosition('sourceTemplate').children[0].children[1].children[0].setAttribute('value', sourceTemp.name);
		getChildContentPosition('sourceTemplate').children[1].children[1].children[0].setAttribute('value', sourceTemp.documentation);
		
		sourceDiv.innerHTML = document.getElementById('sourceTemplate').innerHTML;
		document.getElementById(flowIndex).appendChild(sourceDiv);
	}
	
	for(var i = 0; i < sinkTempList.length; i++) {
		sinkTemp = sinkTempList[i];
		
		sinkDiv = document.createElement('div');
		sinkDiv.setAttribute('id', sinkIndex);
		
		getChildContentPosition('sinkTemplate').children[0].children[1].children[0].setAttribute('value', sinkTemp.name);
		getChildContentPosition('sinkTemplate').children[1].children[1].children[0].setAttribute('value', sinkTemp.documentation);
		
		sinkDiv.innerHTML = document.getElementById('sinkTemplate').innerHTML;
		document.getElementById(flowIndex).appendChild(sinkDiv);
	}
	
	flowIndex = jumpIndex(flowIndex);
}

// Node Details View
function viewNode(component) {
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
	
	var nodeIndex = "nodeDiv_0";
	var nodeDiv = null;
	var messageIndex = "messageDiv_0";
	var messageDiv = null;
	var partIndex = "partDiv_0";
	var partDiv = null;
	var variableIndex = "variableDiv_0";
	var variableDiv = null;
	var initializeIndex = "initializeDiv_0";
	var initializeDiv = null;
	var fromIndex = "fromDiv_0";
	var fromDiv = null;
	var waitIndex = "waitDiv_0";
	var waitDiv = null;
	var conditionIndex = "conditionDiv_0";
	var conditionDiv = null;
	var caseIndex = "caseDiv_0";
	var caseDiv = null;
	var eventIndex = "eventDiv_0";
	var eventDiv = null;
	var contextIndex = "contextDiv_0";
	var contextDiv = null;
	var ruleIndex = "ruleDiv_0";
	var ruleDiv = null;
	var constraintIndex = "constraintDiv_0";
	var constraintDiv = null;
	var subjectIndex = "subjectDiv_0";
	var subjectDiv = null;
	var verbIndex = "verbDiv_0";
	var verbDiv = null;
	var objectIndex = "objectDiv_0";
	var objectDiv = null;
	var invokeIndex = "invokeDiv_0";
	var invokeDiv = null;
	
	nodeTemp = component;
	
	nodeDiv = document.createElement('div');
	nodeDiv.setAttribute('id', nodeIndex);
	
	getComponentNamePosition('nodeTemplate').setAttribute('value', nodeTemp.node_id);
	getRootContentPosition('nodeTemplate').children[0].children[1].children[0].setAttribute('value', nodeTemp.name);
	getRootContentPosition('nodeTemplate').children[1].children[1].children[0].setAttribute('value', nodeTemp.state);
	getRootContentPosition('nodeTemplate').children[2].children[1].children[0].setAttribute('value', nodeTemp.documentation);
	
	nodeDiv.innerHTML = document.getElementById('nodeTemplate').innerHTML;
	document.getElementById('detailsDiv').appendChild(nodeDiv);
	
	messageTempList = nodeTemp.message;
	variableTempList = nodeTemp.variable;
	waitTempList = nodeTemp.wait;
	conditionTempList = nodeTemp.condition;
	invokeTempList = nodeTemp.invoke;
	
	for(var i = 0; i < messageTempList.length; i++ ) {
		messageTemp = messageTempList[i];
		
		messageDiv = document.createElement('div');
		messageDiv.setAttribute('id', messageIndex);
		
		getChildContentPosition('reuseMessageTemplate').children[0].children[1].children[0].setAttribute('value', messageTemp.name);
		getChildContentPosition('reuseMessageTemplate').children[1].children[1].children[0].setAttribute('value', messageTemp.documentation);
		
		messageDiv.innerHTML = document.getElementById('reuseMessageTemplate').innerHTML;
		document.getElementById(nodeIndex).appendChild(messageDiv);
		
		partTempList = messageTemp.part;
		
		for(var j = 0; j < partTempList.length; j++) {
			partTemp = partTempList[j];
			
			partDiv = document.createElement('div');
			partDiv.setAttribute('id', partIndex);
			
			getChildContentPosition('partTemplate').children[0].children[1].children[0].setAttribute('value', partTemp.name);
			getChildContentPosition('partTemplate').children[1].children[1].children[0].setAttribute('value', partTemp.element);
			getChildContentPosition('partTemplate').children[2].children[1].children[0].setAttribute('value', partTemp.type);
			getChildContentPosition('partTemplate').children[3].children[1].children[0].setAttribute('value', partTemp.documentation);
			
			partDiv.innerHTML = document.getElementById('partTemplate').innerHTML;
			document.getElementById(messageIndex).appendChild(partDiv);
		}
		
		messageIndex = jumpIndex(messageIndex);
	}
	
	for(var i = 0; i < variableTempList.length; i++) {
		variableTemp = variableTempList[i];
		
		variableDiv = document.createElement('div');
		variableDiv.setAttribute('id', variableIndex);
		
		getChildContentPosition('reuseVariableTemplate').children[0].children[1].children[0].setAttribute('value', variableTemp.name);
		getChildContentPosition('reuseVariableTemplate').children[1].children[1].children[0].setAttribute('value', variableTemp.type);
		getChildContentPosition('reuseVariableTemplate').children[2].children[1].children[0].setAttribute('value', variableTemp.documentation);
		
		variableDiv.innerHTML = document.getElementById('reuseVariableTemplate').innerHTML;
		document.getElementById(nodeIndex).appendChild(variableDiv);
		
		initializeTempList = variableTemp.initialize;
		
		for(var j = 0; j < initializeTempList.length; j++) {
			initializeTemp = initializeTempList[j];
			
			initializeDiv = document.createElement('div');
			initializeDiv.setAttribute('id', initializeIndex);
			
			getChildContentPosition('initializeTemplate').children[0].children[1].children[0].setAttribute('value', initializeTemp.part);
			getChildContentPosition('initializeTemplate').children[1].children[1].children[0].setAttribute('value', initializeTemp.documentation);
			
			initializeDiv.innerHTML = document.getElementById('initializeTemplate').innerHTML;
			document.getElementById(variableIndex).appendChild(initializeDiv);
			
			fromTempList = initializeTemp.from;
			
			for(var k = 0; k < fromTempList.length; k++) {
				fromTemp = fromTempList[k];
				
				fromDiv = document.createElement('div');
				fromDiv.setAttribute('id', fromIndex);
				
				getChildContentPosition('fromTemplate').children[0].children[1].children[0].setAttribute('value', fromTemp.variable);
				getChildContentPosition('fromTemplate').children[1].children[1].children[0].setAttribute('value', fromTemp.part);
				getChildContentPosition('fromTemplate').children[2].children[1].children[0].setAttribute('value', fromTemp.expression);
				getChildContentPosition('fromTemplate').children[3].children[1].children[0].setAttribute('value', fromTemp.documentation);
				
				fromDiv.innerHTML = document.getElementById('fromTemplate').innerHTML;
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
		
		getChildContentPosition('waitTemplate').children[0].children[1].children[0].setAttribute('value', waitTemp.joinCondition);
		getChildContentPosition('waitTemplate').children[1].children[1].children[0].setAttribute('value', waitTemp.documentation);
		
		waitDiv.innerHTML = document.getElementById('waitTemplate').innerHTML;
		document.getElementById(nodeIndex).appendChild(waitDiv);
	}
	
	for(var i = 0; i < conditionTempList.length; i++) {
		conditionTemp = conditionTempList[i];
		
		conditionDiv = document.createElement('div');
		conditionDiv.setAttribute('id', conditionIndex);
		
		getChildContentPosition('conditionTemplate').children[0].children[1].children[0].setAttribute('value', conditionTemp.expression);
		getChildContentPosition('conditionTemplate').children[1].children[1].children[0].setAttribute('value', conditionTemp.documentation);
		
		conditionDiv.innerHTML = document.getElementById('conditionTemplate').innerHTML;
		document.getElementById(nodeIndex).appendChild(conditionDiv);
		
		caseTempList = conditionTemp.case;
		contextTempList = conditionTemp.context;
		
		for(var j = 0; j < caseTempList.length; j++) {
			caseTemp = caseTempList[j];
			
			caseDiv = document.createElement('div');
			caseDiv.setAttribute('id', caseIndex);
			
			getChildContentPosition('caseTemplate').children[0].children[1].children[0].setAttribute('value', caseTemp.name);
			getChildContentPosition('caseTemplate').children[1].children[1].children[0].setAttribute('value', caseTemp.expression);
			getChildContentPosition('caseTemplate').children[2].children[1].children[0].setAttribute('value', caseTemp.documentation);
			
			caseDiv.innerHTML = document.getElementById('caseTemplate').innerHTML;
			document.getElementById(conditionIndex).appendChild(caseDiv);
			
			eventTempList = caseTemp.event;
			
			for(var k = 0; k < eventTempList.length; k++) {
				eventTemp = eventTempList[k];
				
				eventDiv = document.createElement('div');
				eventDiv.setAttribute('id', eventIndex);
				
				getChildContentPosition('eventTemplate').children[0].children[1].children[0].setAttribute('value', eventTemp.name);
				getChildContentPosition('eventTemplate').children[1].children[1].children[0].setAttribute('value', eventTemp.operation);
				getChildContentPosition('eventTemplate').children[2].children[1].children[0].setAttribute('value', eventTemp.documentation);
				
				eventDiv.innerHTML = document.getElementById('eventTemplate').innerHTML;
				document.getElementById(caseIndex).appendChild(eventDiv);
			}
			
			caseIndex = jumpIndex(caseIndex);
		}
		
		for(var j = 0; j < contextTempList.length; j++) {
			contextTemp = contextTempList[j];
			
			contextDiv = document.createElement('div');
			contextDiv.setAttribute('id', contextIndex);
			
			getChildContentPosition('contextTemplate').children[0].children[1].children[0].setAttribute('value', contextTemp.name);
			getChildContentPosition('contextTemplate').children[1].children[1].children[0].setAttribute('value', contextTemp.priority);
			getChildContentPosition('contextTemplate').children[2].children[1].children[0].setAttribute('value', contextTemp.documentation);
			
			contextDiv.innerHTML = document.getElementById('contextTemplate').innerHTML;
			document.getElementById(conditionIndex).appendChild(contextDiv);
			
			ruleTempList = contextTemp.rule;
			
			for(var k = 0; k < ruleTempList.length; k++) {
				ruleTemp = ruleTempList[k];
				
				ruleDiv = document.createElement('div');
				ruleDiv.setAttribute('id', ruleIndex);
				
				getChildContentPosition('ruleTemplate').children[0].children[1].children[0].setAttribute('value', ruleTemp.name);
				getChildContentPosition('ruleTemplate').children[1].children[1].children[0].setAttribute('value', ruleTemp.expression);
				getChildContentPosition('ruleTemplate').children[2].children[1].children[0].setAttribute('value', ruleTemp.documentation);
				
				ruleDiv.innerHTML = document.getElementById('ruleTemplate').innerHTML;
				document.getElementById(contextIndex).appendChild(ruleDiv);
				
				constraintTempList = ruleTemp.constraint;
				
				for(var l = 0; l < constraintTempList.length; l++) {
					constraintTemp = constraintTempList[l];
					
					constraintDiv = document.createElement('div');
					constraintDiv.setAttribute('id', constraintIndex);
					
					getChildContentPosition('constraintTemplate').children[0].children[1].children[0].setAttribute('value', constraintTemp.name);
					getChildContentPosition('constraintTemplate').children[1].children[1].children[0].setAttribute('value', constraintTemp.documentation);
					
					constraintDiv.innerHTML = document.getElementById('constraintTemplate').innerHTML;
					document.getElementById(ruleIndex).appendChild(constraintDiv);
					
					subjectTempList = constraintTemp.subject;
					verbTempList = constraintTemp.verb;
					objectTempList = constraintTemp.object;
					
					for(var m = 0; m < subjectTempList.length; m++) {
						subjectTemp = subjectTempList[m];
						
						subjectDiv = document.createElement('div');
						subjectDiv.setAttribute('id', subjectIndex);
						
						getChildContentPosition('subjectTemplate').children[0].children[1].children[0].setAttribute('value', subjectTemp.type);
						getChildContentPosition('subjectTemplate').children[1].children[1].children[0].setAttribute('value', subjectTemp.value);
						
						subjectDiv.innerHTML = document.getElementById('subjectTemplate').innerHTML;
						document.getElementById(constraintIndex).appendChild(subjectDiv);
					}
					
					for(var m = 0; m < verbTempList.length; m++) {
						verbTemp = verbTempList[m];
						
						verbDiv = document.createElement('div');
						verbDiv.setAttribute('id', verbIndex);
						
						getChildContentPosition('verbTemplate').children[0].children[1].children[0].setAttribute('value', verbTemp.value);
						
						verbDiv.innerHTML = document.getElementById('verbTemplate').innerHTML;
						document.getElementById(constraintIndex).appendChild(verbDiv);
					}
					
					for(var m = 0; m < objectTempList.length; m++) {
						objectTemp = objectTempList[m];
						
						objectDiv = document.createElement('div');
						objectDiv.setAttribute('id', objectIndex);
						
						getChildContentPosition('objectTemplate').children[0].children[1].children[0].setAttribute('value', objectTemp.type);
						getChildContentPosition('objectTemplate').children[1].children[1].children[0].setAttribute('value', objectTemp.value);
						
						objectDiv.innerHTML = document.getElementById('objectTemplate').innerHTML;
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
		
		getChildContentPosition('invokeTemplate').children[0].children[1].children[0].setAttribute('value', invokeTemp.operation);
		getChildContentPosition('invokeTemplate').children[1].children[1].children[0].setAttribute('value', invokeTemp.documentation);
		
		invokeDiv.innerHTML = document.getElementById('invokeTemplate').innerHTML;
		document.getElementById(nodeIndex).appendChild(invokeDiv);
	}
	
	nodeIndex = jumpIndex(nodeIndex);
}

function getComponentNamePosition(component) {
	var position = document.getElementById(component).children[0].children[2];
	return position;
}

function getRootContentPosition(component) {
	var position = document.getElementById(component).children[0].children[7].children[0];
	return position;
}

function getChildContentPosition(component) {
	var position = document.getElementById(component).children[0].children[2].children[0];
	return position;
}

// Increase Dynamic Div Id
function jumpIndex(index) {
	var indexTemp = index.split("_");
	var indexBackNum = Number(indexTemp[1]);
	indexBackNum++;
	var indexBackStr = String(indexBackNum);
	var result = indexTemp[0] + "_" + indexBackStr;
	
	return result;
}
