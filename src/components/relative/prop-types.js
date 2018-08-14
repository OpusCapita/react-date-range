import { PropTypes } from 'prop-types';
import granularities from './granularities';

const relativeDate = PropTypes.shape({
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  value: PropTypes.string.isRequired,
  granularity: PropTypes.oneOf(Object.keys(granularities)).isRequired,
  past: PropTypes.bool,
});

export default {
  endDate: relativeDate,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(relativeDate),
  startDate: relativeDate,
};
