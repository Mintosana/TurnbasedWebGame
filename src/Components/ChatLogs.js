import "./ChatLogs.css"
import image from '../Assets/OpenAILogo.png'
import image2 from '../Assets/Ubisoft.png'

function ChatLogs({ humanChatLogs }) {
    return (
        <div className="logsContainer">
            <img className = "logo" src={image} alt="Logo" />
            <div className="historyChat">
                <div className="historyAI">
                </div>
                <div className="historyPlayer">
                    {humanChatLogs.map((word, index) => {
                       return <p key={word + index}>{word}</p>
                    })}

                </div>
            </div>
            <img className = "logo" src={image2} alt="Logo" />
        </div>
    )
}

export default ChatLogs;