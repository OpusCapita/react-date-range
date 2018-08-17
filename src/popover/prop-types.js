import { PropTypes } from 'prop-types';

import RangeTypes from './range-types';
import absoluteRangePropTypes from '../components/absolute/prop-types';
import relativeRangePropTypes from '../components/relative/prop-types';

export default {
  absoluteRange: PropTypes.shape(absoluteRangePropTypes),
  isRelativeEnabled: PropTypes.bool,
  selectedRangeType: PropTypes.oneOf(Object.keys(RangeTypes)),
  onChange: PropTypes.func,
  relativeRange: PropTypes.shape(relativeRangePropTypes),
  translations: PropTypes.shape({
    absolute: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    endDate: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    relative: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startDate: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  }),
};
