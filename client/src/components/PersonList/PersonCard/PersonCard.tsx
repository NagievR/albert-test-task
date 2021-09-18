import React from 'react';
import s from './personCard.module.scss';
import IPeople from '../../../../../server/interfaces/IPeople';
import { Link } from 'react-router-dom';
import createReadableURL from '../../../utils/createReadableURL';

interface IProps {
  person: IPeople
};

const PersonCard = (props: IProps) => {
  const { person } = props;

  return (
    <article className={s.cardWrap}>
      <Link to={{
        pathname: `/${createReadableURL(person.name)}`,
        state: person,
      }}>
        <div>{person.name}</div>
      </Link>
      <div>{person.birth_year}</div>
      <div>seen in {person.films.length} movies</div>
    </article>
  );
};

export default PersonCard;
