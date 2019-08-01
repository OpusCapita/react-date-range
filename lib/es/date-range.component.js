function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n      width: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  .form-control[readonly] {\n    background-color: ", ";\n    padding-right: 32px;\n    cursor: pointer;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  display: flex;\n  svg {\n    margin: 9px 8px 9px -24px;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

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
var ReadOnlyInput = styled.div(_templateObject(), theme.contentBackgroundColor, theme.colors.grey9);
var Constants = Object.freeze({
  ABSOLUTE: 'absolute',
  PERIOD: 'period',
  RELATIVE: 'relative'
});

var DateRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DateRange, _React$PureComponent);

  function DateRange(_props) {
    var _this;

    _this = _React$PureComponent.call(this, _props) || this;

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      if (prevProps.absoluteRange !== _this.props.absoluteRange || prevProps.relativeRange !== _this.props.relativeRange || prevProps.period !== _this.props.period) {
        var state = _this.initState(_this.props);

        if (state) {
          _this.setState(state);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAbsoluteState", function () {
      var absoluteRange = _this.state.absoluteRange;

      var _ref = absoluteRange || {},
          endDate = _ref.endDate,
          startDate = _ref.startDate;

      var dateFormat = _this.props.absoluteRange.dateFormat;

      if (startDate && endDate) {
        var from = moment.utc(startDate);
        var to = moment.utc(endDate);

        if (from.isValid() && to.isValid()) {
          return {
            endDate: to.endOf('day').toISOString(),
            startDate: from.startOf('day').toISOString(),
            value: from.format(dateFormat) + " - " + to.format(dateFormat)
          };
        }
      }

      return {
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getPeriodState", function () {
      var translations = _this.props.translations;
      var period = _this.state.period;

      var _ref2 = period || {},
          endDate = _ref2.endDate,
          startDate = _ref2.startDate;

      if (endDate && startDate && startDate.value) {
        return {
          endDate: _extends({}, endDate, {
            moment: endDate.moment || RelativeConstants.END
          }),
          startDate: _extends({}, startDate.value, {
            moment: startDate.value.moment || RelativeConstants.START
          }),
          value: formatPeriodLabel(startDate, endDate, translations)
        };
      }

      return {
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getRelativeState", function () {
      var relativeRange = _this.state.relativeRange;

      var _ref3 = relativeRange || {},
          endDate = _ref3.endDate,
          startDate = _ref3.startDate;

      if (endDate && startDate && endDate.value && startDate.value) {
        return {
          endDate: _extends({}, endDate.value, {
            moment: endDate.value.moment || RelativeConstants.END
          }),
          startDate: _extends({}, startDate.value, {
            moment: startDate.value.moment || RelativeConstants.START
          }),
          value: startDate.label + " - " + endDate.label
        };
      }

      return {
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "initState", function (props) {
      return _this.initAbsoluteRange(props) || _this.initRelativeRange(props) || _this.initPeriod(props);
    });

    _defineProperty(_assertThisInitialized(_this), "initAbsoluteRange", function (props) {
      var absoluteRange = props.absoluteRange;

      var _ref4 = absoluteRange || {},
          endDate = _ref4.endDate,
          startDate = _ref4.startDate,
          dateFormat = _ref4.dateFormat;

      var _ref5 = (_this.state || {}).absoluteRange || {},
          showOverlay = _ref5.showOverlay;

      if (startDate && endDate) {
        var from = moment.utc(startDate);
        var to = moment.utc(endDate);
        return {
          absoluteRange: {
            showOverlay: showOverlay,
            endDate: to.endOf('day').toISOString(),
            startDate: from.startOf('day').toISOString()
          },
          selectedRangeType: Constants.ABSOLUTE,
          value: from.isValid() && to.isValid() ? from.format(dateFormat) + " - " + to.format(dateFormat) : '',
          lastValidRange: Constants.ABSOLUTE
        };
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "initPeriod", function (props) {
      var enabled = props.enabled,
          period = props.period,
          translations = props.translations;

      var _ref6 = period || {},
          endDate = _ref6.endDate,
          startDate = _ref6.startDate;

      var selectedStartDate = getRelativeOption(startDate, translate(translations, 'dates'));
      var selectedRangeType = endDate && selectedStartDate ? Constants.PERIOD : undefined;
      return {
        period: {
          endDate: endDate,
          startDate: selectedStartDate
        },
        selectedRangeType: selectedRangeType,
        value: enabled.period && endDate && selectedStartDate ? formatPeriodLabel(selectedStartDate, endDate, translations) : '',
        lastValidRange: selectedRangeType
      };
    });

    _defineProperty(_assertThisInitialized(_this), "initRelativeRange", function (props) {
      var enabled = props.enabled,
          relativeRange = props.relativeRange,
          translations = props.translations;

      var _ref7 = relativeRange || {},
          endDate = _ref7.endDate,
          startDate = _ref7.startDate;

      if (endDate && startDate) {
        var selectedStartDate = getRelativeOption(startDate, translate(translations, 'dates'));
        var selectedEndDate = getRelativeOption(endDate, translate(translations, 'dates'));
        var selectedRangeType = selectedEndDate && selectedStartDate ? Constants.RELATIVE : undefined;
        return {
          relativeRange: {
            endDate: selectedEndDate,
            startDate: selectedStartDate
          },
          selectedRangeType: selectedRangeType,
          value: enabled.relative && selectedEndDate && selectedStartDate ? selectedStartDate.label + " - " + selectedEndDate.label : '',
          lastValidRange: selectedRangeType
        };
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleRangeTypeChange", function (event) {
      var onChange = _this.props.onChange;
      var selectedRangeType = event.selectedRangeType;

      var state = _this["get" + selectedRangeType.replace(/\w/, function (c) {
        return c.toUpperCase();
      }) + "State"]();

      _this.setState(_extends({}, state, {
        selectedRangeType: selectedRangeType
      }));

      var startDate = state.startDate,
          endDate = state.endDate;

      if (startDate && endDate) {
        onChange({
          startDate: startDate,
          endDate: endDate
        });

        _this.setState({
          lastValidRange: selectedRangeType
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var onChange = _this.props.onChange;
      var lastValidRange = _this.state.selectedRangeType;

      _this.setState(event);

      var startDate = event.startDate,
          endDate = event.endDate;

      if (startDate && endDate) {
        onChange({
          startDate: startDate,
          endDate: endDate
        });

        _this.setState({
          lastValidRange: lastValidRange
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      return _this.setState({
        showOverlay: !_this.state.showOverlay
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHide", function (e) {
      /**
       * This if is dirty solution and c/should be fixed.
       * Root cause: day-picker is rendered to root element, not inside popover eleemnt.
       * Therefore click coming form day-picker are considers as outside click of popover
       * and popover would be close without event preventDefault.
       * One solution is passing at least tree callbacks for react-datetime: onWeekClick,
       * onCaptionClick and custom onClick for custom caption of react-datetime.
       */
      if (e.target && e.target.parentNode && e.target.parentNode.className && e.target.parentNode.className.includes('DayPicker')) {
        e.preventDefault();
        return;
      }

      var _this$state = _this.state,
          value = _this$state.value,
          lastValidRange = _this$state.lastValidRange;
      var state = !value && lastValidRange ? _extends({}, _this["get" + lastValidRange.replace(/\w/, function (c) {
        return c.toUpperCase();
      }) + "State"](), {
        selectedRangeType: lastValidRange,
        showOverlay: false
      }) : {
        showOverlay: false
      };

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "renderCaret", function () {
      var showOverlay = _this.state.showOverlay;
      return showOverlay ? React.createElement(FaCaretUp, {
        onClick: _this.handleClick
      }) : React.createElement(FaCaretDown, {
        onClick: _this.handleClick
      });
    });

    var _state = _this.initState(_props);

    _this.state = _extends({}, _state, {
      showOverlay: false
    });
    return _this;
  }

  var _proto = DateRange.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        enabled = _this$props.enabled,
        id = _this$props.id,
        _inputRef = _this$props.inputRef,
        inputProps = _this$props.inputProps,
        translations = _this$props.translations,
        width = _this$props.width;
    var _this$state2 = this.state,
        period = _this$state2.period,
        relativeRange = _this$state2.relativeRange,
        selectedRangeType = _this$state2.selectedRangeType,
        showOverlay = _this$state2.showOverlay,
        value = _this$state2.value;

    var absoluteRange = _extends({}, this.props.absoluteRange, this.state.absoluteRange);

    var DateRangeSection = styled.div(_templateObject2(), width);
    return React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(DateRangeSection, {
      id: id,
      className: className
    }, React.createElement(ReadOnlyInput, {
      showOverlay: showOverlay
    }, React.createElement(FormControl, _extends({
      type: "text",
      inputRef: function inputRef(el) {
        _this2.input = el;

        _inputRef(el);
      }
    }, inputProps, {
      readOnly: "readonly",
      value: value,
      onClick: this.handleClick
    })), this.renderCaret()), React.createElement(Overlay, {
      show: showOverlay,
      onHide: this.handleHide,
      placement: "bottom",
      container: this,
      rootClose: true
    }, React.createElement(DateRangePopover, {
      absoluteRange: absoluteRange,
      enabled: enabled,
      onRangeTypeChange: this.handleRangeTypeChange,
      onChange: this.handleChange,
      period: period,
      selectedRangeType: selectedRangeType,
      relativeRange: relativeRange,
      translations: translations
    }))));
  };

  return DateRange;
}(React.PureComponent);

_defineProperty(DateRange, "defaultProps", {
  absoluteRange: absoluteRangeDefaultProps,
  className: '',
  enabled: {
    absolute: true,
    period: false,
    relative: false
  },
  inputProps: {},
  inputRef: function inputRef() {},
  onChange: function onChange() {},
  period: periodDefaultProps,
  relativeRange: relativeRangeDefaultProps,
  translations: translationsDefaultProps,
  width: '300px'
});

export { DateRange as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwibW9tZW50IiwiRm9ybUNvbnRyb2wiLCJPdmVybGF5IiwiRmFDYXJldERvd24iLCJGYUNhcmV0VXAiLCJ0aGVtZSIsImFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMiLCJhYnNvbHV0ZVJhbmdlUHJvcFR5cGVzIiwiUmVsYXRpdmVDb25zdGFudHMiLCJEYXRlUmFuZ2VQb3BvdmVyIiwiZm9ybWF0UGVyaW9kTGFiZWwiLCJnZXRSZWxhdGl2ZU9wdGlvbiIsInBlcmlvZERlZmF1bHRQcm9wcyIsInBlcmlvZFNoYXBlIiwicmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyIsInJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUiLCJ0cmFuc2xhdGUiLCJ0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMiLCJ0cmFuc2xhdGlvbnNQcm9wVHlwZXMiLCJSZWFkT25seUlucHV0IiwiZGl2IiwiY29udGVudEJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImdyZXk5IiwiQ29uc3RhbnRzIiwiT2JqZWN0IiwiZnJlZXplIiwiQUJTT0xVVEUiLCJQRVJJT0QiLCJSRUxBVElWRSIsIkRhdGVSYW5nZSIsInByb3BzIiwicHJldlByb3BzIiwiYWJzb2x1dGVSYW5nZSIsInJlbGF0aXZlUmFuZ2UiLCJwZXJpb2QiLCJzdGF0ZSIsImluaXRTdGF0ZSIsInNldFN0YXRlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsInN0YXJ0T2YiLCJ2YWx1ZSIsImZvcm1hdCIsInRyYW5zbGF0aW9ucyIsIkVORCIsIlNUQVJUIiwibGFiZWwiLCJpbml0QWJzb2x1dGVSYW5nZSIsImluaXRSZWxhdGl2ZVJhbmdlIiwiaW5pdFBlcmlvZCIsInNob3dPdmVybGF5Iiwic2VsZWN0ZWRSYW5nZVR5cGUiLCJsYXN0VmFsaWRSYW5nZSIsImVuYWJsZWQiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkRW5kRGF0ZSIsInJlbGF0aXZlIiwiZXZlbnQiLCJvbkNoYW5nZSIsInJlcGxhY2UiLCJjIiwidG9VcHBlckNhc2UiLCJlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNsYXNzTmFtZSIsImluY2x1ZGVzIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbGljayIsInJlbmRlciIsImlkIiwiaW5wdXRSZWYiLCJpbnB1dFByb3BzIiwid2lkdGgiLCJEYXRlUmFuZ2VTZWN0aW9uIiwiZWwiLCJpbnB1dCIsInJlbmRlckNhcmV0IiwiaGFuZGxlSGlkZSIsImhhbmRsZVJhbmdlVHlwZUNoYW5nZSIsImhhbmRsZUNoYW5nZSIsIlB1cmVDb21wb25lbnQiLCJhYnNvbHV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsSUFBaUJDLGFBQWpCLFFBQXNDLG1CQUF0QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxPQUF0QixRQUFxQyxpQkFBckM7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxTQUF0QixRQUF1QyxnQkFBdkM7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0QjtBQUNBLE9BQU9DLHlCQUFQLE1BQXNDLHFDQUF0QztBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLGtDQUFuQztBQUNBLE9BQU9DLGlCQUFQLE1BQThCLGlDQUE5QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHdDQUE3QjtBQUNBLE9BQU9DLGlCQUFQLE1BQThCLDRDQUE5QjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLHdDQUFsQztBQUNBLE9BQU9DLGtCQUFQ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RCxHOzs7RUF4VG9DdkQsS0FBSyxDQUFDOEYsYTs7Z0JBQXhCNUQsUyxrQkEyQkc7QUFDcEJHLEVBQUFBLGFBQWEsRUFBRTNCLHlCQURLO0FBRXBCb0UsRUFBQUEsU0FBUyxFQUFFLEVBRlM7QUFHcEJiLEVBQUFBLE9BQU8sRUFBRTtBQUNQOEIsSUFBQUEsUUFBUSxFQUFFLElBREg7QUFFUHhELElBQUFBLE1BQU0sRUFBRSxLQUZEO0FBR1A4QixJQUFBQSxRQUFRLEVBQUU7QUFISCxHQUhXO0FBUXBCZ0IsRUFBQUEsVUFBVSxFQUFFLEVBUlE7QUFTcEJELEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBVEU7QUFVcEJiLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBVkU7QUFXcEJoQyxFQUFBQSxNQUFNLEVBQUV2QixrQkFYWTtBQVlwQnNCLEVBQUFBLGFBQWEsRUFBRXBCLHlCQVpLO0FBYXBCcUMsRUFBQUEsWUFBWSxFQUFFbEMsd0JBYk07QUFjcEJpRSxFQUFBQSxLQUFLLEVBQUU7QUFkYSxDOztTQTNCSHBELFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgT3ZlcmxheSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBGYUNhcmV0RG93biwgRmFDYXJldFVwIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvYWJzb2x1dGUvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgYWJzb2x1dGVSYW5nZVByb3BUeXBlcyBmcm9tICcuL2NvbXBvbmVudHMvYWJzb2x1dGUvcHJvcC10eXBlcyc7XG5pbXBvcnQgUmVsYXRpdmVDb25zdGFudHMgZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL2NvbnN0YW50cyc7XG5pbXBvcnQgRGF0ZVJhbmdlUG9wb3ZlciBmcm9tICcuL3BvcG92ZXIvZGF0ZS1yYW5nZS1wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgZm9ybWF0UGVyaW9kTGFiZWwgZnJvbSAnLi9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QtbGFiZWwuZm9ybWF0dGVyJztcbmltcG9ydCB7IGdldFJlbGF0aXZlT3B0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLW9wdGlvbnMnO1xuaW1wb3J0IHBlcmlvZERlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHsgcGVyaW9kU2hhcGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHsgcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSB9IGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9wcm9wLXR5cGVzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcbmltcG9ydCB0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgdHJhbnNsYXRpb25zUHJvcFR5cGVzIGZyb20gJy4vdHJhbnNsYXRpb25zL3Byb3AtdHlwZXMnO1xuXG5jb25zdCBSZWFkT25seUlucHV0ID0gc3R5bGVkLmRpdmBcbiAgLmZvcm0tY29udHJvbFtyZWFkb25seV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiA5cHggOHB4IDlweCAtMjRweDtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTl9O1xuICB9XG5gO1xuXG5jb25zdCBDb25zdGFudHMgPSBPYmplY3QuZnJlZXplKHtcbiAgQUJTT0xVVEU6ICdhYnNvbHV0ZScsXG4gIFBFUklPRDogJ3BlcmlvZCcsXG4gIFJFTEFUSVZFOiAncmVsYXRpdmUnLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWJzb2x1dGVSYW5nZTogUHJvcFR5cGVzLnNoYXBlKGFic29sdXRlUmFuZ2VQcm9wVHlwZXMpLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbmFibGVkOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYWJzb2x1dGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgcGVyaW9kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHJlbGF0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB9KSxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGVyaW9kOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW5kRGF0ZTogcGVyaW9kU2hhcGUsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzdGFydERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgfSksXG4gICAgcmVsYXRpdmVSYW5nZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVuZERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzdGFydERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgfSksXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUodHJhbnNsYXRpb25zUHJvcFR5cGVzKSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFic29sdXRlUmFuZ2U6IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBlbmFibGVkOiB7XG4gICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgIHBlcmlvZDogZmFsc2UsXG4gICAgICByZWxhdGl2ZTogZmFsc2UsXG4gICAgfSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHBlcmlvZDogcGVyaW9kRGVmYXVsdFByb3BzLFxuICAgIHJlbGF0aXZlUmFuZ2U6IHJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMsXG4gICAgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMsXG4gICAgd2lkdGg6ICczMDBweCcsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZShwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzKSA9PiB7XG4gICAgaWYgKHByZXZQcm9wcy5hYnNvbHV0ZVJhbmdlICE9PSB0aGlzLnByb3BzLmFic29sdXRlUmFuZ2UgfHxcbiAgICAgICAgcHJldlByb3BzLnJlbGF0aXZlUmFuZ2UgIT09IHRoaXMucHJvcHMucmVsYXRpdmVSYW5nZSB8fFxuICAgICAgICBwcmV2UHJvcHMucGVyaW9kICE9PSB0aGlzLnByb3BzLnBlcmlvZCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBYnNvbHV0ZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHMuYWJzb2x1dGVSYW5nZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgZ2V0UGVyaW9kU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwZXJpb2QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUgJiYgc3RhcnREYXRlLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmREYXRlOiB7IC4uLmVuZERhdGUsIG1vbWVudDogZW5kRGF0ZS5tb21lbnQgfHwgUmVsYXRpdmVDb25zdGFudHMuRU5EIH0sXG4gICAgICAgIHN0YXJ0RGF0ZToge1xuICAgICAgICAgIC4uLnN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgICAgICBtb21lbnQ6IHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgfHwgUmVsYXRpdmVDb25zdGFudHMuU1RBUlQsXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBmb3JtYXRQZXJpb2RMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWxhdGl2ZVJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IGVuZERhdGUudmFsdWUubW9tZW50IHx8IFJlbGF0aXZlQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICAuLi5zdGFydERhdGUudmFsdWUsXG4gICAgICAgICAgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJULFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBpbml0U3RhdGUgPSBwcm9wcyA9PiAoXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UGVyaW9kKHByb3BzKVxuICApO1xuXG4gIGluaXRBYnNvbHV0ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgZGF0ZUZvcm1hdCB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSAodGhpcy5zdGF0ZSB8fCB7fSkuYWJzb2x1dGVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICBzaG93T3ZlcmxheSxcbiAgICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IENvbnN0YW50cy5BQlNPTFVURSxcbiAgICAgICAgdmFsdWU6IChmcm9tLmlzVmFsaWQoKSAmJiB0by5pc1ZhbGlkKCkpID9cbiAgICAgICAgICBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gIDogJycsXG4gICAgICAgIGxhc3RWYWxpZFJhbmdlOiBDb25zdGFudHMuQUJTT0xVVEUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGluaXRQZXJpb2QgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHBlcmlvZCwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcGVyaW9kIHx8IHt9O1xuICAgIGNvbnN0IHNlbGVjdGVkU3RhcnREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oc3RhcnREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZVR5cGUgPSBlbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gQ29uc3RhbnRzLlBFUklPRCA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiB7XG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgc3RhcnREYXRlOiBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgIH0sXG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICAgIHZhbHVlOiAoZW5hYmxlZC5wZXJpb2QgJiYgZW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSkgP1xuICAgICAgICBmb3JtYXRQZXJpb2RMYWJlbChzZWxlY3RlZFN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSA6ICcnLFxuICAgICAgbGFzdFZhbGlkUmFuZ2U6IHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH07XG4gIH1cblxuICBpbml0UmVsYXRpdmVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgcmVsYXRpdmVSYW5nZSwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRTdGFydERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihzdGFydERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKGVuZERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlXG4gICAgICAgID8gQ29uc3RhbnRzLlJFTEFUSVZFIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgZW5kRGF0ZTogc2VsZWN0ZWRFbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgICB2YWx1ZTogKGVuYWJsZWQucmVsYXRpdmUgJiYgc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlKSA/XG4gICAgICAgICAgYCR7c2VsZWN0ZWRTdGFydERhdGUubGFiZWx9IC0gJHtzZWxlY3RlZEVuZERhdGUubGFiZWx9YCA6ICcnLFxuICAgICAgICBsYXN0VmFsaWRSYW5nZTogc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVJhbmdlVHlwZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFJhbmdlVHlwZSB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzW2BnZXQke3NlbGVjdGVkUmFuZ2VUeXBlLnJlcGxhY2UoL1xcdy8sIGMgPT4gYy50b1VwcGVyQ2FzZSgpKX1TdGF0ZWBdKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBzdGF0ZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RWYWxpZFJhbmdlOiBzZWxlY3RlZFJhbmdlVHlwZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGU6IGxhc3RWYWxpZFJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoZXZlbnQpO1xuXG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IGV2ZW50O1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgb25DaGFuZ2UoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGFzdFZhbGlkUmFuZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dPdmVybGF5OiAhdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSB9KTtcblxuICBoYW5kbGVIaWRlID0gKGUpID0+IHtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlmIGlzIGRpcnR5IHNvbHV0aW9uIGFuZCBjL3Nob3VsZCBiZSBmaXhlZC5cbiAgICAgKiBSb290IGNhdXNlOiBkYXktcGlja2VyIGlzIHJlbmRlcmVkIHRvIHJvb3QgZWxlbWVudCwgbm90IGluc2lkZSBwb3BvdmVyIGVsZWVtbnQuXG4gICAgICogVGhlcmVmb3JlIGNsaWNrIGNvbWluZyBmb3JtIGRheS1waWNrZXIgYXJlIGNvbnNpZGVycyBhcyBvdXRzaWRlIGNsaWNrIG9mIHBvcG92ZXJcbiAgICAgKiBhbmQgcG9wb3ZlciB3b3VsZCBiZSBjbG9zZSB3aXRob3V0IGV2ZW50IHByZXZlbnREZWZhdWx0LlxuICAgICAqIE9uZSBzb2x1dGlvbiBpcyBwYXNzaW5nIGF0IGxlYXN0IHRyZWUgY2FsbGJhY2tzIGZvciByZWFjdC1kYXRldGltZTogb25XZWVrQ2xpY2ssXG4gICAgICogb25DYXB0aW9uQ2xpY2sgYW5kIGN1c3RvbSBvbkNsaWNrIGZvciBjdXN0b20gY2FwdGlvbiBvZiByZWFjdC1kYXRldGltZS5cbiAgICAgKi9cbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50Tm9kZVxuICAgICAgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWVcbiAgICAgICYmIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lLmluY2x1ZGVzKCdEYXlQaWNrZXInKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHZhbHVlLCBsYXN0VmFsaWRSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzdGF0ZSA9ICF2YWx1ZSAmJiBsYXN0VmFsaWRSYW5nZVxuICAgICAgPyB7XG4gICAgICAgIC4uLnRoaXNbYGdldCR7bGFzdFZhbGlkUmFuZ2UucmVwbGFjZSgvXFx3LywgYyA9PiBjLnRvVXBwZXJDYXNlKCkpfVN0YXRlYF0oKSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IGxhc3RWYWxpZFJhbmdlLFxuICAgICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfTtcblxuICByZW5kZXJDYXJldCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiBzaG93T3ZlcmxheVxuICAgICAgPyA8RmFDYXJldFVwIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgICA6IDxGYUNhcmV0RG93biBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBlbmFibGVkLFxuICAgICAgaWQsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBwZXJpb2QsXG4gICAgICByZWxhdGl2ZVJhbmdlLFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgICBzaG93T3ZlcmxheSxcbiAgICAgIHZhbHVlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLmFic29sdXRlUmFuZ2UsXG4gICAgICAuLi50aGlzLnN0YXRlLmFic29sdXRlUmFuZ2UsXG4gICAgfTtcblxuICAgIGNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6ICR7d2lkdGh9O1xuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPFJlYWRPbmx5SW5wdXQgc2hvd092ZXJsYXk9e3Nob3dPdmVybGF5fT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgICAgcmVhZE9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJldCgpfVxuICAgICAgICAgIDwvUmVhZE9ubHlJbnB1dD5cbiAgICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgICAgc2hvdz17c2hvd092ZXJsYXl9XG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlSGlkZX1cbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICBjb250YWluZXI9e3RoaXN9XG4gICAgICAgICAgICByb290Q2xvc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZVJhbmdlUG9wb3ZlclxuICAgICAgICAgICAgICBhYnNvbHV0ZVJhbmdlPXthYnNvbHV0ZVJhbmdlfVxuICAgICAgICAgICAgICBlbmFibGVkPXtlbmFibGVkfVxuICAgICAgICAgICAgICBvblJhbmdlVHlwZUNoYW5nZT17dGhpcy5oYW5kbGVSYW5nZVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGVyaW9kPXtwZXJpb2R9XG4gICAgICAgICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlPXtzZWxlY3RlZFJhbmdlVHlwZX1cbiAgICAgICAgICAgICAgcmVsYXRpdmVSYW5nZT17cmVsYXRpdmVSYW5nZX1cbiAgICAgICAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvT3ZlcmxheT5cbiAgICAgICAgPC9EYXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==