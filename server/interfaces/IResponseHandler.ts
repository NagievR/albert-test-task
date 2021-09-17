import IPeople from "./IPeople";

interface IResponseHandler {
  data: Array<IPeople>,
  perPage?: number,
  currentPage?: number,
  sortBy?: string | null,
  desc?: boolean
};

export default IResponseHandler;
