import './SliderItem.css';
import { ReactElement } from "react";

import vino1 from '../../assets/vino-1.png';
import { ReactComponent as  ArrowIcon } from '../../assets/arrow-btn_small.svg';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export interface SliderItemInterface {
  id: string,
  name: string,
  type: 'dry' | 'semi-dry' | 'sweet'
}

export const SliderItem = ({id, name, type}: SliderItemInterface): ReactElement => {
  // console.log(arrowIcon)
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
            <Link to={`learn/${id}`} className={'slider-item_link'} >
              <Button text='Learn' icon={<ArrowIcon/>} onClick={()=> console.log('Learn Clicked')} />
            </Link>
            <Link to={`shop/${id}`} className={'slider-item_link'} >
              <Button text='Shop' icon={<ArrowIcon/>} onClick={()=> console.log('Shop Clicked')} />
            </Link>
          </div>
        </div>
      </div>
    );
  }