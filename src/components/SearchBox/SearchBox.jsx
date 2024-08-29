import css from "./SearchBox.module.css";

const SearchBox = ({ filter, handleFilter }) => {
  return (
    <div className={css.searchBox}>
      <p className={css.searchText}>Find contacts by name</p>
      <label>
        <input
          className={css.searchData}
          type="text"
          name="searchBox"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

export default SearchBox;
