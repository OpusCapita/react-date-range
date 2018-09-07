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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkFic29sdXRlRGF0ZVJhbmdlIiwicHJvcHMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidXRjU3RhcnREYXRlIiwiaXNWYWxpZCIsIm1vbWVudCIsInV0YyIsInN0YXJ0T2YiLCJ0b0lTT1N0cmluZyIsInV0Y0VuZERhdGUiLCJpc0JlZm9yZSIsImRpc2FibGVkU3RhcnREYXlzIiwiYWZ0ZXIiLCJEYXRlIiwiZGlzYWJsZWRFbmREYXlzIiwiYmVmb3JlIiwic3RhdGUiLCJyZW5kZXIiLCJyZWdpb24iLCJkYXRlRm9ybWF0IiwibnVtYmVyT2ZNb250aHMiLCJzaG93V2Vla051bWJlcnMiLCJmcm9tIiwidG8iLCJtb2RpZmllcnMiLCJzdGFydCIsImVuZCIsInRyYW5zbGF0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJlbCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRhdGUiLCJwb3BvdmVyUHJvcHMiLCJhYnNvbHV0ZVJhbmdlIiwiaXNBZnRlciIsImVuZE9mIiwidmFsdWUiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OzBGQVhBO0FBQ0E7OztBQVlBLElBQU1BLHVCQUF1QkMsMkJBQU9DLEdBQTlCLGlCQUFOOztJQVlxQkMsaUI7OztBQUNuQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQTs7QUFBQSxzQkFFYyxNQUFLQSxLQUZu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QyxLQUFMLENBQVdtQixVQUF2QixDQUFWLFdBQWtESSxHQUFHZ0IsTUFBSCxDQUFVLE9BQUt2QyxLQUFMLENBQVdtQixVQUFyQixDQUg1QztBQUlOZSxzQkFBYztBQUNaQyx5QkFBZTtBQUNiakMsNEJBRGE7QUFFYkQ7QUFGYTtBQURIO0FBSlIsT0FBUjtBQVdEO0FBQ0QsUUFBTVUsb0JBQW9CLEVBQUVDLE9BQU8sSUFBSUMsSUFBSixDQUFTWCxPQUFULENBQVQsRUFBMUI7QUFDQSxXQUFLc0MsUUFBTCxDQUFjLEVBQUV0QyxnQkFBRixFQUFXUyxvQ0FBWCxFQUFkO0FBQ0EsV0FBS1gsS0FBTCxDQUFXeUMsUUFBWCxDQUFvQnpCLEtBQXBCO0FBQ0QsRzs7a0JBckdrQmpCLGlCOzs7QUFpS3JCQSxrQkFBa0IyQyxZQUFsQixHQUFpQ0Esc0JBQWpDIiwiZmlsZSI6ImFic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kYXRldGltZSc7XHJcblxyXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XHJcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcclxuXHJcbmNvbnN0IEFic29sdXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB1dGNTdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKHN0YXJ0RGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IHN0YXJ0RGF0ZTtcclxuICAgIGxldCB1dGNFbmREYXRlID0gbW9tZW50KGVuZERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoZW5kRGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IGVuZERhdGU7XHJcbiAgICB1dGNFbmREYXRlID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgJiZcclxuICAgICAgbW9tZW50KHV0Y0VuZERhdGUpLmlzQmVmb3JlKG1vbWVudCh1dGNTdGFydERhdGUpKSA/XHJcbiAgICAgIHV0Y1N0YXJ0RGF0ZSA6XHJcbiAgICAgIHV0Y0VuZERhdGU7XHJcbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgPyB7IGFmdGVyOiBuZXcgRGF0ZSh1dGNFbmREYXRlKSB9IDogbnVsbDtcclxuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IG1vbWVudCh1dGNTdGFydERhdGUpLmlzVmFsaWQoKSA/XHJcbiAgICAgIHsgYmVmb3JlOiBuZXcgRGF0ZSh1dGNTdGFydERhdGUpIH0gOiBudWxsO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3RhcnREYXRlOiB1dGNTdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGU6IHV0Y0VuZERhdGUsXHJcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxyXG4gICAgICBkaXNhYmxlZEVuZERheXMsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcclxuICAgIGxldCBzdGFydERhdGUgPSBkYXRlO1xyXG4gICAgbGV0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XHJcbiAgICBpZiAoIWZyb20uaXNWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgc3RhdGU7XHJcbiAgICBpZiAoIWVuZERhdGUpIHtcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xyXG4gICAgICAgICAgYWJzb2x1dGVSYW5nZToge1xyXG4gICAgICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XHJcbiAgICAgIGlmIChmcm9tLmlzQWZ0ZXIodG8pKSB7XHJcbiAgICAgICAgc3RhcnREYXRlID0gZW5kRGF0ZTtcclxuICAgICAgICBmcm9tID0gdG87XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9YCxcclxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcclxuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcclxuICAgICAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgICAgICBlbmREYXRlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0geyBiZWZvcmU6IG5ldyBEYXRlKHN0YXJ0RGF0ZSkgfTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGRpc2FibGVkRW5kRGF5cyB9KTtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XHJcbiAgICBsZXQgZW5kRGF0ZSA9IGRhdGU7XHJcbiAgICBsZXQgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xyXG4gICAgaWYgKCF0by5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IHN0YXRlO1xyXG4gICAgaWYgKCFzdGFydERhdGUpIHtcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZW5kRGF0ZSxcclxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcclxuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcclxuICAgICAgICAgICAgZW5kRGF0ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmICh0by5pc0JlZm9yZShmcm9tKSkge1xyXG4gICAgICAgIGVuZERhdGUgPSBzdGFydERhdGU7XHJcbiAgICAgICAgdG8gPSBmcm9tO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9YCxcclxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcclxuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcclxuICAgICAgICAgICAgZW5kRGF0ZSxcclxuICAgICAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSB7IGFmdGVyOiBuZXcgRGF0ZShlbmREYXRlKSB9O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUsIGRpc2FibGVkU3RhcnREYXlzIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHJlZ2lvbixcclxuICAgICAgZGF0ZUZvcm1hdCxcclxuICAgICAgbnVtYmVyT2ZNb250aHMsXHJcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBkaXNhYmxlZEVuZERheXMsXHJcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxyXG4gICAgICBzdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGUsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGZyb20gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcclxuICAgIGNvbnN0IG1vZGlmaWVycyA9IHsgc3RhcnQ6IGZyb20sIGVuZDogdG8gfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cclxuICAgICAgICA8RGF0ZVNlY3Rpb24+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXJ0RGF0ZVwiPnt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5zdGFydERhdGV9PC9sYWJlbD5cclxuICAgICAgICAgIDxEYXRlSW5wdXRcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cclxuICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cclxuICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XHJcbiAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxyXG4gICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cclxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XHJcbiAgICAgICAgICAgIHRvTW9udGg9e3RvfVxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxyXG4gICAgICAgIDxIeXBoZW4gLz5cclxuICAgICAgICA8RGF0ZVNlY3Rpb24+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVuZERhdGVcIj57dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuZW5kRGF0ZX08L2xhYmVsPlxyXG4gICAgICAgICAgPERhdGVJbnB1dFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxyXG4gICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cclxuICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxyXG4gICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cclxuICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XHJcbiAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxyXG4gICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlZj17ZWwgPT4gKHRoaXMudG8gPSBlbCl9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XHJcbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cclxuICAgICAgPC9BYnNvbHV0ZVJhbmdlU2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BYnNvbHV0ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG5BYnNvbHV0ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcblxyXG4iXX0=