// Update Active Component Leaf Node
function clickActiveTreeUpdate() {
	var selectedNode = $('#activeTreeDiv').tree('getSelectedNode');
	if(selectedNode != false) {
		if(selectedNode.type != 'Root') {
			
			if(choicedActiveTreeLeafNode != null) {
					selectedUpdateNode = choicedActiveTreeLeafNode;
					checkActiveFunctionTask = "update";
					
					if(choicedActiveTreeLeafNode.type == "Message") {
						var messageValue = choicedActiveTreeLeafNode.value;
						var partValueList = new Array();
						var partValue = new Object();
						
						$('.activeComponentContentText').text('Update Message Element');
						
						$("#activeComponentDiv").css({
							"display":"block"
						});
						
						$("#commonDiv").css({
							"position":"static"
						});
						
						var div = document.createElement('div');
						div.innerHTML = document.getElementById('messageTagTemplate').innerHTML;
						document.getElementById('activeComponentContentDiv').appendChild(div);
						
						getActiveComponentNameUpdate().value = messageValue.message_id;
						
						var messageDiv = getActiveComponentRootDivUpdate();
						var messageContent = getActiveComponentContentUpdate(messageDiv);
						
						getActiveComponentAttributeUpdate(messageContent.children[0]).value = messageValue.name;
						getActiveComponentAttributeUpdate(messageContent.children[1]).value = messageValue.documentation;
						
						var partValueList = messageValue.part;
						
						for(var i = 0; i < partValueList.length; i++) {
							partValue = partValueList[i];
							
							addPartTagTemplateUpdate(messageDiv);
							
							var partDivTemp = messageDiv.children[i + 2];
							var partDiv = getActiveComponentChildDivUpdate(partDivTemp);
							var partContent = getActiveComponentContentUpdate(partDiv);
							
							getActiveComponentAttributeUpdate(partContent.children[0]).value = partValue.name;
							getActiveComponentAttributeUpdate(partContent.children[1]).value = partValue.element;
							getActiveComponentAttributeUpdate(partContent.children[2]).value = partValue.type;
							getActiveComponentAttributeUpdate(partContent.children[3]).value = partValue.documentation;
						}
					} else if(choicedActiveTreeLeafNode.type == "Variable") {
						var variableValue = choicedActiveTreeLeafNode.value;
						var initializeValueList = new Array;
						var initializeValue = new Object;
						var fromValueList = new Array;
						var fromValue = new Object;
						
						$('.activeComponentContentText').text('Update Variable Element');
						
						$("#activeComponentDiv").css({
							"display":"block"
						});
						
						$("#commonDiv").css({
							"position":"static"
						});
						
						var div = document.createElement('div');
						div.innerHTML = document.getElementById('variableTagTemplate').innerHTML;
						document.getElementById('activeComponentContentDiv').appendChild(div);
						
						getActiveComponentNameUpdate().value = variableValue.variable_id;
						
						var variableDiv = getActiveComponentRootDivUpdate();
						var variableContent = getActiveComponentContentUpdate(variableDiv);
						
						getActiveComponentAttributeUpdate(variableContent.children[0]).value = variableValue.name;
						getActiveComponentAttributeUpdate(variableContent.children[1]).value = variableValue.type;
						getActiveComponentAttributeUpdate(variableContent.children[2]).value = variableValue.documentation;
						
						initializeValueList = variableValue.initialize;
						
						for(var i = 0; i < initializeValueList.length; i++) {
							initializeValue = initializeValueList[i];
							
							addInitializeTagTemplateUpdate(variableDiv);
							
							var initializeDivTemp = variableDiv.children[i + 2];
							var initializeDiv = getActiveComponentChildDivUpdate(initializeDivTemp);
							var initializeContent = getActiveComponentContentUpdate(initializeDiv);
							
							getActiveComponentAttributeUpdate(initializeContent.children[0]).value = initializeValue.part;
							getActiveComponentAttributeUpdate(initializeContent.children[1]).value = initializeValue.documentation;
							
							fromValueList = initializeValue.from;
							
							for(var j = 0; j < fromValueList.length; j++) {
								fromValue = fromValueList[j];
								
								addFromTagTemplateUpdate(initializeDiv);
								
								var fromDivTemp = initializeDiv.children[j + 2];
								var fromDiv = getActiveComponentChildDivUpdate(fromDivTemp);
								var fromContent = getActiveComponentContentUpdate(fromDiv);
								
								getActiveComponentAttributeUpdate(fromContent.children[0]).value = fromValue.variable;
								getActiveComponentAttributeUpdate(fromContent.children[1]).value = fromValue.part;
								getActiveComponentAttributeUpdate(fromContent.children[2]).value = fromValue.expression;
								getActiveComponentAttributeUpdate(fromContent.children[3]).value = fromValue.documentation;
							}
						}
					} else if(choicedActiveTreeLeafNode.type == "Ontology") {
						var ontologyValue = choicedActiveTreeLeafNode.value;
						
						$('.activeComponentContentText').text('Update Ontology Element');
						
						$("#activeComponentDiv").css({
							"display":"block"
						});
						
						$("#commonDiv").css({
							"position":"static"
						});
						
						var div = document.createElement('div');
						div.innerHTML = document.getElementById('ontologyTagTemplate').innerHTML;
						document.getElementById('activeComponentContentDiv').appendChild(div);
						
						getActiveComponentNameUpdate().value = ontologyValue.ontology_id;
						
						var ontologyDiv = getActiveComponentRootDivUpdate();
						var ontologyContent = getActiveComponentContentUpdate(ontologyDiv);
						
						getActiveComponentAttributeUpdate(ontologyContent.children[0]).value = ontologyValue.location;
						getActiveComponentAttributeUpdate(ontologyContent.children[1]).value = ontologyValue.namespace;
						getActiveComponentAttributeUpdate(ontologyContent.children[2]).value = ontologyValue.documentation;
					} else if(choicedActiveTreeLeafNode.type == "Service Provider") {
						var serviceProviderValue = choicedActiveTreeLeafNode.value;
						var serviceValueList = new Array;
						var serviceValue = new Object;
						
						$('.activeComponentContentText').text('Update Service Provider Element');
						
						$("#activeComponentDiv").css({
							"display":"block"
						});
						
						$("#commonDiv").css({
							"position":"static"
						});
						
						var div = document.createElement('div');
						div.innerHTML = document.getElementById('serviceProviderTagTemplate').innerHTML;
						document.getElementById('activeComponentContentDiv').appendChild(div);
						
						getActiveComponentNameUpdate().value = serviceProviderValue.serviceprovider_id;
						
						var serviceProviderDiv = getActiveComponentRootDivUpdate();
						var serviceProviderContent = getActiveComponentContentUpdate(serviceProviderDiv);
						
						getActiveComponentAttributeUpdate(serviceProviderContent.children[0]).value = serviceProviderValue.name;
						getActiveComponentAttributeUpdate(serviceProviderContent.children[1]).value = serviceProviderValue.location;
						getActiveComponentAttributeUpdate(serviceProviderContent.children[2]).value = serviceProviderValue.documentation;
						
						serviceValueList = serviceProviderValue.service;
						
						for(var i = 0; i < serviceValueList.length; i++) {
							serviceValue = serviceValueList[i];
							
							addServiceTagTemplateUpdate(serviceProviderDiv);
							
							var serviceDivTemp = serviceProviderDiv.children[i + 2];
							var serviceDiv = getActiveComponentChildDivUpdate(serviceDivTemp);
							var serviceContent = getActiveComponentContentUpdate(serviceDiv);
							
							requestOperation(getActiveComponentAttributeUpdate(serviceContent.children[0]), serviceValue.operation);
							getActiveComponentAttributeUpdate(serviceContent.children[1]).value = serviceValue.documentation;
						}
					} else if(choicedActiveTreeLeafNode.type == "Activator") {
						var activatorValue = choicedActiveTreeLeafNode.value;
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
						
						var messageCount = 0;
						var variableCount = 0;
						var caseCount = 0;
						var subjectCount = 0;
						var verbCount = 0;
						
						$('.activeComponentContentText').text('Update Activator Element');
						
						$("#activeComponentDiv").css({
							"display":"block"
						});
						
						$("#commonDiv").css({
							"position":"static"
						});
						
						var div = document.createElement('div');
						div.innerHTML = document.getElementById('activatorTagTemplate').innerHTML;
						document.getElementById('activeComponentContentDiv').appendChild(div);
						
						getActiveComponentNameUpdate().value = activatorValue.activator_id;
						
						var activatorDiv = getActiveComponentRootDivUpdate();
						var activatorContent = getActiveComponentContentUpdate(activatorDiv);
						
						getActiveComponentAttributeUpdate(activatorContent.children[0]).value = activatorValue.name;
						getActiveComponentAttributeUpdate(activatorContent.children[1]).value = activatorValue.documentation;
						
						messageValueList = activatorValue.message;
						variableValueList = activatorValue.variable;
						conditionValueList = activatorValue.condition;
						
						for(var i = 0; i < messageValueList.length; i++) {
							messageCount++;
							
							messageValue = messageValueList[i];
							
							addMessageTagTemplateUpdate(activatorDiv);
							
							var messageDivTemp = activatorDiv.children[i + 2];
							var messageDiv = getActiveComponentChildDivUpdate(messageDivTemp);
							var messageContent = getActiveComponentContentUpdate(messageDiv);
							
							getActiveComponentAttributeUpdate(messageContent.children[0]).value = messageValue.name;
							getActiveComponentAttributeUpdate(messageContent.children[1]).value = messageValue.documentation;
							
							partValueList = messageValue.part;
							
							for(var j = 0; j < partValueList.length; j++) {
								partValue = partValueList[j];
								
								addPartTagTemplateUpdate(messageDiv);
								
								var partDivTemp = messageDiv.children[j + 2];
								var partDiv = getActiveComponentChildDivUpdate(partDivTemp);
								var partContent = getActiveComponentContentUpdate(partDiv);
								
								getActiveComponentAttributeUpdate(partContent.children[0]).value = partValue.name;
								getActiveComponentAttributeUpdate(partContent.children[1]).value = partValue.element;
								getActiveComponentAttributeUpdate(partContent.children[2]).value = partValue.type;
								getActiveComponentAttributeUpdate(partContent.children[3]).value = partValue.documentation;
							}
						}
						
						for(var i = 0; i < variableValueList.length; i++) {
							variableCount++;
							
							variableValue = variableValueList[i];
							
							addVariableTagTemplateUpdate(activatorDiv);
							
							var variableDivTemp = activatorDiv.children[i + 2 + messageCount];
							var variableDiv = getActiveComponentChildDivUpdate(variableDivTemp);
							var variableContent = getActiveComponentContentUpdate(variableDiv);
							
							getActiveComponentAttributeUpdate(variableContent.children[0]).value = variableValue.name;
							getActiveComponentAttributeUpdate(variableContent.children[1]).value = variableValue.type;
							getActiveComponentAttributeUpdate(variableContent.children[2]).value = variableValue.documentation;
							
							initializeValueList = variableValue.initialize;
							
							for(var j = 0; j < initializeValueList.length; j++) {
								initializeValue = initializeValueList[j];
								
								addInitializeTagTemplateUpdate(variableDiv);
								
								var initializeDivTemp = variableDiv.children[j + 2];
								var initializeDiv = getActiveComponentChildDivUpdate(initializeDivTemp);
								var initializeContent = getActiveComponentContentUpdate(initializeDiv);
								
								getActiveComponentAttributeUpdate(initializeContent.children[0]).value = initializeValue.part;
								getActiveComponentAttributeUpdate(initializeContent.children[1]).value = initializeValue.documentation;
								
								fromValueList = initializeValue.from;
								
								for(var k = 0; k < fromValueList.length; k++) {
									fromValue = fromValueList[k];
									
									addFromTagTemplateUpdate(initializeDiv);
									
									var fromDivTemp = initializeDiv.children[k + 2];
									var fromDiv = getActiveComponentChildDivUpdate(fromDivTemp);
									var fromContent = getActiveComponentContentUpdate(fromDiv);
									
									getActiveComponentAttributeUpdate(fromContent.children[0]).value = fromValue.variable;
									getActiveComponentAttributeUpdate(fromContent.children[1]).value = fromValue.part;
									getActiveComponentAttributeUpdate(fromContent.children[2]).value = fromValue.expression;
									getActiveComponentAttributeUpdate(fromContent.children[3]).value = fromValue.documentation;
								}
							}
						}
						
						for(var i = 0; i < conditionValueList.length; i++) {
							conditionValue = conditionValueList[i];
							
							addConditionTagTemplateUpdate(activatorDiv);
							
							var conditionDivTemp = activatorDiv.children[i + 2 + messageCount + variableCount];
							var conditionDiv = getActiveComponentChildDivUpdate(conditionDivTemp);
							var conditionContent = getActiveComponentContentUpdate(conditionDiv);
							
							getActiveComponentAttributeUpdate(conditionContent.children[0]).value = conditionValue.expression;
							getActiveComponentAttributeUpdate(conditionContent.children[1]).value = conditionValue.documentation;
							
							caseValueList = conditionValue.case;
							contextValueList = conditionValue.context;
							
							for(var j = 0; j < caseValueList.length; j++) {
								caseCount++;
								
								caseValue = caseValueList[j];
								
								addCaseTagTemplateUpdate(conditionDiv);
								
								var caseDivTemp = conditionDiv.children[j + 2];
								var caseDiv = getActiveComponentChildDivUpdate(caseDivTemp);
								var caseContent = getActiveComponentContentUpdate(caseDiv);
								
								getActiveComponentAttributeUpdate(caseContent.children[0]).value = caseValue.name;
								getActiveComponentAttributeUpdate(caseContent.children[1]).value = caseValue.expression;
								getActiveComponentAttributeUpdate(caseContent.children[2]).value = caseValue.documentation;
								
								eventValueList = caseValue.event;
								
								for(var k  = 0; k < eventValueList.length; k++) {
									eventValue = eventValueList[k];
									
									addEventTagTemplateUpdate(caseDiv);
									
									var eventDivTemp = caseDiv.children[k + 2];
									var eventDiv = getActiveComponentChildDivUpdate(eventDivTemp);
									var eventContent = getActiveComponentContentUpdate(eventDiv);
									
									getActiveComponentAttributeUpdate(eventContent.children[0]).value = eventValue.name;
									getActiveComponentAttributeUpdate(eventContent.children[1]).value = eventValue.operation;
									getActiveComponentAttributeUpdate(eventContent.children[2]).value = eventValue.documentation;
								}
							}
							
							for(var j = 0; j < contextValueList.length; j++) {
								contextValue = contextValueList[j];
								
								addContextTagTemplateUpdate(conditionDiv);
								
								var contextDivTemp = conditionDiv.children[j + 2 + caseCount];
								var contextDiv = getActiveComponentChildDivUpdate(contextDivTemp);
								var contextContent = getActiveComponentContentUpdate(contextDiv);
								
								getActiveComponentAttributeUpdate(contextContent.children[0]).value = contextValue.name;
								getActiveComponentAttributeUpdate(contextContent.children[1]).value = contextValue.priority;
								getActiveComponentAttributeUpdate(contextContent.children[2]).value = contextValue.documentation;
								
								ruleValueList = contextValue.rule;
								
								for(var k  = 0; k < ruleValueList.length; k++) {
									ruleValue = ruleValueList[k];
									
									addRuleTagTemplateUpdate(contextDiv);
									
									var ruleDivTemp = contextDiv.children[k + 2];
									var ruleDiv = getActiveComponentChildDivUpdate(ruleDivTemp);
									var ruleContent = getActiveComponentContentUpdate(ruleDiv);
									
									getActiveComponentAttributeUpdate(ruleContent.children[0]).value = ruleValue.name;
									getActiveComponentAttributeUpdate(ruleContent.children[1]).value = ruleValue.expression;
									getActiveComponentAttributeUpdate(ruleContent.children[2]).value = ruleValue.documentation;
									
									constraintValueList = ruleValue.constraint;
									
									for(var l = 0; l < constraintValueList.length; l++) {
										constraintValue = constraintValueList[l];
										
										addConstraintTagTemplateUpdate(ruleDiv);
										
										var constraintDivTemp = ruleDiv.children[l + 2];
										var constraintDiv = getActiveComponentChildDivUpdate(constraintDivTemp);
										var constraintContent = getActiveComponentContentUpdate(constraintDiv);
										
										getActiveComponentAttributeUpdate(constraintContent.children[0]).value = constraintValue.name;
										getActiveComponentAttributeUpdate(constraintContent.children[1]).value = constraintValue.documentation;
										
										subjectValueList = constraintValue.subject;
										verbValueList = constraintValue.verb;
										objectValueList = constraintValue.object;
										
										for(var m = 0; m < subjectValueList.length; m++) {
											subjectCount++;
											
											subjectValue = subjectValueList[m];
											
											addSubjectTagTemplateUpdate(constraintDiv);
											
											var subjectDivTemp = constraintDiv.children[m + 2];
											var subjectDiv = getActiveComponentChildDivUpdate(subjectDivTemp);
											var subjectContent = getActiveComponentContentUpdate(subjectDiv);
											
											getActiveComponentAttributeUpdate(subjectContent.children[0]).value = subjectValue.type;
											requestSubject(getActiveComponentAttributeUpdate(subjectContent.children[1]), subjectValue.value);
										}
										
										for(var m = 0; m < verbValueList.length; m++) {
											verbCount++;
											
											verbValue = verbValueList[m];
											
											addVerbTagTemplateUpdate(constraintDiv);
											
											var verbDivTemp = constraintDiv.children[m + 2 + subjectCount];
											var verbDiv = getActiveComponentChildDivUpdate(verbDivTemp);
											var verbContent = getActiveComponentContentUpdate(verbDiv);
											
											requestVerb(getActiveComponentAttributeUpdate(verbContent.children[0]), verbValue.value);
										}
										
										for(var m = 0; m < objectValueList.length; m++) {
											objectValue = objectValueList[m];
											
											addObjectTagTemplateUpdate(constraintDiv);
											
											var objectDivTemp = constraintDiv.children[m + 2 + subjectCount + verbCount];
											var objectDiv = getActiveComponentChildDivUpdate(objectDivTemp);
											var objectContent = getActiveComponentContentUpdate(objectDiv);
											
											getActiveComponentAttributeUpdate(objectContent.children[0]).value = objectValue.type;
											requestObject(getActiveComponentAttributeUpdate(objectContent.children[1]), objectValue.value);
										}
										
										subjectCount = 0;
										verbCount = 0;
									}
								}
							}
							
							caseCount = 0;
						}
					} else if(choicedActiveTreeLeafNode.type == "Flow") {
						var flowValue = choicedActiveTreeLeafNode.value;
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
						var sourceValueList = new Array;
						var sourceValue = new Object;
						var sinkValueList = new Array;
						var sinkValue = new Object;
						
						var messageCount = 0;
						var variableCount = 0;
						var sourceCount = 0;
						
						$('.activeComponentContentText').text('Update Flow Element');
						
						$("#activeComponentDiv").css({
							"display":"block"
						});
						
						$("#commonDiv").css({
							"position":"static"
						});
						
						var div = document.createElement('div');
						div.innerHTML = document.getElementById('flowTagTemplate').innerHTML;
						document.getElementById('activeComponentContentDiv').appendChild(div);
						
						getActiveComponentNameUpdate().value = flowValue.flow_id;
						
						var flowDiv = getActiveComponentRootDivUpdate();
						var flowContent = getActiveComponentContentUpdate(flowDiv);
						
						getActiveComponentAttributeUpdate(flowContent.children[0]).value = flowValue.name;
						getActiveComponentAttributeUpdate(flowContent.children[1]).value = flowValue.documentation;
						
						messageValueList = flowValue.message;
						variableValueList = flowValue.variable;
						sourceValueList = flowValue.source;
						sinkValueList = flowValue.sink;
						
						for(var i = 0; i < messageValueList.length; i++) {
							messageCount++;
							
							messageValue = messageValueList[i];
							
							addMessageTagTemplateUpdate(flowDiv);
							
							var messageDivTemp = flowDiv.children[i + 2];
							var messageDiv = getActiveComponentChildDivUpdate(messageDivTemp);
							var messageContent = getActiveComponentContentUpdate(messageDiv);
							
							getActiveComponentAttributeUpdate(messageContent.children[0]).value = messageValue.name;
							getActiveComponentAttributeUpdate(messageContent.children[1]).value = messageValue.documentation;
							
							partValueList = messageValue.part;
							
							for(var j = 0; j < partValueList.length; j++) {
								partValue = partValueList[j];
								
								addPartTagTemplateUpdate(messageDiv);
								
								var partDivTemp = messageDiv.children[j + 2];
								var partDiv = getActiveComponentChildDivUpdate(partDivTemp);
								var partContent = getActiveComponentContentUpdate(partDiv);
								
								getActiveComponentAttributeUpdate(partContent.children[0]).value = partValue.name;
								getActiveComponentAttributeUpdate(partContent.children[1]).value = partValue.element;
								getActiveComponentAttributeUpdate(partContent.children[2]).value = partValue.type;
								getActiveComponentAttributeUpdate(partContent.children[3]).value = partValue.documentation;
							}
						}
						
						for(var i = 0; i < variableValueList.length; i++) {
							variableCount++;
							
							variableValue = variableValueList[i];
							
							addVariableTagTemplateUpdate(flowDiv);
							
							var variableDivTemp = flowDiv.children[i + 2 + messageCount];
							var variableDiv = getActiveComponentChildDivUpdate(variableDivTemp);
							var variableContent = getActiveComponentContentUpdate(variableDiv);
							
							getActiveComponentAttributeUpdate(variableContent.children[0]).value = variableValue.name;
							getActiveComponentAttributeUpdate(variableContent.children[1]).value = variableValue.type;
							getActiveComponentAttributeUpdate(variableContent.children[2]).value = variableValue.documentation;
							
							initializeValueList = variableValue.initialize;
							
							for(var j = 0; j < initializeValueList.length; j++) {
								initializeValue = initializeValueList[j];
								
								addInitializeTagTemplateUpdate(variableDiv);
								
								var initializeDivTemp = variableDiv.children[j + 2];
								var initializeDiv = getActiveComponentChildDivUpdate(initializeDivTemp);
								var initializeContent = getActiveComponentContentUpdate(initializeDiv);
								
								getActiveComponentAttributeUpdate(initializeContent.children[0]).value = initializeValue.part;
								getActiveComponentAttributeUpdate(initializeContent.children[1]).value = initializeValue.documentation;
								
								fromValueList = initializeValue.from;
								
								for(var k = 0; k < fromValueList.length; k++) {
									fromValue = fromValueList[k];
									
									addFromTagTemplateUpdate(initializeDiv);
									
									var fromDivTemp = initializeDiv.children[k + 2];
									var fromDiv = getActiveComponentChildDivUpdate(fromDivTemp);
									var fromContent = getActiveComponentContentUpdate(fromDiv);
									
									getActiveComponentAttributeUpdate(fromContent.children[0]).value = fromValue.variable;
									getActiveComponentAttributeUpdate(fromContent.children[1]).value = fromValue.part;
									getActiveComponentAttributeUpdate(fromContent.children[2]).value = fromValue.expression;
									getActiveComponentAttributeUpdate(fromContent.children[3]).value = fromValue.documentation;
								}
							}
						}
						
						for(var i = 0; i < sourceValueList.length; i++) {
							sourceCount++;
							
							sourceValue = sourceValueList[i];
							
							addSourceTagTemplateUpdate(flowDiv);
							
							var sourceDivTemp = flowDiv.children[i + 2 + messageCount + variableCount];
							var sourceDiv = getActiveComponentChildDivUpdate(sourceDivTemp);
							var sourceContent = getActiveComponentContentUpdate(sourceDiv);
							
							getActiveComponentAttributeUpdate(sourceContent.children[0]).value = sourceValue.name;
							getActiveComponentAttributeUpdate(sourceContent.children[1]).value = sourceValue.documentation;
						}
						
						for(var i = 0; i < sinkValueList.length; i++) {
							sinkValue = sinkValueList[i];
							
							addSinkTagTemplateUpdate(flowDiv);
							
							var sinkDivTemp = flowDiv.children[i + 2 + messageCount + variableCount + sourceCount];
							var sinkDiv = getActiveComponentChildDivUpdate(sinkDivTemp);
							var sinkContent = getActiveComponentContentUpdate(sinkDiv);
							
							getActiveComponentAttributeUpdate(sinkContent.children[0]).value = sinkValue.name;
							getActiveComponentAttributeUpdate(sinkContent.children[1]).value = sinkValue.documentation;
						}
					} else if(choicedActiveTreeLeafNode.type == "Node") {
						var nodeValue = choicedActiveTreeLeafNode.value;
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
						
						$('.activeComponentContentText').text('Update Node Element');
						
						$("#activeComponentDiv").css({
							"display":"block"
						});
						
						$("#commonDiv").css({
							"position":"static"
						});
						
						var div = document.createElement('div');
						div.innerHTML = document.getElementById('nodeTagTemplate').innerHTML;
						document.getElementById('activeComponentContentDiv').appendChild(div);
						
						getActiveComponentNameUpdate().value = nodeValue.node_id;
						
						var nodeDiv = getActiveComponentRootDivUpdate();
						var nodeContent = getActiveComponentContentUpdate(nodeDiv);
						
						getActiveComponentAttributeUpdate(nodeContent.children[0]).value = nodeValue.name;
						getActiveComponentAttributeUpdate(nodeContent.children[1]).value = nodeValue.state;
						getActiveComponentAttributeUpdate(nodeContent.children[2]).value = nodeValue.documentation;
						
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
							var messageDiv = getActiveComponentChildDivUpdate(messageDivTemp);
							var messageContent = getActiveComponentContentUpdate(messageDiv);
							
							getActiveComponentAttributeUpdate(messageContent.children[0]).value = messageValue.name;
							getActiveComponentAttributeUpdate(messageContent.children[1]).value = messageValue.documentation;
							
							partValueList = messageValue.part;
							
							for(var j = 0; j < partValueList.length; j++) {
								partValue = partValueList[j];
								
								addPartTagTemplateUpdate(messageDiv);
								
								var partDivTemp = messageDiv.children[j + 2];
								var partDiv = getActiveComponentChildDivUpdate(partDivTemp);
								var partContent = getActiveComponentContentUpdate(partDiv);
								
								getActiveComponentAttributeUpdate(partContent.children[0]).value = partValue.name;
								getActiveComponentAttributeUpdate(partContent.children[1]).value = partValue.element;
								getActiveComponentAttributeUpdate(partContent.children[2]).value = partValue.type;
								getActiveComponentAttributeUpdate(partContent.children[3]).value = partValue.documentation;
							}
						}
						
						for(var i = 0; i < variableValueList.length; i++) {
							variableCount++;
							
							variableValue = variableValueList[i];
							
							addVariableTagTemplateUpdate(nodeDiv);
							
							var variableDivTemp = nodeDiv.children[i + 2 + messageCount];
							var variableDiv = getActiveComponentChildDivUpdate(variableDivTemp);
							var variableContent = getActiveComponentContentUpdate(variableDiv);
							
							getActiveComponentAttributeUpdate(variableContent.children[0]).value = variableValue.name;
							getActiveComponentAttributeUpdate(variableContent.children[1]).value = variableValue.type;
							getActiveComponentAttributeUpdate(variableContent.children[2]).value = variableValue.documentation;
							
							initializeValueList = variableValue.initialize;
							
							for(var j = 0; j < initializeValueList.length; j++) {
								initializeValue = initializeValueList[j];
								
								addInitializeTagTemplateUpdate(variableDiv);
								
								var initializeDivTemp = variableDiv.children[j + 2];
								var initializeDiv = getActiveComponentChildDivUpdate(initializeDivTemp);
								var initializeContent = getActiveComponentContentUpdate(initializeDiv);
								
								getActiveComponentAttributeUpdate(initializeContent.children[0]).value = initializeValue.part;
								getActiveComponentAttributeUpdate(initializeContent.children[1]).value = initializeValue.documentation;
								
								fromValueList = initializeValue.from;
								
								for(var k = 0; k < fromValueList.length; k++) {
									fromValue = fromValueList[k];
									
									addFromTagTemplateUpdate(initializeDiv);
									
									var fromDivTemp = initializeDiv.children[k + 2];
									var fromDiv = getActiveComponentChildDivUpdate(fromDivTemp);
									var fromContent = getActiveComponentContentUpdate(fromDiv);
									
									getActiveComponentAttributeUpdate(fromContent.children[0]).value = fromValue.variable;
									getActiveComponentAttributeUpdate(fromContent.children[1]).value = fromValue.part;
									getActiveComponentAttributeUpdate(fromContent.children[2]).value = fromValue.expression;
									getActiveComponentAttributeUpdate(fromContent.children[3]).value = fromValue.documentation;
								}
							}
						}
						
						for(var i = 0; i < waitValueList.length; i++) {
							waitCount++;
							
							waitValue = waitValueList[i];
							
							addWaitTagTemplateUpdate(nodeDiv);
							
							var waitDivTemp = nodeDiv.children[i + 2 + messageCount + variableCount];
							var waitDiv = getActiveComponentChildDivUpdate(waitDivTemp);
							var waitContent = getActiveComponentContentUpdate(waitDiv);
							
							getActiveComponentAttributeUpdate(waitContent.children[0]).value = waitValue.joinCondition;
							getActiveComponentAttributeUpdate(waitContent.children[1]).value = waitValue.documentation;
						}
						
						for(var i = 0; i < conditionValueList.length; i++) {
							conditionCount++;
							
							conditionValue = conditionValueList[i];
							
							addConditionTagTemplateUpdate(nodeDiv);
							
							var conditionDivTemp = nodeDiv.children[i + 2 + messageCount + variableCount + waitCount];
							var conditionDiv = getActiveComponentChildDivUpdate(conditionDivTemp);
							var conditionContent = getActiveComponentContentUpdate(conditionDiv);
							
							getActiveComponentAttributeUpdate(conditionContent.children[0]).value = conditionValue.expression;
							getActiveComponentAttributeUpdate(conditionContent.children[1]).value = conditionValue.documentation;
							
							caseValueList = conditionValue.case;
							contextValueList = conditionValue.context;
							
							for(var j = 0; j < caseValueList.length; j++) {
								caseCount++;
								
								caseValue = caseValueList[j];
								
								addCaseTagTemplateUpdate(conditionDiv);
								
								var caseDivTemp = conditionDiv.children[j + 2];
								var caseDiv = getActiveComponentChildDivUpdate(caseDivTemp);
								var caseContent = getActiveComponentContentUpdate(caseDiv);
								
								getActiveComponentAttributeUpdate(caseContent.children[0]).value = caseValue.name;
								getActiveComponentAttributeUpdate(caseContent.children[1]).value = caseValue.expression;
								getActiveComponentAttributeUpdate(caseContent.children[2]).value = caseValue.documentation;
								
								eventValueList = caseValue.event;
								
								for(var k  = 0; k < eventValueList.length; k++) {
									eventValue = eventValueList[k];
									
									addEventTagTemplateUpdate(caseDiv);
									
									var eventDivTemp = caseDiv.children[k + 2];
									var eventDiv = getActiveComponentChildDivUpdate(eventDivTemp);
									var eventContent = getActiveComponentContentUpdate(eventDiv);
									
									getActiveComponentAttributeUpdate(eventContent.children[0]).value = eventValue.name;
									getActiveComponentAttributeUpdate(eventContent.children[1]).value = eventValue.operation;
									getActiveComponentAttributeUpdate(eventContent.children[2]).value = eventValue.documentation;
								}
							}
							
							for(var j = 0; j < contextValueList.length; j++) {
								contextValue = contextValueList[j];
								
								addContextTagTemplateUpdate(conditionDiv);
								
								var contextDivTemp = conditionDiv.children[j + 2 + caseCount];
								var contextDiv = getActiveComponentChildDivUpdate(contextDivTemp);
								var contextContent = getActiveComponentContentUpdate(contextDiv);
								
								getActiveComponentAttributeUpdate(contextContent.children[0]).value = contextValue.name;
								getActiveComponentAttributeUpdate(contextContent.children[1]).value = contextValue.priority;
								getActiveComponentAttributeUpdate(contextContent.children[2]).value = contextValue.documentation;
								
								ruleValueList = contextValue.rule;
								
								for(var k  = 0; k < ruleValueList.length; k++) {
									ruleValue = ruleValueList[k];
									
									addRuleTagTemplateUpdate(contextDiv);
									
									var ruleDivTemp = contextDiv.children[k + 2];
									var ruleDiv = getActiveComponentChildDivUpdate(ruleDivTemp);
									var ruleContent = getActiveComponentContentUpdate(ruleDiv);
									
									getActiveComponentAttributeUpdate(ruleContent.children[0]).value = ruleValue.name;
									getActiveComponentAttributeUpdate(ruleContent.children[1]).value = ruleValue.expression;
									getActiveComponentAttributeUpdate(ruleContent.children[2]).value = ruleValue.documentation;
									
									constraintValueList = ruleValue.constraint;
									
									for(var l = 0; l < constraintValueList.length; l++) {
										constraintValue = constraintValueList[l];
										
										addConstraintTagTemplateUpdate(ruleDiv);
										
										var constraintDivTemp = ruleDiv.children[l + 2];
										var constraintDiv = getActiveComponentChildDivUpdate(constraintDivTemp);
										var constraintContent = getActiveComponentContentUpdate(constraintDiv);
										
										getActiveComponentAttributeUpdate(constraintContent.children[0]).value = constraintValue.name;
										getActiveComponentAttributeUpdate(constraintContent.children[1]).value = constraintValue.documentation;
										
										subjectValueList = constraintValue.subject;
										verbValueList = constraintValue.verb;
										objectValueList = constraintValue.object;
										
										for(var m = 0; m < subjectValueList.length; m++) {
											subjectCount++;
											
											subjectValue = subjectValueList[m];
											
											addSubjectTagTemplateUpdate(constraintDiv);
											
											var subjectDivTemp = constraintDiv.children[m + 2];
											var subjectDiv = getActiveComponentChildDivUpdate(subjectDivTemp);
											var subjectContent = getActiveComponentContentUpdate(subjectDiv);
											
											getActiveComponentAttributeUpdate(subjectContent.children[0]).value = subjectValue.type;
											requestSubject(getActiveComponentAttributeUpdate(subjectContent.children[1]), subjectValue.value);
										}
										
										for(var m = 0; m < verbValueList.length; m++) {
											verbCount++;
											
											verbValue = verbValueList[m];
											
											addVerbTagTemplateUpdate(constraintDiv);
											
											var verbDivTemp = constraintDiv.children[m + 2 + subjectCount];
											var verbDiv = getActiveComponentChildDivUpdate(verbDivTemp);
											var verbContent = getActiveComponentContentUpdate(verbDiv);
											
											requestVerb(getActiveComponentAttributeUpdate(verbContent.children[0]), verbValue.value);
										}
										
										for(var m = 0; m < objectValueList.length; m++) {
											objectValue = objectValueList[m];
											
											addObjectTagTemplateUpdate(constraintDiv);
											
											var objectDivTemp = constraintDiv.children[m + 2 + subjectCount + verbCount];
											var objectDiv = getActiveComponentChildDivUpdate(objectDivTemp);
											var objectContent = getActiveComponentContentUpdate(objectDiv);
											
											getActiveComponentAttributeUpdate(objectContent.children[0]).value = objectValue.type;
											requestObject(getActiveComponentAttributeUpdate(objectContent.children[1]), objectValue.value);
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
							var invokeDiv = getActiveComponentChildDivUpdate(invokeDivTemp);
							var invokeContent = getActiveComponentContentUpdate(invokeDiv);
							
							requestOperation(getActiveComponentAttributeUpdate(invokeContent.children[0]), invokeValue.operation);
							getActiveComponentAttributeUpdate(invokeContent.children[1]).value = invokeValue.documentation;
						}
					}
			}
		}
	}
}

function parseActiveComponentUpdate() {
	if(choicedActiveTreeLeafNode.type == "Message") {
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
		
		$('#activeTreeDiv').tree(
			'updateNode',
			selectedUpdateNode,
			{
				name: messageTemp.message_id,
				type: 'Message',
				kind: 'Active',
				value: messageTemp
			}
		);
	} else if(choicedActiveTreeLeafNode.type == "Variable") {
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
		
		$('#activeTreeDiv').tree(
			'updateNode',
			selectedUpdateNode,
			{
				name: variableTemp.variable_id,
				type: 'Variable',
				kind: 'Active',
				value: variableTemp
			}
		);
	} else if(choicedActiveTreeLeafNode.type == "Ontology") {
		var ontologyTemp = null;
		
		ontologyTemp = new Object();
		ontologyTemp.ontology_id = getActiveComponentName();
		
		var ontologyDiv = getActiveComponentRootDiv();
		var ontologyContent = getActiveComponentContent(ontologyDiv);
		ontologyTemp.location = getActiveComponentAttribute(ontologyContent.children[0]);
		ontologyTemp.namespace = getActiveComponentAttribute(ontologyContent.children[1]);
		ontologyTemp.documentation = getActiveComponentAttribute(ontologyContent.children[2]);
		
		$('#activeTreeDiv').tree(
			'updateNode',
			selectedUpdateNode,
			{
				name: ontologyTemp.ontology_id,
				type: 'Ontology',
				kind: 'Active',
				value: ontologyTemp
			}
		);
	} else if(choicedActiveTreeLeafNode.type == "Service Provider") {
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
		
		$('#activeTreeDiv').tree(
			'updateNode',
			selectedUpdateNode,
			{
				name: serviceProviderTemp.serviceprovider_id,
				type: 'Service Provider',
				kind: 'Active',
				value: serviceProviderTemp
			}
		);
	} else if(choicedActiveTreeLeafNode.type == "Activator") {
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
		
		workflowDiagramUpdate(activatorTemp.activator_id);
		
		$('#activeTreeDiv').tree(
			'updateNode',
			selectedUpdateNode,
			{
				name: activatorTemp.activator_id,
				type: 'Activator',
				kind: 'Active',
				value: activatorTemp
			}
		);
	} else if(choicedActiveTreeLeafNode.type == "Flow") {
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
		
		workflowDiagramUpdate(flowTemp.flow_id);
		
		$('#activeTreeDiv').tree(
			'updateNode',
			selectedUpdateNode,
			{
				name: flowTemp.flow_id,
				type: 'Flow',
				kind: 'Active',
				value: flowTemp
			}
		);
	} else if(choicedActiveTreeLeafNode.type == "Node") {
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
		
		workflowDiagramUpdate(nodeTemp.node_id);
		
		$('#activeTreeDiv').tree(
			'updateNode',
			selectedUpdateNode,
			{
				name: nodeTemp.node_id,
				type: 'Node',
				kind: 'Active',
				value: nodeTemp
			}
		);
	}
}

function workflowDiagramUpdate(componentName) {
	var workflowDiagramData = $('#diagramScreenWorkflowDiv').flowchart('getData');
	
	for(var key in workflowDiagramData.operators) {
		if(key == selectedUpdateNode.type + '_' + selectedUpdateNode.name) {
			var value = workflowDiagramData.operators[key];
			
			delete workflowDiagramData.operators[key];
			
			if(selectedUpdateNode.type == "Activator") {
				value.properties.title = '<div style="text-align:center;"><text style="font-size:16px;">Activator</text><br>[ ' + componentName + ' ]</div>';
				workflowDiagramData.operators['Activator_' + componentName] = value;
			} else if(selectedUpdateNode.type == "Flow") {
				value.properties.title = '<div style="text-align:center;"><text style="font-size:16px;">Flow</text><br>[ ' + componentName + ' ]</div>';
				workflowDiagramData.operators['Flow_' + componentName] = value;
			} else if(selectedUpdateNode.type == "Node") {
				value.properties.title = '<div style="text-align:center;"><text style="font-size:16px;">Node</text><br>[ ' + componentName + ' ]</div>';
				workflowDiagramData.operators['Node_' + componentName] = value;
			}
			
			for(var link in workflowDiagramData.links) {
				if(workflowDiagramData.links[link].fromOperator == key) {
					workflowDiagramData.links[link].fromOperator = selectedUpdateNode.type + '_' + componentName;
				}
				
				if(workflowDiagramData.links[link].toOperator == key) {
					workflowDiagramData.links[link].toOperator = selectedUpdateNode.type + '_' + componentName;
				}
			}
		}
	}
	
	$('#diagramScreenWorkflowDiv').flowchart('setData', workflowDiagramData);
}

function getActiveComponentNameUpdate() {
	var position = document.getElementById('activeComponentDescriptionInput');
	return position;
}

function getActiveComponentRootDivUpdate() {
	var position = document.getElementById('activeComponentContentDiv').children[0].children[0];
	return position;
}

function getActiveComponentContentUpdate(activeComponentDiv) {
	var position = activeComponentDiv.children[1].children[0];
	return position;
}

function getActiveComponentAttributeUpdate(activeComponentContent) {
	var position = activeComponentContent.children[1].children[0];
	return position;
}

function getActiveComponentChildDivUpdate(activeComponentDiv) {
	var position = activeComponentDiv.children[0];
	return position;
}

// Update Part Tag Template
function addPartTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('partTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Initialize Tag Template
function addInitializeTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('initializeTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update From Tag Template
function addFromTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('fromTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Service Tag Template
function addServiceTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('serviceTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Reuse Message Tag Template
function addMessageTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('reuseMessageTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Reuse Variable Tag Template
function addVariableTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('reuseVariableTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Condition Tag Template
function addConditionTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('conditionTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Case Tag Template
function addCaseTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('caseTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Event Tag Template
function addEventTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('eventTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Context Tag Template
function addContextTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('contextTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Rule Tag Template
function addRuleTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('ruleTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Constraint Tag Template
function addConstraintTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('constraintTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Subject Tag Template
function addSubjectTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('subjectTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Verb Tag Template
function addVerbTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('verbTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Object Tag Template
function addObjectTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('objectTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Source Tag Template
function addSourceTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('sourceTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Sink Tag Template
function addSinkTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('sinkTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Wait Tag Template
function addWaitTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('waitTagTemplate').innerHTML;
	obj.appendChild(div);
}

// Update Invoke Tag Template
function addInvokeTagTemplateUpdate(obj) {
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('invokeTagTemplate').innerHTML;
	obj.appendChild(div);
}
