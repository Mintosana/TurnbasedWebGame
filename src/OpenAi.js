import axios from 'axios';
import { useState } from 'react';

const openai = require('openai');

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
export const variable = randomCharacter;

const bodyGenerateText = {
  "model": "text-davinci-003",
  "prompt": `Give a word with the letter ${variable}`,
  "temperature" : 1,
  "max_tokens" : 10,
  "n" : 1,
}

const bodyGenerateImage = {
  
}

// const bodyVerifyText = {
//   "model": "text-davinci-003",
//   "prompt": `Can you tell me if the word ${} is valid ? Yes or no answers only`,
//   "temperature" : 1,
//   "max_tokens" : 10,
//   "n" : 1,
// }

const config ={
  headers:{
    "Content-Type": "application/json",
    "Authorization": "Bearer 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"
  }
}

export const useGenerate = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const generateText = async () => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        JSON.stringify(bodyGenerateText),
        config
      );
      const generatedText = response.data.choices[0].text;
      setData(generatedText);
    } catch (error) {
      setError(error.message);
    }
  };

  return { data, error, generateText };
};
