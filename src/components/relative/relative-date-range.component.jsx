/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';

import { FloatingSelect } from '@opuscapita/react-floating-select';

import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';
import Constants from './constants';

const RelativeRangeSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
  .Select-control {
    border-radius: 0;
  }
`;

export default class RelativeDateRange extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      endDate: props.endDate,
      endDateOptions: props.options,
      startDate: props.startDate,
      startDateOptions: props.options,
    };
  }

  handleStartDateChange = (selectedStartDate) => {
    const startDate = selectedStartDate.value.moment ? selectedStartDate :
      Object.assign({}, selectedStartDate, { value: { ...selectedStartDate.value, moment: Constants.START } });
    let { endDateOptions } = this.state;
    const { endDate } = this.state;
    if (!startDate.past) {
      endDateOptions = endDateOptions.filter(date => !date.past);
    }
    endDateOptions = endDateOptions.filter(date =>
      date.granularity !== startDate.granularity ||
      startDate.order <= date.order);
    this.setState({ endDateOptions, startDate });
    let state = {
      startDate: startDate.value,
      popoverProps: {
        relativeRange: {
          startDate,
        },
      },
    };
    if (endDate) {
      state = {
        ...state,
        value: `${startDate.label} - ${endDate.label}`,
        endDate: endDate.value,
        popoverProps: {
          relativeRange: {
            ...state.popoverProps.relativeRange,
            endDate,
          },
        },
      };
    }
    this.props.onChange(state);
  }

  handleEndDateChange = (selectedEndDate) => {
    const endDate = selectedEndDate.value.moment ? selectedEndDate :
      Object.assign({}, selectedEndDate, { value: { ...selectedEndDate.value, moment: Constants.END } });
    let { startDateOptions } = this.state;
    const { startDate } = this.state;
    if (endDate.past) {
      startDateOptions = startDateOptions.filter(date => date.past);
    }
    startDateOptions.filter(date =>
      date.granularity !== endDate.granularity ||
      date.order <= endDate.order);
    this.setState({ startDateOptions, endDate });
    let state = {
      endDate: endDate.value,
      popoverProps: {
        relativeRange: {
          endDate,
        },
      },
    };
    if (startDate) {
      state = {
        ...state,
        value: `${startDate.label} - ${endDate.label}`,
        startDate: startDate.value,
        popoverProps: {
          relativeRange: {
            ...state.popoverProps.relativeRange,
            startDate,
          },
        },
      };
    }
    this.props.onChange(state);
  }

  render() {
    const {
      startDateOptions,
      endDateOptions,
      startDate,
      endDate,
    } = this.state;

    return (
      <RelativeRangeSection>
        <DateSection>
          <label htmlFor="startDate">{this.props.translations.startDate}</label>
          <FloatingSelect
            {...this.props}
            inputProps={{ name: 'startDate' }}
            onChange={this.handleStartDateChange}
            options={startDateOptions}
            value={startDate}
          />
        </DateSection>
        <Hyphen />
        <DateSection>
          <label htmlFor="endDate">{this.props.translations.endDate}</label>
          <FloatingSelect
            {...this.props}
            inputProps={{ name: 'endDate' }}
            onChange={this.handleEndDateChange}
            options={endDateOptions}
            value={endDate}
          />
        </DateSection>
      </RelativeRangeSection>
    );
  }
}

RelativeDateRange.propTypes = propTypes;

RelativeDateRange.defaultProps = defaultProps;
