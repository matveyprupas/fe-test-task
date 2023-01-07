import './Button.css';
import { ReactElement } from "react";

interface ButtonProps {
  text: string,
  onClick?: () => void
}

export const Button = ({text, onClick}: ButtonProps): ReactElement => {
    return (
      <button onClick={onClick} className='button'>
        {text.toUpperCase()}
        <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.89695 -4.76837e-07L0.328201 1.5275L5.42386 6.5L0.328201 11.4725L1.89695 13L8.57248 6.5L1.89695 -4.76837e-07Z" fill="black"/>
        </svg>
      </button>        
    );
  }