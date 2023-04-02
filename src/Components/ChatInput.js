import "./ChatInput.css"
import { useState } from 'react';

function ChatInput({addNewHumanChatLogs, humanChatLogs}){
    const send = ">"
    
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }
    
        console.log(humanChatLogs.length)
    
        const displayInput = () =>{
            if(humanChatLogs.length<10)
           addNewHumanChatLogs(inputValue);
        }
    
    return(
        <div className="containerInput">
            <input className="chatInput" type="text" value={inputValue} onChange={handleInputChange}></input>
            <button className="sendInput" onClick={displayInput}>{send}</button>
        </div>
    )
}

export default ChatInput;