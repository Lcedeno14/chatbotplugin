import {createChatBotMessage, createCustomMessage} from "react-chatbot-kit";

const name = 'Pool Pal Pro';
const config = {

    initialMessages: [createChatBotMessage(
        'Feel free to ask your questions, and one of our pool experts will assist you shortly.\n'
        )],
    botName:name,
    customStyles : {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#376B7E',
        },
    },
        // more styles go here

};
createCustomMessage('Hello, how can I help you', 'sup');
export default config;
