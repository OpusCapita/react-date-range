import Constants from './constants';
import values from './values';

export default {
  endDate: undefined,
  onChange: () => {},
  options: [
    {
      label: 'Yesterday',
      value: values.yesterday,
      order: 1,
      granularity: Constants.DAY,
      past: true,
    },
    {
      label: 'Today',
      value: values.today,
      order: 2,
      granularity: Constants.DAY,
    },
    {
      label: 'Tomorrow',
      value: values.tomorrow,
      order: 3,
      granularity: Constants.DAY,
    },
    {
      label: 'Start of the previous week',
      value: values.startOfPreviousWeek,
      order: 1,
      granularity: Constants.WEEK,
      past: true,
    },
    {
      label: 'End of the previous week',
      value: values.endOfPreviousWeek,
      order: 2,
      granularity: Constants.WEEK,
      past: true,
    },
    {
      label: 'Start of the current week',
      value: values.startOfCurrentWeek,
      order: 3,
      granularity: Constants.WEEK,
      past: true, // today
    },
    {
      label: 'End of the current week',
      value: values.endOfCurrentWeek,
      order: 4,
      granularity: Constants.WEEK,
    },
    {
      label: 'Start of the next week',
      value: values.startOfNextWeek,
      order: 5,
      granularity: Constants.WEEK,
    },
    {
      label: 'End of the next week',
      value: values.endOfNextWeek,
      order: 6,
      granularity: Constants.WEEK,
    },
    {
      label: 'Start of the previous month',
      value: values.startOfPreviousMonth,
      order: 1,
      granularity: Constants.MONTH,
      past: true,
    },
    {
      label: 'End of the previous month',
      value: values.endOfPreviousMonth,
      order: 2,
      granularity: Constants.MONTH,
      past: true,
    },
    {
      label: 'Start of the current month',
      value: values.startOfCurrentMonth,
      order: 3,
      granularity: Constants.MONTH,
      past: true, // voi olla myös today
    },
    {
      label: 'End of the current month',
      value: values.endOfCurrentMonth,
      order: 4,
      granularity: Constants.MONTH,
    },
    {
      label: 'Start of the next month',
      value: values.startOfNextMonth,
      order: 5,
      granularity: Constants.MONTH,
    },
    {
      label: 'End of the next month',
      value: values.endOfNextMonth,
      order: 6,
      granularity: Constants.MONTH,
    },
    {
      label: 'Start of the previous year',
      value: values.startOfPreviousYear,
      order: 1,
      granularity: Constants.YEAR,
      past: true,
    },
    {
      label: 'End of the previous year',
      value: values.endOfPreviousYear,
      order: 2,
      granularity: Constants.YEAR,
      past: true,
    },
    {
      label: 'Start of the current year',
      value: values.startOfCurrentYear,
      order: 3,
      granularity: Constants.YEAR,
      past: true, // vai onko? sama kuin today
    },
    {
      label: 'End of the current year',
      value: values.endOfCurrentYear,
      order: 4,
      granularity: Constants.YEAR,
    },
    {
      label: 'Start of the next year',
      value: values.startOfNextYear,
      order: 5,
      granularity: Constants.YEAR,
    },
    {
      label: 'End of the next year',
      value: values.endOfNextYear,
      order: 6,
      granularity: Constants.YEAR,
    },
  ],
  startDate: undefined,
};
