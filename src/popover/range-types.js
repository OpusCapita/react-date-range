import AbsoluteDateRange from '../components/absolute/absolute-date-range.component';
import Period from '../components/period/period.component';
import RelativeDateRange from '../components/relative/relative-date-range.component';

export default {
  period: {
    id: 1,
    component: Period,
    propsKey: 'period',
  },
  relative: {
    id: 2,
    component: RelativeDateRange,
    propsKey: 'relativeRange',
  },
  absolute: {
    id: 3,
    component: AbsoluteDateRange,
    propsKey: 'absoluteRange',
  },
};
