interface IResponseHandler {
  data: Array<{}> | undefined,
  perPage?: number,
  currentPage?: number,
  sortBy?: string | null,
  desc?: boolean
};

export default IResponseHandler;
