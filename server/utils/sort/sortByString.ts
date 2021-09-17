import IPeople from "../../interfaces/IPeople";

const sortByString = (data: Array<IPeople>, desc: boolean) => {
  if (desc) {
    return data.slice().sort((a: any, b: any) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
    });
  }
  return data.slice().sort((a: any, b: any) =>  {
    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
  });
};

export default sortByString;
