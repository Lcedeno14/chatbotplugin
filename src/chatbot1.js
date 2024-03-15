import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from '../../chatbotplugin/src/chatbotConfig';
import MessageParser from '../../chatbotplugin/src/MessageParser';
import ActionProvider from '../../chatbotplugin/src/ActionProvider';

const ChatbotComponent = () => {
    return (
        <div className="chatbot-container">
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
};

export default ChatbotComponent;
