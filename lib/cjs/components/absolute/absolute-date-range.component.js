'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0 0 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0 0 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDatetime = require('@opuscapita/react-datetime');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

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
          _ocCmCommonLayouts.Content.InputColumn,
          {
            className: 'absolute-start-date',
            id: 'absoluteStartDate',
            label: this.props.translations.startDate
          },
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
        )
      ),
      _react2.default.createElement(_hyphen2.default, null),
      _react2.default.createElement(
        _dateSection2.default,
        null,
        _react2.default.createElement(
          _ocCmCommonLayouts.Content.InputColumn,
          {
            className: 'absolute-end-date',
            id: 'absoluteEndDate',
            label: this.props.translations.endDate
          },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkFic29sdXRlRGF0ZVJhbmdlIiwicHJvcHMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidXRjU3RhcnREYXRlIiwiaXNWYWxpZCIsIm1vbWVudCIsInV0YyIsInN0YXJ0T2YiLCJ0b0lTT1N0cmluZyIsInV0Y0VuZERhdGUiLCJpc0JlZm9yZSIsImRpc2FibGVkU3RhcnREYXlzIiwiYWZ0ZXIiLCJEYXRlIiwiZGlzYWJsZWRFbmREYXlzIiwiYmVmb3JlIiwic3RhdGUiLCJyZW5kZXIiLCJyZWdpb24iLCJkYXRlRm9ybWF0IiwibnVtYmVyT2ZNb250aHMiLCJzaG93V2Vla051bWJlcnMiLCJmcm9tIiwidG8iLCJtb2RpZmllcnMiLCJzdGFydCIsImVuZCIsInRyYW5zbGF0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImVsIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50Iiwic2hvd092ZXJsYXkiLCJmb2N1cyIsImhhbmRsZVN0YXJ0RGF5Q2xpY2siLCJ1bmRlZmluZWQiLCJkYXRlIiwiYWJzb2x1dGVSYW5nZSIsIk92ZXJsYXlzIiwicG9wb3ZlclByb3BzIiwiaXNBZnRlciIsImVuZE9mIiwidmFsdWUiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlRW5kRGF5Q2xpY2siLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OzBGQWJBO0FBQ0E7OztBQWNBLElBQU1BLHVCQUF1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QUFFQyxPQUFPLElBQUlDLElBQUosQ0FBU1gsT0FBVCxDQUFULEVBQTFCO0FBQ0EsV0FBSzRDLFFBQUwsQ0FBYyxFQUFFNUMsZ0JBQUYsRUFBV1Msb0NBQVgsRUFBZDtBQUNBLFdBQUtYLEtBQUwsQ0FBVytDLFFBQVgsQ0FBb0IvQixLQUFwQjtBQUNELEc7O2tCQTdIa0JqQixpQjs7O0FBb01yQkEsa0JBQWtCa0QsWUFBbEIsR0FBaUNBLHNCQUFqQyIsImZpbGUiOiJhYnNvbHV0ZS1kYXRlLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZGF0ZXRpbWUnO1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgT3ZlcmxheXMgZnJvbSAnLi9vdmVybGF5cyc7XG5cbmNvbnN0IEFic29sdXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAwIDAgMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic29sdXRlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHV0Y1N0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoc3RhcnREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogc3RhcnREYXRlO1xuICAgIGxldCB1dGNFbmREYXRlID0gbW9tZW50KGVuZERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoZW5kRGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IGVuZERhdGU7XG4gICAgdXRjRW5kRGF0ZSA9IG1vbWVudCh1dGNTdGFydERhdGUpLmlzVmFsaWQoKSAmJiBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpICYmXG4gICAgICBtb21lbnQodXRjRW5kRGF0ZSkuaXNCZWZvcmUobW9tZW50KHV0Y1N0YXJ0RGF0ZSkpID9cbiAgICAgIHV0Y1N0YXJ0RGF0ZSA6XG4gICAgICB1dGNFbmREYXRlO1xuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0gbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSA/IHsgYWZ0ZXI6IG5ldyBEYXRlKHV0Y0VuZERhdGUpIH0gOiBudWxsO1xuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IG1vbWVudCh1dGNTdGFydERhdGUpLmlzVmFsaWQoKSA/XG4gICAgICB7IGJlZm9yZTogbmV3IERhdGUodXRjU3RhcnREYXRlKSB9IDogbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiB1dGNTdGFydERhdGUsXG4gICAgICBlbmREYXRlOiB1dGNFbmREYXRlLFxuICAgICAgZGlzYWJsZWRTdGFydERheXMsXG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMuZnJvbSAmJiBzaG93T3ZlcmxheSA9PT0gMSkge1xuICAgICAgdGhpcy5mcm9tLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvICYmIHNob3dPdmVybGF5ID09PSAyKSB7XG4gICAgICB0aGlzLnRvLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3RhcnREYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLmZyb20gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBzdGFydERhdGUgPSBkYXRlO1xuICAgIGxldCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgIGlmICghZnJvbS5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5zdGFydCxcbiAgICB9O1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIWVuZERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc0FmdGVyKHRvKSkge1xuICAgICAgICBzdGFydERhdGUgPSBlbmREYXRlO1xuICAgICAgICBmcm9tID0gdG87XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX1gLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0geyBiZWZvcmU6IG5ldyBEYXRlKHN0YXJ0RGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlLCBkaXNhYmxlZEVuZERheXMgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnRvID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGVuZERhdGUgPSBkYXRlO1xuICAgIGxldCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgaWYgKCF0by5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5lbmQsXG4gICAgfTtcblxuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIXN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgaWYgKHRvLmlzQmVmb3JlKGZyb20pKSB7XG4gICAgICAgIGVuZERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRvID0gZnJvbTtcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0geyBhZnRlcjogbmV3IERhdGUoZW5kRGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSwgZGlzYWJsZWRTdGFydERheXMgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcmVnaW9uLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIG51bWJlck9mTW9udGhzLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmcm9tID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgICBjb25zdCB0byA9IG5ldyBEYXRlKGVuZERhdGUpO1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IHsgc3RhcnQ6IGZyb20sIGVuZDogdG8gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEFic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZVN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc3RhcnREYXRlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRSZWY9e2VsID0+ICh0aGlzLmZyb20gPSBlbCl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICB0b01vbnRoPXt0b31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmVuZERhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UmVmPXtlbCA9PiAodGhpcy50byA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICA8L0Fic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQWJzb2x1dGVEYXRlUmFuZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5BYnNvbHV0ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=