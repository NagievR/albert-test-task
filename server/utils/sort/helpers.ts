export const sortByNumberAsc = (a: string, b: string) => {  
  return parseFloat(a) - parseFloat(b);
};

export const sortByNumberDesc = (a: string, b: string) => {  
  return parseFloat(b) - parseFloat(a);
};
