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
    const { enabled } = props;
    const selectedRangeType = enabled[props.selectedRangeType]
      ? props.selectedRangeType
      : Object.keys(enabled).find(key => enabled[key]);
    this.state = {
      selectedRangeType,
    };
  }

  handleChange = (e) => {
    const selectedRangeType = e.target.value;
    const { onRangeTypeChange } = this.props;
    this.setState({ selectedRangeType });
    onRangeTypeChange({ selectedRangeType });
  }

  renderRangeComponent = () => {
    const { onChange, translations } = this.props;
    const { selectedRangeType } = this.state;
    const selectedRange = RangeTypes[selectedRangeType];
    return (
      <selectedRange.component
        {...this.props[selectedRange.propsKey]}
        onChange={onChange}
        translations={translations}
      />
    );
  }

  renderOptions = () => {
    const { enabled, translations } = this.props;
    const { selectedRangeType } = this.state;
    const enabledOptions = Object.keys(RangeTypes).filter(key => enabled[key]);
    return enabledOptions.length > 1
      ? enabledOptions.map(type => (
        <Radio
          key={type}
          name="rangeType"
          value={type}
          onChange={this.handleChange}
          checked={selectedRangeType === type}
          inline
        >
          {translations[type]}
        </Radio>))
      : undefined;
  };

  renderRangeOptions = () => {
    const options = this.renderOptions();
    return (
      options ?
        <React.Fragment>
          <FormGroup>
            {options}
          </FormGroup>
          <hr />
        </React.Fragment>
        : undefined
    );
  }

  render = () => (
    <PopoverSection>
      {this.renderRangeOptions()}
      {this.renderRangeComponent()}
    </PopoverSection>
  );
}

DateRangePopover.propTypes = propTypes;

DateRangePopover.defaultProps = defaultProps;
