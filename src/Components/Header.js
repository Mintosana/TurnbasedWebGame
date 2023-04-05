import './Header.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {variable} from '../OpenAi';


function Header({setLetter, letter}){

    useEffect(() => {
        setLetter(variable);
       }, []);

    return(
        <h1 className='header-title'>The letter is {variable}</h1>
    )
}

export default Header;