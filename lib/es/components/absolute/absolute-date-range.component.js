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
var AbsoluteRangeSection = styled.div(_templateObject());

var AbsoluteDateRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(AbsoluteDateRange, _React$PureComponent);

  function AbsoluteDateRange(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var showOverlay = _this.props.showOverlay;

      if (_this.from && showOverlay === Overlays.START) {
        _this.from.focus();
      } else if (_this.to && showOverlay === Overlays.END) {
        _this.to.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDayClick", function () {
      _this.from = undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "isYearAutoFixed", function (selector, startDate) {
      var inputValue = document.querySelector(selector).value;
      var year = startDate.year();
      var epoch = moment.unix(0).year();
      return year < epoch || !inputValue.includes(year);
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (date) {
      var _this$props = _this.props,
          dateFormat = _this$props.dateFormat,
          onChange = _this$props.onChange;
      var startDate = date;
      var from = moment.utc(startDate);
      if (!from.isValid()) return;
      var startDateId = _this.state.startDateId;
      if (_this.isYearAutoFixed(".absolute-start-date #" + startDateId, from)) return;
      var endDate = _this.state.endDate;
      var absoluteRange = {
        startDate: startDate,
        showOverlay: Overlays.START
      };
      var state;

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
      var utcDate = moment.utc(inputDate, dateFormat, true);

      if (utcDate.isValid()) {
        handleChange(utcDate.toISOString());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function (e, currentValue, handleChange) {
      if (!e) return;
      var dateFormat = _this.props.dateFormat;
      var value = e.target.value;
      var utcDate = value ? moment.utc(value, dateFormat).toISOString() : value;
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
      var to = moment.utc(endDate);
      if (!to.isValid()) return;
      var endDateId = _this.state.endDateId;
      if (_this.isYearAutoFixed(".absolute-end-date #" + endDateId, to)) return;
      var startDate = _this.state.startDate;
      var absoluteRange = {
        endDate: endDate,
        showOverlay: Overlays.END
      };
      var state;

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

    var utcStartDate = moment(_startDate).isValid() ? moment.utc(_startDate).startOf('day').toISOString() : _startDate;
    var utcEndDate = moment(_endDate).isValid() ? moment.utc(_endDate).startOf('day').toISOString() : _endDate;
    utcEndDate = moment(utcStartDate).isValid() && moment(utcEndDate).isValid() && moment(utcEndDate).isBefore(moment(utcStartDate)) ? utcStartDate : utcEndDate;

    var _disabledStartDays = moment(utcEndDate).isValid() ? {
      after: new Date(utcEndDate)
    } : null;

    var _disabledEndDays = moment(utcStartDate).isValid() ? {
      before: new Date(utcStartDate)
    } : null;
    /* eslint-enable max-len */


    _this.state = {
      startDate: utcStartDate,
      startDateId: "start-date-" + uuidv4(),
      endDate: utcEndDate,
      endDateId: "end-date-" + uuidv4(),
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
    return React.createElement(AbsoluteRangeSection, null, React.createElement(DateSection, null, React.createElement(Content.InputColumn, {
      className: "absolute-start-date",
      id: "absoluteStartDate",
      label: translate(translations, 'startDate')
    }, React.createElement(DateInput, {
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
      showOverlay: showOverlay === Overlays.START,
      showWeekNumbers: showWeekNumbers,
      toMonth: to,
      value: startDate
    }))), React.createElement(Hyphen, null), React.createElement(DateSection, null, React.createElement(Content.InputColumn, {
      className: "absolute-end-date",
      id: "absoluteEndDate",
      label: translate(translations, 'endDate')
    }, React.createElement(DateInput, {
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
      showOverlay: showOverlay === Overlays.END,
      showWeekNumbers: showWeekNumbers,
      value: endDate
    }))));
  };

  return AbsoluteDateRange;
}(React.PureComponent);

export { AbsoluteDateRange as default };
AbsoluteDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsInV1aWR2NCIsIkRhdGVJbnB1dCIsIkNvbnRlbnQiLCJEYXRlU2VjdGlvbiIsIkh5cGhlbiIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyIsIk92ZXJsYXlzIiwidHJhbnNsYXRlIiwiQWJzb2x1dGVSYW5nZVNlY3Rpb24iLCJkaXYiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic2hvd092ZXJsYXkiLCJmcm9tIiwiU1RBUlQiLCJmb2N1cyIsInRvIiwiRU5EIiwidW5kZWZpbmVkIiwic2VsZWN0b3IiLCJzdGFydERhdGUiLCJpbnB1dFZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJ5ZWFyIiwiZXBvY2giLCJ1bml4IiwiaW5jbHVkZXMiLCJkYXRlIiwiZGF0ZUZvcm1hdCIsIm9uQ2hhbmdlIiwidXRjIiwiaXNWYWxpZCIsInN0YXJ0RGF0ZUlkIiwic3RhdGUiLCJpc1llYXJBdXRvRml4ZWQiLCJlbmREYXRlIiwiYWJzb2x1dGVSYW5nZSIsImlzQWZ0ZXIiLCJlbmRPZiIsInRvSVNPU3RyaW5nIiwiZm9ybWF0IiwiZGlzYWJsZWRFbmREYXlzIiwiYmVmb3JlIiwiRGF0ZSIsInNldFN0YXRlIiwiaW5wdXREYXRlIiwiaGFuZGxlQ2hhbmdlIiwidXRjRGF0ZSIsImUiLCJjdXJyZW50VmFsdWUiLCJ0YXJnZXQiLCJlbmREYXRlSWQiLCJpc0JlZm9yZSIsInN0YXJ0T2YiLCJkaXNhYmxlZFN0YXJ0RGF5cyIsImFmdGVyIiwidXRjU3RhcnREYXRlIiwidXRjRW5kRGF0ZSIsInJlbmRlciIsImNsYXNzTmFtZSIsInJlZ2lvbiIsIm51bWJlck9mTW9udGhzIiwic2hvd1dlZWtOdW1iZXJzIiwidHJhbnNsYXRpb25zIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsIm1vZGlmaWVycyIsInN0YXJ0IiwiZW5kIiwiaWQiLCJoYW5kbGVJbnB1dENoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUlucHV0Qmx1ciIsImVsIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFNBQW5CO0FBRUEsU0FBU0MsU0FBVCxRQUEwQiw0QkFBMUI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGtDQUF4QjtBQUVBLE9BQU9DLFdBQVAsTUFBd0IsNEJBQXhCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixxQkFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGNBQXRCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixpQkFBekI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFlBQXJCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQiw4QkFBdEI7QUFFQSxJQUFNQyxvQkFBb0IsR0FBR1YsTUFBTSxDQUFDVyxHQUFWLG1CQUExQjs7SUFZcUJDLGlCOzs7OztBQUNuQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsd0VBb0JDLFlBQU07QUFBQSxVQUNoQkMsV0FEZ0IsR0FDQSxNQUFLRCxLQURMLENBQ2hCQyxXQURnQjs7QUFFeEIsVUFBSSxNQUFLQyxJQUFMLElBQWFELFdBQVcsS0FBS04sUUFBUSxDQUFDUSxLQUExQyxFQUFpRDtBQUMvQyxjQUFLRCxJQUFMLENBQVVFLEtBQVY7QUFDRCxPQUZELE1BRU8sSUFBSSxNQUFLQyxFQUFMLElBQVdKLFdBQVcsS0FBS04sUUFBUSxDQUFDVyxHQUF4QyxFQUE2QztBQUNsRCxjQUFLRCxFQUFMLENBQVFELEtBQVI7QUFDRDtBQUNGLEtB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LFFBQUFBLFFBQVEsRUFBRSxrQkFBQ2dCLFNBQUQ7QUFBQSxpQkFBZSxNQUFJLENBQUN5QixpQkFBTCxDQUF1QnpCLFNBQXZCLEVBQWtDbUIsbUJBQWxDLENBQWY7QUFBQSxTQUZBO0FBR1ZPLFFBQUFBLE1BQU0sRUFBRSxnQkFBQ3ZCLENBQUQ7QUFBQSxpQkFBTyxNQUFJLENBQUN3QixlQUFMLENBQXFCeEIsQ0FBckIsRUFBd0JiLE9BQXhCLEVBQWlDNkIsbUJBQWpDLENBQVA7QUFBQTtBQUhFLE9BVmQ7QUFlRSxNQUFBLFFBQVEsRUFBRSxrQkFBQ1MsRUFBRDtBQUFBLGVBQVMsTUFBSSxDQUFDM0QsRUFBTCxHQUFVMkQsRUFBbkI7QUFBQSxPQWZaO0FBZ0JFLE1BQUEsWUFBWSxFQUFFLENBQUM5RCxJQUFELEVBQU87QUFBRUEsUUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFHLFFBQUFBLEVBQUUsRUFBRkE7QUFBUixPQUFQLENBaEJoQjtBQWlCRSxNQUFBLGNBQWMsRUFBRSxLQWpCbEI7QUFrQkUsTUFBQSxXQUFXLEVBQUVKLFdBQVcsS0FBS04sUUFBUSxDQUFDVyxHQWxCeEM7QUFtQkUsTUFBQSxlQUFlLEVBQUUrQyxlQW5CbkI7QUFvQkUsTUFBQSxLQUFLLEVBQUUzQjtBQXBCVCxNQUxGLENBREYsQ0EvQkYsQ0FERjtBQWdFRCxHOzs7RUF6TzRDekMsS0FBSyxDQUFDZ0YsYTs7U0FBaENsRSxpQjtBQThPckJBLGlCQUFpQixDQUFDTCxZQUFsQixHQUFpQ0EsWUFBakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kYXRldGltZSc7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBPdmVybGF5cyBmcm9tICcuL292ZXJsYXlzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IEFic29sdXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAwIDAgMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic29sdXRlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBjb25zdCB1dGNTdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKHN0YXJ0RGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IHN0YXJ0RGF0ZTtcbiAgICBsZXQgdXRjRW5kRGF0ZSA9IG1vbWVudChlbmREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKGVuZERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBlbmREYXRlO1xuICAgIHV0Y0VuZERhdGUgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSAmJiBtb21lbnQodXRjRW5kRGF0ZSkuaXNCZWZvcmUobW9tZW50KHV0Y1N0YXJ0RGF0ZSkpID8gdXRjU3RhcnREYXRlIDogdXRjRW5kRGF0ZTtcbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgPyB7IGFmdGVyOiBuZXcgRGF0ZSh1dGNFbmREYXRlKSB9IDogbnVsbDtcbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgPyB7IGJlZm9yZTogbmV3IERhdGUodXRjU3RhcnREYXRlKSB9IDogbnVsbDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiB1dGNTdGFydERhdGUsXG4gICAgICBzdGFydERhdGVJZDogYHN0YXJ0LWRhdGUtJHt1dWlkdjQoKX1gLFxuICAgICAgZW5kRGF0ZTogdXRjRW5kRGF0ZSxcbiAgICAgIGVuZERhdGVJZDogYGVuZC1kYXRlLSR7dXVpZHY0KCl9YCxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLmZyb20gJiYgc2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLlNUQVJUKSB7XG4gICAgICB0aGlzLmZyb20uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG8gJiYgc2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLkVORCkge1xuICAgICAgdGhpcy50by5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5mcm9tID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaXNZZWFyQXV0b0ZpeGVkID0gKHNlbGVjdG9yLCBzdGFydERhdGUpID0+IHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikudmFsdWU7XG4gICAgY29uc3QgeWVhciA9IHN0YXJ0RGF0ZS55ZWFyKCk7XG4gICAgY29uc3QgZXBvY2ggPSBtb21lbnQudW5peCgwKS55ZWFyKCk7XG4gICAgcmV0dXJuIHllYXIgPCBlcG9jaCB8fCAhaW5wdXRWYWx1ZS5pbmNsdWRlcyh5ZWFyKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc3RhcnREYXRlID0gZGF0ZTtcbiAgICBsZXQgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICBpZiAoIWZyb20uaXNWYWxpZCgpKSByZXR1cm47XG4gICAgY29uc3QgeyBzdGFydERhdGVJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGhpcy5pc1llYXJBdXRvRml4ZWQoYC5hYnNvbHV0ZS1zdGFydC1kYXRlICMke3N0YXJ0RGF0ZUlkfWAsIGZyb20pKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5TVEFSVCxcbiAgICB9O1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIWVuZERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc0FmdGVyKHRvKSkge1xuICAgICAgICBzdGFydERhdGUgPSBlbmREYXRlO1xuICAgICAgICBmcm9tID0gdG87XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0geyBiZWZvcmU6IG5ldyBEYXRlKHN0YXJ0RGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlLCBkaXNhYmxlZEVuZERheXMgfSk7XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoaW5wdXREYXRlLCBoYW5kbGVDaGFuZ2UpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXRjRGF0ZSA9IG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0LCB0cnVlKTtcbiAgICBpZiAodXRjRGF0ZS5pc1ZhbGlkKCkpIHtcbiAgICAgIGhhbmRsZUNoYW5nZSh1dGNEYXRlLnRvSVNPU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0Qmx1ciA9IChlLCBjdXJyZW50VmFsdWUsIGhhbmRsZUNoYW5nZSkgPT4ge1xuICAgIGlmICghZSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCB1dGNEYXRlID0gdmFsdWUgPyBtb21lbnQudXRjKHZhbHVlLCBkYXRlRm9ybWF0KS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgaWYgKHV0Y0RhdGUgIT09IGN1cnJlbnRWYWx1ZSkgaGFuZGxlQ2hhbmdlKHV0Y0RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy50byA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGVuZERhdGUgPSBkYXRlO1xuICAgIGxldCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgaWYgKCF0by5pc1ZhbGlkKCkpIHJldHVybjtcbiAgICBjb25zdCB7IGVuZERhdGVJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAodGhpcy5pc1llYXJBdXRvRml4ZWQoYC5hYnNvbHV0ZS1lbmQtZGF0ZSAjJHtlbmREYXRlSWR9YCwgdG8pKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5FTkQsXG4gICAgfTtcblxuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIXN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgaWYgKHRvLmlzQmVmb3JlKGZyb20pKSB7XG4gICAgICAgIGVuZERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRvID0gZnJvbTtcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0geyBhZnRlcjogbmV3IERhdGUoZW5kRGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSwgZGlzYWJsZWRTdGFydERheXMgfSk7XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJlZ2lvbixcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBudW1iZXJPZk1vbnRocyxcbiAgICAgIHNob3dPdmVybGF5LFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgc3RhcnREYXRlSWQsXG4gICAgICBlbmREYXRlLFxuICAgICAgZW5kRGF0ZUlkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZUVuZERhdGVDaGFuZ2UsXG4gICAgICBoYW5kbGVTdGFydERhdGVDaGFuZ2UsXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgZnJvbSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgICBjb25zdCBtb2RpZmllcnMgPSB7IHN0YXJ0OiBmcm9tLCBlbmQ6IHRvIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwiYWJzb2x1dGVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzdGFydC1kYXRlYH1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIGlkOiBzdGFydERhdGVJZCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGlucHV0RGF0ZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShpbnB1dERhdGUsIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgICAgb25CbHVyOiAoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dEJsdXIoZSwgc3RhcnREYXRlLCBoYW5kbGVTdGFydERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiAodGhpcy5mcm9tID0gZWwpfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgICBzaG93Q2xlYXJWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dPdmVybGF5PXtzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuU1RBUlR9XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICB0b01vbnRoPXt0b31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZW5kLWRhdGVgfVxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBpZDogZW5kRGF0ZUlkLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoaW5wdXREYXRlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGlucHV0RGF0ZSwgaGFuZGxlRW5kRGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgICAgb25CbHVyOiAoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dEJsdXIoZSwgZW5kRGF0ZSwgaGFuZGxlRW5kRGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+ICh0aGlzLnRvID0gZWwpfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgICBzaG93Q2xlYXJWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dPdmVybGF5PXtzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuRU5EfVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvQWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5BYnNvbHV0ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkFic29sdXRlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==