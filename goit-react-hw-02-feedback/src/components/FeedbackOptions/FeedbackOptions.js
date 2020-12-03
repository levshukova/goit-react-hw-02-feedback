import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.FeedbackControls}>
      {options.map(option => (
        <button
          type="button"
          className={s.btn}
          data-action={option}
          onClick={onLeaveFeedback}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
