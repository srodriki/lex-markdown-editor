({
	convertMarkdown : function(rawText) {
		return marked(rawText);
	}, 
    saveRecord : function(component) {
        // this uses the force:recordData's saveRecord method to store our record. 
        component.find("forceRecordEditor").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                console.log("Save completed successfully.");
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + 
                           JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));
    },
    startAutoSave : function(component) {
        // save a reference to use inside our callback.
        var helper = this;
        // we use the setInterval method to check if a database update is needed. 
        // Interval is 5 seconds, but can be smaller
        var interval = window.setInterval(
            $A.getCallback(function() {
                var userInputText = component.get('v.editingText');
                var storedRecord = component.get('v.simpleRecord');
                // Did the user change the text's contents?
                if (userInputText != storedRecord[component.get('v.sourceField')]) {
                    // yeah, text was changed. need to store in record and save to DB.
                    console.log('changes detected');
                    storedRecord[component.get('v.sourceField')] = userInputText;
                    helper.saveRecord(component);
                }
        
               
            }), 5000
        );   
    }
})