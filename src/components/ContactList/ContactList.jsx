import Contact from "../Contact/Contact";

const ContactList = ({ deleteUser, filteredUserName }) => {
  return filteredUserName.map((user) => {
    return (
      <Contact
        deleteUser={deleteUser}
        userId={user.id}
        key={user.id}
        name={user.name}
        number={user.number}
      />
    );
  });
};

export default ContactList;
