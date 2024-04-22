class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;

    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet();
        }
        if (lowerCaseMessage.includes("green")) {
            this.actionProvider.green();
            return;
        }
        //if (this.actionProvider.chatContext.waitingForGreenResponse) {
            //console.log("green response check")
            if (lowerCaseMessage.includes("last week") || lowerCaseMessage.includes("yesterday") || lowerCaseMessage.includes("two days ago")) {
                this.actionProvider.handleChemicalTiming(lowerCaseMessage);
            } else if (lowerCaseMessage.includes("yes") || lowerCaseMessage.includes("no")) {
                this.actionProvider.handleMaintenanceResponse(lowerCaseMessage);
            } else if (lowerCaseMessage.includes("chlorine is") || lowerCaseMessage.includes("ph is")) {
                this.actionProvider.handleChemicalLevels(lowerCaseMessage);
            }
            this.actionProvider.clearContext();  // Ensure to clear context after handling
        //}

        // Add more conditions here
    }
}

export default MessageParser;
