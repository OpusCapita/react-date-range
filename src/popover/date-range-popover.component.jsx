import React from 'react';
import styled from 'styled-components';
import { FormGroup, Radio } from 'react-bootstrap';
import RangeTypes from './range-types';
import propTypes from './prop-types';
import defaultProps from './default-props';

const PopoverSection = styled.div`
  display: flex;
`;

// TODO oc-cm-common-layout dependency
// background-color: ${theme.contentBackgroundColor};
// width: calc(100% - 2 * ${theme.gutterWidth});
// margin: ${theme.gutterWidth};
// padding: ${theme.gutterWidth};
// .responsive-navbar-container {
//   flex: 1 1 100%;    
// }

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
        {this.state.rangeTypeComponent && <this.state.rangeTypeComponent />}
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
