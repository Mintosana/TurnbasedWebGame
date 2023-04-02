import "./ChatLogs.css"

function ChatLogs({ humanChatLogs }) {
    let HistoryAI = ["Default"];
    let PlayerAI = ["Default"];

    return (
        <div className="logsContainer">
            <img src="" alt="Logo" />
            <div className="historyChat">
                <div className="historyAI">
                </div>
                <div className="historyPlayer">
                    {humanChatLogs.map((word, index) => {
                       return <p key={word + index}>{word}</p>
                    })}

                </div>
            </div>
            <img src="" alt="Logo" />
        </div>
    )
}

export default ChatLogs;