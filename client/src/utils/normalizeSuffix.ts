const normalizeSuffix = (number: number, word: string): string => {
  return number > 1 ? word + 's' : word;
};

export default normalizeSuffix;
