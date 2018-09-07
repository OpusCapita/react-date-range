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

    var utcStartDate = moment(startDate).isValid() ? moment.utc(startDate).startOf('day') : startDate;
    var utcEndDate = moment(endDate).isValid() ? moment.utc(endDate).startOf('day') : endDate;
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
          onDayClick: function onDayClick() {
            return _this2.to.input.focus();
          },
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
export { AbsoluteDateRange as default };


AbsoluteDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsIkRhdGVJbnB1dCIsIkRhdGVTZWN0aW9uIiwiSHlwaGVuIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiQWJzb2x1dGVSYW5nZVNlY3Rpb24iLCJkaXYiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInV0Y1N0YXJ0RGF0ZSIsImlzVmFsaWQiLCJ1dGMiLCJzdGFydE9mIiwidXRjRW5kRGF0ZSIsImlzQmVmb3JlIiwiZGlzYWJsZWRTdGFydERheXMiLCJhZnRlciIsIkRhdGUiLCJkaXNhYmxlZEVuZERheXMiLCJiZWZvcmUiLCJzdGF0ZSIsInJlbmRlciIsInJlZ2lvbiIsImRhdGVGb3JtYXQiLCJudW1iZXJPZk1vbnRocyIsInNob3dXZWVrTnVtYmVycyIsImZyb20iLCJ0byIsIm1vZGlmaWVycyIsInN0YXJ0IiwiZW5kIiwidHJhbnNsYXRpb25zIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwiaW5wdXQiLCJmb2N1cyIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJlbCIsIlB1cmVDb21wb25lbnQiLCJkYXRlIiwicG9wb3ZlclByb3BzIiwiYWJzb2x1dGVSYW5nZSIsImlzQWZ0ZXIiLCJlbmRPZiIsInRvSVNPU3RyaW5nIiwidmFsdWUiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQSxTQUFTQyxTQUFULFFBQTBCLDRCQUExQjs7QUFFQSxPQUFPQyxXQUFQLE1BQXdCLDRCQUF4QjtB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R0FBUCxDQUFXSixTQUFYLENBQWI7QUFDQSxVQUFJb0IsR0FBR2IsUUFBSCxDQUFZWSxJQUFaLENBQUosRUFBdUI7QUFDckJsQixrQkFBVUQsU0FBVjtBQUNBb0IsYUFBS0QsSUFBTDtBQUNEO0FBQ0ROLGNBQVE7QUFDTmIsNEJBRE07QUFFTkMsaUJBQVNtQixHQUFHZSxLQUFILENBQVMsS0FBVCxFQUFnQkMsV0FBaEIsRUFGSDtBQUdOQyxlQUFVbEIsS0FBS21CLE1BQUwsQ0FBWSxPQUFLdkMsS0FBTCxDQUFXaUIsVUFBdkIsQ0FBVixXQUFrREksR0FBR2tCLE1BQUgsQ0FBVSxPQUFLdkMsS0FBTCxDQUFXaUIsVUFBckIsQ0FINUM7QUFJTmdCLHNCQUFjO0FBQ1pDLHlCQUFlO0FBQ2JoQyw0QkFEYTtBQUViRDtBQUZhO0FBREg7QUFKUixPQUFSO0FBV0Q7QUFDRCxRQUFNUSxvQkFBb0IsRUFBRUMsT0FBTyxJQUFJQyxJQUFKLENBQVNULE9BQVQsQ0FBVCxFQUExQjtBQUNBLFdBQUtzQyxRQUFMLENBQWMsRUFBRXRDLGdCQUFGLEVBQVdPLG9DQUFYLEVBQWQ7QUFDQSxXQUFLVCxLQUFMLENBQVd5QyxRQUFYLENBQW9CM0IsS0FBcEI7QUFDRCxHOztTQXJHa0JmLGlCOzs7QUFrS3JCQSxrQkFBa0JILFlBQWxCLEdBQWlDQSxZQUFqQyIsImZpbGUiOiJhYnNvbHV0ZS1kYXRlLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZGF0ZXRpbWUnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcblxuY29uc3QgQWJzb2x1dGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnNvbHV0ZURhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB1dGNTdGFydERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5pc1ZhbGlkKCkgPyBtb21lbnQudXRjKHN0YXJ0RGF0ZSkuc3RhcnRPZignZGF5JykgOiBzdGFydERhdGU7XG4gICAgbGV0IHV0Y0VuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhlbmREYXRlKS5zdGFydE9mKCdkYXknKSA6IGVuZERhdGU7XG4gICAgdXRjRW5kRGF0ZSA9IG1vbWVudCh1dGNTdGFydERhdGUpLmlzVmFsaWQoKSAmJiBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpICYmXG4gICAgICBtb21lbnQodXRjRW5kRGF0ZSkuaXNCZWZvcmUobW9tZW50KHV0Y1N0YXJ0RGF0ZSkpID9cbiAgICAgIHV0Y1N0YXJ0RGF0ZSA6XG4gICAgICB1dGNFbmREYXRlO1xuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0gbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSA/IHsgYWZ0ZXI6IG5ldyBEYXRlKHV0Y0VuZERhdGUpIH0gOiBudWxsO1xuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IG1vbWVudCh1dGNTdGFydERhdGUpLmlzVmFsaWQoKSA/XG4gICAgICB7IGJlZm9yZTogbmV3IERhdGUodXRjU3RhcnREYXRlKSB9IDogbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiB1dGNTdGFydERhdGUsXG4gICAgICBlbmREYXRlOiB1dGNFbmREYXRlLFxuICAgICAgZGlzYWJsZWRTdGFydERheXMsXG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgbGV0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFmcm9tLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKCFlbmREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIGlmIChmcm9tLmlzQWZ0ZXIodG8pKSB7XG4gICAgICAgIHN0YXJ0RGF0ZSA9IGVuZERhdGU7XG4gICAgICAgIGZyb20gPSB0bztcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IHsgYmVmb3JlOiBuZXcgRGF0ZShzdGFydERhdGUpIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSwgZGlzYWJsZWRFbmREYXlzIH0pO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IGVuZERhdGUgPSBkYXRlO1xuICAgIGxldCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgaWYgKCF0by5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgc3RhdGU7XG4gICAgaWYgKCFzdGFydERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgaWYgKHRvLmlzQmVmb3JlKGZyb20pKSB7XG4gICAgICAgIGVuZERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRvID0gZnJvbTtcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0geyBhZnRlcjogbmV3IERhdGUoZW5kRGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSwgZGlzYWJsZWRTdGFydERheXMgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcmVnaW9uLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIG51bWJlck9mTW9udGhzLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmcm9tID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgICBjb25zdCB0byA9IG5ldyBEYXRlKGVuZERhdGUpO1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IHsgc3RhcnQ6IGZyb20sIGVuZDogdG8gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEFic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGFydERhdGVcIj57dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc3RhcnREYXRlfTwvbGFiZWw+XG4gICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRTdGFydERheXN9XG4gICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgb25EYXlDbGljaz17KCkgPT4gdGhpcy50by5pbnB1dC5mb2N1cygpfVxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgdG9Nb250aD17dG99XG4gICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW5kRGF0ZVwiPnt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5lbmREYXRlfTwvbGFiZWw+XG4gICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRFbmREYXlzfVxuICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgIHJlZj17ZWwgPT4gKHRoaXMudG8gPSBlbCl9XG4gICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgPC9BYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbkFic29sdXRlRGF0ZVJhbmdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuQWJzb2x1dGVEYXRlUmFuZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4iXX0=