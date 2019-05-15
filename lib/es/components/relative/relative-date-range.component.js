function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ", " 0 0 0;\n"]);

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
import { Content, theme } from '@opuscapita/oc-cm-common-layouts';
import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';
import Constants from './constants';
import relativeOptions from './relative-options';
import translate from '../../translations/translate';
var RelativeRangeSection = styled.div(_templateObject(), theme.gutterWidth);

var RelativeDateRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(RelativeDateRange, _React$PureComponent);

  function RelativeDateRange(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "filterEndDateOptions", function (startDate, endDateOptions) {
      var options = startDate.past ? endDateOptions : endDateOptions.filter(function (date) {
        return !date.past;
      });
      return options.filter(function (date) {
        return date.granularity !== startDate.granularity || startDate.order <= date.order;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterStartDateOptions", function (endDate, startDateOptions) {
      var options = endDate.past ? startDateOptions.filter(function (date) {
        return date.past;
      }) : startDateOptions;
      return options.filter(function (date) {
        return date.granularity !== endDate.granularity || date.order <= endDate.order;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (selectedStartDate) {
      var startDate = selectedStartDate.value.moment ? selectedStartDate : Object.assign({}, selectedStartDate, {
        value: _extends({}, selectedStartDate.value, {
          moment: Constants.START
        })
      });

      var endDateOptions = _this.filterEndDateOptions(startDate, _this.state.endDateOptions);

      var endDate = _this.state.endDate;

      _this.setState({
        endDateOptions: endDateOptions,
        startDate: startDate
      });

      var state = {
        startDate: startDate.value,
        relativeRange: {
          startDate: startDate
        }
      };

      if (endDate) {
        var endDateValue = endDate.value && !endDate.value.moment ? _extends({}, endDate.value, {
          moment: Constants.END
        }) : endDate.value;
        state = _extends({}, state, {
          value: startDate.label + " - " + (endDate.label || ''),
          endDate: endDateValue,
          relativeRange: _extends({}, state.relativeRange, {
            endDate: endDate
          })
        });
      }

      _this.props.onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (selectedEndDate) {
      var endDate = selectedEndDate.value.moment ? selectedEndDate : Object.assign({}, selectedEndDate, {
        value: _extends({}, selectedEndDate.value, {
          moment: Constants.END
        })
      });

      var startDateOptions = _this.filterStartDateOptions(endDate, _this.state.startDateOptions);

      var startDate = _this.state.startDate;

      _this.setState({
        startDateOptions: startDateOptions,
        endDate: endDate
      });

      var state = {
        endDate: endDate.value,
        relativeRange: {
          endDate: endDate
        }
      };

      if (startDate) {
        var startDateValue = startDate.value && !startDate.value.moment ? _extends({}, startDate.value, {
          moment: Constants.START
        }) : startDate.value;
        state = _extends({}, state, {
          value: (startDate.label || '') + " - " + endDate.label,
          startDate: startDateValue,
          relativeRange: _extends({}, state.relativeRange, {
            startDate: startDate
          })
        });
      }

      _this.props.onChange(state);
    });

    var _endDate = props.endDate,
        _startDate = props.startDate,
        translations = props.translations;

    var _options = relativeOptions(translate(translations, 'dates'));

    _this.state = {
      endDate: _endDate,
      endDateOptions: _startDate ? _this.filterEndDateOptions(_startDate, _options) : _options,
      startDate: _startDate,
      startDateOptions: _endDate ? _this.filterStartDateOptions(_endDate, _options) : _options
    };
    return _this;
  }

  var _proto = RelativeDateRange.prototype;

  _proto.render = function render() {
    var _this$state = this.state,
        startDateOptions = _this$state.startDateOptions,
        endDateOptions = _this$state.endDateOptions,
        startDate = _this$state.startDate,
        endDate = _this$state.endDate;
    var translations = this.props.translations;
    return React.createElement(RelativeRangeSection, null, React.createElement(DateSection, null, React.createElement(Content.InputColumn, {
      className: "relative-start-date",
      id: "relativeStartDate",
      label: translate(translations, 'startDate')
    }, React.createElement(FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleStartDateChange,
      options: startDateOptions,
      placeholder: translations.startDatePlaceholder,
      value: startDate
    })))), React.createElement(Hyphen, null), React.createElement(DateSection, null, React.createElement(Content.InputColumn, {
      className: "relative-end-date",
      id: "relativeEndDate",
      label: translate(translations, 'endDate')
    }, React.createElement(FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleEndDateChange,
      options: endDateOptions,
      placeholder: translations.endDatePlaceholder,
      value: endDate
    })))));
  };

  return RelativeDateRange;
}(React.PureComponent);

