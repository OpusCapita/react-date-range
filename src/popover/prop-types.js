import { PropTypes } from 'prop-types';

import RangeTypes from './range-types';
import absoluteRangePropTypes from '../components/absolute/prop-types';
import periodPropTypes from '../components/period/prop-types';
import relativeRangePropTypes from '../components/relative/prop-types';
import translationPropTypes from '../translations/prop-types';

export default {
  absoluteRange: PropTypes.shape(absoluteRangePropTypes),
  enabled: PropTypes.shape({
    absolute: PropTypes.bool,
    period: PropTypes.bool,
    relative: PropTypes.bool,
  }),
  onChange: PropTypes.func,
  onRangeTypeChange: PropTypes.func,
  period: PropTypes.shape(periodPropTypes),
  relativeRange: PropTypes.shape(relativeRangePropTypes),
  selectedRangeType: PropTypes.oneOf(Object.keys(RangeTypes)),
  translations: PropTypes.shape(translationPropTypes),
  hidePopover: PropTypes.func,
};
