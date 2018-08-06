import React from 'react';
import styled from 'styled-components';
import { FormGroup, Radio } from 'react-bootstrap';

import RangeTypes from './range-types';
import propTypes from './prop-types';
import defaultProps from './default-props';

const PopoverSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.1rem solid #CCC;
  padding: 1rem;
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
      rangeType: props.isRelativeSelected ? 'relative' : 'absolute',
    };
  }

  getRangeComponent = () => {
    const rangeTypes = RangeTypes(this.props.translations);
    const index = rangeTypes.findIndex(type => type.value === this.state.rangeType);
    return rangeTypes[index].component;
  }

  handleChange = (e) => {
    this.setState({ rangeType: e.target.value });
  }

  renderOptions = () => (
    RangeTypes(this.props.translations).map(type => (
      <Radio
        key={type.id}
        name="rangeType"
        value={type.value}
        onChange={this.handleChange}
        checked={this.state.rangeType === type.value}
        inline
      >
        {type.label}
      </Radio>))
  );

  render() {
    const RangeComponent = this.getRangeComponent();
    return (
      <PopoverSection>
        {this.props.isRelativeEnabled &&
        <React.Fragment>
          <FormGroup>
            {this.renderOptions()}
          </FormGroup>
          <hr />
        </React.Fragment>}
        <RangeComponent
          {...this.props}
          onChange={this.props.onChange}
        />
      </PopoverSection>
    );
  }
}

DateRangePopover.propTypes = {
  ...propTypes,
};

DateRangePopover.defaultProps = {
  ...defaultProps,
};
