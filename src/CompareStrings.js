export function comparePrompts(humanChatLogs, generatedText) {
    if (humanChatLogs && generatedText) {
        let humanInputLength = humanChatLogs.length
        let generatedTextLength = generatedText.length - 2
        console.log(
            "String length of human input that is the word: " +
                humanChatLogs +
                " " +
                humanInputLength
        )
        console.log(
            "String length of AI input that is the word: " +
                generatedText +
                " " +
                generatedTextLength
        )
        if (humanInputLength < generatedTextLength) {
            console.log("You Lost... The Skynet will take over the world")
        } else if (humanInputLength > generatedTextLength) {
            console.log("You won... Terminator is no more")
        } else console.log("You guys are equal...  you may now hold hands")
    }
}
