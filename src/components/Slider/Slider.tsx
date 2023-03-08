import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import { ReactElement, useRef, useState } from "react";
import SliderSlick from "react-slick";
import list from '../../assets/list.json'
import { SliderItem, SliderItemInterface } from "../SliderItem";
import { StateFiltersInterface } from '../../App';
import { Button } from '../Button';

interface SliderProps {
    filters: StateFiltersInterface
}

export const Slider = ({filters}: SliderProps): ReactElement => {
    const [vineList] = useState<SliderItemInterface[]>(list as SliderItemInterface[]);
    const [activeSlide, setActiveSlide] = useState<number>(-1);
    const sliderRef = useRef<any>(null);
    const slidesToShow = 4;
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>,
        beforeChange: (current: number, next: number): void => setActiveSlide( next ),
        variableWidth: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true
              }
            }
          ]
    };

    const getLastActiveSlide = (allSlides: number, slidesToShow: number): number => {
        let res = allSlides - slidesToShow;
        if (res === 0) return 0;
        while (res > allSlides) {
            res -= slidesToShow;
        }
        return res;
    }

    const nextHandler = () => {
        if(!!sliderRef) {
            sliderRef.current.slickNext()
        }
    }

    const prevHandler = () => {
        if(!!sliderRef) {
            sliderRef.current.slickPrev()
        }
    }

    return (
        <>
            <SliderSlick ref={sliderRef} {...settings}  >
                {vineList.filter(el => filters[el.type]).map(el => <SliderItem key={el.id} id={el.id} name={el.name} type={el.type} />)}
            </SliderSlick>
            <div className='slider_buttons'>
                <Button isPrevious={true} onClick={prevHandler} isDisabled={activeSlide === 0} />
                <Button onClick={nextHandler} isDisabled={activeSlide === getLastActiveSlide(vineList.length, slidesToShow)} />
            </div>
        </>
    );
  }