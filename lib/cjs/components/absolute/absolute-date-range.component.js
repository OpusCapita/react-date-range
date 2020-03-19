"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _v = _interopRequireDefault(require("uuid/v4"));

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
      startDateId: "start-date-" + (0, _v["default"])(),
      endDate: utcEndDate,
      endDateId: "end-date-" + (0, _v["default"])(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJjb2xvcnMiLCJncmV5MTAiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic2hvd092ZXJsYXkiLCJmcm9tIiwiT3ZlcmxheXMiLCJTVEFSVCIsImZvY3VzIiwidG8iLCJFTkQiLCJ1bmRlZmluZWQiLCJzdGFydERhdGUiLCJ5ZWFyIiwiZXBvY2giLCJtb21lbnQiLCJ1bml4IiwiZGF0ZSIsImRhdGVGb3JtYXQiLCJvbkNoYW5nZSIsInV0YyIsImlzVmFsaWQiLCJpc1llYXJBdXRvRml4ZWQiLCJlbmREYXRlIiwic3RhdGUiLCJhYnNvbHV0ZVJhbmdlIiwiaXNBZnRlciIsImVuZE9mIiwidG9JU09TdHJpbmciLCJ2YWx1ZSIsImZvcm1hdCIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsIkRhdGUiLCJzZXRTdGF0ZSIsImlucHV0RGF0ZSIsImhhbmRsZUNoYW5nZSIsInV0Y0RhdGUiLCJlIiwiY3VycmVudFZhbHVlIiwidGFyZ2V0IiwiaXNCZWZvcmUiLCJzdGFydE9mIiwiZGlzYWJsZWRTdGFydERheXMiLCJhZnRlciIsInV0Y1N0YXJ0RGF0ZSIsInV0Y0VuZERhdGUiLCJzdGFydERhdGVJZCIsImVuZERhdGVJZCIsInJlbmRlciIsImNsYXNzTmFtZSIsInJlZ2lvbiIsIm51bWJlck9mTW9udGhzIiwic2hvd1dlZWtOdW1iZXJzIiwidHJhbnNsYXRpb25zIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsIm1vZGlmaWVycyIsInN0YXJ0IiwiZW5kIiwiaWQiLCJoYW5kbGVJbnB1dENoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUlucHV0Qmx1ciIsImVsIiwiUmVh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bGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkL3Y0JztcblxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZGF0ZXRpbWUnO1xuaW1wb3J0IHsgQ29udGVudCwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBEYXRlU2VjdGlvbiBmcm9tICcuLi9kYXRlLXNlY3Rpb24uY29tcG9uZW50cyc7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IE92ZXJsYXlzIGZyb20gJy4vb3ZlcmxheXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgQWJzb2x1dGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAwIDA7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5vYy1kYXRldGltZS1zdGF0aWMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgfVxuICAub2MtZGF0ZXRpbWUuc3RhcnQtZGF0ZSB7XG4gICAgLkRheVBpY2tlci1EYXktLXNlbGVjdGVkOm5vdCguRGF5UGlja2VyLURheS0tc3RhcnQpOm5vdCguRGF5UGlja2VyLURheS0tb3V0c2lkZSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGJjMjtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5MTB9O1xuICAgIH1cbiAgfVxuICAub2MtZGF0ZXRpbWUuZW5kLWRhdGUge1xuICAgIC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZDpub3QoLkRheVBpY2tlci1EYXktLWVuZCk6bm90KC5EYXlQaWNrZXItRGF5LS1vdXRzaWRlKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkYmMyO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkxMH07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnNvbHV0ZURhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgY29uc3QgdXRjU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhzdGFydERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBzdGFydERhdGU7XG4gICAgbGV0IHV0Y0VuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhlbmREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogZW5kRGF0ZTtcbiAgICB1dGNFbmREYXRlID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzQmVmb3JlKG1vbWVudCh1dGNTdGFydERhdGUpKSA/IHV0Y1N0YXJ0RGF0ZSA6IHV0Y0VuZERhdGU7XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpID8geyBhZnRlcjogbmV3IERhdGUodXRjRW5kRGF0ZSkgfSA6IG51bGw7XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpID8geyBiZWZvcmU6IG5ldyBEYXRlKHV0Y1N0YXJ0RGF0ZSkgfSA6IG51bGw7XG4gICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogdXRjU3RhcnREYXRlLFxuICAgICAgc3RhcnREYXRlSWQ6IGBzdGFydC1kYXRlLSR7dXVpZHY0KCl9YCxcbiAgICAgIGVuZERhdGU6IHV0Y0VuZERhdGUsXG4gICAgICBlbmREYXRlSWQ6IGBlbmQtZGF0ZS0ke3V1aWR2NCgpfWAsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5mcm9tICYmIHNob3dPdmVybGF5ID09PSBPdmVybGF5cy5TVEFSVCkge1xuICAgICAgdGhpcy5mcm9tLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvICYmIHNob3dPdmVybGF5ID09PSBPdmVybGF5cy5FTkQpIHtcbiAgICAgIHRoaXMudG8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdGFydERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZnJvbSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlzWWVhckF1dG9GaXhlZCA9IChzdGFydERhdGUpID0+IHtcbiAgICBjb25zdCB5ZWFyID0gc3RhcnREYXRlLnllYXIoKTtcbiAgICBjb25zdCBlcG9jaCA9IG1vbWVudC51bml4KDApLnllYXIoKTtcbiAgICByZXR1cm4geWVhciA8IGVwb2NoO1xuICB9XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBzdGFydERhdGUgPSBkYXRlO1xuICAgIGxldCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgIGlmICghZnJvbS5pc1ZhbGlkKCkpIHJldHVybjtcbiAgICBpZiAodGhpcy5pc1llYXJBdXRvRml4ZWQoZnJvbSkpIHJldHVybjtcblxuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgc3RhcnREYXRlLFxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLlNUQVJULFxuICAgIH07XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghZW5kRGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgYWJzb2x1dGVSYW5nZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIGlmIChmcm9tLmlzQWZ0ZXIodG8pKSB7XG4gICAgICAgIHN0YXJ0RGF0ZSA9IGVuZERhdGU7XG4gICAgICAgIGZyb20gPSB0bztcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLmFic29sdXRlUmFuZ2UsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSB7IGJlZm9yZTogbmV3IERhdGUoc3RhcnREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGRpc2FibGVkRW5kRGF5cyB9KTtcbiAgICBvbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSA9IChpbnB1dERhdGUsIGhhbmRsZUNoYW5nZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB1dGNEYXRlID0gbW9tZW50LnV0YyhpbnB1dERhdGUsIGRhdGVGb3JtYXQsIHRydWUpO1xuICAgIGlmICh1dGNEYXRlLmlzVmFsaWQoKSkge1xuICAgICAgaGFuZGxlQ2hhbmdlKHV0Y0RhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUsIGN1cnJlbnRWYWx1ZSwgaGFuZGxlQ2hhbmdlKSA9PiB7XG4gICAgaWYgKCFlKSByZXR1cm47XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHV0Y0RhdGUgPSB2YWx1ZSA/IG1vbWVudC51dGModmFsdWUsIGRhdGVGb3JtYXQpLnRvSVNPU3RyaW5nKCkgOiB2YWx1ZTtcbiAgICBpZiAodXRjRGF0ZSAhPT0gY3VycmVudFZhbHVlKSBoYW5kbGVDaGFuZ2UodXRjRGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnRvID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgZW5kRGF0ZSA9IGRhdGU7XG4gICAgbGV0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICBpZiAoIXRvLmlzVmFsaWQoKSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmlzWWVhckF1dG9GaXhlZCh0bykpIHJldHVybjtcblxuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLkVORCxcbiAgICB9O1xuXG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgYWJzb2x1dGVSYW5nZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBpZiAodG8uaXNCZWZvcmUoZnJvbSkpIHtcbiAgICAgICAgZW5kRGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgdG8gPSBmcm9tO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSB7IGFmdGVyOiBuZXcgRGF0ZShlbmREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlLCBkaXNhYmxlZFN0YXJ0RGF5cyB9KTtcbiAgICBvbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgcmVnaW9uLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIG51bWJlck9mTW9udGhzLFxuICAgICAgc2hvd092ZXJsYXksXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgICAgZGlzYWJsZWRTdGFydERheXMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBzdGFydERhdGVJZCxcbiAgICAgIGVuZERhdGUsXG4gICAgICBlbmREYXRlSWQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgaGFuZGxlRW5kRGF0ZUNoYW5nZSxcbiAgICAgIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSxcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBmcm9tID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgICBjb25zdCB0byA9IG5ldyBEYXRlKGVuZERhdGUpO1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IHsgc3RhcnQ6IGZyb20sIGVuZDogdG8gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEFic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZVN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3N0YXJ0RGF0ZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHN0YXJ0LWRhdGVgfVxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkU3RhcnREYXlzfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgaWQ6IHN0YXJ0RGF0ZUlkLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoaW5wdXREYXRlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGlucHV0RGF0ZSwgaGFuZGxlU3RhcnREYXRlQ2hhbmdlKSxcbiAgICAgICAgICAgICAgICBvbkJsdXI6IChlKSA9PiB0aGlzLmhhbmRsZUlucHV0Qmx1cihlLCBzdGFydERhdGUsIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+ICh0aGlzLmZyb20gPSBlbCl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XG4gICAgICAgICAgICAgIHNob3dDbGVhclZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgc2hvd092ZXJsYXk9e3Nob3dPdmVybGF5ID09PSBPdmVybGF5cy5TVEFSVH1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIHRvTW9udGg9e3RvfVxuICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgICBjYWxlbmRhclR5cGU9XCJzdGF0aWNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1lbmQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cImFic29sdXRlRW5kRGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2VuZERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBlbmQtZGF0ZWB9XG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRFbmREYXlzfVxuICAgICAgICAgICAgICBmcm9tTW9udGg9e2Zyb219XG4gICAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxuICAgICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgICAgbW9udGg9e2Zyb219XG4gICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIGlkOiBlbmREYXRlSWQsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IChpbnB1dERhdGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXREYXRlLCBoYW5kbGVFbmREYXRlQ2hhbmdlKSxcbiAgICAgICAgICAgICAgICBvbkJsdXI6IChlKSA9PiB0aGlzLmhhbmRsZUlucHV0Qmx1cihlLCBlbmREYXRlLCBoYW5kbGVFbmREYXRlQ2hhbmdlKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4gKHRoaXMudG8gPSBlbCl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XG4gICAgICAgICAgICAgIHNob3dDbGVhclZhbHVlPXtmYWxzZX1cbiAgICAgICAgICAgICAgc2hvd092ZXJsYXk9e3Nob3dPdmVybGF5ID09PSBPdmVybGF5cy5FTkR9XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAgICAgY2FsZW5kYXJUeXBlPVwic3RhdGljXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgPC9BYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbkFic29sdXRlRGF0ZVJhbmdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuQWJzb2x1dGVEYXRlUmFuZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19