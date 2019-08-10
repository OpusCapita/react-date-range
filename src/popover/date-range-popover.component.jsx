import React from 'react';
import styled from 'styled-components';
import { FormGroup, Radio } from 'react-bootstrap';

import RangeTypes from './range-types';
import propTypes from './prop-types';
import defaultProps from './default-props';
import translate from '../translations/translate';

const Header = styled.div`
  display: flex;
  align-items: center;
  .form-group {
    white-space: nowrap;
    margin: 0 ${props => props.theme.gutterWidth} 0 0;
  }
  margin-bottom: ${props => props.theme.gutterWidth};
`;

const PopoverSection = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid ${props => props.theme.colors.grey3};
  padding: ${props => props.theme.gutterWidth};
  background-color: ${props => props.theme.contentBackgroundColor};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  hr {
    color: ${props => props.theme.colors.grey3};
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

  renderRangeOptions = options => (options ? <FormGroup>{options}</FormGroup> : undefined);

  renderHeader = () => {
    const { children } = this.props;
    const options = this.renderOptions();
    return (
      children || options ?
        <React.Fragment>
          <Header>
            {this.renderRangeOptions(options)}
            {children}
          </Header>
          <hr />
        </React.Fragment>
        : undefined
    );
  };

  render = () => (
    <PopoverSection>
      {this.renderHeader()}
      {this.renderRangeComponent()}
    </PopoverSection>
  );
}

DateRangePopover.propTypes = propTypes;

DateRangePopover.defaultProps = defaultProps;
