({
	onRecordUpdated : function(component, event, helper) {
		// do nothing here!
    }, 
    doInit : function(component, event, helper) {
        component.set('v.sourceFieldsList', [component.get('v.sourceField')]);
        
        helper.startAutoSave(component);
    },
    initMarkdown : function(component, event, helper) {
        
        var record = component.get('v.simpleRecord');
        var sourceField = component.get('v.sourceField');
        var currentText = record[sourceField] != null ? record[sourceField] : '';
        // initialize the text inside our box
        component.set('v.editingText', currentText);
        // initialize the converted markdown text. 
        component.set('v.mdText', helper.convertMarkdown(currentText));
    },
    textUpdated : function(component, event, helper) {
        component.set('v.mdText', helper.convertMarkdown(component.get('v.editingText')));
    }
})