import { PropTypes } from 'prop-types';
import Constants from './constants';

const granularities = [Constants.DAY, Constants.WEEK, Constants.MONTH, Constants.YEAR];

export const relativeDate = PropTypes.shape({
  unit: PropTypes.oneOf(granularities),
  timing: PropTypes.oneOf([Constants.PREVIOUS, Constants.CURRENT, Constants.NEXT]),
  moment: PropTypes.oneOf([Constants.END, Constants.START]),
});

export const relativeDateShape = PropTypes.shape({
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  value: relativeDate.isRequired,
  granularity: PropTypes.oneOf(granularities).isRequired,
  past: PropTypes.bool,
});

export default {
  endDate: relativeDate,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(relativeDateShape),
  startDate: relativeDate,
};
