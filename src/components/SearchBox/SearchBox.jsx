import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => (
  <div className={styles.box}>
    <label>
      Search
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default SearchBox;
