class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend!");
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, greetingMessage],
        }));
    }

    // Define more actions here
}

export default ActionProvider;
