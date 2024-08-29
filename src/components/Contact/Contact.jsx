import css from "./Contact.module.css";

const Contact = ({ name, number, deleteUser, userId }) => {
  return (
    <div className={css.contact}>
      <div>
        <p className={css.contactText}>{name}</p>
        <p className={css.contactText}>{number}</p>
      </div>
      <button
        onClick={() => deleteUser(userId)}
        className={css.contactBtn}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
