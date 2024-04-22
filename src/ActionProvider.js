class ActionProvider {

    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.chatContext = {};
    }
    handleChemicalTiming() {
        const response = this.createChatBotMessage(`Thanks for updating about the chemical timing. Based off this answer...`);
        this.updateChatbotState(response);
        this.clearContext();  // Clear context after responding
    }

    handleMaintenanceResponse(message) {
        const response = this.createChatBotMessage(`Maintenance response received: ${message}`);


        this.updateChatbotState(response);
        this.clearContext();  // Clear context after responding
    }

    handleChemicalLevels(message) {
        const response = this.createChatBotMessage(`Chemical leveles noted: ${message}`);
        this.updateChatbotState(response);
        this.clearContext();  // Clear context after responding
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend!");
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, greetingMessage],
        }));
    }
    green(){
        const greenMessage = this.createChatBotMessage("Please answer some questions that can help us diagnose the issue for a green pool:\n" +
            "\n" +
            "When were the chemicals last added to the pool? Knowing when and what chemicals were last added can help determine " +
            "if the current state is due to chemical depletion or imbalance.\n" +
            "Do you perform weekly maintenance?\n"+
            "Can you check the current levels of chlorine and pH in the pool?\n" );

        this.updateChatbotState(greenMessage);
        this.chatContext.waitingForGreenResponse = true;
        console.log(this.chatContext.waitingForGreenResponse);
    }
    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));
    }

    clearContext() {
        this.chatContext = {};  // Reset conversation context
    }
    // Define more actions here
}

export default ActionProvider;
