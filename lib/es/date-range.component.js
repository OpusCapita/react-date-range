var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n'], ['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      width: ', ';\n    '], ['\n      width: ', ';\n    ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import { FormControl, Overlay } from 'react-bootstrap';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import Constants from './components/relative/constants';
import DateRangePopover from './popover/date-range-popover.component';
import popoverPropTypes from './popover/prop-types';
import popoverDefaultProps from './popover/default-props';
import relativeOptions from './components/relative/relative-options';

var ReadOnlyInput = styled.div(_templateObject, theme.contentBackgroundColor);

var DateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(DateRange, _React$PureComponent);

  function DateRange(props) {
    _classCallCheck(this, DateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var state = _this.initState(props);
    _this.state = _extends({
      popoverProps: undefined
    }, state, {
      showOverlay: false
    });
    return _this;
  }

  /**
   * This is dirty solution and c/should be fixed.
   * Root cause: day-picker is rendered to root element, not inside popover eleemnt.
   * Therefore click coming form day-picker are considers as outside click of popover
   * and popover would be close without event preventDefault.
   * One solution is passing at least tree callbacks for react-datetime: onWeekClick,
   * onCaptionClick and custom onClick for custom caption of react-datetime.
   */


  DateRange.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        id = _props.id,
        _inputRef = _props.inputRef,
        inputProps = _props.inputProps,
        width = _props.width;


    var DateRangeSection = styled.div(_templateObject2, width);

    return React.createElement(
      ThemeProvider,
      { theme: theme },
      React.createElement(
        DateRangeSection,
        { id: id, className: className },
        React.createElement(
          ReadOnlyInput,
          null,
          React.createElement(FormControl, _extends({
            type: 'text',
            inputRef: function inputRef(el) {
              _this2.input = el;
              _inputRef(el);
            }
          }, inputProps, {
            readOnly: 'readonly',
            value: this.state.value,
            onClick: this.handleClick
          }))
        ),
        this.state.showOverlay && React.createElement(
          Overlay,
          {
            show: this.state.showOverlay,
            onHide: this.handleHide,
            placement: 'bottom',
            container: this,
            rootClose: true
          },
          React.createElement(DateRangePopover, _extends({}, this.mergePopoverProps(this.props.popoverProps, this.state.popoverProps), {
            onRangeTypeChange: this.handleRangeTypeChange,
            onChange: this.handleChange
          }))
        )
      )
    );
  };

  return DateRange;
}(React.PureComponent), _class.defaultProps = {
  className: '',
  inputProps: {},
  inputRef: function inputRef() {},
  onChange: function onChange() {},
  popoverProps: popoverDefaultProps,
  width: '200px'
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.componentDidUpdate = function (prevProps) {
    if (prevProps.popoverProps !== _this3.props.popoverProps) {
      var state = _this3.initState(_this3.props);
      if (state) {
        _this3.setState(state);
      }
    }
  };

  this.getAbsoluteRange = function () {
    var _ref = _this3.state || {},
        popoverProps = _ref.popoverProps;

    var _ref2 = popoverProps || {},
        absoluteRange = _ref2.absoluteRange;

    var _ref3 = absoluteRange || {},
        endDate = _ref3.endDate,
        startDate = _ref3.startDate;

    var dateFormat = _this3.props.popoverProps.absoluteRange.dateFormat;

    if (startDate && endDate) {
      var from = moment.utc(startDate);
      var to = moment.utc(endDate);
      if (from.isValid() && to.isValid()) {
        return {
          endDate: to.endOf('day').toISOString(),
          startDate: from.startOf('day').toISOString(),
          value: from.format(dateFormat) + ' - ' + to.format(dateFormat)
        };
      }
    }
    return null;
  };

  this.getRelativeOption = function (inputDate) {
    return inputDate ? relativeOptions.find(function (option) {
      return (!option.value.moment || option.value.moment === inputDate.moment) && option.value.unit === inputDate.unit && option.value.timing === inputDate.timing;
    }) : undefined;
  };

  this.getRelativeRange = function () {
    var popoverProps = _this3.state.popoverProps;

    var _ref4 = popoverProps || {},
        relativeRange = _ref4.relativeRange;

    var _ref5 = relativeRange || {},
        endDate = _ref5.endDate,
        startDate = _ref5.startDate;

    if (endDate && startDate && endDate.value && startDate.value) {
      return {
        endDate: _extends({}, endDate.value, { moment: endDate.value.moment || Constants.END }),
        startDate: _extends({}, startDate.value, { moment: startDate.value.moment || Constants.START }),
        value: startDate.label + ' - ' + endDate.label
      };
    }
    return null;
  };

  this.initState = function (props) {
    return _this3.initAbsoluteRange(props) || _this3.initRelativeRange(props);
  };

  this.initAbsoluteRange = function (props) {
    var _ref6 = props.popoverProps || {},
        absoluteRange = _ref6.absoluteRange;

    var _ref7 = absoluteRange || {},
        endDate = _ref7.endDate,
        startDate = _ref7.startDate,
        dateFormat = _ref7.dateFormat;

    if (startDate && endDate) {
      var from = moment.utc(startDate);
      var to = moment.utc(endDate);
      return {
        popoverProps: {
          absoluteRange: {
            endDate: to.endOf('day').toISOString(),
            startDate: from.startOf('day').toISOString()
          },
          selectedRangeType: 'absolute'
        },
        value: from.isValid() && to.isValid() ? from.format(dateFormat) + ' - ' + to.format(dateFormat) : ''
      };
    }
    return null;
  };

  this.initRelativeRange = function (props) {
    var _ref8 = props.popoverProps || {},
        isRelativeEnabled = _ref8.isRelativeEnabled,
        relativeRange = _ref8.relativeRange;

    var _ref9 = relativeRange || {},
        endDate = _ref9.endDate,
        startDate = _ref9.startDate;

    var selectedStartDate = _this3.getRelativeOption(startDate);
    var selectedEndDate = _this3.getRelativeOption(endDate);

    return {
      popoverProps: {
        relativeRange: {
          endDate: selectedEndDate,
          startDate: selectedStartDate
        },
        selectedRangeType: selectedEndDate && selectedStartDate ? 'relative' : undefined
      },
      value: isRelativeEnabled && selectedEndDate && selectedStartDate ? selectedStartDate.label + ' - ' + selectedEndDate.label : ''
    };
  };

  this.mergePopoverProps = function () {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Object.assign({}, target, source, {
      absoluteRange: _extends({}, target.absoluteRange || {}, source.absoluteRange || {}),
      relativeRange: _extends({}, target.relativeRange || {}, source.relativeRange || {})
    });
  };

  this.handleRangeTypeChange = function (event) {
    var onChange = _this3.props.onChange;
    var popoverProps = _this3.state.popoverProps;

    var range = event.popoverProps.selectedRangeType === 'absolute' ? _this3.getAbsoluteRange() : _this3.getRelativeRange();
    _this3.setState({
      popoverProps: _this3.mergePopoverProps(popoverProps, event.popoverProps),
      value: range ? range.value : ''
    });

    var _ref10 = range || {},
        startDate = _ref10.startDate,
        endDate = _ref10.endDate;

    if (startDate && endDate) {
      onChange({ startDate: startDate, endDate: endDate });
    }
  };

  this.handleChange = function (event) {
    var onChange = _this3.props.onChange;
    var popoverProps = _this3.state.popoverProps;

    _this3.setState({
      popoverProps: _this3.mergePopoverProps(popoverProps, event.popoverProps),
      value: event.value
    });

    var startDate = event.startDate,
        endDate = event.endDate;

    if (startDate && endDate) {
      onChange({ startDate: startDate, endDate: endDate });
    }
  };

  this.handleClick = function () {
    return _this3.setState({ showOverlay: !_this3.state.showOverlay });
  };

  this.handleHide = function (e) {
    return e.target && e.target.parentNode && e.target.parentNode.className && e.target.parentNode.className.includes('DayPicker') ? e.preventDefault() : _this3.setState({ showOverlay: false });
  };
}, _temp);
export { DateRange as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwibW9tZW50IiwiRm9ybUNvbnRyb2wiLCJPdmVybGF5IiwidGhlbWUiLCJDb25zdGFudHMiLCJEYXRlUmFuZ2VQb3BvdmVyIiwicG9wb3ZlclByb3BUeXBlcyIsInBvcG92ZXJEZWZhdWx0UHJvcHMiLCJyZWxhdGl2ZU9wdGlvbnMiLCJSZWFkT25seUlucHV0IiwiZGl2IiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwic3RhdGUiLCJpbml0U3RhdGUiLCJwb3BvdmVyUHJvcHMiLCJ1bmRlZmluZWQiLCJzaG93T3ZlcmxheSIsInJlbmRlciIsImNsYXNzTmFtZSIsImlkIiwiaW5wdXRSZWYiLCJpbnB1dFByb3BzIiwid2lkdGgiLCJEYXRlUmFuZ2VTZWN0aW9uIiwiZWwiLCJpbnB1dCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVIaWRlIiwibWVyZ2VQb3BvdmVyUHJvcHMiLCJoYW5kbGVSYW5nZVR5cGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzZXRTdGF0ZSIsImdldEFic29sdXRlUmFuZ2UiLCJhYnNvbHV0ZVJhbmdlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsInN0YXJ0T2YiLCJmb3JtYXQiLCJnZXRSZWxhdGl2ZU9wdGlvbiIsImlucHV0RGF0ZSIsImZpbmQiLCJvcHRpb24iLCJ1bml0IiwidGltaW5nIiwiZ2V0UmVsYXRpdmVSYW5nZSIsInJlbGF0aXZlUmFuZ2UiLCJFTkQiLCJTVEFSVCIsImxhYmVsIiwiaW5pdEFic29sdXRlUmFuZ2UiLCJpbml0UmVsYXRpdmVSYW5nZSIsInNlbGVjdGVkUmFuZ2VUeXBlIiwiaXNSZWxhdGl2ZUVuYWJsZWQiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsInNlbGVjdGVkRW5kRGF0ZSIsInRhcmdldCIsInNvdXJjZSIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50IiwicmFuZ2UiLCJlIiwicGFyZW50Tm9kZSIsImluY2x1ZGVzIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLElBQWlCQyxhQUFqQixRQUFzQyxtQkFBdEM7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsT0FBdEIsUUFBcUMsaUJBQXJDO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixrQ0FBdEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGlDQUF0QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHdDQUE3QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHNCQUE3QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHlCQUFoQztBQUNBLE9BQU9DLGVBQVAsTUFBNEIsd0NBQTVCOztBQUVBLElBQU1DLGdCQUFnQlgsT0FBT1ksR0FBdkIsa0JBRWtCUCxNQUFNUSxzQkFGeEIsQ0FBTjs7SUFNcUJDLFM7OztBQW9CbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBRWpCLFFBQU1DLFFBQVEsTUFBS0MsU0FBTCxDQUFlRixLQUFmLENBQWQ7QUFDQSxVQUFLQyxLQUFMO0FBQ0VFLG9CQUFjQztBQURoQixPQUVLSCxLQUZMO0FBR0VJLG1CQUFhO0FBSGY7QUFIaUI7QUFRbEI7O0FBdUpEOzs7Ozs7Ozs7O3NCQWNBQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJB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QUMsT0FBS0osS0FBTCxDQUFXSSxXQUEzQixFQUFkLENBQU47QUFBQSxHOztPQVVkWSxVLEdBQWE7QUFBQSxXQUNYOEMsRUFBRU4sTUFBRixJQUFZTSxFQUFFTixNQUFGLENBQVNPLFVBQXJCLElBQW1DRCxFQUFFTixNQUFGLENBQVNPLFVBQVQsQ0FBb0J6RCxTQUF2RCxJQUFvRXdELEVBQUVOLE1BQUYsQ0FBU08sVUFBVCxDQUFvQnpELFNBQXBCLENBQThCMEQsUUFBOUIsQ0FBdUMsV0FBdkMsQ0FBcEUsR0FDRUYsRUFBRUcsY0FBRixFQURGLEdBRUUsT0FBS3hDLFFBQUwsQ0FBYyxFQUFFckIsYUFBYSxLQUFmLEVBQWQsQ0FIUztBQUFBLEc7O1NBM0xNTixTIiwiZmlsZSI6ImRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9jb25zdGFudHMnO1xuaW1wb3J0IERhdGVSYW5nZVBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQnO1xuaW1wb3J0IHBvcG92ZXJQcm9wVHlwZXMgZnJvbSAnLi9wb3BvdmVyL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHBvcG92ZXJEZWZhdWx0UHJvcHMgZnJvbSAnLi9wb3BvdmVyL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHJlbGF0aXZlT3B0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5cbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLnNoYXBlKHBvcG92ZXJQcm9wVHlwZXMpLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHBvcG92ZXJQcm9wczogcG9wb3ZlckRlZmF1bHRQcm9wcyxcbiAgICB3aWR0aDogJzIwMHB4JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9wb3ZlclByb3BzOiB1bmRlZmluZWQsXG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcykgPT4ge1xuICAgIGlmIChwcmV2UHJvcHMucG9wb3ZlclByb3BzICE9PSB0aGlzLnByb3BzLnBvcG92ZXJQcm9wcykge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBYnNvbHV0ZVJhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcG9wb3ZlclByb3BzIH0gPSB0aGlzLnN0YXRlIHx8IHt9O1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gcG9wb3ZlclByb3BzIHx8IHt9O1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMuYWJzb2x1dGVSYW5nZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVPcHRpb24gPSBpbnB1dERhdGUgPT4gKFxuICAgIGlucHV0RGF0ZVxuICAgICAgPyByZWxhdGl2ZU9wdGlvbnMuZmluZChvcHRpb24gPT5cbiAgICAgICAgKCFvcHRpb24udmFsdWUubW9tZW50IHx8IG9wdGlvbi52YWx1ZS5tb21lbnQgPT09IGlucHV0RGF0ZS5tb21lbnQpXG4gICAgICAgICYmIG9wdGlvbi52YWx1ZS51bml0ID09PSBpbnB1dERhdGUudW5pdFxuICAgICAgICAmJiBvcHRpb24udmFsdWUudGltaW5nID09PSBpbnB1dERhdGUudGltaW5nKVxuICAgICAgOiB1bmRlZmluZWRcbiAgKVxuXG4gIGdldFJlbGF0aXZlUmFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwb3BvdmVyUHJvcHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICB9ID0gcG9wb3ZlclByb3BzIHx8IHt9O1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IGVuZERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5FTkQgfSxcbiAgICAgICAgc3RhcnREYXRlOiB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5TVEFSVCB9LFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbml0U3RhdGUgPSBwcm9wcyA9PiAoXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcylcbiAgKTtcblxuICBpbml0QWJzb2x1dGVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gcHJvcHMucG9wb3ZlclByb3BzIHx8IHt9O1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlLCBkYXRlRm9ybWF0IH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogJ2Fic29sdXRlJyxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IChmcm9tLmlzVmFsaWQoKSAmJiB0by5pc1ZhbGlkKCkpID9cbiAgICAgICAgICBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gIDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGluaXRSZWxhdGl2ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXNSZWxhdGl2ZUVuYWJsZWQsXG4gICAgICByZWxhdGl2ZVJhbmdlLFxuICAgIH0gPSBwcm9wcy5wb3BvdmVyUHJvcHMgfHwge307XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGFydERhdGUgPSB0aGlzLmdldFJlbGF0aXZlT3B0aW9uKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0gdGhpcy5nZXRSZWxhdGl2ZU9wdGlvbihlbmREYXRlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIGVuZERhdGU6IHNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gJ3JlbGF0aXZlJyA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICB2YWx1ZTogKGlzUmVsYXRpdmVFbmFibGVkICYmIHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSkgP1xuICAgICAgICBgJHtzZWxlY3RlZFN0YXJ0RGF0ZS5sYWJlbH0gLSAke3NlbGVjdGVkRW5kRGF0ZS5sYWJlbH1gIDogJycsXG4gICAgfTtcbiAgfVxuXG4gIG1lcmdlUG9wb3ZlclByb3BzID0gKHRhcmdldCA9IHt9LCBzb3VyY2UgPSB7fSkgPT4gKFxuICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRhcmdldCxcbiAgICAgIHNvdXJjZSxcbiAgICAgIHtcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLnRhcmdldC5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxuICAgICAgICAgIC4uLnNvdXJjZS5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4udGFyZ2V0LnJlbGF0aXZlUmFuZ2UgfHwge30sXG4gICAgICAgICAgLi4uc291cmNlLnJlbGF0aXZlUmFuZ2UgfHwge30sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICkpO1xuXG4gIGhhbmRsZVJhbmdlVHlwZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwb3BvdmVyUHJvcHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcmFuZ2UgPSBldmVudC5wb3BvdmVyUHJvcHMuc2VsZWN0ZWRSYW5nZVR5cGUgPT09ICdhYnNvbHV0ZSdcbiAgICAgID8gdGhpcy5nZXRBYnNvbHV0ZVJhbmdlKClcbiAgICAgIDogdGhpcy5nZXRSZWxhdGl2ZVJhbmdlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwb3BvdmVyUHJvcHM6IHRoaXMubWVyZ2VQb3BvdmVyUHJvcHMocG9wb3ZlclByb3BzLCBldmVudC5wb3BvdmVyUHJvcHMpLFxuICAgICAgdmFsdWU6IHJhbmdlID8gcmFuZ2UudmFsdWUgOiAnJyxcbiAgICB9KTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gcmFuZ2UgfHwge307XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcG9wb3ZlclByb3BzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9wb3ZlclByb3BzOiB0aGlzLm1lcmdlUG9wb3ZlclByb3BzKHBvcG92ZXJQcm9wcywgZXZlbnQucG9wb3ZlclByb3BzKSxcbiAgICAgIHZhbHVlOiBldmVudC52YWx1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBldmVudDtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogIXRoaXMuc3RhdGUuc2hvd092ZXJsYXkgfSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgZGlydHkgc29sdXRpb24gYW5kIGMvc2hvdWxkIGJlIGZpeGVkLlxuICAgKiBSb290IGNhdXNlOiBkYXktcGlja2VyIGlzIHJlbmRlcmVkIHRvIHJvb3QgZWxlbWVudCwgbm90IGluc2lkZSBwb3BvdmVyIGVsZWVtbnQuXG4gICAqIFRoZXJlZm9yZSBjbGljayBjb21pbmcgZm9ybSBkYXktcGlja2VyIGFyZSBjb25zaWRlcnMgYXMgb3V0c2lkZSBjbGljayBvZiBwb3BvdmVyXG4gICAqIGFuZCBwb3BvdmVyIHdvdWxkIGJlIGNsb3NlIHdpdGhvdXQgZXZlbnQgcHJldmVudERlZmF1bHQuXG4gICAqIE9uZSBzb2x1dGlvbiBpcyBwYXNzaW5nIGF0IGxlYXN0IHRyZWUgY2FsbGJhY2tzIGZvciByZWFjdC1kYXRldGltZTogb25XZWVrQ2xpY2ssXG4gICAqIG9uQ2FwdGlvbkNsaWNrIGFuZCBjdXN0b20gb25DbGljayBmb3IgY3VzdG9tIGNhcHRpb24gb2YgcmVhY3QtZGF0ZXRpbWUuXG4gICAqL1xuICBoYW5kbGVIaWRlID0gZSA9PiAoXG4gICAgZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50Tm9kZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmNsdWRlcygnRGF5UGlja2VyJykgP1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIDpcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogZmFsc2UgfSlcbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWQsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6ICR7d2lkdGh9O1xuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPFJlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFkT25seUlucHV0PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd092ZXJsYXl9XG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlSGlkZX1cbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICBjb250YWluZXI9e3RoaXN9XG4gICAgICAgICAgICByb290Q2xvc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZVJhbmdlUG9wb3ZlclxuICAgICAgICAgICAgICB7Li4udGhpcy5tZXJnZVBvcG92ZXJQcm9wcyh0aGlzLnByb3BzLnBvcG92ZXJQcm9wcywgdGhpcy5zdGF0ZS5wb3BvdmVyUHJvcHMpfVxuICAgICAgICAgICAgICBvblJhbmdlVHlwZUNoYW5nZT17dGhpcy5oYW5kbGVSYW5nZVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9PdmVybGF5Pn1cbiAgICAgICAgPC9EYXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==