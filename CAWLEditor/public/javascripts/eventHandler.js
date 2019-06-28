// CAWL Document Information
var cawlName = null;
var cawlNamespace = null;
var cawlVersion = null;
var cawlDocumentation = null;

// Shared Component Information
var sharedMessageComponent = null;
var sharedVariableComponent = null;
var sharedOntologyComponent = null;
var sharedServiceProviderComponent = null;
var sharedNodeComponent = null;

// Choiced Shared Tree Root Node
var choicedSharedTreeRootNode = null;

// Choiced Shared Tree Leaf Node
var choicedSharedTreeLeafNode = null;

// Choiced Active Tree Root Node
var choicedActiveTreeRootNode = null;

// Choiced Active Tree Leaf Node
var choicedActiveTreeLeafNode = null;

// Check Function Task
var checkActiveFunctionTask = null;

// Selected Update Node
var selectedUpdateNode = null;

// Shared Tree Information
var sharedTreeData = [
    {name: 'Message', type: 'Root', kind: 'Share' },
    {name: 'Variable', type: 'Root', kind: 'Share' },
    {name: 'Ontology', type: 'Root', kind: 'Share' },
    {name: 'Service Provider', type: 'Root', kind: 'Share' },
    {name: 'Node', type: 'Root', kind: 'Share' }
];

// Active Tree Information
var ActiveTreeData = [
    {name: 'Message', type: 'Root', kind: 'Active' },
    {name: 'Variable', type: 'Root', kind: 'Active' },
    {name: 'Ontology', type: 'Root', kind: 'Active' },
    {name: 'Service Provider', type: 'Root', kind: 'Active' },
    {name: 'Activator', type: 'Root', kind: 'Active' },
    {name: 'Flow', type: 'Root', kind: 'Active' },
    {name: 'Node', type: 'Root', kind: 'Active' }
];

// Choiced Configuration Tree Node
var choicedConfigurationTreeNode = null;

// Check Configuration Function Task
var checkConfigurationFunctionTask = null;

// Selected Configuration Tree Node
var selectedConfigurationTreeNode = null;

// Configuration Tree Information
var configurationTreeData = [
    {name: 'Message', type: 'Root' },
    {name: 'Variable', type: 'Root' },
    {name: 'Ontology', type: 'Root' },
    {name: 'Service Provider', type: 'Root' },
    {name: 'Node', type: 'Root' }
];

