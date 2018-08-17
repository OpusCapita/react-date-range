var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0;\n  .Select-control {\n    border-radius: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0;\n  .Select-control {\n    border-radius: 0;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';

import { FloatingSelect } from '@opuscapita/react-floating-select';

import DateSection from '../date-section.components';
import Hyphen from '../hyphen.component';
import propTypes from './prop-types';
import defaultProps from './default-props';
import Constants from './constants';

var RelativeRangeSection = styled.div(_templateObject);

var RelativeDateRange = function (_React$PureComponent) {
  _inherits(RelativeDateRange, _React$PureComponent);

  function RelativeDateRange(props) {
    _classCallCheck(this, RelativeDateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.filterEndDateOptions = function (startDate, endDateOptions) {
      var options = startDate.past ? endDateOptions : endDateOptions.filter(function (date) {
        return !date.past;
      });
      return options.filter(function (date) {
        return date.granularity !== startDate.granularity || startDate.order <= date.order;
      });
    };

    _this.filterStartDateOptions = function (endDate, startDateOptions) {
      var options = endDate.past ? startDateOptions.filter(function (date) {
        return date.past;
      }) : startDateOptions;
      return options.filter(function (date) {
        return date.granularity !== endDate.granularity || date.order <= endDate.order;
      });
    };

    _this.handleStartDateChange = function (selectedStartDate) {
      var startDate = selectedStartDate.value.moment ? selectedStartDate : Object.assign({}, selectedStartDate, { value: _extends({}, selectedStartDate.value, { moment: Constants.START }) });
      var endDateOptions = _this.filterEndDateOptions(startDate, _this.state.endDateOptions);
      var endDate = _this.state.endDate;

      _this.setState({ endDateOptions: endDateOptions, startDate: startDate });
      var state = {
        startDate: startDate.value,
        popoverProps: {
          relativeRange: {
            startDate: startDate
          }
        }
      };
      if (endDate) {
        state = _extends({}, state, {
          value: startDate.label + ' - ' + endDate.label,
          endDate: endDate.value,
          popoverProps: {
            relativeRange: _extends({}, state.popoverProps.relativeRange, {
              endDate: endDate
            })
          }
        });
      }
      _this.props.onChange(state);
    };

    _this.handleEndDateChange = function (selectedEndDate) {
      var endDate = selectedEndDate.value.moment ? selectedEndDate : Object.assign({}, selectedEndDate, { value: _extends({}, selectedEndDate.value, { moment: Constants.END }) });
      var startDateOptions = _this.filterStartDateOptions(endDate, _this.state.startDateOptions);
      var startDate = _this.state.startDate;

      _this.setState({ startDateOptions: startDateOptions, endDate: endDate });
      var state = {
        endDate: endDate.value,
        popoverProps: {
          relativeRange: {
            endDate: endDate
          }
        }
      };
      if (startDate) {
        state = _extends({}, state, {
          value: startDate.label + ' - ' + endDate.label,
          startDate: startDate.value,
          popoverProps: {
            relativeRange: _extends({}, state.popoverProps.relativeRange, {
              startDate: startDate
            })
          }
        });
      }
      _this.props.onChange(state);
    };

    _this.state = {
      endDate: props.endDate,
      endDateOptions: props.startDate ? _this.filterEndDateOptions(props.startDate, props.options) : props.options,
      startDate: props.startDate,
      startDateOptions: props.endDate ? _this.filterStartDateOptions(props.endDate, props.options) : props.options
    };
    return _this;
  }

  RelativeDateRange.prototype.render = function render() {
    var _state = this.state,
        startDateOptions = _state.startDateOptions,
        endDateOptions = _state.endDateOptions,
        startDate = _state.startDate,
        endDate = _state.endDate;


    return React.createElement(
      RelativeRangeSection,
      null,
      React.createElement(
        DateSection,
        null,
        React.createElement(
          'label',
          { htmlFor: 'startDate' },
          this.props.translations.startDate
        ),
        React.createElement(FloatingSelect, _extends({}, this.props, {
          clearable: false,
          inputProps: { name: 'startDate' },
          onChange: this.handleStartDateChange,
          options: startDateOptions,
          value: startDate
        }))
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
        React.createElement(FloatingSelect, _extends({}, this.props, {
          clearable: false,
          inputProps: { name: 'endDate' },
          onChange: this.handleEndDateChange,
          options: endDateOptions,
          value: endDate
        }))
      )
    );
  };

  return RelativeDateRange;
}(React.PureComponent);

export { RelativeDateRange as default };


RelativeDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiRGF0ZVNlY3Rpb24iLCJIeXBoZW4iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJDb25zdGFudHMiLCJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsImRpdiIsIlJlbGF0aXZlRGF0ZVJhbmdlIiwicHJvcHMiLCJmaWx0ZXJFbmREYXRlT3B0aW9ucyIsInN0YXJ0RGF0ZSIsImVuZERhdGVPcHRpb25zIiwib3B0aW9ucyIsInBhc3QiLCJmaWx0ZXIiLCJkYXRlIiwiZ3JhbnVsYXJpdHkiLCJvcmRlciIsImZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMiLCJlbmREYXRlIiwic3RhcnREYXRlT3B0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsInNlbGVjdGVkU3RhcnREYXRlIiwidmFsdWUiLCJtb21lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJTVEFSVCIsInN0YXRlIiwic2V0U3RhdGUiLCJwb3BvdmVyUHJvcHMiLCJyZWxhdGl2ZVJhbmdlIiwibGFiZWwiLCJvbkNoYW5nZSIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJzZWxlY3RlZEVuZERhdGUiLCJFTkQiLCJyZW5kZXIiLCJ0cmFuc2xhdGlvbnMiLCJuYW1lIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7O0FBRUEsU0FBU0MsY0FBVCxRQUErQixtQ0FBL0I7O0FBRUEsT0FBT0MsV0FBUCxNQUF3Qiw0QkFBeEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLHFCQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsY0FBdEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6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QUEsWUFBTyxTQUFRLFdBQWY7QUFBNEIsZUFBS1gsS0FBTCxDQUFXOEIsWUFBWCxDQUF3QjVCO0FBQXBELFNBREY7QUFFRSw0QkFBQyxjQUFELGVBQ00sS0FBS0YsS0FEWDtBQUVFLHFCQUFXLEtBRmI7QUFHRSxzQkFBWSxFQUFFK0IsTUFBTSxXQUFSLEVBSGQ7QUFJRSxvQkFBVSxLQUFLbEIscUJBSmpCO0FBS0UsbUJBQVNELGdCQUxYO0FBTUUsaUJBQU9WO0FBTlQ7QUFGRixPQURGO0FBWUUsMEJBQUMsTUFBRCxPQVpGO0FBYUU7QUFBQyxtQkFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU8sU0FBUSxTQUFmO0FBQTBCLGVBQUtGLEtBQUwsQ0FBVzhCLFlBQVgsQ0FBd0JuQjtBQUFsRCxTQURGO0FBRUUsNEJBQUMsY0FBRCxlQUNNLEtBQUtYLEtBRFg7QUFFRSxxQkFBVyxLQUZiO0FBR0Usc0JBQVksRUFBRStCLE1BQU0sU0FBUixFQUhkO0FBSUUsb0JBQVUsS0FBS0wsbUJBSmpCO0FBS0UsbUJBQVN2QixjQUxYO0FBTUUsaUJBQU9RO0FBTlQ7QUFGRjtBQWJGLEtBREY7QUEyQkQsRzs7O0VBckk0Q3RCLE1BQU0yQyxhOztTQUFoQ2pDLGlCOzs7QUEwSXJCQSxrQkFBa0JKLFlBQWxCLEdBQWlDQSxZQUFqQyIsImZpbGUiOiJyZWxhdGl2ZS1kYXRlLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRmxvYXRpbmdTZWxlY3QgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1mbG9hdGluZy1zZWxlY3QnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBSZWxhdGl2ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgLlNlbGVjdC1jb250cm9sIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxhdGl2ZURhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW5kRGF0ZTogcHJvcHMuZW5kRGF0ZSxcbiAgICAgIGVuZERhdGVPcHRpb25zOiBwcm9wcy5zdGFydERhdGUgP1xuICAgICAgICB0aGlzLmZpbHRlckVuZERhdGVPcHRpb25zKHByb3BzLnN0YXJ0RGF0ZSwgcHJvcHMub3B0aW9ucykgOlxuICAgICAgICBwcm9wcy5vcHRpb25zLFxuICAgICAgc3RhcnREYXRlOiBwcm9wcy5zdGFydERhdGUsXG4gICAgICBzdGFydERhdGVPcHRpb25zOiBwcm9wcy5lbmREYXRlID9cbiAgICAgICAgdGhpcy5maWx0ZXJTdGFydERhdGVPcHRpb25zKHByb3BzLmVuZERhdGUsIHByb3BzLm9wdGlvbnMpIDpcbiAgICAgICAgcHJvcHMub3B0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgZmlsdGVyRW5kRGF0ZU9wdGlvbnMgPSAoc3RhcnREYXRlLCBlbmREYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzdGFydERhdGUucGFzdCA/IGVuZERhdGVPcHRpb25zIDpcbiAgICAgIGVuZERhdGVPcHRpb25zLmZpbHRlcihkYXRlID0+ICFkYXRlLnBhc3QpO1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihkYXRlID0+XG4gICAgICBkYXRlLmdyYW51bGFyaXR5ICE9PSBzdGFydERhdGUuZ3JhbnVsYXJpdHkgfHxcbiAgICAgIHN0YXJ0RGF0ZS5vcmRlciA8PSBkYXRlLm9yZGVyKTtcbiAgfVxuXG4gIGZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMgPSAoZW5kRGF0ZSwgc3RhcnREYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBlbmREYXRlLnBhc3QgP1xuICAgICAgc3RhcnREYXRlT3B0aW9ucy5maWx0ZXIoZGF0ZSA9PiBkYXRlLnBhc3QpIDpcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnM7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKGRhdGUgPT5cbiAgICAgIGRhdGUuZ3JhbnVsYXJpdHkgIT09IGVuZERhdGUuZ3JhbnVsYXJpdHkgfHxcbiAgICAgIGRhdGUub3JkZXIgPD0gZW5kRGF0ZS5vcmRlcik7XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRTdGFydERhdGUpID0+IHtcbiAgICBjb25zdCBzdGFydERhdGUgPSBzZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZFN0YXJ0RGF0ZSA6XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSwgc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgIHsgdmFsdWU6IHsgLi4uc2VsZWN0ZWRTdGFydERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLlNUQVJUIH0gfSxcbiAgICAgICk7XG4gICAgY29uc3QgZW5kRGF0ZU9wdGlvbnMgPSB0aGlzLmZpbHRlckVuZERhdGVPcHRpb25zKHN0YXJ0RGF0ZSwgdGhpcy5zdGF0ZS5lbmREYXRlT3B0aW9ucyk7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlT3B0aW9ucywgc3RhcnREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLnZhbHVlLFxuICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKGVuZERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWx9YCxcbiAgICAgICAgZW5kRGF0ZTogZW5kRGF0ZS52YWx1ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgICAgLi4uc3RhdGUucG9wb3ZlclByb3BzLnJlbGF0aXZlUmFuZ2UsXG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRFbmREYXRlKSA9PiB7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHNlbGVjdGVkRW5kRGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZEVuZERhdGUgOlxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sIHNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgeyB2YWx1ZTogeyAuLi5zZWxlY3RlZEVuZERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLkVORCB9IH0sXG4gICAgICApO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZU9wdGlvbnMgPSB0aGlzLmZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMoZW5kRGF0ZSwgdGhpcy5zdGF0ZS5zdGFydERhdGVPcHRpb25zKTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlT3B0aW9ucywgZW5kRGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlOiBlbmREYXRlLnZhbHVlLFxuICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWx9YCxcbiAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudmFsdWUsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLnBvcG92ZXJQcm9wcy5yZWxhdGl2ZVJhbmdlLFxuICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGFydERhdGVPcHRpb25zLFxuICAgICAgZW5kRGF0ZU9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWxhdGl2ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RhcnREYXRlXCI+e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnN0YXJ0RGF0ZX08L2xhYmVsPlxuICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBuYW1lOiAnc3RhcnREYXRlJyB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbmREYXRlXCI+e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmVuZERhdGV9PC9sYWJlbD5cbiAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgbmFtZTogJ2VuZERhdGUnIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgb3B0aW9ucz17ZW5kRGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgPC9SZWxhdGl2ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cblJlbGF0aXZlRGF0ZVJhbmdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuUmVsYXRpdmVEYXRlUmFuZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19