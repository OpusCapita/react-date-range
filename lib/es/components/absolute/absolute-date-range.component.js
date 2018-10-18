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

import { DateInput } from '@opuscapita/react-datetime';
import { Content } from '@opuscapita/oc-cm-common-layouts';

import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';
import Overlays from './overlays';

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
          Content.InputColumn,
          {
            className: 'absolute-start-date',
            id: 'absoluteStartDate',
            label: this.props.translations.startDate
          },
          React.createElement(DateInput, {
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
      React.createElement(Hyphen, null),
      React.createElement(
        DateSection,
        null,
        React.createElement(
          Content.InputColumn,
          {
            className: 'absolute-end-date',
            id: 'absoluteEndDate',
            label: this.props.translations.endDate
          },
          React.createElement(DateInput, {
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
}(React.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.componentDidMount = function () {
    var showOverlay = _this3.props.showOverlay;

    if (_this3.from && showOverlay === 1) {
      _this3.from.focus();
    } else if (_this3.to && showOverlay === 2) {
      _this3.to.focus();
    }
  };

  this.handleStartDayClick = function () {
    _this3.from = undefined;
  };

  this.handleStartDateChange = function (date) {
    var startDate = date;
    var from = moment.utc(startDate);
    if (!from.isValid()) {
      return;
    }

    var endDate = _this3.state.endDate;

    var absoluteRange = {
      startDate: startDate,
      showOverlay: Overlays.start
    };
    var state = void 0;
    if (!endDate) {
      state = {
        startDate: startDate,
        popoverProps: {
          absoluteRange: absoluteRange
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
          absoluteRange: _extends({}, absoluteRange, {
            startDate: startDate,
            endDate: endDate
          })
        }
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
    if (!to.isValid()) {
      return;
    }

    var startDate = _this3.state.startDate;

    var absoluteRange = {
      endDate: endDate,
      showOverlay: Overlays.end
    };

    var state = void 0;
    if (!startDate) {
      state = {
        endDate: endDate,
        popoverProps: {
          absoluteRange: absoluteRange
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
          absoluteRange: _extends({}, absoluteRange, {
            endDate: endDate,
            startDate: startDate
          })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsIkRhdGVJbnB1dCIsIkNvbnRlbnQiLCJEYXRlU2VjdGlvbiIsIkh5cGhlbiIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyIsIk92ZXJsYXlzIiwiQWJzb2x1dGVSYW5nZVNlY3Rpb24iLCJkaXYiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInV0Y1N0YXJ0RGF0ZSIsImlzVmFsaWQiLCJ1dGMiLCJzdGFydE9mIiwidG9JU09TdHJpbmciLCJ1dGNFbmREYXRlIiwiaXNCZWZvcmUiLCJkaXNhYmxlZFN0YXJ0RGF5cyIsImFmdGVyIiwiRGF0ZSIsImRpc2FibGVkRW5kRGF5cyIsImJlZm9yZSIsInN0YXRlIiwicmVuZGVyIiwicmVnaW9uIiwiZGF0ZUZvcm1hdCIsIm51bWJlck9mTW9udGhzIiwic2hvd1dlZWtOdW1iZXJzIiwiZnJvbSIsInRvIiwibW9kaWZpZXJzIiwic3RhcnQiLCJlbmQiLCJ0cmFuc2xhdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJlbCIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJQdXJlQ29tcG9uZW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJzaG93T3ZlcmxheSIsImZvY3VzIiwiaGFuZGxlU3RhcnREYXlDbGljayIsInVuZGVmaW5lZCIsImRhdGUiLCJhYnNvbHV0ZVJhbmdlIiwicG9wb3ZlclByb3BzIiwiaXNBZnRlciIsImVuZE9mIiwidmFsdWUiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlRW5kRGF5Q2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQ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QURMO0FBRU5MLGlCQUFTb0IsR0FBR2tCLEtBQUgsQ0FBUyxLQUFULEVBQWdCakMsV0FBaEIsRUFGSDtBQUdOa0MsZUFBVXBCLEtBQUtxQixNQUFMLENBQVksT0FBSzFDLEtBQUwsQ0FBV2tCLFVBQXZCLENBQVYsV0FBa0RJLEdBQUdvQixNQUFILENBQVUsT0FBSzFDLEtBQUwsQ0FBV2tCLFVBQXJCLENBSDVDO0FBSU5vQixzQkFBYztBQUNaRCxzQ0FDS0EsYUFETDtBQUVFbkMsNEJBRkY7QUFHRUQ7QUFIRjtBQURZO0FBSlIsT0FBUjtBQVlEO0FBQ0QsUUFBTVMsb0JBQW9CLEVBQUVDLE9BQU8sSUFBSUMsSUFBSixDQUFTVixPQUFULENBQVQsRUFBMUI7QUFDQSxXQUFLeUMsUUFBTCxDQUFjLEVBQUV6QyxnQkFBRixFQUFXUSxvQ0FBWCxFQUFkO0FBQ0EsV0FBS1YsS0FBTCxDQUFXNEMsUUFBWCxDQUFvQjdCLEtBQXBCO0FBQ0QsRzs7U0E3SGtCaEIsaUI7OztBQW9NckJBLGtCQUFrQkosWUFBbEIsR0FBaUNBLFlBQWpDIiwiZmlsZSI6ImFic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kYXRldGltZSc7XG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBPdmVybGF5cyBmcm9tICcuL292ZXJsYXlzJztcblxuY29uc3QgQWJzb2x1dGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXRjU3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhzdGFydERhdGUpLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCkgOiBzdGFydERhdGU7XG4gICAgbGV0IHV0Y0VuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhlbmREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogZW5kRGF0ZTtcbiAgICB1dGNFbmREYXRlID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudCh1dGNFbmREYXRlKS5pc1ZhbGlkKCkgJiZcbiAgICAgIG1vbWVudCh1dGNFbmREYXRlKS5pc0JlZm9yZShtb21lbnQodXRjU3RhcnREYXRlKSkgP1xuICAgICAgdXRjU3RhcnREYXRlIDpcbiAgICAgIHV0Y0VuZERhdGU7XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpID8geyBhZnRlcjogbmV3IERhdGUodXRjRW5kRGF0ZSkgfSA6IG51bGw7XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpID9cbiAgICAgIHsgYmVmb3JlOiBuZXcgRGF0ZSh1dGNTdGFydERhdGUpIH0gOiBudWxsO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydERhdGU6IHV0Y1N0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGU6IHV0Y0VuZERhdGUsXG4gICAgICBkaXNhYmxlZFN0YXJ0RGF5cyxcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5mcm9tICYmIHNob3dPdmVybGF5ID09PSAxKSB7XG4gICAgICB0aGlzLmZyb20uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG8gJiYgc2hvd092ZXJsYXkgPT09IDIpIHtcbiAgICAgIHRoaXMudG8uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdGFydERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuZnJvbSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgbGV0IHN0YXJ0RGF0ZSA9IGRhdGU7XG4gICAgbGV0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgaWYgKCFmcm9tLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgc3RhcnREYXRlLFxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLnN0YXJ0LFxuICAgIH07XG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghZW5kRGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIGlmIChmcm9tLmlzQWZ0ZXIodG8pKSB7XG4gICAgICAgIHN0YXJ0RGF0ZSA9IGVuZERhdGU7XG4gICAgICAgIGZyb20gPSB0bztcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfWAsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAgIC4uLmFic29sdXRlUmFuZ2UsXG4gICAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBkaXNhYmxlZEVuZERheXMgPSB7IGJlZm9yZTogbmV3IERhdGUoc3RhcnREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGRpc2FibGVkRW5kRGF5cyB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMudG8gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKGRhdGUpID0+IHtcbiAgICBsZXQgZW5kRGF0ZSA9IGRhdGU7XG4gICAgbGV0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICBpZiAoIXRvLmlzVmFsaWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLmVuZCxcbiAgICB9O1xuXG4gICAgbGV0IHN0YXRlO1xuICAgIGlmICghc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBpZiAodG8uaXNCZWZvcmUoZnJvbSkpIHtcbiAgICAgICAgZW5kRGF0ZSA9IHN0YXJ0RGF0ZTtcbiAgICAgICAgdG8gPSBmcm9tO1xuICAgICAgfVxuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQodGhpcy5wcm9wcy5kYXRlRm9ybWF0KX1gLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSB7IGFmdGVyOiBuZXcgRGF0ZShlbmREYXRlKSB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlLCBkaXNhYmxlZFN0YXJ0RGF5cyB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICByZWdpb24sXG4gICAgICBkYXRlRm9ybWF0LFxuICAgICAgbnVtYmVyT2ZNb250aHMsXG4gICAgICBzaG93V2Vla051bWJlcnMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWRFbmREYXlzLFxuICAgICAgZGlzYWJsZWRTdGFydERheXMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZyb20gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICAgIGNvbnN0IHRvID0gbmV3IERhdGUoZW5kRGF0ZSk7XG4gICAgY29uc3QgbW9kaWZpZXJzID0geyBzdGFydDogZnJvbSwgZW5kOiB0byB9O1xuICAgIHJldHVybiAoXG4gICAgICA8QWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cImFic29sdXRlU3RhcnREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5zdGFydERhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkU3RhcnREYXlzfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBpbnB1dFJlZj17ZWwgPT4gKHRoaXMuZnJvbSA9IGVsKX1cbiAgICAgICAgICAgICAgc2VsZWN0ZWREYXlzPXtbZnJvbSwgeyBmcm9tLCB0byB9XX1cbiAgICAgICAgICAgICAgc2hvd1dlZWtOdW1iZXJzPXtzaG93V2Vla051bWJlcnN9XG4gICAgICAgICAgICAgIHRvTW9udGg9e3RvfVxuICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1lbmQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cImFic29sdXRlRW5kRGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dGhpcy5wcm9wcy50cmFuc2xhdGlvbnMuZW5kRGF0ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICAgIGRpc2FibGVkRGF5cz17ZGlzYWJsZWRFbmREYXlzfVxuICAgICAgICAgICAgICBmcm9tTW9udGg9e2Zyb219XG4gICAgICAgICAgICAgIGxvY2FsZT17cmVnaW9ufVxuICAgICAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cbiAgICAgICAgICAgICAgbW9udGg9e2Zyb219XG4gICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXtudW1iZXJPZk1vbnRoc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRSZWY9e2VsID0+ICh0aGlzLnRvID0gZWwpfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvQWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5BYnNvbHV0ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkFic29sdXRlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==