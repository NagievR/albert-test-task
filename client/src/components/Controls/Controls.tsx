import React from 'react';
import s from "./controls.module.scss";
import close from "../../assets/icons/close.svg";
import ESortBy from "../../enums/ESortBy";
import Sorter from './Sorter/Sorter';
import IListParams from '../../interfaces/IListParams';

interface IProps {
  setListParams: any
  listParams: IListParams
};

const Controls = (props: IProps) => {
  const { setListParams, listParams } = props;
  const isSortApplied: boolean = Boolean(listParams.sortBy);

  const getSorters = (): React.ReactElement[] => {
    const sorters: Array<React.ReactElement> = [];
    for (let sorter in ESortBy) {
      sorters.push(
        <li className={s.item} key={sorter}>
          <Sorter
            sortBy={sorter} 
            setListParams={setListParams} 
            listParams={listParams}
          />
        </li>
      );
    }
    return sorters;
  };

  const cancelFilters = (): void => {
    setListParams((prev: IListParams) => ({ 
      ...prev,
      sortBy: null,
      currPage: 1
    }));
  }; 

  return (
    <section className={s.controls}>
      <div className={s.text}>Filters:</div>
      <ul className={s.list}>
        {getSorters()}
      </ul>
      {isSortApplied &&
        <div className={s.cancel} onClick={cancelFilters}>
          <img src={close} alt="close" />
        </div>
      }
    </section>
  );
};

export default Controls;
