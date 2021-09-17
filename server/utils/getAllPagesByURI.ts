import IPeople from '../interfaces/IPeople';
import requestData from './requestData';

const getAllPagesByURI = async () => {
  let URI: string | undefined | null = process.env.API_SWAPI_PEOPLE;
  let peopleList: Array<IPeople> = [];

  while (URI) {
    const data: {
      count?: number,
      next?: string | null,
      previous?: string | null,
      results: Array<IPeople>
    } = await requestData(URI);

    if (!data) {
      return;
    }

    URI = data.next;
    peopleList = [...peopleList, ...data.results];
  }

  return peopleList;
};

export default getAllPagesByURI;
