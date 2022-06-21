import PropTypes from 'prop-types';
import './searchBar.scss';

function SearchBar({ searchValue, onSearchChange, onSearchSubmit }) {
  return (
    <form onSubmit={onSearchSubmit}>
      <input
        className="search"
        type="text"
        placeholder="&#128269;  GitHub research ..."
        value={searchValue}
        onChange={onSearchChange}
      />
    </form>
  );
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
