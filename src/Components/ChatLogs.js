import "./ChatLogs.css"
import image from '../Assets/OpenAILogo.png'
import image2 from '../Assets/Ubisoft.png'

function ChatLogs({ humanChatLogs, aiChatLogs, generatedText }) {
    return (
        <div className="logsContainer">
            <img className="logo" src={image} alt="Logo" />
            <div className="historyChat">
                <div className="historyAI">
                    {aiChatLogs && aiChatLogs.map((generatedText, index) => {
                        return <p key={generatedText + index}>{generatedText}</p>
                    })} {console.log(generatedText)} {console.log(aiChatLogs)}
                </div>
                <div className="historyPlayer">
                    {humanChatLogs.map((word, index) => {
                        return <p key={word + index}>{word}</p>
                    })}

                </div>
            </div>
            <img className="logo" src={image2} alt="Logo" />
        </div>
    )
}

export default ChatLogs;