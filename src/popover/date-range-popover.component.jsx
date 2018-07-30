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
      rangeTypeComponent: null,
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    const rangeTypes = RangeTypes(this.props.translations);
    const index = rangeTypes.findIndex(type => type.value === value);
    this.setState({ rangeTypeComponent: rangeTypes[index].component });
  }

  renderOptions = () => (
    RangeTypes(this.props.translations).map(type => (
      <Radio
        key={type.id}
        name="rangeType"
        value={type.value}
        onChange={this.handleChange}
        inline
      >
        {type.label}
      </Radio>))
  );

  render() {
    return (
      <PopoverSection>
        <FormGroup>
          {this.renderOptions()}
        </FormGroup>
        <hr />
        {this.state.rangeTypeComponent &&
        <this.state.rangeTypeComponent
          {...this.props}
          onChange={this.props.onChange}
        />}
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
