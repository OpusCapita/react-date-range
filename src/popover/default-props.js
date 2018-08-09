import absoluteRangeDefaultProps from '../components/absolute/default-props';
import relativeRangeDefaultProps from '../components/relative/default-props';
import RangeTypes from './range-types';

export default {
  absoluteRange: absoluteRangeDefaultProps,
  isRelativeEnabled: false,
  isRelativeSelected: false,
  onChange: () => {},
  relativeRange: relativeRangeDefaultProps,
  selectedRangeType: Object.keys(RangeTypes)[0],
  translations: {
    absolute: 'Absolute',
    endDate: 'Last day',
    relative: 'Relative',
    startDate: 'First day',
  },
};
