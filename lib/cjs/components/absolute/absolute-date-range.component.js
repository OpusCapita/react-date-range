'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDatetime = require('@opuscapita/react-datetime');

var _dateSection = require('../date-section.components');

var _dateSection2 = _interopRequireDefault(_dateSection);

var _hyphen = require('../hyphen.component');

var _hyphen2 = _interopRequireDefault(_hyphen);

var _propTypes = require('./prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _defaultProps = require('./default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _overlays = require('./overlays');

var _overlays2 = _interopRequireDefault(_overlays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-return-assign */


var AbsoluteRangeSection = _styledComponents2.default.div(_templateObject);

var AbsoluteDateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(AbsoluteDateRange, _React$PureComponent);

  function AbsoluteDateRange(props) {
    _classCallCheck(this, AbsoluteDateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        startDate = _this$props.startDate,
        endDate = _this$props.endDate;

    var utcStartDate = (0, _moment2.default)(startDate).isValid() ? _moment2.default.utc(startDate).startOf('day').toISOString() : startDate;
    var utcEndDate = (0, _moment2.default)(endDate).isValid() ? _moment2.default.utc(endDate).startOf('day').toISOString() : endDate;
    utcEndDate = (0, _moment2.default)(utcStartDate).isValid() && (0, _moment2.default)(utcEndDate).isValid() && (0, _moment2.default)(utcEndDate).isBefore((0, _moment2.default)(utcStartDate)) ? utcStartDate : utcEndDate;
    var disabledStartDays = (0, _moment2.default)(utcEndDate).isValid() ? { after: new Date(utcEndDate) } : null;
    var disabledEndDays = (0, _moment2.default)(utcStartDate).isValid() ? { before: new Date(utcStartDate) } : null;
    _this.state = {
      startDate: utcStartDate,
      endDate: utcEndDate,
      disabledStartDays: disabledStartDays,
      disabledEndDays: disabledEndDays
    };
    return _this;
  }

  AbsoluteDateRange.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        region = _props.region,
        dateFormat = _props.dateFormat,
        numberOfMonths = _props.numberOfMonths,
        showWeekNumbers = _props.showWeekNumbers;
    var _state = this.state,
        disabledEndDays = _state.disabledEndDays,
        disabledStartDays = _state.disabledStartDays,
        startDate = _state.startDate,
        endDate = _state.endDate;

    var from = new Date(startDate);
    var to = new Date(endDate);
    var modifiers = { start: from, end: to };
    return _react2.default.createElement(
      AbsoluteRangeSection,
      null,
      _react2.default.createElement(
        _dateSection2.default,
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'startDate' },
          this.props.translations.startDate
        ),
        _react2.default.createElement(_reactDatetime.DateInput, {
          dateFormat: dateFormat,
          disabledDays: disabledStartDays,
          locale: region,
          modifiers: modifiers,
          numberOfMonths: numberOfMonths,
          onChange: this.handleStartDateChange,
          inputRef: function inputRef(el) {
            return _this2.from = el;
          },
          selectedDays: [from, { from: from, to: to }],
          showWeekNumbers: showWeekNumbers,
          toMonth: to,
          value: startDate
        })
      ),
      _react2.default.createElement(_hyphen2.default, null),
      _react2.default.createElement(
        _dateSection2.default,
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'endDate' },
          this.props.translations.endDate
        ),
        _react2.default.createElement(_reactDatetime.DateInput, {
          dateFormat: dateFormat,
          disabledDays: disabledEndDays,
          fromMonth: from,
          locale: region,
          modifiers: modifiers,
          month: from,
          numberOfMonths: numberOfMonths,
          onChange: this.handleEndDateChange,
          inputRef: function inputRef(el) {
            return _this2.to = el;
          },
          selectedDays: [from, { from: from, to: to }],
          showWeekNumbers: showWeekNumbers,
          value: endDate
        })
      )
    );
  };

  return AbsoluteDateRange;
}(_react2.default.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.componentDidMount = function () {
    var showOverlay = _this3.props.showOverlay;

    if (_this3.from && showOverlay === 1) {
      _this3.from.focus();
    } else if (_this3.to && showOverlay === 2) {
      _this3.to.focus();
    }
  };

  this.handleStartDayClick = function () {
    _this3.from = undefined;
  };

  this.handleStartDateChange = function (date) {
    var startDate = date;
    var from = _moment2.default.utc(startDate);
    if (!from.isValid()) {
      return;
    }

    var endDate = _this3.state.endDate;

    var absoluteRange = {
      startDate: startDate,
      showOverlay: _overlays2.default.start
    };
    var state = void 0;
    if (!endDate) {
      state = {
        startDate: startDate,
        popoverProps: {
          absoluteRange: absoluteRange
        }
      };
    } else {
      var to = _moment2.default.utc(endDate);
      if (from.isAfter(to)) {
        startDate = endDate;
        from = to;
      }
      state = {
        startDate: startDate,
        endDate: to.endOf('day').toISOString(),
        value: from.format(_this3.props.dateFormat) + ' - ' + to.format(_this3.props.dateFormat),
        popoverProps: {
          absoluteRange: _extends({}, absoluteRange, {
            startDate: startDate,
            endDate: endDate
          })
        }
      };
    }
    var disabledEndDays = { before: new Date(startDate) };
    _this3.setState({ startDate: startDate, disabledEndDays: disabledEndDays });
    _this3.props.onChange(state);
  };

  this.handleEndDayClick = function () {
    _this3.to = undefined;
  };

  this.handleEndDateChange = function (date) {
    var endDate = date;
    var to = _moment2.default.utc(endDate);
    if (!to.isValid()) {
      return;
    }

    var startDate = _this3.state.startDate;

    var absoluteRange = {
      endDate: endDate,
      showOverlay: _overlays2.default.end
    };

    var state = void 0;
    if (!startDate) {
      state = {
        endDate: endDate,
        popoverProps: {
          absoluteRange: absoluteRange
        }
      };
    } else {
      var from = _moment2.default.utc(startDate);
      if (to.isBefore(from)) {
        endDate = startDate;
        to = from;
      }
      state = {
        startDate: from.startOf('day').toISOString(),
        endDate: to.endOf('day').toISOString(),
        value: from.format(_this3.props.dateFormat) + ' - ' + to.format(_this3.props.dateFormat),
        popoverProps: {
          absoluteRange: _extends({}, absoluteRange, {
            endDate: endDate,
            startDate: startDate
          })
        }
      };
    }
    var disabledStartDays = { after: new Date(endDate) };
    _this3.setState({ endDate: endDate, disabledStartDays: disabledStartDays });
    _this3.props.onChange(state);
  };
}, _temp);
exports.default = AbsoluteDateRange;


AbsoluteDateRange.defaultProps = _defaultProps2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkFic29sdXRlRGF0ZVJhbmdlIiwicHJvcHMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidXRjU3RhcnREYXRlIiwiaXNWYWxpZCIsIm1vbWVudCIsInV0YyIsInN0YXJ0T2YiLCJ0b0lTT1N0cmluZyIsInV0Y0VuZERhdGUiLCJpc0JlZm9yZSIsImRpc2FibGVkU3RhcnREYXlzIiwiYWZ0ZXIiLCJEYXRlIiwiZGlzYWJsZWRFbmREYXlzIiwiYmVmb3JlIiwic3RhdGUiLCJyZW5kZXIiLCJyZWdpb24iLCJkYXRlRm9ybWF0IiwibnVtYmVyT2ZNb250aHMiLCJzaG93V2Vla051bWJlcnMiLCJmcm9tIiwidG8iLCJtb2RpZmllcnMiLCJzdGFydCIsImVuZCIsInRyYW5zbGF0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImVsIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50Iiwic2hvd092ZXJsYXkiLCJmb2N1cyIsImhhbmRsZVN0YXJ0RGF5Q2xpY2siLCJ1bmRlZmluZWQiLCJkYXRlIiwiYWJzb2x1dGVSYW5nZSIsIk92ZXJsYXlzIiwicG9wb3ZlclByb3BzIiwiaXNBZnRlciIsImVuZE9mIiwidmFsdWUiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlRW5kRGF5Q2xpY2siLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OzBGQVpBO0FBQ0E7OztBQWFBLElBQU1BLHVCQUF1QkMsMkJB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QUFYLEVBQWQ7QUFDQSxXQUFLWCxLQUFMLENBQVcrQyxRQUFYLENBQW9CL0IsS0FBcEI7QUFDRCxHOztrQkE3SGtCakIsaUI7OztBQTBMckJBLGtCQUFrQmtELFlBQWxCLEdBQWlDQSxzQkFBakMiLCJmaWxlIjoiYWJzb2x1dGUtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRhdGV0aW1lJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgT3ZlcmxheXMgZnJvbSAnLi9vdmVybGF5cyc7XG5cbmNvbnN0IEFic29sdXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXRjU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhzdGFydERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBzdGFydERhdGU7XG4gICAgbGV0IHV0Y0VuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhlbmREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogZW5kRGF0ZTtcbiAgICB1dGNFbmREYXRlID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgJiZcbiAgICAgIG1vbWVudCh1dGNFbmREYXRlKS5pc0JlZm9yZShtb21lbnQodXRjU3RhcnREYXRlKSkgP1xuICAgICAgdXRjU3RhcnREYXRlIDpcbiAgICAgIHV0Y0VuZERhdGU7XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpID8geyBhZnRlcjogbmV3IERhdGUodXRjRW5kRGF0ZSkgfSA6IG51bGw7XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpID9cbiAgICAgIHsgYmVmb3JlOiBuZXcgRGF0ZSh1dGNTdGFydERhdGUpIH0gOiBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydERhdGU6IHV0Y1N0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IHV0Y0VuZERhdGUsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5mcm9tICYmIHNob3dPdmVybGF5ID09PSAxKSB7XG4gICAgICB0aGlzLmZyb20uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG8gJiYgc2hvd092ZXJsYXkgPT09IDIpIHtcbiAgICAgIHRoaXMudG8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdGFydERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZnJvbSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgbGV0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFmcm9tLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgc3RhcnREYXRlLFxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLnN0YXJ0LFxuICAgIH07XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghZW5kRGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIGlmIChmcm9tLmlzQWZ0ZXIodG8pKSB7XG4gICAgICAgIHN0YXJ0RGF0ZSA9IGVuZERhdGU7XG4gICAgICAgIGZyb20gPSB0bztcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAgIC4uLmFic29sdXRlUmFuZ2UsXG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSB7IGJlZm9yZTogbmV3IERhdGUoc3RhcnREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGRpc2FibGVkRW5kRGF5cyB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMudG8gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBsZXQgZW5kRGF0ZSA9IGRhdGU7XG4gICAgbGV0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICBpZiAoIXRvLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLmVuZCxcbiAgICB9O1xuXG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBpZiAodG8uaXNCZWZvcmUoZnJvbSkpIHtcbiAgICAgICAgZW5kRGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgdG8gPSBmcm9tO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX1gLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSB7IGFmdGVyOiBuZXcgRGF0ZShlbmREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlLCBkaXNhYmxlZFN0YXJ0RGF5cyB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByZWdpb24sXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgbnVtYmVyT2ZNb250aHMsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgICAgZGlzYWJsZWRTdGFydERheXMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZyb20gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICAgIGNvbnN0IHRvID0gbmV3IERhdGUoZW5kRGF0ZSk7XG4gICAgY29uc3QgbW9kaWZpZXJzID0geyBzdGFydDogZnJvbSwgZW5kOiB0byB9O1xuICAgIHJldHVybiAoXG4gICAgICA8QWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXJ0RGF0ZVwiPnt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5zdGFydERhdGV9PC9sYWJlbD5cbiAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cbiAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxuICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICBpbnB1dFJlZj17ZWwgPT4gKHRoaXMuZnJvbSA9IGVsKX1cbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgIHRvTW9udGg9e3RvfVxuICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVuZERhdGVcIj57dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuZW5kRGF0ZX08L2xhYmVsPlxuICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgIGZyb21Nb250aD17ZnJvbX1cbiAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxuICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICBtb250aD17ZnJvbX1cbiAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICBpbnB1dFJlZj17ZWwgPT4gKHRoaXMudG8gPSBlbCl9XG4gICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgPC9BYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbkFic29sdXRlRGF0ZVJhbmdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuQWJzb2x1dGVEYXRlUmFuZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19