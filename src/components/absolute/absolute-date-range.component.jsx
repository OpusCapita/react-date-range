/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-return-assign */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import { DateInput } from '@opuscapita/react-datetime';
import { Content } from '@opuscapita/oc-cm-common-layouts';

import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';
import Overlays from './overlays';
import translate from '../../translations/translate';

const AbsoluteRangeSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 1rem 0 0 0;
  align-items: center;
  .form-group {
    margin-bottom: 0;
  }
`;

export default class AbsoluteDateRange extends React.PureComponent {
  constructor(props) {
    super(props);
    const { startDate, endDate } = this.props;
    const utcStartDate = moment(startDate).isValid() ? moment.utc(startDate).startOf('day').toISOString() : startDate;
    let utcEndDate = moment(endDate).isValid() ? moment.utc(endDate).startOf('day').toISOString() : endDate;
    utcEndDate = moment(utcStartDate).isValid() && moment(utcEndDate).isValid() &&
      moment(utcEndDate).isBefore(moment(utcStartDate)) ?
      utcStartDate :
      utcEndDate;
    const disabledStartDays = moment(utcEndDate).isValid() ? { after: new Date(utcEndDate) } : null;
    const disabledEndDays = moment(utcStartDate).isValid() ?
      { before: new Date(utcStartDate) } : null;
    this.state = {
      startDate: utcStartDate,
      endDate: utcEndDate,
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
    const year = startDate.year();
    const epoch = moment.unix(0).year();
    return year < epoch || !inputValue.includes(year);
  }

  handleStartDateChange = (date) => {
    let startDate = date;
    let from = moment.utc(startDate);
    if (!from.isValid()) return;
    if (this.isYearAutoFixed('.absolute-start-date input', from)) return;

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
        value: `${from.format(this.props.dateFormat)} - ${to.format(this.props.dateFormat)}`,
        absoluteRange: {
          ...absoluteRange,
          startDate,
          endDate,
        },
      };
    }
    const disabledEndDays = { before: new Date(startDate) };
    this.setState({ startDate, disabledEndDays });
    this.props.onChange(state);
  }

  handleEndDayClick = () => {
    this.to = undefined;
  }

  handleEndDateChange = (date) => {
    let endDate = date;
    let to = moment.utc(endDate);
    if (!to.isValid()) return;
    if (this.isYearAutoFixed('.absolute-end-date input', to)) return;

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
        value: `${from.format(this.props.dateFormat)} - ${to.format(this.props.dateFormat)}`,
        absoluteRange: {
          ...absoluteRange,
          endDate,
          startDate,
        },
      };
    }
    const disabledStartDays = { after: new Date(endDate) };
    this.setState({ endDate, disabledStartDays });
    this.props.onChange(state);
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
      endDate,
    } = this.state;
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
              inputRef={el => (this.from = el)}
              selectedDays={[from, { from, to }]}
              showOverlay={showOverlay === Overlays.START}
              showWeekNumbers={showWeekNumbers}
              toMonth={to}
              value={startDate}
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
              inputRef={el => (this.to = el)}
              selectedDays={[from, { from, to }]}
              showOverlay={showOverlay === Overlays.END}
              showWeekNumbers={showWeekNumbers}
              value={endDate}
            />
          </Content.InputColumn>
        </DateSection>
      </AbsoluteRangeSection>
    );
  }
}

AbsoluteDateRange.propTypes = propTypes;

AbsoluteDateRange.defaultProps = defaultProps;
