import "./App.css";
import usersData from "./users.json";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState(() => {
    const localData = localStorage.getItem("users");

    return JSON.parse(localData) ?? usersData;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    const finalProfile = {
      id: nanoid(),
      ...newUser,
    };

    setUsers(() => {
      return [finalProfile, ...users];
    });
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((item) => item.id !== userId));
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilter(value);
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
