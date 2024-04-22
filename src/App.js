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
                  <button className="login-button font-color-gradient">Login</button>
                  <i className="fas fa-bars menu-icon"></i>
              </div>
          </div>
          <div className="App-body">
              <ChatbotComponent/>
              <div className="info-section">
                  <div className="product-description">
                      <h1>Meet Aqua Assist: Your Personal Poolside Helper!</h1>
                      <p>Instantly troubleshoot pool maintenance issues with
                          Aqua Assist, the AI-powered chatbot designed specifically for pool professionals.</p>
                  </div>
              </div>
              <img src={avatar} alt="Aqua" className="avatar-image" width="550" height="550"/>

          </div>
      </header>

  )
      ;
}

export default App;
