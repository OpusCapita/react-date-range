import React from 'react';
import styled from 'styled-components';
import { FormGroup, Radio } from 'react-bootstrap';

import { theme } from '@opuscapita/oc-cm-common-layouts';

import RangeTypes from './range-types';
import propTypes from './prop-types';
import defaultProps from './default-props';

const PopoverSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid #ccc;
  padding: ${theme.gutterWidth};
  background-color: ${theme.contentBackgroundColor}
  hr {
    color: #CCC;
    size: 0.1rem;
    margin: 0;
  }
`;

export default class DateRangePopover extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedRangeType: props.selectedRangeType,
    };
  }

  handleChange = (e) => {
    const selectedRangeType = e.target.value;
    this.setState({ selectedRangeType });
    this.props.onRangeTypeChange({
      popoverProps: {
        selectedRangeType,
      },
    });
  }

  renderRangeComponent = () => {
    const selectedRange = RangeTypes[this.state.selectedRangeType];
    return (
      <selectedRange.component
        {...this.props[selectedRange.propsKey]}
        onChange={this.props.onChange}
        translations={this.props.translations}
      />
    );
  }

  renderOptions = () => (
    Object.keys(RangeTypes).map(type => (
      <Radio
        key={type}
        name="rangeType"
        value={type}
        onChange={this.handleChange}
        checked={this.state.selectedRangeType === type}
        inline
      >
        {this.props.translations[type]}
      </Radio>))
  );

  render = () => (
    <PopoverSection>
      {this.props.isRelativeEnabled &&
      <React.Fragment>
        <FormGroup>
          {this.renderOptions()}
        </FormGroup>
        <hr />
      </React.Fragment>}
      {this.renderRangeComponent()}
    </PopoverSection>
  );
}

DateRangePopover.propTypes = propTypes;

DateRangePopover.defaultProps = defaultProps;
