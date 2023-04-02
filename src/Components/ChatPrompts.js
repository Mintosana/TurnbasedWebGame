import './ChatPrompt.css'
import ChatInput from './ChatInput'

function ChatPrompts(){
    let AIResponse = "Beep Boop"
    let PlayerResponse = "Human";

    return(
        <div className='chatPrompts'>
          <div className='chatBox'>
            {AIResponse}
          </div>
          <div className='vs'>VS</div>
          <div className='chatBox'>
            {PlayerResponse}
          </div>
        </div>
    )
}

export default ChatPrompts;