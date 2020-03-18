/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-return-assign */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { DateInput } from '@opuscapita/react-datetime';
import { Content, theme } from '@opuscapita/oc-cm-common-layouts';

import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';
import Overlays from './overlays';
import translate from '../../translations/translate';

const AbsoluteRangeSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: ${theme.gutterWidth} 0 0 0;
  .form-group {
    margin-bottom: 0;
  }
  .oc-datetime-static-container {
    margin-top: ${theme.gutterWidth};
  }
  .oc-datetime.start-date {
    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--outside) {
      background-color: #ffdbc2;
      color: ${theme.colors.grey10};
    }
  }
  .oc-datetime.end-date {
    .DayPicker-Day--selected:not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      background-color: #ffdbc2;
      color: ${theme.colors.grey10};
    }
  }
`;

export default class AbsoluteDateRange extends React.PureComponent {
  constructor(props) {
    super(props);
    const { startDate, endDate } = this.props;
    /* eslint-disable max-len */
    const utcStartDate = moment(startDate).isValid() ? moment.utc(startDate).startOf('day').toISOString() : startDate;
    let utcEndDate = moment(endDate).isValid() ? moment.utc(endDate).startOf('day').toISOString() : endDate;
    utcEndDate = moment(utcStartDate).isValid() && moment(utcEndDate).isValid() && moment(utcEndDate).isBefore(moment(utcStartDate)) ? utcStartDate : utcEndDate;
    const disabledStartDays = moment(utcEndDate).isValid() ? { after: new Date(utcEndDate) } : null;
    const disabledEndDays = moment(utcStartDate).isValid() ? { before: new Date(utcStartDate) } : null;
    /* eslint-enable max-len */
    this.state = {
      startDate: utcStartDate,
      startDateId: `start-date-${uuidv4()}`,
      endDate: utcEndDate,
      endDateId: `end-date-${uuidv4()}`,
      disabledStartDays,
      disabledEndDays,
    };
  }

  componentDidMount = () => {
    const { showOverlay } = this.props;
    if (this.from && showOverlay === Overlays.START) {
      this.from.focus();
    } else if (this.to && showOverlay === Overlays.END) {
      this.to.focus();
    }
  }

  handleStartDayClick = () => {
    this.from = undefined;
  }

  isYearAutoFixed = (selector, startDate) => {
    const inputValue = document.querySelector(selector).value;
    console.log(inputValue); // 16/03/20
    const year = startDate.year();
    const epoch = moment.unix(0).year();
    console.log(year, epoch); // 2020, 1970
    console.log(year < epoch, !inputValue.includes(year)); // false, true
    return year < epoch || !inputValue.includes(year);
  }

  handleStartDateChange = (date) => {
    const { dateFormat, onChange } = this.props;
    let startDate = date;
    let from = moment.utc(startDate);
    if (!from.isValid()) return;
    const { startDateId } = this.state;

    if (this.isYearAutoFixed(`.absolute-start-date #${startDateId}`, from)) return;

    const { endDate } = this.state;
    const absoluteRange = {
      startDate,
      showOverlay: Overlays.START,
    };
    let state;
    if (!endDate) {
      state = {
        startDate,
        absoluteRange,
      };
    } else {
      const to = moment.utc(endDate);
      if (from.isAfter(to)) {
        startDate = endDate;
        from = to;
      }
      state = {
        startDate,
        endDate: to.endOf('day').toISOString(),
        value: `${from.format(dateFormat)} - ${to.format(dateFormat)}`,
        absoluteRange: {
          ...absoluteRange,
          startDate,
          endDate,
        },
      };
    }
    const disabledEndDays = { before: new Date(startDate) };
    this.setState({ startDate, disabledEndDays });
    onChange(state);
  }

  handleInputChange = (inputDate, handleChange) => {
    const { dateFormat } = this.props;
    const utcDate = moment.utc(inputDate, dateFormat, true);
    if (utcDate.isValid()) {
      handleChange(utcDate.toISOString());
    }
  }

  handleInputBlur = (e, currentValue, handleChange) => {
    if (!e) return;
    const { dateFormat } = this.props;
    const { value } = e.target;
    const utcDate = value ? moment.utc(value, dateFormat).toISOString() : value;
    if (utcDate !== currentValue) handleChange(utcDate);
  }

  handleEndDayClick = () => {
    this.to = undefined;
  }

  handleEndDateChange = (date) => {
    const { dateFormat, onChange } = this.props;
    let endDate = date;
    let to = moment.utc(endDate);
    if (!to.isValid()) return;
    const { endDateId } = this.state;
    if (this.isYearAutoFixed(`.absolute-end-date #${endDateId}`, to)) return;

    const { startDate } = this.state;
    const absoluteRange = {
      endDate,
      showOverlay: Overlays.END,
    };

    let state;
    if (!startDate) {
      state = {
        endDate,
        absoluteRange,
      };
    } else {
      const from = moment.utc(startDate);
      if (to.isBefore(from)) {
        endDate = startDate;
        to = from;
      }
      state = {
        startDate: from.startOf('day').toISOString(),
        endDate: to.endOf('day').toISOString(),
        value: `${from.format(dateFormat)} - ${to.format(dateFormat)}`,
        absoluteRange: {
          ...absoluteRange,
          endDate,
          startDate,
        },
      };
    }
    const disabledStartDays = { after: new Date(endDate) };
    this.setState({ endDate, disabledStartDays });
    onChange(state);
  }

  render() {
    const {
      className,
      region,
      dateFormat,
      numberOfMonths,
      showOverlay,
      showWeekNumbers,
      translations,
    } = this.props;
    const {
      disabledEndDays,
      disabledStartDays,
      startDate,
      startDateId,
      endDate,
      endDateId,
    } = this.state;
    const {
      handleEndDateChange,
      handleStartDateChange,
    } = this;
    const from = new Date(startDate);
    const to = new Date(endDate);
    const modifiers = { start: from, end: to };
    return (
      <AbsoluteRangeSection>
        <DateSection>
          <Content.InputColumn
            className="absolute-start-date"
            id="absoluteStartDate"
            label={translate(translations, 'startDate')}
          >
            <DateInput
              className={`${className} start-date`}
              dateFormat={dateFormat}
              disabledDays={disabledStartDays}
              locale={region}
              modifiers={modifiers}
              numberOfMonths={numberOfMonths}
              onChange={this.handleStartDateChange}
              inputProps={{
                id: startDateId,
                onChange: (inputDate) => this.handleInputChange(inputDate, handleStartDateChange),
                onBlur: (e) => this.handleInputBlur(e, startDate, handleStartDateChange),
              }}
              inputRef={(el) => (this.from = el)}
              selectedDays={[from, { from, to }]}
              showClearValue={false}
              showOverlay={showOverlay === Overlays.START}
              showWeekNumbers={showWeekNumbers}
              toMonth={to}
              value={startDate}
              calendarType="static"
            />
          </Content.InputColumn>
        </DateSection>
        <Hyphen />
        <DateSection>
          <Content.InputColumn
            className="absolute-end-date"
            id="absoluteEndDate"
            label={translate(translations, 'endDate')}
          >
            <DateInput
              className={`${className} end-date`}
              dateFormat={dateFormat}
              disabledDays={disabledEndDays}
              fromMonth={from}
              locale={region}
              modifiers={modifiers}
              month={from}
              numberOfMonths={numberOfMonths}
              onChange={this.handleEndDateChange}
              inputProps={{
                id: endDateId,
                onChange: (inputDate) => this.handleInputChange(inputDate, handleEndDateChange),
                onBlur: (e) => this.handleInputBlur(e, endDate, handleEndDateChange),
              }}
              inputRef={(el) => (this.to = el)}
              selectedDays={[from, { from, to }]}
              showClearValue={false}
              showOverlay={showOverlay === Overlays.END}
              showWeekNumbers={showWeekNumbers}
              value={endDate}
              calendarType="static"
            />
          </Content.InputColumn>
        </DateSection>
      </AbsoluteRangeSection>
    );
  }
}

AbsoluteDateRange.propTypes = propTypes;

AbsoluteDateRange.defaultProps = defaultProps;
