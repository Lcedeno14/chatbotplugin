import {createChatBotMessage, createCustomMessage} from "react-chatbot-kit";

const name = 'AquaAssist';
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
    customComponents: {
        // Replaces the default header
        header: () => <div style={{ backgroundColor: '#376B7E', padding: "5px", borderRadius: "3px" }}>This is the header</div>
        // // Replaces the default bot avatar
        // botAvatar: (props) => <MyAvatar {...props} />,
        // // Replaces the default bot chat message container
        // botChatMessage: (props) => <MyCustomChatMessage {...props} />,
        // // Replaces the default user icon
        // userAvatar: (props) => <MyCustomAvatar {...props} />,
        // // Replaces the default user chat message
        // userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
    },
        // more styles go here

};

export default config;
