import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.list}>
    {contacts.map((contact) => (
      <Contact key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </ul>
);

export default ContactList;
