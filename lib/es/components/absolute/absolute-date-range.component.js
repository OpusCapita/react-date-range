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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsIkRhdGVJbnB1dCIsIkRhdGVTZWN0aW9uIiwiSHlwaGVuIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiQWJzb2x1dGVSYW5nZVNlY3Rpb24iLCJkaXYiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInV0Y1N0YXJ0RGF0ZSIsImlzVmFsaWQiLCJ1dGMiLCJzdGFydE9mIiwidXRjRW5kRGF0ZSIsImlzQmVmb3JlIiwiZGlzYWJsZWRTdGFydERheXMiLCJhZnRlciIsIkRhdGUiLCJkaXNhYmxlZEVuZERheXMiLCJiZWZvcmUiLCJzdGF0ZSIsInJlbmRlciIsInJlZ2lvbiIsImRhdGVGb3JtYXQiLCJudW1iZXJPZk1vbnRocyIsInNob3dXZWVrTnVtYmVycyIsImZyb20iLCJ0byIsIm1vZGlmaWVycyIsInN0YXJ0IiwiZW5kIiwidHJhbnNsYXRpb25zIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwiaW5wdXQiLCJmb2N1cyIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJlbCIsIlB1cmVDb21wb25lbnQiLCJkYXRlIiwicG9wb3ZlclByb3BzIiwiYWJzb2x1dGVSYW5nZSIsImlzQWZ0ZXIiLCJlbmRPZiIsInRvSVNPU3RyaW5nIiwidmFsdWUiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQSxTQUFTQyxTQUFULFFBQTBCLDRCQUExQjs7QUFFQSxPQUFPQyxXQUFQLE1BQXdCLDRCQUF4QjtB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R0FBUCxDQUFXSixTQUFYLENBQWI7QUFDQSxVQUFJb0IsR0FBR2IsUUFBSCxDQUFZWSxJQUFaLENBQUosRUFBdUI7QUFDckJsQixrQkFBVUQsU0FBVjtBQUNBb0IsYUFBS0QsSUFBTDtBQUNEO0FBQ0ROLGNBQVE7QUFDTmIsbUJBQVdtQixLQUFLZCxPQUFMLENBQWEsS0FBYixFQUFvQitCLFdBQXBCLEVBREw7QUFFTm5DLGlCQUFTbUIsR0FBR2UsS0FBSCxDQUFTLEtBQVQsRUFBZ0JDLFdBQWhCLEVBRkg7QUFHTkMsZUFBVWxCLEtBQUttQixNQUFMLENBQVksT0FBS3ZDLEtBQUwsQ0FBV2lCLFVBQXZCLENBQVYsV0FBa0RJLEdBQUdrQixNQUFILENBQVUsT0FBS3ZDLEtBQUwsQ0FBV2lCLFVBQXJCLENBSDVDO0FBSU5nQixzQkFBYztBQUNaQyx5QkFBZTtBQUNiaEMsNEJBRGE7QUFFYkQ7QUFGYTtBQURIO0FBSlIsT0FBUjtBQVdEO0FBQ0QsUUFBTVEsb0JBQW9CLEVBQUVDLE9BQU8sSUFBSUMsSUFBSixDQUFTVCxPQUFULENBQVQsRUFBMUI7QUFDQSxXQUFLc0MsUUFBTCxDQUFjLEVBQUV0QyxnQkFBRixFQUFXTyxvQ0FBWCxFQUFkO0FBQ0EsV0FBS1QsS0FBTCxDQUFXeUMsUUFBWCxDQUFvQjNCLEtBQXBCO0FBQ0QsRzs7U0FyR2tCZixpQjs7O0FBa0tyQkEsa0JBQWtCSCxZQUFsQixHQUFpQ0EsWUFBakMiLCJmaWxlIjoiYWJzb2x1dGUtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRhdGV0aW1lJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5cbmNvbnN0IEFic29sdXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXRjU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhzdGFydERhdGUpLnN0YXJ0T2YoJ2RheScpIDogc3RhcnREYXRlO1xuICAgIGxldCB1dGNFbmREYXRlID0gbW9tZW50KGVuZERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoZW5kRGF0ZSkuc3RhcnRPZignZGF5JykgOiBlbmREYXRlO1xuICAgIHV0Y0VuZERhdGUgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSAmJlxuICAgICAgbW9tZW50KHV0Y0VuZERhdGUpLmlzQmVmb3JlKG1vbWVudCh1dGNTdGFydERhdGUpKSA/XG4gICAgICB1dGNTdGFydERhdGUgOlxuICAgICAgdXRjRW5kRGF0ZTtcbiAgICBjb25zdCBkaXNhYmxlZFN0YXJ0RGF5cyA9IG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgPyB7IGFmdGVyOiBuZXcgRGF0ZSh1dGNFbmREYXRlKSB9IDogbnVsbDtcbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgP1xuICAgICAgeyBiZWZvcmU6IG5ldyBEYXRlKHV0Y1N0YXJ0RGF0ZSkgfSA6IG51bGw7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogdXRjU3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZTogdXRjRW5kRGF0ZSxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBzdGFydERhdGUgPSBkYXRlO1xuICAgIGxldCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgIGlmICghZnJvbS5pc1ZhbGlkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghZW5kRGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc0FmdGVyKHRvKSkge1xuICAgICAgICBzdGFydERhdGUgPSBlbmREYXRlO1xuICAgICAgICBmcm9tID0gdG87XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX1gLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSB7IGJlZm9yZTogbmV3IERhdGUoc3RhcnREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGRpc2FibGVkRW5kRGF5cyB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGxldCBlbmREYXRlID0gZGF0ZTtcbiAgICBsZXQgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgIGlmICghdG8uaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGlmICh0by5pc0JlZm9yZShmcm9tKSkge1xuICAgICAgICBlbmREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICB0byA9IGZyb207XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0geyBhZnRlcjogbmV3IERhdGUoZW5kRGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSwgZGlzYWJsZWRTdGFydERheXMgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcmVnaW9uLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIG51bWJlck9mTW9udGhzLFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmcm9tID0gbmV3IERhdGUoc3RhcnREYXRlKTtcbiAgICBjb25zdCB0byA9IG5ldyBEYXRlKGVuZERhdGUpO1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IHsgc3RhcnQ6IGZyb20sIGVuZDogdG8gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEFic29sdXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGFydERhdGVcIj57dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuc3RhcnREYXRlfTwvbGFiZWw+XG4gICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRTdGFydERheXN9XG4gICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgb25EYXlDbGljaz17KCkgPT4gdGhpcy50by5pbnB1dC5mb2N1cygpfVxuICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgdG9Nb250aD17dG99XG4gICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW5kRGF0ZVwiPnt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5lbmREYXRlfTwvbGFiZWw+XG4gICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRFbmREYXlzfVxuICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgIHJlZj17ZWwgPT4gKHRoaXMudG8gPSBlbCl9XG4gICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgPC9BYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbkFic29sdXRlRGF0ZVJhbmdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuQWJzb2x1dGVEYXRlUmFuZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4iXX0=