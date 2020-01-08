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
      var onChange = _this.props.onChange;
      var endDateOptionsState = _this.state.endDateOptions;
      var startDate = selectedStartDate.value.moment ? selectedStartDate : _extends({}, selectedStartDate, {
        value: _extends({}, selectedStartDate.value, {
          moment: Constants.START
        })
      });

      var endDateOptions = _this.filterEndDateOptions(startDate, endDateOptionsState);

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

      onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (selectedEndDate) {
      var onChange = _this.props.onChange;
      var startDateOptionsState = _this.state.startDateOptions;
      var endDate = selectedEndDate.value.moment ? selectedEndDate : _extends({}, selectedEndDate, {
        value: _extends({}, selectedEndDate.value, {
          moment: Constants.END
        })
      });

      var startDateOptions = _this.filterStartDateOptions(endDate, startDateOptionsState);

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

      onChange(state);
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
      value: startDate,
      classNamePrefix: "daterange-select"
    })))), React.createElement(Hyphen, null), React.createElement(DateSection, null, React.createElement(Content.InputColumn, {
      className: "relative-end-date",
      id: "relativeEndDate",
      label: translate(translations, 'endDate')
    }, React.createElement(FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleEndDateChange,
      options: endDateOptions,
      placeholder: translations.endDatePlaceholder,
      value: endDate,
      classNamePrefix: "daterange-select"
    })))));
  };

  return RelativeDateRange;
}(React.PureComponent);

