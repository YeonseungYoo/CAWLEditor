// Configuration Update Event
function clickConfigurationUpdate() {
	var selectedNode = $('#configurationSharedTreeDiv').tree('getSelectedNode');
	
	if(selectedNode != false) {
		if(selectedNode.type != 'Root') {
			$('#configurationOperationDiv').empty();
			
			$('#configurationValidationTextarea').val("");
			
			selectedConfigurationTreeNode = selectedNode;
			checkConfigurationFunctionTask = "update";
			
			if(selectedNode.type == "Message") {
				var messageValue = null;
				var partValueList = new Array();
				var partValue = new Object();
				
				if(selectedNode.value) {
					messageValue = selectedNode.value;
				} else {
					for(var i = 0; i < sharedMessageComponent.length; i++) {
            			if(selectedNode.name == sharedMessageComponent[i].message_id) {
            				messageValue = sharedMessageComponent[i];
            			}
            		}
				}
				
				var divRoot = document.createElement('div');
				divRoot.innerHTML = document.getElementById('configurationComponentTemplate').innerHTML;
				document.getElementById('configurationOperationDiv').appendChild(divRoot);
				
				var div = document.createElement('div');
				div.innerHTML = document.getElementById('messageTagTemplate').innerHTML;
				document.getElementById('configurationComponentContentDiv').appendChild(div);
				
				getConfigurationComponentNameUpdate().value = messageValue.message_id;
				
				var messageDiv = getConfigurationComponentRootDivUpdate();
				var messageContent = getConfigurationComponentContentUpdate(messageDiv);
				
				getConfigurationComponentAttributeUpdate(messageContent.children[0]).value = messageValue.name;
				getConfigurationComponentAttributeUpdate(messageContent.children[1]).value = messageValue.documentation;
				
				var partValueList = messageValue.part;
				
				for(var i = 0; i < partValueList.length; i++) {
					partValue = partValueList[i];
					
					addPartTagTemplateUpdate(messageDiv);
					
					var partDivTemp = messageDiv.children[i + 2];
					var partDiv = getConfigurationComponentChildDivUpdate(partDivTemp);
					var partContent = getConfigurationComponentContentUpdate(partDiv);
					
					getConfigurationComponentAttributeUpdate(partContent.children[0]).value = partValue.name;
					getConfigurationComponentAttributeUpdate(partContent.children[1]).value = partValue.element;
					getConfigurationComponentAttributeUpdate(partContent.children[2]).value = partValue.type;
					getConfigurationComponentAttributeUpdate(partContent.children[3]).value = partValue.documentation;
				}
			} else if(selectedNode.type == "Variable") {
				var variableValue = null;
				var initializeValueList = new Array;
				var initializeValue = new Object;
				var fromValueList = new Array;
				var fromValue = new Object;
				
				if(selectedNode.value) {
					variableValue = selectedNode.value;
				} else {
					for(var i = 0; i < sharedVariableComponent.length; i++) {
            			if(selectedNode.name == sharedVariableComponent[i].variable_id) {
            				variableValue = sharedVariableComponent[i];
            			}
            		}
				}
				
				var divRoot = document.createElement('div');
				divRoot.innerHTML = document.getElementById('configurationComponentTemplate').innerHTML;
				document.getElementById('configurationOperationDiv').appendChild(divRoot);
				
				var div = document.createElement('div');
				div.innerHTML = document.getElementById('variableTagTemplate').innerHTML;
				document.getElementById('configurationComponentContentDiv').appendChild(div);
				
				getConfigurationComponentNameUpdate().value = variableValue.variable_id;
				
				var variableDiv = getConfigurationComponentRootDivUpdate();
				var variableContent = getConfigurationComponentContentUpdate(variableDiv);
				
				getConfigurationComponentAttributeUpdate(variableContent.children[0]).value = variableValue.name;
				getConfigurationComponentAttributeUpdate(variableContent.children[1]).value = variableValue.type;
				getConfigurationComponentAttributeUpdate(variableContent.children[2]).value = variableValue.documentation;
				
				initializeValueList = variableValue.initialize;
				
				for(var i = 0; i < initializeValueList.length; i++) {
					initializeValue = initializeValueList[i];
					
					addInitializeTagTemplateUpdate(variableDiv);
					
					var initializeDivTemp = variableDiv.children[i + 2];
					var initializeDiv = getConfigurationComponentChildDivUpdate(initializeDivTemp);
					var initializeContent = getConfigurationComponentContentUpdate(initializeDiv);
					
					getConfigurationComponentAttributeUpdate(initializeContent.children[0]).value = initializeValue.part;
					getConfigurationComponentAttributeUpdate(initializeContent.children[1]).value = initializeValue.documentation;
					
					fromValueList = initializeValue.from;
					
					for(var j = 0; j < fromValueList.length; j++) {
						fromValue = fromValueList[j];
						
						addFromTagTemplateUpdate(initializeDiv);
						
						var fromDivTemp = initializeDiv.children[j + 2];
						var fromDiv = getConfigurationComponentChildDivUpdate(fromDivTemp);
						var fromContent = getConfigurationComponentContentUpdate(fromDiv);
						
						getConfigurationComponentAttributeUpdate(fromContent.children[0]).value = fromValue.variable;
						getConfigurationComponentAttributeUpdate(fromContent.children[1]).value = fromValue.part;
						getConfigurationComponentAttributeUpdate(fromContent.children[2]).value = fromValue.expression;
						getConfigurationComponentAttributeUpdate(fromContent.children[3]).value = fromValue.documentation;
					}
				}
			} else if(selectedNode.type == "Ontology") {
				var ontologyValue = null;
				
				if(selectedNode.value) {
					ontologyValue = selectedNode.value;
				} else {
					for(var i = 0; i < sharedOntologyComponent.length; i++) {
            			if(selectedNode.name == sharedOntologyComponent[i].ontology_id) {
            				ontologyValue = sharedOntologyComponent[i];
            			}
            		}
				}
				
				var divRoot = document.createElement('div');
				divRoot.innerHTML = document.getElementById('configurationComponentTemplate').innerHTML;
				document.getElementById('configurationOperationDiv').appendChild(divRoot);
				
				var div = document.createElement('div');
				div.innerHTML = document.getElementById('ontologyTagTemplate').innerHTML;
				document.getElementById('configurationComponentContentDiv').appendChild(div);
				
				getConfigurationComponentNameUpdate().value = ontologyValue.ontology_id;
				
				var ontologyDiv = getConfigurationComponentRootDivUpdate();
				var ontologyContent = getConfigurationComponentContentUpdate(ontologyDiv);
				
				getConfigurationComponentAttributeUpdate(ontologyContent.children[0]).value = ontologyValue.location;
				getConfigurationComponentAttributeUpdate(ontologyContent.children[1]).value = ontologyValue.namespace;
				getConfigurationComponentAttributeUpdate(ontologyContent.children[2]).value = ontologyValue.documentation;
			} else if(selectedNode.type == "Service Provider") {
				var serviceProviderValue = null;
				var serviceValueList = new Array;
				var serviceValue = new Object;
				
				if(selectedNode.value) {
					serviceProviderValue = selectedNode.value;
				} else {
					for(var i = 0; i < sharedServiceProviderComponent.length; i++) {
	                    if(selectedNode.name == sharedServiceProviderComponent[i].serviceprovider_id) {
	                    	serviceProviderValue = sharedServiceProviderComponent[i];
	                    }
	                }
				}
				
				var divRoot = document.createElement('div');
				divRoot.innerHTML = document.getElementById('configurationComponentTemplate').innerHTML;
				document.getElementById('configurationOperationDiv').appendChild(divRoot);
				
				var div = document.createElement('div');
				div.innerHTML = document.getElementById('serviceProviderTagTemplate').innerHTML;
				document.getElementById('configurationComponentContentDiv').appendChild(div);
				
				getConfigurationComponentNameUpdate().value = serviceProviderValue.serviceprovider_id;
				
				var serviceProviderDiv = getConfigurationComponentRootDivUpdate();
				var serviceProviderContent = getConfigurationComponentContentUpdate(serviceProviderDiv);
				
				getConfigurationComponentAttributeUpdate(serviceProviderContent.children[0]).value = serviceProviderValue.name;
				getConfigurationComponentAttributeUpdate(serviceProviderContent.children[1]).value = serviceProviderValue.location;
				getConfigurationComponentAttributeUpdate(serviceProviderContent.children[2]).value = serviceProviderValue.documentation;
				
				serviceValueList = serviceProviderValue.service;
				
				for(var i = 0; i < serviceValueList.length; i++) {
					serviceValue = serviceValueList[i];
					
					addServiceTagTemplateUpdate(serviceProviderDiv);
					
					var serviceDivTemp = serviceProviderDiv.children[i + 2];
					var serviceDiv = getConfigurationComponentChildDivUpdate(serviceDivTemp);
					var serviceContent = getConfigurationComponentContentUpdate(serviceDiv);
					
					requestOperation(getConfigurationComponentAttributeUpdate(serviceContent.children[0]), serviceValue.operation);
					getConfigurationComponentAttributeUpdate(serviceContent.children[1]).value = serviceValue.documentation;
				}
			} else if(selectedNode.type == "Node") {
				var nodeValue = null;
				var messageValueList = new Array;
				var messageValue = new Object;
				var partValueList = new Array;
				var partValue = new Object;
				var variableValueList = new Array;
				var variableValue = new Object;
				var initializeValueList = new Array;
				var initializeValue = new Object;
				var fromValueList = new Array;
				var fromValue = new Object;
				var waitValueList = new Array;
				var waitValue = new Object;
				var conditionValueList = new Array;
				var conditionValue = new Object;
				var caseValueList = new Array;
				var caseValue = new Object;
				var eventValueList = new Array;
				var eventValue = new Object;
				var contextValueList = new Array;
				var contextValue = new Object;
				var ruleValueList = new Array;
				var ruleValue = new Object;
				var constraintValueList = new Array;
				var constraintValue = new Object;
				var subjectValueList = new Array;
				var subjectValue = new Object;
				var verbValueList = new Array;
				var verbValue = new Object;
				var objectValueList = new Array;
				var objectValue = new Object;
				var invokeValueList = new Array;
				var invokeValue = new Object;
				
				var messageCount = 0;
				var variableCount = 0;
				var waitCount = 0;
				var conditionCount = 0;
				var caseCount = 0;
				var subjectCount = 0;
				var verbCount = 0;
				
				if(selectedNode.value) {
					nodeValue = selectedNode.value;
				} else {
					for(var i = 0; i < sharedNodeComponent.length; i++) {
	                    if(selectedNode.name == sharedNodeComponent[i].node_id) {
	                    	nodeValue = sharedNodeComponent[i];
	                    }
	                }
				}
				
				var divRoot = document.createElement('div');
				divRoot.innerHTML = document.getElementById('configurationComponentTemplate').innerHTML;
				document.getElementById('configurationOperationDiv').appendChild(divRoot);
				
				var div = document.createElement('div');
				div.innerHTML = document.getElementById('nodeTagTemplate').innerHTML;
				document.getElementById('configurationComponentContentDiv').appendChild(div);
				
				getConfigurationComponentNameUpdate().value = nodeValue.node_id;
				
				var nodeDiv = getConfigurationComponentRootDivUpdate();
				var nodeContent = getConfigurationComponentContentUpdate(nodeDiv);
				
				getConfigurationComponentAttributeUpdate(nodeContent.children[0]).value = nodeValue.name;
				getConfigurationComponentAttributeUpdate(nodeContent.children[1]).value = nodeValue.state;
				getConfigurationComponentAttributeUpdate(nodeContent.children[2]).value = nodeValue.documentation;
				
				messageValueList = nodeValue.message;
				variableValueList = nodeValue.variable;
				waitValueList = nodeValue.wait;
				conditionValueList = nodeValue.condition;
				invokeValueList = nodeValue.invoke;
				
				for(var i = 0; i < messageValueList.length; i++) {
					messageCount++;
					
					messageValue = messageValueList[i];
					
					addMessageTagTemplateUpdate(nodeDiv);
					
					var messageDivTemp = nodeDiv.children[i + 2];
					var messageDiv = getConfigurationComponentChildDivUpdate(messageDivTemp);
					var messageContent = getConfigurationComponentContentUpdate(messageDiv);
					
					getConfigurationComponentAttributeUpdate(messageContent.children[0]).value = messageValue.name;
					getConfigurationComponentAttributeUpdate(messageContent.children[1]).value = messageValue.documentation;
					
					partValueList = messageValue.part;
					
					for(var j = 0; j < partValueList.length; j++) {
						partValue = partValueList[j];
						
						addPartTagTemplateUpdate(messageDiv);
						
						var partDivTemp = messageDiv.children[j + 2];
						var partDiv = getConfigurationComponentChildDivUpdate(partDivTemp);
						var partContent = getConfigurationComponentContentUpdate(partDiv);
						
						getConfigurationComponentAttributeUpdate(partContent.children[0]).value = partValue.name;
						getConfigurationComponentAttributeUpdate(partContent.children[1]).value = partValue.element;
						getConfigurationComponentAttributeUpdate(partContent.children[2]).value = partValue.type;
						getConfigurationComponentAttributeUpdate(partContent.children[3]).value = partValue.documentation;
					}
				}
				
				for(var i = 0; i < variableValueList.length; i++) {
					variableCount++;
					
					variableValue = variableValueList[i];
					
					addVariableTagTemplateUpdate(nodeDiv);
					
					var variableDivTemp = nodeDiv.children[i + 2 + messageCount];
					var variableDiv = getConfigurationComponentChildDivUpdate(variableDivTemp);
					var variableContent = getConfigurationComponentContentUpdate(variableDiv);
					
					getConfigurationComponentAttributeUpdate(variableContent.children[0]).value = variableValue.name;
					getConfigurationComponentAttributeUpdate(variableContent.children[1]).value = variableValue.type;
					getConfigurationComponentAttributeUpdate(variableContent.children[2]).value = variableValue.documentation;
					
					initializeValueList = variableValue.initialize;
					
					for(var j = 0; j < initializeValueList.length; j++) {
						initializeValue = initializeValueList[j];
						
						addInitializeTagTemplateUpdate(variableDiv);
						
						var initializeDivTemp = variableDiv.children[j + 2];
						var initializeDiv = getConfigurationComponentChildDivUpdate(initializeDivTemp);
						var initializeContent = getConfigurationComponentContentUpdate(initializeDiv);
						
						getConfigurationComponentAttributeUpdate(initializeContent.children[0]).value = initializeValue.part;
						getConfigurationComponentAttributeUpdate(initializeContent.children[1]).value = initializeValue.documentation;
						
						fromValueList = initializeValue.from;
						
						for(var k = 0; k < fromValueList.length; k++) {
							fromValue = fromValueList[k];
							
							addFromTagTemplateUpdate(initializeDiv);
							
							var fromDivTemp = initializeDiv.children[k + 2];
							var fromDiv = getConfigurationComponentChildDivUpdate(fromDivTemp);
							var fromContent = getConfigurationComponentContentUpdate(fromDiv);
							
							getConfigurationComponentAttributeUpdate(fromContent.children[0]).value = fromValue.variable;
							getConfigurationComponentAttributeUpdate(fromContent.children[1]).value = fromValue.part;
							getConfigurationComponentAttributeUpdate(fromContent.children[2]).value = fromValue.expression;
							getConfigurationComponentAttributeUpdate(fromContent.children[3]).value = fromValue.documentation;
						}
					}
				}
				
				for(var i = 0; i < waitValueList.length; i++) {
					waitCount++;
					
					waitValue = waitValueList[i];
					
					addWaitTagTemplateUpdate(nodeDiv);
					
					var waitDivTemp = nodeDiv.children[i + 2 + messageCount + variableCount];
					var waitDiv = getConfigurationComponentChildDivUpdate(waitDivTemp);
					var waitContent = getConfigurationComponentContentUpdate(waitDiv);
					
					getConfigurationComponentAttributeUpdate(waitContent.children[0]).value = waitValue.joinCondition;
					getConfigurationComponentAttributeUpdate(waitContent.children[1]).value = waitValue.documentation;
				}
				
				for(var i = 0; i < conditionValueList.length; i++) {
					conditionCount++;
					
					conditionValue = conditionValueList[i];
					
					addConditionTagTemplateUpdate(nodeDiv);
					
					var conditionDivTemp = nodeDiv.children[i + 2 + messageCount + variableCount + waitCount];
					var conditionDiv = getConfigurationComponentChildDivUpdate(conditionDivTemp);
					var conditionContent = getConfigurationComponentContentUpdate(conditionDiv);
					
					getConfigurationComponentAttributeUpdate(conditionContent.children[0]).value = conditionValue.expression;
					getConfigurationComponentAttributeUpdate(conditionContent.children[1]).value = conditionValue.documentation;
					
					caseValueList = conditionValue.case;
					contextValueList = conditionValue.context;
					
					for(var j = 0; j < caseValueList.length; j++) {
						caseCount++;
						
						caseValue = caseValueList[j];
						
						addCaseTagTemplateUpdate(conditionDiv);
						
						var caseDivTemp = conditionDiv.children[j + 2];
						var caseDiv = getConfigurationComponentChildDivUpdate(caseDivTemp);
						var caseContent = getConfigurationComponentContentUpdate(caseDiv);
						
						getConfigurationComponentAttributeUpdate(caseContent.children[0]).value = caseValue.name;
						getConfigurationComponentAttributeUpdate(caseContent.children[1]).value = caseValue.expression;
						getConfigurationComponentAttributeUpdate(caseContent.children[2]).value = caseValue.documentation;
						
						eventValueList = caseValue.event;
						
						for(var k  = 0; k < eventValueList.length; k++) {
							eventValue = eventValueList[k];
							
							addEventTagTemplateUpdate(caseDiv);
							
							var eventDivTemp = caseDiv.children[k + 2];
							var eventDiv = getConfigurationComponentChildDivUpdate(eventDivTemp);
							var eventContent = getConfigurationComponentContentUpdate(eventDiv);
							
							getConfigurationComponentAttributeUpdate(eventContent.children[0]).value = eventValue.name;
							getConfigurationComponentAttributeUpdate(eventContent.children[1]).value = eventValue.operation;
							getConfigurationComponentAttributeUpdate(eventContent.children[2]).value = eventValue.documentation;
						}
					}
					
					for(var j = 0; j < contextValueList.length; j++) {
						contextValue = contextValueList[j];
						
						addContextTagTemplateUpdate(conditionDiv);
						
						var contextDivTemp = conditionDiv.children[j + 2 + caseCount];
						var contextDiv = getConfigurationComponentChildDivUpdate(contextDivTemp);
						var contextContent = getConfigurationComponentContentUpdate(contextDiv);
						
						getConfigurationComponentAttributeUpdate(contextContent.children[0]).value = contextValue.name;
						getConfigurationComponentAttributeUpdate(contextContent.children[1]).value = contextValue.priority;
						getConfigurationComponentAttributeUpdate(contextContent.children[2]).value = contextValue.documentation;
						
						ruleValueList = contextValue.rule;
						
						for(var k  = 0; k < ruleValueList.length; k++) {
							ruleValue = ruleValueList[k];
							
							addRuleTagTemplateUpdate(contextDiv);
							
							var ruleDivTemp = contextDiv.children[k + 2];
							var ruleDiv = getConfigurationComponentChildDivUpdate(ruleDivTemp);
							var ruleContent = getConfigurationComponentContentUpdate(ruleDiv);
							
							getConfigurationComponentAttributeUpdate(ruleContent.children[0]).value = ruleValue.name;
							getConfigurationComponentAttributeUpdate(ruleContent.children[1]).value = ruleValue.expression;
							getConfigurationComponentAttributeUpdate(ruleContent.children[2]).value = ruleValue.documentation;
							
							constraintValueList = ruleValue.constraint;
							
							for(var l = 0; l < constraintValueList.length; l++) {
								constraintValue = constraintValueList[l];
								
								addConstraintTagTemplateUpdate(ruleDiv);
								
								var constraintDivTemp = ruleDiv.children[l + 2];
								var constraintDiv = getConfigurationComponentChildDivUpdate(constraintDivTemp);
								var constraintContent = getConfigurationComponentContentUpdate(constraintDiv);
								
								getConfigurationComponentAttributeUpdate(constraintContent.children[0]).value = constraintValue.name;
								getConfigurationComponentAttributeUpdate(constraintContent.children[1]).value = constraintValue.documentation;
								
								subjectValueList = constraintValue.subject;
								verbValueList = constraintValue.verb;
								objectValueList = constraintValue.object;
								
								for(var m = 0; m < subjectValueList.length; m++) {
									subjectCount++;
									
									subjectValue = subjectValueList[m];
									
									addSubjectTagTemplateUpdate(constraintDiv);
									
									var subjectDivTemp = constraintDiv.children[m + 2];
									var subjectDiv = getConfigurationComponentChildDivUpdate(subjectDivTemp);
									var subjectContent = getConfigurationComponentContentUpdate(subjectDiv);
									
									getConfigurationComponentAttributeUpdate(subjectContent.children[0]).value = subjectValue.type;
									requestSubject(getConfigurationComponentAttributeUpdate(subjectContent.children[1]), subjectValue.value);
								}
								
								for(var m = 0; m < verbValueList.length; m++) {
									verbCount++;
									
									verbValue = verbValueList[m];
									
									addVerbTagTemplateUpdate(constraintDiv);
									
									var verbDivTemp = constraintDiv.children[m + 2 + subjectCount];
									var verbDiv = getConfigurationComponentChildDivUpdate(verbDivTemp);
									var verbContent = getConfigurationComponentContentUpdate(verbDiv);
									
									requestVerb(getConfigurationComponentAttributeUpdate(verbContent.children[0]), verbValue.value);
								}
								
								for(var m = 0; m < objectValueList.length; m++) {
									objectValue = objectValueList[m];
									
									addObjectTagTemplateUpdate(constraintDiv);
									
									var objectDivTemp = constraintDiv.children[m + 2 + subjectCount + verbCount];
									var objectDiv = getConfigurationComponentChildDivUpdate(objectDivTemp);
									var objectContent = getConfigurationComponentContentUpdate(objectDiv);
									
									getConfigurationComponentAttributeUpdate(objectContent.children[0]).value = objectValue.type;
									requestObject(getConfigurationComponentAttributeUpdate(objectContent.children[1]), objectValue.value);
								}
								
								subjectCount = 0;
								verbCount = 0;
							}
						}
					}
					
					caseCount = 0;
				}
				
				for(var i = 0; i < invokeValueList.length; i++) {
					invokeValue = invokeValueList[i];
					
					addInvokeTagTemplateUpdate(nodeDiv);
					
					var invokeDivTemp = nodeDiv.children[i + 2 + messageCount + variableCount + waitCount + conditionCount];
					var invokeDiv = getConfigurationComponentChildDivUpdate(invokeDivTemp);
					var invokeContent = getConfigurationComponentContentUpdate(invokeDiv);
					
					requestOperation(getConfigurationComponentAttributeUpdate(invokeContent.children[0]), invokeValue.operation);
					getConfigurationComponentAttributeUpdate(invokeContent.children[1]).value = invokeValue.documentation;
				}
			}
		}
	}
}

