import './ChatPrompt.css'
import './Header.js'
import { useState, useEffect } from 'react';
import { useGenerate } from '../OpenAi';

function ChatPrompts({ humanChatLogs, letter }){
    const {
      data,
      error,
      generateText
    } = useGenerate();
    useEffect(()=>{
      generateText();
    },
    []
    )
    return(
        <div className='chatPrompts'>
          <div className='chatBox'>
            {data}
          </div>
          <div className='vs'>VS</div>
          <div className='chatBox'>

            {humanChatLogs.at(-1)}

          </div>
        </div>
    )
}

export default ChatPrompts;