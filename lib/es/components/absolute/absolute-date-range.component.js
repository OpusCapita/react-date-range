var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0;\n  align-items: center;\n  .form-group {\n    margin-bottom: 0;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable no-return-assign */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import { DateInput } from '@opuscapita/react-datetime';

import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';

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
    return React.createElement(
      AbsoluteRangeSection,
      null,
      React.createElement(
        DateSection,
        null,
        React.createElement(
          'label',
          { htmlFor: 'startDate' },
          this.props.translations.startDate
        ),
        React.createElement(DateInput, {
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
      React.createElement(Hyphen, null),
      React.createElement(
        DateSection,
        null,
        React.createElement(
          'label',
          { htmlFor: 'endDate' },
          this.props.translations.endDate
        ),
        React.createElement(DateInput, {
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
}(React.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleStartDateChange = function (date) {
    var startDate = date;
    var from = moment.utc(startDate);
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
      var to = moment.utc(endDate);
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
    var to = moment.utc(endDate);
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
      var from = moment.utc(startDate);
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
export { AbsoluteDateRange as default };


AbsoluteDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsIkRhdGVJbnB1dCIsIkRhdGVTZWN0aW9uIiwiSHlwaGVuIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiQWJzb2x1dGVSYW5nZVNlY3Rpb24iLCJkaXYiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInV0Y1N0YXJ0RGF0ZSIsImlzVmFsaWQiLCJ1dGMiLCJzdGFydE9mIiwidG9JU09TdHJpbmciLCJ1dGNFbmREYXRlIiwiaXNCZWZvcmUiLCJkaXNhYmxlZFN0YXJ0RGF5cyIsImFmdGVyIiwiRGF0ZSIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsInN0YXRlIiwicmVuZGVyIiwicmVnaW9uIiwiZGF0ZUZvcm1hdCIsIm51bWJlck9mTW9udGhzIiwic2hvd1dlZWtOdW1iZXJzIiwiZnJvbSIsInRvIiwibW9kaWZpZXJzIiwic3RhcnQiLCJlbmQiLCJ0cmFuc2xhdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGF0ZSIsInBvcG92ZXJQcm9wcyIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJ2YWx1ZSIsImZvcm1hdCIsInNldFN0YXRlIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBLFNBQVNDLFNBQVQsUUFBMEIsNEJBQTFCOztBQUVBLE9BQU9DLFdBQVAsTUFBd0IsNEJBQXhCO0FBQ0EsT0FBT0MsTUFBUCxN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LEVBQXVCO0FBQ3JCbkIsa0JBQVVELFNBQVY7QUFDQXFCLGFBQUtELElBQUw7QUFDRDtBQUNETixjQUFRO0FBQ05kLG1CQUFXb0IsS0FBS2YsT0FBTCxDQUFhLEtBQWIsRUFBb0JDLFdBQXBCLEVBREw7QUFFTkwsaUJBQVNvQixHQUFHYSxLQUFILENBQVMsS0FBVCxFQUFnQjVCLFdBQWhCLEVBRkg7QUFHTjZCLGVBQVVmLEtBQUtnQixNQUFMLENBQVksT0FBS3JDLEtBQUwsQ0FBV2tCLFVBQXZCLENBQVYsV0FBa0RJLEdBQUdlLE1BQUgsQ0FBVSxPQUFLckMsS0FBTCxDQUFXa0IsVUFBckIsQ0FINUM7QUFJTmMsc0JBQWM7QUFDWkMseUJBQWU7QUFDYi9CLDRCQURhO0FBRWJEO0FBRmE7QUFESDtBQUpSLE9BQVI7QUFXRDtBQUNELFFBQU1TLG9CQUFvQixFQUFFQyxPQUFPLElBQUlDLElBQUosQ0FBU1YsT0FBVCxDQUFULEVBQTFCO0FBQ0EsV0FBS29DLFFBQUwsQ0FBYyxFQUFFcEMsZ0JBQUYsRUFBV1Esb0NBQVgsRUFBZDtBQUNBLFdBQUtWLEtBQUwsQ0FBV3VDLFFBQVgsQ0FBb0J4QixLQUFwQjtBQUNELEc7O1NBckdrQmhCLGlCOzs7QUFpS3JCQSxrQkFBa0JILFlBQWxCLEdBQWlDQSxZQUFqQyIsImZpbGUiOiJhYnNvbHV0ZS1kYXRlLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZGF0ZXRpbWUnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcblxuY29uc3QgQWJzb2x1dGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnNvbHV0ZURhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB1dGNTdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKHN0YXJ0RGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IHN0YXJ0RGF0ZTtcbiAgICBsZXQgdXRjRW5kRGF0ZSA9IG1vbWVudChlbmREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKGVuZERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBlbmREYXRlO1xuICAgIHV0Y0VuZERhdGUgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSAmJlxuICAgICAgbW9tZW50KHV0Y0VuZERhdGUpLmlzQmVmb3JlKG1vbWVudCh1dGNTdGFydERhdGUpKSA/XG4gICAgICB1dGNTdGFydERhdGUgOlxuICAgICAgdXRjRW5kRGF0ZTtcbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgPyB7IGFmdGVyOiBuZXcgRGF0ZSh1dGNFbmREYXRlKSB9IDogbnVsbDtcbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgP1xuICAgICAgeyBiZWZvcmU6IG5ldyBEYXRlKHV0Y1N0YXJ0RGF0ZSkgfSA6IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogdXRjU3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZTogdXRjRW5kRGF0ZSxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBzdGFydERhdGUgPSBkYXRlO1xuICAgIGxldCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgIGlmICghZnJvbS5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghZW5kRGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc0FmdGVyKHRvKSkge1xuICAgICAgICBzdGFydERhdGUgPSBlbmREYXRlO1xuICAgICAgICBmcm9tID0gdG87XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX1gLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSB7IGJlZm9yZTogbmV3IERhdGUoc3RhcnREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGRpc2FibGVkRW5kRGF5cyB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBlbmREYXRlID0gZGF0ZTtcbiAgICBsZXQgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgIGlmICghdG8uaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGlmICh0by5pc0JlZm9yZShmcm9tKSkge1xuICAgICAgICBlbmREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0byA9IGZyb207XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0geyBhZnRlcjogbmV3IERhdGUoZW5kRGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSwgZGlzYWJsZWRTdGFydERheXMgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcmVnaW9uLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIG51bWJlck9mTW9udGhzLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmcm9tID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgICBjb25zdCB0byA9IG5ldyBEYXRlKGVuZERhdGUpO1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IHsgc3RhcnQ6IGZyb20sIGVuZDogdG8gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEFic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGFydERhdGVcIj57dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc3RhcnREYXRlfTwvbGFiZWw+XG4gICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRTdGFydERheXN9XG4gICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgdG9Nb250aD17dG99XG4gICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW5kRGF0ZVwiPnt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5lbmREYXRlfTwvbGFiZWw+XG4gICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRFbmREYXlzfVxuICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgIHJlZj17ZWwgPT4gKHRoaXMudG8gPSBlbCl9XG4gICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgPC9BYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbkFic29sdXRlRGF0ZVJhbmdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuQWJzb2x1dGVEYXRlUmFuZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4iXX0=