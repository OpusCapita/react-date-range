import { PropTypes } from 'prop-types';

const valueShape = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.string,
}

export default {
  value: PropTypes.shape(valueShape),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape(valueShape)),
};
