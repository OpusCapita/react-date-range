import absoluteRangeDefaultProps from '../components/absolute/default-props';
import periodDefaultProps from '../components/period/default-props';
import relativeRangeDefaultProps from '../components/relative/default-props';
import RangeTypes from './range-types';
import translationDefaultProps from '../translations/default-props';

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
  translations: translationDefaultProps,
  hidePopover: () => {},
};
