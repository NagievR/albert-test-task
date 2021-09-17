import { SortBy } from "./enums";
import sortByAge from "./sortByAge";
import sortByString from "./sortByString";
import IPeople from "../../interfaces/IPeople";

const sortData = (
    data: Array<IPeople>, 
    sortBy: string, 
    desc: boolean = false
  ) => {

  if (sortBy === SortBy.age) {
    return sortByAge(data, desc);
  } else if (sortBy === SortBy.name) {
    return sortByString(data, desc);
  } else {
    return data;
  }
};

export default sortData;
