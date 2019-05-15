function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  align-self: flex-end;\n  width: 140px;\n  margin-left: ", ";\n  margin-bottom: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 80px;\n  margin-bottom: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ", " 0 0 0;\n  margin-bottom: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';
import { FloatingSelect } from '@opuscapita/react-floating-select';
import { Content, Primitive, theme } from '@opuscapita/oc-cm-common-layouts';
import DateSection from '../date-section.components';
import defaultProps from './default-props';
import formatLabel from './period-label.formatter';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import RelativeConstants from '../relative/constants';
import relativeDateOptions from '../relative/relative-options';
import translate from '../../translations/translate';
var PeriodSection = styled.div(_templateObject(), theme.gutterWidth);
var CountSection = styled(Content.InputColumn)(_templateObject2());
var GranularitySection = styled(Content.InputColumn)(_templateObject3(), theme.halfGutterWidth, theme.halfGutterWidth);

var Period =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Period, _React$PureComponent);

  function Period(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "getGranularityOptions", function () {
      var translations = _this.props.translations;
      return [{
        label: translate(translations, 'day', 'plural'),
        value: RelativeConstants.DAY
      }, {
        label: translate(translations, 'weekday', 'plural'),
        value: RelativeConstants.WEEKDAY
      }, {
        label: translate(translations, 'week', 'plural'),
        value: RelativeConstants.WEEK
      }, {
        label: translate(translations, 'month', 'plural'),
        value: RelativeConstants.MONTH
      }];
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedGranularity", function (granularities, value) {
      return granularities.find(function (granularity) {
        return granularity.value === value;
      }) || granularities[0];
    });

    _defineProperty(_assertThisInitialized(_this), "initEndDate", function (endDate) {
      return endDate.moment ? endDate : _extends({}, endDate, {
        moment: endDate.timing < 0 ? RelativeConstants.START : RelativeConstants.END
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initStartDate", function (startDate) {
      return startDate.value && startDate.value.moment ? startDate : _extends({}, startDate, {
        value: _extends({}, startDate.value, {
          moment: RelativeConstants.START
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (selectedStartDate) {
      var translations = _this.props.translations;
      var endDate = _this.state.endDate;

      var startDate = _this.initStartDate(selectedStartDate);

      var date = _this.initEndDate(endDate);

      _this.setState({
        startDate: startDate
      });

      var state = {
        endDate: date,
        startDate: startDate.value,
        value: formatLabel(startDate, endDate, translations),
        period: {
          startDate: startDate,
          endDate: date
        }
      };

      _this.props.onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (selectedEndDate) {
      var translations = _this.props.translations;
      var startDate = _this.state.startDate;

      var date = _this.initStartDate(startDate);

      var endDate = _this.initEndDate(selectedEndDate);

      _this.setState({
        endDate: endDate
      });

      var state = {
        endDate: endDate,
        period: {
          endDate: endDate
        }
      };

      if (startDate) {
        state = {
          endDate: endDate,
          value: formatLabel(startDate, endDate, translations),
          startDate: date.value,
          period: {
            endDate: endDate,
            startDate: startDate
          }
        };
      }

      _this.props.onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTimingChange", function (event) {
      var timing = event.target.value;
      var endDate = _this.state.endDate;

      var selectedEndDate = _extends({}, endDate, {
        timing: timing,
        moment: timing < 0 ? RelativeConstants.START : RelativeConstants.END
      });

      _this.setState({
        endDate: selectedEndDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTimingBlur", function () {
      var endDate = _this.state.endDate;
      var timing = Number.isNaN(Number(endDate.timing)) ? 0 : Number(endDate.timing);

      _this.handleEndDateChange(_extends({}, endDate, {
        timing: timing
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleGranularityChange", function (unit) {
      var endDate = _this.state.endDate;

      var selectedEndDate = _extends({}, endDate, {
        unit: unit.value
      });

      _this.handleEndDateChange(selectedEndDate);
    });

    var _endDate = props.endDate,
        _startDate = props.startDate;
    _this.state = {
      endDate: _endDate,
      startDate: _startDate
    };
    return _this;
  }

  var _proto = Period.prototype;

  _proto.render = function render() {
    var translations = this.props.translations;
    var startDateOptions = relativeDateOptions(translate(translations, 'dates'));
    var _this$state = this.state,
        endDate = _this$state.endDate,
        startDate = _this$state.startDate;
    var granularities = this.getGranularityOptions();
    return React.createElement(PeriodSection, null, React.createElement(DateSection, null, React.createElement(Content.InputColumn, {
      className: "period-start-date",
      id: "periodStartDate",
      label: translate(translations, 'from')
    }, React.createElement(FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleStartDateChange,
      options: startDateOptions,
      value: startDate
    })))), React.createElement(Hyphen, null), React.createElement(CountSection, {
      className: "period-end-date",
      id: "periodEndDate",
      label: translate(translations, 'to')
    }, React.createElement(Primitive.Input, {
      value: endDate.timing,
      type: "number",
      onBlur: this.handleTimingBlur,
      onChange: this.handleTimingChange
    })), React.createElement(GranularitySection, {
      className: "period-granularity",
      id: "periodGranularity"
    }, React.createElement(FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleGranularityChange,
      options: granularities,
      value: this.getSelectedGranularity(granularities, endDate.unit)
    }))));
  };

  return Period;
}(React.PureComponent);

export { Period as default };
Period.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsIlByaW1pdGl2ZSIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJmb3JtYXRMYWJlbCIsIkh5cGhlbiIsInByb3BUeXBlcyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwicmVsYXRpdmVEYXRlT3B0aW9ucyIsInRyYW5zbGF0ZSIsIlBlcmlvZFNlY3Rpb24iLCJkaXYiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIklucHV0Q29sdW1uIiwiR3JhbnVsYXJpdHlTZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiUGVyaW9kIiwicHJvcHMiLCJ0cmFuc2xhdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiREFZIiwiV0VFS0RBWSIsIldFRUsiLCJNT05USCIsImdyYW51bGFyaXRpZXMiLCJmaW5kIiwiZ3JhbnVsYXJpdHkiLCJlbmREYXRlIiwibW9tZW50IiwidGltaW5nIiwiU1RBUlQiLCJFTkQiLCJzdGFydERhdGUiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsInN0YXRlIiwiaW5pdFN0YXJ0RGF0ZSIsImRhdGUiLCJpbml0RW5kRGF0ZSIsInNldFN0YXRlIiwicGVyaW9kIiwib25DaGFuZ2UiLCJzZWxlY3RlZEVuZERhdGUiLCJldmVudCIsInRhcmdldCIsIk51bWJlciIsImlzTmFOIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsInVuaXQiLCJyZW5kZXIiLCJzdGFydERhdGVPcHRpb25zIiwiZ2V0R3JhbnVsYXJpdHlPcHRpb25zIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwiaGFuZGxlVGltaW5nQmx1ciIsImhhbmRsZVRpbWluZ0NoYW5nZSIsImhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlIiwiZ2V0U2VsZWN0ZWRHcmFudWxhcml0eSIsIlB1cmVDb21w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QkYsQ0FERjtBQTRDRCxHOzs7RUFqTGlDckQsS0FBSyxDQUFDOEQsYTs7U0FBckJ6QyxNO0FBc0xyQkEsTUFBTSxDQUFDZCxZQUFQLEdBQXNCQSxZQUF0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRmxvYXRpbmdTZWxlY3QgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1mbG9hdGluZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udGVudCwgUHJpbWl0aXZlLCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBmb3JtYXRMYWJlbCBmcm9tICcuL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBSZWxhdGl2ZUNvbnN0YW50cyBmcm9tICcuLi9yZWxhdGl2ZS9jb25zdGFudHMnO1xuaW1wb3J0IHJlbGF0aXZlRGF0ZU9wdGlvbnMgZnJvbSAnLi4vcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBQZXJpb2RTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG5jb25zdCBDb3VudFNlY3Rpb24gPSBzdHlsZWQoQ29udGVudC5JbnB1dENvbHVtbilgXG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuYDtcblxuY29uc3QgR3JhbnVsYXJpdHlTZWN0aW9uID0gc3R5bGVkKENvbnRlbnQuSW5wdXRDb2x1bW4pYFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJpb2QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBzdGFydERhdGUsXG4gICAgfTtcbiAgfVxuXG4gIGdldEdyYW51bGFyaXR5T3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RheScsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLkRBWSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnd2Vla2RheScsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLldFRUtEQVksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3dlZWsnLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5XRUVLLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdtb250aCcsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLk1PTlRILFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xuXG4gIGdldFNlbGVjdGVkR3JhbnVsYXJpdHkgPSAoZ3JhbnVsYXJpdGllcywgdmFsdWUpID0+IChcbiAgICBncmFudWxhcml0aWVzLmZpbmQoZ3JhbnVsYXJpdHkgPT4gZ3JhbnVsYXJpdHkudmFsdWUgPT09IHZhbHVlKSB8fCBncmFudWxhcml0aWVzWzBdXG4gICk7XG5cbiAgaW5pdEVuZERhdGUgPSBlbmREYXRlID0+IChcbiAgICBlbmREYXRlLm1vbWVudCA/IGVuZERhdGUgOlxuICAgICAge1xuICAgICAgICAuLi5lbmREYXRlLFxuICAgICAgICBtb21lbnQ6IGVuZERhdGUudGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgICAgfVxuICApO1xuXG4gIGluaXRTdGFydERhdGUgPSBzdGFydERhdGUgPT4gKFxuICAgIHN0YXJ0RGF0ZS52YWx1ZSAmJiBzdGFydERhdGUudmFsdWUubW9tZW50ID8gc3RhcnREYXRlIDpcbiAgICAgIHtcbiAgICAgICAgLi4uc3RhcnREYXRlLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIC4uLnN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgICAgICBtb21lbnQ6IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJULFxuICAgICAgICB9LFxuICAgICAgfVxuICApO1xuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChzZWxlY3RlZFN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMuaW5pdFN0YXJ0RGF0ZShzZWxlY3RlZFN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuaW5pdEVuZERhdGUoZW5kRGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSB9KTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IGRhdGUsXG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChzZWxlY3RlZEVuZERhdGUpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5pbml0U3RhcnREYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHRoaXMuaW5pdEVuZERhdGUoc2VsZWN0ZWRFbmREYXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0ZS52YWx1ZSxcbiAgICAgICAgcGVyaW9kOiB7XG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRpbWluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHRpbWluZyxcbiAgICAgIG1vbWVudDogdGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGU6IHNlbGVjdGVkRW5kRGF0ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0JsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRpbWluZyA9IE51bWJlci5pc05hTihOdW1iZXIoZW5kRGF0ZS50aW1pbmcpKSA/IDAgOiBOdW1iZXIoZW5kRGF0ZS50aW1pbmcpO1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZSh7IC4uLmVuZERhdGUsIHRpbWluZyB9KTtcbiAgfVxuXG4gIGhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlID0gKHVuaXQpID0+IHtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHVuaXQ6IHVuaXQudmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2Uoc2VsZWN0ZWRFbmREYXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGFydERhdGVPcHRpb25zID0gcmVsYXRpdmVEYXRlT3B0aW9ucyh0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZ3JhbnVsYXJpdGllcyA9IHRoaXMuZ2V0R3JhbnVsYXJpdHlPcHRpb25zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmlvZFNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJwZXJpb2RTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdmcm9tJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXJ0RGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8Q291bnRTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWVuZC1kYXRlXCJcbiAgICAgICAgICBpZD1cInBlcmlvZEVuZERhdGVcIlxuICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAndG8nKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQcmltaXRpdmUuSW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlLnRpbWluZ31cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZVRpbWluZ0JsdXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1pbmdDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db3VudFNlY3Rpb24+XG4gICAgICAgIDxHcmFudWxhcml0eVNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtZ3JhbnVsYXJpdHlcIlxuICAgICAgICAgIGlkPVwicGVyaW9kR3JhbnVsYXJpdHlcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHcmFudWxhcml0eUNoYW5nZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e2dyYW51bGFyaXRpZXN9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTZWxlY3RlZEdyYW51bGFyaXR5KGdyYW51bGFyaXRpZXMsIGVuZERhdGUudW5pdCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmFudWxhcml0eVNlY3Rpb24+XG4gICAgICA8L1BlcmlvZFNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5QZXJpb2QucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5QZXJpb2QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19