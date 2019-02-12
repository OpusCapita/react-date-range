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

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

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
      startDateId: 'start-date-' + (0, _v2.default)(),
      endDate: utcEndDate,
      endDateId: 'end-date-' + (0, _v2.default)(),
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
        showOverlay = _props.showOverlay,
        showWeekNumbers = _props.showWeekNumbers,
        translations = _props.translations;
    var _state = this.state,
        disabledEndDays = _state.disabledEndDays,
        disabledStartDays = _state.disabledStartDays,
        startDate = _state.startDate,
        startDateId = _state.startDateId,
        endDate = _state.endDate,
        endDateId = _state.endDateId;

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
            inputProps: { id: startDateId },
            inputRef: function inputRef(el) {
              return _this2.from = el;
            },
            selectedDays: [from, { from: from, to: to }],
            showOverlay: showOverlay === _overlays2.default.START,
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
            inputProps: { id: endDateId },
            inputRef: function inputRef(el) {
              return _this2.to = el;
            },
            selectedDays: [from, { from: from, to: to }],
            showOverlay: showOverlay === _overlays2.default.END,
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

  this.isYearAutoFixed = function (selector, startDate) {
    var inputValue = document.querySelector(selector).value;
    var year = startDate.year();
    var epoch = _moment2.default.unix(0).year();
    return year < epoch || !inputValue.includes(year);
  };

  this.handleStartDateChange = function (date) {
    var startDate = date;
    var from = _moment2.default.utc(startDate);
    if (!from.isValid()) return;
    var startDateId = _this3.state.startDateId;

    if (_this3.isYearAutoFixed('.absolute-start-date #' + startDateId, from)) return;

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
    if (!to.isValid()) return;
    var endDateId = _this3.state.endDateId;

    if (_this3.isYearAutoFixed('.absolute-end-date #' + endDateId, to)) return;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIkFic29sdXRlRGF0ZVJhbmdlIiwicHJvcHMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidXRjU3RhcnREYXRlIiwiaXNWYWxpZCIsIm1vbWVudCIsInV0YyIsInN0YXJ0T2YiLCJ0b0lTT1N0cmluZyIsInV0Y0VuZERhdGUiLCJpc0JlZm9yZSIsImRpc2FibGVkU3RhcnREYXlzIiwiYWZ0ZXIiLCJEYXRlIiwiZGlzYWJsZWRFbmREYXlzIiwiYmVmb3JlIiwic3RhdGUiLCJzdGFydERhdGVJZCIsImVuZERhdGVJZCIsInJlbmRlciIsImNsYXNzTmFtZSIsInJlZ2lvbiIsImRhdGVGb3JtYXQiLCJudW1iZXJPZk1vbnRocyIsInNob3dPdmVybGF5Iiwic2hvd1dlZWtOdW1iZXJzIiwidHJhbnNsYXRpb25zIiwiZnJvbSIsInRvIiwibW9kaWZpZXJzIiwic3RhcnQiLCJlbmQiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJpZCIsImVsIiwiT3ZlcmxheXMiLCJTVEFSVCIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJFTkQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImZvY3VzIiwiaGFuZGxlU3RhcnREYXlDbGljayIsInVuZGVmaW5lZCIsImlzWWVhckF1dG9GaXhlZCIsInNlbGVjdG9yIiwiaW5wdXRWYWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwieWVhciIsImVwb2NoIiwidW5peCIsImluY2x1ZGVzIiwiZGF0ZSIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlRW5kRGF5Q2xpY2siLCJkZWZhdWx0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QVI7QUFVRDtBQUNELFFBQU1VLG9CQUFvQixFQUFFQyxPQUFPLElBQUlDLElBQUosQ0FBU1gsT0FBVCxDQUFULEVBQTFCO0FBQ0EsV0FBSzBELFFBQUwsQ0FBYyxFQUFFMUQsZ0JBQUYsRUFBV1Msb0NBQVgsRUFBZDtBQUNBLFdBQUtYLEtBQUwsQ0FBVzZELFFBQVgsQ0FBb0I3QyxLQUFwQjtBQUNELEc7O2tCQTlIa0JqQixpQjs7O0FBZ05yQkEsa0JBQWtCZ0UsWUFBbEIsR0FBaUNBLHNCQUFqQyIsImZpbGUiOiJhYnNvbHV0ZS1kYXRlLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB1dWlkdjQgZnJvbSAndXVpZC92NCc7XG5cbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRhdGV0aW1lJztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBEYXRlU2VjdGlvbiBmcm9tICcuLi9kYXRlLXNlY3Rpb24uY29tcG9uZW50cyc7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IE92ZXJsYXlzIGZyb20gJy4vb3ZlcmxheXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgQWJzb2x1dGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXRjU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhzdGFydERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBzdGFydERhdGU7XG4gICAgbGV0IHV0Y0VuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhlbmREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogZW5kRGF0ZTtcbiAgICB1dGNFbmREYXRlID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgJiZcbiAgICAgIG1vbWVudCh1dGNFbmREYXRlKS5pc0JlZm9yZShtb21lbnQodXRjU3RhcnREYXRlKSkgP1xuICAgICAgdXRjU3RhcnREYXRlIDpcbiAgICAgIHV0Y0VuZERhdGU7XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpID8geyBhZnRlcjogbmV3IERhdGUodXRjRW5kRGF0ZSkgfSA6IG51bGw7XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpID9cbiAgICAgIHsgYmVmb3JlOiBuZXcgRGF0ZSh1dGNTdGFydERhdGUpIH0gOiBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydERhdGU6IHV0Y1N0YXJ0RGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZUlkOiBgc3RhcnQtZGF0ZS0ke3V1aWR2NCgpfWAsXG4gICAgICBlbmREYXRlOiB1dGNFbmREYXRlLFxuICAgICAgZW5kRGF0ZUlkOiBgZW5kLWRhdGUtJHt1dWlkdjQoKX1gLFxuICAgICAgZGlzYWJsZWRTdGFydERheXMsXG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMuZnJvbSAmJiBzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuU1RBUlQpIHtcbiAgICAgIHRoaXMuZnJvbS5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50byAmJiBzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuRU5EKSB7XG4gICAgICB0aGlzLnRvLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3RhcnREYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLmZyb20gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpc1llYXJBdXRvRml4ZWQgPSAoc2VsZWN0b3IsIHN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS52YWx1ZTtcbiAgICBjb25zdCB5ZWFyID0gc3RhcnREYXRlLnllYXIoKTtcbiAgICBjb25zdCBlcG9jaCA9IG1vbWVudC51bml4KDApLnllYXIoKTtcbiAgICByZXR1cm4geWVhciA8IGVwb2NoIHx8ICFpbnB1dFZhbHVlLmluY2x1ZGVzKHllYXIpO1xuICB9XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBsZXQgc3RhcnREYXRlID0gZGF0ZTtcbiAgICBsZXQgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICBpZiAoIWZyb20uaXNWYWxpZCgpKSByZXR1cm47XG4gICAgY29uc3QgeyBzdGFydERhdGVJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGhpcy5pc1llYXJBdXRvRml4ZWQoYC5hYnNvbHV0ZS1zdGFydC1kYXRlICMke3N0YXJ0RGF0ZUlkfWAsIGZyb20pKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5TVEFSVCxcbiAgICB9O1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIWVuZERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc0FmdGVyKHRvKSkge1xuICAgICAgICBzdGFydERhdGUgPSBlbmREYXRlO1xuICAgICAgICBmcm9tID0gdG87XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX1gLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IHsgYmVmb3JlOiBuZXcgRGF0ZShzdGFydERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSwgZGlzYWJsZWRFbmREYXlzIH0pO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy50byA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBlbmREYXRlID0gZGF0ZTtcbiAgICBsZXQgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgIGlmICghdG8uaXNWYWxpZCgpKSByZXR1cm47XG4gICAgY29uc3QgeyBlbmREYXRlSWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRoaXMuaXNZZWFyQXV0b0ZpeGVkKGAuYWJzb2x1dGUtZW5kLWRhdGUgIyR7ZW5kRGF0ZUlkfWAsIHRvKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBzaG93T3ZlcmxheTogT3ZlcmxheXMuRU5ELFxuICAgIH07XG5cbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKCFzdGFydERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGlmICh0by5pc0JlZm9yZShmcm9tKSkge1xuICAgICAgICBlbmREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0byA9IGZyb207XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSB7IGFmdGVyOiBuZXcgRGF0ZShlbmREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlLCBkaXNhYmxlZFN0YXJ0RGF5cyB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICByZWdpb24sXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgbnVtYmVyT2ZNb250aHMsXG4gICAgICBzaG93T3ZlcmxheSxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZUlkLFxuICAgICAgZW5kRGF0ZSxcbiAgICAgIGVuZERhdGVJZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmcm9tID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgICBjb25zdCB0byA9IG5ldyBEYXRlKGVuZERhdGUpO1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IHsgc3RhcnQ6IGZyb20sIGVuZDogdG8gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEFic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZVN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3N0YXJ0RGF0ZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHN0YXJ0LWRhdGVgfVxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkU3RhcnREYXlzfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IGlkOiBzdGFydERhdGVJZCB9fVxuICAgICAgICAgICAgICBpbnB1dFJlZj17ZWwgPT4gKHRoaXMuZnJvbSA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd092ZXJsYXk9e3Nob3dPdmVybGF5ID09PSBPdmVybGF5cy5TVEFSVH1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIHRvTW9udGg9e3RvfVxuICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1lbmQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cImFic29sdXRlRW5kRGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2VuZERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBlbmQtZGF0ZWB9XG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRFbmREYXlzfVxuICAgICAgICAgICAgICBmcm9tTW9udGg9e2Zyb219XG4gICAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxuICAgICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgICAgbW9udGg9e2Zyb219XG4gICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBpZDogZW5kRGF0ZUlkIH19XG4gICAgICAgICAgICAgIGlucHV0UmVmPXtlbCA9PiAodGhpcy50byA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd092ZXJsYXk9e3Nob3dPdmVybGF5ID09PSBPdmVybGF5cy5FTkR9XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgPC9BYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbkFic29sdXRlRGF0ZVJhbmdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuQWJzb2x1dGVEYXRlUmFuZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19