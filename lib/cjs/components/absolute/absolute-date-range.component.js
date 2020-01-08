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
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0 0 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var AbsoluteRangeSection = _styledComponents["default"].div(_templateObject());

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

    _defineProperty(_assertThisInitialized(_this), "isYearAutoFixed", function (selector, startDate) {
      var inputValue = document.querySelector(selector).value;
      var year = startDate.year();

      var epoch = _moment["default"].unix(0).year();

      return year < epoch || !inputValue.includes(year);
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (date) {
      var _this$props = _this.props,
          dateFormat = _this$props.dateFormat,
          onChange = _this$props.onChange;
      var startDate = date;

      var from = _moment["default"].utc(startDate);

      if (!from.isValid()) return;
      var startDateId = _this.state.startDateId;
      if (_this.isYearAutoFixed(".absolute-start-date #" + startDateId, from)) return;
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
      var endDateId = _this.state.endDateId;
      if (_this.isYearAutoFixed(".absolute-end-date #" + endDateId, to)) return;
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
      value: startDate
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
      value: endDate
    }))));
  };

  return AbsoluteDateRange;
}(_react["default"].PureComponent);

exports["default"] = AbsoluteDateRange;
AbsoluteDateRange.defaultProps = _defaultProps["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkFic29sdXRlRGF0ZVJhbmdlIiwicHJvcHMiLCJzaG93T3ZlcmxheSIsImZyb20iLCJPdmVybGF5cyIsIlNUQVJUIiwiZm9jdXMiLCJ0byIsIkVORCIsInVuZGVmaW5lZCIsInNlbGVjdG9yIiwic3RhcnREYXRlIiwiaW5wdXRWYWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwieWVhciIsImVwb2NoIiwibW9tZW50IiwidW5peCIsImluY2x1ZGVzIiwiZGF0ZSIsImRhdGVGb3JtYXQiLCJvbkNoYW5nZSIsInV0YyIsImlzVmFsaWQiLCJzdGFydERhdGVJZCIsInN0YXRlIiwiaXNZZWFyQXV0b0ZpeGVkIiwiZW5kRGF0ZSIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsImZvcm1hdCIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsIkRhdGUiLCJzZXRTdGF0ZSIsImlucHV0RGF0ZSIsImhhbmRsZUNoYW5nZSIsInV0Y0RhdGUiLCJlIiwiY3VycmVudFZhbHVlIiwidGFyZ2V0IiwiZW5kRGF0ZUlkIiwiaXNCZWZvcmUiLCJzdGFydE9mIiwiZGlzYWJsZWRTdGFydERheXMiLCJhZnRlciIsInV0Y1N0YXJ0RGF0ZSIsInV0Y0VuZERhdGUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJyZWdpb24iLCJudW1iZXJPZk1vbnRocyIsInNob3dXZWVrTnVtYmVycyIsInRyYW5zbGF0aW9ucyIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJtb2RpZmllcnMiLCJzdGFydCIsImVuZCIsImlkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJvbkJsdXIiLCJoYW5k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bkI7QUFvQkUsTUFBQSxLQUFLLEVBQUUzQjtBQXBCVCxNQUxGLENBREYsQ0EvQkYsQ0FERjtBQWdFRCxHOzs7RUF6TzRDdUMsa0JBQU1DLGE7OztBQThPckRyRSxpQkFBaUIsQ0FBQ3NFLFlBQWxCLEdBQWlDQSx3QkFBakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kYXRldGltZSc7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBPdmVybGF5cyBmcm9tICcuL292ZXJsYXlzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IEFic29sdXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAwIDAgMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic29sdXRlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBjb25zdCB1dGNTdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKHN0YXJ0RGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IHN0YXJ0RGF0ZTtcbiAgICBsZXQgdXRjRW5kRGF0ZSA9IG1vbWVudChlbmREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKGVuZERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBlbmREYXRlO1xuICAgIHV0Y0VuZERhdGUgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSAmJiBtb21lbnQodXRjRW5kRGF0ZSkuaXNCZWZvcmUobW9tZW50KHV0Y1N0YXJ0RGF0ZSkpID8gdXRjU3RhcnREYXRlIDogdXRjRW5kRGF0ZTtcbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgPyB7IGFmdGVyOiBuZXcgRGF0ZSh1dGNFbmREYXRlKSB9IDogbnVsbDtcbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgPyB7IGJlZm9yZTogbmV3IERhdGUodXRjU3RhcnREYXRlKSB9IDogbnVsbDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiB1dGNTdGFydERhdGUsXG4gICAgICBzdGFydERhdGVJZDogYHN0YXJ0LWRhdGUtJHt1dWlkdjQoKX1gLFxuICAgICAgZW5kRGF0ZTogdXRjRW5kRGF0ZSxcbiAgICAgIGVuZERhdGVJZDogYGVuZC1kYXRlLSR7dXVpZHY0KCl9YCxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLmZyb20gJiYgc2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLlNUQVJUKSB7XG4gICAgICB0aGlzLmZyb20uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG8gJiYgc2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLkVORCkge1xuICAgICAgdGhpcy50by5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5mcm9tID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaXNZZWFyQXV0b0ZpeGVkID0gKHNlbGVjdG9yLCBzdGFydERhdGUpID0+IHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikudmFsdWU7XG4gICAgY29uc3QgeWVhciA9IHN0YXJ0RGF0ZS55ZWFyKCk7XG4gICAgY29uc3QgZXBvY2ggPSBtb21lbnQudW5peCgwKS55ZWFyKCk7XG4gICAgcmV0dXJuIHllYXIgPCBlcG9jaCB8fCAhaW5wdXRWYWx1ZS5pbmNsdWRlcyh5ZWFyKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc3RhcnREYXRlID0gZGF0ZTtcbiAgICBsZXQgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICBpZiAoIWZyb20uaXNWYWxpZCgpKSByZXR1cm47XG4gICAgY29uc3QgeyBzdGFydERhdGVJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGhpcy5pc1llYXJBdXRvRml4ZWQoYC5hYnNvbHV0ZS1zdGFydC1kYXRlICMke3N0YXJ0RGF0ZUlkfWAsIGZyb20pKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5TVEFSVCxcbiAgICB9O1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIWVuZERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc0FmdGVyKHRvKSkge1xuICAgICAgICBzdGFydERhdGUgPSBlbmREYXRlO1xuICAgICAgICBmcm9tID0gdG87XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0geyBiZWZvcmU6IG5ldyBEYXRlKHN0YXJ0RGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlLCBkaXNhYmxlZEVuZERheXMgfSk7XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoaW5wdXREYXRlLCBoYW5kbGVDaGFuZ2UpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXRjRGF0ZSA9IG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0LCB0cnVlKTtcbiAgICBpZiAodXRjRGF0ZS5pc1ZhbGlkKCkpIHtcbiAgICAgIGhhbmRsZUNoYW5nZSh1dGNEYXRlLnRvSVNPU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0Qmx1ciA9IChlLCBjdXJyZW50VmFsdWUsIGhhbmRsZUNoYW5nZSkgPT4ge1xuICAgIGlmICghZSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCB1dGNEYXRlID0gdmFsdWUgPyBtb21lbnQudXRjKHZhbHVlLCBkYXRlRm9ybWF0KS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgaWYgKHV0Y0RhdGUgIT09IGN1cnJlbnRWYWx1ZSkgaGFuZGxlQ2hhbmdlKHV0Y0RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy50byA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGVuZERhdGUgPSBkYXRlO1xuICAgIGxldCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgaWYgKCF0by5pc1ZhbGlkKCkpIHJldHVybjtcbiAgICBjb25zdCB7IGVuZERhdGVJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGhpcy5pc1llYXJBdXRvRml4ZWQoYC5hYnNvbHV0ZS1lbmQtZGF0ZSAjJHtlbmREYXRlSWR9YCwgdG8pKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5FTkQsXG4gICAgfTtcblxuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIXN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgaWYgKHRvLmlzQmVmb3JlKGZyb20pKSB7XG4gICAgICAgIGVuZERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRvID0gZnJvbTtcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0geyBhZnRlcjogbmV3IERhdGUoZW5kRGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSwgZGlzYWJsZWRTdGFydERheXMgfSk7XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJlZ2lvbixcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBudW1iZXJPZk1vbnRocyxcbiAgICAgIHNob3dPdmVybGF5LFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgc3RhcnREYXRlSWQsXG4gICAgICBlbmREYXRlLFxuICAgICAgZW5kRGF0ZUlkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZUVuZERhdGVDaGFuZ2UsXG4gICAgICBoYW5kbGVTdGFydERhdGVDaGFuZ2UsXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgZnJvbSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgICBjb25zdCBtb2RpZmllcnMgPSB7IHN0YXJ0OiBmcm9tLCBlbmQ6IHRvIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwiYWJzb2x1dGVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzdGFydC1kYXRlYH1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIGlkOiBzdGFydERhdGVJZCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGlucHV0RGF0ZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShpbnB1dERhdGUsIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgICAgb25CbHVyOiAoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dEJsdXIoZSwgc3RhcnREYXRlLCBoYW5kbGVTdGFydERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiAodGhpcy5mcm9tID0gZWwpfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgICBzaG93Q2xlYXJWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dPdmVybGF5PXtzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuU1RBUlR9XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICB0b01vbnRoPXt0b31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZW5kLWRhdGVgfVxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBpZDogZW5kRGF0ZUlkLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoaW5wdXREYXRlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGlucHV0RGF0ZSwgaGFuZGxlRW5kRGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgICAgb25CbHVyOiAoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dEJsdXIoZSwgZW5kRGF0ZSwgaGFuZGxlRW5kRGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+ICh0aGlzLnRvID0gZWwpfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgICBzaG93Q2xlYXJWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dPdmVybGF5PXtzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuRU5EfVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvQWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5BYnNvbHV0ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkFic29sdXRlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==