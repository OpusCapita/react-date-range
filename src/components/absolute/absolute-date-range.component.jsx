/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import moment from 'moment';

import { DateInput } from '@opuscapita/react-datetime';

import propTypes from './prop-types';
import defaultProps from './default-props';
import RangeSection from '../range.component';

export default class AbsoluteDateRange extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleStartDateChange = (date) => {
    const startDate = moment.utc(date).format(this.props.dateFormat);
    const endDate = moment.utc(this.state.endDate).format(this.props.dateFormat);
    this.setState({ startDate: date });
    this.props.onChange(`${startDate} - ${endDate}`);
  }

  handleEndDateChange = (date) => {
    const endDate = moment.utc(date).format(this.props.dateFormat);
    const startDate = moment.utc(this.state.startDate).format(this.props.dateFormat);
    this.setState({ endDate: date });
    this.props.onChange(`${startDate} - ${endDate}`);
  }

  render() {
    return (
      <RangeSection>
        <label htmlFor="startDate">{this.props.translations.startDate}</label>
        <DateInput
          inputProps={{ name: 'startDate' }}
          onChange={this.handleStartDateChange}
        />
        <label htmlFor="endDate">{this.props.translations.endDate}</label>
        <DateInput
          inputProps={{ name: 'endDate' }}
          onChange={this.handleEndDateChange}
        />
      </RangeSection>
    );
  }
}

AbsoluteDateRange.propTypes = {
  ...propTypes,
};

AbsoluteDateRange.defaultProps = {
  ...defaultProps,
};
