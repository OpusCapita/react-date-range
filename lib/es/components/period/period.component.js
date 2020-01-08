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
  var data = _taggedTemplateLiteralLoose(["\n  width: 80px;\n  margin-bottom: 0;\n  input {\n    border-color: ", ";\n  }\n"]);

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
var CountSection = styled(Content.InputColumn)(_templateObject2(), theme.colors.grey3);
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
      var _this$props = _this.props,
          translations = _this$props.translations,
          onChange = _this$props.onChange;
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
      onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (selectedEndDate) {
      var _this$props2 = _this.props,
          translations = _this$props2.translations,
          onChange = _this$props2.onChange;
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

      onChange(state);
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
      value: startDate,
      classNamePrefix: "daterange-select"
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
      value: this.getSelectedGranularity(granularities, endDate.unit),
      classNamePrefix: "daterange-select"
    }))));
  };

  return Period;
}(React.PureComponent);

export { Period as default };
Period.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsIlByaW1pdGl2ZSIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJmb3JtYXRMYWJlbCIsIkh5cGhlbiIsInByb3BUeXBlcyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwicmVsYXRpdmVEYXRlT3B0aW9ucyIsInRyYW5zbGF0ZSIsIlBlcmlvZFNlY3Rpb24iLCJkaXYiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIklucHV0Q29sdW1uIiwiY29sb3JzIiwiZ3JleTMiLCJHcmFudWxhcml0eVNlY3Rpb24iLCJoYWxmR3V0dGVyV2lkdGgiLCJQZXJpb2QiLCJwcm9wcyIsInRyYW5zbGF0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJEQVkiLCJXRUVLREFZIiwiV0VFSyIsIk1PTlRIIiwiZ3JhbnVsYXJpdGllcyIsImZpbmQiLCJncmFudWxhcml0eSIsImVuZERhdGUiLCJtb21lbnQiLCJ0aW1pbmciLCJTVEFSVCIsIkVORCIsInN0YXJ0RGF0ZSIsInNlbGVjdGVkU3RhcnREYXRlIiwib25DaGFuZ2UiLCJzdGF0ZSIsImluaXRTdGFydERhdGUiLCJkYXRlIiwiaW5pdEVuZERhdGUiLCJzZXRTdGF0ZSIsInBlcmlvZCIsInNlbGVjdGVkRW5kRGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwiTnVtYmVyIiwiaXNOYU4iLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwidW5pdCIsInJlbmRlciIsInN0YXJ0RGF0ZU9wdGlvbnMiLCJnZXRHcmFudWxhcml0eU9wdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJoYW5kbGVUaW1pbmdCbHVyIiwiaGFuZGxlVGltaW5nQ2hhbmdlIiwiaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2UiLCJnZXRTZWxlY3RlZEdyYW51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QSxRQUFRLEVBQUUsS0FBS3NDLHVCQUhqQjtBQUlFLE1BQUEsT0FBTyxFQUFFOUIsYUFKWDtBQUtFLE1BQUEsS0FBSyxFQUFFLEtBQUsrQixzQkFBTCxDQUE0Qi9CLGFBQTVCLEVBQTJDRyxPQUFPLENBQUNvQixJQUFuRCxDQUxUO0FBTUUsTUFBQSxlQUFlLEVBQUM7QUFObEIsT0FKRixDQTlCRixDQURGO0FBOENELEc7OztFQWpMaUN2RCxLQUFLLENBQUNnRSxhOztTQUFyQnpDLE07QUFzTHJCQSxNQUFNLENBQUNoQixZQUFQLEdBQXNCQSxZQUF0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRmxvYXRpbmdTZWxlY3QgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1mbG9hdGluZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udGVudCwgUHJpbWl0aXZlLCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBmb3JtYXRMYWJlbCBmcm9tICcuL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBSZWxhdGl2ZUNvbnN0YW50cyBmcm9tICcuLi9yZWxhdGl2ZS9jb25zdGFudHMnO1xuaW1wb3J0IHJlbGF0aXZlRGF0ZU9wdGlvbnMgZnJvbSAnLi4vcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBQZXJpb2RTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG5jb25zdCBDb3VudFNlY3Rpb24gPSBzdHlsZWQoQ29udGVudC5JbnB1dENvbHVtbilgXG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBpbnB1dCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gIH1cbmA7XG5cbmNvbnN0IEdyYW51bGFyaXR5U2VjdGlvbiA9IHN0eWxlZChDb250ZW50LklucHV0Q29sdW1uKWBcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHdpZHRoOiAxNDBweDtcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyaW9kIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgc3RhcnREYXRlLFxuICAgIH07XG4gIH1cblxuICBnZXRHcmFudWxhcml0eU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXknLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5EQVksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3dlZWtkYXknLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5XRUVLREFZLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICd3ZWVrJywgJ3BsdXJhbCcpLFxuICAgICAgICB2YWx1ZTogUmVsYXRpdmVDb25zdGFudHMuV0VFSyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnbW9udGgnLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5NT05USCxcbiAgICAgIH0sXG4gICAgXTtcbiAgfTtcblxuICBnZXRTZWxlY3RlZEdyYW51bGFyaXR5ID0gKGdyYW51bGFyaXRpZXMsIHZhbHVlKSA9PiAoXG4gICAgZ3JhbnVsYXJpdGllcy5maW5kKChncmFudWxhcml0eSkgPT4gZ3JhbnVsYXJpdHkudmFsdWUgPT09IHZhbHVlKSB8fCBncmFudWxhcml0aWVzWzBdXG4gICk7XG5cbiAgaW5pdEVuZERhdGUgPSAoZW5kRGF0ZSkgPT4gKFxuICAgIGVuZERhdGUubW9tZW50ID8gZW5kRGF0ZSA6IHtcbiAgICAgIC4uLmVuZERhdGUsXG4gICAgICBtb21lbnQ6IGVuZERhdGUudGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgIH1cbiAgKTtcblxuICBpbml0U3RhcnREYXRlID0gKHN0YXJ0RGF0ZSkgPT4gKFxuICAgIHN0YXJ0RGF0ZS52YWx1ZSAmJiBzdGFydERhdGUudmFsdWUubW9tZW50ID8gc3RhcnREYXRlIDoge1xuICAgICAgLi4uc3RhcnREYXRlLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgLi4uc3RhcnREYXRlLnZhbHVlLFxuICAgICAgICBtb21lbnQ6IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJULFxuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKHNlbGVjdGVkU3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMuaW5pdFN0YXJ0RGF0ZShzZWxlY3RlZFN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuaW5pdEVuZERhdGUoZW5kRGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSB9KTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IGRhdGUsXG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIG9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRFbmREYXRlKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmluaXRTdGFydERhdGUoc3RhcnREYXRlKTtcbiAgICBjb25zdCBlbmREYXRlID0gdGhpcy5pbml0RW5kRGF0ZShzZWxlY3RlZEVuZERhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgdmFsdWU6IGZvcm1hdExhYmVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSxcbiAgICAgICAgc3RhcnREYXRlOiBkYXRlLnZhbHVlLFxuICAgICAgICBwZXJpb2Q6IHtcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIG9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRpbWluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHRpbWluZyxcbiAgICAgIG1vbWVudDogdGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGU6IHNlbGVjdGVkRW5kRGF0ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0JsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRpbWluZyA9IE51bWJlci5pc05hTihOdW1iZXIoZW5kRGF0ZS50aW1pbmcpKSA/IDAgOiBOdW1iZXIoZW5kRGF0ZS50aW1pbmcpO1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZSh7IC4uLmVuZERhdGUsIHRpbWluZyB9KTtcbiAgfVxuXG4gIGhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlID0gKHVuaXQpID0+IHtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHVuaXQ6IHVuaXQudmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2Uoc2VsZWN0ZWRFbmREYXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGFydERhdGVPcHRpb25zID0gcmVsYXRpdmVEYXRlT3B0aW9ucyh0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZ3JhbnVsYXJpdGllcyA9IHRoaXMuZ2V0R3JhbnVsYXJpdHlPcHRpb25zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmlvZFNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJwZXJpb2RTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdmcm9tJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXJ0RGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZVByZWZpeD1cImRhdGVyYW5nZS1zZWxlY3RcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPENvdW50U2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1lbmQtZGF0ZVwiXG4gICAgICAgICAgaWQ9XCJwZXJpb2RFbmREYXRlXCJcbiAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3RvJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8UHJpbWl0aXZlLklucHV0XG4gICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZS50aW1pbmd9XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVUaW1pbmdCbHVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltaW5nQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ291bnRTZWN0aW9uPlxuICAgICAgICA8R3JhbnVsYXJpdHlTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWdyYW51bGFyaXR5XCJcbiAgICAgICAgICBpZD1cInBlcmlvZEdyYW51bGFyaXR5XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2V9XG4gICAgICAgICAgICBvcHRpb25zPXtncmFudWxhcml0aWVzfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0U2VsZWN0ZWRHcmFudWxhcml0eShncmFudWxhcml0aWVzLCBlbmREYXRlLnVuaXQpfVxuICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwiZGF0ZXJhbmdlLXNlbGVjdFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmFudWxhcml0eVNlY3Rpb24+XG4gICAgICA8L1BlcmlvZFNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5QZXJpb2QucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5QZXJpb2QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19