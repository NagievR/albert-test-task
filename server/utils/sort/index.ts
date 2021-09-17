import { SortBy } from "./enums";
import sortByAge from "./sortByAge";
import sortByString from "./sortByString";

const sortData = (
    data: Array<{}> | undefined, 
    sortBy: string, 
    desc: boolean = false
  ) => {

  if (!data) {
    return [];
  } 

  if (sortBy === SortBy.age) {
    return sortByAge(data, desc);
  } else if (sortBy === SortBy.name) {
    return sortByString(data, desc);
  } else {
    return data;
  }
};

export default sortData;
