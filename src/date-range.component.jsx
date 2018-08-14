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
    background-color: ${theme.contentBackgroundColor};
  }
`;

export default class DateRange extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    popoverProps: PropTypes.shape(popoverPropTypes),
    inputProps: PropTypes.object,
    inputRef: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    width: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    popoverProps: popoverDefaultProps,
    inputProps: {},
    inputRef() {
    },
    onChange() {
    },
    value: '',
    width: '200px',
  };

  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
      value: this.props.value,
      popoverProps: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.value,
      popoverProps: {
        ...this.state.popoverProps,
        ...event.popoverProps,
      },
    });
    this.props.onChange(event);
  };

  handleClick = () => this.setState({ showOverlay: !this.state.showOverlay });

  handleHide = (e) => {
    if (e.target && e.target.className && e.target.className.includes('DayPicker')) {
      e.preventDefault();
    } else {
      this.setState({ showOverlay: false });
    }
  }

  render() {
    const {
      className,
      id,
      inputRef,
      inputProps,
      width,
    } = this.props;

    const popoverProps = {
      ...this.props.popoverProps,
      ...this.state.popoverProps,
    };

    const DateRangeSection = styled.div`
      width: ${width};
    `;
    return (
      <DateRangeSection id={id} className={className}>
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
          rootClose
        >
          <DateRangePopover
            {...popoverProps}
            onChange={this.handleChange}
          />
        </Overlay>}
      </DateRangeSection>
    );
  }
}
