import React from 'react';
import IPeopleWithMeta from '../interfaces/IPeopleWithMeta';
import PeopleList from '../compnents/PersonList/PeopleList';

interface Props {
  people: IPeopleWithMeta,
  isLoading: boolean
}

const MainPage = (props: Props) => {
  const { people, isLoading } = props;

  return (

    <PeopleList people={people} isLoading={isLoading} />
    
  );
};

export default MainPage;
