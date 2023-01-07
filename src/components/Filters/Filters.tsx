import './Filters.css';
import { ReactElement } from "react";

export const Filters = (): ReactElement => {
    return (
      <div className='filters'>
        <label className='filters_label' htmlFor="dry">
          <input type='checkbox' id="dry" name="dry"/>
          <span className="filters_checkbox__outer">
            <span className="filters_checkbox__inner"></span>
          </span>
          <span className='filters_text'>dry</span>
        </label>
        
        <label className='filters_label' htmlFor="semi-dry">
          <input type='checkbox' id="semi-dry" name="semi-dry"/>
          <span className="filters_checkbox__outer">
            <span className="filters_checkbox__inner"></span>
          </span>
          <span className='filters_text'>semi-dry</span>
        </label>
        
        <label className='filters_label' htmlFor="sweet">
          <input type='checkbox' id="sweet" name="sweet"/>
          <span className="filters_checkbox__outer">
            <span className="filters_checkbox__inner"></span>
          </span>
          <span className='filters_text'>sweet</span>
        </label>
      </div>
    );
  }