import React from 'react';
import s from "./personInfo.module.scss";
import IPeople from '../../../../server/interfaces/IPeople';

interface IProps {
  person: IPeople
};

const checkValidity = (value: string | number, unit: string): string => {
  const valueStr: string = String(value);
  return `${valueStr !== 'unknown' ? valueStr + unit : valueStr}`;
};

const PersonInfo = (props: IProps) => {
  const { person } = props; 
  return (
    <section>
      <h2 className={s.title}>{person.name}</h2>
      <ul className={s.list}>
        <li>
          <span>Gender:</span>
          <span>{person.gender}</span>
        </li>
        <li>
          <span>Eye color:</span>
          <span>{person.eye_color}</span>
        </li>
        <li>
          <span>Hair color:</span>
          <span>{person.hair_color}</span>
        </li>
        <li>
          <span>Height:</span>
          <span>{checkValidity(person.height, 'cm')}</span>
        </li>
        <li>
          <span>Mass:</span>
          <span>{checkValidity(person.mass, 'kg')}</span>
        </li>
        <li>
          <span>Skin color:</span>
          <span>{person.skin_color}</span>
        </li>
      </ul>
    </section>
  );
}

export default PersonInfo;