export { RelativeDateRange as default };
RelativeDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJIeXBoZW4iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJDb25zdGFudHMiLCJyZWxhdGl2ZU9wdGlvbnMiLCJ0cmFuc2xhdGUiLCJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsImRpdiIsImd1dHRlcldpZHRoIiwiUmVsYXRpdmVEYXRlUmFuZ2UiLCJwcm9wcyIsInN0YXJ0RGF0ZSIsImVuZERhdGVPcHRpb25zIiwib3B0aW9ucyIsInBhc3QiLCJmaWx0ZXIiLCJkYXRlIiwiZ3JhbnVsYXJpdHkiLCJvcmRlciIsImVuZERhdGUiLCJzdGFydERhdGVPcHRpb25zIiwic2VsZWN0ZWRTdGFydERhdGUiLCJ2YWx1ZSIsIm1vbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIlNUQVJUIiwiZmlsdGVyRW5kRGF0ZU9wdGlvbnMiLCJzdGF0ZSIsInNldFN0YXRlIiwicmVsYXRpdmVSYW5nZSIsImVuZERhdGVWYWx1ZSIsIkVORCIsImxhYmVsIiwib25DaGFuZ2UiLCJzZWxlY3RlZEVuZERhdGUiLCJmaWx0ZXJTdGFydERhdGVPcHRpb25zIiwic3RhcnREYXRlVmFsdWUiLCJ0cmFuc2xhdGlvbnMiLCJyZW5kZXIiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJzdGFydERhdGVQbGFjZWhvbGRlciIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJlbmREYXRlUGxhY2Vob2xkZXIiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBRUEsU0FBU0MsY0FBVCxRQUEr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S0FBS2dDLG1CQUhqQjtBQUlFLE1BQUEsT0FBTyxFQUFFOUIsY0FKWDtBQUtFLE1BQUEsV0FBVyxFQUFFMEIsWUFBWSxDQUFDSyxrQkFMNUI7QUFNRSxNQUFBLEtBQUssRUFBRXhCO0FBTlQsT0FMRixDQURGLENBbEJGLENBREY7QUFxQ0QsRzs7O0VBako0Q3pCLEtBQUssQ0FBQ2tELGE7O1NBQWhDbkMsaUI7QUFzSnJCQSxpQkFBaUIsQ0FBQ1AsWUFBbEIsR0FBaUNBLFlBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbG9hdGluZ1NlbGVjdCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWZsb2F0aW5nLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250ZW50LCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCByZWxhdGl2ZU9wdGlvbnMgZnJvbSAnLi9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFJlbGF0aXZlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAwIDA7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxhdGl2ZURhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlLCB0cmFuc2xhdGlvbnMgfSA9IHByb3BzO1xuICAgIGNvbnN0IG9wdGlvbnMgPSByZWxhdGl2ZU9wdGlvbnModHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgZW5kRGF0ZU9wdGlvbnM6IHN0YXJ0RGF0ZSA/XG4gICAgICAgIHRoaXMuZmlsdGVyRW5kRGF0ZU9wdGlvbnMoc3RhcnREYXRlLCBvcHRpb25zKSA6XG4gICAgICAgIG9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBzdGFydERhdGVPcHRpb25zOiBlbmREYXRlID9cbiAgICAgICAgdGhpcy5maWx0ZXJTdGFydERhdGVPcHRpb25zKGVuZERhdGUsIG9wdGlvbnMpIDpcbiAgICAgICAgb3B0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgZmlsdGVyRW5kRGF0ZU9wdGlvbnMgPSAoc3RhcnREYXRlLCBlbmREYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzdGFydERhdGUucGFzdCA/IGVuZERhdGVPcHRpb25zIDpcbiAgICAgIGVuZERhdGVPcHRpb25zLmZpbHRlcihkYXRlID0+ICFkYXRlLnBhc3QpO1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihkYXRlID0+XG4gICAgICBkYXRlLmdyYW51bGFyaXR5ICE9PSBzdGFydERhdGUuZ3JhbnVsYXJpdHkgfHxcbiAgICAgIHN0YXJ0RGF0ZS5vcmRlciA8PSBkYXRlLm9yZGVyKTtcbiAgfVxuXG4gIGZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMgPSAoZW5kRGF0ZSwgc3RhcnREYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBlbmREYXRlLnBhc3QgP1xuICAgICAgc3RhcnREYXRlT3B0aW9ucy5maWx0ZXIoZGF0ZSA9PiBkYXRlLnBhc3QpIDpcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnM7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKGRhdGUgPT5cbiAgICAgIGRhdGUuZ3JhbnVsYXJpdHkgIT09IGVuZERhdGUuZ3JhbnVsYXJpdHkgfHxcbiAgICAgIGRhdGUub3JkZXIgPD0gZW5kRGF0ZS5vcmRlcik7XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRTdGFydERhdGUpID0+IHtcbiAgICBjb25zdCBzdGFydERhdGUgPSBzZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZFN0YXJ0RGF0ZSA6XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSwgc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgIHsgdmFsdWU6IHsgLi4uc2VsZWN0ZWRTdGFydERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLlNUQVJUIH0gfSxcbiAgICAgICk7XG4gICAgY29uc3QgZW5kRGF0ZU9wdGlvbnMgPSB0aGlzLmZpbHRlckVuZERhdGVPcHRpb25zKHN0YXJ0RGF0ZSwgdGhpcy5zdGF0ZS5lbmREYXRlT3B0aW9ucyk7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlT3B0aW9ucywgc3RhcnREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLnZhbHVlLFxuICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGVuZERhdGVWYWx1ZSA9IGVuZERhdGUudmFsdWUgJiYgIWVuZERhdGUudmFsdWUubW9tZW50XG4gICAgICAgID8geyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5FTkQgfVxuICAgICAgICA6IGVuZERhdGUudmFsdWU7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWx9IC0gJHtlbmREYXRlLmxhYmVsIHx8ICcnfWAsXG4gICAgICAgIGVuZERhdGU6IGVuZERhdGVWYWx1ZSxcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIC4uLnN0YXRlLnJlbGF0aXZlUmFuZ2UsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChzZWxlY3RlZEVuZERhdGUpID0+IHtcbiAgICBjb25zdCBlbmREYXRlID0gc2VsZWN0ZWRFbmREYXRlLnZhbHVlLm1vbWVudCA/IHNlbGVjdGVkRW5kRGF0ZSA6XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSwgc2VsZWN0ZWRFbmREYXRlLFxuICAgICAgICB7IHZhbHVlOiB7IC4uLnNlbGVjdGVkRW5kRGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuRU5EIH0gfSxcbiAgICAgICk7XG4gICAgY29uc3Qgc3RhcnREYXRlT3B0aW9ucyA9IHRoaXMuZmlsdGVyU3RhcnREYXRlT3B0aW9ucyhlbmREYXRlLCB0aGlzLnN0YXRlLnN0YXJ0RGF0ZU9wdGlvbnMpO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGVPcHRpb25zLCBlbmREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IGVuZERhdGUudmFsdWUsXG4gICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgY29uc3Qgc3RhcnREYXRlVmFsdWUgPSBzdGFydERhdGUudmFsdWUgJiYgIXN0YXJ0RGF0ZS52YWx1ZS5tb21lbnRcbiAgICAgICAgPyB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuU1RBUlQgfVxuICAgICAgICA6IHN0YXJ0RGF0ZS52YWx1ZTtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbCB8fCAnJ30gLSAke2VuZERhdGUubGFiZWx9YCxcbiAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGVWYWx1ZSxcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIC4uLnN0YXRlLnJlbGF0aXZlUmFuZ2UsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RhcnREYXRlT3B0aW9ucyxcbiAgICAgIGVuZERhdGVPcHRpb25zLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVsYXRpdmVSYW5nZVNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cInJlbGF0aXZlU3RhcnREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnc3RhcnREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXJ0RGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGlvbnMuc3RhcnREYXRlUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlLWVuZC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicmVsYXRpdmVFbmREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZW5kRGF0ZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17ZW5kRGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGlvbnMuZW5kRGF0ZVBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgPC9SZWxhdGl2ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cblJlbGF0aXZlRGF0ZVJhbmdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuUmVsYXRpdmVEYXRlUmFuZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19