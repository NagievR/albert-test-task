const createReadableURL = (toСonvert: string): string => {
  return toСonvert.split(' ')
    .map((str: string) => str.toLowerCase())
    .join('-');
};

export default createReadableURL;
