enum SortBy {
  age = "age",
  name = "name"
};

interface IPeopleParams {
  perPage?: number
  currPage: number
  sortBy?: SortBy
  desc?: boolean
};

export default IPeopleParams;
