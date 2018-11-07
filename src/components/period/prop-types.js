import { PropTypes } from 'prop-types';
import Constants from './constants';
import RelativeConstants from '../relative/constants';
import { relativeDate, relativeDateShape } from '../relative/prop-types';

export const granularities = [
  RelativeConstants.DAY,
  RelativeConstants.WEEK,
  RelativeConstants.MONTH,
];

export const periodShape = PropTypes.shape({
  periodic: PropTypes.bool.isRequired,
  timing: PropTypes.number.isRequired,
  unit: PropTypes.oneOf(granularities).isRequired,
  moment: PropTypes.oneOf([Constants.END, Constants.START]),
});

export default {
  endDate: periodShape,
  onChange: PropTypes.func,
  relativeDateOptions: PropTypes.arrayOf(relativeDateShape),
  startDate: relativeDate,
};