$(document).ready(function() {
    // Shared Component Initialize
    $('#initializeButton').trigger('click');
    
    // New CAWL Document
    $("#newCAWLButton").click(function() {
        $("#newCAWLDiv").css({
            "display":"block"
        });
        
        $("#commonDiv").css({
            "position":"static"
        });
    });
    
    // Save CAWL Document Save
    $("#cawlSaveButton").click(function() {
    	saveCAWLDocument();
    });
    
    // view CAWL Document Diagram
    $("#viewDiagramButton").click(function() {
    	$("#diagramScreenDiv").css({
            "display":"block"
        });
    	
    	$("#sourceScreenDiv").css({
            "display":"none"
        });
    	
    	$('#workflowEditScreenText').text("Workflow Edit Screen");
    });
    
    // view CAWL Document Source
    $("#viewSourceButton").click(function() {
    	$("#diagramScreenDiv").css({
            "display":"none"
        });
    	
    	$("#sourceScreenDiv").css({
            "display":"block"
        });
    	
    	$('#workflowEditScreenText').text("CAWL Source Code");
    	
    	generateCAWLDocument();
    });
    
    // CAWL Document Validation
    $("#validationCheckButton").click(function() {
    	checkCAWLDocumentValidation();
    });
    
    // New CAWL Document - cancel event
    $("#newCAWLCancelButton").click(function() {
        $("#newCAWLDiv").css({
            "display":"none"
        });
        
        $("#commonDiv").css({
            "position":"relative"
        });
        
        $("#documentNameInput").val("");
        $("#documentNamespaceInput").val("");
        $("#documentVersionInput").val("");
        $("#documentDocumentationTextarea").val("");
    });
    
    // Create Active Component - apply event
    $("#activeComponentApplyButton").click(function() {
        $("#activeComponentDiv").css({
            "display":"none"
        });
        
        $("#commonDiv").css({
            "position":"relative"
        });
        
        if(checkActiveFunctionTask == "update") {
        	checkActiveFunctionTask = null;
            $('#detailsDiv').empty();
            
            parseActiveComponentUpdate();
        } else {
            parseActiveComponent();
        }
        
        $('#activeComponentDescriptionInput').val("");
        $('#activeComponentContentDiv').empty();
        
        $('#activeTreeDiv').tree('selectNode', null);
        choicedActiveTreeRootNode = null;
        choicedActiveTreeLeafNode = null;
    });
    
    // Create Active Component - cancel event
    $("#activeComponentCancelButton").click(function() {
        $("#activeComponentDiv").css({
            "display":"none"
        });
        
        $("#commonDiv").css({
            "position":"relative"
        });
        
        if(checkActiveFunctionTask == "update") {
        	checkActiveFunctionTask = null;
            $('#detailsDiv').empty();
        }
        
        $('#activeComponentDescriptionInput').val("");
        $('#activeComponentContentDiv').empty();
        
        $('#activeTreeDiv').tree('selectNode', null);
        choicedActiveTreeRootNode = null;
        choicedActiveTreeLeafNode = null;
    });
    
    // Workflow Edit Screen - simple tab creation
    $("#simpletab1").dynatabs({
        tabBodyID : "simpletabbody1"
    });
    
    // Workflow Edit Screen - closable tabs
    $("#closabletab1").dynatabs({
        tabBodyID : "closabletabbody1",
        showCloseBtn: true
    });

    // Workflow Edit Screen - tabs with custom close confirmation message call backs
    $("#closeconfirmtabs").dynatabs({
        tabBodyID : "closeconfirmtabsbody",
        showCloseBtn: true,
        confirmDelete: true,
        confirmMessage: 'Do you want to delete this tab?'
    });
    
    // Workflow Edit Screen - add ajax tabs
    $("#addajaxtab").dynatabs({
        tabBodyID : "addajaxtabbody",
        showCloseBtn : true,
        confirmDelete : true
    });
    
    // Workflow Edit Screen - add static tabs
    $("#addstatictab").dynatabs({
        tabBodyID : 'addstatictabbody',
        showCloseBtn : true,
        confirmDelete : true
    });
    
    // Workflow Edit Screen - add hidden tabs example
    $("#adddivtab").dynatabs({
        tabBodyID : 'adddivtabbody',
        showCloseBtn : true,
        confirmDelete : true
    });
    
    // Workflow Edit Screen - nested tab 1
    $("#nestedtab1").dynatabs({
        tabBodyID : 'nestedtabbody1',
        showCloseBtn : true,
        confirmDelete : true
    });
    
    // Workflow Edit Screen - nested tab 2
    $("#nestedtab2").dynatabs({
        tabBodyID : 'nestedtabbody2',
        showCloseBtn : true,
        confirmDelete : true
    });
    
    // Set Component Configuration
    $("#componentConfigurationButton").click(function() {
    	$("#configurationDiv").css({
    		"display":"block"
    	});
    	
    	$("#commonDiv").css({
    		"position":"static"
    	});
    	
    	setConfigurationTree();
    	setConfigurationTreeEvent();
    });
    
    // Component Configuration - cancel event
    $("#configurationCancelButton").click(function() {
    	$("#configurationDiv").css({
    		"display":"none"
    	});
    	
    	$("#commonDiv").css({
    		"position":"relative"
    	});
    	
    	$('#configurationSharedTreeDiv').tree('destroy');
    	$('#configurationOperationDiv').empty();
    	$('#configurationValidationTextarea').val("");
    	
    	getSharedComponent();
    });
});

// Workflow Edit Screen - addNewTab
function addNewTab() {
    $.addDynaTab({
        tabID : 'addajaxtab',
        type : 'ajax',
        url : 'ajaxcontent.html',
        method : 'get',
        dtype : 'html',
        params : {},
        tabTitle : 'New Ajax Tab'
    });
}

