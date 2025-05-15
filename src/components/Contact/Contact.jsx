import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => (
  <li className={styles.item}>
    {contact.name}: {contact.number}
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

export default Contact;
