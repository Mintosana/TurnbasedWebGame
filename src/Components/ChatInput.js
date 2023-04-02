import "./ChatInput.css"
import { useState } from 'react';

function ChatInput(){
    const send = ">"

    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    }

    const displayInput = () =>{
        console.log(inputValue)
    }
    return(
        <div className="containerInput">
            <input className="chatInput" type="text" value={inputValue} onChange={handleInputChange}></input>
            <button className="sendInput" onClick={displayInput}>{send}</button>
        </div>
    )
}

export default ChatInput;