function updateConfigurationComponent() {
	if(choicedConfigurationTreeNode.type == "Message") {
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
		
		updateConfigurationComponentDB('Message', messageTemp);
	} else if(choicedConfigurationTreeNode.type == "Variable") {
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
		
		updateConfigurationComponentDB('Variable', variableTemp);
	} else if(choicedConfigurationTreeNode.type == "Ontology") {
		var ontologyTemp = null;
		
		ontologyTemp = new Object();
		ontologyTemp.ontology_id = getConfigurationComponentName();
		
		var ontologyDiv = getConfigurationComponentRootDiv();
		var ontologyContent = getConfigurationComponentContent(ontologyDiv);
		ontologyTemp.location = getConfigurationComponentAttribute(ontologyContent.children[0]);
		ontologyTemp.namespace = getConfigurationComponentAttribute(ontologyContent.children[1]);
		ontologyTemp.documentation = getConfigurationComponentAttribute(ontologyContent.children[2]);
		
		updateConfigurationComponentDB('Ontology', ontologyTemp);
	} else if(choicedConfigurationTreeNode.type == "Service Provider") {
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
		
		updateConfigurationComponentDB('ServiceProvider', serviceProviderTemp);
	} else if(choicedConfigurationTreeNode.type == "Node") {
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
		
		updateConfigurationComponentDB('Node', nodeTemp);
	}
}

function getConfigurationComponentNameUpdate() {
	var position = document.getElementById('configurationComponentDescriptionInput');
	return position;
}

function getConfigurationComponentRootDivUpdate() {
	var position = document.getElementById('configurationComponentContentDiv').children[0].children[0];
	return position;
}

function getConfigurationComponentContentUpdate(activeComponentDiv) {
	var position = activeComponentDiv.children[1].children[0];
	return position;
}

function getConfigurationComponentAttributeUpdate(activeComponentContent) {
	var position = activeComponentContent.children[1].children[0];
	return position;
}

function getConfigurationComponentChildDivUpdate(activeComponentDiv) {
	var position = activeComponentDiv.children[0];
	return position;
}
