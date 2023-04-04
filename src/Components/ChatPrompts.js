import './ChatPrompt.css'
import './Header.js'
import { useState } from 'react';


function ChatPrompts({ humanChatLogs }){
    let AIResponse = "Beep Boop"

    return(
        <div className='chatPrompts'>
          <div className='chatBox'>
            {AIResponse}
          </div>
          <div className='vs'>VS</div>
          <div className='chatBox'>
            {humanChatLogs.at(-1)}
            {/* {letter===humanChatLogs.at(-1)[0]? humanChatLogs.at(-1): null} */}
          
          </div>
        </div>
    )
}

export default ChatPrompts;