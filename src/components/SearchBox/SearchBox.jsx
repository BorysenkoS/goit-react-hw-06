import css from "./SearchBox.module.css";

import { useDispatch } from "react-redux";

import { setFilterValue } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    const value = event.target.value;
    const action = setFilterValue(value);
    dispatch(action);
  };

  return (
    <div className={css.searchBox}>
      <p className={css.searchText}>Find contacts by name</p>
      <label>
        <input
          className={css.searchData}
          type="text"
          name="searchBox"
          // value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

export default SearchBox;
