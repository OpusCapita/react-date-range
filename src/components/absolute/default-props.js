import moment from 'moment';

export default {
  dateFormat: 'L',
  endDate: moment.utc().toISOString(),
  onChange: () => {},
  region: 'en_GB',
  showWeekNumbers: true,
  startDate: moment.utc().toISOString(),
};
