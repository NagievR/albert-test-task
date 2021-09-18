import React from 'react';
import s from "./pagination.module.scss";
import IListParams from '../../interfaces/IListParams';

interface IProps {
  pagesCount: number,
  isLoading: boolean,
  setListParams: any,
  listParams: IListParams
};

const Pagination = (props: IProps) => {
  const { pagesCount, isLoading, setListParams, listParams } = props;
  const currPage = listParams.currPage;

  const changePage = (toPage: number): void => {
    if (currPage !== toPage) {
      setListParams((prev: IListParams) => (
        { ...prev, currPage: toPage })
      );
    }
  };

  const getPagesCount = (): React.ReactElement[] => {
    const list: React.ReactElement[] = [];
    for (let i = 1; i <= pagesCount; i++) {
      list.push(
        <li 
          className={`${currPage === i ? s.active : ''} ${s.item}`}
          key={i}
          onClick={() => changePage(i)}
        >{i}</li>
      );
    }
    return list;
  };

  if (isLoading) {
    return <section>loading...</section>;
  }

  return (
    <section>
      <ul className={s.list}>{getPagesCount()}</ul>
    </section>
  );
}

export default Pagination;

