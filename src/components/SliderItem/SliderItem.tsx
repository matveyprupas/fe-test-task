import './SliderItem.css';
import { ReactElement } from "react";

import vino1 from '../../assets/vino-1.png';
import { Button } from '../Button';

export interface SliderItemInterface {
  id: string,
  name: string,
  type: string
}

export const SliderItem = ({id, name, type}: SliderItemInterface): ReactElement => {
    return (
      <div className='slider-item_container'>
        <div className='slider-item_description'>
          <h3 className='slider-item_header'>{name}</h3>
          <span>{type}</span>
        </div>
        <div className='slider-item_content'>
          <div className='slider-item_image'>
            <img src={vino1} alt='vino' />
          </div>
          <div className='slider-item_buttons'>
            <Button text='Learn' onClick={()=> console.log('Learn Clicked')} />
            <Button text='Shop' onClick={()=> console.log('Shop Clicked')} />
          </div>
        </div>
      </div>
    );
  }