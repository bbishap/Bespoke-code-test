import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="search_input">
        <img src="images/search.png" alt="" />
        <input type="text" placeholder="Search anything" />
      </div>
      <div className="user">
        <div className="avatar">L</div>
        <div className="user_info">
          Mr. Luis
          <span>Patient</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
