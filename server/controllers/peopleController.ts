import { Response, Request } from 'express';
import getAllPagesByURI from '../utils/getAllPagesByURI';
import cache from '../cache/cache';
import paginate from '../utils/paginate';
import IPeople from '../interfaces/IPeople';
import IResponseHandler from '../interfaces/IResponseHandler';
import sortData from '../utils/sort';

const handleResponse = (props: IResponseHandler) => {
  const { data, perPage, currentPage, sortBy, desc } = props;
  let dataToPaginate: Array<IPeople> = data; 
  if (sortBy) {
    dataToPaginate = sortData(data, sortBy, desc);
  }
  return paginate(dataToPaginate, perPage, currentPage);
};

export const getPeople = async (req: Request, res: Response) => {
  let perPage: number = Number(req.query.perPage) || 8;
  let currentPage: number = Number(req.query.currPage) || 1;
  let sortBy: string | null = req.query.sortBy ? String(req.query.sortBy) : null;
  let desc: boolean = req.query.desc === "true" ? true : false;

  const initializeHandler = (data: Array<IPeople>) => {
    const props: IResponseHandler = {
      data, perPage, currentPage, sortBy, desc
    };
    res.status(200).json(handleResponse(props));
  };

  if (cache.has('peopleList')) {
    const peopleCached: Array<IPeople> | undefined = cache.get('peopleList');
    return initializeHandler(peopleCached!);
  }
  
  const peopleList: Array<IPeople> | undefined = await getAllPagesByURI();
  if (!peopleList) {
    return res.status(400).json({ message: "Cannot get people" });
  }

  initializeHandler(peopleList);
  cache.set('peopleList', peopleList);
};
