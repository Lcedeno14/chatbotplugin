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
