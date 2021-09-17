const paginate = ( 
    data: any[] | undefined,
    perPage: number = 8,
    currentPage: number = 1
  ) => {

  if (!data) {
    return;
  }

  const from: number = perPage * (currentPage - 1);
  const to: number = currentPage * perPage;
  const paginatedData: any[] = data.slice(from, to);
  const currentDocumentsCount: number = paginatedData.length;
  const lastPage: number = Math.round(data.length / perPage);
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
