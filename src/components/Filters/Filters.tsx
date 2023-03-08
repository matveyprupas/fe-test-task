import './Filters.css';
import { ReactElement } from "react";
import { StateFiltersInterface } from '../../App';

interface FiltersProps {
  filters: StateFiltersInterface,
  onClick: (filter: 'dry' | 'semi-dry' | 'sweet', event: React.MouseEvent) => void
}

export const Filters = ({filters, onClick}: FiltersProps): ReactElement => {
    return (
      <div className='filters'>
        <label className='filters_label' htmlFor="dry" onClick={(e) => onClick('dry', e)}>
          <input type='checkbox' id="dry" name="dry" checked={filters.dry ? true : false} readOnly />
          <span className="filters_checkbox__outer">
            <span className="filters_checkbox__inner"></span>
          </span>
          <span className='filters_text'>dry</span>
        </label>
        
        <label className='filters_label' htmlFor="semi-dry" onClick={(e) => onClick('semi-dry', e)}>
          <input type='checkbox' id="semi-dry" name="semi-dry" checked={filters['semi-dry'] ? true : false} readOnly />
          <span className="filters_checkbox__outer">
            <span className="filters_checkbox__inner"></span>
          </span>
          <span className='filters_text'>semi-dry</span>
        </label>
        
        <label className='filters_label' htmlFor="sweet" onClick={(e) => onClick('sweet', e)}>
          <input type='checkbox' id="sweet" name="sweet" checked={filters.sweet ? true : false} readOnly/>
          <span className="filters_checkbox__outer">
            <span className="filters_checkbox__inner"></span>
          </span>
          <span className='filters_text'>sweet</span>
        </label>
      </div>
    );
  }