import granularities from './granularities';
import values from './values';

export default {
  value: null,
  onChange: () => {},
  options: [
    {
      label: 'Yesterday',
      value: values.yesterday,
      order: 1,
      granularity: granularities.day,
      past: true,
    },
    {
      label: 'Today',
      value: values.today,
      order: 2,
      granularity: granularities.day,
    },
    {
      label: 'Tomorrow',
      value: values.tomorrow,
      order: 3,
      granularity: granularities.day,
    },
    {
      label: 'Start of the previous week',
      value: values.startOfPreviousWeek,
      order: 1,
      granularity: granularities.week,
      past: true,
    },
    {
      label: 'End of the previous week',
      value: values.endOfPreviousWeek,
      order: 2,
      granularity: granularities.week,
      past: true,
    },
    {
      label: 'Start of the current week',
      value: values.startOfCurrentWeek,
      order: 3,
      granularity: granularities.week,
      past: true, // today
    },
    {
      label: 'End of the current week',
      value: values.endOfCurrentWeek,
      order: 4,
      granularity: granularities.week,
    },
    {
      label: 'Start of the next week',
      value: values.startOfNextWeek,
      order: 5,
      granularity: granularities.week,
    },
    {
      label: 'End of the next week',
      value: values.endOfNextWeek,
      order: 6,
      granularity: granularities.week,
    },
    {
      label: 'Start of the previous month',
      value: values.startOfPreviousMonth,
      order: 1,
      granularity: granularities.month,
      past: true,
    },
    {
      label: 'End of the previous month',
      value: values.endOfPreviousMonth,
      order: 2,
      granularity: granularities.month,
      past: true,
    },
    {
      label: 'Start of the current month',
      value: values.startOfCurrentMonth,
      order: 3,
      granularity: granularities.month,
      past: true, // voi olla myös today
    },
    {
      label: 'End of the current month',
      value: values.endOfCurrentMonth,
      order: 4,
      granularity: granularities.month,
    },
    {
      label: 'Start of the next month',
      value: values.startOfNextMonth,
      order: 5,
      granularity: granularities.month,
    },
    {
      label: 'End of the next month',
      value: values.endOfNextMonth,
      order: 6,
      granularity: granularities.month,
    },
    {
      label: 'Start of the previous year',
      value: values.startOfPreviousYear,
      order: 1,
      granularity: granularities.year,
      past: true,
    },
    {
      label: 'End of the previous year',
      value: values.endOfPreviousYear,
      order: 2,
      granularity: granularities.year,
      past: true,
    },
    {
      label: 'Start of the current year',
      value: values.startOfCurrentYear,
      order: 3,
      granularity: granularities.year,
      past: true, // vai onko? sama kuin today
    },
    {
      label: 'End of the current year',
      value: values.endOfCurrentYear,
      order: 4,
      granularity: granularities.year,
    },
    {
      label: 'Start of the next year',
      value: values.startOfNextYear,
      order: 5,
      granularity: granularities.year,
    },
    {
      label: 'End of the next year',
      value: values.endOfNextYear,
      order: 6,
      granularity: granularities.year,
    },
  ],
};
