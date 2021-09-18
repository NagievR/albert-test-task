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
      <section className={`loading ${s.skeletonContainer}`}>
      </section>
    );
  }

  return (
    <section>
      <ul className={s.peopleList}>
        {people.data.map((person: IPeople) => (
          <li className={s.liItem} key={person.url}>
            <PersonCard person={person} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PeopleList;
