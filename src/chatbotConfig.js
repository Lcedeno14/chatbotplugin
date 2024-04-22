import {createChatBotMessage, createCustomMessage} from "react-chatbot-kit";
import MyAvatar from './assets/MyAvatar';

const name = 'AquaAssist';



const config = {

    initialMessages: [createChatBotMessage(
        'If you have any questions or need help with your pool maintenance, ' +
        'just drop us a message. Whether it\'s cleaning tips, equipment troubleshooting, or chemical balance queries, we\'re here to help you keep your pool sparkling and safe!\n'
        )],
    botName:name,
    customStyles : {

        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#376B7E',
        },
        userMessageBox: {
            backgroundColor: '#376B7E',
        },
    },
    customComponents: {
        // Replaces the default header
        header: () => <div style={{ color: "white", backgroundColor: '#376B7E', padding: "5px", borderRadius: "3px",
            }}>AquaAssist</div>,
        // // Replaces the default bot avatar
        botAvatar: (props) => <MyAvatar {...props} />
        // // Replaces the default bot chat message container
        // botChatMessage: (props) => <MyCustomChatMessage {...props} />,
        // // Replaces the default user icon
        // userAvatar: (props) => <MyCustomAvatar {...props} />,
        // // Replaces the default user chat message
        // userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
    },
    /*widgets: [
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />,
        },
        // ...
    ],*/

};

export default config;
