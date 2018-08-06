import AbsoluteDateRange from '../components/absolute/absolute-date-range.component';
import RelativeDateRange from '../components/relative/relative-date-range.component';

export default translations => ([
  {
    id: 1,
    value: 'absolute',
    label: translations.absolute,
    component: AbsoluteDateRange,
  },
  {
    id: 2,
    value: 'relative',
    label: translations.relative,
    component: RelativeDateRange,
  },
]);