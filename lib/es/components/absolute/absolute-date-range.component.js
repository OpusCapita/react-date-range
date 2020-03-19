function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n  padding: ", " 0 0 0;\n  .form-group {\n    margin-bottom: 0;\n  }\n  .oc-datetime-static-container {\n    margin-top: ", ";\n  }\n  .oc-datetime.start-date {\n    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--outside) {\n      background-color: #ffdbc2;\n      color: ", ";\n    }\n  }\n  .oc-datetime.end-date {\n    .DayPicker-Day--selected:not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n      background-color: #ffdbc2;\n      color: ", ";\n    }\n  }\n"]);

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
import { Content, theme } from '@opuscapita/oc-cm-common-layouts';
import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';
import Overlays from './overlays';
import translate from '../../translations/translate';
var AbsoluteRangeSection = styled.div(_templateObject(), theme.gutterWidth, theme.gutterWidth, theme.colors.grey10, theme.colors.grey10);

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

    _defineProperty(_assertThisInitialized(_this), "isYearAutoFixed", function (startDate) {
      var year = startDate.year();
      var epoch = moment.unix(0).year();
      return year < epoch;
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (date) {
      var _this$props = _this.props,
          dateFormat = _this$props.dateFormat,
          onChange = _this$props.onChange;
      var startDate = date;
      var from = moment.utc(startDate);
      if (!from.isValid()) return;
      if (_this.isYearAutoFixed(from)) return;
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
      if (_this.isYearAutoFixed(to)) return;
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
      value: startDate,
      calendarType: "static"
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
      value: endDate,
      calendarType: "static"
    }))));
  };

  return AbsoluteDateRange;
}(React.PureComponent);

