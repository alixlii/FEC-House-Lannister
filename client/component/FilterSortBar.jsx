import React from 'react';

const FilterSortBar = props => {
  return (<div>
    <span className="filter">
      <span>Filter</span>
      <span className="dropArrow">
        <svg viewBox="0 0 95 25" className="dropArrowSvg">
          <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
        </svg>
      </span>
    </span>
    <span className='verticalBorder'></span>
    <span className='sort'>
      <span>Sort by:&nbsp;
        <b>Most Helpful</b>
      </span>
      <span className="dropArrow">
        <svg viewBox="0 0 95 25" className="dropArrowSvg">
          <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
        </svg>
      </span>
    </span>
  </div>)
}

export default FilterSortBar;
