import Granularities from './granularities';

export default {
  value: null,
  onChange: () => {},
  options: [
    {
      label: 'Today',
      value: 1,
      granularity: Granularities.day,
      past: false,
    },
    {
      label: 'Tomorrow',
      value: 2,
      granularity: Granularities.day,
      past: false,
    },
    {
      label: 'Yesterday',
      value: 3,
      granularity: Granularities.day,
      past: true,
    },
    {
      label: '(Spot / T+2)',
      value: 4,
      granularity: Granularities.day,
      past: false,
    },
    {
      label: 'Start of the previous year',
      value: 5,
      order: 1,
      granularity: Granularities.year,
      past: true,
    },
    {
      label: 'End of the previous year',
      value: 6,
      order: 2,
      granularity: Granularities.year,
      past: true,
    },
    {
      label: 'Start of the current year',
      value: 7,
      order: 3,
      granularity: Granularities.year,
      past: true, //vai onko? sama kuin today
    },
    {
      label: 'End of the current year',
      value: 8,
      order: 4,
      granularity: Granularities.year,
      past: false,
    },
    {
      label: 'Start of the previous month',
      value: 9,
      granularity: Granularities.month,
      past: true,
    },
    {
      label: 'End of the previous month',
      value: 10,
      granularity: Granularities.month,
      past: true,
    },
    {
      label: 'Start of the current month',
      value: 11,
      granularity: Granularities.month,
      past: true, // voi olla myös today
    },
    {
      label: 'End of the current month',
      value: 12,
      granularity: Granularities.month,
      past: false,
    },
    {
      label: 'Start of the previous week',
      value: 13,
      granularity: Granularities.week,
      past: true,
    },
    {
      label: 'End of the previous week',
      value: 14,
      granularity: Granularities.week,
      past: true,
    },
    {
      label: 'Start of the current week',
      value: 15,
      granularity: Granularities.week,
      past: true, //today
    },
    {
      label: 'End of the current week',
      value: 16,
      granularity: Granularities.week,
      past: false,
    },
    {
      label: 'Start of the next week',
      value: 17,
      granularity: Granularities.week,
      past: false,
    },
    {
      label: 'End of the next week',
      value: 18,
      granularity: Granularities.week,
      past: false,
    },
    {
      label: 'Start of the next month',
      value: 19,
      granularity: Granularities.month,
      past: false,
    },
    {
      label: 'End of the next month',
      value: 20,
      granularity: Granularities.month,
      past: false,
    },
    {
      label: 'Start of the next year',
      value: 21,
      order: 5,
      granularity: Granularities.year,
      past: false,
    },
    {
      label: 'End of the next year',
      value: 22,
      order: 6,
      granularity: Granularities.year,
      past: false,
    },
  ],
};
