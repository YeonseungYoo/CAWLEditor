// Configuration Create Event
function clickConfigurationCreate() {
	var selectedNode = $('#configurationSharedTreeDiv').tree('getSelectedNode');
	
	if(selectedNode != false) {
		if(selectedNode.type == 'Root') {
			checkConfigurationFunctionTask = null;
			
			if(selectedNode.name == 'Message') {
				var divRoot = document.createElement('div');
				divRoot.innerHTML = document.getElementById('configurationComponentTemplate').innerHTML;
				document.getElementById('configurationOperationDiv').appendChild(divRoot);
				
				var div = document.createElement('div');
				div.innerHTML = document.getElementById('messageTagTemplate').innerHTML;
				document.getElementById('configurationComponentContentDiv').appendChild(div);
			} else if(selectedNode.name == 'Variable') {
				var divRoot = document.createElement('div');
				divRoot.innerHTML = document.getElementById('configurationComponentTemplate').innerHTML;
				document.getElementById('configurationOperationDiv').appendChild(divRoot);
				
				var div = document.createElement('div');
				div.innerHTML = document.getElementById('variableTagTemplate').innerHTML;
				document.getElementById('configurationComponentContentDiv').appendChild(div);
			} else if(selectedNode.name == 'Ontology') {
				var divRoot = document.createElement('div');
				divRoot.innerHTML = document.getElementById('configurationComponentTemplate').innerHTML;
				document.getElementById('configurationOperationDiv').appendChild(divRoot);
				
				var div = document.createElement('div');
				div.innerHTML = document.getElementById('ontologyTagTemplate').innerHTML;
				document.getElementById('configurationComponentContentDiv').appendChild(div);
			} else if(selectedNode.name == 'Service Provider') {
				var divRoot = document.createElement('div');
				divRoot.innerHTML = document.getElementById('configurationComponentTemplate').innerHTML;
				document.getElementById('configurationOperationDiv').appendChild(divRoot);
				
				var div = document.createElement('div');
				div.innerHTML = document.getElementById('serviceProviderTagTemplate').innerHTML;
				document.getElementById('configurationComponentContentDiv').appendChild(div);
			} else if(selectedNode.name == 'Node') {
				var divRoot = document.createElement('div');
				divRoot.innerHTML = document.getElementById('configurationComponentTemplate').innerHTML;
				document.getElementById('configurationOperationDiv').appendChild(divRoot);
				
				var div = document.createElement('div');
				div.innerHTML = document.getElementById('nodeTagTemplate').innerHTML;
				document.getElementById('configurationComponentContentDiv').appendChild(div);
			}
		}
	}
}

