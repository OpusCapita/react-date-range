import RelativeConstants from '../relative/constants';
import relativeDateOptions from '../relative/relative-options';

export default {
  endDate: {
    periodic: true,
    timing: 5,
    unit: RelativeConstants.DAY,
  },
  onChange: () => {},
  relativeDateOptions,
  startDate: {
    timing: RelativeConstants.CURRENT,
    unit: RelativeConstants.DAY,
  },
};
