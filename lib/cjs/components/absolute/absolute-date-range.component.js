"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _uuid = require("uuid");

var _reactDatetime = require("@opuscapita/react-datetime");

var _ocCmCommonLayouts = require("@opuscapita/oc-cm-common-layouts");

var _dateSection = _interopRequireDefault(require("../date-section.components"));

var _hyphen = _interopRequireDefault(require("../hyphen.component"));

var _propTypes = _interopRequireDefault(require("./prop-types"));

var _defaultProps = _interopRequireDefault(require("./default-props"));

var _overlays = _interopRequireDefault(require("./overlays"));

var _translate = _interopRequireDefault(require("../../translations/translate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n  padding: ", " 0 0 0;\n  .form-group {\n    margin-bottom: 0;\n  }\n  .oc-datetime-static-container {\n    margin-top: ", ";\n  }\n  .oc-datetime.start-date {\n    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--outside) {\n      background-color: #ffdbc2;\n      color: ", ";\n    }\n  }\n  .oc-datetime.end-date {\n    .DayPicker-Day--selected:not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n      background-color: #ffdbc2;\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var AbsoluteRangeSection = _styledComponents["default"].div(_templateObject(), _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.colors.grey10, _ocCmCommonLayouts.theme.colors.grey10);

var AbsoluteDateRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(AbsoluteDateRange, _React$PureComponent);

  function AbsoluteDateRange(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var showOverlay = _this.props.showOverlay;

      if (_this.from && showOverlay === _overlays["default"].START) {
        _this.from.focus();
      } else if (_this.to && showOverlay === _overlays["default"].END) {
        _this.to.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDayClick", function () {
      _this.from = undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "isYearAutoFixed", function (startDate) {
      var year = startDate.year();

      var epoch = _moment["default"].unix(0).year();

      return year < epoch;
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (date) {
      var _this$props = _this.props,
          dateFormat = _this$props.dateFormat,
          onChange = _this$props.onChange;
      var startDate = date;

      var from = _moment["default"].utc(startDate);

      if (!from.isValid()) return;
      if (_this.isYearAutoFixed(from)) return;
      var endDate = _this.state.endDate;
      var absoluteRange = {
        startDate: startDate,
        showOverlay: _overlays["default"].START
      };
      var state;

      if (!endDate) {
        state = {
          startDate: startDate,
          absoluteRange: absoluteRange
        };
      } else {
        var to = _moment["default"].utc(endDate);

        if (from.isAfter(to)) {
          startDate = endDate;
          from = to;
        }

        state = {
          startDate: startDate,
          endDate: to.endOf('day').toISOString(),
          value: from.format(dateFormat) + " - " + to.format(dateFormat),
          absoluteRange: _extends({}, absoluteRange, {
            startDate: startDate,
            endDate: endDate
          })
        };
      }

      var disabledEndDays = {
        before: new Date(startDate)
      };

      _this.setState({
        startDate: startDate,
        disabledEndDays: disabledEndDays
      });

      onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (inputDate, handleChange) {
      var dateFormat = _this.props.dateFormat;

      var utcDate = _moment["default"].utc(inputDate, dateFormat, true);

      if (utcDate.isValid()) {
        handleChange(utcDate.toISOString());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function (e, currentValue, handleChange) {
      if (!e) return;
      var dateFormat = _this.props.dateFormat;
      var value = e.target.value;
      var utcDate = value ? _moment["default"].utc(value, dateFormat).toISOString() : value;
      if (utcDate !== currentValue) handleChange(utcDate);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDayClick", function () {
      _this.to = undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (date) {
      var _this$props2 = _this.props,
          dateFormat = _this$props2.dateFormat,
          onChange = _this$props2.onChange;
      var endDate = date;

      var to = _moment["default"].utc(endDate);

      if (!to.isValid()) return;
      if (_this.isYearAutoFixed(to)) return;
      var startDate = _this.state.startDate;
      var absoluteRange = {
        endDate: endDate,
        showOverlay: _overlays["default"].END
      };
      var state;

      if (!startDate) {
        state = {
          endDate: endDate,
          absoluteRange: absoluteRange
        };
      } else {
        var from = _moment["default"].utc(startDate);

        if (to.isBefore(from)) {
          endDate = startDate;
          to = from;
        }

        state = {
          startDate: from.startOf('day').toISOString(),
          endDate: to.endOf('day').toISOString(),
          value: from.format(dateFormat) + " - " + to.format(dateFormat),
          absoluteRange: _extends({}, absoluteRange, {
            endDate: endDate,
            startDate: startDate
          })
        };
      }

      var disabledStartDays = {
        after: new Date(endDate)
      };

      _this.setState({
        endDate: endDate,
        disabledStartDays: disabledStartDays
      });

      onChange(state);
    });

    var _this$props3 = _this.props,
        _startDate = _this$props3.startDate,
        _endDate = _this$props3.endDate;
    /* eslint-disable max-len */

    var utcStartDate = (0, _moment["default"])(_startDate).isValid() ? _moment["default"].utc(_startDate).startOf('day').toISOString() : _startDate;
    var utcEndDate = (0, _moment["default"])(_endDate).isValid() ? _moment["default"].utc(_endDate).startOf('day').toISOString() : _endDate;
    utcEndDate = (0, _moment["default"])(utcStartDate).isValid() && (0, _moment["default"])(utcEndDate).isValid() && (0, _moment["default"])(utcEndDate).isBefore((0, _moment["default"])(utcStartDate)) ? utcStartDate : utcEndDate;

    var _disabledStartDays = (0, _moment["default"])(utcEndDate).isValid() ? {
      after: new Date(utcEndDate)
    } : null;

    var _disabledEndDays = (0, _moment["default"])(utcStartDate).isValid() ? {
      before: new Date(utcStartDate)
    } : null;
    /* eslint-enable max-len */


    _this.state = {
      startDate: utcStartDate,
      startDateId: "start-date-" + (0, _uuid.v4)(),
      endDate: utcEndDate,
      endDateId: "end-date-" + (0, _uuid.v4)(),
      disabledStartDays: _disabledStartDays,
      disabledEndDays: _disabledEndDays
    };
    return _this;
  }

  var _proto = AbsoluteDateRange.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props4 = this.props,
        className = _this$props4.className,
        region = _this$props4.region,
        dateFormat = _this$props4.dateFormat,
        numberOfMonths = _this$props4.numberOfMonths,
        showOverlay = _this$props4.showOverlay,
        showWeekNumbers = _this$props4.showWeekNumbers,
        translations = _this$props4.translations;
    var _this$state = this.state,
        disabledEndDays = _this$state.disabledEndDays,
        disabledStartDays = _this$state.disabledStartDays,
        startDate = _this$state.startDate,
        startDateId = _this$state.startDateId,
        endDate = _this$state.endDate,
        endDateId = _this$state.endDateId;
    var handleEndDateChange = this.handleEndDateChange,
        handleStartDateChange = this.handleStartDateChange;
    var from = new Date(startDate);
    var to = new Date(endDate);
    var modifiers = {
      start: from,
      end: to
    };
    return _react["default"].createElement(AbsoluteRangeSection, null, _react["default"].createElement(_dateSection["default"], null, _react["default"].createElement(_ocCmCommonLayouts.Content.InputColumn, {
      className: "absolute-start-date",
      id: "absoluteStartDate",
      label: (0, _translate["default"])(translations, 'startDate')
    }, _react["default"].createElement(_reactDatetime.DateInput, {
      className: className + " start-date",
      dateFormat: dateFormat,
      disabledDays: disabledStartDays,
      locale: region,
      modifiers: modifiers,
      numberOfMonths: numberOfMonths,
      onChange: this.handleStartDateChange,
      inputProps: {
        id: startDateId,
        onChange: function onChange(inputDate) {
          return _this2.handleInputChange(inputDate, handleStartDateChange);
        },
        onBlur: function onBlur(e) {
          return _this2.handleInputBlur(e, startDate, handleStartDateChange);
        }
      },
      inputRef: function inputRef(el) {
        return _this2.from = el;
      },
      selectedDays: [from, {
        from: from,
        to: to
      }],
      showClearValue: false,
      showOverlay: showOverlay === _overlays["default"].START,
      showWeekNumbers: showWeekNumbers,
      toMonth: to,
      value: startDate,
      calendarType: "static"
    }))), _react["default"].createElement(_hyphen["default"], null), _react["default"].createElement(_dateSection["default"], null, _react["default"].createElement(_ocCmCommonLayouts.Content.InputColumn, {
      className: "absolute-end-date",
      id: "absoluteEndDate",
      label: (0, _translate["default"])(translations, 'endDate')
    }, _react["default"].createElement(_reactDatetime.DateInput, {
      className: className + " end-date",
      dateFormat: dateFormat,
      disabledDays: disabledEndDays,
      fromMonth: from,
      locale: region,
      modifiers: modifiers,
      month: from,
      numberOfMonths: numberOfMonths,
      onChange: this.handleEndDateChange,
      inputProps: {
        id: endDateId,
        onChange: function onChange(inputDate) {
          return _this2.handleInputChange(inputDate, handleEndDateChange);
        },
        onBlur: function onBlur(e) {
          return _this2.handleInputBlur(e, endDate, handleEndDateChange);
        }
      },
      inputRef: function inputRef(el) {
        return _this2.to = el;
      },
      selectedDays: [from, {
        from: from,
        to: to
      }],
      showClearValue: false,
      showOverlay: showOverlay === _overlays["default"].END,
      showWeekNumbers: showWeekNumbers,
      value: endDate,
      calendarType: "static"
    }))));
  };

  return AbsoluteDateRange;
}(_react["default"].PureComponent);

exports["default"] = AbsoluteDateRange;
AbsoluteDateRange.defaultProps = _defaultProps["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJjb2xvcnMiLCJncmV5MTAiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic2hvd092ZXJsYXkiLCJmcm9tIiwiT3ZlcmxheXMiLCJTVEFSVCIsImZvY3VzIiwidG8iLCJFTkQiLCJ1bmRlZmluZWQiLCJzdGFydERhdGUiLCJ5ZWFyIiwiZXBvY2giLCJtb21lbnQiLCJ1bml4IiwiZGF0ZSIsImRhdGVGb3JtYXQiLCJvbkNoYW5nZSIsInV0YyIsImlzVmFsaWQiLCJpc1llYXJBdXRvRml4ZWQiLCJlbmREYXRlIiwic3RhdGUiLCJhYnNvbHV0ZVJhbmdlIiwiaXNBZnRlciIsImVuZE9mIiwidG9JU09TdHJpbmciLCJ2YWx1ZSIsImZvcm1hdCIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsIkRhdGUiLCJzZXRTdGF0ZSIsImlucHV0RGF0ZSIsImhhbmRsZUNoYW5nZSIsInV0Y0RhdGUiLCJlIiwiY3VycmVudFZhbHVlIiwidGFyZ2V0IiwiaXNCZWZvcmUiLCJzdGFydE9mIiwiZGlzYWJsZWRTdGFydERheXMiLCJhZnRlciIsInV0Y1N0YXJ0RGF0ZSIsInV0Y0VuZERhdGUiLCJzdGFydERhdGVJZCIsImVuZERhdGVJZCIsInJlbmRlciIsImNsYXNzTmFtZSIsInJlZ2lvbiIsIm51bWJlck9mTW9udGhzIiwic2hvd1dlZWtOdW1iZXJzIiwidHJhbnNsYXRpb25zIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsIm1vZGlmaWVycyIsInN0YXJ0IiwiZW5kIiwiaWQiLCJoYW5kbGVJbnB1dENoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUlucHV0Qmx1ciIsImVsIiwiUmVh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IGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kYXRldGltZSc7XG5pbXBvcnQgeyBDb250ZW50LCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgT3ZlcmxheXMgZnJvbSAnLi9vdmVybGF5cyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBBYnNvbHV0ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLm9jLWRhdGV0aW1lLXN0YXRpYy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICB9XG4gIC5vYy1kYXRldGltZS5zdGFydC1kYXRlIHtcbiAgICAuRGF5UGlja2VyLURheS0tc2VsZWN0ZWQ6bm90KC5EYXlQaWNrZXItRGF5LS1zdGFydCk6bm90KC5EYXlQaWNrZXItRGF5LS1vdXRzaWRlKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkYmMyO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkxMH07XG4gICAgfVxuICB9XG4gIC5vYy1kYXRldGltZS5lbmQtZGF0ZSB7XG4gICAgLkRheVBpY2tlci1EYXktLXNlbGVjdGVkOm5vdCguRGF5UGlja2VyLURheS0tZW5kKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRiYzI7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTEwfTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic29sdXRlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBjb25zdCB1dGNTdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKHN0YXJ0RGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IHN0YXJ0RGF0ZTtcbiAgICBsZXQgdXRjRW5kRGF0ZSA9IG1vbWVudChlbmREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKGVuZERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBlbmREYXRlO1xuICAgIHV0Y0VuZERhdGUgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSAmJiBtb21lbnQodXRjRW5kRGF0ZSkuaXNCZWZvcmUobW9tZW50KHV0Y1N0YXJ0RGF0ZSkpID8gdXRjU3RhcnREYXRlIDogdXRjRW5kRGF0ZTtcbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgPyB7IGFmdGVyOiBuZXcgRGF0ZSh1dGNFbmREYXRlKSB9IDogbnVsbDtcbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgPyB7IGJlZm9yZTogbmV3IERhdGUodXRjU3RhcnREYXRlKSB9IDogbnVsbDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiB1dGNTdGFydERhdGUsXG4gICAgICBzdGFydERhdGVJZDogYHN0YXJ0LWRhdGUtJHt1dWlkdjQoKX1gLFxuICAgICAgZW5kRGF0ZTogdXRjRW5kRGF0ZSxcbiAgICAgIGVuZERhdGVJZDogYGVuZC1kYXRlLSR7dXVpZHY0KCl9YCxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLmZyb20gJiYgc2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLlNUQVJUKSB7XG4gICAgICB0aGlzLmZyb20uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG8gJiYgc2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLkVORCkge1xuICAgICAgdGhpcy50by5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5mcm9tID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaXNZZWFyQXV0b0ZpeGVkID0gKHN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IHllYXIgPSBzdGFydERhdGUueWVhcigpO1xuICAgIGNvbnN0IGVwb2NoID0gbW9tZW50LnVuaXgoMCkueWVhcigpO1xuICAgIHJldHVybiB5ZWFyIDwgZXBvY2g7XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgbGV0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFmcm9tLmlzVmFsaWQoKSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmlzWWVhckF1dG9GaXhlZChmcm9tKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICBzdGFydERhdGUsXG4gICAgICBzaG93T3ZlcmxheTogT3ZlcmxheXMuU1RBUlQsXG4gICAgfTtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKCFlbmREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgaWYgKGZyb20uaXNBZnRlcih0bykpIHtcbiAgICAgICAgc3RhcnREYXRlID0gZW5kRGF0ZTtcbiAgICAgICAgZnJvbSA9IHRvO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IHsgYmVmb3JlOiBuZXcgRGF0ZShzdGFydERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSwgZGlzYWJsZWRFbmREYXlzIH0pO1xuICAgIG9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGlucHV0RGF0ZSwgaGFuZGxlQ2hhbmdlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHV0Y0RhdGUgPSBtb21lbnQudXRjKGlucHV0RGF0ZSwgZGF0ZUZvcm1hdCwgdHJ1ZSk7XG4gICAgaWYgKHV0Y0RhdGUuaXNWYWxpZCgpKSB7XG4gICAgICBoYW5kbGVDaGFuZ2UodXRjRGF0ZS50b0lTT1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dEJsdXIgPSAoZSwgY3VycmVudFZhbHVlLCBoYW5kbGVDaGFuZ2UpID0+IHtcbiAgICBpZiAoIWUpIHJldHVybjtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdXRjRGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgZGF0ZUZvcm1hdCkudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgIGlmICh1dGNEYXRlICE9PSBjdXJyZW50VmFsdWUpIGhhbmRsZUNoYW5nZSh1dGNEYXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMudG8gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBlbmREYXRlID0gZGF0ZTtcbiAgICBsZXQgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgIGlmICghdG8uaXNWYWxpZCgpKSByZXR1cm47XG4gICAgaWYgKHRoaXMuaXNZZWFyQXV0b0ZpeGVkKHRvKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBzaG93T3ZlcmxheTogT3ZlcmxheXMuRU5ELFxuICAgIH07XG5cbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKCFzdGFydERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGlmICh0by5pc0JlZm9yZShmcm9tKSkge1xuICAgICAgICBlbmREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0byA9IGZyb207XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLmFic29sdXRlUmFuZ2UsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IHsgYWZ0ZXI6IG5ldyBEYXRlKGVuZERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUsIGRpc2FibGVkU3RhcnREYXlzIH0pO1xuICAgIG9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICByZWdpb24sXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgbnVtYmVyT2ZNb250aHMsXG4gICAgICBzaG93T3ZlcmxheSxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZUlkLFxuICAgICAgZW5kRGF0ZSxcbiAgICAgIGVuZERhdGVJZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBoYW5kbGVFbmREYXRlQ2hhbmdlLFxuICAgICAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlLFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGZyb20gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICAgIGNvbnN0IHRvID0gbmV3IERhdGUoZW5kRGF0ZSk7XG4gICAgY29uc3QgbW9kaWZpZXJzID0geyBzdGFydDogZnJvbSwgZW5kOiB0byB9O1xuICAgIHJldHVybiAoXG4gICAgICA8QWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cImFic29sdXRlU3RhcnREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnc3RhcnREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gc3RhcnQtZGF0ZWB9XG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRTdGFydERheXN9XG4gICAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxuICAgICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBpZDogc3RhcnREYXRlSWQsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IChpbnB1dERhdGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXREYXRlLCBoYW5kbGVTdGFydERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogKGUpID0+IHRoaXMuaGFuZGxlSW5wdXRCbHVyKGUsIHN0YXJ0RGF0ZSwgaGFuZGxlU3RhcnREYXRlQ2hhbmdlKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4gKHRoaXMuZnJvbSA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd0NsZWFyVmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaG93T3ZlcmxheT17c2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLlNUQVJUfVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgdG9Nb250aD17dG99XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAgIGNhbGVuZGFyVHlwZT1cInN0YXRpY1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlLWVuZC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwiYWJzb2x1dGVFbmREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZW5kRGF0ZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGVuZC1kYXRlYH1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZEVuZERheXN9XG4gICAgICAgICAgICAgIGZyb21Nb250aD17ZnJvbX1cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBtb250aD17ZnJvbX1cbiAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgaWQ6IGVuZERhdGVJZCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGlucHV0RGF0ZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShpbnB1dERhdGUsIGhhbmRsZUVuZERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogKGUpID0+IHRoaXMuaGFuZGxlSW5wdXRCbHVyKGUsIGVuZERhdGUsIGhhbmRsZUVuZERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiAodGhpcy50byA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd0NsZWFyVmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaG93T3ZlcmxheT17c2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLkVORH1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgICBjYWxlbmRhclR5cGU9XCJzdGF0aWNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICA8L0Fic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQWJzb2x1dGVEYXRlUmFuZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5BYnNvbHV0ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=