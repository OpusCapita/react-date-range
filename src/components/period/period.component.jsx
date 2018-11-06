/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';

import { FloatingSelect } from '@opuscapita/react-floating-select';
import { Content, Primitive, theme } from '@opuscapita/oc-cm-common-layouts';

import Constants from './constants';
import RelativeConstants from '../relative/constants';
import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';

const PeriodSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: ${theme.gutterWidth} 0 0 0;
`;

const CountSection = styled(Content.InputColumn)`
  width: 80px;
`;

const GranularitySection = styled(Content.InputColumn)`
  align-self: flex-end;
  width: 140px;
  margin-left: ${theme.halfGutterWidth};
`;

export default class Period extends React.PureComponent {
  constructor(props) {
    super(props);

    const { endDate, startDate } = props;
    this.state = {
      endDate,
      startDate,
    };
  }

  getGranularityOptions = () => {
    const { translations } = this.props;
    return [
      {
        label: translations.day.plural,
        value: RelativeConstants.DAY,
      },
      {
        label: translations.week.plural,
        value: RelativeConstants.WEEK,
      },
      {
        label: translations.month.plural,
        value: RelativeConstants.MONTH,
      },
    ];
  };

  getNounsForm = (timing) => {
    switch (Math.abs(timing)) {
      case 1: {
        return Constants.SINGULAR;
      }
      default: {
        return Constants.PLURAL;
      }
    }
  }

  getUnit = (unit) => {
    const { translations } = this.props;
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
  }

  getSelectedGranularity = (granularities, value) => (
    granularities.find(granularity => granularity.value === value) || granularities[0]
  );

  formatLabel = (endDate) => {
    const { timing, unit } = endDate;
    const count = timing > 0 ? `+${timing}` : timing;
    return `(${count}) ${this.getUnit(unit)[this.getNounsForm(timing)]}`;
  }

  handleStartDateChange = (selectedStartDate) => {
    const startDate = selectedStartDate.value.moment ? selectedStartDate :
      Object.assign(
        {}, selectedStartDate,
        { value: { ...selectedStartDate.value, moment: RelativeConstants.START } },
      );
    const { endDate } = this.state;
    this.setState({ startDate });
    const state = {
      startDate: startDate.value,
      value: `${startDate.label} - ${this.formatLabel(endDate)}`,
      popoverProps: {
        relativeRange: {
          startDate,
          endDate,
        },
      },
    };
    this.props.onChange(state);
  }

  handleEndDateChange = (timing = 0) => {
    const { endDate, startDate } = this.state;
    const selectedEndDate = {
      ...startDate,
      timing,
    };
    this.setState({ endDate: selectedEndDate });
    let state = {
      endDate: selectedEndDate,
      popoverProps: {
        relativeRange: {
          endDate: selectedEndDate,
        },
      },
    };
    if (startDate) {
      const startDateValue = startDate.value && !startDate.value.moment
        ? { ...startDate.value, moment: RelativeConstants.START }
        : startDate.value;
      state = {
        ...state,
        value: `${startDate.label || ''} - ${this.formatLabel(endDate)}`,
        startDate: startDateValue,
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
    const { relativeDateOptions } = this.props;
    const { endDate, startDate } = this.state;
    const granularities = this.getGranularityOptions();

    return (
      <PeriodSection>
        <DateSection>
          <Content.InputColumn
            className="period-start-date"
            id="periodStartDate"
            label={this.props.translations.from}
          >
            <FloatingSelect
              {...this.props}
              clearable={false}
              onChange={this.handleStartDateChange}
              options={relativeDateOptions}
              value={startDate}
            />
          </Content.InputColumn>
        </DateSection>
        <Hyphen />
        <CountSection
          className="period-end-date"
          id="periodEndDate"
          label={this.props.translations.to}
        >
          <Primitive.Input value={endDate.timing} type="number" onChange={this.handleEndDateChange} />
        </CountSection>
        <GranularitySection
          className="period-granularity"
          id="periodGranularity"
        >
          <FloatingSelect
            {...this.props}
            clearable={false}
            onChange={this.handleGranularityChange}
            options={granularities}
            value={this.getSelectedGranularity(granularities, endDate.unit)}
          />
        </GranularitySection>
      </PeriodSection>
    );
  }
}

Period.propTypes = propTypes;

Period.defaultProps = defaultProps;
