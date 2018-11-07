import { PropTypes } from 'prop-types';

export default PropTypes.shape({
  absolute: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  dates: PropTypes.shape({
    endOfTheCurrentMonth: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    endOfTheCurrentWeek: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    endOfTheCurrentYear: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    endOfTheNextMonth: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    endOfTheNextWeek: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    endOfTheNextYear: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    endOfThePreviousMonth: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    endOfThePreviousWeek: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    endOfThePreviousYear: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startOfTheCurrentMonth: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startOfTheCurrentWeek: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startOfTheCurrentYear: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startOfTheNextMonth: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startOfTheNextWeek: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startOfTheNextYear: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startOfThePreviousMonth: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startOfThePreviousWeek: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    startOfThePreviousYear: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    today: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    tomorrow: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    yesterday: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  }),
  day: PropTypes.shape({
    plural: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    singular: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  }),
  endDate: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  from: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  month: PropTypes.shape({
    plural: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    singular: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  }),
  period: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  relative: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  startDate: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  to: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  week: PropTypes.shape({
    plural: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    singular: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  }),
});

