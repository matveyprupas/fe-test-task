import './Button.css';
import { ReactComponent as ArrowIcon } from '../../assets/arrow-btn_big.svg';
import { ReactElement } from "react";

interface ButtonProps {
  text?: string,
  icon?: ReactElement,
  isPrevious?: boolean,
  isDisabled?: boolean,
  onClick?: () => void
}

export const Button = ({text, icon, isPrevious, isDisabled, onClick}: ButtonProps): ReactElement => {
    return (
      <button onClick={onClick} className={`button ${isPrevious ? 'button_icon__rotate' : ''} ${isDisabled ? 'button__disabled' : ''}`} disabled={isDisabled} >
        {text?.toUpperCase()}
        { !!icon ? icon : <ArrowIcon/>}
      </button>        
    );
  }