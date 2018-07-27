import absoluteRangeDefaultProps from '../components/absolute/default-props';
import relativeRangeDefaultProps from '../components/relative/default-props';

export default {
  ...absoluteRangeDefaultProps,
  ...relativeRangeDefaultProps,
  selectedRangeType: null,
  translations: {
    absolute: 'Absolute',
    relative: 'Relative',
    anchorDate: 'Anchor date',
  },
};
