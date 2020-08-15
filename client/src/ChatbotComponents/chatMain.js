import React from "react";
import Chatbot from './Chatbot';
const Lines = require('../Assets/lines.png')

function ChatMain() {
  return (
    <div className="chatbox_main">

      {/* Chat Bot Box Container */}
      <div style={{ display: 'flex', justifyContent: 'center',flexDirection:'column', alignItems:'center',marginTop:'50px'}}>
        <Chatbot />
      </div>

      {/* Background Image for the ChatBot Page set to Absolute */}
      <div className="lines_image">
        <img src={Lines} alt="lines"/>
      </div>
    </div>
  )
}

export default ChatMain