export { RelativeDateRange as default };
RelativeDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJIeXBoZW4iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJDb25zdGFudHMiLCJyZWxhdGl2ZU9wdGlvbnMiLCJ0cmFuc2xhdGUiLCJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsImRpdiIsImd1dHRlcldpZHRoIiwiUmVsYXRpdmVEYXRlUmFuZ2UiLCJwcm9wcyIsInN0YXJ0RGF0ZSIsImVuZERhdGVPcHRpb25zIiwib3B0aW9ucyIsInBhc3QiLCJmaWx0ZXIiLCJkYXRlIiwiZ3JhbnVsYXJpdHkiLCJvcmRlciIsImVuZERhdGUiLCJzdGFydERhdGVPcHRpb25zIiwic2VsZWN0ZWRTdGFydERhdGUiLCJvbkNoYW5nZSIsImVuZERhdGVPcHRpb25zU3RhdGUiLCJzdGF0ZSIsInZhbHVlIiwibW9tZW50IiwiU1RBUlQiLCJmaWx0ZXJFbmREYXRlT3B0aW9ucyIsInNldFN0YXRlIiwicmVsYXRpdmVSYW5nZSIsImVuZERhdGVWYWx1ZSIsIkVORCIsImxhYmVsIiwic2VsZWN0ZWRFbmREYXRlIiwic3RhcnREYXRlT3B0aW9uc1N0YXRlIiwiZmlsdGVyU3RhcnREYXRlT3B0aW9ucyIsInN0YXJ0RGF0ZVZhbHVlIiwidHJhbnNsYXRpb25zIiwicmVuZGVyIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwic3RhcnREYXRlUGxhY2Vob2xkZXIiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwiZW5kRGF0ZVBsYWNlaG9sZGVyIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1C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RU4sU0FBUyxDQUFDaUMsWUFBRCxFQUFlLFNBQWY7QUFIbEIsT0FLRSxvQkFBQyxjQUFELGVBQ00sS0FBSzVCLEtBRFg7QUFFRSxNQUFBLFNBQVMsRUFBRSxLQUZiO0FBR0UsTUFBQSxRQUFRLEVBQUUsS0FBS2dDLG1CQUhqQjtBQUlFLE1BQUEsT0FBTyxFQUFFOUIsY0FKWDtBQUtFLE1BQUEsV0FBVyxFQUFFMEIsWUFBWSxDQUFDSyxrQkFMNUI7QUFNRSxNQUFBLEtBQUssRUFBRXhCLE9BTlQ7QUFPRSxNQUFBLGVBQWUsRUFBQztBQVBsQixPQUxGLENBREYsQ0FuQkYsQ0FERjtBQXVDRCxHOzs7RUFySjRDekIsS0FBSyxDQUFDa0QsYTs7U0FBaENuQyxpQjtBQTBKckJBLGlCQUFpQixDQUFDUCxZQUFsQixHQUFpQ0EsWUFBakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEZsb2F0aW5nU2VsZWN0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZmxvYXRpbmctc2VsZWN0JztcbmltcG9ydCB7IENvbnRlbnQsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHJlbGF0aXZlT3B0aW9ucyBmcm9tICcuL3JlbGF0aXZlLW9wdGlvbnMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgUmVsYXRpdmVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0aXZlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHJlbGF0aXZlT3B0aW9ucyh0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBlbmREYXRlT3B0aW9uczogc3RhcnREYXRlXG4gICAgICAgID8gdGhpcy5maWx0ZXJFbmREYXRlT3B0aW9ucyhzdGFydERhdGUsIG9wdGlvbnMpXG4gICAgICAgIDogb3B0aW9ucyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnM6IGVuZERhdGVcbiAgICAgICAgPyB0aGlzLmZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMoZW5kRGF0ZSwgb3B0aW9ucylcbiAgICAgICAgOiBvcHRpb25zLFxuICAgIH07XG4gIH1cblxuICBmaWx0ZXJFbmREYXRlT3B0aW9ucyA9IChzdGFydERhdGUsIGVuZERhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHN0YXJ0RGF0ZS5wYXN0ID8gZW5kRGF0ZU9wdGlvbnNcbiAgICAgIDogZW5kRGF0ZU9wdGlvbnMuZmlsdGVyKChkYXRlKSA9PiAhZGF0ZS5wYXN0KTtcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoKGRhdGUpID0+IGRhdGUuZ3JhbnVsYXJpdHkgIT09IHN0YXJ0RGF0ZS5ncmFudWxhcml0eVxuICAgICAgfHwgc3RhcnREYXRlLm9yZGVyIDw9IGRhdGUub3JkZXIpO1xuICB9XG5cbiAgZmlsdGVyU3RhcnREYXRlT3B0aW9ucyA9IChlbmREYXRlLCBzdGFydERhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGVuZERhdGUucGFzdFxuICAgICAgPyBzdGFydERhdGVPcHRpb25zLmZpbHRlcigoZGF0ZSkgPT4gZGF0ZS5wYXN0KVxuICAgICAgOiBzdGFydERhdGVPcHRpb25zO1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigoZGF0ZSkgPT4gZGF0ZS5ncmFudWxhcml0eSAhPT0gZW5kRGF0ZS5ncmFudWxhcml0eVxuICAgICAgfHwgZGF0ZS5vcmRlciA8PSBlbmREYXRlLm9yZGVyKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChzZWxlY3RlZFN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlT3B0aW9uczogZW5kRGF0ZU9wdGlvbnNTdGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzdGFydERhdGUgPSBzZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZFN0YXJ0RGF0ZVxuICAgICAgOiAoe1xuICAgICAgICAuLi5zZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgICAgdmFsdWU6IHsgLi4uc2VsZWN0ZWRTdGFydERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLlNUQVJUIH0sXG4gICAgICB9KTtcbiAgICBjb25zdCBlbmREYXRlT3B0aW9ucyA9IHRoaXMuZmlsdGVyRW5kRGF0ZU9wdGlvbnMoc3RhcnREYXRlLCBlbmREYXRlT3B0aW9uc1N0YXRlKTtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGVPcHRpb25zLCBzdGFydERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudmFsdWUsXG4gICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZW5kRGF0ZVZhbHVlID0gZW5kRGF0ZS52YWx1ZSAmJiAhZW5kRGF0ZS52YWx1ZS5tb21lbnRcbiAgICAgICAgPyB7IC4uLmVuZERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLkVORCB9XG4gICAgICAgIDogZW5kRGF0ZS52YWx1ZTtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWwgfHwgJyd9YCxcbiAgICAgICAgZW5kRGF0ZTogZW5kRGF0ZVZhbHVlLFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uc3RhdGUucmVsYXRpdmVSYW5nZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChzZWxlY3RlZEVuZERhdGUpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlT3B0aW9uczogc3RhcnREYXRlT3B0aW9uc1N0YXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGVuZERhdGUgPSBzZWxlY3RlZEVuZERhdGUudmFsdWUubW9tZW50ID8gc2VsZWN0ZWRFbmREYXRlXG4gICAgICA6ICh7XG4gICAgICAgIC4uLnNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgdmFsdWU6IHsgLi4uc2VsZWN0ZWRFbmREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5FTkQgfSxcbiAgICAgIH0pO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZU9wdGlvbnMgPSB0aGlzLmZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMoZW5kRGF0ZSwgc3RhcnREYXRlT3B0aW9uc1N0YXRlKTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlT3B0aW9ucywgZW5kRGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlOiBlbmREYXRlLnZhbHVlLFxuICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZVZhbHVlID0gc3RhcnREYXRlLnZhbHVlICYmICFzdGFydERhdGUudmFsdWUubW9tZW50XG4gICAgICAgID8geyAuLi5zdGFydERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLlNUQVJUIH1cbiAgICAgICAgOiBzdGFydERhdGUudmFsdWU7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWwgfHwgJyd9IC0gJHtlbmREYXRlLmxhYmVsfWAsXG4gICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlVmFsdWUsXG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5yZWxhdGl2ZVJhbmdlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIG9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGFydERhdGVPcHRpb25zLFxuICAgICAgZW5kRGF0ZU9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWxhdGl2ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicmVsYXRpdmVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0aW9ucy5zdGFydERhdGVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwiZGF0ZXJhbmdlLXNlbGVjdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlLWVuZC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicmVsYXRpdmVFbmREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZW5kRGF0ZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17ZW5kRGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGlvbnMuZW5kRGF0ZVBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwiZGF0ZXJhbmdlLXNlbGVjdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvUmVsYXRpdmVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5SZWxhdGl2ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblJlbGF0aXZlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==