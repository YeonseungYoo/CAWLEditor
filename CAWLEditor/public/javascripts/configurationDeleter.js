function clickConfigurationDelete() {
	var selectedNode = $('#configurationSharedTreeDiv').tree('getSelectedNode');
	
	if(selectedNode != false) {
		if(selectedNode.type != 'Root') {
			deleteConfigurationComponentDB(selectedNode.type, selectedNode.name);
			
			$('#configurationSharedTreeDiv').tree('removeNode', choicedConfigurationTreeNode);
			
			$('#configurationOperationDiv').empty();
			
			$('#configurationValidationTextarea').val("The " + selectedNode.name + " Element is Deleted.");
		}
	}
}