export { AbsoluteDateRange as default };
AbsoluteDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsInV1aWR2NCIsIkRhdGVJbnB1dCIsIkNvbnRlbnQiLCJ0aGVtZSIsIkRhdGVTZWN0aW9uIiwiSHlwaGVuIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiT3ZlcmxheXMiLCJ0cmFuc2xhdGUiLCJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsImRpdiIsImd1dHRlcldpZHRoIiwiY29sb3JzIiwiZ3JleTEwIiwiQWJzb2x1dGVEYXRlUmFuZ2UiLCJwcm9wcyIsInNob3dPdmVybGF5IiwiZnJvbSIsIlNUQVJUIiwiZm9jdXMiLCJ0byIsIkVORCIsInVuZGVmaW5lZCIsInN0YXJ0RGF0ZSIsInllYXIiLCJlcG9jaCIsInVuaXgiLCJkYXRlIiwiZGF0ZUZvcm1hdCIsIm9uQ2hhbmdlIiwidXRjIiwiaXNWYWxpZCIsImlzWWVhckF1dG9GaXhlZCIsImVuZERhdGUiLCJzdGF0ZSIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsInZhbHVlIiwiZm9ybWF0IiwiZGlzYWJsZWRFbmREYXlzIiwiYmVmb3JlIiwiRGF0ZSIsInNldFN0YXRlIiwiaW5wdXREYXRlIiwiaGFuZGxlQ2hhbmdlIiwidXRjRGF0ZSIsImUiLCJjdXJyZW50VmFsdWUiLCJ0YXJnZXQiLCJpc0JlZm9yZSIsInN0YXJ0T2YiLCJkaXNhYmxlZFN0YXJ0RGF5cyIsImFmdGVyIiwidXRjU3RhcnREYXRlIiwidXRjRW5kRGF0ZSIsInN0YXJ0RGF0ZUlkIiwiZW5kRGF0ZUlkIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwicmVnaW9uIiwibnVtYmVyT2ZNb250aHMiLCJzaG93V2Vla051bWJlcnMiLCJ0cmFuc2xhdGlvbnMiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwibW9kaWZpZXJzIiwic3RhcnQiLCJlbmQiLCJpZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwib25CbHVyIiwiaGFuZGxlSW5wdXRCbHVyIiwiZWwiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsU0FBbkI7QUFFQSxTQUFTQyxTQUFULFFBQTBCLDRCQUExQjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLFFBQStCLGtDQUEvQjtBQUVBLE9BQU9DLFdBQVAsTUFBd0IsNEJBQXhCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixxQkFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGNBQXRCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixpQkFBekI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFlBQXJCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQiw4QkFBdEI7QUFFQSxJQUFNQyxvQkFBb0IsR0FBR1gsTUFBTSxDQUFDWSxHQUFWLG9CQU1iUixLQUFLLENBQUNTLFdBTk8sRUFXUlQsS0FBSyxDQUFDUyxXQVhFLEVBZ0JYVCxLQUFLLENBQUNVLE1BQU4sQ0FBYUMsTUFoQkYsRUFzQlhYLEtBQUssQ0FBQ1UsTUFBTixDQUFhQyxNQXRCRixDQUExQjs7SUEyQnFCQyxpQjs7Ozs7QUFDbkIsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsNENBQU1BLEtBQU47O0FBRGlCLHdFQW9CQyxZQUFNO0FBQUEsVUFDaEJDLFdBRGdCLEdBQ0EsTUFBS0QsS0FETCxDQUNoQkMsV0FEZ0I7O0FBRXhCLFVBQUksTUFBS0MsSUFBTCxJQUFhRCxXQUFXLEtBQUtULFFBQVEsQ0FBQ1csS0FBMUMsRUFBaUQ7QUFDL0MsY0FBS0QsSUFBTCxDQUFVRSxLQUFWO0FBQ0Qs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QUN5QixlQUFMLENBQXFCekIsQ0FBckIsRUFBd0JmLE9BQXhCLEVBQWlDZ0MsbUJBQWpDLENBQVA7QUFBQTtBQUhFLE9BVmQ7QUFlRSxNQUFBLFFBQVEsRUFBRSxrQkFBQ1MsRUFBRDtBQUFBLGVBQVMsTUFBSSxDQUFDdEQsRUFBTCxHQUFVc0QsRUFBbkI7QUFBQSxPQWZaO0FBZ0JFLE1BQUEsWUFBWSxFQUFFLENBQUN6RCxJQUFELEVBQU87QUFBRUEsUUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFHLFFBQUFBLEVBQUUsRUFBRkE7QUFBUixPQUFQLENBaEJoQjtBQWlCRSxNQUFBLGNBQWMsRUFBRSxLQWpCbEI7QUFrQkUsTUFBQSxXQUFXLEVBQUVKLFdBQVcsS0FBS1QsUUFBUSxDQUFDYyxHQWxCeEM7QUFtQkUsTUFBQSxlQUFlLEVBQUUwQyxlQW5CbkI7QUFvQkUsTUFBQSxLQUFLLEVBQUU5QixPQXBCVDtBQXFCRSxNQUFBLFlBQVksRUFBQztBQXJCZixNQUxGLENBREYsQ0FoQ0YsQ0FERjtBQWtFRCxHOzs7RUF4TzRDckMsS0FBSyxDQUFDK0UsYTs7U0FBaEM3RCxpQjtBQTZPckJBLGlCQUFpQixDQUFDUixZQUFsQixHQUFpQ0EsWUFBakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdXVpZHY0IGZyb20gJ3V1aWQvdjQnO1xuXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kYXRldGltZSc7XG5pbXBvcnQgeyBDb250ZW50LCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgT3ZlcmxheXMgZnJvbSAnLi9vdmVybGF5cyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBBYnNvbHV0ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLm9jLWRhdGV0aW1lLXN0YXRpYy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICB9XG4gIC5vYy1kYXRldGltZS5zdGFydC1kYXRlIHtcbiAgICAuRGF5UGlja2VyLURheS0tc2VsZWN0ZWQ6bm90KC5EYXlQaWNrZXItRGF5LS1zdGFydCk6bm90KC5EYXlQaWNrZXItRGF5LS1vdXRzaWRlKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkYmMyO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkxMH07XG4gICAgfVxuICB9XG4gIC5vYy1kYXRldGltZS5lbmQtZGF0ZSB7XG4gICAgLkRheVBpY2tlci1EYXktLXNlbGVjdGVkOm5vdCguRGF5UGlja2VyLURheS0tZW5kKTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRiYzI7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTEwfTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic29sdXRlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBjb25zdCB1dGNTdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKHN0YXJ0RGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IHN0YXJ0RGF0ZTtcbiAgICBsZXQgdXRjRW5kRGF0ZSA9IG1vbWVudChlbmREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKGVuZERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBlbmREYXRlO1xuICAgIHV0Y0VuZERhdGUgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSAmJiBtb21lbnQodXRjRW5kRGF0ZSkuaXNCZWZvcmUobW9tZW50KHV0Y1N0YXJ0RGF0ZSkpID8gdXRjU3RhcnREYXRlIDogdXRjRW5kRGF0ZTtcbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgPyB7IGFmdGVyOiBuZXcgRGF0ZSh1dGNFbmREYXRlKSB9IDogbnVsbDtcbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgPyB7IGJlZm9yZTogbmV3IERhdGUodXRjU3RhcnREYXRlKSB9IDogbnVsbDtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiB1dGNTdGFydERhdGUsXG4gICAgICBzdGFydERhdGVJZDogYHN0YXJ0LWRhdGUtJHt1dWlkdjQoKX1gLFxuICAgICAgZW5kRGF0ZTogdXRjRW5kRGF0ZSxcbiAgICAgIGVuZERhdGVJZDogYGVuZC1kYXRlLSR7dXVpZHY0KCl9YCxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLmZyb20gJiYgc2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLlNUQVJUKSB7XG4gICAgICB0aGlzLmZyb20uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG8gJiYgc2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLkVORCkge1xuICAgICAgdGhpcy50by5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5mcm9tID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaXNZZWFyQXV0b0ZpeGVkID0gKHN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IHllYXIgPSBzdGFydERhdGUueWVhcigpO1xuICAgIGNvbnN0IGVwb2NoID0gbW9tZW50LnVuaXgoMCkueWVhcigpO1xuICAgIHJldHVybiB5ZWFyIDwgZXBvY2g7XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgbGV0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFmcm9tLmlzVmFsaWQoKSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmlzWWVhckF1dG9GaXhlZChmcm9tKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICBzdGFydERhdGUsXG4gICAgICBzaG93T3ZlcmxheTogT3ZlcmxheXMuU1RBUlQsXG4gICAgfTtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKCFlbmREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgaWYgKGZyb20uaXNBZnRlcih0bykpIHtcbiAgICAgICAgc3RhcnREYXRlID0gZW5kRGF0ZTtcbiAgICAgICAgZnJvbSA9IHRvO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IHsgYmVmb3JlOiBuZXcgRGF0ZShzdGFydERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSwgZGlzYWJsZWRFbmREYXlzIH0pO1xuICAgIG9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGlucHV0RGF0ZSwgaGFuZGxlQ2hhbmdlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHV0Y0RhdGUgPSBtb21lbnQudXRjKGlucHV0RGF0ZSwgZGF0ZUZvcm1hdCwgdHJ1ZSk7XG4gICAgaWYgKHV0Y0RhdGUuaXNWYWxpZCgpKSB7XG4gICAgICBoYW5kbGVDaGFuZ2UodXRjRGF0ZS50b0lTT1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dEJsdXIgPSAoZSwgY3VycmVudFZhbHVlLCBoYW5kbGVDaGFuZ2UpID0+IHtcbiAgICBpZiAoIWUpIHJldHVybjtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdXRjRGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgZGF0ZUZvcm1hdCkudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgIGlmICh1dGNEYXRlICE9PSBjdXJyZW50VmFsdWUpIGhhbmRsZUNoYW5nZSh1dGNEYXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMudG8gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBlbmREYXRlID0gZGF0ZTtcbiAgICBsZXQgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgIGlmICghdG8uaXNWYWxpZCgpKSByZXR1cm47XG4gICAgaWYgKHRoaXMuaXNZZWFyQXV0b0ZpeGVkKHRvKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBzaG93T3ZlcmxheTogT3ZlcmxheXMuRU5ELFxuICAgIH07XG5cbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKCFzdGFydERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGlmICh0by5pc0JlZm9yZShmcm9tKSkge1xuICAgICAgICBlbmREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0byA9IGZyb207XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLmFic29sdXRlUmFuZ2UsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IHsgYWZ0ZXI6IG5ldyBEYXRlKGVuZERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUsIGRpc2FibGVkU3RhcnREYXlzIH0pO1xuICAgIG9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICByZWdpb24sXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgbnVtYmVyT2ZNb250aHMsXG4gICAgICBzaG93T3ZlcmxheSxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZUlkLFxuICAgICAgZW5kRGF0ZSxcbiAgICAgIGVuZERhdGVJZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBoYW5kbGVFbmREYXRlQ2hhbmdlLFxuICAgICAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlLFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGZyb20gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICAgIGNvbnN0IHRvID0gbmV3IERhdGUoZW5kRGF0ZSk7XG4gICAgY29uc3QgbW9kaWZpZXJzID0geyBzdGFydDogZnJvbSwgZW5kOiB0byB9O1xuICAgIHJldHVybiAoXG4gICAgICA8QWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cImFic29sdXRlU3RhcnREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnc3RhcnREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gc3RhcnQtZGF0ZWB9XG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRTdGFydERheXN9XG4gICAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxuICAgICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBpZDogc3RhcnREYXRlSWQsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IChpbnB1dERhdGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXREYXRlLCBoYW5kbGVTdGFydERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogKGUpID0+IHRoaXMuaGFuZGxlSW5wdXRCbHVyKGUsIHN0YXJ0RGF0ZSwgaGFuZGxlU3RhcnREYXRlQ2hhbmdlKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4gKHRoaXMuZnJvbSA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd0NsZWFyVmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaG93T3ZlcmxheT17c2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLlNUQVJUfVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgdG9Nb250aD17dG99XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAgIGNhbGVuZGFyVHlwZT1cInN0YXRpY1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlLWVuZC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwiYWJzb2x1dGVFbmREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZW5kRGF0ZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGVuZC1kYXRlYH1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZEVuZERheXN9XG4gICAgICAgICAgICAgIGZyb21Nb250aD17ZnJvbX1cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBtb250aD17ZnJvbX1cbiAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgaWQ6IGVuZERhdGVJZCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGlucHV0RGF0ZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShpbnB1dERhdGUsIGhhbmRsZUVuZERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogKGUpID0+IHRoaXMuaGFuZGxlSW5wdXRCbHVyKGUsIGVuZERhdGUsIGhhbmRsZUVuZERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiAodGhpcy50byA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd0NsZWFyVmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaG93T3ZlcmxheT17c2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLkVORH1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgICBjYWxlbmRhclR5cGU9XCJzdGF0aWNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICA8L0Fic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQWJzb2x1dGVEYXRlUmFuZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5BYnNvbHV0ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=