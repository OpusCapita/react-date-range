var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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

var RelativeRangeSection = styled.div(_templateObject, theme.gutterWidth);

var RelativeDateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(RelativeDateRange, _React$PureComponent);

  function RelativeDateRange(props) {
    _classCallCheck(this, RelativeDateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var endDate = props.endDate,
        options = props.options,
        startDate = props.startDate;

    _this.state = {
      endDate: endDate,
      endDateOptions: startDate ? _this.filterEndDateOptions(startDate, options) : options,
      startDate: startDate,
      startDateOptions: endDate ? _this.filterStartDateOptions(endDate, options) : options
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
          Content.InputColumn,
          {
            className: 'relative-start-date',
            id: 'relativeStartDate',
            label: this.props.translations.startDate
          },
          React.createElement(FloatingSelect, _extends({}, this.props, {
            clearable: false,
            onChange: this.handleStartDateChange,
            options: startDateOptions,
            value: startDate
          }))
        )
      ),
      React.createElement(Hyphen, null),
      React.createElement(
        DateSection,
        null,
        React.createElement(
          Content.InputColumn,
          {
            className: 'relative-end-date',
            id: 'relativeEndDate',
            label: this.props.translations.endDate
          },
          React.createElement(FloatingSelect, _extends({}, this.props, {
            clearable: false,
            onChange: this.handleEndDateChange,
            options: endDateOptions,
            value: endDate
          }))
        )
      )
    );
  };

  return RelativeDateRange;
}(React.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.filterEndDateOptions = function (startDate, endDateOptions) {
    var options = startDate.past ? endDateOptions : endDateOptions.filter(function (date) {
      return !date.past;
    });
    return options.filter(function (date) {
      return date.granularity !== startDate.granularity || startDate.order <= date.order;
    });
  };

  this.filterStartDateOptions = function (endDate, startDateOptions) {
    var options = endDate.past ? startDateOptions.filter(function (date) {
      return date.past;
    }) : startDateOptions;
    return options.filter(function (date) {
      return date.granularity !== endDate.granularity || date.order <= endDate.order;
    });
  };

  this.handleStartDateChange = function (selectedStartDate) {
    var startDate = selectedStartDate.value.moment ? selectedStartDate : Object.assign({}, selectedStartDate, { value: _extends({}, selectedStartDate.value, { moment: Constants.START }) });
    var endDateOptions = _this2.filterEndDateOptions(startDate, _this2.state.endDateOptions);
    var endDate = _this2.state.endDate;

    _this2.setState({ endDateOptions: endDateOptions, startDate: startDate });
    var state = {
      startDate: startDate.value,
      popoverProps: {
        relativeRange: {
          startDate: startDate
        }
      }
    };
    if (endDate) {
      var endDateValue = endDate.value && !endDate.value.moment ? _extends({}, endDate.value, { moment: Constants.END }) : endDate.value;
      state = _extends({}, state, {
        value: startDate.label + ' - ' + (endDate.label || ''),
        endDate: endDateValue,
        popoverProps: {
          relativeRange: _extends({}, state.popoverProps.relativeRange, {
            endDate: endDate
          })
        }
      });
    }
    _this2.props.onChange(state);
  };

  this.handleEndDateChange = function (selectedEndDate) {
    var endDate = selectedEndDate.value.moment ? selectedEndDate : Object.assign({}, selectedEndDate, { value: _extends({}, selectedEndDate.value, { moment: Constants.END }) });
    var startDateOptions = _this2.filterStartDateOptions(endDate, _this2.state.startDateOptions);
    var startDate = _this2.state.startDate;

    _this2.setState({ startDateOptions: startDateOptions, endDate: endDate });
    var state = {
      endDate: endDate.value,
      popoverProps: {
        relativeRange: {
          endDate: endDate
        }
      }
    };
    if (startDate) {
      var startDateValue = startDate.value && !startDate.value.moment ? _extends({}, startDate.value, { moment: Constants.START }) : startDate.value;
      state = _extends({}, state, {
        value: (startDate.label || '') + ' - ' + endDate.label,
        startDate: startDateValue,
        popoverProps: {
          relativeRange: _extends({}, state.popoverProps.relativeRange, {
            startDate: startDate
          })
        }
      });
    }
    _this2.props.onChange(state);
  };
}, _temp);
export { RelativeDateRange as default };


RelativeDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJIeXBoZW4iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJDb25zdGFudHMiLCJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsImRpdiIsImd1dHRlcldpZHRoIiwiUmVsYXRpdmVEYXRlUmFuZ2UiLCJwcm9wcyIsImVuZERhdGUiLCJvcHRpb25zIiwic3RhcnREYXRlIiwic3RhdGUiLCJlbmREYXRlT3B0aW9ucyIsImZpbHRlckVuZERhdGVPcHRpb25zIiwic3RhcnREYXRlT3B0aW9ucyIsImZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMiLCJyZW5kZXIiLCJ0cmFuc2xhdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwiUHVyZUNvbXBvbmVudCIsInBhc3QiLCJmaWx0ZXIiLCJkYXRlIiwiZ3JhbnVsYXJpdHkiLCJvcmRlciIsInNlbGVjdGVkU3RhcnREYXRlIiwidmFsdWUiLCJtb21lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJTVEFSVCIsInNldFN0YXRlIiwicG9wb3ZlclByb3BzIiwicmVsYXRpdmVSYW5nZSIsImVuZERhdGVWYWx1ZSIsIkVORCIsImxhYmVsIiwib25DaGFuZ2UiLCJzZWxlY3RlZEVuZERhdGUiLCJzdGFydERhdGVWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQSxTQUFTQyxjQUFULFFBQStCLG1DQUEvQjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLFFBQStCLGtDQUEvQjs7QUFFQSxPQUFPQyxX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LEtBQUwsQ0FBVytCLFFBQVgsQ0FBb0IzQixLQUFwQjtBQUNELEc7O1NBeEdrQkwsaUI7OztBQTBKckJBLGtCQUFrQkwsWUFBbEIsR0FBaUNBLFlBQWpDIiwiZmlsZSI6InJlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbG9hdGluZ1NlbGVjdCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWZsb2F0aW5nLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250ZW50LCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgUmVsYXRpdmVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0aXZlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBvcHRpb25zLCBzdGFydERhdGUgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgZW5kRGF0ZU9wdGlvbnM6IHN0YXJ0RGF0ZSA/XG4gICAgICAgIHRoaXMuZmlsdGVyRW5kRGF0ZU9wdGlvbnMoc3RhcnREYXRlLCBvcHRpb25zKSA6XG4gICAgICAgIG9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBzdGFydERhdGVPcHRpb25zOiBlbmREYXRlID9cbiAgICAgICAgdGhpcy5maWx0ZXJTdGFydERhdGVPcHRpb25zKGVuZERhdGUsIG9wdGlvbnMpIDpcbiAgICAgICAgb3B0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgZmlsdGVyRW5kRGF0ZU9wdGlvbnMgPSAoc3RhcnREYXRlLCBlbmREYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzdGFydERhdGUucGFzdCA/IGVuZERhdGVPcHRpb25zIDpcbiAgICAgIGVuZERhdGVPcHRpb25zLmZpbHRlcihkYXRlID0+ICFkYXRlLnBhc3QpO1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihkYXRlID0+XG4gICAgICBkYXRlLmdyYW51bGFyaXR5ICE9PSBzdGFydERhdGUuZ3JhbnVsYXJpdHkgfHxcbiAgICAgIHN0YXJ0RGF0ZS5vcmRlciA8PSBkYXRlLm9yZGVyKTtcbiAgfVxuXG4gIGZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMgPSAoZW5kRGF0ZSwgc3RhcnREYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBlbmREYXRlLnBhc3QgP1xuICAgICAgc3RhcnREYXRlT3B0aW9ucy5maWx0ZXIoZGF0ZSA9PiBkYXRlLnBhc3QpIDpcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnM7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKGRhdGUgPT5cbiAgICAgIGRhdGUuZ3JhbnVsYXJpdHkgIT09IGVuZERhdGUuZ3JhbnVsYXJpdHkgfHxcbiAgICAgIGRhdGUub3JkZXIgPD0gZW5kRGF0ZS5vcmRlcik7XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRTdGFydERhdGUpID0+IHtcbiAgICBjb25zdCBzdGFydERhdGUgPSBzZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZFN0YXJ0RGF0ZSA6XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSwgc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgIHsgdmFsdWU6IHsgLi4uc2VsZWN0ZWRTdGFydERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLlNUQVJUIH0gfSxcbiAgICAgICk7XG4gICAgY29uc3QgZW5kRGF0ZU9wdGlvbnMgPSB0aGlzLmZpbHRlckVuZERhdGVPcHRpb25zKHN0YXJ0RGF0ZSwgdGhpcy5zdGF0ZS5lbmREYXRlT3B0aW9ucyk7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlT3B0aW9ucywgc3RhcnREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLnZhbHVlLFxuICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGVuZERhdGVWYWx1ZSA9IGVuZERhdGUudmFsdWUgJiYgIWVuZERhdGUudmFsdWUubW9tZW50XG4gICAgICAgID8geyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5FTkQgfVxuICAgICAgICA6IGVuZERhdGUudmFsdWU7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWx9IC0gJHtlbmREYXRlLmxhYmVsIHx8ICcnfWAsXG4gICAgICAgIGVuZERhdGU6IGVuZERhdGVWYWx1ZSxcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgICAgLi4uc3RhdGUucG9wb3ZlclByb3BzLnJlbGF0aXZlUmFuZ2UsXG4gICAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRFbmREYXRlKSA9PiB7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHNlbGVjdGVkRW5kRGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZEVuZERhdGUgOlxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sIHNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgeyB2YWx1ZTogeyAuLi5zZWxlY3RlZEVuZERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLkVORCB9IH0sXG4gICAgICApO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZU9wdGlvbnMgPSB0aGlzLmZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMoZW5kRGF0ZSwgdGhpcy5zdGF0ZS5zdGFydERhdGVPcHRpb25zKTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlT3B0aW9ucywgZW5kRGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlOiBlbmREYXRlLnZhbHVlLFxuICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZVZhbHVlID0gc3RhcnREYXRlLnZhbHVlICYmICFzdGFydERhdGUudmFsdWUubW9tZW50XG4gICAgICAgID8geyAuLi5zdGFydERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLlNUQVJUIH1cbiAgICAgICAgOiBzdGFydERhdGUudmFsdWU7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWwgfHwgJyd9IC0gJHtlbmREYXRlLmxhYmVsfWAsXG4gICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlVmFsdWUsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLnBvcG92ZXJQcm9wcy5yZWxhdGl2ZVJhbmdlLFxuICAgICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGFydERhdGVPcHRpb25zLFxuICAgICAgZW5kRGF0ZU9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWxhdGl2ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicmVsYXRpdmVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLnN0YXJ0RGF0ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJyZWxhdGl2ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zLmVuZERhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtlbmREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvUmVsYXRpdmVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5SZWxhdGl2ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblJlbGF0aXZlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==