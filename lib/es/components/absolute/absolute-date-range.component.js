var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
          inputRef: function inputRef(el) {
            return _this2.from = el;
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
          inputRef: function inputRef(el) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsIkRhdGVJbnB1dCIsIkRhdGVTZWN0aW9uIiwiSHlwaGVuIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiT3ZlcmxheXMiLCJBYnNvbHV0ZVJhbmdlU2VjdGlvbiIsImRpdiIsIkFic29sdXRlRGF0ZVJhbmdlIiwicHJvcHMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwidXRjU3RhcnREYXRlIiwiaXNWYWxpZCIsInV0YyIsInN0YXJ0T2YiLCJ0b0lTT1N0cmluZyIsInV0Y0VuZERhdGUiLCJpc0JlZm9yZSIsImRpc2FibGVkU3RhcnREYXlzIiwiYWZ0ZXIiLCJEYXRlIiwiZGlzYWJsZWRFbmREYXlzIiwiYmVmb3JlIiwic3RhdGUiLCJyZW5kZXIiLCJyZWdpb24iLCJkYXRlRm9ybWF0IiwibnVtYmVyT2ZNb250aHMiLCJzaG93V2Vla051bWJlcnMiLCJmcm9tIiwidG8iLCJtb2RpZmllcnMiLCJzdGFydCIsImVuZCIsInRyYW5zbGF0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImVsIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsIlB1cmVDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInNob3dPdmVybGF5IiwiZm9jdXMiLCJoYW5kbGVTdGFydERheUNsaWNrIiwidW5kZWZpbmVkIiwiZGF0ZSIsImFic29sdXRlUmFuZ2UiLCJwb3BvdmVyUHJvcHMiLCJpc0FmdGVyIiwiZW5kT2YiLCJ2YWx1ZSIsImZvcm1hdCIsInNldFN0YXRlIiwib25DaGFuZ2UiLCJoYW5kbGVFbmREYXlDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFB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a0RJLEdBQUdvQixNQUFILENBQVUsT0FBSzFDLEtBQUwsQ0FBV2tCLFVBQXJCLENBSDVDO0FBSU5vQixzQkFBYztBQUNaRCxzQ0FDS0EsYUFETDtBQUVFbkMsNEJBRkY7QUFHRUQ7QUFIRjtBQURZO0FBSlIsT0FBUjtBQVlEO0FBQ0QsUUFBTVMsb0JBQW9CLEVBQUVDLE9BQU8sSUFBSUMsSUFBSixDQUFTVixPQUFULENBQVQsRUFBMUI7QUFDQSxXQUFLeUMsUUFBTCxDQUFjLEVBQUV6QyxnQkFBRixFQUFXUSxvQ0FBWCxFQUFkO0FBQ0EsV0FBS1YsS0FBTCxDQUFXNEMsUUFBWCxDQUFvQjdCLEtBQXBCO0FBQ0QsRzs7U0E3SGtCaEIsaUI7OztBQTBMckJBLGtCQUFrQkosWUFBbEIsR0FBaUNBLFlBQWpDIiwiZmlsZSI6ImFic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kYXRldGltZSc7XHJcblxyXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XHJcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcclxuaW1wb3J0IE92ZXJsYXlzIGZyb20gJy4vb3ZlcmxheXMnO1xyXG5cclxuY29uc3QgQWJzb2x1dGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnNvbHV0ZURhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHV0Y1N0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoc3RhcnREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogc3RhcnREYXRlO1xyXG4gICAgbGV0IHV0Y0VuZERhdGUgPSBtb21lbnQoZW5kRGF0ZSkuaXNWYWxpZCgpID8gbW9tZW50LnV0YyhlbmREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogZW5kRGF0ZTtcclxuICAgIHV0Y0VuZERhdGUgPSBtb21lbnQodXRjU3RhcnREYXRlKS5pc1ZhbGlkKCkgJiYgbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSAmJlxyXG4gICAgICBtb21lbnQodXRjRW5kRGF0ZSkuaXNCZWZvcmUobW9tZW50KHV0Y1N0YXJ0RGF0ZSkpID9cclxuICAgICAgdXRjU3RhcnREYXRlIDpcclxuICAgICAgdXRjRW5kRGF0ZTtcclxuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0gbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSA/IHsgYWZ0ZXI6IG5ldyBEYXRlKHV0Y0VuZERhdGUpIH0gOiBudWxsO1xyXG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0gbW9tZW50KHV0Y1N0YXJ0RGF0ZSkuaXNWYWxpZCgpID9cclxuICAgICAgeyBiZWZvcmU6IG5ldyBEYXRlKHV0Y1N0YXJ0RGF0ZSkgfSA6IG51bGw7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzdGFydERhdGU6IHV0Y1N0YXJ0RGF0ZSxcclxuICAgICAgZW5kRGF0ZTogdXRjRW5kRGF0ZSxcclxuICAgICAgZGlzYWJsZWRTdGFydERheXMsXHJcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc2hvd092ZXJsYXkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAodGhpcy5mcm9tICYmIHNob3dPdmVybGF5ID09PSAxKSB7XHJcbiAgICAgIHRoaXMuZnJvbS5mb2N1cygpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRvICYmIHNob3dPdmVybGF5ID09PSAyKSB7XHJcbiAgICAgIHRoaXMudG8uZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVN0YXJ0RGF5Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmZyb20gPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xyXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IGRhdGU7XHJcbiAgICBsZXQgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcclxuICAgIGlmICghZnJvbS5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XHJcbiAgICAgIHN0YXJ0RGF0ZSxcclxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLnN0YXJ0LFxyXG4gICAgfTtcclxuICAgIGxldCBzdGF0ZTtcclxuICAgIGlmICghZW5kRGF0ZSkge1xyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgICBzdGFydERhdGUsXHJcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XHJcbiAgICAgICAgICBhYnNvbHV0ZVJhbmdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XHJcbiAgICAgIGlmIChmcm9tLmlzQWZ0ZXIodG8pKSB7XHJcbiAgICAgICAgc3RhcnREYXRlID0gZW5kRGF0ZTtcclxuICAgICAgICBmcm9tID0gdG87XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9YCxcclxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcclxuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcclxuICAgICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcclxuICAgICAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgICAgICBlbmREYXRlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0geyBiZWZvcmU6IG5ldyBEYXRlKHN0YXJ0RGF0ZSkgfTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGRpc2FibGVkRW5kRGF5cyB9KTtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW5kRGF5Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnRvID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XHJcbiAgICBsZXQgZW5kRGF0ZSA9IGRhdGU7XHJcbiAgICBsZXQgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xyXG4gICAgaWYgKCF0by5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcclxuICAgICAgZW5kRGF0ZSxcclxuICAgICAgc2hvd092ZXJsYXk6IE92ZXJsYXlzLmVuZCxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHN0YXRlO1xyXG4gICAgaWYgKCFzdGFydERhdGUpIHtcclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZW5kRGF0ZSxcclxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcclxuICAgICAgICAgIGFic29sdXRlUmFuZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmICh0by5pc0JlZm9yZShmcm9tKSkge1xyXG4gICAgICAgIGVuZERhdGUgPSBzdGFydERhdGU7XHJcbiAgICAgICAgdG8gPSBmcm9tO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdCh0aGlzLnByb3BzLmRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KHRoaXMucHJvcHMuZGF0ZUZvcm1hdCl9YCxcclxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcclxuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcclxuICAgICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcclxuICAgICAgICAgICAgZW5kRGF0ZSxcclxuICAgICAgICAgICAgc3RhcnREYXRlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzYWJsZWRTdGFydERheXMgPSB7IGFmdGVyOiBuZXcgRGF0ZShlbmREYXRlKSB9O1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUsIGRpc2FibGVkU3RhcnREYXlzIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHJlZ2lvbixcclxuICAgICAgZGF0ZUZvcm1hdCxcclxuICAgICAgbnVtYmVyT2ZNb250aHMsXHJcbiAgICAgIHNob3dXZWVrTnVtYmVycyxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBkaXNhYmxlZEVuZERheXMsXHJcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxyXG4gICAgICBzdGFydERhdGUsXHJcbiAgICAgIGVuZERhdGUsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGZyb20gPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcclxuICAgIGNvbnN0IG1vZGlmaWVycyA9IHsgc3RhcnQ6IGZyb20sIGVuZDogdG8gfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cclxuICAgICAgICA8RGF0ZVNlY3Rpb24+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXJ0RGF0ZVwiPnt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5zdGFydERhdGV9PC9sYWJlbD5cclxuICAgICAgICAgIDxEYXRlSW5wdXRcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cclxuICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cclxuICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XHJcbiAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxyXG4gICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgaW5wdXRSZWY9e2VsID0+ICh0aGlzLmZyb20gPSBlbCl9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XHJcbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxyXG4gICAgICAgICAgICB0b01vbnRoPXt0b31cclxuICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cclxuICAgICAgICA8SHlwaGVuIC8+XHJcbiAgICAgICAgPERhdGVTZWN0aW9uPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbmREYXRlXCI+e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmVuZERhdGV9PC9sYWJlbD5cclxuICAgICAgICAgIDxEYXRlSW5wdXRcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cclxuICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZEVuZERheXN9XHJcbiAgICAgICAgICAgIGZyb21Nb250aD17ZnJvbX1cclxuICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XHJcbiAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxyXG4gICAgICAgICAgICBtb250aD17ZnJvbX1cclxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9e251bWJlck9mTW9udGhzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICBpbnB1dFJlZj17ZWwgPT4gKHRoaXMudG8gPSBlbCl9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkRGF5cz17W2Zyb20sIHsgZnJvbSwgdG8gfV19XHJcbiAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxyXG4gICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cclxuICAgICAgPC9BYnNvbHV0ZVJhbmdlU2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BYnNvbHV0ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcblxyXG5BYnNvbHV0ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XHJcbiJdfQ==