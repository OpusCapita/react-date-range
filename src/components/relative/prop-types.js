import { PropTypes } from 'prop-types';
import constants from './constants';

const relativeDate = PropTypes.shape({
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  value: PropTypes.string.isRequired,
  granularity: PropTypes.oneOf(Object.keys(constants)).isRequired,
  past: PropTypes.bool,
});

export default {
  endDate: relativeDate,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(relativeDate),
  startDate: relativeDate,
};
