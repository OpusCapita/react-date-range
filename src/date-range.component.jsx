/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
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
    inputProps: PropTypes.object,
    inputRef: PropTypes.func,
    onChange: PropTypes.func,
    popoverProps: PropTypes.shape(popoverPropTypes),
    width: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    inputProps: {},
    inputRef: () => {},
    onChange: () => {},
    popoverProps: popoverDefaultProps,
    width: '200px',
  };

  constructor(props) {
    super(props);
    const value = this.initValue(props);
    this.state = {
      showOverlay: false,
      value,
      popoverProps: undefined,
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.popoverProps !== this.props.popoverProps) {
      const value = this.initValue(this.props);
      if (value) {
        this.setState({ value });
      }
    }
  }

  initValue = props => (
    this.initAbsoluteRange(props) || this.initRelativeRange(props)
  );

  initAbsoluteRange = (props) => {
    const { absoluteRange } = props.popoverProps || {};
    const { endDate, startDate, dateFormat } = absoluteRange || {};
    if (startDate && endDate) {
      const from = moment.utc(startDate);
      const to = moment.utc(endDate);
      return (from.isValid() && to.isValid()) ?
        `${from.format(dateFormat)} - ${to.format(dateFormat)}` : '';
    }
    return null;
  }

  initRelativeRange = (props) => {
    const {
      isRelativeEnabled,
      relativeRange,
    } = props.popoverProps || {};
    const { endDate, startDate } = relativeRange || {};
    return (isRelativeEnabled && endDate && startDate) ?
      `${startDate.label} - ${endDate.label}` : '';
  }

  mergePopoverProps = (target = {}, source = {}) => (
    Object.assign(
      {},
      target,
      source,
      {
        absoluteRange: {
          ...target.absoluteRange || {},
          ...source.absoluteRange || {},
        },
        relativeRange: {
          ...target.relativeRange || {},
          ...source.relativeRange || {},
        },
      },
    ));

  handleChange = (event) => {
    this.setState({
      popoverProps: this.mergePopoverProps(this.state.popoverProps, event.popoverProps),
      value: event.value,
    });

    const { startDate, endDate } = event;
    if (startDate || endDate) {
      this.props.onChange({ startDate, endDate });
    }
  };

  handleClick = () => this.setState({ showOverlay: !this.state.showOverlay });

  /**
   * This is dirty solution and c/should be fixed.
   * Root cause: day-picker is rendered to root element, not inside popover eleemnt.
   * Therefore click coming form day-picker are considers as outside click of popover
   * and popover would be close without event preventDefault.
   * One solution is passing at least tree callbacks for react-datetime: onWeekClick,
   * onCaptionClick and custom onClick for custom caption of react-datetime.
   */
  handleHide = e => (
    e.target && e.target.parentNode && e.target.parentNode.className && e.target.parentNode.className.includes('DayPicker') ?
      e.preventDefault() :
      this.setState({ showOverlay: false })
  );

  render() {
    const {
      className,
      id,
      inputRef,
      inputProps,
      width,
    } = this.props;

    const DateRangeSection = styled.div`
      width: ${width};
    `;

    return (
      <ThemeProvider theme={theme}>
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
              {...this.mergePopoverProps(this.props.popoverProps, this.state.popoverProps)}
              onChange={this.handleChange}
            />
          </Overlay>}
        </DateRangeSection>
      </ThemeProvider>
    );
  }
}
