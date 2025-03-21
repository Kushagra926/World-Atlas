export const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
  }) => {
    const handleInputChange = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      event.preventDefault();
      setFilter(event.target.value);
    };
  

  
    return (
      <section className="section-searchFilter container">
        <div>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={handleInputChange}
          />
        </div>
  
        <div>
          <select
            className="select-section"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    );
  };