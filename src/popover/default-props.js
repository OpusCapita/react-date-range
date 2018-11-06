import absoluteRangeDefaultProps from '../components/absolute/default-props';
import relativeRangeDefaultProps from '../components/relative/default-props';
import RangeTypes from './range-types';

export default {
  absoluteRange: absoluteRangeDefaultProps,
  isPeriodEnabled: false,
  isRelativeEnabled: false,
  onChange: () => {},
  onRangeTypeChange: () => {},
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
