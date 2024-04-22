import React from 'react';
import './App.css';
import ChatbotComponent from './chatbot1'; // Import the chatbot component
import avatar from './assets/img.png'

function App() {
  return (
      <header className="App-header">
          <div className="header-content">
              <div className="company-name"> Aqua Assistant </div>
              <div className="right-content">
                  <span className="font-color-gradient login-text">Login</span>
                  <i className="fas fa-bars menu-icon"></i>
              </div>
          </div>
          <div className="App-body">
              <ChatbotComponent/>
              <img src={avatar} alt="Aqua" width="550" height="550"/>
              <div className="info-section">

                  <div className="product-description">
                      <h1>Meet Aqua Assist: Your Personal Poolside Helper!</h1>
                      <p>Instantly troubleshoot pool maintenance issues with
                          Aqua Assist, the AI-powered chatbot designed specifically for pool professionals.</p>
                  </div>
              </div>
          </div>
      </header>

  )
      ;
}

export default App;
