// Delete Active Component Leaf Node
function clickActiveTreeDelete() {
	var selectedNode = $('#activeTreeDiv').tree('getSelectedNode');
	if(selectedNode != false) {
		if(selectedNode.type != 'Root') {
			
			if(choicedActiveTreeLeafNode != null) {
				$('#activeTreeDiv').tree('removeNode', choicedActiveTreeLeafNode);
				
				if(choicedActiveTreeLeafNode.type == "Activator") {
					deleteWorkflowDiagram(choicedActiveTreeLeafNode);
				} else if(choicedActiveTreeLeafNode.type == "Flow") {
					deleteWorkflowDiagram(choicedActiveTreeLeafNode);
				} else if(choicedActiveTreeLeafNode.type == "Node") {
					deleteWorkflowDiagram(choicedActiveTreeLeafNode);
				}
				
				$('#activeTreeDiv').tree('selectNode', null);
				choicedActiveTreeLeafNode = null;
				
				$('#detailsDiv').empty();
			}
		}
	}
	
	var selectedLinkId = $('#diagramScreenWorkflowDiv').flowchart('getSelectedLinkId');
	if(selectedLinkId != null) {
		deleteWorkflowLink(selectedLinkId);
	}
}

function deleteWorkflowDiagram(choicedActiveTreeLeafNode) {
	$('#diagramScreenWorkflowDiv').flowchart('deleteOperator', choicedActiveTreeLeafNode.type + '_' + choicedActiveTreeLeafNode.name);
}

function deleteWorkflowLink(selectedLinkId) {
	$('#diagramScreenWorkflowDiv').flowchart('deleteLink', selectedLinkId);
}
