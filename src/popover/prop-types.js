import { PropTypes } from 'prop-types';

import RangeTypes from './range-types';
import absoluteRangePropTypes from '../components/absolute/prop-types';
import relativeRangePropTypes from '../components/relative/prop-types';

export default {
  ...absoluteRangePropTypes,
  ...relativeRangePropTypes,
  onChange: PropTypes.func,
  selectedRangeType: PropTypes.oneOf(RangeTypes({}).map(type => type.value)),
  translations: PropTypes.shape({
    absolute: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    relative: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    anchorDate: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  }),
};
