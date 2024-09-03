import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";

import { setFilterValue } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector((state) => state.filter.filters);

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
          onChange={handleFilter}
          value={filterValue}
        />
      </label>
    </div>
  );
};

export default SearchBox;
