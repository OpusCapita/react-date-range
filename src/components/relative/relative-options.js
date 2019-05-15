import Constants from './constants';
import values from './values';

const relativeOptions = dates => [
  {
    label: dates.yesterday,
    value: values.yesterday,
    order: 1,
    granularity: Constants.DAY,
    past: true,
  },
  {
    label: dates.previousWeekday,
    value: values.previousWeekday,
    order: 1,
    granularity: Constants.WEEKDAY,
  },
  {
    label: dates.today,
    value: values.today,
    order: 2,
    granularity: Constants.DAY,
  },
  {
    label: dates.tomorrow,
    value: values.tomorrow,
    order: 3,
    granularity: Constants.DAY,
  },
  {
    label: dates.followingWeekday,
    value: values.followingWeekday,
    order: 2,
    granularity: Constants.WEEKDAY,
  },
  {
    label: dates.startOfThePreviousWeek,
    value: values.startOfThePreviousWeek,
    order: 1,
    granularity: Constants.WEEK,
    past: true,
  },
  {
    label: dates.endOfThePreviousWeek,
    value: values.endOfThePreviousWeek,
    order: 2,
    granularity: Constants.WEEK,
    past: true,
  },
  {
    label: dates.startOfTheCurrentWeek,
    value: values.startOfTheCurrentWeek,
    order: 3,
    granularity: Constants.WEEK,
    past: true,
  },
  {
    label: dates.endOfTheCurrentWeek,
    value: values.endOfTheCurrentWeek,
    order: 4,
    granularity: Constants.WEEK,
  },
  {
    label: dates.startOfTheNextWeek,
    value: values.startOfTheNextWeek,
    order: 5,
    granularity: Constants.WEEK,
  },
  {
    label: dates.endOfTheNextWeek,
    value: values.endOfTheNextWeek,
    order: 6,
    granularity: Constants.WEEK,
  },
  {
    label: dates.startOfThePreviousMonth,
    value: values.startOfThePreviousMonth,
    order: 1,
    granularity: Constants.MONTH,
    past: true,
  },
  {
    label: dates.endOfThePreviousMonth,
    value: values.endOfThePreviousMonth,
    order: 2,
    granularity: Constants.MONTH,
    past: true,
  },
  {
    label: dates.startOfTheCurrentMonth,
    value: values.startOfTheCurrentMonth,
    order: 3,
    granularity: Constants.MONTH,
    past: true,
  },
  {
    label: dates.endOfTheCurrentMonth,
    value: values.endOfTheCurrentMonth,
    order: 4,
    granularity: Constants.MONTH,
  },
  {
    label: dates.startOfTheNextMonth,
    value: values.startOfTheNextMonth,
    order: 5,
    granularity: Constants.MONTH,
  },
  {
    label: dates.endOfTheNextMonth,
    value: values.endOfTheNextMonth,
    order: 6,
    granularity: Constants.MONTH,
  },
  {
    label: dates.startOfThePreviousYear,
    value: values.startOfThePreviousYear,
    order: 1,
    granularity: Constants.YEAR,
    past: true,
  },
  {
    label: dates.endOfThePreviousYear,
    value: values.endOfThePreviousYear,
    order: 2,
    granularity: Constants.YEAR,
    past: true,
  },
  {
    label: dates.startOfTheCurrentYear,
    value: values.startOfTheCurrentYear,
    order: 3,
    granularity: Constants.YEAR,
    past: true,
  },
  {
    label: dates.endOfTheCurrentYear,
    value: values.endOfTheCurrentYear,
    order: 4,
    granularity: Constants.YEAR,
  },
  {
    label: dates.startOfTheNextYear,
    value: values.startOfTheNextYear,
    order: 5,
    granularity: Constants.YEAR,
  },
  {
    label: dates.endOfTheNextYear,
    value: values.endOfTheNextYear,
    order: 6,
    granularity: Constants.YEAR,
  },
];

const getRelativeOption = (inputDate, dates) => (
  inputDate
    ? relativeOptions(dates).find(option =>
      (!option.value.moment || option.value.moment === inputDate.moment)
      && option.value.unit === inputDate.unit
      && option.value.timing === inputDate.timing)
    : undefined
);

export default relativeOptions;
export { getRelativeOption };
