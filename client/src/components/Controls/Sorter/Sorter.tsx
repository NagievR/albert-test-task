import React from 'react';
import s from "./sorter.module.scss";
import arrow from "../../../assets/icons/arrow.svg";
import IListParams from "../../../interfaces/IListParams";

interface IProps {
  sortBy: string,
  setListParams: any,
  listParams: IListParams
};

// define classes
const defineSorterClass = (currSort: string | null, sortBy: string): string => (
  currSort === sortBy ? `${s.sorter} ${s.sorterActive}` : `${s.sorter}`
);
const defineArrowClass = (isDescSort: boolean): string => (
  isDescSort ? `${s.arrow} ${s.arrowActive}` : `${s.arrow}`
);
// /===

const Sorter = (props: IProps) => {
  const { sortBy, setListParams, listParams } = props;
  const currSort: string | null = listParams.sortBy;
  const isDescSort = listParams.desc;
  
  const handleFilterClick = (): void => {
    if (currSort !== sortBy) {
      setListParams((prev: IListParams) => ({ ...prev, sortBy, currPage: 1 }));
    }
  };

  const handleArrowClick = () => {
    setListParams((prev: IListParams) => ({ 
      ...prev, 
      desc: !prev.desc, 
      currPage: 1 
    }));
  };

  return (
    <div 
      className={defineSorterClass(currSort, sortBy)} 
      onClick={handleFilterClick}
    >
      <div className={s.text}>{sortBy}</div>
      <img 
        className={defineArrowClass(isDescSort)} 
        onClick={handleArrowClick}
        src={arrow} 
        alt="arrow"
      />
    </div>
  );
};

export default Sorter;
