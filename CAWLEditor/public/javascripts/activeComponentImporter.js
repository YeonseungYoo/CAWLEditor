// Import Active Component Leaf Node from Shared Component Leaf Node
function clickActiveTreeImport() {
	var selectedNode = $('#sharedTreeDiv').tree('getSelectedNode');
	if(selectedNode != false) {
		if(selectedNode.type != 'Root') {
		
			if(choicedSharedTreeLeafNode != null) {
				// Message Import
				if(choicedSharedTreeLeafNode.type == 'Message') {
					// Setting Parent Node
					var parentNode = $('#activeTreeDiv').tree('getNodeByName','Message');
					
					// Apply Child Node
					$('#activeTreeDiv').tree(
						'appendNode',
						{
							name: choicedSharedTreeLeafNode.name,
							type: 'Message',
							kind: 'Active',
							value: choicedSharedTreeLeafNode.value
						}, parentNode
					);
				}
				
				// Variable Import
				if(choicedSharedTreeLeafNode.type == 'Variable') {
					// Setting Parent Node
					var parentNode = $('#activeTreeDiv').tree('getNodeByName','Variable');
					
					// Apply Child Node
					$('#activeTreeDiv').tree(
						'appendNode',
						{
							name: choicedSharedTreeLeafNode.name,
							type: 'Variable',
							kind: 'Active',
							value: choicedSharedTreeLeafNode.value
						}, parentNode
					);
				}
				
				// Ontology Import
				if(choicedSharedTreeLeafNode.type == 'Ontology') {
					// Setting Parent Node
					var parentNode = $('#activeTreeDiv').tree('getNodeByName','Ontology');
					
					// Apply Child Node
					$('#activeTreeDiv').tree(
						'appendNode',
						{
							name: choicedSharedTreeLeafNode.name,
							type: 'Ontology',
							kind: 'Active',
							value: choicedSharedTreeLeafNode.value
						}, parentNode
					);
				}
				
				// Service Provider Import
				if(choicedSharedTreeLeafNode.type == 'Service Provider') {
					// Setting Parent Node
					var parentNode = $('#activeTreeDiv').tree('getNodeByName','Service Provider');
					
					// Apply Child Node
					$('#activeTreeDiv').tree(
						'appendNode',
						{
							name: choicedSharedTreeLeafNode.name,
							type: 'Service Provider',
							kind: 'Active',
							value: choicedSharedTreeLeafNode.value
						}, parentNode
					);
				}
				
				// Node Import
				if(choicedSharedTreeLeafNode.type == 'Node') {
					// Setting Parent Node
					var parentNode = $('#activeTreeDiv').tree('getNodeByName','Node');
					
					// Apply Child Node
					$('#activeTreeDiv').tree(
						'appendNode',
						{
							name: choicedSharedTreeLeafNode.name,
							type: 'Node',
							kind: 'Active',
							value: choicedSharedTreeLeafNode.value
						}, parentNode
					);
					
					createWorkflowDiagram("Node", choicedSharedTreeLeafNode.name);
				}				
				
				$('#sharedTreeDiv').tree('selectNode', null);
				choicedSharedTreeLeafNode = null;
				
				$('#detailsDiv').empty();
			}
			
		}
	}
}
