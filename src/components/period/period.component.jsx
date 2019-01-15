/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';

import { FloatingSelect } from '@opuscapita/react-floating-select';
import { Content, Primitive, theme } from '@opuscapita/oc-cm-common-layouts';

import DateSection from '../date-section.components';
import defaultProps from './default-props';
import formatLabel from './period-label.formatter';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import RelativeConstants from '../relative/constants';
import relativeDateOptions from '../relative/relative-options';
import translate from '../../translations/translate';

const PeriodSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: ${theme.gutterWidth} 0 0 0;
  margin-bottom: 0;
`;

const CountSection = styled(Content.InputColumn)`
  width: 80px;
  margin-bottom: 0;
`;

const GranularitySection = styled(Content.InputColumn)`
  align-self: flex-end;
  width: 140px;
  margin-left: ${theme.halfGutterWidth};
  margin-bottom: ${theme.halfGutterWidth};
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
        label: translate(translations, 'day', 'plural'),
        value: RelativeConstants.DAY,
      },
      {
        label: translate(translations, 'week', 'plural'),
        value: RelativeConstants.WEEK,
      },
      {
        label: translate(translations, 'month', 'plural'),
        value: RelativeConstants.MONTH,
      },
    ];
  };

  getSelectedGranularity = (granularities, value) => (
    granularities.find(granularity => granularity.value === value) || granularities[0]
  );

  initEndDate = endDate => (
    endDate.moment ? endDate :
      {
        ...endDate,
        moment: endDate.timing < 0 ? RelativeConstants.START : RelativeConstants.END,
      }
  );

  initStartDate = startDate => (
    startDate.value && startDate.value.moment ? startDate :
      {
        ...startDate,
        value: {
          ...startDate.value,
          moment: RelativeConstants.START,
        },
      }
  );

  handleStartDateChange = (selectedStartDate) => {
    const { translations } = this.props;
    const { endDate } = this.state;

    const startDate = this.initStartDate(selectedStartDate);
    const date = this.initEndDate(endDate);
    this.setState({ startDate });
    const state = {
      endDate: date,
      startDate: startDate.value,
      value: formatLabel(startDate, endDate, translations),
      period: {
        startDate,
        endDate: date,
      },
    };
    this.props.onChange(state);
  }

  handleEndDateChange = (selectedEndDate) => {
    const { translations } = this.props;
    const { startDate } = this.state;
    const date = this.initStartDate(startDate);
    const endDate = this.initEndDate(selectedEndDate);
    this.setState({ endDate });
    let state = {
      endDate,
      period: {
        endDate,
      },
    };
    if (startDate) {
      state = {
        endDate,
        value: formatLabel(startDate, endDate, translations),
        startDate: date.value,
        period: {
          endDate,
          startDate,
        },
      };
    }
    this.props.onChange(state);
  }

  handleTimingChange = (event) => {
    const timing = Number.isNaN(event.target.value) ? 0 : Number(event.target.value);
    const { endDate } = this.state;
    const selectedEndDate = {
      ...endDate,
      timing,
      moment: timing < 0 ? RelativeConstants.START : RelativeConstants.END,
    };
    this.setState({ endDate: selectedEndDate });
  }

  handleTimingBlur = () => {
    const { endDate } = this.state;
    this.handleEndDateChange(endDate);
  }

  handleGranularityChange = (unit) => {
    const { endDate } = this.state;
    const selectedEndDate = {
      ...endDate,
      unit: unit.value,
    };
    this.handleEndDateChange(selectedEndDate);
  }

  render() {
    const { translations } = this.props;
    const startDateOptions = relativeDateOptions(translate(translations, 'dates'));
    const { endDate, startDate } = this.state;
    const granularities = this.getGranularityOptions();

    return (
      <PeriodSection>
        <DateSection>
          <Content.InputColumn
            className="period-start-date"
            id="periodStartDate"
            label={translate(translations, 'from')}
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
        <CountSection
          className="period-end-date"
          id="periodEndDate"
          label={translate(translations, 'to')}
        >
          <Primitive.Input
            value={endDate.timing}
            type="number"
            onBlur={this.handleTimingBlur}
            onChange={this.handleTimingChange}
          />
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
