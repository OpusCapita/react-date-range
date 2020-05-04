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
import { v4 as uuidv4 } from 'uuid';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Fic29sdXRlL2Fic29sdXRlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vbWVudCIsInN0eWxlZCIsInY0IiwidXVpZHY0IiwiRGF0ZUlucHV0IiwiQ29udGVudCIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJIeXBoZW4iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJPdmVybGF5cyIsInRyYW5zbGF0ZSIsIkFic29sdXRlUmFuZ2VTZWN0aW9uIiwiZGl2IiwiZ3V0dGVyV2lkdGgiLCJjb2xvcnMiLCJncmV5MTAiLCJBYnNvbHV0ZURhdGVSYW5nZSIsInByb3BzIiwic2hvd092ZXJsYXkiLCJmcm9tIiwiU1RBUlQiLCJmb2N1cyIsInRvIiwiRU5EIiwidW5kZWZpbmVkIiwic3RhcnREYXRlIiwieWVhciIsImVwb2NoIiwidW5peCIsImRhdGUiLCJkYXRlRm9ybWF0Iiwib25DaGFuZ2UiLCJ1dGMiLCJpc1ZhbGlkIiwiaXNZZWFyQXV0b0ZpeGVkIiwiZW5kRGF0ZSIsInN0YXRlIiwiYWJzb2x1dGVSYW5nZSIsImlzQWZ0ZXIiLCJlbmRPZiIsInRvSVNPU3RyaW5nIiwidmFsdWUiLCJmb3JtYXQiLCJkaXNhYmxlZEVuZERheXMiLCJiZWZvcmUiLCJEYXRlIiwic2V0U3RhdGUiLCJpbnB1dERhdGUiLCJoYW5kbGVDaGFuZ2UiLCJ1dGNEYXRlIiwiZSIsImN1cnJlbnRWYWx1ZSIsInRhcmdldCIsImlzQmVmb3JlIiwic3RhcnRPZiIsImRpc2FibGVkU3RhcnREYXlzIiwiYWZ0ZXIiLCJ1dGNTdGFydERhdGUiLCJ1dGNFbmREYXRlIiwic3RhcnREYXRlSWQiLCJlbmREYXRlSWQiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJyZWdpb24iLCJudW1iZXJPZk1vbnRocyIsInNob3dXZWVrTnVtYmVycyIsInRyYW5zbGF0aW9ucyIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJtb2RpZmllcnMiLCJzdGFydCIsImVuZCIsImlkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJvbkJsdXIiLCJoYW5kbGVJbnB1dEJsdXIiLCJlbCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixRQUFuQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsRUFBRSxJQUFJQyxNQUFmLFFBQTZCLE1BQTdCO0FBRUEsU0FBU0MsU0FBVCxRQUEwQiw0QkFBMUI7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxLQUFsQixRQUErQixrQ0FBL0I7QUFFQSxPQUFPQyxXQUFQLE1BQXdCLDRCQUF4QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIscUJBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixjQUF0QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsaUJBQXpCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixZQUFyQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsOEJBQXRCO0FBRUEsSUFBTUMsb0JBQW9CLEdBQUdaLE1BQU0sQ0FBQ2EsR0FBVixvQkFNYlIsS0FBSyxDQUFDUyxXQU5PLEVBV1JULEtBQUssQ0FBQ1MsV0FYRSxFQWdCWFQsS0FBSyxDQUFDVSxNQUFOLENBQWFDLE1BaEJGLEVBc0JYWCxLQUFLLENBQUNVLE1BQU4sQ0FBYUMsTUF0QkYsQ0FBMUI7O0lBMkJxQkMsaUI7Ozs7O0FBQ25CLDZCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLDRDQUFNQSxLQUFOOztBQURpQix3RUFvQkMsWUFBTTtBQUFBLFVBQ2hCQyxXQURnQixHQUNBLE1BQUtELEtBREwsQ0FDaEJDLFdBRGdCOztBQUV4QixVQUFJLE1BQUtDLElBQUwsSUFBYUQsV0FBVyxLQUFLVCxRQUFRLENBQUNXLEtBQTFDLEVBQWlEO0FBQy9DLGNBQUtELElBQUws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QUEsaUJBQU8sTUFBSSxDQUFDeUIsZUFBTCxDQUFxQnpCLENBQXJCLEVBQXdCZixPQUF4QixFQUFpQ2dDLG1CQUFqQyxDQUFQO0FBQUE7QUFIRSxPQVZkO0FBZUUsTUFBQSxRQUFRLEVBQUUsa0JBQUNTLEVBQUQ7QUFBQSxlQUFTLE1BQUksQ0FBQ3RELEVBQUwsR0FBVXNELEVBQW5CO0FBQUEsT0FmWjtBQWdCRSxNQUFBLFlBQVksRUFBRSxDQUFDekQsSUFBRCxFQUFPO0FBQUVBLFFBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRRyxRQUFBQSxFQUFFLEVBQUZBO0FBQVIsT0FBUCxDQWhCaEI7QUFpQkUsTUFBQSxjQUFjLEVBQUUsS0FqQmxCO0FBa0JFLE1BQUEsV0FBVyxFQUFFSixXQUFXLEtBQUtULFFBQVEsQ0FBQ2MsR0FsQnhDO0FBbUJFLE1BQUEsZUFBZSxFQUFFMEMsZUFuQm5CO0FBb0JFLE1BQUEsS0FBSyxFQUFFOUIsT0FwQlQ7QUFxQkUsTUFBQSxZQUFZLEVBQUM7QUFyQmYsTUFMRixDQURGLENBaENGLENBREY7QUFrRUQsRzs7O0VBeE80Q3RDLEtBQUssQ0FBQ2dGLGE7O1NBQWhDN0QsaUI7QUE2T3JCQSxpQkFBaUIsQ0FBQ1IsWUFBbEIsR0FBaUNBLFlBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRhdGV0aW1lJztcbmltcG9ydCB7IENvbnRlbnQsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBPdmVybGF5cyBmcm9tICcuL292ZXJsYXlzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IEFic29sdXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9IDAgMCAwO1xuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAub2MtZGF0ZXRpbWUtc3RhdGljLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIH1cbiAgLm9jLWRhdGV0aW1lLnN0YXJ0LWRhdGUge1xuICAgIC5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZDpub3QoLkRheVBpY2tlci1EYXktLXN0YXJ0KTpub3QoLkRheVBpY2tlci1EYXktLW91dHNpZGUpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRiYzI7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTEwfTtcbiAgICB9XG4gIH1cbiAgLm9jLWRhdGV0aW1lLmVuZC1kYXRlIHtcbiAgICAuRGF5UGlja2VyLURheS0tc2VsZWN0ZWQ6bm90KC5EYXlQaWNrZXItRGF5LS1lbmQpOm5vdCguRGF5UGlja2VyLURheS0tb3V0c2lkZSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGJjMjtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5MTB9O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzb2x1dGVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIGNvbnN0IHV0Y1N0YXJ0RGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoc3RhcnREYXRlKS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpIDogc3RhcnREYXRlO1xuICAgIGxldCB1dGNFbmREYXRlID0gbW9tZW50KGVuZERhdGUpLmlzVmFsaWQoKSA/IG1vbWVudC51dGMoZW5kRGF0ZSkuc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSA6IGVuZERhdGU7XG4gICAgdXRjRW5kRGF0ZSA9IG1vbWVudCh1dGNTdGFydERhdGUpLmlzVmFsaWQoKSAmJiBtb21lbnQodXRjRW5kRGF0ZSkuaXNWYWxpZCgpICYmIG1vbWVudCh1dGNFbmREYXRlKS5pc0JlZm9yZShtb21lbnQodXRjU3RhcnREYXRlKSkgPyB1dGNTdGFydERhdGUgOiB1dGNFbmREYXRlO1xuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0gbW9tZW50KHV0Y0VuZERhdGUpLmlzVmFsaWQoKSA/IHsgYWZ0ZXI6IG5ldyBEYXRlKHV0Y0VuZERhdGUpIH0gOiBudWxsO1xuICAgIGNvbnN0IGRpc2FibGVkRW5kRGF5cyA9IG1vbWVudCh1dGNTdGFydERhdGUpLmlzVmFsaWQoKSA/IHsgYmVmb3JlOiBuZXcgRGF0ZSh1dGNTdGFydERhdGUpIH0gOiBudWxsO1xuICAgIC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGFydERhdGU6IHV0Y1N0YXJ0RGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZUlkOiBgc3RhcnQtZGF0ZS0ke3V1aWR2NCgpfWAsXG4gICAgICBlbmREYXRlOiB1dGNFbmREYXRlLFxuICAgICAgZW5kRGF0ZUlkOiBgZW5kLWRhdGUtJHt1dWlkdjQoKX1gLFxuICAgICAgZGlzYWJsZWRTdGFydERheXMsXG4gICAgICBkaXNhYmxlZEVuZERheXMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMuZnJvbSAmJiBzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuU1RBUlQpIHtcbiAgICAgIHRoaXMuZnJvbS5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50byAmJiBzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuRU5EKSB7XG4gICAgICB0aGlzLnRvLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3RhcnREYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLmZyb20gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpc1llYXJBdXRvRml4ZWQgPSAoc3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3QgeWVhciA9IHN0YXJ0RGF0ZS55ZWFyKCk7XG4gICAgY29uc3QgZXBvY2ggPSBtb21lbnQudW5peCgwKS55ZWFyKCk7XG4gICAgcmV0dXJuIHllYXIgPCBlcG9jaDtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0LCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgc3RhcnREYXRlID0gZGF0ZTtcbiAgICBsZXQgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICBpZiAoIWZyb20uaXNWYWxpZCgpKSByZXR1cm47XG4gICAgaWYgKHRoaXMuaXNZZWFyQXV0b0ZpeGVkKGZyb20pKSByZXR1cm47XG5cbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5TVEFSVCxcbiAgICB9O1xuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIWVuZERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc0FmdGVyKHRvKSkge1xuICAgICAgICBzdGFydERhdGUgPSBlbmREYXRlO1xuICAgICAgICBmcm9tID0gdG87XG4gICAgICB9XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5hYnNvbHV0ZVJhbmdlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZGlzYWJsZWRFbmREYXlzID0geyBiZWZvcmU6IG5ldyBEYXRlKHN0YXJ0RGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlLCBkaXNhYmxlZEVuZERheXMgfSk7XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoaW5wdXREYXRlLCBoYW5kbGVDaGFuZ2UpID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdXRjRGF0ZSA9IG1vbWVudC51dGMoaW5wdXREYXRlLCBkYXRlRm9ybWF0LCB0cnVlKTtcbiAgICBpZiAodXRjRGF0ZS5pc1ZhbGlkKCkpIHtcbiAgICAgIGhhbmRsZUNoYW5nZSh1dGNEYXRlLnRvSVNPU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0Qmx1ciA9IChlLCBjdXJyZW50VmFsdWUsIGhhbmRsZUNoYW5nZSkgPT4ge1xuICAgIGlmICghZSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCB1dGNEYXRlID0gdmFsdWUgPyBtb21lbnQudXRjKHZhbHVlLCBkYXRlRm9ybWF0KS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgaWYgKHV0Y0RhdGUgIT09IGN1cnJlbnRWYWx1ZSkgaGFuZGxlQ2hhbmdlKHV0Y0RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy50byA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGVuZERhdGUgPSBkYXRlO1xuICAgIGxldCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgaWYgKCF0by5pc1ZhbGlkKCkpIHJldHVybjtcbiAgICBpZiAodGhpcy5pc1llYXJBdXRvRml4ZWQodG8pKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBPdmVybGF5cy5FTkQsXG4gICAgfTtcblxuICAgIGxldCBzdGF0ZTtcbiAgICBpZiAoIXN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIGFic29sdXRlUmFuZ2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgaWYgKHRvLmlzQmVmb3JlKGZyb20pKSB7XG4gICAgICAgIGVuZERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgIHRvID0gZnJvbTtcbiAgICAgIH1cbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gLFxuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uYWJzb2x1dGVSYW5nZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGRpc2FibGVkU3RhcnREYXlzID0geyBhZnRlcjogbmV3IERhdGUoZW5kRGF0ZSkgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSwgZGlzYWJsZWRTdGFydERheXMgfSk7XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJlZ2lvbixcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBudW1iZXJPZk1vbnRocyxcbiAgICAgIHNob3dPdmVybGF5LFxuICAgICAgc2hvd1dlZWtOdW1iZXJzLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkRW5kRGF5cyxcbiAgICAgIGRpc2FibGVkU3RhcnREYXlzLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgc3RhcnREYXRlSWQsXG4gICAgICBlbmREYXRlLFxuICAgICAgZW5kRGF0ZUlkLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZUVuZERhdGVDaGFuZ2UsXG4gICAgICBoYW5kbGVTdGFydERhdGVDaGFuZ2UsXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgZnJvbSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgdG8gPSBuZXcgRGF0ZShlbmREYXRlKTtcbiAgICBjb25zdCBtb2RpZmllcnMgPSB7IHN0YXJ0OiBmcm9tLCBlbmQ6IHRvIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxBYnNvbHV0ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwiYWJzb2x1dGVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzdGFydC1kYXRlYH1cbiAgICAgICAgICAgICAgZGF0ZUZvcm1hdD17ZGF0ZUZvcm1hdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWREYXlzPXtkaXNhYmxlZFN0YXJ0RGF5c31cbiAgICAgICAgICAgICAgbG9jYWxlPXtyZWdpb259XG4gICAgICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgIGlkOiBzdGFydERhdGVJZCxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKGlucHV0RGF0ZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShpbnB1dERhdGUsIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgICAgb25CbHVyOiAoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dEJsdXIoZSwgc3RhcnREYXRlLCBoYW5kbGVTdGFydERhdGVDaGFuZ2UpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiAodGhpcy5mcm9tID0gZWwpfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgICBzaG93Q2xlYXJWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dPdmVybGF5PXtzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuU1RBUlR9XG4gICAgICAgICAgICAgIHNob3dXZWVrTnVtYmVycz17c2hvd1dlZWtOdW1iZXJzfVxuICAgICAgICAgICAgICB0b01vbnRoPXt0b31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgY2FsZW5kYXJUeXBlPVwic3RhdGljXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJhYnNvbHV0ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVJbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gZW5kLWRhdGVgfVxuICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICBkaXNhYmxlZERheXM9e2Rpc2FibGVkRW5kRGF5c31cbiAgICAgICAgICAgICAgZnJvbU1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBsb2NhbGU9e3JlZ2lvbn1cbiAgICAgICAgICAgICAgbW9kaWZpZXJzPXttb2RpZmllcnN9XG4gICAgICAgICAgICAgIG1vbnRoPXtmcm9tfVxuICAgICAgICAgICAgICBudW1iZXJPZk1vbnRocz17bnVtYmVyT2ZNb250aHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICBpZDogZW5kRGF0ZUlkLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiAoaW5wdXREYXRlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGlucHV0RGF0ZSwgaGFuZGxlRW5kRGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgICAgb25CbHVyOiAoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dEJsdXIoZSwgZW5kRGF0ZSwgaGFuZGxlRW5kRGF0ZUNoYW5nZSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+ICh0aGlzLnRvID0gZWwpfVxuICAgICAgICAgICAgICBzZWxlY3RlZERheXM9e1tmcm9tLCB7IGZyb20sIHRvIH1dfVxuICAgICAgICAgICAgICBzaG93Q2xlYXJWYWx1ZT17ZmFsc2V9XG4gICAgICAgICAgICAgIHNob3dPdmVybGF5PXtzaG93T3ZlcmxheSA9PT0gT3ZlcmxheXMuRU5EfVxuICAgICAgICAgICAgICBzaG93V2Vla051bWJlcnM9e3Nob3dXZWVrTnVtYmVyc31cbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAgIGNhbGVuZGFyVHlwZT1cInN0YXRpY1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvQWJzb2x1dGVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5BYnNvbHV0ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkFic29sdXRlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==