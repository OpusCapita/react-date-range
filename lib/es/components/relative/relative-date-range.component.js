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
import relativeOptions from './relative-options';
import translate from '../../translations/translate';

var RelativeRangeSection = styled.div(_templateObject, theme.gutterWidth);

var RelativeDateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(RelativeDateRange, _React$PureComponent);

  function RelativeDateRange(props) {
    _classCallCheck(this, RelativeDateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var endDate = props.endDate,
        startDate = props.startDate,
        translations = props.translations;

    var options = relativeOptions(translate(translations, 'dates'));
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
    var translations = this.props.translations;


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
            label: translate(translations, 'startDate')
          },
          React.createElement(FloatingSelect, _extends({}, this.props, {
            clearable: false,
            onChange: this.handleStartDateChange,
            options: startDateOptions,
            placeholder: translations.startDatePlaceholder,
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
            label: translate(translations, 'endDate')
          },
          React.createElement(FloatingSelect, _extends({}, this.props, {
            clearable: false,
            onChange: this.handleEndDateChange,
            options: endDateOptions,
            placeholder: translations.endDatePlaceholder,
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
      relativeRange: {
        startDate: startDate
      }
    };
    if (endDate) {
      var endDateValue = endDate.value && !endDate.value.moment ? _extends({}, endDate.value, { moment: Constants.END }) : endDate.value;
      state = _extends({}, state, {
        value: startDate.label + ' - ' + (endDate.label || ''),
        endDate: endDateValue,
        relativeRange: _extends({}, state.relativeRange, {
          endDate: endDate
        })
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
      relativeRange: {
        endDate: endDate
      }
    };
    if (startDate) {
      var startDateValue = startDate.value && !startDate.value.moment ? _extends({}, startDate.value, { moment: Constants.START }) : startDate.value;
      state = _extends({}, state, {
        value: (startDate.label || '') + ' - ' + endDate.label,
        startDate: startDateValue,
        relativeRange: _extends({}, state.relativeRange, {
          startDate: startDate
        })
      });
    }
    _this2.props.onChange(state);
  };
}, _temp);
export { RelativeDateRange as default };


RelativeDateRange.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJIeXBoZW4iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJDb25zdGFudHMiLCJyZWxhdGl2ZU9wdGlvbnMiLCJ0cmFuc2xhdGUiLCJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsImRpdiIsImd1dHRlcldpZHRoIiwiUmVsYXRpdmVEYXRlUmFuZ2UiLCJwcm9wcyIsImVuZERhdGUiLCJzdGFydERhdGUiLCJ0cmFuc2xhdGlvbnMiLCJvcHRpb25zIiwic3RhdGUiLCJlbmREYXRlT3B0aW9ucyIsImZpbHRlckVuZERhdGVPcHRpb25zIiwic3RhcnREYXRlT3B0aW9ucyIsImZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMiLCJyZW5kZXIiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJzdGFydERhdGVQbGFjZWhvbGRlciIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJlbmREYXRlUGxhY2Vob2xkZXIiLCJQdXJlQ29tcG9uZW50IiwicGFzdCIsImZpbHRlciIsImRhdGUiLCJncmFudWxhcml0eSIsIm9yZGVyIiwic2VsZWN0ZWRTdGFydERhdGUiLCJ2YWx1ZSIsIm1vbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIlNUQVJUIiwic2V0U3RhdGUiLCJyZWxhdGl2ZVJhbmdlIiwiZW5kRGF0ZVZhbHVlIiwiRU5EIiwibGFiZWwiLCJvbkNoYW5nZSIsInNlbGVjdGVkRW5kRGF0ZSIsInN0YXJ0RGF0ZVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBLFNBQVNDLGNBQVQsUUFBK0IsbUNB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VUFBVW9CLEtBRmQ7QUFHQWpCLDJCQUNLQSxLQURMO0FBRUVpQixnQkFBVXBCLFVBQVU2QixLQUFWLElBQW1CLEVBQTdCLFlBQXFDOUIsUUFBUThCLEtBRi9DO0FBR0U3QixtQkFBV2dDLGNBSGI7QUFJRU4sb0NBQ0t2QixNQUFNdUIsYUFEWDtBQUVFMUI7QUFGRjtBQUpGO0FBU0Q7QUFDRCxXQUFLRixLQUFMLENBQVdnQyxRQUFYLENBQW9CM0IsS0FBcEI7QUFDRCxHOztTQWpHa0JOLGlCOzs7QUFzSnJCQSxrQkFBa0JQLFlBQWxCLEdBQWlDQSxZQUFqQyIsImZpbGUiOiJyZWxhdGl2ZS1kYXRlLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRmxvYXRpbmdTZWxlY3QgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1mbG9hdGluZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udGVudCwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBEYXRlU2VjdGlvbiBmcm9tICcuLi9kYXRlLXNlY3Rpb24uY29tcG9uZW50cyc7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgcmVsYXRpdmVPcHRpb25zIGZyb20gJy4vcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBSZWxhdGl2ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9IDAgMCAwO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsYXRpdmVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCBvcHRpb25zID0gcmVsYXRpdmVPcHRpb25zKHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIGVuZERhdGVPcHRpb25zOiBzdGFydERhdGUgP1xuICAgICAgICB0aGlzLmZpbHRlckVuZERhdGVPcHRpb25zKHN0YXJ0RGF0ZSwgb3B0aW9ucykgOlxuICAgICAgICBvcHRpb25zLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgc3RhcnREYXRlT3B0aW9uczogZW5kRGF0ZSA/XG4gICAgICAgIHRoaXMuZmlsdGVyU3RhcnREYXRlT3B0aW9ucyhlbmREYXRlLCBvcHRpb25zKSA6XG4gICAgICAgIG9wdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIGZpbHRlckVuZERhdGVPcHRpb25zID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gc3RhcnREYXRlLnBhc3QgPyBlbmREYXRlT3B0aW9ucyA6XG4gICAgICBlbmREYXRlT3B0aW9ucy5maWx0ZXIoZGF0ZSA9PiAhZGF0ZS5wYXN0KTtcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoZGF0ZSA9PlxuICAgICAgZGF0ZS5ncmFudWxhcml0eSAhPT0gc3RhcnREYXRlLmdyYW51bGFyaXR5IHx8XG4gICAgICBzdGFydERhdGUub3JkZXIgPD0gZGF0ZS5vcmRlcik7XG4gIH1cblxuICBmaWx0ZXJTdGFydERhdGVPcHRpb25zID0gKGVuZERhdGUsIHN0YXJ0RGF0ZU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gZW5kRGF0ZS5wYXN0ID9cbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnMuZmlsdGVyKGRhdGUgPT4gZGF0ZS5wYXN0KSA6XG4gICAgICBzdGFydERhdGVPcHRpb25zO1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihkYXRlID0+XG4gICAgICBkYXRlLmdyYW51bGFyaXR5ICE9PSBlbmREYXRlLmdyYW51bGFyaXR5IHx8XG4gICAgICBkYXRlLm9yZGVyIDw9IGVuZERhdGUub3JkZXIpO1xuICB9XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKHNlbGVjdGVkU3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3Qgc3RhcnREYXRlID0gc2VsZWN0ZWRTdGFydERhdGUudmFsdWUubW9tZW50ID8gc2VsZWN0ZWRTdGFydERhdGUgOlxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sIHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICB7IHZhbHVlOiB7IC4uLnNlbGVjdGVkU3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5TVEFSVCB9IH0sXG4gICAgICApO1xuICAgIGNvbnN0IGVuZERhdGVPcHRpb25zID0gdGhpcy5maWx0ZXJFbmREYXRlT3B0aW9ucyhzdGFydERhdGUsIHRoaXMuc3RhdGUuZW5kRGF0ZU9wdGlvbnMpO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZU9wdGlvbnMsIHN0YXJ0RGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChlbmREYXRlKSB7XG4gICAgICBjb25zdCBlbmREYXRlVmFsdWUgPSBlbmREYXRlLnZhbHVlICYmICFlbmREYXRlLnZhbHVlLm1vbWVudFxuICAgICAgICA/IHsgLi4uZW5kRGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuRU5EIH1cbiAgICAgICAgOiBlbmREYXRlLnZhbHVlO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbCB8fCAnJ31gLFxuICAgICAgICBlbmREYXRlOiBlbmREYXRlVmFsdWUsXG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5yZWxhdGl2ZVJhbmdlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRFbmREYXRlKSA9PiB7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHNlbGVjdGVkRW5kRGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZEVuZERhdGUgOlxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sIHNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgeyB2YWx1ZTogeyAuLi5zZWxlY3RlZEVuZERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLkVORCB9IH0sXG4gICAgICApO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZU9wdGlvbnMgPSB0aGlzLmZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMoZW5kRGF0ZSwgdGhpcy5zdGF0ZS5zdGFydERhdGVPcHRpb25zKTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlT3B0aW9ucywgZW5kRGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlOiBlbmREYXRlLnZhbHVlLFxuICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZVZhbHVlID0gc3RhcnREYXRlLnZhbHVlICYmICFzdGFydERhdGUudmFsdWUubW9tZW50XG4gICAgICAgID8geyAuLi5zdGFydERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLlNUQVJUIH1cbiAgICAgICAgOiBzdGFydERhdGUudmFsdWU7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWwgfHwgJyd9IC0gJHtlbmREYXRlLmxhYmVsfWAsXG4gICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlVmFsdWUsXG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5yZWxhdGl2ZVJhbmdlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnMsXG4gICAgICBlbmREYXRlT3B0aW9ucyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlbGF0aXZlUmFuZ2VTZWN0aW9uPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJyZWxhdGl2ZVN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3N0YXJ0RGF0ZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtzdGFydERhdGVPcHRpb25zfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRpb25zLnN0YXJ0RGF0ZVBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZS1lbmQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cInJlbGF0aXZlRW5kRGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2VuZERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2VuZERhdGVPcHRpb25zfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRpb25zLmVuZERhdGVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvUmVsYXRpdmVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5SZWxhdGl2ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblJlbGF0aXZlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==