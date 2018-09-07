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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsIkRhdGVJbnB1dCIsIkRhdGVTZWN0aW9uIiwiSHlwaGVuIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiQWJzb2x1dGVSYW5nZVNlY3Rpb24iLCJkaXYiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInV0Y1N0YXJ0RGF0ZSIsImlzVmFsaWQiLCJ1dGMiLCJzdGFydE9mIiwidG9JU09TdHJpbmciLCJ1dGNFbmREYXRlIiwiaXNCZWZvcmUiLCJkaXNhYmxlZFN0YXJ0RGF5cyIsImFmdGVyIiwiRGF0ZSIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsInN0YXRlIiwicmVuZGVyIiwicmVnaW9uIiwiZGF0ZUZvcm1hdCIsIm51bWJlck9mTW9udGhzIiwic2hvd1dlZWtOdW1iZXJzIiwiZnJvbSIsInRvIiwibW9kaWZpZXJzIiwic3RhcnQiLCJlbmQiLCJ0cmFuc2xhdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwiZWwiLCJQdXJlQ29tcG9uZW50IiwiZGF0ZSIsInBvcG92ZXJQcm9wcyIsImFic29sdXRlUmFuZ2UiLCJpc0FmdGVyIiwiZW5kT2YiLCJ2YWx1ZSIsImZvcm1hdCIsInNldFN0YXRlIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBLFNBQVNDLFNBQVQsUUFBMEIsNEJBQTFCOztBQUVBLE9BQU9DLFdBQVAsTUFBd0IsNEJBQXhCO0FBQ0EsT0FBT0MsTUFBUCxN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LEVBQXVCO0FBQ3JCbkIsa0JBQVVELFNBQVY7QUFDQXFCLGFBQUtELElBQUw7QUFDRDtBQUNETixjQUFRO0FBQ05kLG1CQUFXb0IsS0FBS2YsT0FBTCxDQUFhLEtBQWIsRUFBb0JDLFdBQXBCLEVBREw7QUFFTkwsaUJBQVNvQixHQUFHYSxLQUFILENBQVMsS0FBVCxFQUFnQjVCLFdBQWhCLEVBRkg7QUFHTjZCLGVBQVVmLEtBQUtnQixNQUFMLENBQVksT0FBS3JDLEtBQUwsQ0FBV2tCLFVBQXZCLENBQVYsV0FBa0RJLEdBQUdlLE1BQUgsQ0FBVSxPQUFLckMsS0FBTCxDQUFXa0IsVUFBckIsQ0FINUM7QUFJTmMsc0JBQWM7QUFDWkMseUJBQWU7QUFDYi9CLDRCQURhO0FBRWJEO0FBRmE7QUFESDtBQUpSLE9BQVI7QUFXRDtBQUNELFFBQU1TLG9CQUFvQixFQUFFQyxPQUFPLElBQUlDLElBQUosQ0FBU1YsT0FBVCxDQUFULEVBQTFCO0FBQ0EsV0FBS29DLFFBQUwsQ0FBYyxFQUFFcEMsZ0JBQUYsRUFBV1Esb0NBQVgsRUFBZDtBQUNBLFdBQUtWLEtBQUwsQ0FBV3VDLFFBQVgsQ0FBb0J4QixLQUFwQjtBQUNELEc7O1NBckdrQmhCLGlCOzs7QUFpS3JCQSxrQkFBa0JILFlBQWxCLEdBQWlDQSxZQUFqQyIsImZpbGUiOiJhYnNvbHV0ZS1kYXRlLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZGF0ZXRpbWUnO1xyXG5cclxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcclxuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XHJcblxyXG5jb25zdCBBYnNvbHV0ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic29sdXRlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdXRjU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhzdGFydERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBzdGFydERhdGU7XHJcbiAgICBsZXQgdXRjRW5kRGF0ZSA9IG1vbWVudChlbmREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKGVuZERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBlbmREYXRlO1xyXG4gICAgdXRjRW5kRGF0ZSA9IG1vbWVudCh1dGNTdGFydERhdGUpLmlzVmFsaWQoKSAmJiBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpICYmXHJcbiAgICAgIG1vbWVudCh1dGNFbmREYXRlKS5pc0JlZm9yZShtb21lbnQodXRjU3RhcnREYXRlKSkgP1xyXG4gICAgICB1dGNTdGFydERhdGUgOlxyXG4gICAgICB1dGNFbmREYXRlO1xyXG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpID8geyBhZnRlcjogbmV3IERhdGUodXRjRW5kRGF0ZSkgfSA6IG51bGw7XHJcbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgP1xyXG4gICAgICB7IGJlZm9yZTogbmV3IERhdGUodXRjU3RhcnREYXRlKSB9IDogbnVsbDtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0YXJ0RGF0ZTogdXRjU3RhcnREYXRlLFxyXG4gICAgICBlbmREYXRlOiB1dGNFbmREYXRlLFxyXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcclxuICAgICAgZGlzYWJsZWRFbmREYXlzLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XHJcbiAgICBsZXQgc3RhcnREYXRlID0gZGF0ZTtcclxuICAgIGxldCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xyXG4gICAgaWYgKCFmcm9tLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IHN0YXRlO1xyXG4gICAgaWYgKCFlbmREYXRlKSB7XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcclxuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcclxuICAgICAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xyXG4gICAgICBpZiAoZnJvbS5pc0FmdGVyKHRvKSkge1xyXG4gICAgICAgIHN0YXJ0RGF0ZSA9IGVuZERhdGU7XHJcbiAgICAgICAgZnJvbSA9IHRvO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXHJcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XHJcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgZW5kRGF0ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IHsgYmVmb3JlOiBuZXcgRGF0ZShzdGFydERhdGUpIH07XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlLCBkaXNhYmxlZEVuZERheXMgfSk7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xyXG4gICAgbGV0IGVuZERhdGUgPSBkYXRlO1xyXG4gICAgbGV0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcclxuICAgIGlmICghdG8uaXNWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBzdGF0ZTtcclxuICAgIGlmICghc3RhcnREYXRlKSB7XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGVuZERhdGUsXHJcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XHJcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XHJcbiAgICAgICAgICAgIGVuZERhdGUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xyXG4gICAgICBpZiAodG8uaXNCZWZvcmUoZnJvbSkpIHtcclxuICAgICAgICBlbmREYXRlID0gc3RhcnREYXRlO1xyXG4gICAgICAgIHRvID0gZnJvbTtcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcclxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcclxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXHJcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XHJcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XHJcbiAgICAgICAgICAgIGVuZERhdGUsXHJcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0geyBhZnRlcjogbmV3IERhdGUoZW5kRGF0ZSkgfTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlLCBkaXNhYmxlZFN0YXJ0RGF5cyB9KTtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICByZWdpb24sXHJcbiAgICAgIGRhdGVGb3JtYXQsXHJcbiAgICAgIG51bWJlck9mTW9udGhzLFxyXG4gICAgICBzaG93V2Vla051bWJlcnMsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHtcclxuICAgICAgZGlzYWJsZWRFbmREYXlzLFxyXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcclxuICAgICAgc3RhcnREYXRlLFxyXG4gICAgICBlbmREYXRlLFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBmcm9tID0gbmV3IERhdGUoc3RhcnREYXRlKTtcclxuICAgIGNvbnN0IHRvID0gbmV3IERhdGUoZW5kRGF0ZSk7XHJcbiAgICBjb25zdCBtb2RpZmllcnMgPSB7IHN0YXJ0OiBmcm9tLCBlbmQ6IHRvIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWJzb2x1dGVSYW5nZVNlY3Rpb24+XHJcbiAgICAgICAgPERhdGVTZWN0aW9uPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGFydERhdGVcIj57dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc3RhcnREYXRlfTwvbGFiZWw+XHJcbiAgICAgICAgICA8RGF0ZUlucHV0XHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XHJcbiAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRTdGFydERheXN9XHJcbiAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxyXG4gICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cclxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XHJcbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxyXG4gICAgICAgICAgICB0b01vbnRoPXt0b31cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cclxuICAgICAgICA8SHlwaGVuIC8+XHJcbiAgICAgICAgPERhdGVTZWN0aW9uPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbmREYXRlXCI+e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmVuZERhdGV9PC9sYWJlbD5cclxuICAgICAgICAgIDxEYXRlSW5wdXRcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cclxuICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZEVuZERheXN9XHJcbiAgICAgICAgICAgIGZyb21Nb250aD17ZnJvbX1cclxuICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XHJcbiAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxyXG4gICAgICAgICAgICBtb250aD17ZnJvbX1cclxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLnRvID0gZWwpfVxyXG4gICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxyXG4gICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cclxuICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XHJcbiAgICAgIDwvQWJzb2x1dGVSYW5nZVNlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQWJzb2x1dGVEYXRlUmFuZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5cclxuQWJzb2x1dGVEYXRlUmFuZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xyXG5cclxuIl19