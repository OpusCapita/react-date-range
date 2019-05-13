import React from 'react';
import styled from 'styled-components';
import { FormGroup, Radio } from 'react-bootstrap';

import { theme } from '@opuscapita/oc-cm-common-layouts';

import RangeTypes from './range-types';
import propTypes from './prop-types';
import defaultProps from './default-props';
import translate from '../translations/translate';

const PopoverSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid ${theme.colors.grey3};
  padding: ${theme.gutterWidth};
  background-color: ${theme.contentBackgroundColor};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  hr {
    color: ${theme.colors.grey3};
    size: 0.1rem;
    margin: 0;
  }
`;

const RadioButton = styled(Radio)`
  input[type="radio"] {
    height: 100%;
    line-height: 100%;
    margin: 0 0 0 -20px;
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
        <RadioButton
          key={type}
          name="rangeType"
          value={type}
          onChange={this.handleChange}
          checked={selectedRangeType === type}
          inline
        >
          {translate(translations, type)}
        </RadioButton>))
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
