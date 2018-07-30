/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

import { FloatingSelect } from '@opuscapita/react-floating-select';

import propTypes from './prop-types';
import defaultProps from './default-props';
import RangeSection from '../range.component';

export default class RelativeDateRange extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <RangeSection>
        <label htmlFor="startDate">{this.props.translations.startDate}</label>
        <FloatingSelect {...this.props} inputProps={{ name: 'startDate' }} />
        <label htmlFor="endDate">{this.props.translations.endDate}</label>
        <FloatingSelect {...this.props} inputProps={{ name: 'endDate' }} />
      </RangeSection>
    );
  }
}

RelativeDateRange.propTypes = {
  ...propTypes,
};

RelativeDateRange.defaultProps = {
  ...defaultProps,
};
