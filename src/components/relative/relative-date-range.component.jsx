/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';

import { FloatingSelect } from '@opuscapita/react-floating-select';
import { Content, theme } from '@opuscapita/oc-cm-common-layouts';

import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';
import Constants from './constants';
import relativeOptions from './relative-options';
import translate from '../../translations/translate';

const RelativeRangeSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: ${theme.gutterWidth} 0 0 0;
`;

export default class RelativeDateRange extends React.PureComponent {
  constructor(props) {
    super(props);

    const { endDate, startDate, translations } = props;
    const options = relativeOptions(translate(translations, 'dates'));
    this.state = {
      endDate,
      endDateOptions: startDate ?
        this.filterEndDateOptions(startDate, options) :
        options,
      startDate,
      startDateOptions: endDate ?
        this.filterStartDateOptions(endDate, options) :
        options,
    };
  }

  filterEndDateOptions = (startDate, endDateOptions) => {
    const options = startDate.past ? endDateOptions :
      endDateOptions.filter(date => !date.past);
    return options.filter(date =>
      date.granularity !== startDate.granularity ||
      startDate.order <= date.order);
  }

  filterStartDateOptions = (endDate, startDateOptions) => {
    const options = endDate.past ?
      startDateOptions.filter(date => date.past) :
      startDateOptions;
    return options.filter(date =>
      date.granularity !== endDate.granularity ||
      date.order <= endDate.order);
  }

  handleStartDateChange = (selectedStartDate) => {
    const startDate = selectedStartDate.value.moment ? selectedStartDate :
      Object.assign(
        {}, selectedStartDate,
        { value: { ...selectedStartDate.value, moment: Constants.START } },
      );
    const endDateOptions = this.filterEndDateOptions(startDate, this.state.endDateOptions);
    const { endDate } = this.state;
    this.setState({ endDateOptions, startDate });
    let state = {
      startDate: startDate.value,
      relativeRange: {
        startDate,
      },
    };
    if (endDate) {
      const endDateValue = endDate.value && !endDate.value.moment
        ? { ...endDate.value, moment: Constants.END }
        : endDate.value;
      state = {
        ...state,
        value: `${startDate.label} - ${endDate.label || ''}`,
        endDate: endDateValue,
        relativeRange: {
          ...state.relativeRange,
          endDate,
        },
      };
    }
    this.props.onChange(state);
  }

  handleEndDateChange = (selectedEndDate) => {
    const endDate = selectedEndDate.value.moment ? selectedEndDate :
      Object.assign(
        {}, selectedEndDate,
        { value: { ...selectedEndDate.value, moment: Constants.END } },
      );
    const startDateOptions = this.filterStartDateOptions(endDate, this.state.startDateOptions);
    const { startDate } = this.state;
    this.setState({ startDateOptions, endDate });
    let state = {
      endDate: endDate.value,
      relativeRange: {
        endDate,
      },
    };
    if (startDate) {
      const startDateValue = startDate.value && !startDate.value.moment
        ? { ...startDate.value, moment: Constants.START }
        : startDate.value;
      state = {
        ...state,
        value: `${startDate.label || ''} - ${endDate.label}`,
        startDate: startDateValue,
        relativeRange: {
          ...state.relativeRange,
          startDate,
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
    const { translations } = this.props;

    return (
      <RelativeRangeSection>
        <DateSection>
          <Content.InputColumn
            className="relative-start-date"
            id="relativeStartDate"
            label={translate(translations, 'startDate')}
          >
            <FloatingSelect
              {...this.props}
              clearable={false}
              onChange={this.handleStartDateChange}
              options={startDateOptions}
              value={startDate}
            />
          </Content.InputColumn>
        </DateSection>
        <Hyphen />
        <DateSection>
          <Content.InputColumn
            className="relative-end-date"
            id="relativeEndDate"
            label={translate(translations, 'endDate')}
          >
            <FloatingSelect
              {...this.props}
              clearable={false}
              onChange={this.handleEndDateChange}
              options={endDateOptions}
              value={endDate}
            />
          </Content.InputColumn>
        </DateSection>
      </RelativeRangeSection>
    );
  }
}

RelativeDateRange.propTypes = propTypes;

RelativeDateRange.defaultProps = defaultProps;
