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
    ...popoverPropTypes,
    inputProps: PropTypes.object,
    inputRef: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    ...popoverDefaultProps,
    inputProps: {},
    inputRef() {
    },
    onChange() {
    },
    value: `${popoverDefaultProps.startDate} - ${popoverDefaultProps.endDate}`,
  };

  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
      value: this.props.value,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.value,
      startDate: event.startDate,
      endDate: event.endDate,
    });
    this.props.onChange(event);
  };

  handleClick = () => this.setState({ showOverlay: !this.state.showOverlay });

  handleHide = () => this.setState({ showOverlay: false });

  render() {
    const {
      inputRef,
      inputProps,
      translations,
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
          rootClose
        >
          <DateRangePopover
            {...this.props}
            onChange={this.handleChange}
            translations={translations}
          />
        </Overlay>}
      </React.Fragment>
    );
  }
}
