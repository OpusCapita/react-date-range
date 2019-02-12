var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0 0 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0 0 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-return-assign */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

import { DateInput } from '@opuscapita/react-datetime';
import { Content } from '@opuscapita/oc-cm-common-layouts';

import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';
import Overlays from './overlays';
import translate from '../../translations/translate';

var AbsoluteRangeSection = styled.div(_templateObject);

var AbsoluteDateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(AbsoluteDateRange, _React$PureComponent);

  function AbsoluteDateRange(props) {
    _classCallCheck(this, AbsoluteDateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var _this$props = _this.props,
        startDate = _this$props.startDate,
        endDate = _this$props.endDate;

    var utcStartDate = moment(startDate).isValid() ? moment.utc(startDate).startOf('day').toISOString() : startDate;
    var utcEndDate = moment(endDate).isValid() ? moment.utc(endDate).startOf('day').toISOString() : endDate;
    utcEndDate = moment(utcStartDate).isValid() && moment(utcEndDate).isValid() && moment(utcEndDate).isBefore(moment(utcStartDate)) ? utcStartDate : utcEndDate;
    var disabledStartDays = moment(utcEndDate).isValid() ? { after: new Date(utcEndDate) } : null;
    var disabledEndDays = moment(utcStartDate).isValid() ? { before: new Date(utcStartDate) } : null;
    _this.state = {
      startDate: utcStartDate,
      startDateId: 'start-date-' + uuidv4(),
      endDate: utcEndDate,
      endDateId: 'end-date-' + uuidv4(),
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
    return React.createElement(
      AbsoluteRangeSection,
      null,
      React.createElement(
        DateSection,
        null,
        React.createElement(
          Content.InputColumn,
          {
            className: 'absolute-start-date',
            id: 'absoluteStartDate',
            label: translate(translations, 'startDate')
          },
          React.createElement(DateInput, {
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
            showOverlay: showOverlay === Overlays.START,
            showWeekNumbers: showWeekNumbers,
            toMonth: to,
            value: startDate
          })
        )
      ),
      React.createElement(Hyphen, null),
      React.createElement(
        DateSection,
        null,
        React.createElement(
          Content.InputColumn,
          {
            className: 'absolute-end-date',
            id: 'absoluteEndDate',
            label: translate(translations, 'endDate')
          },
          React.createElement(DateInput, {
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
            showOverlay: showOverlay === Overlays.END,
            showWeekNumbers: showWeekNumbers,
            value: endDate
          })
        )
      )
    );
  };

  return AbsoluteDateRange;
}(React.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.componentDidMount = function () {
    var showOverlay = _this3.props.showOverlay;

    if (_this3.from && showOverlay === Overlays.START) {
      _this3.from.focus();
    } else if (_this3.to && showOverlay === Overlays.END) {
      _this3.to.focus();
    }
  };

  this.handleStartDayClick = function () {
    _this3.from = undefined;
  };

  this.isYearAutoFixed = function (selector, startDate) {
    var inputValue = document.querySelector(selector).value;
    var year = startDate.year();
    var epoch = moment.unix(0).year();
    return year < epoch || !inputValue.includes(year);
  };

  this.handleStartDateChange = function (date) {
    var startDate = date;
    var from = moment.utc(startDate);
    if (!from.isValid()) return;
    var startDateId = _this3.state.startDateId;

    if (_this3.isYearAutoFixed('.absolute-start-date #' + startDateId, from)) return;

    var endDate = _this3.state.endDate;

    var absoluteRange = {
      startDate: startDate,
      showOverlay: Overlays.START
    };
    var state = void 0;
    if (!endDate) {
      state = {
        startDate: startDate,
        absoluteRange: absoluteRange
      };
    } else {
      var to = moment.utc(endDate);
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
    var to = moment.utc(endDate);
    if (!to.isValid()) return;
    var endDateId = _this3.state.endDateId;

    if (_this3.isYearAutoFixed('.absolute-end-date #' + endDateId, to)) return;

    var startDate = _this3.state.startDate;

    var absoluteRange = {
      endDate: endDate,
      showOverlay: Overlays.END
    };

    var state = void 0;
    if (!startDate) {
      state = {
        endDate: endDate,
        absoluteRange: absoluteRange
      };
    } else {
      var from = moment.utc(startDate);
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
export { AbsoluteDateRange as default };


AbsoluteDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsInV1aWR2NCIsIkRhdGVJbnB1dCIsIkNvbnRlbnQiLCJEYXRlU2VjdGlvbiIsIkh5cGhlbiIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyIsIk92ZXJsYXlzIiwidHJhbnNsYXRlIiwiQWJzb2x1dGVSYW5nZVNlY3Rpb24iLCJkaXYiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInV0Y1N0YXJ0RGF0ZSIsImlzVmFsaWQiLCJ1dGMiLCJzdGFydE9mIiwidG9JU09TdHJpbmciLCJ1dGNFbmREYXRlIiwiaXNCZWZvcmUiLCJkaXNhYmxlZFN0YXJ0RGF5cyIsImFmdGVyIiwiRGF0ZSIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsInN0YXRlIiwic3RhcnREYXRlSWQiLCJlbmREYXRlSWQiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJyZWdpb24iLCJkYXRlRm9ybWF0IiwibnVtYmVyT2ZNb250aHMiLCJzaG93T3ZlcmxheSIsInNob3dXZWVrTnVtYmVycyIsInRyYW5zbGF0aW9ucyIsImZyb20iLCJ0byIsIm1vZGlmaWVycyIsInN0YXJ0IiwiZW5kIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwiaWQiLCJlbCIsIlNUQVJUIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsIkVORCIsIlB1cmVDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsImZvY3VzIiwiaGFuZGxlU3RhcnREYXlDbGljayIsInVuZGVmaW5lZCIsImlzWWVhckF1dG9GaXhlZCIsInNlbGVjdG9yIiwiaW5wdXRWYWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwieWVhciIsImVwb2NoIiwidW5peCIsImluY2x1ZGVzIiwiZGF0ZSIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlRW5kRGF5Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFNBQW5COztBQUVBLFNBQVNDLFNBQVQsUUFBMEIsNEJBQTFCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixrQ0FBeEI7O0FBRUEsT0FBT0MsV0FBUCxNQUF3Qiw0QkFBeEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLHFCQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsWUFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLDhCQUF0Qjs7QUFFQSxJQUFNQyx1QkFBdUJWLE9BQU9XLEdBQTlCLGlCQUFOOztJQVlxQkMsaUI7OztBQUNuQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQTs7QUFBQSxzQkFFYyxNQUFLQSxLQUZuQjtBQUFBLFFBRVRDLFNBRlMsZUFFVEEsU0FGUztBQUFBLFFBRUVDLE9BRkYsZUFFRUEsT0FGRjs7QUFHakIsUUFBTUMsZUFBZWpCLE9BQU9lLFNBQVAsRUFBa0JHLE9BQWxCLEtBQThCbEIsT0FBT21CLEdBQVAsQ0FBV0osU0FBWCxFQUFzQkssT0FBdEIsQ0FBOEIsS0FBOUIsRUFBcUNDLFdBQXJDLEVBQTlCLEdBQW1GTixTQUF4RztBQUNBLFFBQUlPLGFBQWF0QixPQUFPZ0IsT0FBUCxFQUFnQkUsT0FBaEIsS0FBNEJsQixPQUFPbUIsR0FBUCxDQUFXSCxPQUFYLEVBQW9CSSxPQUFwQixDQUE0QixLQUE1QixFQUFtQ0Ms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Q0FBSixFQUF1QjtBQUNyQnhCLGtCQUFVRCxTQUFWO0FBQ0EwQixhQUFLRCxJQUFMO0FBQ0Q7QUFDRFgsY0FBUTtBQUNOZCxtQkFBV3lCLEtBQUtwQixPQUFMLENBQWEsS0FBYixFQUFvQkMsV0FBcEIsRUFETDtBQUVOTCxpQkFBU3lCLEdBQUc0QixLQUFILENBQVMsS0FBVCxFQUFnQmhELFdBQWhCLEVBRkg7QUFHTndDLGVBQVVyQixLQUFLOEIsTUFBTCxDQUFZLE9BQUt4RCxLQUFMLENBQVdxQixVQUF2QixDQUFWLFdBQWtETSxHQUFHNkIsTUFBSCxDQUFVLE9BQUt4RCxLQUFMLENBQVdxQixVQUFyQixDQUg1QztBQUlOZ0Msb0NBQ0tBLGFBREw7QUFFRW5ELDBCQUZGO0FBR0VEO0FBSEY7QUFKTSxPQUFSO0FBVUQ7QUFDRCxRQUFNUyxvQkFBb0IsRUFBRUMsT0FBTyxJQUFJQyxJQUFKLENBQVNWLE9BQVQsQ0FBVCxFQUExQjtBQUNBLFdBQUt1RCxRQUFMLENBQWMsRUFBRXZELGdCQUFGLEVBQVdRLG9DQUFYLEVBQWQ7QUFDQSxXQUFLVixLQUFMLENBQVcwRCxRQUFYLENBQW9CM0MsS0FBcEI7QUFDRCxHOztTQTlIa0JoQixpQjs7O0FBZ05yQkEsa0JBQWtCTCxZQUFsQixHQUFpQ0EsWUFBakMiLCJmaWxlIjoiYWJzb2x1dGUtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kYXRldGltZSc7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBPdmVybGF5cyBmcm9tICcuL292ZXJsYXlzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IEFic29sdXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAwIDAgMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic29sdXRlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHV0Y1N0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoc3RhcnREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogc3RhcnREYXRlO1xuICAgIGxldCB1dGNFbmREYXRlID0gbW9tZW50KGVuZERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoZW5kRGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IGVuZERhdGU7XG4gICAgdXRjRW5kRGF0ZSA9IG1vbWVudCh1dGNTdGFydERhdGUpLmlzVmFsaWQoKSAmJiBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpICYmXG4gICAgICBtb21lbnQodXRjRW5kRGF0ZSkuaXNCZWZvcmUobW9tZW50KHV0Y1N0YXJ0RGF0ZSkpID9cbiAgICAgIHV0Y1N0YXJ0RGF0ZSA6XG4gICAgICB1dGNFbmREYXRlO1xuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0gbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSA/IHsgYWZ0ZXI6IG5ldyBEYXRlKHV0Y0VuZERhdGUpIH0gOiBudWxsO1xuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IG1vbWVudCh1dGNTdGFydERhdGUpLmlzVmFsaWQoKSA/XG4gICAgICB7IGJlZm9yZTogbmV3IERhdGUodXRjU3RhcnREYXRlKSB9IDogbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiB1dGNTdGFydERhdGUsXG4gICAgICBzdGFydERhdGVJZDogYHN0YXJ0LWRhdGUtJHt1dWlkdjQoKX1gLFxuICAgICAgZW5kRGF0ZTogdXRjRW5kRGF0ZSxcbiAgICAgIGVuZERhdGVJZDogYGVuZC1kYXRlLSR7dXVpZHY0KCl9YCxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLmZyb20gJiYgc2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLlNUQVJUKSB7XG4gICAgICB0aGlzLmZyb20uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG8gJiYgc2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLkVORCkge1xuICAgICAgdGhpcy50by5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5mcm9tID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaXNZZWFyQXV0b0ZpeGVkID0gKHNlbGVjdG9yLCBzdGFydERhdGUpID0+IHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikudmFsdWU7XG4gICAgY29uc3QgeWVhciA9IHN0YXJ0RGF0ZS55ZWFyKCk7XG4gICAgY29uc3QgZXBvY2ggPSBtb21lbnQudW5peCgwKS55ZWFyKCk7XG4gICAgcmV0dXJuIHllYXIgPCBlcG9jaCB8fCAhaW5wdXRWYWx1ZS5pbmNsdWRlcyh5ZWFyKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgbGV0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFmcm9tLmlzVmFsaWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlSWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRoaXMuaXNZZWFyQXV0b0ZpeGVkKGAuYWJzb2x1dGUtc3RhcnQtZGF0ZSAjJHtzdGFydERhdGVJZH1gLCBmcm9tKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICBzdGFydERhdGUsXG4gICAgICBzaG93T3ZlcmxheTogT3ZlcmxheXMuU1RBUlQsXG4gICAgfTtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKCFlbmREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgaWYgKGZyb20uaXNBZnRlcih0bykpIHtcbiAgICAgICAgc3RhcnREYXRlID0gZW5kRGF0ZTtcbiAgICAgICAgZnJvbSA9IHRvO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLmFic29sdXRlUmFuZ2UsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSB7IGJlZm9yZTogbmV3IERhdGUoc3RhcnREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGRpc2FibGVkRW5kRGF5cyB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMudG8gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBsZXQgZW5kRGF0ZSA9IGRhdGU7XG4gICAgbGV0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICBpZiAoIXRvLmlzVmFsaWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgZW5kRGF0ZUlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0aGlzLmlzWWVhckF1dG9GaXhlZChgLmFic29sdXRlLWVuZC1kYXRlICMke2VuZERhdGVJZH1gLCB0bykpIHJldHVybjtcblxuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLkVORCxcbiAgICB9O1xuXG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgYWJzb2x1dGVSYW5nZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBpZiAodG8uaXNCZWZvcmUoZnJvbSkpIHtcbiAgICAgICAgZW5kRGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgdG8gPSBmcm9tO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX1gLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0geyBhZnRlcjogbmV3IERhdGUoZW5kRGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSwgZGlzYWJsZWRTdGFydERheXMgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgcmVnaW9uLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIG51bWJlck9mTW9udGhzLFxuICAgICAgc2hvd092ZXJsYXksXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgICAgZGlzYWJsZWRTdGFydERheXMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBzdGFydERhdGVJZCxcbiAgICAgIGVuZERhdGUsXG4gICAgICBlbmREYXRlSWQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZnJvbSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgICBjb25zdCBtb2RpZmllcnMgPSB7IHN0YXJ0OiBmcm9tLCBlbmQ6IHRvIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwiYWJzb2x1dGVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzdGFydC1kYXRlYH1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBpZDogc3RhcnREYXRlSWQgfX1cbiAgICAgICAgICAgICAgaW5wdXRSZWY9e2VsID0+ICh0aGlzLmZyb20gPSBlbCl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XG4gICAgICAgICAgICAgIHNob3dPdmVybGF5PXtzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuU1RBUlR9XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICB0b01vbnRoPXt0b31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZW5kLWRhdGVgfVxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgaWQ6IGVuZERhdGVJZCB9fVxuICAgICAgICAgICAgICBpbnB1dFJlZj17ZWwgPT4gKHRoaXMudG8gPSBlbCl9XG4gICAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XG4gICAgICAgICAgICAgIHNob3dPdmVybGF5PXtzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuRU5EfVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvQWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5BYnNvbHV0ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkFic29sdXRlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==