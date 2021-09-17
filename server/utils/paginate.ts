const paginate = ( 
    data: object[],
    perPage: number = 8,
    currentPage: number = 1
  ) => {

  const from: number = perPage * (currentPage - 1);
  const to: number = currentPage * perPage;
  const paginatedData: object[] = data.slice(from, to);
  const currentDocumentsCount: number = paginatedData.length;
  const lastPage: number = Math.ceil(data.length / perPage);
  const hasNextPage: boolean = data.length > to;

  return {
    data: paginatedData,
    lastPage,
    currentPage,
    hasNextPage,
    currentDocumentsCount,
  };
};

export default paginate;
