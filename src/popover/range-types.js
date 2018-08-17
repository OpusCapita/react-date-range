import AbsoluteDateRange from '../components/absolute/absolute-date-range.component';
import RelativeDateRange from '../components/relative/relative-date-range.component';

export default {
  absolute: {
    id: 1,
    component: AbsoluteDateRange,
    propsKey: 'absoluteRange',
  },
  relative: {
    id: 2,
    component: RelativeDateRange,
    propsKey: 'relativeRange',
  },
};
