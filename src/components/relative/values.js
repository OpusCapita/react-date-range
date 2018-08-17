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
  startOfPreviousWeek: {
    unit: Constants.WEEK,
    timing: Constants.PREVIOUS,
    moment: Constants.START,
  },
  endOfPreviousWeek: {
    unit: Constants.WEEK,
    timing: Constants.PREVIOUS,
    moment: Constants.END,
  },
  startOfCurrentWeek: {
    unit: Constants.WEEK,
    timing: Constants.CURRENT,
    moment: Constants.START,
  },
  endOfCurrentWeek: {
    unit: Constants.WEEK,
    timing: Constants.CURRENT,
    moment: Constants.END,
  },
  startOfNextWeek: {
    unit: Constants.WEEK,
    timing: Constants.NEXT,
    moment: Constants.START,
  },
  endOfNextWeek: {
    unit: Constants.WEEK,
    timing: Constants.NEXT,
    moment: Constants.END,
  },
  startOfPreviousMonth: {
    unit: Constants.MONTH,
    timing: Constants.PREVIOUS,
    moment: Constants.START,
  },
  endOfPreviousMonth: {
    unit: Constants.MONTH,
    timing: Constants.PREVIOUS,
    moment: Constants.END,
  },
  startOfCurrentMonth: {
    unit: Constants.MONTH,
    timing: Constants.CURRENT,
    moment: Constants.START,
  },
  endOfCurrentMonth: {
    unit: Constants.MONTH,
    timing: Constants.CURRENT,
    moment: Constants.END,
  },
  startOfNextMonth: {
    unit: Constants.MONTH,
    timing: Constants.NEXT,
    moment: Constants.START,
  },
  endOfNextMonth: {
    unit: Constants.MONTH,
    timing: Constants.NEXT,
    moment: Constants.END,
  },
  startOfPreviousYear: {
    unit: Constants.YEAR,
    timing: Constants.PREVIOUS,
    moment: Constants.START,
  },
  endOfPreviousYear: {
    unit: Constants.YEAR,
    timing: Constants.PREVIOUS,
    moment: Constants.END,
  },
  startOfCurrentYear: {
    unit: Constants.YEAR,
    timing: Constants.CURRENT,
    moment: Constants.START,
  },
  endOfCurrentYear: {
    unit: Constants.YEAR,
    timing: Constants.CURRENT,
    moment: Constants.END,
  },
  startOfNextYear: {
    unit: Constants.YEAR,
    timing: Constants.NEXT,
    moment: Constants.START,
  },
  endOfNextYear: {
    unit: Constants.YEAR,
    timing: Constants.NEXT,
    moment: Constants.END,
  },
};
