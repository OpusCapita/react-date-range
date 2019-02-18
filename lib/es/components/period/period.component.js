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
        React.createElement(Primitive.Input, {
          value: endDate.timing,
          type: 'number',
          onBlur: this.handleTimingBlur,
          onChange: this.handleTimingChange
        })
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
    var timing = event.target.value;
    var endDate = _this2.state.endDate;

    var selectedEndDate = _extends({}, endDate, {
      timing: timing,
      moment: timing < 0 ? RelativeConstants.START : RelativeConstants.END
    });
    _this2.setState({ endDate: selectedEndDate });
  };

  this.handleTimingBlur = function () {
    var endDate = _this2.state.endDate;

    _this2.handleEndDateChange(endDate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsIlByaW1pdGl2ZSIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJmb3JtYXRMYWJlbCIsIkh5cGhlbiIsInByb3BUeXBlcyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwicmVsYXRpdmVEYXRlT3B0aW9ucyIsInRyYW5zbGF0ZSIsIlBlcmlvZFNlY3Rpb24iLCJkaXYiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIklucHV0Q29sdW1uIiwiR3JhbnVsYXJpdHlTZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiUGVyaW9kIiwicHJvcHMiLCJlbmREYXRlIiwic3RhcnREYXRlIiwic3RhdGUiLCJyZW5kZXIiLCJ0cmFuc2xhdGlvbnMiLCJzdGFydERhdGVPcHRpb25zIiwiZ3JhbnVsYXJpdGllcyIsImdldEdyYW51bGFyaXR5T3B0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsInRpbWluZyIsImhhbmRsZVRpbWluZ0JsdXIiLCJoYW5kbGVUaW1pbmdDaGFuZ2UiLCJoYW5kbGVHcmFudWxhcml0eUNoYW5nZSIsImdldFNlbGVjdGVkR3JhbnVsYXJpdHkiLCJ1bml0IiwiUHVyZUNvbXBvbmVudCIsImxhYmVsIiwidmFsdWUiLCJEQVkiLCJXRUVLIiwiTU9OVEgiLCJmaW5kIiwiZ3JhbnVsYXJpdHkiLCJpbml0RW5kRGF0ZSIsIm1vbWVudCIsIlNUQVJUIiwiRU5EIiwiaW5pdFN0YXJ0RGF0ZSIsInNlbGVjdGVkU3RhcnREYXRlIiwiZGF0ZSIsInNldFN0YXRlIiwicGVyaW9kIiwib25DaGFuZ2UiLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwic2VsZWN0ZWRFbmREYXRlIiwiZXZlbnQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQSxTQUFTQyxjQUFULFFBQStCLG1DQUEvQjtBQUNBLFNBQVNDLE9BQVQsRUFBa0JDLFNBQWxCLEVBQTZCQyxLQUE3QixRQUEwQyxrQ0FBMUM7O0FBRUEsT0FBT0MsV0FBUCxNQUF3Qiw0QkFBeEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsMEJBQXhCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixxQkFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGNBQXRCO0FBQ0EsT0FBT0MsaUJBQVAsTUFBOEIsdUJBQTlCO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsOEJBQWhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQiw4QkFBdEI7O0FBRUEsSUFBTUMsZ0JBQWdCYixPQUFPYyxHQUF2QixrQkFLT1YsTUFBTVcsV0FMYixDQUFOOztBQVNBLElBQU1DLGVBQWVoQixPQUFPRSxRQUFRZSxXQUFmLENBQWYsa0JBQU47O0FBS0EsSUFBTUMscUJBQXFCbEIsT0FBT0UsUUFBUWUsV0FBZixDQUFyQixtQkFHV2IsTUFBTWUsZUFIakIsRUFJYWYsTUFBTWUsZUFKbkIsQ0FBTjs7SUFPcUJDLE07OztBQUNuQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQTs7QUFBQSxRQUdUQyxPQUhTLEdBR2NELEtBSGQsQ0FHVEMsT0FIUztBQUFBLFFBR0FDLFNBSEEsR0FHY0YsS0FIZCxDQUdBRSxTQUhBOztBQUlqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEYsc0JBRFc7QUFFWEM7QUFGVyxLQUFiO0FBSmlCO0FBUWxCOzttQkFpSERFLE0scUJBQVM7QUFBQSxRQUNDQyxZQURELEdBQ2tCLEtBQUtMLEtBRHZCLENBQ0NLLFlBREQ7O0FBRVAsUUFBTUMsbUJBQW1CaEIsb0JBQW9CQyxVQUFVYyxZQUFWLEVBQXdCLE9BQXhCLENBQXBCLENBQXpCO0FBRk8saUJBR3dCLEtBQUtGLEtBSDdCO0FBQUEsUUFHQ0YsT0FIRCxVQUdDQSxPQUhEO0FBQUEsUUFHVUMsU0FIVixVQUdVQSxTQUhWOztBQUlQLFFBQU1LLGdCQUFnQixLQUFLQyxxQkFBTCxFQUF0Qjs7QUFFQSxXQUNFO0FBQUMsbUJBQUQ7QUFBQTtBQUNFO0FBQUMsbUJBQUQ7QUFBQTtBQUNFO0FBQUMsaUJBQUQsQ0FBUyxXQUFUO0FBQUE7QUFDRSx1QkFBVSxtQkFEWjtBQUVFLGdCQUFHLGlCQUZMO0FBR0UsbUJBQU9qQixVQUFVYyxZQUFWLEVBQXdCLE1BQXhCO0FBSFQ7QUFLRSw4QkFBQyxjQUFELGVBQ00sS0FBS0wsS0FEWDtBQUVFLHVCQUFXLEtBRmI7QUFHRSxzQkFBVSxLQUFLUyxxQkFIakI7QUFJRSxxQkFBU0gsZ0JBSlg7QUFLRSxtQkFBT0o7QUFMVDtBQUxGO0FBREYsT0FERjtBQWdCRSwwQkFBQyxNQUFELE9BaEJGO0FBaUJFO0FBQUMsb0JBQUQ7QUFBQTtBQUNFLHFCQUFVLGlCQURaO0FBRUUsY0FBRyxlQUZMO0FBR0UsaUJBQU9YLFVBQVVjLFlBQVYsRUFBd0IsSUFBeEI7QUFIVDtBQUtFLDRCQUFDLFNBQUQsQ0FBVyxLQUFYO0FBQ0UsaUJBQU9KLFFBQVFTLE1BRGpCO0FBRUUsZ0JBQUssUUFGUDtBQUdFLGtCQUFRLEtBQUtDLGdCQUhmO0FBSUUsb0JBQVUsS0FBS0M7QUFKakI7QUFMRixPQWpCRjtBQTZCRTtBQUFDLDBCQUFEO0FBQUE7QUFDRSxxQkFBVSxvQkFEWjtBQUVFLGNBQUc7QUFGTDtBQUlFLDRCQUFDLGNBQUQsZUFDTSxLQUFLWixLQURYO0FBRUUscUJBQVcsS0FGYjtBQUdFLG9CQUFVLEtBQUthLHVCQUhqQjtBQUlFLG1CQUFTTixhQUpYO0FBS0UsaUJBQU8sS0FBS08sc0JBQUwsQ0FBNEJQLGFBQTVCLEVBQTJDTixRQUFRYyxJQUFuRDtBQUxUO0FBSkY7QUE3QkYsS0FERjtBQTRDRCxHOzs7RUE1S2lDckMsTUFBTXNDLGE7OztPQVd4Q1IscUIsR0FBd0IsWUFBTTtBQUFBLFFBQ3BCSCxZQURvQixHQUNILE9BQUtMLEtBREYsQ0FDcEJLLFlBRG9COztBQUU1QixXQUFPLENBQ0w7QUFDRVksYUFBTzFCLFVBQVVjLFlBQVYsRUFBd0IsS0FBeEIsRUFBK0IsUUFBL0IsQ0FEVDtBQUVFYSxhQUFPN0Isa0JBQWtCOEI7QUFGM0IsS0FESyxFQUtMO0FBQ0VGLGFBQU8xQixVQUFVYyxZQUFWLEVBQXdCLE1BQXhCLEVBQWdDLFFBQWhDLENBRFQ7QUFFRWEsYUFBTzdCLGtCQUFrQitCO0FBRjNCLEtBTEssRUFTTDtBQUNFSCxhQUFPMUIsVUFBVWMsWUFBVixFQUF3QixPQUF4QixFQUFpQyxRQUFqQyxDQURUO0FBRUVhLGFBQU83QixrQkFBa0JnQztBQUYzQixLQVRLLENBQVA7QUFjRCxHOztPQUVEUCxzQixHQUF5QixVQUFDUCxhQUFELEVBQWdCVyxLQUFoQjtBQUFBLFdBQ3ZCWCxjQUFjZSxJQUFkLENBQW1CO0FBQUEsYUFBZUMsWUFBWUwsS0FBWixLQUFzQkEsS0FBckM7QUFBQSxLQUFuQixLQUFrRVgsY0FBYyxDQUFkLENBRDNDO0FBQUEsRzs7T0FJekJpQixXLEdBQWM7QUFBQSxXQUNadkIsUUFBUXdCLE1BQVIsR0FBaUJ4QixPQUFqQixnQkFFT0EsT0FGUDtBQUdJd0IsY0FBUXhCLFFBQVFTLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUJyQixrQkFBa0JxQyxLQUF2QyxHQUErQ3JDLGtCQUFrQnNDO0FBSDdFLE1BRFk7QUFBQSxHOztPQVFkQyxhLEdBQWdCO0FBQUEsV0FDZDFCLFVBQVVnQixLQUFWLElBQW1CaEIsVUFBVWdCLEtBQVYsQ0FBZ0JPLE1BQW5DLEdBQTRDdkIsU0FBNUMsZ0JBRU9BLFNBRlA7QUFHSWdCLDBCQUNLaEIsVUFBVWdCLEtBRGY7QUFFRU8sZ0JBQVFwQyxrQkFBa0JxQztBQUY1QjtBQUhKLE1BRGM7QUFBQSxHOztPQVdoQmpCLHFCLEdBQXdCLFVBQUNvQixpQkFBRCxFQUF1QjtBQUFBLFFBQ3JDeEIsWUFEcUMsR0FDcEIsT0FBS0wsS0FEZSxDQUNyQ0ssWUFEcUM7QUFBQSxRQUVyQ0osT0FGcUMsR0FFekIsT0FBS0UsS0FGb0IsQ0FFckNGLE9BRnFDOzs7QUFJN0MsUUFBTUMsWUFBWSxPQUFLMEIsYUFBTCxDQUFtQkMsaUJBQW5CLENBQWxCO0FBQ0EsUUFBTUMsT0FBTyxPQUFLTixXQUFMLENBQWlCdkIsT0FBakIsQ0FBYjtBQUNBLFdBQUs4QixRQUFMLENBQWMsRUFBRTdCLG9CQUFGLEVBQWQ7QUFDQSxRQUFNQyxRQUFRO0FBQ1pGLGVBQVM2QixJQURHO0FBRVo1QixpQkFBV0EsVUFBVWdCLEtBRlQ7QUFHWkEsYUFBT2hDLFlBQVlnQixTQUFaLEVBQXVCRCxPQUF2QixFQUFnQ0ksWUFBaEMsQ0FISztBQUlaMkIsY0FBUTtBQUNOOUIsNEJBRE07QUFFTkQsaUJBQVM2QjtBQUZIO0FBSkksS0FBZDtBQVNBLFdBQUs5QixLQUFMLENBQVdpQyxRQUFYLENBQW9COUIsS0FBcEI7QUFDRCxHOztPQUVEK0IsbUIsR0FBc0IsVUFBQ0MsZUFBRCxFQUFxQjtBQUFBLFFBQ2pDOUIsWUFEaUMsR0FDaEIsT0FBS0wsS0FEVyxDQUNqQ0ssWUFEaUM7QUFBQSxRQUVqQ0gsU0FGaUMsR0FFbkIsT0FBS0MsS0FGYyxDQUVqQ0QsU0FGaUM7O0FBR3pDLFFBQU00QixPQUFPLE9BQUtGLGFBQUwsQ0FBbUIxQixTQUFuQixDQUFiO0FBQ0EsUUFBTUQsVUFBVSxPQUFLdUIsV0FBTCxDQUFpQlcsZUFBakIsQ0FBaEI7QUFDQSxXQUFLSixRQUFMLENBQWMsRUFBRTlCLGdCQUFGLEVBQWQ7QUFDQSxRQUFJRSxRQUFRO0FBQ1ZGLHNCQURVO0FBRVYrQixjQUFRO0FBQ04vQjtBQURNO0FBRkUsS0FBWjtBQU1BLFFBQUlDLFNBQUosRUFBZTtBQUNiQyxjQUFRO0FBQ05GLHdCQURNO0FBRU5pQixlQUFPaEMsWUFBWWdCLFNBQVosRUFBdUJELE9BQXZCLEVBQWdDSSxZQUFoQyxDQUZEO0FBR05ILG1CQUFXNEIsS0FBS1osS0FIVjtBQUlOYyxnQkFBUTtBQUNOL0IsMEJBRE07QUFFTkM7QUFGTTtBQUpGLE9BQVI7QUFTRDtBQUNELFdBQUtGLEtBQUwsQ0FBV2lDLFFBQVgsQ0FBb0I5QixLQUFwQjtBQUNELEc7O09BRURTLGtCLEdBQXFCLFVBQUN3QixLQUFELEVBQVc7QUFDOUIsUUFBTTFCLFNBQVMwQixNQUFNQyxNQUFOLENBQWFuQixLQUE1QjtBQUQ4QixRQUV0QmpCLE9BRnNCLEdBRVYsT0FBS0UsS0FGSyxDQUV0QkYsT0FGc0I7O0FBRzlCLFFBQU1rQywrQkFDRGxDLE9BREM7QUFFSlMsb0JBRkk7QUFHSmUsY0FBUWYsU0FBUyxDQUFULEdBQWFyQixrQkFBa0JxQyxLQUEvQixHQUF1Q3JDLGtCQUFrQnNDO0FBSDdELE1BQU47QUFLQSxXQUFLSSxRQUFMLENBQWMsRUFBRTlCLFNBQVNrQyxlQUFYLEVBQWQ7QUFDRCxHOztPQUVEeEIsZ0IsR0FBbUIsWUFBTTtBQUFBLFFBQ2ZWLE9BRGUsR0FDSCxPQUFLRSxLQURGLENBQ2ZGLE9BRGU7O0FBRXZCLFdBQUtpQyxtQkFBTCxDQUF5QmpDLE9BQXpCO0FBQ0QsRzs7T0FFRFksdUIsR0FBMEIsVUFBQ0UsSUFBRCxFQUFVO0FBQUEsUUFDMUJkLE9BRDBCLEdBQ2QsT0FBS0UsS0FEUyxDQUMxQkYsT0FEMEI7O0FBRWxDLFFBQU1rQywrQkFDRGxDLE9BREM7QUFFSmMsWUFBTUEsS0FBS0c7QUFGUCxNQUFOO0FBSUEsV0FBS2dCLG1CQUFMLENBQXlCQyxlQUF6QjtBQUNELEc7O1NBeEhrQnBDLE07OztBQWlMckJBLE9BQU9kLFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6InBlcmlvZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEZsb2F0aW5nU2VsZWN0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZmxvYXRpbmctc2VsZWN0JztcbmltcG9ydCB7IENvbnRlbnQsIFByaW1pdGl2ZSwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBEYXRlU2VjdGlvbiBmcm9tICcuLi9kYXRlLXNlY3Rpb24uY29tcG9uZW50cyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgZm9ybWF0TGFiZWwgZnJvbSAnLi9wZXJpb2QtbGFiZWwuZm9ybWF0dGVyJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgUmVsYXRpdmVDb25zdGFudHMgZnJvbSAnLi4vcmVsYXRpdmUvY29uc3RhbnRzJztcbmltcG9ydCByZWxhdGl2ZURhdGVPcHRpb25zIGZyb20gJy4uL3JlbGF0aXZlL3JlbGF0aXZlLW9wdGlvbnMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgUGVyaW9kU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9IDAgMCAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuYDtcblxuY29uc3QgQ291bnRTZWN0aW9uID0gc3R5bGVkKENvbnRlbnQuSW5wdXRDb2x1bW4pYFxuICB3aWR0aDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbmA7XG5cbmNvbnN0IEdyYW51bGFyaXR5U2VjdGlvbiA9IHN0eWxlZChDb250ZW50LklucHV0Q29sdW1uKWBcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHdpZHRoOiAxNDBweDtcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyaW9kIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgc3RhcnREYXRlLFxuICAgIH07XG4gIH1cblxuICBnZXRHcmFudWxhcml0eU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXknLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5EQVksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3dlZWsnLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5XRUVLLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdtb250aCcsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLk1PTlRILFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xuXG4gIGdldFNlbGVjdGVkR3JhbnVsYXJpdHkgPSAoZ3JhbnVsYXJpdGllcywgdmFsdWUpID0+IChcbiAgICBncmFudWxhcml0aWVzLmZpbmQoZ3JhbnVsYXJpdHkgPT4gZ3JhbnVsYXJpdHkudmFsdWUgPT09IHZhbHVlKSB8fCBncmFudWxhcml0aWVzWzBdXG4gICk7XG5cbiAgaW5pdEVuZERhdGUgPSBlbmREYXRlID0+IChcbiAgICBlbmREYXRlLm1vbWVudCA/IGVuZERhdGUgOlxuICAgICAge1xuICAgICAgICAuLi5lbmREYXRlLFxuICAgICAgICBtb21lbnQ6IGVuZERhdGUudGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgICAgfVxuICApO1xuXG4gIGluaXRTdGFydERhdGUgPSBzdGFydERhdGUgPT4gKFxuICAgIHN0YXJ0RGF0ZS52YWx1ZSAmJiBzdGFydERhdGUudmFsdWUubW9tZW50ID8gc3RhcnREYXRlIDpcbiAgICAgIHtcbiAgICAgICAgLi4uc3RhcnREYXRlLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIC4uLnN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgICAgICBtb21lbnQ6IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJULFxuICAgICAgICB9LFxuICAgICAgfVxuICApO1xuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChzZWxlY3RlZFN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMuaW5pdFN0YXJ0RGF0ZShzZWxlY3RlZFN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuaW5pdEVuZERhdGUoZW5kRGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSB9KTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IGRhdGUsXG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChzZWxlY3RlZEVuZERhdGUpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5pbml0U3RhcnREYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHRoaXMuaW5pdEVuZERhdGUoc2VsZWN0ZWRFbmREYXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0ZS52YWx1ZSxcbiAgICAgICAgcGVyaW9kOiB7XG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRpbWluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHRpbWluZyxcbiAgICAgIG1vbWVudDogdGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGU6IHNlbGVjdGVkRW5kRGF0ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0JsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZShlbmREYXRlKTtcbiAgfVxuXG4gIGhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlID0gKHVuaXQpID0+IHtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHVuaXQ6IHVuaXQudmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2Uoc2VsZWN0ZWRFbmREYXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGFydERhdGVPcHRpb25zID0gcmVsYXRpdmVEYXRlT3B0aW9ucyh0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZ3JhbnVsYXJpdGllcyA9IHRoaXMuZ2V0R3JhbnVsYXJpdHlPcHRpb25zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmlvZFNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJwZXJpb2RTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdmcm9tJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXJ0RGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8Q291bnRTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWVuZC1kYXRlXCJcbiAgICAgICAgICBpZD1cInBlcmlvZEVuZERhdGVcIlxuICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAndG8nKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQcmltaXRpdmUuSW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlLnRpbWluZ31cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZVRpbWluZ0JsdXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1pbmdDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db3VudFNlY3Rpb24+XG4gICAgICAgIDxHcmFudWxhcml0eVNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtZ3JhbnVsYXJpdHlcIlxuICAgICAgICAgIGlkPVwicGVyaW9kR3JhbnVsYXJpdHlcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHcmFudWxhcml0eUNoYW5nZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e2dyYW51bGFyaXRpZXN9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTZWxlY3RlZEdyYW51bGFyaXR5KGdyYW51bGFyaXRpZXMsIGVuZERhdGUudW5pdCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmFudWxhcml0eVNlY3Rpb24+XG4gICAgICA8L1BlcmlvZFNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5QZXJpb2QucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5QZXJpb2QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19