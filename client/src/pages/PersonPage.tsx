import React from 'react';
import { useHistory, useLocation } from 'react-router';
import IPeople from '../../../server/interfaces/IPeople';
import PersonInfo from '../components/PersonInfo/PersonInfo';
import Return from '../components/Return/Return';

interface ILocation extends IPeople {
  pathname: string,
};

const PersonPage: React.FC = () => {
  const person = useLocation<ILocation>().state;
  const history = useHistory();

  if (!person) {
    history.push('/');
    return <div></div>;
  }

  return (
    <>
      <Return to="/" />
      <div className="container">
        <PersonInfo person={person} />
      </div>
    </>
  );
};

export default PersonPage;
