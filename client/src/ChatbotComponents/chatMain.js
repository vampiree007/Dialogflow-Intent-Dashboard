import React from "react";
import Chatbot from './Chatbot';
const Lines = require('../Assets/lines.png')

function ChatMain() {
  return (
    <div className="chatbox_main">


      <div style={{ display: 'flex', justifyContent: 'center',flexDirection:'column', alignItems:'center',marginTop:'50px'}}>
        <Chatbot />
      </div>

      <div className="lines_image">
        <img src={Lines} alt="lines"/>
      </div>
    </div>
  )
}

export default ChatMain
