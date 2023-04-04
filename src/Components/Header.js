import './Header.css';
import { useState } from 'react';


function Header(letter){

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

    letter = randomCharacter;

    return(
        <h1 className='header-title'>The word is {letter}</h1>
    )
}

export default Header;