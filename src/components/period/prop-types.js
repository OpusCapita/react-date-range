import { PropTypes } from 'prop-types';
import Constants from './constants';
import RelativeConstants from '../relative/constants';
import { relativeDate, relativeDateShape } from '../relative/prop-types';

export const granularities = [RelativeConstants.DAY, RelativeConstants.WEEK, RelativeConstants.MONTH];

export const periodShape = PropTypes.shape({
  unit: PropTypes.oneOf(granularities),
  timing: PropTypes.number,
  moment: Constants.PERIODIC,
});

export default {
  endDate: periodShape,
  onChange: PropTypes.func,
  relativeDateOptions: PropTypes.arrayOf(relativeDateShape),
  startDate: relativeDate,
};
