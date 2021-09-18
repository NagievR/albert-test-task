import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import useFetch from './hooks/useFetch';
import IPeopleWithMeta from './interfaces/IPeopleWithMeta';
import IListParams from './interfaces/IListParams';

import MainPage from './pages/MainPage';
import PersonPage from './pages/PersonPage';
import Header from './components/Header/Header';

const App: React.FC = () => {
  const [listParams, setListParams] = useState<IListParams>({
    currPage: 1, 
    perPage: 12, 
    sortBy: null, 
    desc: false,
  });

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
  } = useFetch('api/people', listParams); 

  useEffect(() => {
    setPeople(data);
  }, [data])

  if (error) {
    console.log(error);
    return(
      <h1>Error :(<br />Try again later</h1>
    );
  }
  
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" >
            <MainPage 
              people={people} 
              isLoading={isLoading} 
              setListParams={setListParams}
              listParams={listParams}
            />
          </Route>
          <Route exact path="/:name" >
            <PersonPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
