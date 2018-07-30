import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, Overlay } from 'react-bootstrap';
import DateRangePopover from './popover/date-range-popover.component';
import popoverPropTypes from './popover/prop-types';
import popoverDefaultProps from './popover/default-props';

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
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      showOverlay: false,
      value: this.props.value,
    };
  }

  handleFocus = (e) => {
    this.setState({
      showOverlay: true,
    });
  };

  closeOverlay = (e) => {
    this.setState({
      showOverlay: false,
    });
  };

  handleChange = (value) => {
    this.setState({ value });
    this.props.onChange(value);
  };

  handleToggle = () => this.setState({ showOverlay: !this.state.showOverlay });

  render() {
    const {
      inputRef,
      inputProps,
      translations,
    } = this.props;
    return (
      <FormGroup>
        <FormControl
          type="text"
          inputRef={(el) => {
            this.input = el;
            inputRef(el);
          }}
          {...inputProps}
          value={this.state.value}
          onChange={this.handleChange}
          onFocus={() => this.setState({ showOverlay: true })}
          onBlur={() => this.setState({ showOverlay: true })}
        />
        {this.state.showOverlay &&
        <Overlay
          show={this.state.showOverlay}
          onHide={() => this.setState({ showOverlay: false })}
          placement="bottom"
          container={this}
        >
          <DateRangePopover
            onChange={this.handleChange}
            translations={translations}
          />
        </Overlay>}
      </FormGroup>
    );
  }
}
