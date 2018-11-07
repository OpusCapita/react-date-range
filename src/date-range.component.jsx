/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import { FormControl, Overlay } from 'react-bootstrap';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import Constants from './components/relative/constants';
import DateRangePopover from './popover/date-range-popover.component';
import formatPeriodLabel from './components/period/period-label.formatter';
import { getRelativeOption } from './components/relative/relative-options';
import popoverDefaultProps from './popover/default-props';
import popoverPropTypes from './popover/prop-types';
import translationsDefaultProps from './translations/default-props';
import translationsPropTypes from './translations/prop-types';

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
    translations: PropTypes.shape(translationsPropTypes),
    width: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    inputProps: {},
    inputRef: () => {},
    onChange: () => {},
    popoverProps: popoverDefaultProps,
    translations: translationsDefaultProps,
    width: '300px',
  };

  constructor(props) {
    super(props);
    const state = this.initState(props);
    this.state = {
      popoverProps: undefined,
      ...state,
      showOverlay: false,
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.popoverProps !== this.props.popoverProps) {
      const state = this.initState(this.props);
      if (state) {
        this.setState(state);
      }
    }
  }

  getAbsoluteRange = () => {
    const { popoverProps } = this.state || {};
    const { absoluteRange } = popoverProps || {};
    const { endDate, startDate } = absoluteRange || {};
    const { dateFormat } = this.props.popoverProps.absoluteRange;
    if (startDate && endDate) {
      const from = moment.utc(startDate);
      const to = moment.utc(endDate);
      if (from.isValid() && to.isValid()) {
        return {
          endDate: to.endOf('day').toISOString(),
          startDate: from.startOf('day').toISOString(),
          value: `${from.format(dateFormat)} - ${to.format(dateFormat)}`,
        };
      }
    }
    return null;
  }

  // getRelativeOption = inputDate => (
  //   inputDate
  //     ? relativeOptions(this.props.popoverProps.translations.dates).find(option =>
  //       (!option.value.moment || option.value.moment === inputDate.moment)
  //       && option.value.unit === inputDate.unit
  //       && option.value.timing === inputDate.timing)
  //     : undefined
  // )

  getRelativeRange = () => {
    const { popoverProps } = this.state;
    const {
      relativeRange,
    } = popoverProps || {};
    const { endDate, startDate } = relativeRange || {};
    if (endDate && startDate && endDate.value && startDate.value) {
      return {
        endDate: { ...endDate.value, moment: endDate.value.moment || Constants.END },
        startDate: { ...startDate.value, moment: startDate.value.moment || Constants.START },
        value: `${startDate.label} - ${endDate.label}`,
      };
    }
    return null;
  }

  initState = props => (
    this.initAbsoluteRange(props) || this.initRelativeRange(props)
  );

  initAbsoluteRange = (props) => {
    const { absoluteRange } = props.popoverProps || {};
    const { endDate, startDate, dateFormat } = absoluteRange || {};
    if (startDate && endDate) {
      const from = moment.utc(startDate);
      const to = moment.utc(endDate);
      return {
        popoverProps: {
          absoluteRange: {
            endDate: to.endOf('day').toISOString(),
            startDate: from.startOf('day').toISOString(),
          },
          selectedRangeType: 'absolute',
        },
        value: (from.isValid() && to.isValid()) ?
          `${from.format(dateFormat)} - ${to.format(dateFormat)}` : '',
      };
    }
    return null;
  }

  initPeriod = (props) => {
    const { enabled, period } = props.popoverProps || {};
    const { translations } = props;
    const { endDate, startDate } = period || {};
    const selectedStartDate = getRelativeOption(startDate, translations.dates);

    return {
      popoverProps: {
        period: {
          endDate,
          startDate: selectedStartDate,
        },
        selectedRangeType: endDate && selectedStartDate ? 'period' : undefined,
      },
      value: (enabled.period && endDate && selectedStartDate) ?
        formatPeriodLabel(selectedStartDate, endDate, translations) : '',
    };
  }

  initRelativeRange = (props) => {
    const { enabled, relativeRange } = props.popoverProps || {};
    const { translations } = props;
    const { endDate, startDate } = relativeRange || {};
    const selectedStartDate = getRelativeOption(startDate, translations.dates);
    const selectedEndDate = getRelativeOption(endDate, translations.dates);

    return {
      popoverProps: {
        relativeRange: {
          endDate: selectedEndDate,
          startDate: selectedStartDate,
        },
        selectedRangeType: selectedEndDate && selectedStartDate ? 'relative' : undefined,
      },
      value: (enabled.relative && selectedEndDate && selectedStartDate) ?
        `${selectedStartDate.label} - ${selectedEndDate.label}` : '',
    };
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

  handleRangeTypeChange = (event) => {
    const { onChange } = this.props;
    const { popoverProps } = this.state;
    const range = event.popoverProps.selectedRangeType === 'absolute'
      ? this.getAbsoluteRange()
      : this.getRelativeRange();
    this.setState({
      popoverProps: this.mergePopoverProps(popoverProps, event.popoverProps),
      value: range ? range.value : '',
    });
    const { startDate, endDate } = range || {};
    if (startDate && endDate) {
      onChange({ startDate, endDate });
    }
  }

  handleChange = (event) => {
    const { onChange } = this.props;
    const { popoverProps } = this.state;
    this.setState({
      popoverProps: this.mergePopoverProps(popoverProps, event.popoverProps),
      value: event.value,
    });

    const { startDate, endDate } = event;
    if (startDate && endDate) {
      onChange({ startDate, endDate });
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
      translations,
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
              onRangeTypeChange={this.handleRangeTypeChange}
              onChange={this.handleChange}
              translations={translations}
            />
          </Overlay>}
        </DateRangeSection>
      </ThemeProvider>
    );
  }
}
