import axios from 'axios';
import { useState } from 'react';

const openai = require('openai');

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
export const variable = randomCharacter;

const body = {
  "model": "text-davinci-003",
  "prompt": `Give a word with the letter ${variable}`,
  "temperature" : 1,
  "max_tokens" : 10,
  "n" : 1,
}

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
        JSON.stringify(body),
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



// const Robot = {
//   generateWord: async () => {
    
//       let letter = 'B'; // aici trebuie sa facem un random generator pt litere
//       const prompt = `Generate a word that starts with the letter ${letter}.`;
      
//       const temperature = 1; //este intre 0 si 1, cu cat mai aproape de 1 cu atat mai uncommon este cuvantul pe care ti-l genereaza
//       const maxTokens = 1; //zice cate cuvinte iti genereaza
//       const n = 1; //asta zice cate variatii a prompt-ului iti genereaza, recomand sa mai cautati sa vedeti cat punem aici
//       const stop = '\n'; //cand se opreste din a genera
//       let word = 'unknown'
      
//       const response = await openai.completions.create({ //apelarea ai-ului
//         prompt: prompt,
//         temperature: temperature,
//         max_tokens: maxTokens,
//         n: n,
//         stop: stop,
//       });
      
//         word = response.choices[0].text.trim();
//         console.log(`Generated word: ${word}`);
//         finalWord = word;
      
//   }
// }