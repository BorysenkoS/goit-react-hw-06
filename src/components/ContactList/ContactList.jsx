import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const users = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => {
    return state.filter.filters;
  });

  const filteredUserName = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredUserName.map((user) => {
    return (
      <Contact
        userId={user.id}
        key={user.id}
        name={user.name}
        number={user.number}
      />
    );
  });
};

export default ContactList;
