import { PropTypes } from 'prop-types';
import Constants from './constants';

const granularities = [
  Constants.DAY,
  Constants.WEEKDAY,
  Constants.WEEK,
  Constants.MONTH,
  Constants.YEAR,
];

export const relativeDateValueShape = PropTypes.shape({
  unit: PropTypes.oneOf(granularities),
  timing: PropTypes.oneOf([Constants.PREVIOUS, Constants.CURRENT, Constants.NEXT]),
  moment: PropTypes.oneOf([Constants.END, Constants.START]),
});

export const relativeDateShape = PropTypes.shape({
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: relativeDateValueShape,
  granularity: PropTypes.oneOf(granularities),
  past: PropTypes.bool,
});

export default {
  endDate: relativeDateShape,
  onChange: PropTypes.func,
  startDate: relativeDateShape,
};
