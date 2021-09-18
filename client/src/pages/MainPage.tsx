import React from 'react';
import IPeopleWithMeta from '../interfaces/IPeopleWithMeta';
import PeopleList from '../components/PersonList/PeopleList';
import Pagination from '../components/Pagination/Pagination';

interface IProps {
  people: IPeopleWithMeta,
  isLoading: boolean,
  setListParams: any 
};

const MainPage = (props: IProps) => {
  const { people, isLoading, setListParams } = props;

  return (
    <div className="container">
      <PeopleList people={people} isLoading={isLoading} />
      <Pagination 
        pagesCount={people.lastPage} 
        isLoading={isLoading} 
        setListParams={setListParams}
      />
    </div>
  );
};

export default MainPage;
