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

var _translate = require('../../translations/translate');

var _translate2 = _interopRequireDefault(_translate);

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
        className = _props.className,
        region = _props.region,
        dateFormat = _props.dateFormat,
        numberOfMonths = _props.numberOfMonths,
        showWeekNumbers = _props.showWeekNumbers,
        translations = _props.translations;
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
            label: (0, _translate2.default)(translations, 'startDate')
          },
          _react2.default.createElement(_reactDatetime.DateInput, {
            className: className + ' start-date',
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
            label: (0, _translate2.default)(translations, 'endDate')
          },
          _react2.default.createElement(_reactDatetime.DateInput, {
            className: className + ' end-date',
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

    if (_this3.from && showOverlay === _overlays2.default.START) {
      _this3.from.focus();
    } else if (_this3.to && showOverlay === _overlays2.default.END) {
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
      showOverlay: _overlays2.default.START
    };
    var state = void 0;
    if (!endDate) {
      state = {
        startDate: startDate,
        absoluteRange: absoluteRange
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
        absoluteRange: _extends({}, absoluteRange, {
          startDate: startDate,
          endDate: endDate
        })
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
      showOverlay: _overlays2.default.END
    };

    var state = void 0;
    if (!startDate) {
      state = {
        endDate: endDate,
        absoluteRange: absoluteRange
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
        absoluteRange: _extends({}, absoluteRange, {
          endDate: endDate,
          startDate: startDate
        })
      };
    }
    var disabledStartDays = { after: new Date(endDate) };
    _this3.setState({ endDate: endDate, disabledStartDays: disabledStartDays });
    _this3.props.onChange(state);
  };
}, _temp);
exports.default = AbsoluteDateRange;


AbsoluteDateRange.defaultProps = _defaultProps2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkFic29sdXRlRGF0ZVJhbmdlIiwicHJvcHMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidXRjU3RhcnREYXRlIiwiaXNWYWxpZCIsIm1vbWVudCIsInV0YyIsInN0YXJ0T2YiLCJ0b0lTT1N0cmluZyIsInV0Y0VuZERhdGUiLCJpc0JlZm9yZSIsImRpc2FibGVkU3RhcnREYXlzIiwiYWZ0ZXIiLCJEYXRlIiwiZGlzYWJsZWRFbmREYXlzIiwiYmVmb3JlIiwic3RhdGUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJyZWdpb24iLCJkYXRlRm9ybWF0IiwibnVtYmVyT2ZNb250aHMiLCJzaG93V2Vla051bWJlcnMiLCJ0cmFuc2xhdGlvbnMiLCJmcm9tIiwidG8iLCJtb2RpZmllcnMiLCJzdGFydCIsImVuZCIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImVsIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50Iiwic2hvd092ZXJsYXkiLCJPdmVybGF5cyIsIlNUQVJUIiwiZm9jdXMiLCJFTkQiLCJoYW5kbGVTdGFydERheUNsaWNrIiwidW5kZWZpbmVkIiwiZGF0ZSIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJ2YWx1ZSIsImZvcm1hdCIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJoYW5kbGVFbmREYXlDbGljayIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFkQTtBQUNB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RXpDLDBCQUZGO0FBR0VEO0FBSEY7QUFKTSxPQUFSO0FBVUQ7QUFDRCxRQUFNVSxvQkFBb0IsRUFBRUMsT0FBTyxJQUFJQyxJQUFKLENBQVNYLE9BQVQsQ0FBVCxFQUExQjtBQUNBLFdBQUs4QyxRQUFMLENBQWMsRUFBRTlDLGdCQUFGLEVBQVdTLG9DQUFYLEVBQWQ7QUFDQSxXQUFLWCxLQUFMLENBQVdpRCxRQUFYLENBQW9CakMsS0FBcEI7QUFDRCxHOztrQkFySGtCakIsaUI7OztBQWdNckJBLGtCQUFrQm9ELFlBQWxCLEdBQWlDQSxzQkFBakMiLCJmaWxlIjoiYWJzb2x1dGUtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRhdGV0aW1lJztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBEYXRlU2VjdGlvbiBmcm9tICcuLi9kYXRlLXNlY3Rpb24uY29tcG9uZW50cyc7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IE92ZXJsYXlzIGZyb20gJy4vb3ZlcmxheXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgQWJzb2x1dGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXRjU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhzdGFydERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBzdGFydERhdGU7XG4gICAgbGV0IHV0Y0VuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhlbmREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogZW5kRGF0ZTtcbiAgICB1dGNFbmREYXRlID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgJiZcbiAgICAgIG1vbWVudCh1dGNFbmREYXRlKS5pc0JlZm9yZShtb21lbnQodXRjU3RhcnREYXRlKSkgP1xuICAgICAgdXRjU3RhcnREYXRlIDpcbiAgICAgIHV0Y0VuZERhdGU7XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpID8geyBhZnRlcjogbmV3IERhdGUodXRjRW5kRGF0ZSkgfSA6IG51bGw7XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpID9cbiAgICAgIHsgYmVmb3JlOiBuZXcgRGF0ZSh1dGNTdGFydERhdGUpIH0gOiBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydERhdGU6IHV0Y1N0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IHV0Y0VuZERhdGUsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5mcm9tICYmIHNob3dPdmVybGF5ID09PSBPdmVybGF5cy5TVEFSVCkge1xuICAgICAgdGhpcy5mcm9tLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvICYmIHNob3dPdmVybGF5ID09PSBPdmVybGF5cy5FTkQpIHtcbiAgICAgIHRoaXMudG8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdGFydERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZnJvbSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgbGV0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFmcm9tLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgc3RhcnREYXRlLFxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLlNUQVJULFxuICAgIH07XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghZW5kRGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgYWJzb2x1dGVSYW5nZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIGlmIChmcm9tLmlzQWZ0ZXIodG8pKSB7XG4gICAgICAgIHN0YXJ0RGF0ZSA9IGVuZERhdGU7XG4gICAgICAgIGZyb20gPSB0bztcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0geyBiZWZvcmU6IG5ldyBEYXRlKHN0YXJ0RGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlLCBkaXNhYmxlZEVuZERheXMgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnRvID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGVuZERhdGUgPSBkYXRlO1xuICAgIGxldCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgaWYgKCF0by5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5FTkQsXG4gICAgfTtcblxuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIXN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgaWYgKHRvLmlzQmVmb3JlKGZyb20pKSB7XG4gICAgICAgIGVuZERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRvID0gZnJvbTtcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLmFic29sdXRlUmFuZ2UsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IHsgYWZ0ZXI6IG5ldyBEYXRlKGVuZERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUsIGRpc2FibGVkU3RhcnREYXlzIH0pO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJlZ2lvbixcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBudW1iZXJPZk1vbnRocyxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZnJvbSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgICBjb25zdCBtb2RpZmllcnMgPSB7IHN0YXJ0OiBmcm9tLCBlbmQ6IHRvIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwiYWJzb2x1dGVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzdGFydC1kYXRlYH1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRSZWY9e2VsID0+ICh0aGlzLmZyb20gPSBlbCl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICB0b01vbnRoPXt0b31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZW5kLWRhdGVgfVxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UmVmPXtlbCA9PiAodGhpcy50byA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICA8L0Fic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQWJzb2x1dGVEYXRlUmFuZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5BYnNvbHV0ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=