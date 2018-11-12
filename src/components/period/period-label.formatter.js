import Constants from './constants';
import RelativeConstants from '../relative/constants';
import translate from '../../translations/translate';

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

const getLabel = (unit, timing, translations) => {
  switch (unit) {
    case RelativeConstants.MONTH: {
      return translate(translations, 'month', getNounsForm(timing));
    }
    case RelativeConstants.WEEK: {
      return translate(translations, 'week', getNounsForm(timing));
    }
    default: {
      return translate(translations, 'day', getNounsForm(timing));
    }
  }
};

const formatLabel = (endDate, translations) => {
  const { timing, unit } = endDate;
  const count = timing > 0 ? `+${timing}` : timing;
  return ` (${count}) ${getLabel(unit, timing, translations)}`;
};

export default (startDate, endDate, translations) => (
  `${startDate.label || ''}  - ${formatLabel(endDate, translations)}`
);
