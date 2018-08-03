/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';

import { FloatingSelect } from '@opuscapita/react-floating-select';

import DateSection from '../date-section.components';
import propTypes from './prop-types';
import defaultProps from './default-props';

const RelativeRangeSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
`;

export default class RelativeDateRange extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <RelativeRangeSection>
        <DateSection>
          <label htmlFor="startDate">{this.props.translations.startDate}</label>
          <FloatingSelect {...this.props} inputProps={{ name: 'startDate' }} />
        </DateSection>
        <DateSection>
          <label htmlFor="endDate">{this.props.translations.endDate}</label>
          <FloatingSelect {...this.props} inputProps={{ name: 'endDate' }} />
        </DateSection>
      </RelativeRangeSection>
    );
  }
}

RelativeDateRange.propTypes = {
  ...propTypes,
};

RelativeDateRange.defaultProps = {
  ...defaultProps,
};
