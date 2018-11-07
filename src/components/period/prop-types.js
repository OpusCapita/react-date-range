import { PropTypes } from 'prop-types';
import RelativeConstants from '../relative/constants';
import { relativeDate } from '../relative/prop-types';

export const granularities = [
  RelativeConstants.DAY,
  RelativeConstants.WEEK,
  RelativeConstants.MONTH,
];

export const periodShape = PropTypes.shape({
  periodic: PropTypes.bool,
  timing: PropTypes.number,
  unit: PropTypes.oneOf(granularities),
  moment: PropTypes.oneOf([RelativeConstants.END, RelativeConstants.START]),
});

export default {
  endDate: periodShape,
  onChange: PropTypes.func,
  startDate: relativeDate,
};
