// Set Configuration Tree
function setConfigurationTree() {
	$('#configurationSharedTreeDiv').tree({
        data: configurationTreeData,
        closedIcon: $('<i class="fas fa-folder"></i>'),
        openedIcon: $('<i class="fas fa-folder-open"></i>'),
        onCreateLi: function(node, $li) {
            if(node.children.length == 0 && node.type == 'Root' ) {
                $li.find('.jqtree-title')
                .css('margin-left', '.5em')
                .before($('<i class="fas fa-folder"></i>'));
            }
            if(node.type != 'Root' ) {
                $li.find('.jqtree-title')
                .css('margin-left', '.5em')
                .before($('<i class="far fa-file-alt"></i>'));
            }
        }
    });
	
	// Setting Parent Node Message
    var message_node = $('#configurationSharedTreeDiv').tree('getNodeByName','Message');
    
    // Apply Message Node
    for(var i = 0; i < sharedMessageComponent.length; i++) {
        $('#configurationSharedTreeDiv').tree(
            'appendNode',
            {
                name: sharedMessageComponent[i].message_id,
                type: 'Message',
                kind: 'Share'
            }, message_node
        );
    }
    
    // Setting Parent Node Variable
    var variable_node = $('#configurationSharedTreeDiv').tree('getNodeByName','Variable');
    
    // Apply Variable Node
    for(var i = 0; i < sharedVariableComponent.length; i++) {
        $('#configurationSharedTreeDiv').tree(
            'appendNode',
            {
                name: sharedVariableComponent[i].variable_id,
                type: 'Variable',
                kind: 'Share'
            }, variable_node
        );
    }
    
    // Setting Parent Node Ontology
    var ontology_node = $('#configurationSharedTreeDiv').tree('getNodeByName','Ontology');
    
    // Apply Ontology Node
    for(var i = 0; i < sharedOntologyComponent.length; i++) {
        $('#configurationSharedTreeDiv').tree(
            'appendNode',
            {
                name: sharedOntologyComponent[i].ontology_id,
                type: 'Ontology',
                kind: 'Share'
            }, ontology_node
        );
    }
    
    // Setting Parent Node Service Provider
    var service_provider_node = $('#configurationSharedTreeDiv').tree('getNodeByName','Service Provider');
    
    // Apply Service Provider Node
    for(var i = 0; i < sharedServiceProviderComponent.length; i++) {
        $('#configurationSharedTreeDiv').tree(
            'appendNode',
            {
                name: sharedServiceProviderComponent[i].serviceprovider_id,
                type: 'Service Provider',
                kind: 'Share'
            }, service_provider_node
        );
    }
    
    // Setting Parent Node Node
    var node_node = $('#configurationSharedTreeDiv').tree('getNodeByName','Node');
    
    // Apply Node Node
    for(var i = 0; i < sharedNodeComponent.length; i++) {
        $('#configurationSharedTreeDiv').tree(
            'appendNode',
            {
                name: sharedNodeComponent[i].node_id,
                type: 'Node',
                kind: 'Share'
            }, node_node
        );
    }
}

// Set Configuration Tree Event
function setConfigurationTreeEvent() {
	$('#configurationSharedTreeDiv').on(
		'tree.click',
		function(event) {
			var node = event.node;
			
			if(choicedConfigurationTreeNode != null) {
				if(choicedConfigurationTreeNode.name != node.name) {
					$('#configurationOperationDiv').empty();
			    	
			    	$('#configurationValidationTextarea').val("");
				}
			}
			
			choicedConfigurationTreeNode = node;
			
			// Reset View
            $('#configurationOperationDiv').empty();
			
			// Configuration Component Detail View
            if(node.type != 'Root') {
            	if(node.value) {
            		var jsonObj = new Object();
            		jsonObj = node.value;
            		
            		if(jsonObj.message_id) {
            			viewConfigurationMessage(node.value);
            		}
            		
            		if(jsonObj.variable_id) {
            			viewConfigurationVariable(node.value);
            		}
            		
            		if(jsonObj.ontology_id) {
            			viewConfigurationOntology(node.value);
            		}
            		
            		if(jsonObj.serviceprovider_id) {
            			viewConfigurationServiceProvider(node.value);
            		}
            		
            		if(jsonObj.node_id) {
            			viewConfigurationNode(node.value);
            		}
            	} else {
            		for(var i = 0; i < sharedMessageComponent.length; i++) {
            			if(node.name == sharedMessageComponent[i].message_id) {
            				viewConfigurationMessage(sharedMessageComponent[i]);
            			}
            		}
            		
            		for(var i = 0; i < sharedVariableComponent.length; i++) {
            			if(node.name == sharedVariableComponent[i].variable_id) {
            				viewConfigurationVariable(sharedVariableComponent[i]);
            			}
            		}
            		
            		for(var i = 0; i < sharedOntologyComponent.length; i++) {
            			if(node.name == sharedOntologyComponent[i].ontology_id) {
            				viewConfigurationOntology(sharedOntologyComponent[i]);
            			}
            		}
            		
            		for(var i = 0; i < sharedServiceProviderComponent.length; i++) {
	                    if(node.name == sharedServiceProviderComponent[i].serviceprovider_id) {
	                    	viewConfigurationServiceProvider(sharedServiceProviderComponent[i]);
	                    }
	                }
	            	
	            	for(var i = 0; i < sharedNodeComponent.length; i++) {
	                    if(node.name == sharedNodeComponent[i].node_id) {
	                    	viewConfigurationNode(sharedNodeComponent[i]);
	                    }
	                }
	            }
	        }
		}
	);
}

function clickConfigurationApply() {
	if(checkConfigurationFunctionTask == "update") {
		updateConfigurationComponent();
	} else {
		createConfigurationComponent();
	}
}

function displayCreateConfigurationComponentResult(componetID, validationResult, validationValue, type, value) {
	if(validationResult == "true") {
		if(type == "ServiceProvider") {
			type = "Service Provider";
		}
		
		var parentNode = $('#configurationSharedTreeDiv').tree('getNodeByName',type);
		$('#configurationSharedTreeDiv').tree(
			'appendNode',
			{
				name: componetID,
				type: type,
				value: value
			}, parentNode
		);
		
		$('#configurationSharedTreeDiv').tree('selectNode', null);
		$('#configurationOperationDiv').empty();
	}
	
	$('#configurationValidationTextarea').val(validationValue);
}

function displayUpdateConfigurationComponentResult(componetID, validationResult, validationValue, type, value) {
	if(validationResult == "true") {
		if(type == "ServiceProvider") {
			type = "Service Provider";
		}
		
		$('#configurationSharedTreeDiv').tree(
			'updateNode',
			selectedConfigurationTreeNode,
			{
				name: componetID,
				type: type,
				value: value
			}
		);
		
		$('#configurationSharedTreeDiv').tree('selectNode', null);
		$('#configurationOperationDiv').empty();
	}
	
	$('#configurationValidationTextarea').val(validationValue);
}