// Workflow Edit Screen - addNewStaticTab
function addNewStaticTab() {
    $.addDynaTab({
        tabID : 'addstatictab',
        type : 'html',
        html : '<p>This HTML content is loaded statically</p>',
        params : {},
        tabTitle : 'New Static Tab'
    });
}

// Workflow Edit Screen - addNewDivTab (New CAWL Document - ok event)
function addNewDivTab() {
	$("#newCAWLDiv").css({
        "display":"none"
    });
    
    $("#commonDiv").css({
        "position":"relative"
    });
    
    cawlName = $("#documentNameInput").val();
    cawlNamespace = $("#documentNamespaceInput").val();
    cawlVersion = $("#documentVersionInput").val();
    cawlDocumentation = $("#documentDocumentationTextarea").val();
    
    $("#documentNameInput").val("");
    $("#documentNamespaceInput").val("");
    $("#documentVersionInput").val("");
    $("#documentDocumentationTextarea").val("");
    
    $.addDynaTab({
        tabID : 'adddivtab',
        type : 'div',
        divID : 'hdnDataTabDiv',
        params : {},
        tabTitle : cawlName
    });
    
    // TabBar View Setting
    var ulTag = document.getElementById('adddivtab');
    var liTags = ulTag.childNodes;
    var aTag;
    var tempTagName;
    
    for(var i = 1; i < liTags.length; i++) {
        aTag = liTags[i];
        if(cawlName == aTag.textContent) {
            liTags[i].className = 'selected';
            
            tempTagName = liTags[i].firstChild.getAttribute('href');
            tempTagName = tempTagName.substring(1);
            document.getElementById(tempTagName).style.display = 'block';
        } else {
            liTags[i].className = '';
            
            tempTagName = liTags[i].firstChild.getAttribute('href');
            tempTagName = tempTagName.substring(1);
            document.getElementById(tempTagName).style.display = 'none';
        }
    }
    
    // Initialize Tree
    updateSharedTree();
    updateActiveTree();
    
    // Apply Tree Information View Event
    applyTreeEvent('#sharedTreeDiv');
    applyTreeEvent('#activeTreeDiv');
    
    // Initialize Workflow Diagram
    updateWorkflowDiagram();
}

