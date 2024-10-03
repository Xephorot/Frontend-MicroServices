export function useSearchHandler(setSearchTerm) {
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    return { handleSearchChange };
  }
  