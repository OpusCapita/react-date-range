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
        startDate: startDate,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkFic29sdXRlRGF0ZVJhbmdlIiwicHJvcHMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidXRjU3RhcnREYXRlIiwiaXNWYWxpZCIsIm1vbWVudCIsInV0YyIsInN0YXJ0T2YiLCJ1dGNFbmREYXRlIiwiaXNCZWZvcmUiLCJkaXNhYmxlZFN0YXJ0RGF5cyIsImFmdGVyIiwiRGF0ZSIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsInN0YXRlIiwicmVuZGVyIiwicmVnaW9uIiwiZGF0ZUZvcm1hdCIsIm51bWJlck9mTW9udGhzIiwic2hvd1dlZWtOdW1iZXJzIiwiZnJvbSIsInRvIiwibW9kaWZpZXJzIiwic3RhcnQiLCJlbmQiLCJ0cmFuc2xhdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJpbnB1dCIsImZvY3VzIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImVsIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGF0ZSIsInBvcG92ZXJQcm9wcyIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsInZhbHVlIiwiZm9ybWF0Iiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFYQTtBQUNBOzs7QUFZQSxJQUFNQSx1QkFBdUJDLDJCQUFPQyxHQUE5QixpQkFBTjs7SUFZcUJDLGlCOzs7QUFDbkIsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBQUEs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S29CLE1BQUwsQ0FBWSxPQUFLekMsS0FBTCxDQUFXa0IsVUFBdkIsQ0FBVixXQUFrREksR0FBR21CLE1BQUgsQ0FBVSxPQUFLekMsS0FBTCxDQUFXa0IsVUFBckIsQ0FINUM7QUFJTmlCLHNCQUFjO0FBQ1pDLHlCQUFlO0FBQ2JsQyw0QkFEYTtBQUViRDtBQUZhO0FBREg7QUFKUixPQUFSO0FBV0Q7QUFDRCxRQUFNUyxvQkFBb0IsRUFBRUMsT0FBTyxJQUFJQyxJQUFKLENBQVNWLE9BQVQsQ0FBVCxFQUExQjtBQUNBLFdBQUt3QyxRQUFMLENBQWMsRUFBRXhDLGdCQUFGLEVBQVdRLG9DQUFYLEVBQWQ7QUFDQSxXQUFLVixLQUFMLENBQVcyQyxRQUFYLENBQW9CNUIsS0FBcEI7QUFDRCxHOztrQkFyR2tCaEIsaUI7OztBQWtLckJBLGtCQUFrQjZDLFlBQWxCLEdBQWlDQSxzQkFBakMiLCJmaWxlIjoiYWJzb2x1dGUtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRhdGV0aW1lJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5cbmNvbnN0IEFic29sdXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXRjU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhzdGFydERhdGUpLnN0YXJ0T2YoJ2RheScpIDogc3RhcnREYXRlO1xuICAgIGxldCB1dGNFbmREYXRlID0gbW9tZW50KGVuZERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoZW5kRGF0ZSkuc3RhcnRPZignZGF5JykgOiBlbmREYXRlO1xuICAgIHV0Y0VuZERhdGUgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSAmJlxuICAgICAgbW9tZW50KHV0Y0VuZERhdGUpLmlzQmVmb3JlKG1vbWVudCh1dGNTdGFydERhdGUpKSA/XG4gICAgICB1dGNTdGFydERhdGUgOlxuICAgICAgdXRjRW5kRGF0ZTtcbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgPyB7IGFmdGVyOiBuZXcgRGF0ZSh1dGNFbmREYXRlKSB9IDogbnVsbDtcbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgP1xuICAgICAgeyBiZWZvcmU6IG5ldyBEYXRlKHV0Y1N0YXJ0RGF0ZSkgfSA6IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogdXRjU3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZTogdXRjRW5kRGF0ZSxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBzdGFydERhdGUgPSBkYXRlO1xuICAgIGxldCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgIGlmICghZnJvbS5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghZW5kRGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc0FmdGVyKHRvKSkge1xuICAgICAgICBzdGFydERhdGUgPSBlbmREYXRlO1xuICAgICAgICBmcm9tID0gdG87XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX1gLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSB7IGJlZm9yZTogbmV3IERhdGUoc3RhcnREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGRpc2FibGVkRW5kRGF5cyB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBlbmREYXRlID0gZGF0ZTtcbiAgICBsZXQgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgIGlmICghdG8uaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGlmICh0by5pc0JlZm9yZShmcm9tKSkge1xuICAgICAgICBlbmREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0byA9IGZyb207XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX1gLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IHsgYWZ0ZXI6IG5ldyBEYXRlKGVuZERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUsIGRpc2FibGVkU3RhcnREYXlzIH0pO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJlZ2lvbixcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBudW1iZXJPZk1vbnRocyxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZnJvbSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgICBjb25zdCBtb2RpZmllcnMgPSB7IHN0YXJ0OiBmcm9tLCBlbmQ6IHRvIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RhcnREYXRlXCI+e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnN0YXJ0RGF0ZX08L2xhYmVsPlxuICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkU3RhcnREYXlzfVxuICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgIG9uRGF5Q2xpY2s9eygpID0+IHRoaXMudG8uaW5wdXQuZm9jdXMoKX1cbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgIHRvTW9udGg9e3RvfVxuICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVuZERhdGVcIj57dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuZW5kRGF0ZX08L2xhYmVsPlxuICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgIGZyb21Nb250aD17ZnJvbX1cbiAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxuICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICBtb250aD17ZnJvbX1cbiAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLnRvID0gZWwpfVxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvQWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5BYnNvbHV0ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkFic29sdXRlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuIl19