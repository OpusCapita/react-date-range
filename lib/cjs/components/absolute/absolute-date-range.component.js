"use strict";

exports.__esModule = true;
exports.default = void 0;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var AbsoluteRangeSection = _styledComponents.default.div(_templateObject());

var AbsoluteDateRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(AbsoluteDateRange, _React$PureComponent);

  function AbsoluteDateRange(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var showOverlay = _this.props.showOverlay;

      if (_this.from && showOverlay === _overlays.default.START) {
        _this.from.focus();
      } else if (_this.to && showOverlay === _overlays.default.END) {
        _this.to.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDayClick", function () {
      _this.from = undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "isYearAutoFixed", function (selector, startDate) {
      var inputValue = document.querySelector(selector).value;
      var year = startDate.year();

      var epoch = _moment.default.unix(0).year();

      return year < epoch || !inputValue.includes(year);
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (date) {
      var startDate = date;

      var from = _moment.default.utc(startDate);

      if (!from.isValid()) return;
      var startDateId = _this.state.startDateId;
      if (_this.isYearAutoFixed(".absolute-start-date #" + startDateId, from)) return;
      var endDate = _this.state.endDate;
      var absoluteRange = {
        startDate: startDate,
        showOverlay: _overlays.default.START
      };
      var state;

      if (!endDate) {
        state = {
          startDate: startDate,
          absoluteRange: absoluteRange
        };
      } else {
        var to = _moment.default.utc(endDate);

        if (from.isAfter(to)) {
          startDate = endDate;
          from = to;
        }

        state = {
          startDate: startDate,
          endDate: to.endOf('day').toISOString(),
          value: from.format(_this.props.dateFormat) + " - " + to.format(_this.props.dateFormat),
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

      _this.props.onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (inputDate, handleChange) {
      var dateFormat = _this.props.dateFormat;

      var utcDate = _moment.default.utc(inputDate, dateFormat, true);

      if (utcDate.isValid()) {
        handleChange(utcDate.toISOString());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function (e, currentValue, handleChange) {
      if (!e) return;
      var dateFormat = _this.props.dateFormat;
      var value = e.target.value;
      var utcDate = value ? _moment.default.utc(value, dateFormat).toISOString() : value;
      if (utcDate !== currentValue) handleChange(utcDate);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDayClick", function () {
      _this.to = undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (date) {
      var endDate = date;

      var to = _moment.default.utc(endDate);

      if (!to.isValid()) return;
      var endDateId = _this.state.endDateId;
      if (_this.isYearAutoFixed(".absolute-end-date #" + endDateId, to)) return;
      var startDate = _this.state.startDate;
      var absoluteRange = {
        endDate: endDate,
        showOverlay: _overlays.default.END
      };
      var state;

      if (!startDate) {
        state = {
          endDate: endDate,
          absoluteRange: absoluteRange
        };
      } else {
        var from = _moment.default.utc(startDate);

        if (to.isBefore(from)) {
          endDate = startDate;
          to = from;
        }

        state = {
          startDate: from.startOf('day').toISOString(),
          endDate: to.endOf('day').toISOString(),
          value: from.format(_this.props.dateFormat) + " - " + to.format(_this.props.dateFormat),
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

      _this.props.onChange(state);
    });

    var _this$props = _this.props,
        _startDate = _this$props.startDate,
        _endDate = _this$props.endDate;
    var utcStartDate = (0, _moment.default)(_startDate).isValid() ? _moment.default.utc(_startDate).startOf('day').toISOString() : _startDate;
    var utcEndDate = (0, _moment.default)(_endDate).isValid() ? _moment.default.utc(_endDate).startOf('day').toISOString() : _endDate;
    utcEndDate = (0, _moment.default)(utcStartDate).isValid() && (0, _moment.default)(utcEndDate).isValid() && (0, _moment.default)(utcEndDate).isBefore((0, _moment.default)(utcStartDate)) ? utcStartDate : utcEndDate;

    var _disabledStartDays = (0, _moment.default)(utcEndDate).isValid() ? {
      after: new Date(utcEndDate)
    } : null;

    var _disabledEndDays = (0, _moment.default)(utcStartDate).isValid() ? {
      before: new Date(utcStartDate)
    } : null;

    _this.state = {
      startDate: utcStartDate,
      startDateId: "start-date-" + (0, _v.default)(),
      endDate: utcEndDate,
      endDateId: "end-date-" + (0, _v.default)(),
      disabledStartDays: _disabledStartDays,
      disabledEndDays: _disabledEndDays
    };
    return _this;
  }

  var _proto = AbsoluteDateRange.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        className = _this$props2.className,
        region = _this$props2.region,
        dateFormat = _this$props2.dateFormat,
        numberOfMonths = _this$props2.numberOfMonths,
        showOverlay = _this$props2.showOverlay,
        showWeekNumbers = _this$props2.showWeekNumbers,
        translations = _this$props2.translations;
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
    return _react.default.createElement(AbsoluteRangeSection, null, _react.default.createElement(_dateSection.default, null, _react.default.createElement(_ocCmCommonLayouts.Content.InputColumn, {
      className: "absolute-start-date",
      id: "absoluteStartDate",
      label: (0, _translate.default)(translations, 'startDate')
    }, _react.default.createElement(_reactDatetime.DateInput, {
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
      showOverlay: showOverlay === _overlays.default.START,
      showWeekNumbers: showWeekNumbers,
      toMonth: to,
      value: startDate
    }))), _react.default.createElement(_hyphen.default, null), _react.default.createElement(_dateSection.default, null, _react.default.createElement(_ocCmCommonLayouts.Content.InputColumn, {
      className: "absolute-end-date",
      id: "absoluteEndDate",
      label: (0, _translate.default)(translations, 'endDate')
    }, _react.default.createElement(_reactDatetime.DateInput, {
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
      showOverlay: showOverlay === _overlays.default.END,
      showWeekNumbers: showWeekNumbers,
      value: endDate
    }))));
  };

  return AbsoluteDateRange;
}(_react.default.PureComponent);

exports.default = AbsoluteDateRange;
AbsoluteDateRange.defaultProps = _defaultProps.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkFic29sdXRlRGF0ZVJhbmdlIiwicHJvcHMiLCJzaG93T3ZlcmxheSIsImZyb20iLCJPdmVybGF5cyIsIlNUQVJUIiwiZm9jdXMiLCJ0byIsIkVORCIsInVuZGVmaW5lZCIsInNlbGVjdG9yIiwic3RhcnREYXRlIiwiaW5wdXRWYWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwieWVhciIsImVwb2NoIiwibW9tZW50IiwidW5peCIsImluY2x1ZGVzIiwiZGF0ZSIsInV0YyIsImlzVmFsaWQiLCJzdGFydERhdGVJZCIsInN0YXRlIiwiaXNZZWFyQXV0b0ZpeGVkIiwiZW5kRGF0ZSIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsImZvcm1hdCIsImRhdGVGb3JtYXQiLCJkaXNhYmxlZEVuZERheXMiLCJiZWZvcmUiLCJEYXRlIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImlucHV0RGF0ZSIsImhhbmRsZUNoYW5nZSIsInV0Y0RhdGUiLCJlIiwiY3VycmVudFZhbHVlIiwidGFyZ2V0IiwiZW5kRGF0ZUlkIiwiaXNCZWZvcmUiLCJzdGFydE9mIiwiZGlzYWJsZWRTdGFydERheXMiLCJhZnRlciIsInV0Y1N0YXJ0RGF0ZSIsInV0Y0VuZERhdGUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJyZWdpb24iLCJudW1iZXJPZk1vbnRocyIsInNob3dXZWVrTnVtYmVycyIsInRyYW5zbGF0aW9ucyIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJtb2RpZmllcnMiLCJzdGFydCIsImVuZCIsImlkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJvbkJsdXIiLCJoYW5k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RSxZQUFsQixHQUFpQ0EscUJBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkL3Y0JztcblxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZGF0ZXRpbWUnO1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgT3ZlcmxheXMgZnJvbSAnLi9vdmVybGF5cyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBBYnNvbHV0ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW0gMCAwIDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnNvbHV0ZURhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB1dGNTdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKHN0YXJ0RGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IHN0YXJ0RGF0ZTtcbiAgICBsZXQgdXRjRW5kRGF0ZSA9IG1vbWVudChlbmREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKGVuZERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBlbmREYXRlO1xuICAgIHV0Y0VuZERhdGUgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSAmJlxuICAgICAgbW9tZW50KHV0Y0VuZERhdGUpLmlzQmVmb3JlKG1vbWVudCh1dGNTdGFydERhdGUpKSA/XG4gICAgICB1dGNTdGFydERhdGUgOlxuICAgICAgdXRjRW5kRGF0ZTtcbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgPyB7IGFmdGVyOiBuZXcgRGF0ZSh1dGNFbmREYXRlKSB9IDogbnVsbDtcbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgP1xuICAgICAgeyBiZWZvcmU6IG5ldyBEYXRlKHV0Y1N0YXJ0RGF0ZSkgfSA6IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogdXRjU3RhcnREYXRlLFxuICAgICAgc3RhcnREYXRlSWQ6IGBzdGFydC1kYXRlLSR7dXVpZHY0KCl9YCxcbiAgICAgIGVuZERhdGU6IHV0Y0VuZERhdGUsXG4gICAgICBlbmREYXRlSWQ6IGBlbmQtZGF0ZS0ke3V1aWR2NCgpfWAsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5mcm9tICYmIHNob3dPdmVybGF5ID09PSBPdmVybGF5cy5TVEFSVCkge1xuICAgICAgdGhpcy5mcm9tLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvICYmIHNob3dPdmVybGF5ID09PSBPdmVybGF5cy5FTkQpIHtcbiAgICAgIHRoaXMudG8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdGFydERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZnJvbSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlzWWVhckF1dG9GaXhlZCA9IChzZWxlY3Rvciwgc3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnZhbHVlO1xuICAgIGNvbnN0IHllYXIgPSBzdGFydERhdGUueWVhcigpO1xuICAgIGNvbnN0IGVwb2NoID0gbW9tZW50LnVuaXgoMCkueWVhcigpO1xuICAgIHJldHVybiB5ZWFyIDwgZXBvY2ggfHwgIWlucHV0VmFsdWUuaW5jbHVkZXMoeWVhcik7XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBzdGFydERhdGUgPSBkYXRlO1xuICAgIGxldCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgIGlmICghZnJvbS5pc1ZhbGlkKCkpIHJldHVybjtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZUlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aGlzLmlzWWVhckF1dG9GaXhlZChgLmFic29sdXRlLXN0YXJ0LWRhdGUgIyR7c3RhcnREYXRlSWR9YCwgZnJvbSkpIHJldHVybjtcblxuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgc3RhcnREYXRlLFxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLlNUQVJULFxuICAgIH07XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghZW5kRGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgYWJzb2x1dGVSYW5nZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIGlmIChmcm9tLmlzQWZ0ZXIodG8pKSB7XG4gICAgICAgIHN0YXJ0RGF0ZSA9IGVuZERhdGU7XG4gICAgICAgIGZyb20gPSB0bztcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0geyBiZWZvcmU6IG5ldyBEYXRlKHN0YXJ0RGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlLCBkaXNhYmxlZEVuZERheXMgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSA9IChpbnB1dERhdGUsIGhhbmRsZUNoYW5nZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB1dGNEYXRlID0gbW9tZW50LnV0YyhpbnB1dERhdGUsIGRhdGVGb3JtYXQsIHRydWUpO1xuICAgIGlmICh1dGNEYXRlLmlzVmFsaWQoKSkge1xuICAgICAgaGFuZGxlQ2hhbmdlKHV0Y0RhdGUudG9JU09TdHJpbmcoKSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRCbHVyID0gKGUsIGN1cnJlbnRWYWx1ZSwgaGFuZGxlQ2hhbmdlKSA9PiB7XG4gICAgaWYgKCFlKSByZXR1cm47XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHV0Y0RhdGUgPSB2YWx1ZSA/IG1vbWVudC51dGModmFsdWUsIGRhdGVGb3JtYXQpLnRvSVNPU3RyaW5nKCkgOiB2YWx1ZTtcbiAgICBpZiAodXRjRGF0ZSAhPT0gY3VycmVudFZhbHVlKSBoYW5kbGVDaGFuZ2UodXRjRGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnRvID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGVuZERhdGUgPSBkYXRlO1xuICAgIGxldCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgaWYgKCF0by5pc1ZhbGlkKCkpIHJldHVybjtcbiAgICBjb25zdCB7IGVuZERhdGVJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGhpcy5pc1llYXJBdXRvRml4ZWQoYC5hYnNvbHV0ZS1lbmQtZGF0ZSAjJHtlbmREYXRlSWR9YCwgdG8pKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5FTkQsXG4gICAgfTtcblxuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIXN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgaWYgKHRvLmlzQmVmb3JlKGZyb20pKSB7XG4gICAgICAgIGVuZERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRvID0gZnJvbTtcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLmFic29sdXRlUmFuZ2UsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IHsgYWZ0ZXI6IG5ldyBEYXRlKGVuZERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUsIGRpc2FibGVkU3RhcnREYXlzIH0pO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJlZ2lvbixcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBudW1iZXJPZk1vbnRocyxcbiAgICAgIHNob3dPdmVybGF5LFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgc3RhcnREYXRlSWQsXG4gICAgICBlbmREYXRlLFxuICAgICAgZW5kRGF0ZUlkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZUVuZERhdGVDaGFuZ2UsXG4gICAgICBoYW5kbGVTdGFydERhdGVDaGFuZ2UsXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgZnJvbSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgICBjb25zdCBtb2RpZmllcnMgPSB7IHN0YXJ0OiBmcm9tLCBlbmQ6IHRvIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwiYWJzb2x1dGVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzdGFydC1kYXRlYH1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIGlkOiBzdGFydERhdGVJZCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogaW5wdXREYXRlID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXREYXRlLCBoYW5kbGVTdGFydERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogZSA9PiB0aGlzLmhhbmRsZUlucHV0Qmx1cihlLCBzdGFydERhdGUsIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlucHV0UmVmPXtlbCA9PiAodGhpcy5mcm9tID0gZWwpfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgICBzaG93Q2xlYXJWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dPdmVybGF5PXtzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuU1RBUlR9XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICB0b01vbnRoPXt0b31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZW5kLWRhdGVgfVxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBpZDogZW5kRGF0ZUlkLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBpbnB1dERhdGUgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShpbnB1dERhdGUsIGhhbmRsZUVuZERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogZSA9PiB0aGlzLmhhbmRsZUlucHV0Qmx1cihlLCBlbmREYXRlLCBoYW5kbGVFbmREYXRlQ2hhbmdlKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW5wdXRSZWY9e2VsID0+ICh0aGlzLnRvID0gZWwpfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgICBzaG93Q2xlYXJWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dPdmVybGF5PXtzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuRU5EfVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvQWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5BYnNvbHV0ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkFic29sdXRlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==