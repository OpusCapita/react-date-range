import Constants from './constants';
import RelativeConstants from '../relative/constants';

const getNounsForm = (timing) => {
  switch (Math.abs(timing)) {
    case 1: {
      return Constants.SINGULAR;
    }
    default: {
      return Constants.PLURAL;
    }
  }
};

const getUnit = (unit, translations) => {
  switch (unit) {
    case RelativeConstants.MONTH: {
      return translations.month;
    }
    case RelativeConstants.WEEK: {
      return translations.week;
    }
    default: {
      return translations.day;
    }
  }
};

const formatLabel = (endDate, translations) => {
  const { timing, unit } = endDate;
  const count = timing > 0 ? `+${timing}` : timing;
  return ` (${count}) ${getUnit(unit, translations)[getNounsForm(timing)]}`;
};

export default (startDate, endDate, translations) => (
  `${startDate.label || ''}  - ${formatLabel(endDate, translations)}`
);
