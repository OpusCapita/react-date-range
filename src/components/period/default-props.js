import RelativeConstants from '../relative/constants';

export default {
  endDate: {
    periodic: true,
    timing: 5,
    unit: RelativeConstants.DAY,
  },
  onChange: () => {},
  startDate: {
    timing: RelativeConstants.CURRENT,
    unit: RelativeConstants.DAY,
  },
};
