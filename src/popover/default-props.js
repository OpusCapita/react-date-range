import absoluteRangeDefaultProps from '../components/absolute/default-props';
import periodDefaultProps from '../components/period/default-props';
import relativeRangeDefaultProps from '../components/relative/default-props';
import RangeTypes from './range-types';

export default {
  absoluteRange: absoluteRangeDefaultProps,
  enabled: {
    absolute: true,
    period: false,
    relative: false,
  },
  onChange: () => {},
  onRangeTypeChange: () => {},
  period: periodDefaultProps,
  relativeRange: relativeRangeDefaultProps,
  selectedRangeType: Object.keys(RangeTypes)[0],
  translations: {
    absolute: 'Absolute',
    dates: {
      endOfTheCurrentMonth: 'End of the current month',
      endOfTheCurrentWeek: 'End of the current week',
      endOfTheCurrentYear: 'End of the current year',
      endOfTheNextMonth: 'End of the next month',
      endOfTheNextWeek: 'End of the next week',
      endOfTheNextYear: 'End of the next year',
      endOfThePreviousMonth: 'End of the previous month',
      endOfThePreviousWeek: 'End of the previous week',
      endOfThePreviousYear: 'End of the previous year',
      startOfTheCurrentMonth: 'Start of the current month',
      startOfTheCurrentWeek: 'Start of the current week',
      startOfTheCurrentYear: 'Start of the current year',
      startOfTheNextMonth: 'Start of the next month',
      startOfTheNextWeek: 'Start of the next week',
      startOfTheNextYear: 'Start of the next year',
      startOfThePreviousMonth: 'Start of the previous month',
      startOfThePreviousWeek: 'Start of the previous week',
      startOfThePreviousYear: 'Start of the previous year',
      today: 'Today',
      tomorrow: 'Tomorrow',
      yesterday: 'Yesterday',
    },
    day: {
      plural: 'days',
      singular: 'day',
    },
    endDate: 'Last day',
    from: 'From',
    month: {
      plural: 'months',
      singular: 'month',
    },
    period: 'Period',
    relative: 'Relative',
    startDate: 'First day',
    to: 'To',
    week: {
      plural: 'weeks',
      singular: 'week',
    },
  },
};
