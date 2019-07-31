/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import { FormControl, Overlay } from 'react-bootstrap';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import absoluteRangeDefaultProps from './components/absolute/default-props';
import absoluteRangePropTypes from './components/absolute/prop-types';
import RelativeConstants from './components/relative/constants';
import DateRangePopover from './popover/date-range-popover.component';
import formatPeriodLabel from './components/period/period-label.formatter';
import { getRelativeOption } from './components/relative/relative-options';
import periodDefaultProps from './components/period/default-props';
import { periodShape } from './components/period/prop-types';
import relativeRangeDefaultProps from './components/relative/default-props';
import { relativeDateValueShape } from './components/relative/prop-types';
import translate from './translations/translate';
import translationsDefaultProps from './translations/default-props';
import translationsPropTypes from './translations/prop-types';

const ReadOnlyInput = styled.div`
  .form-control[readonly] {
    background-color: ${theme.contentBackgroundColor};
    padding-right: 32px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  display: flex;
  svg {
    margin: 9px 8px 9px -24px;
    color: ${theme.colors.grey9};
  }
`;

const Constants = Object.freeze({
  ABSOLUTE: 'absolute',
  PERIOD: 'period',
  RELATIVE: 'relative',
});

export default class DateRange extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    absoluteRange: PropTypes.shape(absoluteRangePropTypes),
    className: PropTypes.string,
    enabled: PropTypes.shape({
      absolute: PropTypes.bool,
      period: PropTypes.bool,
      relative: PropTypes.bool,
    }),
    inputProps: PropTypes.object,
    inputRef: PropTypes.func,
    onChange: PropTypes.func,
    period: PropTypes.shape({
      endDate: periodShape,
      onChange: PropTypes.func,
      startDate: relativeDateValueShape,
    }),
    relativeRange: PropTypes.shape({
      endDate: relativeDateValueShape,
      onChange: PropTypes.func,
      startDate: relativeDateValueShape,
    }),
    translations: PropTypes.shape(translationsPropTypes),
    width: PropTypes.string,
  };

  static defaultProps = {
    absoluteRange: absoluteRangeDefaultProps,
    className: '',
    enabled: {
      absolute: true,
      period: false,
      relative: false,
    },
    inputProps: {},
    inputRef: () => {},
    onChange: () => {},
    period: periodDefaultProps,
    relativeRange: relativeRangeDefaultProps,
    translations: translationsDefaultProps,
    width: '300px',
  };

  constructor(props) {
    super(props);
    const state = this.initState(props);
    this.state = {
      ...state,
      showOverlay: false,
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.absoluteRange !== this.props.absoluteRange ||
        prevProps.relativeRange !== this.props.relativeRange ||
        prevProps.period !== this.props.period) {
      const state = this.initState(this.props);
      if (state) {
        this.setState(state);
      }
    }
  }

  getAbsoluteState = () => {
    const { absoluteRange } = this.state;
    const { endDate, startDate } = absoluteRange || {};
    const { dateFormat } = this.props.absoluteRange;
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
    return { value: '' };
  }

  getPeriodState = () => {
    const { translations } = this.props;
    const { period } = this.state;
    const { endDate, startDate } = period || {};
    if (endDate && startDate && startDate.value) {
      return {
        endDate: { ...endDate, moment: endDate.moment || RelativeConstants.END },
        startDate: {
          ...startDate.value,
          moment: startDate.value.moment || RelativeConstants.START,
        },
        value: formatPeriodLabel(startDate, endDate, translations),
      };
    }
    return { value: '' };
  }

  getRelativeState = () => {
    const { relativeRange } = this.state;
    const { endDate, startDate } = relativeRange || {};
    if (endDate && startDate && endDate.value && startDate.value) {
      return {
        endDate: { ...endDate.value, moment: endDate.value.moment || RelativeConstants.END },
        startDate: {
          ...startDate.value,
          moment: startDate.value.moment || RelativeConstants.START,
        },
        value: `${startDate.label} - ${endDate.label}`,
      };
    }
    return { value: '' };
  }

  initState = props => (
    this.initAbsoluteRange(props) || this.initRelativeRange(props) || this.initPeriod(props)
  );

  initAbsoluteRange = (props) => {
    const { absoluteRange } = props;
    const { endDate, startDate, dateFormat } = absoluteRange || {};
    const { showOverlay } = (this.state || {}).absoluteRange || {};

    if (startDate && endDate) {
      const from = moment.utc(startDate);
      const to = moment.utc(endDate);
      return {
        absoluteRange: {
          showOverlay,
          endDate: to.endOf('day').toISOString(),
          startDate: from.startOf('day').toISOString(),
        },
        selectedRangeType: Constants.ABSOLUTE,
        value: (from.isValid() && to.isValid()) ?
          `${from.format(dateFormat)} - ${to.format(dateFormat)}` : '',
        lastValidRange: Constants.ABSOLUTE,
      };
    }
    return null;
  }

  initPeriod = (props) => {
    const { enabled, period, translations } = props;
    const { endDate, startDate } = period || {};
    const selectedStartDate = getRelativeOption(startDate, translate(translations, 'dates'));
    const selectedRangeType = endDate && selectedStartDate ? Constants.PERIOD : undefined;

    return {
      period: {
        endDate,
        startDate: selectedStartDate,
      },
      selectedRangeType,
      value: (enabled.period && endDate && selectedStartDate) ?
        formatPeriodLabel(selectedStartDate, endDate, translations) : '',
      lastValidRange: selectedRangeType,
    };
  }

  initRelativeRange = (props) => {
    const { enabled, relativeRange, translations } = props;
    const { endDate, startDate } = relativeRange || {};

    if (endDate && startDate) {
      const selectedStartDate = getRelativeOption(startDate, translate(translations, 'dates'));
      const selectedEndDate = getRelativeOption(endDate, translate(translations, 'dates'));
      const selectedRangeType = selectedEndDate && selectedStartDate ? Constants.RELATIVE : undefined;

      return {
        relativeRange: {
          endDate: selectedEndDate,
          startDate: selectedStartDate,
        },
        selectedRangeType,
        value: (enabled.relative && selectedEndDate && selectedStartDate) ?
          `${selectedStartDate.label} - ${selectedEndDate.label}` : '',
        lastValidRange: selectedRangeType,
      };
    }
    return null;
  }

  handleRangeTypeChange = (event) => {
    const { onChange } = this.props;
    const { selectedRangeType } = event;
    const state = this[`get${selectedRangeType.replace(/\w/, c => c.toUpperCase())}State`]();
    this.setState({
      ...state,
      selectedRangeType,
    });
    const { startDate, endDate } = state;
    if (startDate && endDate) {
      onChange({ startDate, endDate });
      this.setState({ lastValidRange: selectedRangeType });
    }
  }

  handleChange = (event) => {
    const { onChange } = this.props;
    const { selectedRangeType: lastValidRange } = this.state;
    this.setState(event);

    const { startDate, endDate } = event;
    if (startDate && endDate) {
      onChange({ startDate, endDate });
      this.setState({ lastValidRange });
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
  handleHide = (e) => {
    if (e.target && e.target.parentNode
      && e.target.parentNode.className
      && e.target.parentNode.className.includes('DayPicker')) {
      e.preventDefault();
      return;
    }
    const { value, lastValidRange } = this.state;
    const state = !value && lastValidRange
      ? {
        ...this[`get${lastValidRange.replace(/\w/, c => c.toUpperCase())}State`](),
        selectedRangeType: lastValidRange,
        showOverlay: false,
      }
      : {
        showOverlay: false,
      };
    this.setState(state);
  };

  renderCaret = () => {
    const { showOverlay } = this.state;
    return showOverlay
      ? <FaCaretUp onClick={this.handleClick} />
      : <FaCaretDown onClick={this.handleClick} />;
  }

  render() {
    const {
      className,
      enabled,
      id,
      inputRef,
      inputProps,
      translations,
      width,
    } = this.props;
    const {
      period,
      relativeRange,
      selectedRangeType,
      showOverlay,
      value,
    } = this.state;
    const absoluteRange = {
      ...this.props.absoluteRange,
      ...this.state.absoluteRange,
    };

    const DateRangeSection = styled.div`
      width: ${width};
    `;

    return (
      <ThemeProvider theme={theme}>
        <DateRangeSection id={id} className={className}>
          <ReadOnlyInput showOverlay={showOverlay}>
            <FormControl
              type="text"
              inputRef={(el) => {
                this.input = el;
                inputRef(el);
              }}
              {...inputProps}
              readOnly="readonly"
              value={value}
              onClick={this.handleClick}
            />
            {this.renderCaret()}
          </ReadOnlyInput>
          <Overlay
            show={showOverlay}
            onHide={this.handleHide}
            placement="bottom"
            container={this}
            rootClose
          >
            <DateRangePopover
              absoluteRange={absoluteRange}
              enabled={enabled}
              onRangeTypeChange={this.handleRangeTypeChange}
              onChange={this.handleChange}
              period={period}
              selectedRangeType={selectedRangeType}
              relativeRange={relativeRange}
              translations={translations}
            />
          </Overlay>
        </DateRangeSection>
      </ThemeProvider>
    );
  }
}