// Create Configuration Component
function createConfigurationComponent() {
	// Create Configuration Message Component
	if(choicedConfigurationTreeNode.name == 'Message') {
		var messageTemp = null;
		var partTemp = null;
		var partListTemp = null;
		
		messageTemp = new Object();
		messageTemp.message_id = getConfigurationComponentName();
		
		var messageDiv = getConfigurationComponentRootDiv();
		var messageContent = getConfigurationComponentContent(messageDiv);
		messageTemp.name = getConfigurationComponentAttribute(messageContent.children[0]);
		messageTemp.documentation = getConfigurationComponentAttribute(messageContent.children[1]);
		
		partListTemp = new Array();
		
		for(var i = 0; i < messageDiv.children.length - 2; i++) {
			partTemp = new Object();
			
			var partDiv = getConfigurationComponentChildrenDiv(messageDiv.children[i + 2]);
			var partContent = getConfigurationComponentContent(partDiv);
			partTemp.name = getConfigurationComponentAttribute(partContent.children[0]);
			partTemp.element = getConfigurationComponentAttribute(partContent.children[1]);
			partTemp.type = getConfigurationComponentAttribute(partContent.children[2]);
			partTemp.documentation = getConfigurationComponentAttribute(partContent.children[3]);
			
			partListTemp.push(partTemp);
		}
		
		messageTemp.part = partListTemp;
		
		createConfigurationComponentDB('Message', messageTemp);
	}
	
	// Create Configuration Variable Component
	if(choicedConfigurationTreeNode.name == 'Variable') {
		var variableTemp = null;
		var initializeTemp = null;
		var initializeListTemp = null;
		var fromTemp = null;
		var fromListTemp = null;
		
		variableTemp = new Object();
		variableTemp.variable_id = getConfigurationComponentName();
		
		var variableDiv = getConfigurationComponentRootDiv();
		var variableContent = getConfigurationComponentContent(variableDiv);
		variableTemp.name = getConfigurationComponentAttribute(variableContent.children[0]);
		variableTemp.type = getConfigurationComponentAttribute(variableContent.children[1]);
		variableTemp.documentation = getConfigurationComponentAttribute(variableContent.children[2]);
		
		initializeListTemp = new Array();
		
		for(var i = 0; i < variableDiv.children.length - 2; i++) {
			initializeTemp = new Object();
			
			var initializeDiv = getConfigurationComponentChildrenDiv(variableDiv.children[i + 2]);
			var initializeContent = getConfigurationComponentContent(initializeDiv);
			initializeTemp.part = getConfigurationComponentAttribute(initializeContent.children[0]);
			initializeTemp.documentation = getConfigurationComponentAttribute(initializeContent.children[1]);
			
			fromListTemp = new Array();
			
			for(var j = 0; j < initializeDiv.children.length - 2; j++) {
				fromTemp = new Object();
				
				var fromDiv = getConfigurationComponentChildrenDiv(initializeDiv.children[j + 2]);
				var fromContent = getConfigurationComponentContent(fromDiv);
				fromTemp.variable = getConfigurationComponentAttribute(fromContent.children[0]);
				fromTemp.part = getConfigurationComponentAttribute(fromContent.children[1]);
				fromTemp.expression = getConfigurationComponentAttribute(fromContent.children[2]);
				fromTemp.documentation = getConfigurationComponentAttribute(fromContent.children[3]);
				
				fromListTemp.push(fromTemp);
			}
			
			initializeTemp.from = fromListTemp;
			
			initializeListTemp.push(initializeTemp);
		}
		
		variableTemp.initialize = initializeListTemp;
		
		createConfigurationComponentDB('Variable', variableTemp);
	}
	
	// Create Configuration Ontology Component
	if(choicedConfigurationTreeNode.name == 'Ontology') {
		var ontologyTemp = null;
		
		ontologyTemp = new Object();
		ontologyTemp.ontology_id = getConfigurationComponentName();
		
		var ontologyDiv = getConfigurationComponentRootDiv();
		var ontologyContent = getConfigurationComponentContent(ontologyDiv);
		ontologyTemp.location = getConfigurationComponentAttribute(ontologyContent.children[0]);
		ontologyTemp.namespace = getConfigurationComponentAttribute(ontologyContent.children[1]);
		ontologyTemp.documentation = getConfigurationComponentAttribute(ontologyContent.children[2]);
		
		createConfigurationComponentDB('Ontology', ontologyTemp);
	}
	
	// Create Configuration Service Provider Component
	if(choicedConfigurationTreeNode.name == 'Service Provider') {
		var serviceProviderTemp = null;
		var serviceTemp = null;
		var serviceListTemp = null;
		
		serviceProviderTemp = new Object();
		serviceProviderTemp.serviceprovider_id = getConfigurationComponentName();
		
		var serviceProviderDiv = getConfigurationComponentRootDiv();
		var serviceProviderContent = getConfigurationComponentContent(serviceProviderDiv);
		serviceProviderTemp.name = getConfigurationComponentAttribute(serviceProviderContent.children[0]);
		serviceProviderTemp.location = getConfigurationComponentAttribute(serviceProviderContent.children[1]);
		serviceProviderTemp.documentation = getConfigurationComponentAttribute(serviceProviderContent.children[2]);
		
		serviceListTemp = new Array();
		
		for(var i = 0; i < serviceProviderDiv.children.length - 2; i++) {
			serviceTemp = new Object();
			
			var serviceDiv = getConfigurationComponentChildrenDiv(serviceProviderDiv.children[i + 2]);
			var serviceContent = getConfigurationComponentContent(serviceDiv);
			serviceTemp.operation = getConfigurationComponentAttribute(serviceContent.children[0]);
			serviceTemp.documentation = getConfigurationComponentAttribute(serviceContent.children[1]);
			
			serviceListTemp.push(serviceTemp);
		}
		
		serviceProviderTemp.service = serviceListTemp;
		
		createConfigurationComponentDB('ServiceProvider', serviceProviderTemp);
	}
	
	// Create Configuration Node Component
	if(choicedConfigurationTreeNode.name == 'Node') {
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
		nodeTemp.node_id = getConfigurationComponentName();
		
		var nodeDiv = getConfigurationComponentRootDiv();
		var nodeContent = getConfigurationComponentContent(nodeDiv);
		nodeTemp.name = getConfigurationComponentAttribute(nodeContent.children[0]);
		nodeTemp.state = getConfigurationComponentAttribute(nodeContent.children[1]);
		nodeTemp.documentation = getConfigurationComponentAttribute(nodeContent.children[2]);
		
		messageListTemp = new Array();
		variableListTemp = new Array();
		waitListTemp = new Array();
		conditionListTemp = new Array();
		invokeListTemp = new Array();
		
		for(var i = 0; i < nodeDiv.children.length - 2; i++) {
			var tagName = getConfigurationTagName(nodeDiv.children[i + 2]);
			
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
		
		createConfigurationComponentDB('Node', nodeTemp);
	}
}

function getConfigurationTagName(activeComponentDiv) {
	var value = activeComponentDiv.children[0].children[0].children[0].children[0].innerHTML;
	return value;
}

function getConfigurationComponentName() {
	var value = document.getElementById('configurationComponentDescriptionInput').value;
	return value;
}

function getConfigurationComponentRootDiv() {
	var value = document.getElementById('configurationComponentContentDiv').children[0].children[0];
	return value;
}

function getConfigurationComponentContent(activeComponentDiv) {
	var value = activeComponentDiv.children[1].children[0];
	return value;
}

function getConfigurationComponentAttribute(activeComponentContent) {
	var value = activeComponentContent.children[1].children[0].value;
	return value;
}

function getConfigurationComponentChildrenDiv(activeComponentDiv) {
	var value = activeComponentDiv.children[0];
	return value;
}
