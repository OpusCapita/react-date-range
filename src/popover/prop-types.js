import { PropTypes } from 'prop-types';

import RangeTypes from './range-types';
import absoluteRangePropTypes from '../components/absolute/prop-types';
import periodPropTypes from '../components/period/prop-types';
import relativeRangePropTypes from '../components/relative/prop-types';

export default {
  absoluteRange: PropTypes.shape(absoluteRangePropTypes),
  enabled: PropTypes.shape({
    absolute: PropTypes.bool,
    period: PropTypes.bool,
    relative: PropTypes.bool,
  }),
  selectedRangeType: PropTypes.oneOf(Object.keys(RangeTypes)),
  onChange: PropTypes.func,
  onRangeTypeChange: PropTypes.func,
  period: PropTypes.shape(periodPropTypes),
  relativeRange: PropTypes.shape(relativeRangePropTypes),
  translations: PropTypes.shape({
    absolute: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    day: PropTypes.shape({
      plural: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      singular: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    }),
    endDate: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    from: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    month: PropTypes.shape({
      plural: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      singular: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    }),
    period: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    relative: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startDate: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    to: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    week: PropTypes.shape({
      plural: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      singular: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    }),
  }),
};
