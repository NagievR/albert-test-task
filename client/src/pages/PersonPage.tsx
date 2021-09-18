import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import IPeople from '../../../server/interfaces/IPeople';

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
    <div className="container">
      <h1>{person.name}</h1>
      <Link to="/"><div>Back</div></Link>
    </div>
  );
};

export default PersonPage;
