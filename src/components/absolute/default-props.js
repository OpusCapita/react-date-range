import moment from 'moment';

export default {
  dateFormat: 'L',
  endDate: moment.utc().endOf('day').toISOString(),
  numberOfMonths: 2,
  onChange: () => {},
  region: 'en_GB',
  showWeekNumbers: true,
  startDate: moment.utc().startOf('day').toISOString(),
};
