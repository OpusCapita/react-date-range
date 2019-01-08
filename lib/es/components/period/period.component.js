var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n  margin-bottom: 0;\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n  margin-bottom: 0;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 80px;\n  margin-bottom: 0;\n'], ['\n  width: 80px;\n  margin-bottom: 0;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  align-self: flex-end;\n  width: 140px;\n  margin-left: ', ';\n  margin-bottom: ', ';\n'], ['\n  align-self: flex-end;\n  width: 140px;\n  margin-left: ', ';\n  margin-bottom: ', ';\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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

var PeriodSection = styled.div(_templateObject, theme.gutterWidth);

var CountSection = styled(Content.InputColumn)(_templateObject2);

var GranularitySection = styled(Content.InputColumn)(_templateObject3, theme.halfGutterWidth, theme.halfGutterWidth);

var Period = (_temp = _class = function (_React$PureComponent) {
  _inherits(Period, _React$PureComponent);

  function Period(props) {
    _classCallCheck(this, Period);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var endDate = props.endDate,
        startDate = props.startDate;

    _this.state = {
      endDate: endDate,
      startDate: startDate
    };
    return _this;
  }

  Period.prototype.render = function render() {
    var translations = this.props.translations;

    var startDateOptions = relativeDateOptions(translate(translations, 'dates'));
    var _state = this.state,
        endDate = _state.endDate,
        startDate = _state.startDate;

    var granularities = this.getGranularityOptions();

    return React.createElement(
      PeriodSection,
      null,
      React.createElement(
        DateSection,
        null,
        React.createElement(
          Content.InputColumn,
          {
            className: 'period-start-date',
            id: 'periodStartDate',
            label: translate(translations, 'from')
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
        CountSection,
        {
          className: 'period-end-date',
          id: 'periodEndDate',
          label: translate(translations, 'to')
        },
        React.createElement(Primitive.Input, { value: endDate.timing, type: 'number', onChange: this.handleTimingChange })
      ),
      React.createElement(
        GranularitySection,
        {
          className: 'period-granularity',
          id: 'periodGranularity'
        },
        React.createElement(FloatingSelect, _extends({}, this.props, {
          clearable: false,
          onChange: this.handleGranularityChange,
          options: granularities,
          value: this.getSelectedGranularity(granularities, endDate.unit)
        }))
      )
    );
  };

  return Period;
}(React.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getGranularityOptions = function () {
    var translations = _this2.props.translations;

    return [{
      label: translate(translations, 'day', 'plural'),
      value: RelativeConstants.DAY
    }, {
      label: translate(translations, 'week', 'plural'),
      value: RelativeConstants.WEEK
    }, {
      label: translate(translations, 'month', 'plural'),
      value: RelativeConstants.MONTH
    }];
  };

  this.getSelectedGranularity = function (granularities, value) {
    return granularities.find(function (granularity) {
      return granularity.value === value;
    }) || granularities[0];
  };

  this.initEndDate = function (endDate) {
    return endDate.moment ? endDate : _extends({}, endDate, {
      moment: endDate.timing < 0 ? RelativeConstants.START : RelativeConstants.END
    });
  };

  this.initStartDate = function (startDate) {
    return startDate.value && startDate.value.moment ? startDate : _extends({}, startDate, {
      value: _extends({}, startDate.value, {
        moment: RelativeConstants.START
      })
    });
  };

  this.handleStartDateChange = function (selectedStartDate) {
    var translations = _this2.props.translations;
    var endDate = _this2.state.endDate;


    var startDate = _this2.initStartDate(selectedStartDate);
    var date = _this2.initEndDate(endDate);
    _this2.setState({ startDate: startDate });
    var state = {
      endDate: date,
      startDate: startDate.value,
      value: formatLabel(startDate, endDate, translations),
      period: {
        startDate: startDate,
        endDate: date
      }
    };
    _this2.props.onChange(state);
  };

  this.handleEndDateChange = function (selectedEndDate) {
    var translations = _this2.props.translations;
    var startDate = _this2.state.startDate;

    var date = _this2.initStartDate(startDate);
    var endDate = _this2.initEndDate(selectedEndDate);
    _this2.setState({ endDate: endDate });
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
    _this2.props.onChange(state);
  };

  this.handleTimingChange = function (event) {
    var timing = Number.isNaN(event.target.value) ? 0 : Number(event.target.value);
    var endDate = _this2.state.endDate;

    var selectedEndDate = _extends({}, endDate, {
      timing: timing,
      moment: timing < 0 ? RelativeConstants.START : RelativeConstants.END
    });
    _this2.handleEndDateChange(selectedEndDate);
  };

  this.handleGranularityChange = function (unit) {
    var endDate = _this2.state.endDate;

    var selectedEndDate = _extends({}, endDate, {
      unit: unit.value
    });
    _this2.handleEndDateChange(selectedEndDate);
  };
}, _temp);
export { Period as default };


Period.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsIlByaW1pdGl2ZSIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJmb3JtYXRMYWJlbCIsIkh5cGhlbiIsInByb3BUeXBlcyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwicmVsYXRpdmVEYXRlT3B0aW9ucyIsInRyYW5zbGF0ZSIsIlBlcmlvZFNlY3Rpb24iLCJkaXYiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIklucHV0Q29sdW1uIiwiR3JhbnVsYXJpdHlTZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiUGVyaW9kIiwicHJvcHMiLCJlbmREYXRlIiwic3RhcnREYXRlIiwic3RhdGUiLCJyZW5kZXIiLCJ0cmFuc2xhdGlvbnMiLCJzdGFydERhdGVPcHRpb25zIiwiZ3JhbnVsYXJpdGllcyIsImdldEdyYW51bGFyaXR5T3B0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsInRpbWluZyIsImhhbmRsZVRpbWluZ0NoYW5nZSIsImhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlIiwiZ2V0U2VsZWN0ZWRHcmFudWxhcml0eSIsInVuaXQiLCJQdXJlQ29tcG9uZW50IiwibGFiZWwiLCJ2YWx1ZSIsIkRBWSIsIldFRUsiLCJNT05USCIsImZpbmQiLCJncmFudWxhcml0eSIsImluaXRFbmREYXRlIiwibW9tZW50IiwiU1RBUlQiLCJFTkQiLCJpbml0U3RhcnREYXRlIiwic2VsZWN0ZWRTdGFydERhdGUiLCJkYXRlIiwic2V0U3RhdGUiLCJwZXJpb2QiLCJvbkNoYW5nZSIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJzZWxlY3RlZEVuZERhdGUiLCJldmVudCIsIk51bWJlciIsImlzTmFOIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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LE9BQVI7QUFTRDtBQUNELFdBQUtGLEtBQUwsQ0FBV2dDLFFBQVgsQ0FBb0I3QixLQUFwQjtBQUNELEc7O09BRURRLGtCLEdBQXFCLFVBQUN3QixLQUFELEVBQVc7QUFDOUIsUUFBTXpCLFNBQVMwQixPQUFPQyxLQUFQLENBQWFGLE1BQU1HLE1BQU4sQ0FBYXJCLEtBQTFCLElBQW1DLENBQW5DLEdBQXVDbUIsT0FBT0QsTUFBTUcsTUFBTixDQUFhckIsS0FBcEIsQ0FBdEQ7QUFEOEIsUUFFdEJoQixPQUZzQixHQUVWLE9BQUtFLEtBRkssQ0FFdEJGLE9BRnNCOztBQUc5QixRQUFNaUMsK0JBQ0RqQyxPQURDO0FBRUpTLG9CQUZJO0FBR0pjLGNBQVFkLFNBQVMsQ0FBVCxHQUFhckIsa0JBQWtCb0MsS0FBL0IsR0FBdUNwQyxrQkFBa0JxQztBQUg3RCxNQUFOO0FBS0EsV0FBS08sbUJBQUwsQ0FBeUJDLGVBQXpCO0FBQ0QsRzs7T0FFRHRCLHVCLEdBQTBCLFVBQUNFLElBQUQsRUFBVTtBQUFBLFFBQzFCYixPQUQwQixHQUNkLE9BQUtFLEtBRFMsQ0FDMUJGLE9BRDBCOztBQUVsQyxRQUFNaUMsK0JBQ0RqQyxPQURDO0FBRUphLFlBQU1BLEtBQUtHO0FBRlAsTUFBTjtBQUlBLFdBQUtnQixtQkFBTCxDQUF5QkMsZUFBekI7QUFDRCxHOztTQW5Ia0JuQyxNOzs7QUF1S3JCQSxPQUFPZCxZQUFQLEdBQXNCQSxZQUF0QiIsImZpbGUiOiJwZXJpb2QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbG9hdGluZ1NlbGVjdCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWZsb2F0aW5nLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250ZW50LCBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGZvcm1hdExhYmVsIGZyb20gJy4vcGVyaW9kLWxhYmVsLmZvcm1hdHRlcic7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlbGF0aXZlQ29uc3RhbnRzIGZyb20gJy4uL3JlbGF0aXZlL2NvbnN0YW50cyc7XG5pbXBvcnQgcmVsYXRpdmVEYXRlT3B0aW9ucyBmcm9tICcuLi9yZWxhdGl2ZS9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFBlcmlvZFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbmA7XG5cbmNvbnN0IENvdW50U2VjdGlvbiA9IHN0eWxlZChDb250ZW50LklucHV0Q29sdW1uKWBcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG5jb25zdCBHcmFudWxhcml0eVNlY3Rpb24gPSBzdHlsZWQoQ29udGVudC5JbnB1dENvbHVtbilgXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcmlvZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBwcm9wcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0R3JhbnVsYXJpdHlPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF5JywgJ3BsdXJhbCcpLFxuICAgICAgICB2YWx1ZTogUmVsYXRpdmVDb25zdGFudHMuREFZLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICd3ZWVrJywgJ3BsdXJhbCcpLFxuICAgICAgICB2YWx1ZTogUmVsYXRpdmVDb25zdGFudHMuV0VFSyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnbW9udGgnLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5NT05USCxcbiAgICAgIH0sXG4gICAgXTtcbiAgfTtcblxuICBnZXRTZWxlY3RlZEdyYW51bGFyaXR5ID0gKGdyYW51bGFyaXRpZXMsIHZhbHVlKSA9PiAoXG4gICAgZ3JhbnVsYXJpdGllcy5maW5kKGdyYW51bGFyaXR5ID0+IGdyYW51bGFyaXR5LnZhbHVlID09PSB2YWx1ZSkgfHwgZ3JhbnVsYXJpdGllc1swXVxuICApO1xuXG4gIGluaXRFbmREYXRlID0gZW5kRGF0ZSA9PiAoXG4gICAgZW5kRGF0ZS5tb21lbnQgPyBlbmREYXRlIDpcbiAgICAgIHtcbiAgICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgICAgbW9tZW50OiBlbmREYXRlLnRpbWluZyA8IDAgPyBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCA6IFJlbGF0aXZlQ29uc3RhbnRzLkVORCxcbiAgICAgIH1cbiAgKTtcblxuICBpbml0U3RhcnREYXRlID0gc3RhcnREYXRlID0+IChcbiAgICBzdGFydERhdGUudmFsdWUgJiYgc3RhcnREYXRlLnZhbHVlLm1vbWVudCA/IHN0YXJ0RGF0ZSA6XG4gICAgICB7XG4gICAgICAgIC4uLnN0YXJ0RGF0ZSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAuLi5zdGFydERhdGUudmFsdWUsXG4gICAgICAgICAgbW9tZW50OiBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgKTtcblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRTdGFydERhdGUpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmluaXRTdGFydERhdGUoc2VsZWN0ZWRTdGFydERhdGUpO1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmluaXRFbmREYXRlKGVuZERhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUgfSk7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlOiBkYXRlLFxuICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudmFsdWUsXG4gICAgICB2YWx1ZTogZm9ybWF0TGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogZGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRFbmREYXRlKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuaW5pdFN0YXJ0RGF0ZShzdGFydERhdGUpO1xuICAgIGNvbnN0IGVuZERhdGUgPSB0aGlzLmluaXRFbmREYXRlKHNlbGVjdGVkRW5kRGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICB2YWx1ZTogZm9ybWF0TGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgICBzdGFydERhdGU6IGRhdGUudmFsdWUsXG4gICAgICAgIHBlcmlvZDoge1xuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVUaW1pbmdDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0aW1pbmcgPSBOdW1iZXIuaXNOYU4oZXZlbnQudGFyZ2V0LnZhbHVlKSA/IDAgOiBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHRpbWluZyxcbiAgICAgIG1vbWVudDogdGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlKHNlbGVjdGVkRW5kRGF0ZSk7XG4gIH1cblxuICBoYW5kbGVHcmFudWxhcml0eUNoYW5nZSA9ICh1bml0KSA9PiB7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IHtcbiAgICAgIC4uLmVuZERhdGUsXG4gICAgICB1bml0OiB1bml0LnZhbHVlLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlKHNlbGVjdGVkRW5kRGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3RhcnREYXRlT3B0aW9ucyA9IHJlbGF0aXZlRGF0ZU9wdGlvbnModHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGdyYW51bGFyaXRpZXMgPSB0aGlzLmdldEdyYW51bGFyaXR5T3B0aW9ucygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJpb2RTZWN0aW9uPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicGVyaW9kU3RhcnREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZnJvbScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtzdGFydERhdGVPcHRpb25zfVxuICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPENvdW50U2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1lbmQtZGF0ZVwiXG4gICAgICAgICAgaWQ9XCJwZXJpb2RFbmREYXRlXCJcbiAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3RvJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8UHJpbWl0aXZlLklucHV0IHZhbHVlPXtlbmREYXRlLnRpbWluZ30gdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWluZ0NoYW5nZX0gLz5cbiAgICAgICAgPC9Db3VudFNlY3Rpb24+XG4gICAgICAgIDxHcmFudWxhcml0eVNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtZ3JhbnVsYXJpdHlcIlxuICAgICAgICAgIGlkPVwicGVyaW9kR3JhbnVsYXJpdHlcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHcmFudWxhcml0eUNoYW5nZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e2dyYW51bGFyaXRpZXN9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTZWxlY3RlZEdyYW51bGFyaXR5KGdyYW51bGFyaXRpZXMsIGVuZERhdGUudW5pdCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmFudWxhcml0eVNlY3Rpb24+XG4gICAgICA8L1BlcmlvZFNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5QZXJpb2QucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5QZXJpb2QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19