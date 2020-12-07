import PropTypes from 'prop-types';
import s from './Statistics.module.css';

import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <div className={s.Statistics}>
          <ul className={s.StatisticsList}>
            <li className={s.StatisticsItem}>
              Good:<span className={s.value}>{good}</span>
            </li>
            <li className={s.StatisticsItem}>
              Neutral:<span className={s.value}>{neutral}</span>
            </li>
            <li className={s.StatisticsItem}>
              Bad:<span className={s.value}>{bad}</span>
            </li>
            <li className={s.StatisticsItem}>
              Total:<span className={s.value}>{total}</span>
            </li>
            <li className={s.StatisticsItem}>
              Positive feedback:
              <span className={s.value}>{positivePercentage}%</span>
            </li>
          </ul>
        </div>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
