'use strict';

exports.__esModule = true;
exports.default = undefined;

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

    var utcStartDate = (0, _moment2.default)(startDate).isValid() ? _moment2.default.utc(startDate).startOf('day') : startDate;
    var utcEndDate = (0, _moment2.default)(endDate).isValid() ? _moment2.default.utc(endDate).startOf('day') : endDate;
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
          onDayClick: function onDayClick() {
            return _this2.to.input.focus();
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
          ref: function ref(el) {
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

  this.handleStartDateChange = function (date) {
    var startDate = date;
    var from = _moment2.default.utc(startDate);
    if (!from.isValid()) {
      return;
    }

    var endDate = _this3.state.endDate;

    var state = void 0;
    if (!endDate) {
      state = {
        startDate: startDate,
        popoverProps: {
          absoluteRange: {
            startDate: startDate
          }
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
          absoluteRange: {
            startDate: startDate,
            endDate: endDate
          }
        }
      };
    }
    var disabledEndDays = { before: new Date(startDate) };
    _this3.setState({ startDate: startDate, disabledEndDays: disabledEndDays });
    _this3.props.onChange(state);
  };

  this.handleEndDateChange = function (date) {
    var endDate = date;
    var to = _moment2.default.utc(endDate);
    if (!to.isValid()) {
      return;
    }

    var startDate = _this3.state.startDate;

    var state = void 0;
    if (!startDate) {
      state = {
        endDate: endDate,
        popoverProps: {
          absoluteRange: {
            endDate: endDate
          }
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
          absoluteRange: {
            endDate: endDate,
            startDate: startDate
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkFic29sdXRlRGF0ZVJhbmdlIiwicHJvcHMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidXRjU3RhcnREYXRlIiwiaXNWYWxpZCIsIm1vbWVudCIsInV0YyIsInN0YXJ0T2YiLCJ1dGNFbmREYXRlIiwiaXNCZWZvcmUiLCJkaXNhYmxlZFN0YXJ0RGF5cyIsImFmdGVyIiwiRGF0ZSIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsInN0YXRlIiwicmVuZGVyIiwicmVnaW9uIiwiZGF0ZUZvcm1hdCIsIm51bWJlck9mTW9udGhzIiwic2hvd1dlZWtOdW1iZXJzIiwiZnJvbSIsInRvIiwibW9kaWZpZXJzIiwic3RhcnQiLCJlbmQiLCJ0cmFuc2xhdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJpbnB1dCIsImZvY3VzIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImVsIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGF0ZSIsInBvcG92ZXJQcm9wcyIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsInZhbHVlIiwiZm9ybWF0Iiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFYQTtBQUNBOzs7QUFZQSxJQUFNQSx1QkFBdUJDLDJCQUFPQyxHQUE5QixpQkFBTjs7SUFZcUJDLGlCOzs7QUFDbkIsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBQUEs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QUFTLEtBQVQsRUFBZ0JDLFdBQWhCLEVBRkg7QUFHTkMsZUFBVW5CLEtBQUtvQixNQUFMLENBQVksT0FBS3pDLEtBQUwsQ0FBV2tCLFVBQXZCLENBQVYsV0FBa0RJLEdBQUdtQixNQUFILENBQVUsT0FBS3pDLEtBQUwsQ0FBV2tCLFVBQXJCLENBSDVDO0FBSU5pQixzQkFBYztBQUNaQyx5QkFBZTtBQUNibEMsNEJBRGE7QUFFYkQ7QUFGYTtBQURIO0FBSlIsT0FBUjtBQVdEO0FBQ0QsUUFBTVMsb0JBQW9CLEVBQUVDLE9BQU8sSUFBSUMsSUFBSixDQUFTVixPQUFULENBQVQsRUFBMUI7QUFDQSxXQUFLd0MsUUFBTCxDQUFjLEVBQUV4QyxnQkFBRixFQUFXUSxvQ0FBWCxFQUFkO0FBQ0EsV0FBS1YsS0FBTCxDQUFXMkMsUUFBWCxDQUFvQjVCLEtBQXBCO0FBQ0QsRzs7a0JBckdrQmhCLGlCOzs7QUFrS3JCQSxrQkFBa0I2QyxZQUFsQixHQUFpQ0Esc0JBQWpDIiwiZmlsZSI6ImFic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kYXRldGltZSc7XG5cbmltcG9ydCBEYXRlU2VjdGlvbiBmcm9tICcuLi9kYXRlLXNlY3Rpb24uY29tcG9uZW50cyc7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuXG5jb25zdCBBYnNvbHV0ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic29sdXRlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHV0Y1N0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoc3RhcnREYXRlKS5zdGFydE9mKCdkYXknKSA6IHN0YXJ0RGF0ZTtcbiAgICBsZXQgdXRjRW5kRGF0ZSA9IG1vbWVudChlbmREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKGVuZERhdGUpLnN0YXJ0T2YoJ2RheScpIDogZW5kRGF0ZTtcbiAgICB1dGNFbmREYXRlID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgJiZcbiAgICAgIG1vbWVudCh1dGNFbmREYXRlKS5pc0JlZm9yZShtb21lbnQodXRjU3RhcnREYXRlKSkgP1xuICAgICAgdXRjU3RhcnREYXRlIDpcbiAgICAgIHV0Y0VuZERhdGU7XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpID8geyBhZnRlcjogbmV3IERhdGUodXRjRW5kRGF0ZSkgfSA6IG51bGw7XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpID9cbiAgICAgIHsgYmVmb3JlOiBuZXcgRGF0ZSh1dGNTdGFydERhdGUpIH0gOiBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydERhdGU6IHV0Y1N0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IHV0Y0VuZERhdGUsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBsZXQgc3RhcnREYXRlID0gZGF0ZTtcbiAgICBsZXQgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICBpZiAoIWZyb20uaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIWVuZERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgaWYgKGZyb20uaXNBZnRlcih0bykpIHtcbiAgICAgICAgc3RhcnREYXRlID0gZW5kRGF0ZTtcbiAgICAgICAgZnJvbSA9IHRvO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0geyBiZWZvcmU6IG5ldyBEYXRlKHN0YXJ0RGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlLCBkaXNhYmxlZEVuZERheXMgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBsZXQgZW5kRGF0ZSA9IGRhdGU7XG4gICAgbGV0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICBpZiAoIXRvLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIXN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBpZiAodG8uaXNCZWZvcmUoZnJvbSkpIHtcbiAgICAgICAgZW5kRGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgdG8gPSBmcm9tO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX1gLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IHsgYWZ0ZXI6IG5ldyBEYXRlKGVuZERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUsIGRpc2FibGVkU3RhcnREYXlzIH0pO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJlZ2lvbixcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBudW1iZXJPZk1vbnRocyxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZnJvbSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgICBjb25zdCBtb2RpZmllcnMgPSB7IHN0YXJ0OiBmcm9tLCBlbmQ6IHRvIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RhcnREYXRlXCI+e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnN0YXJ0RGF0ZX08L2xhYmVsPlxuICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkU3RhcnREYXlzfVxuICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgIG9uRGF5Q2xpY2s9eygpID0+IHRoaXMudG8uaW5wdXQuZm9jdXMoKX1cbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgIHRvTW9udGg9e3RvfVxuICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVuZERhdGVcIj57dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuZW5kRGF0ZX08L2xhYmVsPlxuICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgIGZyb21Nb250aD17ZnJvbX1cbiAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxuICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICBtb250aD17ZnJvbX1cbiAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLnRvID0gZWwpfVxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvQWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5BYnNvbHV0ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkFic29sdXRlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuIl19