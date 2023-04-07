export function comparePrompts(humanChatLogs, generatedText) {
    if (humanChatLogs && generatedText) {
        let humanInputLength = humanChatLogs.at(-1).length
        let generatedTextLength = generatedText.length - 2
        console.log(humanChatLogs.at(-1) + " " + humanInputLength)
        console.log(generatedText + " " + generatedTextLength)
        if (humanInputLength < generatedTextLength) {
            console.log("You Lost... The Skynet will take over the world")
        } else if (humanInputLength > generatedTextLength) {
            console.log("You won... Terminator is no more")
        } else console.log("You guys are equal...  you may now hold hands")
    }
}
