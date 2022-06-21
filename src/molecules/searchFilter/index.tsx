import "./searchFilter.scss";

const SearchFilter = () => {
  return (
    <div className="search-filter">
      <div className="search-filter_input">
        <input type="text" placeholder="Search" />
        <div className="search-filter_icon">
          <img src="images/search.png" alt="" />
        </div>
      </div>
      <div className="search-filter_calendar">
        <span>03-29-2022</span>
        <img src="images/calendar.png" alt="calendar" />
      </div>
      <div className="search-filter_btn">
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchFilter;
