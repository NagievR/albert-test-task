import React from 'react';
import s from './personCard.module.scss';
import { Link } from 'react-router-dom';
import IPeople from '../../../../../server/interfaces/IPeople';
import createReadableURL from '../../../utils/createReadableURL';
import normalizeSuffix from '../../../utils/normalizeSuffix';

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
        <div className={s.name}>{person.name}</div>
      </Link>
      <div>{person.birth_year}</div>
      <div>
        Seen in {person.films.length} 
        {normalizeSuffix(person.films.length, ' movie')}
      </div>
    </article>
  );
};

export default PersonCard;
