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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsInV1aWR2NCIsIkRhdGVJbnB1dCIsIkNvbnRlbnQiLCJ0aGVtZSIsIkRhdGVTZWN0aW9uIiwiSHlwaGVuIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiT3ZlcmxheXMiLCJ0cmFuc2xhdGUiLCJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsImRpdiIsImd1dHRlcldpZHRoIiwiY29sb3JzIiwiZ3JleTEwIiwiQWJzb2x1dGVEYXRlUmFuZ2UiLCJwcm9wcyIsInNob3dPdmVybGF5IiwiZnJvbSIsIlNUQVJUIiwiZm9jdXMiLCJ0byIsIkVORCIsInVuZGVmaW5lZCIsInNlbGVjdG9yIiwic3RhcnREYXRlIiwiaW5wdXRWYWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwieWVhciIsImVwb2NoIiwidW5peCIsImluY2x1ZGVzIiwiZGF0ZSIsImRhdGVGb3JtYXQiLCJvbkNoYW5nZSIsInV0YyIsImlzVmFsaWQiLCJzdGFydERhdGVJZCIsInN0YXRlIiwiaXNZZWFyQXV0b0ZpeGVkIiwiZW5kRGF0ZSIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsImZvcm1hdCIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsIkRhdGUiLCJzZXRTdGF0ZSIsImlucHV0RGF0ZSIsImhhbmRsZUNoYW5nZSIsInV0Y0RhdGUiLCJlIiwiY3VycmVudFZhbHVlIiwidGFyZ2V0IiwiZW5kRGF0ZUlkIiwiaXNCZWZvcmUiLCJzdGFydE9mIiwiZGlzYWJsZWRTdGFydERheXMiLCJhZnRlciIsInV0Y1N0YXJ0RGF0ZSIsInV0Y0VuZERhdGUiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJyZWdpb24iLCJudW1iZXJPZk1vbnRocyIsInNob3dXZWVrTnVtYmVycyIsInRyYW5zbGF0aW9ucyIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJtb2RpZmllcnMiLCJzdGFydCIsImVuZCIsImlkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJvbkJsdXIiLCJoYW5kbGVJbnB1dEJsdXIiLCJlbCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixTQUFuQjtBQUVBLFNBQVNDLFNBQVQsUUFBMEIsNEJBQTFCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsS0FBbEIsUUFBK0Isa0NBQS9CO0FBRUEsT0FBT0MsV0FBUCxNQUF3Qiw0QkFBeEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLHFCQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6QjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsWUFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLDhCQUF0QjtBQUVBLElBQU1DLG9CQUFvQixHQUFHWCxNQUFNLENBQUNZLEdBQVYsb0JBTWJSLEtBQUssQ0FBQ1MsV0FOTyxFQVdSVCxLQUFLLENBQUNTLFdBWEUsRUFnQlhULEtBQUssQ0FBQ1UsTUFBTixDQUFhQyxNQWhCRixFQXNCWFgsS0FBSyxDQUFDVSxNQUFOLENBQWFDLE1BdEJGLENBQTFCOztJQTJCcUJDLGlCOzs7OztBQUNuQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsd0VBb0JDLFlBQU07QUFBQSxVQUNoQkMsV0FEZ0IsR0FDQSxNQUFLRCxLQURMLENBQ2hCQyxXQURnQjs7QUFFeEIsVUFBSSxNQUFLQyxJQUFMLElBQWFELFdBQVcs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OlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHV1aWR2NCBmcm9tICd1dWlkL3Y0JztcblxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZGF0ZXRpbWUnO1xuaW1wb3J0IHsgQ29udGVudCwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBEYXRlU2VjdGlvbiBmcm9tICcuLi9kYXRlLXNlY3Rpb24uY29tcG9uZW50cyc7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IE92ZXJsYXlzIGZyb20gJy4vb3ZlcmxheXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgQWJzb2x1dGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAwIDA7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5vYy1kYXRldGltZS1zdGF0aWMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgfVxuICAub2MtZGF0ZXRpbWUuc3RhcnQtZGF0ZSB7XG4gICAgLkRheVBpY2tlci1EYXktLXNlbGVjdGVkOm5vdCguRGF5UGlja2VyLURheS0tc3RhcnQpOm5vdCguRGF5UGlja2VyLURheS0tb3V0c2lkZSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGJjMjtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5MTB9O1xuICAgIH1cbiAgfVxuICAub2MtZGF0ZXRpbWUuZW5kLWRhdGUge1xuICAgIC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZDpub3QoLkRheVBpY2tlci1EYXktLWVuZCk6bm90KC5EYXlQaWNrZXItRGF5LS1vdXRzaWRlKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkYmMyO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkxMH07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnNvbHV0ZURhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgY29uc3QgdXRjU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhzdGFydERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBzdGFydERhdGU7XG4gICAgbGV0IHV0Y0VuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhlbmREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogZW5kRGF0ZTtcbiAgICB1dGNFbmREYXRlID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzQmVmb3JlKG1vbWVudCh1dGNTdGFydERhdGUpKSA/IHV0Y1N0YXJ0RGF0ZSA6IHV0Y0VuZERhdGU7XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpID8geyBhZnRlcjogbmV3IERhdGUodXRjRW5kRGF0ZSkgfSA6IG51bGw7XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpID8geyBiZWZvcmU6IG5ldyBEYXRlKHV0Y1N0YXJ0RGF0ZSkgfSA6IG51bGw7XG4gICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuICovXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogdXRjU3RhcnREYXRlLFxuICAgICAgc3RhcnREYXRlSWQ6IGBzdGFydC1kYXRlLSR7dXVpZHY0KCl9YCxcbiAgICAgIGVuZERhdGU6IHV0Y0VuZERhdGUsXG4gICAgICBlbmREYXRlSWQ6IGBlbmQtZGF0ZS0ke3V1aWR2NCgpfWAsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5mcm9tICYmIHNob3dPdmVybGF5ID09PSBPdmVybGF5cy5TVEFSVCkge1xuICAgICAgdGhpcy5mcm9tLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvICYmIHNob3dPdmVybGF5ID09PSBPdmVybGF5cy5FTkQpIHtcbiAgICAgIHRoaXMudG8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdGFydERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZnJvbSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlzWWVhckF1dG9GaXhlZCA9IChzZWxlY3Rvciwgc3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnZhbHVlO1xuICAgIGNvbnN0IHllYXIgPSBzdGFydERhdGUueWVhcigpO1xuICAgIGNvbnN0IGVwb2NoID0gbW9tZW50LnVuaXgoMCkueWVhcigpO1xuICAgIHJldHVybiB5ZWFyIDwgZXBvY2ggfHwgIWlucHV0VmFsdWUuaW5jbHVkZXMoeWVhcik7XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgbGV0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFmcm9tLmlzVmFsaWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlSWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRoaXMuaXNZZWFyQXV0b0ZpeGVkKGAuYWJzb2x1dGUtc3RhcnQtZGF0ZSAjJHtzdGFydERhdGVJZH1gLCBmcm9tKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICBzdGFydERhdGUsXG4gICAgICBzaG93T3ZlcmxheTogT3ZlcmxheXMuU1RBUlQsXG4gICAgfTtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKCFlbmREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgaWYgKGZyb20uaXNBZnRlcih0bykpIHtcbiAgICAgICAgc3RhcnREYXRlID0gZW5kRGF0ZTtcbiAgICAgICAgZnJvbSA9IHRvO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IHsgYmVmb3JlOiBuZXcgRGF0ZShzdGFydERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSwgZGlzYWJsZWRFbmREYXlzIH0pO1xuICAgIG9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGlucHV0RGF0ZSwgaGFuZGxlQ2hhbmdlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHV0Y0RhdGUgPSBtb21lbnQudXRjKGlucHV0RGF0ZSwgZGF0ZUZvcm1hdCwgdHJ1ZSk7XG4gICAgaWYgKHV0Y0RhdGUuaXNWYWxpZCgpKSB7XG4gICAgICBoYW5kbGVDaGFuZ2UodXRjRGF0ZS50b0lTT1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dEJsdXIgPSAoZSwgY3VycmVudFZhbHVlLCBoYW5kbGVDaGFuZ2UpID0+IHtcbiAgICBpZiAoIWUpIHJldHVybjtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdXRjRGF0ZSA9IHZhbHVlID8gbW9tZW50LnV0Yyh2YWx1ZSwgZGF0ZUZvcm1hdCkudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgIGlmICh1dGNEYXRlICE9PSBjdXJyZW50VmFsdWUpIGhhbmRsZUNoYW5nZSh1dGNEYXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMudG8gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBlbmREYXRlID0gZGF0ZTtcbiAgICBsZXQgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgIGlmICghdG8uaXNWYWxpZCgpKSByZXR1cm47XG4gICAgY29uc3QgeyBlbmREYXRlSWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHRoaXMuaXNZZWFyQXV0b0ZpeGVkKGAuYWJzb2x1dGUtZW5kLWRhdGUgIyR7ZW5kRGF0ZUlkfWAsIHRvKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBzaG93T3ZlcmxheTogT3ZlcmxheXMuRU5ELFxuICAgIH07XG5cbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKCFzdGFydERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGlmICh0by5pc0JlZm9yZShmcm9tKSkge1xuICAgICAgICBlbmREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0byA9IGZyb207XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLmFic29sdXRlUmFuZ2UsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IHsgYWZ0ZXI6IG5ldyBEYXRlKGVuZERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUsIGRpc2FibGVkU3RhcnREYXlzIH0pO1xuICAgIG9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICByZWdpb24sXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgbnVtYmVyT2ZNb250aHMsXG4gICAgICBzaG93T3ZlcmxheSxcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZUlkLFxuICAgICAgZW5kRGF0ZSxcbiAgICAgIGVuZERhdGVJZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBoYW5kbGVFbmREYXRlQ2hhbmdlLFxuICAgICAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlLFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGZyb20gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICAgIGNvbnN0IHRvID0gbmV3IERhdGUoZW5kRGF0ZSk7XG4gICAgY29uc3QgbW9kaWZpZXJzID0geyBzdGFydDogZnJvbSwgZW5kOiB0byB9O1xuICAgIHJldHVybiAoXG4gICAgICA8QWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cImFic29sdXRlU3RhcnREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnc3RhcnREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gc3RhcnQtZGF0ZWB9XG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRTdGFydERheXN9XG4gICAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxuICAgICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBpZDogc3RhcnREYXRlSWQsXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U6IChpbnB1dERhdGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoaW5wdXREYXRlLCBoYW5kbGVTdGFydERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogKGUpID0+IHRoaXMuaGFuZGxlSW5wdXRCbHVyKGUsIHN0YXJ0RGF0ZSwgaGFuZGxlU3RhcnREYXRlQ2hhbmdlKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4gKHRoaXMuZnJvbSA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd0NsZWFyVmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaG93T3ZlcmxheT17c2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLlNUQVJUfVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgdG9Nb250aD17dG99XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAgIGNhbGVuZGFyVHlwZT1cInN0YXRpY1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlLWVuZC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwiYWJzb2x1dGVFbmREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZW5kRGF0ZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXRlSW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGVuZC1kYXRlYH1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZEVuZERheXN9XG4gICAgICAgICAgICAgIGZyb21Nb250aD17ZnJvbX1cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBtb250aD17ZnJvbX1cbiAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgaWQ6IGVuZERhdGVJZCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGlucHV0RGF0ZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShpbnB1dERhdGUsIGhhbmRsZUVuZERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICAgIG9uQmx1cjogKGUpID0+IHRoaXMuaGFuZGxlSW5wdXRCbHVyKGUsIGVuZERhdGUsIGhhbmRsZUVuZERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiAodGhpcy50byA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd0NsZWFyVmFsdWU9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaG93T3ZlcmxheT17c2hvd092ZXJsYXkgPT09IE92ZXJsYXlzLkVORH1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgICBjYWxlbmRhclR5cGU9XCJzdGF0aWNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICA8L0Fic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQWJzb2x1dGVEYXRlUmFuZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5BYnNvbHV0ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=