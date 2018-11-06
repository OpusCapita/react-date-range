import Constants from './constants';
import RelativeConstants from '../relative/constants';
import relativeDateOptions from '../relative/relative-options';

export default {
  endDate: {
    unit: RelativeConstants.DAY,
    timing: 5,
    moment: Constants.PERIODIC,
  },
  onChange: () => {},
  relativeDateOptions,
  startDate: {
    unit: RelativeConstants.DAY,
    timing: RelativeConstants.CURRENT,
  },
};
