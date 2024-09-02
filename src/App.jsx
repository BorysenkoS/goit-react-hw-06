import "./App.css";
// import usersData from "./users.json";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { addContact, deleteContact } from "./redux/contactsSlice";
import { setFilterValue } from "./redux/filtersSlice";

import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  // const [filter, setFilter] = useState("");
  // const [users, setUsers] = useState(() => {
  //   const localData = (localStorage.getItem("users"))=> ;
  //   return JSON.parse(localData) ?? usersData;
  // });
  const filter = useSelector((state) => {
    return state.filter.filters;
  });

  const users = useSelector((state) => state.contacts.items);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    const finalProfile = {
      id: nanoid(),
      ...newUser,
    };
    const action = addContact(finalProfile);
    dispatch(action);
    // setUsers(() => {
    //   return [finalProfile, ...users];
    // });
  };

  const deleteUser = (userId) => {
    const action = deleteContact(userId);
    dispatch(action);
    // setUsers(users.filter((item) => item.id !== userId));
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    // setFilter(value);
    const action = setFilterValue(value);
    dispatch(action);
  };

  const filteredUserName = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox filter={filter} handleFilter={handleFilter} />
      <ContactList
        users={users}
        deleteUser={deleteUser}
        filteredUserName={filteredUserName}
      />
    </>
  );
};

export default App;
