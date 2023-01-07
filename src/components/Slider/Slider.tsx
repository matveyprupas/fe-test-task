import './Slider.css';
import { ReactElement, useState } from "react";
import list from '../../assets/list.json'
import { SliderItem } from "../SliderItem";

export const Slider = (): ReactElement => {
    // console.log(list);
    const [vineList, setVineList] = useState(list)
    return (
        <>
            <h1>Header 1. Slider</h1>
            <div className="slider_wrapper">
                {vineList.map(el => <SliderItem key={el.id} id={el.id} name={el.name} type={el.type} />)}
            </div>
        </>
    );
  }