// Initialize Shared Tree
function updateSharedTree() {
    $('#sharedTreeDiv').tree({
        data: sharedTreeData,
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
    var message_node = $('#sharedTreeDiv').tree('getNodeByName','Message');
    
    // Apply Message Node
    for(var i = 0; i < sharedMessageComponent.length; i++) {
        $('#sharedTreeDiv').tree(
            'appendNode',
            {
                name: sharedMessageComponent[i].message_id,
                type: 'Message',
                kind: 'Share',
                value: sharedMessageComponent[i]
            }, message_node
        );
    }
    
    // Setting Parent Node Variable
    var variable_node = $('#sharedTreeDiv').tree('getNodeByName','Variable');
    
    // Apply Variable Node
    for(var i = 0; i < sharedVariableComponent.length; i++) {
        $('#sharedTreeDiv').tree(
            'appendNode',
            {
                name: sharedVariableComponent[i].variable_id,
                type: 'Variable',
                kind: 'Share',
                value: sharedVariableComponent[i]
            }, variable_node
        );
    }
    
    // Setting Parent Node Ontology
    var ontology_node = $('#sharedTreeDiv').tree('getNodeByName','Ontology');
    
    // Apply Ontology Node
    for(var i = 0; i < sharedOntologyComponent.length; i++) {
        $('#sharedTreeDiv').tree(
            'appendNode',
            {
                name: sharedOntologyComponent[i].ontology_id,
                type: 'Ontology',
                kind: 'Share',
                value: sharedOntologyComponent[i]
            }, ontology_node
        );
    }
    
    // Setting Parent Node Service Provider
    var service_provider_node = $('#sharedTreeDiv').tree('getNodeByName','Service Provider');
    
    // Apply Service Provider Node
    for(var i = 0; i < sharedServiceProviderComponent.length; i++) {
        $('#sharedTreeDiv').tree(
            'appendNode',
            {
                name: sharedServiceProviderComponent[i].serviceprovider_id,
                type: 'Service Provider',
                kind: 'Share',
                value: sharedServiceProviderComponent[i]
            }, service_provider_node
        );
    }
    
    // Setting Parent Node Node
    var node_node = $('#sharedTreeDiv').tree('getNodeByName','Node');
    
    // Apply Node Node
    for(var i = 0; i < sharedNodeComponent.length; i++) {
        $('#sharedTreeDiv').tree(
            'appendNode',
            {
                name: sharedNodeComponent[i].node_id,
                type: 'Node',
                kind: 'Share',
                value: sharedNodeComponent[i]
            }, node_node
        );
    }
}

// Initialize Active Tree
function updateActiveTree() {
    $('#activeTreeDiv').tree({
        data: ActiveTreeData,
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
}

// Apply Tree Information View Event
function applyTreeEvent(choiceTreeDiv) {
    $(choiceTreeDiv).on(
        'tree.click',
        function(event) {
            var node = event.node;
            
            // Check Shared Tree Leaf Node Choice
            if(node.kind == 'Share') {
                if(node.type == 'Root') {
                    choicedSharedTreeRootNode = node;
                }
            }
            
            // Check Shared Tree Leaf Node Choice
            if(node.kind == 'Share') {
                if(node.type != 'Root') {
                    choicedSharedTreeLeafNode = node;
                }
            }
            
            // Check Active Tree Root Node Choice
            if(node.kind == 'Active') {
                if(node.type == 'Root') {
                    choicedActiveTreeRootNode = node;
                }
            }
            
            // Check Active Tree Leaf Node Choice
            if(node.kind == 'Active') {
                if(node.type != 'Root') {
                    choicedActiveTreeLeafNode = node;
                }
            }
            
            // Unselect Workflow Link
            $('#diagramScreenWorkflowDiv').flowchart('unselectLink');
            
            
            // Reset View Detail
            $('#detailsDiv').empty();
            
            // Component Detail View
            if(node.type != 'Root') {
            	var jsonObj = new Object();
        		jsonObj = node.value;
        		
        		if(jsonObj.message_id) {
        			viewMessage(node.value);
        		}
        		
        		if(jsonObj.variable_id) {
        			viewVariable(node.value);
        		}
        		
        		if(jsonObj.ontology_id) {
        			viewOntology(node.value);
        		}
        		
        		if(jsonObj.serviceprovider_id) {
        			viewServiceProvider(node.value);
        		}
        		
        		if(jsonObj.activator_id) {
        			viewActivator(node.value);
        		}
        		
        		if(jsonObj.flow_id) {
        			viewFlow(node.value);
        		}
        		
        		if(jsonObj.node_id) {
        			viewNode(node.value);
        		}
	        }
            
            if(choiceTreeDiv == '#activeTreeDiv') {
                $('#sharedTreeDiv').tree('selectNode', null);
                choicedSharedTreeRootNode = null;
                choicedSharedTreeLeafNode = null;
            } else {
                $('#activeTreeDiv').tree('selectNode', null);
                choicedActiveTreeRootNode = null;
                choicedActiveTreeLeafNode = null;
            }
        }
    );
}

function updateWorkflowDiagram() {
    $('#diagramScreenWorkflowDiv').flowchart({
        defaultLinkColor: '#52616a',
        defaultSelectedLinkColor: '#AF4034',
        multipleLinksOnInput: true,
        multipleLinksOnOutput: true,
        distanceFromArrow: 5,
        linkWidth: 9,
        grid: 20,
        
        onLinkSelect: function (linkId) {
            $('#sharedTreeDiv').tree('selectNode', null);
            choicedSharedTreeRootNode = null;
            choicedSharedTreeLeafNode = null;
            
            $('#activeTreeDiv').tree('selectNode', null);
            choicedActiveTreeRootNode = null;
            choicedActiveTreeLeafNode = null;
            
            $('#detailsDiv').empty();
            
            return true;
        }
    });
}

// Display CAWL Document Source
function displayCAWLDocumentSource(cawlDocument) {
    $('#sourceScreenTextarea').val(cawlDocument);
}

// Display CAWL Document Validation Result
function displayCAWLDocumentValidation(validationResult) {
	$('#validationScreenTextarea').val(validationResult);
}
