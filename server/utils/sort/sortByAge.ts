import { sortByNumberAsc, sortByNumberDesc } from "./helpers"; 

const sortByAge = (data: Array<{}>, desc: boolean) => {
  // remove people without age
  const ageCleared = data.filter((person: any) => person.birth_year !== "unknown");

  if (desc) {
    return ageCleared.slice().sort((a: any, b: any) => {
      return sortByNumberDesc(a.birth_year, b.birth_year);
    });
  } 
  return ageCleared.slice().sort((a: any, b: any) => {
    return sortByNumberAsc(a.birth_year, b.birth_year);
  });
};

export default sortByAge;
