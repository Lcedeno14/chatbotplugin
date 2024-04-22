import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ChatbotComponent from './chatbot1';
import config from './chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

// Test for App component rendering properly


// Test for ChatbotComponent rendering
test('renders chatbot component', () => {
  render(<ChatbotComponent />);
  const chatbotElement = screen.getByClass('chatbot-container');
  expect(chatbotElement).toBeInTheDocument();
});

// Test for initial message in Chatbot
test('initial message is correct in the chatbot', () => {
  expect(config.initialMessages[0].text).toBe("Hello, how can I help you?");
});

// Test for MessageParser
test('message parser handles "hello" correctly', () => {
  const mockActionProvider = {
    greet: jest.fn()
  };
  const messageParser = new MessageParser(mockActionProvider);
  messageParser.parse('hello');
  expect(mockActionProvider.greet).toHaveBeenCalled();
});

// Test for ActionProvider
test('ActionProvider calls the correct function', () => {
  const mockSetState = jest.fn();
  const actionProvider = new ActionProvider(jest.fn(), mockSetState);
  actionProvider.greet();
  expect(mockSetState).toHaveBeenCalled();
});
// <a class="weatherwidget-io" href="https://forecast7.com/en/40d71n74d01/new-york/" data-label_1="NEW YORK" data-label_2="WEATHER" data-theme="original" >NEW YORK WEATHER</a>
// <script>
// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
// </script>