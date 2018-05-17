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
        // initialize the text inside our box
        component.set('v.editingText', record[component.get('v.sourceField')]);
        // initialize the converted markdown text. 
        component.set('v.mdText', helper.convertMarkdown(component.get('v.editingText')));
    },
    textUpdated : function(component, event, helper) {
        component.set('v.mdText', helper.convertMarkdown(component.get('v.editingText')));
    }
})