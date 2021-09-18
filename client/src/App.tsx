import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import useFetch from './hooks/useFetch';
import IPeopleWithMeta from './interfaces/IPeopleWithMeta';
import IPeople from '../../server/interfaces/IPeople';

import MainPage from './pages/MainPage';
import PersonPage from './pages/PersonPage';

const App: React.FC = () => {
  const [people, setPeople] = useState<IPeopleWithMeta>({
    data: [], 
    lastPage: 1, 
    currentPage: 1, 
    hasNextPage: false, 
    currentDocumentsCount: 1
  });
  
  const {   
    data, 
    error,
    isLoading
  } = useFetch('api/people', { currPage: 1, perPage: 30, sortBy: 'age', desc: true }); 

  useEffect(() => {
    setPeople(data);
  }, [data])
  
  return (
    <div>
      <h1>SWAPI</h1>      
      <Switch>
        <Route path={`/`}>
          <MainPage 
            people={people}
            isLoading={isLoading}
          />
        </Route>
        <Route path={`:lololo`}>
          <PersonPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
