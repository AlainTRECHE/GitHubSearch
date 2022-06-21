import PropTypes from 'prop-types';
import './message.scss';

function Message({ text }) {
  return (
    <div className="counter-message">
      <p className="counter-message__text">{text}</p>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
