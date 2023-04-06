import './ChatPrompt.css'
import './Header.js'

function ChatPrompts({ humanChatLogs, letter,generatedText }){
   
    
    return(
        <div className='chatPrompts'>
          <div className='chatBox'>
            {generatedText}
          </div>
          <div className='vs'>VS</div>
          <div className='chatBox'>

            {humanChatLogs.at(-1)}

          </div>
        </div>
    )
}

export default ChatPrompts;