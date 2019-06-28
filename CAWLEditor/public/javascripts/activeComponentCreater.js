// Create Active Component Leaf Node
function clickActiveTreeCreate() {
	var selectedNode = $('#activeTreeDiv').tree('getSelectedNode');
	if(selectedNode != false) {
		if(selectedNode.type == 'Root') {
			
			if(choicedActiveTreeRootNode != null) {
				// Create Message Component
				if(choicedActiveTreeRootNode.name == 'Message') {
					$('.activeComponentContentText').text('Create Message Element');
					
					$("#activeComponentDiv").css({
						"display":"block"
					});
					
					$("#commonDiv").css({
						"position":"static"
					});
					
					var div = document.createElement('div');
					div.innerHTML = document.getElementById('messageTagTemplate').innerHTML;
					document.getElementById('activeComponentContentDiv').appendChild(div);
				} else if(choicedActiveTreeRootNode.name == 'Variable') {
					$('.activeComponentContentText').text('Create Variable Element');
					
					$("#activeComponentDiv").css({
						"display":"block"
					});
					
					$("#commonDiv").css({
						"position":"static"
					});
					
					var div = document.createElement('div');
					div.innerHTML = document.getElementById('variableTagTemplate').innerHTML;
					document.getElementById('activeComponentContentDiv').appendChild(div);
				} else if(choicedActiveTreeRootNode.name == 'Ontology') {
					$('.activeComponentContentText').text('Create Ontology Element');
					
					$("#activeComponentDiv").css({
						"display":"block"
					});
					
					$("#commonDiv").css({
						"position":"static"
					});
					
					var div = document.createElement('div');
					div.innerHTML = document.getElementById('ontologyTagTemplate').innerHTML;
					document.getElementById('activeComponentContentDiv').appendChild(div);
				} else if(choicedActiveTreeRootNode.name == 'Service Provider') {
					$('.activeComponentContentText').text('Create Service Provider Element');
					
					$("#activeComponentDiv").css({
						"display":"block"
					});
					
					$("#commonDiv").css({
						"position":"static"
					});
					
					var div = document.createElement('div');
					div.innerHTML = document.getElementById('serviceProviderTagTemplate').innerHTML;
					document.getElementById('activeComponentContentDiv').appendChild(div);
				} else if(choicedActiveTreeRootNode.name == 'Activator') {
					$('.activeComponentContentText').text('Create Activator Element');
					
					$("#activeComponentDiv").css({
						"display":"block"
					});
					
					$("#commonDiv").css({
						"position":"static"
					});
					
					var div = document.createElement('div');
					div.innerHTML = document.getElementById('activatorTagTemplate').innerHTML;
					document.getElementById('activeComponentContentDiv').appendChild(div);
				} else if(choicedActiveTreeRootNode.name == 'Flow') {
					$('.activeComponentContentText').text('Create Flow Element');
					
					$("#activeComponentDiv").css({
						"display":"block"
					});
					
					$("#commonDiv").css({
						"position":"static"
					});
					
					var div = document.createElement('div');
					div.innerHTML = document.getElementById('flowTagTemplate').innerHTML;
					document.getElementById('activeComponentContentDiv').appendChild(div);
				} else if(choicedActiveTreeRootNode.name == 'Node') {
					$('.activeComponentContentText').text('Create Node Element');
					
					$("#activeComponentDiv").css({
						"display":"block"
					});
					
					$("#commonDiv").css({
						"position":"static"
					});
					
					var div = document.createElement('div');
					div.innerHTML = document.getElementById('nodeTagTemplate').innerHTML;
					document.getElementById('activeComponentContentDiv').appendChild(div);
				}
			}
			
		}
	}
}

