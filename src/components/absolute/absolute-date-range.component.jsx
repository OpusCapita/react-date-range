/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import { DateInput } from '@opuscapita/react-datetime';

import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';

const AbsoluteRangeSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
  align-items: center;
  .form-group {
    margin-bottom: 0;
  }
`;

export default class AbsoluteDateRange extends React.PureComponent {
  constructor(props) {
    super(props);
    const { startDate, endDate } = this.props;
    const disabledStartDays = moment(endDate).isValid() ? { after: new Date(endDate) } : null;
    const disabledEndDays = moment(startDate).isValid() ? { before: new Date(startDate) } : null;
    this.state = {
      startDate,
      endDate,
      disabledStartDays,
      disabledEndDays,
    };
  }

  handleStartDateChange = (date) => {
    let startDate = date;
    let from = moment.utc(startDate);
    if (!from.isValid()) {
      return;
    }

    const { endDate } = this.state;
    let state;
    if (!endDate) {
      state = {
        startDate,
        popoverProps: {
          absoluteRange: {
            startDate,
          },
        },
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
        popoverProps: {
          absoluteRange: {
            startDate,
            endDate,
          },
        },
      };
    }
    const disabledEndDays = { before: new Date(startDate) };
    this.setState({ startDate, disabledEndDays });
    this.props.onChange(state);
  }

  handleEndDateChange = (date) => {
    let endDate = date;
    let to = moment.utc(endDate);
    if (!to.isValid()) {
      return;
    }

    const { startDate } = this.state;
    let state;
    if (!startDate) {
      state = {
        endDate,
        popoverProps: {
          absoluteRange: {
            endDate,
          },
        },
      };
    } else {
      const from = moment.utc(startDate);
      if (to.isBefore(from)) {
        endDate = startDate;
        to = from;
      }
      state = {
        startDate,
        endDate: to.endOf('day').toISOString(),
        value: `${from.format(this.props.dateFormat)} - ${to.format(this.props.dateFormat)}`,
        popoverProps: {
          absoluteRange: {
            endDate,
            startDate,
          },
        },
      };
    }
    const disabledStartDays = { after: new Date(endDate) };
    this.setState({ endDate, disabledStartDays });
    this.props.onChange(state);
  }

  render() {
    const {
      region,
      dateFormat,
      numberOfMonths,
      showWeekNumbers,
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
          <label htmlFor="startDate">{this.props.translations.startDate}</label>
          <DateInput
            dateFormat={dateFormat}
            disabledDays={disabledStartDays}
            locale={region}
            modifiers={modifiers}
            numberOfMonths={2}
            onChange={this.handleStartDateChange}
            onDayClick={() => this.to.input.focus()}
            selectedDays={[from, { from, to }]}
            showWeekNumbers={showWeekNumbers}
            toMonth={to}
            value={startDate}
          />
        </DateSection>
        <Hyphen />
        <DateSection>
          <label htmlFor="endDate">{this.props.translations.endDate}</label>
          <DateInput
            dateFormat={dateFormat}
            disabledDays={disabledEndDays}
            fromMonth={from}
            locale={region}
            modifiers={modifiers}
            month={from}
            numberOfMonths={numberOfMonths}
            onChange={this.handleEndDateChange}
            ref={el => (this.to = el)}
            selectedDays={[from, { from, to }]}
            showWeekNumbers={showWeekNumbers}
            value={endDate}
          />
        </DateSection>
      </AbsoluteRangeSection>
    );
  }
}

AbsoluteDateRange.propTypes = propTypes;

AbsoluteDateRange.defaultProps = defaultProps;

