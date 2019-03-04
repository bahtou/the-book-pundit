export const fetchBookListRequested = searchTerm => {
  return {
    type: 'SEARCH_CHANNEL',
    data: {
      evt: 'FETCH_BOOKLIST_REQUESTED',
      data: searchTerm
    }
  };
};
