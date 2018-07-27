import AbsoluteDateRange from '../components/absolute/absolute-date-range.component';

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
    component: null,
  },
  {
    id: 3,
    value: 'anchor',
    label: translations.anchorDate,
    component: null,
  },
]);