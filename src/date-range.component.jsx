/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormControl, Overlay } from 'react-bootstrap';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import DateRangePopover from './popover/date-range-popover.component';
import popoverPropTypes from './popover/prop-types';
import popoverDefaultProps from './popover/default-props';

const ReadOnlyInput = styled.div`
  .form-control[readonly] {
    width: 200px;
    background-color: ${theme.contentBackgroundColor};
  }
`;

export default class DateRange extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    popoverProps: PropTypes.shape(popoverPropTypes),
    inputProps: PropTypes.object,
    inputRef: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    popoverProps: popoverDefaultProps,
    inputProps: {},
    inputRef() {
    },
    onChange() {
    },
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
      value: this.props.value,
      popoverProps: props.popoverProps,
    };
  }

  handleChange = (event) => {
    this.setState({
      ...event,
      popoverProps: {
        ...this.state.popoverProps,
        ...event.popoverProps,
      },
    });
    this.props.onChange(event);
  };

  handleClick = () => this.setState({ showOverlay: !this.state.showOverlay });

  handleHide = () => this.setState({ showOverlay: false });

  render() {
    const {
      inputRef,
      inputProps,
    } = this.props;
    return (
      <React.Fragment>
        <ReadOnlyInput>
          <FormControl
            type="text"
            inputRef={(el) => {
              this.input = el;
              inputRef(el);
            }}
            {...inputProps}
            readOnly="readonly"
            value={this.state.value}
            onClick={this.handleClick}
          />
        </ReadOnlyInput>
        {this.state.showOverlay &&
        <Overlay
          show={this.state.showOverlay}
          onHide={this.handleHide}
          placement="bottom"
          container={this}
        >
          <DateRangePopover
            {...this.state.popoverProps}
            onChange={this.handleChange}
          />
        </Overlay>}
      </React.Fragment>
    );
  }
}