//Add Part Tag Template
function addPartTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('partTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Initialize Tag Template
function addInitializeTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('initializeTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add From Tag Template
function addFromTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('fromTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Service Tag Template
function addServiceTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('serviceTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Reuse Message Tag Template
function addMessageTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('reuseMessageTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Reuse Variable Tag Template
function addVariableTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('reuseVariableTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Condition Tag Template
function addConditionTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('conditionTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Case Tag Template
function addCaseTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('caseTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Event Tag Template
function addEventTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('eventTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Context Tag Template
function addContextTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('contextTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Rule Tag Template
function addRuleTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('ruleTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Constraint Tag Template
function addConstraintTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('constraintTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Subject Tag Template
function addSubjectTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('subjectTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Verb Tag Template
function addVerbTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('verbTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Object Tag Template
function addObjectTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('objectTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Source Tag Template
function addSourceTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('sourceTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Add Sink Tag Template
function addSinkTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('sinkTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

//Add Wait Tag Template
function addWaitTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('waitTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

//Add Invoke Tag Template
function addInvokeTagTemplate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('invokeTagTemplate').innerHTML;
	obj.parentNode.parentNode.parentNode.appendChild(div);
}

// Remove Tag Template
function removeTagTemplate(obj) {
	obj.parentNode.parentNode.parentNode.parentNode.remove();
}

// Parse Active Component
function parseActiveComponent() {
	// Create Message Component
	if(choicedActiveTreeRootNode.name == 'Message') {
		var messageTemp = null;
		var partTemp = null;
		var partListTemp = null;
		
		messageTemp = new Object();
		messageTemp.message_id = getActiveComponentName();
		
		var messageDiv = getActiveComponentRootDiv();
		var messageContent = getActiveComponentContent(messageDiv);
		messageTemp.name = getActiveComponentAttribute(messageContent.children[0]);
		messageTemp.documentation = getActiveComponentAttribute(messageContent.children[1]);
		
		partListTemp = new Array();
		
		for(var i = 0; i < messageDiv.children.length - 2; i++) {
			partTemp = new Object();
			
			var partDiv = getActiveComponentChildrenDiv(messageDiv.children[i + 2]);
			var partContent = getActiveComponentContent(partDiv);
			partTemp.name = getActiveComponentAttribute(partContent.children[0]);
			partTemp.element = getActiveComponentAttribute(partContent.children[1]);
			partTemp.type = getActiveComponentAttribute(partContent.children[2]);
			partTemp.documentation = getActiveComponentAttribute(partContent.children[3]);
			
			partListTemp.push(partTemp);
		}
		
		messageTemp.part = partListTemp;
		
		var parentNode = $('#activeTreeDiv').tree('getNodeByName','Message');
		$('#activeTreeDiv').tree(
			'appendNode',
			{
				name: messageTemp.message_id,
				type: 'Message',
				kind: 'Active',
				value: messageTemp
			}, parentNode
		);
	}
	
	// Create Variable Component
	if(choicedActiveTreeRootNode.name == 'Variable') {
		var variableTemp = null;
		var initializeTemp = null;
		var initializeListTemp = null;
		var fromTemp = null;
		var fromListTemp = null;
		
		variableTemp = new Object();
		variableTemp.variable_id = getActiveComponentName();
		
		var variableDiv = getActiveComponentRootDiv();
		var variableContent = getActiveComponentContent(variableDiv);
		variableTemp.name = getActiveComponentAttribute(variableContent.children[0]);
		variableTemp.type = getActiveComponentAttribute(variableContent.children[1]);
		variableTemp.documentation = getActiveComponentAttribute(variableContent.children[2]);
		
		initializeListTemp = new Array();
		
		for(var i = 0; i < variableDiv.children.length - 2; i++) {
			initializeTemp = new Object();
			
			var initializeDiv = getActiveComponentChildrenDiv(variableDiv.children[i + 2]);
			var initializeContent = getActiveComponentContent(initializeDiv);
			initializeTemp.part = getActiveComponentAttribute(initializeContent.children[0]);
			initializeTemp.documentation = getActiveComponentAttribute(initializeContent.children[1]);
			
			fromListTemp = new Array();
			
			for(var j = 0; j < initializeDiv.children.length - 2; j++) {
				fromTemp = new Object();
				
				var fromDiv = getActiveComponentChildrenDiv(initializeDiv.children[j + 2]);
				var fromContent = getActiveComponentContent(fromDiv);
				fromTemp.variable = getActiveComponentAttribute(fromContent.children[0]);
				fromTemp.part = getActiveComponentAttribute(fromContent.children[1]);
				fromTemp.expression = getActiveComponentAttribute(fromContent.children[2]);
				fromTemp.documentation = getActiveComponentAttribute(fromContent.children[3]);
				
				fromListTemp.push(fromTemp);
			}
			
			initializeTemp.from = fromListTemp;
			
			initializeListTemp.push(initializeTemp);
		}
		
		variableTemp.initialize = initializeListTemp;
		
		var parentNode = $('#activeTreeDiv').tree('getNodeByName','Variable');
		$('#activeTreeDiv').tree(
			'appendNode',
			{
				name: variableTemp.variable_id,
				type: 'Variable',
				kind: 'Active',
				value: variableTemp
			}, parentNode
		);
	}
	
	// Create Ontology Component
	if(choicedActiveTreeRootNode.name == 'Ontology') {
		var ontologyTemp = null;
		
		ontologyTemp = new Object();
		ontologyTemp.ontology_id = getActiveComponentName();
		
		var ontologyDiv = getActiveComponentRootDiv();
		var ontologyContent = getActiveComponentContent(ontologyDiv);
		ontologyTemp.location = getActiveComponentAttribute(ontologyContent.children[0]);
		ontologyTemp.namespace = getActiveComponentAttribute(ontologyContent.children[1]);
		ontologyTemp.documentation = getActiveComponentAttribute(ontologyContent.children[2]);
		
		var parentNode = $('#activeTreeDiv').tree('getNodeByName','Ontology');
		$('#activeTreeDiv').tree(
			'appendNode',
			{
				name: ontologyTemp.ontology_id,
				type: 'Ontology',
				kind: 'Active',
				value: ontologyTemp
			}, parentNode
		);
	}
	
	// Create Service Provider Component
	if(choicedActiveTreeRootNode.name == 'Service Provider') {
		var serviceProviderTemp = null;
		var serviceTemp = null;
		var serviceListTemp = null;
		
		serviceProviderTemp = new Object();
		serviceProviderTemp.serviceprovider_id = getActiveComponentName();
		
		var serviceProviderDiv = getActiveComponentRootDiv();
		var serviceProviderContent = getActiveComponentContent(serviceProviderDiv);
		serviceProviderTemp.name = getActiveComponentAttribute(serviceProviderContent.children[0]);
		serviceProviderTemp.location = getActiveComponentAttribute(serviceProviderContent.children[1]);
		serviceProviderTemp.documentation = getActiveComponentAttribute(serviceProviderContent.children[2]);
		
		serviceListTemp = new Array();
		
		for(var i = 0; i < serviceProviderDiv.children.length - 2; i++) {
			serviceTemp = new Object();
			
			var serviceDiv = getActiveComponentChildrenDiv(serviceProviderDiv.children[i + 2]);
			var serviceContent = getActiveComponentContent(serviceDiv);
			serviceTemp.operation = getActiveComponentAttribute(serviceContent.children[0]);
			serviceTemp.documentation = getActiveComponentAttribute(serviceContent.children[1]);
			
			serviceListTemp.push(serviceTemp);
		}
		
		serviceProviderTemp.service = serviceListTemp;
		
		var parentNode = $('#activeTreeDiv').tree('getNodeByName','Service Provider');
		$('#activeTreeDiv').tree(
			'appendNode',
			{
				name: serviceProviderTemp.serviceprovider_id,
				type: 'Service Provider',
				kind: 'Active',
				value: serviceProviderTemp
			}, parentNode
		);
	}
	
	// Create Activator Component
	if(choicedActiveTreeRootNode.name == 'Activator') {
		var activatorTemp = null;
		var messageTemp = null;
		var messageListTemp = null;
		var variableTemp = null;
		var variableListTemp = null;
		var conditionTemp = null;
		var conditionListTemp = null;
		
		activatorTemp = new Object();
		activatorTemp.activator_id = getActiveComponentName();
		
		var activatorDiv = getActiveComponentRootDiv();
		var activatorContent = getActiveComponentContent(activatorDiv);
		activatorTemp.name = getActiveComponentAttribute(activatorContent.children[0]);
		activatorTemp.documentation = getActiveComponentAttribute(activatorContent.children[1]);
		
		messageListTemp = new Array();
		variableListTemp = new Array();
		conditionListTemp = new Array();
		
		for(var i = 0; i < activatorDiv.children.length - 2; i++) {
			var tagName = getTagName(activatorDiv.children[i + 2]);
			
			if(tagName == 'Message') {
				messageTemp = new Object();
				messageTemp = parseMessageDiv(activatorDiv.children[i + 2]);
				messageListTemp.push(messageTemp);
			} else if(tagName == 'Variable') {
				variableTemp = new Object();
				variableTemp = parseVariableDiv(activatorDiv.children[i + 2]);
				variableListTemp.push(variableTemp);
			} else if(tagName == 'Condition') {
				conditionTemp = new Object();
				conditionTemp = parseConditionDiv(activatorDiv.children[i + 2]);
				conditionListTemp.push(conditionTemp);
			}
		}
		
		activatorTemp.message = messageListTemp;
		activatorTemp.variable = variableListTemp;
		activatorTemp.condition = conditionListTemp;
		
		var parentNode = $('#activeTreeDiv').tree('getNodeByName','Activator');
		$('#activeTreeDiv').tree(
			'appendNode',
			{
				name: activatorTemp.activator_id,
				type: 'Activator',
				kind: 'Active',
				value: activatorTemp
			}, parentNode
		);
		
		createWorkflowDiagram("Activator", activatorTemp.activator_id);
	}
	
	// Create Flow Component
	if(choicedActiveTreeRootNode.name == 'Flow') {
		var flowTemp = null;
		var messageTemp = null;
		var messageListTemp = null;
		var variableTemp = null;
		var variableListTemp = null;
		var sourceTemp = null;
		var sourceListTemp = null;
		var sinkTemp = null;
		var sinkListTemp = null;
		
		flowTemp = new Object();
		flowTemp.flow_id = getActiveComponentName();
		
		var flowDiv = getActiveComponentRootDiv();
		var flowContent = getActiveComponentContent(flowDiv);
		flowTemp.name = getActiveComponentAttribute(flowContent.children[0]);
		flowTemp.documentation = getActiveComponentAttribute(flowContent.children[1]);
		
		messageListTemp = new Array();
		variableListTemp = new Array();
		sourceListTemp = new Array();
		sinkListTemp = new Array();
		
		for(var i = 0; i < flowDiv.children.length - 2; i++) {
			var tagName = getTagName(flowDiv.children[i + 2]);
			
			if(tagName == 'Message') {
				messageTemp = new Object();
				messageTemp = parseMessageDiv(flowDiv.children[i + 2]);
				messageListTemp.push(messageTemp);
			} else if(tagName == 'Variable') {
				variableTemp = new Object();
				variableTemp = parseVariableDiv(flowDiv.children[i + 2]);
				variableListTemp.push(variableTemp);
			} else if(tagName == 'Source') {
				sourceTemp = new Object();
				sourceTemp = parseSourceDiv(flowDiv.children[i + 2]);
				sourceListTemp.push(sourceTemp);
			} else if(tagName == 'Sink') {
				sinkTemp = new Object();
				sinkTemp = parseSinkDiv(flowDiv.children[i + 2]);
				sinkListTemp.push(sinkTemp);
			}
		}
		
		flowTemp.message = messageListTemp;
		flowTemp.variable = variableListTemp;
		flowTemp.source = sourceListTemp;
		flowTemp.sink = sinkListTemp;
		
		var parentNode = $('#activeTreeDiv').tree('getNodeByName','Flow');
		$('#activeTreeDiv').tree(
			'appendNode',
			{
				name: flowTemp.flow_id,
				type: 'Flow',
				kind: 'Active',
				value: flowTemp
			}, parentNode
		);
		
		createWorkflowDiagram("Flow", flowTemp.flow_id);
	}
	
	// Create Node Component
	if(choicedActiveTreeRootNode.name == 'Node') {
		var nodeTemp = null;
		var messageTemp = null;
		var messageListTemp = null;
		var variableTemp = null;
		var variableListTemp = null;
		var waitTemp = null;
		var waitListTemp = null;
		var conditionTemp = null;
		var conditionListTemp = null;
		var invokeTemp = null;
		var invokeListTemp = null;
		
		nodeTemp = new Object();
		nodeTemp.node_id = getActiveComponentName();
		
		var nodeDiv = getActiveComponentRootDiv();
		var nodeContent = getActiveComponentContent(nodeDiv);
		nodeTemp.name = getActiveComponentAttribute(nodeContent.children[0]);
		nodeTemp.state = getActiveComponentAttribute(nodeContent.children[1]);
		nodeTemp.documentation = getActiveComponentAttribute(nodeContent.children[2]);
		
		messageListTemp = new Array();
		variableListTemp = new Array();
		waitListTemp = new Array();
		conditionListTemp = new Array();
		invokeListTemp = new Array();
		
		for(var i = 0; i < nodeDiv.children.length - 2; i++) {
			var tagName = getTagName(nodeDiv.children[i + 2]);
			
			if(tagName == 'Message') {
				messageTemp = new Object();
				messageTemp = parseMessageDiv(nodeDiv.children[i + 2]);
				messageListTemp.push(messageTemp);
			} else if(tagName == 'Variable') {
				variableTemp = new Object();
				variableTemp = parseVariableDiv(nodeDiv.children[i + 2]);
				variableListTemp.push(variableTemp);
			} else if(tagName == 'Wait') {
				waitTemp = new Object();
				waitTemp = parseWaitDiv(nodeDiv.children[i + 2]);
				waitListTemp.push(waitTemp);
			} else if(tagName == 'Condition') {
				conditionTemp = new Object();
				conditionTemp = parseConditionDiv(nodeDiv.children[i + 2]);
				conditionListTemp.push(conditionTemp);
			} else if(tagName == 'Invoke') {
				invokeTemp = new Object();
				invokeTemp = parseInvokeDiv(nodeDiv.children[i + 2]);
				invokeListTemp.push(invokeTemp);
			}
		}
		
		nodeTemp.message = messageListTemp;
		nodeTemp.variable = variableListTemp;
		nodeTemp.wait = waitListTemp;
		nodeTemp.condition = conditionListTemp;
		nodeTemp.invoke = invokeListTemp;
		
		var parentNode = $('#activeTreeDiv').tree('getNodeByName','Node');
		$('#activeTreeDiv').tree(
			'appendNode',
			{
				name: nodeTemp.node_id,
				type: 'Node',
				kind: 'Active',
				value: nodeTemp
			}, parentNode
		);
		
		createWorkflowDiagram("Node", nodeTemp.node_id);
	}
}

function createWorkflowDiagram(target, componentName) {
	var operatorId = null;
	var operatorData = null;
	
	if(target == "Activator") {
		operatorId = "Activator_" + componentName;
		operatorData = {
				top: 20,
				left: 20,
				properties: {
					title: '<div style="text-align:center;"><text style="font-size:16px;">Activator</text><br>[ ' + componentName + ' ]</div>',
					outputs: {
						output_1: {
							label: 'output'
						}
					}
				}
		};
	} else if(target == "Flow") {
		operatorId = "Flow_" + componentName;
		operatorData = {
				top: 20,
				left: 20,
				properties: {
					title: '<div style="text-align:center;"><text style="font-size:16px;">Flow</text><br>[ ' + componentName + ' ]</div>',
					inputs: {
						input_1: {
							label: 'input'
						}
					},
					outputs: {
						output_1: {
							label: 'output'
						}
					}
				}
		};
	} else if(target == "Node") {
		operatorId = "Node_" + componentName;
		operatorData = {
				top: 20,
				left: 20,
				properties: {
					title: '<div style="text-align:center;"><text style="font-size:16px;">Node</text><br>[ ' + componentName + ' ]</div>',
					inputs: {
						input_1: {
							label: 'input'
						}
					},
					outputs: {
						output_1: {
							label: 'output'
						}
					}
				}
		};
	}
	
	$('#diagramScreenWorkflowDiv').flowchart('createOperator', operatorId, operatorData);
}

function parseWaitDiv(activeComponentDiv) {
	var waitTemp = null;
	
	waitTemp = new Object();
	
	var waitDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var waitContent = getActiveComponentContent(waitDiv);
	waitTemp.joinCondition = getActiveComponentAttribute(waitContent.children[0]);
	waitTemp.documentation = getActiveComponentAttribute(waitContent.children[1]);
	
	return waitTemp;
}

function parseInvokeDiv(activeComponentDiv) {
	var invokeTemp = null;
	
	invokeTemp = new Object();
	
	var invokeDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var invokeContent = getActiveComponentContent(invokeDiv);
	invokeTemp.operation = getActiveComponentAttribute(invokeContent.children[0]);
	invokeTemp.documentation = getActiveComponentAttribute(invokeContent.children[1]);
	
	return invokeTemp;
}

function parseSourceDiv(activeComponentDiv) {
	var sourceTemp = null;
	
	sourceTemp = new Object();
	
	var sourceDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var sourceContent = getActiveComponentContent(sourceDiv);
	sourceTemp.name = getActiveComponentAttribute(sourceContent.children[0]);
	sourceTemp.documentation = getActiveComponentAttribute(sourceContent.children[1]);
	
	return sourceTemp;
}

function parseSinkDiv(activeComponentDiv) {
	var sinkTemp = null;
	
	sinkTemp = new Object();
	
	var sinkDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var sinkContent = getActiveComponentContent(sinkDiv);
	sinkTemp.name = getActiveComponentAttribute(sinkContent.children[0]);
	sinkTemp.documentation = getActiveComponentAttribute(sinkContent.children[1]);
	
	return sinkTemp;
}

function parseMessageDiv(activeComponentDiv) {
	var messageTemp = null;
	var partTemp = null;
	var partListTemp = null;
	
	messageTemp = new Object();
	
	var messageDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var messageContent = getActiveComponentContent(messageDiv);
	messageTemp.name = getActiveComponentAttribute(messageContent.children[0]);
	messageTemp.documentation = getActiveComponentAttribute(messageContent.children[1]);
	
	partListTemp = new Array();
	
	for(var i = 0; i < messageDiv.children.length - 2; i++) {
		partTemp = new Object();
		
		var partDiv = getActiveComponentChildrenDiv(messageDiv.children[i + 2]);
		var partContent = getActiveComponentContent(partDiv);
		partTemp.name = getActiveComponentAttribute(partContent.children[0]);
		partTemp.element = getActiveComponentAttribute(partContent.children[1]);
		partTemp.type = getActiveComponentAttribute(partContent.children[2]);
		partTemp.documentation = getActiveComponentAttribute(partContent.children[3]);
		
		partListTemp.push(partTemp);
	}
	
	messageTemp.part = partListTemp;
	
	return messageTemp;
}

function parseVariableDiv(activeComponentDiv) {
	var variableTemp = null;
	var initializeTemp = null;
	var initializeListTemp = null;
	var fromTemp = null;
	var fromListTemp = null;
	
	variableTemp = new Object();
	
	var variableDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var variableContent = getActiveComponentContent(variableDiv);
	variableTemp.name = getActiveComponentAttribute(variableContent.children[0]);
	variableTemp.type = getActiveComponentAttribute(variableContent.children[1]);
	variableTemp.documentation = getActiveComponentAttribute(variableContent.children[2]);
	
	initializeListTemp = new Array();
	
	for(var i = 0; i < variableDiv.children.length - 2; i++) {
		initializeTemp = new Object();
		
		var initializeDiv = getActiveComponentChildrenDiv(variableDiv.children[i + 2]);
		var initializeContent = getActiveComponentContent(initializeDiv);
		initializeTemp.part = getActiveComponentAttribute(initializeContent.children[0]);
		initializeTemp.documentation = getActiveComponentAttribute(initializeContent.children[1]);
		
		fromListTemp = new Array();
		
		for(var j = 0; j < initializeDiv.children.length - 2; j++) {
			fromTemp = new Object();
			
			var fromDiv = getActiveComponentChildrenDiv(initializeDiv.children[j + 2]);
			var fromContent = getActiveComponentContent(fromDiv);
			fromTemp.variable = getActiveComponentAttribute(fromContent.children[0]);
			fromTemp.part = getActiveComponentAttribute(fromContent.children[1]);
			fromTemp.expression = getActiveComponentAttribute(fromContent.children[2]);
			fromTemp.documentation = getActiveComponentAttribute(fromContent.children[3]);
			
			fromListTemp.push(fromTemp);
		}
		
		initializeTemp.from = fromListTemp;
		
		initializeListTemp.push(initializeTemp);
	}
	
	variableTemp.initialize = initializeListTemp;
	
	return variableTemp;
}

function parseConditionDiv(activeComponentDiv) {
	var conditionTemp = null;
	var caseTemp = null;
	var caseListTemp = null;
	var contextTemp = null;
	var contextListTemp = null;
	
	var conditionTemp = new Object();
	
	var conditionDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var conditionContent = getActiveComponentContent(conditionDiv);
	conditionTemp.expression = getActiveComponentAttribute(conditionContent.children[0]);
	conditionTemp.documentation = getActiveComponentAttribute(conditionContent.children[1]);
	
	caseListTemp = new Array();
	contextListTemp = new Array();
	
	for(var i = 0; i < conditionDiv.children.length - 2; i++) {
		var tagName = getTagName(conditionDiv.children[i + 2]);
		
		if(tagName == 'Case') {
			caseTemp = new Object();
			caseTemp = parseCaseDiv(conditionDiv.children[i + 2]);
			caseListTemp.push(caseTemp);
		} else if(tagName == 'Context') {
			contextTemp = new Object();
			contextTemp = parseContextDiv(conditionDiv.children[i + 2]);
			contextListTemp.push(contextTemp);
		}
	}
	
	conditionTemp.case = caseListTemp;
	conditionTemp.context = contextListTemp;
	
	return conditionTemp;
}

function parseCaseDiv(activeComponentDiv) {
	var caseTemp = null;
	var eventTemp = null;
	var eventListTemp = null;
	
	caseTemp = new Object();
	
	var caseDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var caseContent = getActiveComponentContent(caseDiv);
	caseTemp.name = getActiveComponentAttribute(caseContent.children[0]);
	caseTemp.expression = getActiveComponentAttribute(caseContent.children[1]);
	caseTemp.documentation = getActiveComponentAttribute(caseContent.children[2]);
	
	eventListTemp = new Array();
	
	for(var i = 0; i < caseDiv.children.length - 2; i++) {
		eventTemp = new Object();
		
		var eventDiv = getActiveComponentChildrenDiv(caseDiv.children[i + 2]);
		var eventContent = getActiveComponentContent(eventDiv);
		eventTemp.name = getActiveComponentAttribute(eventContent.children[0]);
		eventTemp.operation = getActiveComponentAttribute(eventContent.children[1]);
		eventTemp.documentation = getActiveComponentAttribute(eventContent.children[2]);
		
		eventListTemp.push(eventTemp);
	}
	
	caseTemp.event = eventListTemp;
	
	return caseTemp;
}

function parseContextDiv(activeComponentDiv) {
	var contextTemp = null;
	var ruleTemp = null;
	var ruleListTemp = null;
	var constraintTemp = null;
	var constraintListTemp = null;
	var subjectTemp = null;
	var subjectListTemp = null;
	var verbTemp = null;
	var verbListTemp = null;
	var objectTemp = null;
	var objectListTemp = null;
	
	contextTemp = new Object();
	
	var contextDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var contextContent = getActiveComponentContent(contextDiv);
	contextTemp.name = getActiveComponentAttribute(contextContent.children[0]);
	contextTemp.priority = getActiveComponentAttribute(contextContent.children[1]);
	contextTemp.documentation = getActiveComponentAttribute(contextContent.children[2]);
	
	ruleListTemp = new Array();
	
	for(var i = 0; i < contextDiv.children.length - 2; i++) {
		ruleTemp = new Object();
		
		var ruleDiv = getActiveComponentChildrenDiv(contextDiv.children[i + 2]);
		var ruleContent = getActiveComponentContent(ruleDiv);
		ruleTemp.name = getActiveComponentAttribute(ruleContent.children[0]);
		ruleTemp.expression = getActiveComponentAttribute(ruleContent.children[1]);
		ruleTemp.documentation = getActiveComponentAttribute(ruleContent.children[2]);
		
		constraintListTemp = new Array();
		
		for(var j = 0; j < ruleDiv.children.length - 2; j++) {
			constraintTemp = new Object();
			
			var constraintDiv = getActiveComponentChildrenDiv(ruleDiv.children[j + 2]);
			var constraintContent = getActiveComponentContent(constraintDiv);
			constraintTemp.name = getActiveComponentAttribute(constraintContent.children[0]);
			constraintTemp.documentation = getActiveComponentAttribute(constraintContent.children[1]);
			
			subjectListTemp = new Array();
			verbListTemp = new Array();
			objectListTemp = new Array();
			
			for(var k = 0; k < constraintDiv.children.length - 2; k++) {
				var tagName = getTagName(constraintDiv.children[k + 2]);
				
				if(tagName == 'Subject') {
					subjectTemp = new Object();
					subjectTemp = parseSubjectDiv(constraintDiv.children[k + 2]);
					subjectListTemp.push(subjectTemp);
				} else if(tagName == 'Verb') {
					verbTemp = new Object();
					verbTemp = parseVerbDiv(constraintDiv.children[k + 2]);
					verbListTemp.push(verbTemp);
				} else if(tagName == 'Object') {
					objectTemp = new Object();
					objectTemp = parseObjectDiv(constraintDiv.children[k + 2]);
					objectListTemp.push(objectTemp);
				}
			}
			
			constraintTemp.subject = subjectListTemp;
			constraintTemp.verb = verbListTemp;
			constraintTemp.object = objectListTemp;
			
			constraintListTemp.push(constraintTemp);
		}
		
		ruleTemp.constraint = constraintListTemp;
		
		ruleListTemp.push(ruleTemp);
	}
	
	contextTemp.rule = ruleListTemp;
	
	return contextTemp;
}

function parseSubjectDiv(activeComponentDiv) {
	var subjectTemp = null;
	
	subjectTemp = new Object();
	
	var subjectDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var subjectContent = getActiveComponentContent(subjectDiv);
	subjectTemp.type = getActiveComponentAttribute(subjectContent.children[0]);
	subjectTemp.value = getActiveComponentAttribute(subjectContent.children[1]);
	
	return subjectTemp;
}

function parseVerbDiv(activeComponentDiv) {
	var verbTemp = null;
	
	verbTemp = new Object();
	
	var verbDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var verbContent = getActiveComponentContent(verbDiv);
	verbTemp.value = getActiveComponentAttribute(verbContent.children[0]);
	
	return verbTemp;
}

function parseObjectDiv(activeComponentDiv) {
	var objectTemp = null;
	
	objectTemp = new Object();
	
	var objectDiv = getActiveComponentChildrenDiv(activeComponentDiv);
	var objectContent = getActiveComponentContent(objectDiv);
	objectTemp.type = getActiveComponentAttribute(objectContent.children[0]);
	objectTemp.value = getActiveComponentAttribute(objectContent.children[1]);
	
	return objectTemp;
}

function getTagName(activeComponentDiv) {
	var value = activeComponentDiv.children[0].children[0].children[0].children[0].innerHTML;
	return value;
}

function getActiveComponentName() {
	var value = document.getElementById('activeComponentDescriptionInput').value;
	return value;
}

function getActiveComponentRootDiv() {
	var value = document.getElementById('activeComponentContentDiv').children[0].children[0];
	return value;
}

function getActiveComponentChildrenDiv(activeComponentDiv) {
	var value = activeComponentDiv.children[0];
	return value;
}

function getActiveComponentContent(activeComponentDiv) {
	var value = activeComponentDiv.children[1].children[0];
	return value;
}

function getActiveComponentAttribute(activeComponentContent) {
	var value = activeComponentContent.children[1].children[0].value;
	return value;
}
