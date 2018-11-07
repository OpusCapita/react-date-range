import Constants from './constants';

export default {
  yesterday: {
    unit: Constants.DAY,
    timing: Constants.PREVIOUS,
  },
  today: {
    unit: Constants.DAY,
    timing: Constants.CURRENT,
  },
  tomorrow: {
    unit: Constants.DAY,
    timing: Constants.NEXT,
  },
  startOfThePreviousWeek: {
    unit: Constants.WEEK,
    timing: Constants.PREVIOUS,
    moment: Constants.START,
  },
  endOfThePreviousWeek: {
    unit: Constants.WEEK,
    timing: Constants.PREVIOUS,
    moment: Constants.END,
  },
  startOfTheCurrentWeek: {
    unit: Constants.WEEK,
    timing: Constants.CURRENT,
    moment: Constants.START,
  },
  endOfTheCurrentWeek: {
    unit: Constants.WEEK,
    timing: Constants.CURRENT,
    moment: Constants.END,
  },
  startOfTheNextWeek: {
    unit: Constants.WEEK,
    timing: Constants.NEXT,
    moment: Constants.START,
  },
  endOfTheNextWeek: {
    unit: Constants.WEEK,
    timing: Constants.NEXT,
    moment: Constants.END,
  },
  startOfThePreviousMonth: {
    unit: Constants.MONTH,
    timing: Constants.PREVIOUS,
    moment: Constants.START,
  },
  endOfThePreviousMonth: {
    unit: Constants.MONTH,
    timing: Constants.PREVIOUS,
    moment: Constants.END,
  },
  startOfTheCurrentMonth: {
    unit: Constants.MONTH,
    timing: Constants.CURRENT,
    moment: Constants.START,
  },
  endOfTheCurrentMonth: {
    unit: Constants.MONTH,
    timing: Constants.CURRENT,
    moment: Constants.END,
  },
  startOfTheNextMonth: {
    unit: Constants.MONTH,
    timing: Constants.NEXT,
    moment: Constants.START,
  },
  endOfTheNextMonth: {
    unit: Constants.MONTH,
    timing: Constants.NEXT,
    moment: Constants.END,
  },
  startOfThePreviousYear: {
    unit: Constants.YEAR,
    timing: Constants.PREVIOUS,
    moment: Constants.START,
  },
  endOfThePreviousYear: {
    unit: Constants.YEAR,
    timing: Constants.PREVIOUS,
    moment: Constants.END,
  },
  startOfTheCurrentYear: {
    unit: Constants.YEAR,
    timing: Constants.CURRENT,
    moment: Constants.START,
  },
  endOfTheCurrentYear: {
    unit: Constants.YEAR,
    timing: Constants.CURRENT,
    moment: Constants.END,
  },
  startOfTheNextYear: {
    unit: Constants.YEAR,
    timing: Constants.NEXT,
    moment: Constants.START,
  },
  endOfTheNextYear: {
    unit: Constants.YEAR,
    timing: Constants.NEXT,
    moment: Constants.END,
  },
};
