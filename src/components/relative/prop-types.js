import { PropTypes } from 'prop-types';

export default {
  value: PropTypes.object,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
};
