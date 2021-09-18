import React from 'react';
import s from './personCard.module.scss';
import IPeople from '../../../../../server/interfaces/IPeople';

interface Props {
  person: IPeople
};

const PersonCard = (props: Props) => {
  const { person } = props;

  return (
    <article className={s.cardWrap}>
      <div>{person.birth_year}</div>
      <div>{person.name}</div>
      <div>seen in {person.films.length} movies</div>
    </article>
  );
};

export default PersonCard;
