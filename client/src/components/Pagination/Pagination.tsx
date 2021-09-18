import React from 'react';
import s from "pagination.module.scss";

interface IProps {
  pagesCount: number,
  isLoading: boolean,
  setListParams: any
};

const Pagination = (props: IProps) => {
  const { pagesCount, isLoading, setListParams } = props;

  const handlePageChange = (pageNumber: number): void => {
    setListParams((prev: any) => ({ ...prev, currPage: pageNumber }));
  };

  const getPagesCount = (): React.ReactElement[] => {
    const list: React.ReactElement[] = [];
    for (let i = 1; i <= pagesCount; i++) {
      list.push(
        <li 
          className=""
          key={i}
          onClick={() => handlePageChange(i)}
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
      <ul>{getPagesCount()}</ul>
    </section>
  );
}

export default Pagination;

