import React from 'react';
import IPeopleWithMeta from '../interfaces/IPeopleWithMeta';
import PeopleList from '../components/PersonList/PeopleList';
import Pagination from '../components/Pagination/Pagination';
import Controls from '../components/Controls/Controls';
import IListParams from '../interfaces/IListParams';

interface IProps {
  people: IPeopleWithMeta,
  isLoading: boolean,
  setListParams: any ,
  listParams: IListParams
};

const MainPage = (props: IProps) => {
  const { people, isLoading, setListParams, listParams } = props;
  return (
    <>
      <div className="bottom-line">
        <div className="container">
          <Controls 
            setListParams={setListParams} 
            listParams={listParams} 
          />
        </div>
      </div>
      <div className="container">
        <PeopleList 
          people={people} 
          isLoading={isLoading} 
        />
        <Pagination 
          pagesCount={people.lastPage} 
          isLoading={isLoading} 
          setListParams={setListParams}
          listParams={listParams}
        />
      </div>
    </>
  );
};

export default MainPage;
