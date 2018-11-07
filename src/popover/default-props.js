import absoluteRangeDefaultProps from '../components/absolute/default-props';
import periodDefaultProps from '../components/period/default-props';
import relativeRangeDefaultProps from '../components/relative/default-props';
import RangeTypes from './range-types';

export default {
  absoluteRange: absoluteRangeDefaultProps,
  enabled: {
    absolute: true,
    period: false,
    relative: false,
  },
  onChange: () => {},
  onRangeTypeChange: () => {},
  period: periodDefaultProps,
  relativeRange: relativeRangeDefaultProps,
  selectedRangeType: Object.keys(RangeTypes)[0],
  translations: {
    absolute: 'Absolute',
    day: {
      plural: 'days',
      singular: 'day',
    },
    endDate: 'Last day',
    from: 'From',
    month: {
      plural: 'months',
      singular: 'month',
    },
    period: 'Period',
    relative: 'Relative',
    startDate: 'First day',
    to: 'To',
    week: {
      plural: 'weeks',
      singular: 'week',
    },
  },
};
