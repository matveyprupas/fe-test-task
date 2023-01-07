import './Slider.css';
import { ReactElement, useState } from "react";
import list from '../../assets/list.json'
import { SliderItem, SliderItemInterface } from "../SliderItem";
import { StateFiltersInterface } from '../../App';

interface SliderProps {
    filters: StateFiltersInterface
}

export const Slider = ({filters}: SliderProps): ReactElement => {
    const [vineList] = useState<SliderItemInterface[]>(list as SliderItemInterface[]);
    return (
        <>
            <div className="slider_wrapper">
                {vineList.filter(el => filters[el.type]).map(el => <SliderItem key={el.id} id={el.id} name={el.name} type={el.type} />)}
            </div>
        </>
    );
  }