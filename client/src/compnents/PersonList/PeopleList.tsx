import React from 'react';
import s from './peopleList.module.scss';
import PersonCard from './PersonCard/PersonCard';
import IPeople from '../../../../server/interfaces/IPeople';
import IPeopleWithMeta from '../../interfaces/IPeopleWithMeta';

interface Props {
  people: IPeopleWithMeta,
  isLoading: boolean
};

const PeopleList = (props: Props) => {
  const { people, isLoading } = props;

  if (isLoading) {
    return (
      <div>LOADING</div>
    );
  }

  return (
    <section className={''}>
      {people.data.map((person: IPeople) => (
        <PersonCard key={person.url} person={person} />
      ))}
    </section>
  );
};

export default PeopleList;
