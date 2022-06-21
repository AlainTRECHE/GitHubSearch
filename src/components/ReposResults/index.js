import PropTypes from 'prop-types';
import './reposResults.scss';

function ReposResults({ results }) {
  return (
    <div className="result-list">
      { results.map((result) => (
        <div
          key={result.id}
          className="result-list__item"
        >
          <img
            className="result-list__item__image"
            src={result.owner.avatar_url}
            alt={result.name}
          />
          <h2>{result.name}</h2>
          <span>{result.full_name}</span>
          <p className="result-list__item__text">{result.description}</p>
        </div>
      ))}
    </div>
  );
}

ReposResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    description: PropTypes.string,
    owner: PropTypes.shape({ avatar_url: PropTypes.string.isRequired }).isRequired,
  }).isRequired).isRequired,
};

export default ReposResults;
