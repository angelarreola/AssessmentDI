import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className='bg-white inset-0 w-screen h-screen flex flex-col justify-center items-center gap-5'>
        <img className='w-32 h-32' src="./HouseLettersLogo.svg" alt="Logo_HouseOfLetters" />
        <div className="spinner"></div>
    </div>
  )
}

export default LoadingScreen