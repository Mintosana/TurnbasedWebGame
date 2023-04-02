import './ChatPrompt.css'
import ChatInput from './ChatInput'

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
          </div>
        </div>
    )
}

export default ChatPrompts;