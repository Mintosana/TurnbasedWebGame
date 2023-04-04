import './Header.css';
import { useState } from 'react';
import { useEffect } from 'react';


function Header({setLetter, letter}){

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    useEffect(() => {
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        setLetter(randomCharacter);
       }, []);

    return(
        <h1 className='header-title'>The word is {letter}</h1>
    )
}

export default Header;