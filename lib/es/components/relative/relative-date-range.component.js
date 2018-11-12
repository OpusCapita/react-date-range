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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJIeXBoZW4iLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJDb25zdGFudHMiLCJyZWxhdGl2ZU9wdGlvbnMiLCJ0cmFuc2xhdGUiLCJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsImRpdiIsImd1dHRlcldpZHRoIiwiUmVsYXRpdmVEYXRlUmFuZ2UiLCJwcm9wcyIsImVuZERhdGUiLCJzdGFydERhdGUiLCJ0cmFuc2xhdGlvbnMiLCJvcHRpb25zIiwic3RhdGUiLCJlbmREYXRlT3B0aW9ucyIsImZpbHRlckVuZERhdGVPcHRpb25zIiwic3RhcnREYXRlT3B0aW9ucyIsImZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMiLCJyZW5kZXIiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwiUHVyZUNvbXBvbmVudCIsInBhc3QiLCJmaWx0ZXIiLCJkYXRlIiwiZ3JhbnVsYXJpdHkiLCJvcmRlciIsInNlbGVjdGVkU3RhcnREYXRlIiwidmFsdWUiLCJtb21lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJTVEFSVCIsInNldFN0YXRlIiwicmVsYXRpdmVSYW5nZSIsImVuZERhdGVWYWx1ZSIsIkVORCIsImxhYmVsIiwib25DaGFuZ2UiLCJzZWxlY3RlZEVuZERhdGUiLCJzdGFydERhdGVWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQSxTQUFTQyxjQUFULFFBQStCLG1DQUEvQjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLFFBQStCLGtDQUEv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QVc4QixjQUhiO0FBSUVOLG9DQUNLckIsTUFBTXFCLGFBRFg7QUFFRXhCO0FBRkY7QUFKRjtBQVNEO0FBQ0QsV0FBS0YsS0FBTCxDQUFXOEIsUUFBWCxDQUFvQnpCLEtBQXBCO0FBQ0QsRzs7U0FqR2tCTixpQjs7O0FBb0pyQkEsa0JBQWtCUCxZQUFsQixHQUFpQ0EsWUFBakMiLCJmaWxlIjoicmVsYXRpdmUtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEZsb2F0aW5nU2VsZWN0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZmxvYXRpbmctc2VsZWN0JztcbmltcG9ydCB7IENvbnRlbnQsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHJlbGF0aXZlT3B0aW9ucyBmcm9tICcuL3JlbGF0aXZlLW9wdGlvbnMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgUmVsYXRpdmVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0aXZlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHJlbGF0aXZlT3B0aW9ucyh0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBlbmREYXRlT3B0aW9uczogc3RhcnREYXRlID9cbiAgICAgICAgdGhpcy5maWx0ZXJFbmREYXRlT3B0aW9ucyhzdGFydERhdGUsIG9wdGlvbnMpIDpcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnM6IGVuZERhdGUgP1xuICAgICAgICB0aGlzLmZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMoZW5kRGF0ZSwgb3B0aW9ucykgOlxuICAgICAgICBvcHRpb25zLFxuICAgIH07XG4gIH1cblxuICBmaWx0ZXJFbmREYXRlT3B0aW9ucyA9IChzdGFydERhdGUsIGVuZERhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHN0YXJ0RGF0ZS5wYXN0ID8gZW5kRGF0ZU9wdGlvbnMgOlxuICAgICAgZW5kRGF0ZU9wdGlvbnMuZmlsdGVyKGRhdGUgPT4gIWRhdGUucGFzdCk7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKGRhdGUgPT5cbiAgICAgIGRhdGUuZ3JhbnVsYXJpdHkgIT09IHN0YXJ0RGF0ZS5ncmFudWxhcml0eSB8fFxuICAgICAgc3RhcnREYXRlLm9yZGVyIDw9IGRhdGUub3JkZXIpO1xuICB9XG5cbiAgZmlsdGVyU3RhcnREYXRlT3B0aW9ucyA9IChlbmREYXRlLCBzdGFydERhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGVuZERhdGUucGFzdCA/XG4gICAgICBzdGFydERhdGVPcHRpb25zLmZpbHRlcihkYXRlID0+IGRhdGUucGFzdCkgOlxuICAgICAgc3RhcnREYXRlT3B0aW9ucztcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoZGF0ZSA9PlxuICAgICAgZGF0ZS5ncmFudWxhcml0eSAhPT0gZW5kRGF0ZS5ncmFudWxhcml0eSB8fFxuICAgICAgZGF0ZS5vcmRlciA8PSBlbmREYXRlLm9yZGVyKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChzZWxlY3RlZFN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHNlbGVjdGVkU3RhcnREYXRlLnZhbHVlLm1vbWVudCA/IHNlbGVjdGVkU3RhcnREYXRlIDpcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LCBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgICAgeyB2YWx1ZTogeyAuLi5zZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuU1RBUlQgfSB9LFxuICAgICAgKTtcbiAgICBjb25zdCBlbmREYXRlT3B0aW9ucyA9IHRoaXMuZmlsdGVyRW5kRGF0ZU9wdGlvbnMoc3RhcnREYXRlLCB0aGlzLnN0YXRlLmVuZERhdGVPcHRpb25zKTtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGVPcHRpb25zLCBzdGFydERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudmFsdWUsXG4gICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZW5kRGF0ZVZhbHVlID0gZW5kRGF0ZS52YWx1ZSAmJiAhZW5kRGF0ZS52YWx1ZS5tb21lbnRcbiAgICAgICAgPyB7IC4uLmVuZERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLkVORCB9XG4gICAgICAgIDogZW5kRGF0ZS52YWx1ZTtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWwgfHwgJyd9YCxcbiAgICAgICAgZW5kRGF0ZTogZW5kRGF0ZVZhbHVlLFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uc3RhdGUucmVsYXRpdmVSYW5nZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKHNlbGVjdGVkRW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGVuZERhdGUgPSBzZWxlY3RlZEVuZERhdGUudmFsdWUubW9tZW50ID8gc2VsZWN0ZWRFbmREYXRlIDpcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LCBzZWxlY3RlZEVuZERhdGUsXG4gICAgICAgIHsgdmFsdWU6IHsgLi4uc2VsZWN0ZWRFbmREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5FTkQgfSB9LFxuICAgICAgKTtcbiAgICBjb25zdCBzdGFydERhdGVPcHRpb25zID0gdGhpcy5maWx0ZXJTdGFydERhdGVPcHRpb25zKGVuZERhdGUsIHRoaXMuc3RhdGUuc3RhcnREYXRlT3B0aW9ucyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZU9wdGlvbnMsIGVuZERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZTogZW5kRGF0ZS52YWx1ZSxcbiAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICBjb25zdCBzdGFydERhdGVWYWx1ZSA9IHN0YXJ0RGF0ZS52YWx1ZSAmJiAhc3RhcnREYXRlLnZhbHVlLm1vbWVudFxuICAgICAgICA/IHsgLi4uc3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5TVEFSVCB9XG4gICAgICAgIDogc3RhcnREYXRlLnZhbHVlO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsIHx8ICcnfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZVZhbHVlLFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uc3RhdGUucmVsYXRpdmVSYW5nZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGFydERhdGVPcHRpb25zLFxuICAgICAgZW5kRGF0ZU9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWxhdGl2ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicmVsYXRpdmVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJyZWxhdGl2ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtlbmREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvUmVsYXRpdmVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5SZWxhdGl2ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblJlbGF0aXZlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==