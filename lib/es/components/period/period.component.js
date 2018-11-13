var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 80px;\n'], ['\n  width: 80px;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  align-self: flex-end;\n  width: 140px;\n  margin-left: ', ';\n'], ['\n  align-self: flex-end;\n  width: 140px;\n  margin-left: ', ';\n']);

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

var GranularitySection = styled(Content.InputColumn)(_templateObject3, theme.halfGutterWidth);

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

  this.handleStartDateChange = function (selectedStartDate) {
    var translations = _this2.props.translations;
    var endDate = _this2.state.endDate;


    var startDate = selectedStartDate.value.moment ? selectedStartDate : _extends({}, selectedStartDate, {
      value: _extends({}, selectedStartDate.value, {
        moment: RelativeConstants.START
      })
    });
    _this2.setState({ startDate: startDate });
    var date = endDate.moment ? endDate : _extends({}, endDate, {
      moment: endDate.timing < 0 ? RelativeConstants.START : RelativeConstants.END
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
    _this2.props.onChange(state);
  };

  this.handleEndDateChange = function (endDate) {
    var translations = _this2.props.translations;
    var startDate = _this2.state.startDate;

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
        startDate: startDate.value,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsIlByaW1pdGl2ZSIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJmb3JtYXRMYWJlbCIsIkh5cGhlbiIsInByb3BUeXBlcyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwicmVsYXRpdmVEYXRlT3B0aW9ucyIsInRyYW5zbGF0ZSIsIlBlcmlvZFNlY3Rpb24iLCJkaXYiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIklucHV0Q29sdW1uIiwiR3JhbnVsYXJpdHlTZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiUGVyaW9kIiwicHJvcHMiLCJlbmREYXRlIiwic3RhcnREYXRlIiwic3RhdGUiLCJyZW5kZXIiLCJ0cmFuc2xhdGlvbnMiLCJzdGFydERhdGVPcHRpb25zIiwiZ3JhbnVsYXJpdGllcyIsImdldEdyYW51bGFyaXR5T3B0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsInRpbWluZyIsImhhbmRsZVRpbWluZ0NoYW5nZSIsImhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlIiwiZ2V0U2VsZWN0ZWRHcmFudWxhcml0eSIsInVuaXQiLCJQdXJlQ29tcG9uZW50IiwibGFiZWwiLCJ2YWx1ZSIsIkRBWSIsIldFRUsiLCJNT05USCIsImZpbmQiLCJncmFudWxhcml0eSIsInNlbGVjdGVkU3RhcnREYXRlIiwibW9tZW50IiwiU1RBUlQiLCJzZXRTdGF0ZSIsImRhdGUiLCJFTkQiLCJwZXJpb2QiLCJvbkNoYW5nZSIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJldmVudCIsIk51bWJlciIsImlzTmFOIiwidGFyZ2V0Iiwic2VsZWN0ZWRFbmREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7O0FBRUEsU0FBU0MsY0FBVCxRQUErQixtQ0FBL0I7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxTQUFsQixFQUE2QkMsS0FBN0IsUUFBMEMsa0NBQTFDOztBQUVBLE9BQU9DLFdBQVAsTUFBd0IsNEJBQXhCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixpQkFBekI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLDBCQUF4QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIscUJBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixjQUF0QjtBQUNBLE9BQU9DLGlCQUFQLE1BQThCLHVCQUE5QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLDhCQUFoQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsOEJBQXRCOztBQUVBLElBQU1DLGdCQUFnQmIsT0FBT2MsR0FBdkIsa0JBS09WLE1BQU1XLFdBTGIsQ0FBTjs7QUFRQSxJQUFNQyxlQUFlaEIsT0FBT0UsUUFBUWUsV0FBZixDQUFmLGtCQUFOOztBQUlBLElBQU1DLHFCQUFxQmxCLE9BQU9FLFFBQVFlLFdBQWYsQ0FBckIsbUJBR1diLE1BQU1lLGVBSGpCLENBQU47O0lBTXFCQyxNOzs7QUFDbkIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBQUEsUUFHVEMsT0FIUyxHQUdjRCxLQUhkLENBR1RDLE9BSFM7QUFBQSxRQUdBQyxTQUhBLEdBR2NGLEtBSGQsQ0FHQUUsU0FIQTs7QUFJakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hGLHNCQURXO0FBRVhDO0FBRlcsS0FBYjtBQUppQjtBQVFsQjs7bUJBa0dERSxNLHFCQUFTO0FBQUEsUUFDQ0MsWUFERCxHQUNrQixLQUFLTCxLQUR2QixDQUNDSyxZQUREOztBQUVQLFFBQU1DLG1CQUFtQmhCLG9CQUFvQkMsVUFBVWMsWUFBVixFQUF3QixPQUF4QixDQUFwQixDQUF6QjtBQUZPLGlCQUd3QixLQUFLRixLQUg3QjtBQUFBLFFBR0NGLE9BSEQsVUFHQ0EsT0FIRDtBQUFBLFFBR1VDLFNBSFYsVUFHVUEsU0FIVjs7QUFJUCxRQUFNSyxnQkFBZ0IsS0FBS0MscUJBQUwsRUFBdEI7O0FBRUEsV0FDRTtBQUFDLG1CQUFEO0FBQUE7QUFDRTtBQUFDLG1CQUFEO0FBQUE7QUFDRTtBQUFDLGlCQUFELENBQVMsV0FBVDtBQUFBO0FBQ0UsdUJBQVUsbUJBRFo7QUFFRSxnQkFBRyxpQkFGTDtBQUdFLG1CQUFPakIsVUFBVWMsWUFBVixFQUF3QixNQUF4QjtBQUhUO0FBS0UsOEJBQUMsY0FBRCxlQUNNLEtBQUtMLEtBRFg7QUFFRSx1QkFBVyxLQUZiO0FBR0Usc0JBQVUsS0FBS1MscUJBSGpCO0FBSUUscUJBQVNILGdCQUpYO0FBS0UsbUJBQU9KO0FBTFQ7QUFMRjtBQURGLE9BREY7QUFnQkUsMEJBQUMsTUFBRCxPQWhCRjtBQWlCRTtBQUFDLG9CQUFEO0FBQUE7QUFDRSxxQkFBVSxpQkFEWjtBQUVFLGNBQUcsZUFGTDtBQUdFLGlCQUFPWCxVQUFVYyxZQUFWLEVBQXdCLElBQXhCO0FBSFQ7QUFLRSw0QkFBQyxTQUFELENBQVcsS0FBWCxJQUFpQixPQUFPSixRQUFRUyxNQUFoQyxFQUF3QyxNQUFLLFFBQTdDLEVBQXNELFVBQVUsS0FBS0Msa0JBQXJFO0FBTEYsT0FqQkY7QUF3QkU7QUFBQywwQkFBRDtBQUFBO0FBQ0UscUJBQVUsb0JBRFo7QUFFRSxjQUFHO0FBRkw7QUFJRSw0QkFBQyxjQUFELGVBQ00sS0FBS1gsS0FEWDtBQUVFLHFCQUFXLEtBRmI7QUFHRSxvQkFBVSxLQUFLWSx1QkFIakI7QUFJRSxtQkFBU0wsYUFKWDtBQUtFLGlCQUFPLEtBQUtNLHNCQUFMLENBQTRCTixhQUE1QixFQUEyQ04sUUFBUWEsSUFBbkQ7QUFMVDtBQUpGO0FBeEJGLEtBREY7QUF1Q0QsRzs7O0VBeEppQ3BDLE1BQU1xQyxhOzs7T0FXeENQLHFCLEdBQXdCLFlBQU07QUFBQSxRQUNwQkgsWUFEb0IsR0FDSCxPQUFLTCxLQURGLENBQ3BCSyxZQURvQjs7QUFFNUIsV0FBTyxDQUNMO0FBQ0VXLGFBQU96QixVQUFVYyxZQUFWLEVBQXdCLEtBQXhCLEVBQStCLFFBQS9CLENBRFQ7QUFFRVksYUFBTzVCLGtCQUFrQjZCO0FBRjNCLEtBREssRUFLTDtBQUNFRixhQUFPekIsVUFBVWMsWUFBVixFQUF3QixNQUF4QixFQUFnQyxRQUFoQyxDQURUO0FBRUVZLGFBQU81QixrQkFBa0I4QjtBQUYzQixLQUxLLEVBU0w7QUFDRUgsYUFBT3pCLFVBQVVjLFlBQVYsRUFBd0IsT0FBeEIsRUFBaUMsUUFBakMsQ0FEVDtBQUVFWSxhQUFPNUIsa0JBQWtCK0I7QUFGM0IsS0FUSyxDQUFQO0FBY0QsRzs7T0FFRFAsc0IsR0FBeUIsVUFBQ04sYUFBRCxFQUFnQlUsS0FBaEI7QUFBQSxXQUN2QlYsY0FBY2MsSUFBZCxDQUFtQjtBQUFBLGFBQWVDLFlBQVlMLEtBQVosS0FBc0JBLEtBQXJDO0FBQUEsS0FBbkIsS0FBa0VWLGNBQWMsQ0FBZCxDQUQzQztBQUFBLEc7O09BSXpCRSxxQixHQUF3QixVQUFDYyxpQkFBRCxFQUF1QjtBQUFBLFFBQ3JDbEIsWUFEcUMsR0FDcEIsT0FBS0wsS0FEZSxDQUNyQ0ssWUFEcUM7QUFBQSxRQUVyQ0osT0FGcUMsR0FFekIsT0FBS0UsS0FGb0IsQ0FFckNGLE9BRnFDOzs7QUFJN0MsUUFBTUMsWUFBWXFCLGtCQUFrQk4sS0FBbEIsQ0FBd0JPLE1BQXhCLEdBQWlDRCxpQkFBakMsZ0JBRVhBLGlCQUZXO0FBR2ROLDBCQUNLTSxrQkFBa0JOLEtBRHZCO0FBRUVPLGdCQUFRbkMsa0JBQWtCb0M7QUFGNUI7QUFIYyxNQUFsQjtBQVFBLFdBQUtDLFFBQUwsQ0FBYyxFQUFFeEIsb0JBQUYsRUFBZDtBQUNBLFFBQU15QixPQUFPMUIsUUFBUXVCLE1BQVIsR0FBaUJ2QixPQUFqQixnQkFFTkEsT0FGTTtBQUdUdUIsY0FBUXZCLFFBQVFTLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUJyQixrQkFBa0JvQyxLQUF2QyxHQUErQ3BDLGtCQUFrQnVDO0FBSGhFLE1BQWI7QUFLQSxRQUFNekIsUUFBUTtBQUNaRixlQUFTMEIsSUFERztBQUVaekIsaUJBQVdBLFVBQVVlLEtBRlQ7QUFHWkEsYUFBTy9CLFlBQVlnQixTQUFaLEVBQXVCRCxPQUF2QixFQUFnQ0ksWUFBaEMsQ0FISztBQUlad0IsY0FBUTtBQUNOM0IsNEJBRE07QUFFTkQsaUJBQVMwQjtBQUZIO0FBSkksS0FBZDtBQVNBLFdBQUszQixLQUFMLENBQVc4QixRQUFYLENBQW9CM0IsS0FBcEI7QUFDRCxHOztPQUVENEIsbUIsR0FBc0IsVUFBQzlCLE9BQUQsRUFBYTtBQUFBLFFBQ3pCSSxZQUR5QixHQUNSLE9BQUtMLEtBREcsQ0FDekJLLFlBRHlCO0FBQUEsUUFFekJILFNBRnlCLEdBRVgsT0FBS0MsS0FGTSxDQUV6QkQsU0FGeUI7O0FBR2pDLFdBQUt3QixRQUFMLENBQWMsRUFBRXpCLGdCQUFGLEVBQWQ7QUFDQSxRQUFJRSxRQUFRO0FBQ1ZGLHNCQURVO0FBRVY0QixjQUFRO0FBQ041QjtBQURNO0FBRkUsS0FBWjtBQU1BLFFBQUlDLFNBQUosRUFBZTtBQUNiQyxjQUFRO0FBQ05GLHdCQURNO0FBRU5nQixlQUFPL0IsWUFBWWdCLFNBQVosRUFBdUJELE9BQXZCLEVBQWdDSSxZQUFoQyxDQUZEO0FBR05ILG1CQUFXQSxVQUFVZSxLQUhmO0FBSU5ZLGdCQUFRO0FBQ041QiwwQkFETTtBQUVOQztBQUZNO0FBSkYsT0FBUjtBQVNEO0FBQ0QsV0FBS0YsS0FBTCxDQUFXOEIsUUFBWCxDQUFvQjNCLEtBQXBCO0FBQ0QsRzs7T0FFRFEsa0IsR0FBcUIsVUFBQ3FCLEtBQUQsRUFBVztBQUM5QixRQUFNdEIsU0FBU3VCLE9BQU9DLEtBQVAsQ0FBYUYsTUFBTUcsTUFBTixDQUFhbEIsS0FBMUIsSUFBbUMsQ0FBbkMsR0FBdUNnQixPQUFPRCxNQUFNRyxNQUFOLENBQWFsQixLQUFwQixDQUF0RDtBQUQ4QixRQUV0QmhCLE9BRnNCLEdBRVYsT0FBS0UsS0FGSyxDQUV0QkYsT0FGc0I7O0FBRzlCLFFBQU1tQywrQkFDRG5DLE9BREM7QUFFSlMsb0JBRkk7QUFHSmMsY0FBUWQsU0FBUyxDQUFULEdBQWFyQixrQkFBa0JvQyxLQUEvQixHQUF1Q3BDLGtCQUFrQnVDO0FBSDdELE1BQU47QUFLQSxXQUFLRyxtQkFBTCxDQUF5QkssZUFBekI7QUFDRCxHOztPQUVEeEIsdUIsR0FBMEIsVUFBQ0UsSUFBRCxFQUFVO0FBQUEsUUFDMUJiLE9BRDBCLEdBQ2QsT0FBS0UsS0FEUyxDQUMxQkYsT0FEMEI7O0FBRWxDLFFBQU1tQywrQkFDRG5DLE9BREM7QUFFSmEsWUFBTUEsS0FBS0c7QUFGUCxNQUFOO0FBSUEsV0FBS2MsbUJBQUwsQ0FBeUJLLGVBQXpCO0FBQ0QsRzs7U0F6R2tCckMsTTs7O0FBNkpyQkEsT0FBT2QsWUFBUCxHQUFzQkEsWUFBdEIiLCJmaWxlIjoicGVyaW9kLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRmxvYXRpbmdTZWxlY3QgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1mbG9hdGluZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udGVudCwgUHJpbWl0aXZlLCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBmb3JtYXRMYWJlbCBmcm9tICcuL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBSZWxhdGl2ZUNvbnN0YW50cyBmcm9tICcuLi9yZWxhdGl2ZS9jb25zdGFudHMnO1xuaW1wb3J0IHJlbGF0aXZlRGF0ZU9wdGlvbnMgZnJvbSAnLi4vcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBQZXJpb2RTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAwIDA7XG5gO1xuXG5jb25zdCBDb3VudFNlY3Rpb24gPSBzdHlsZWQoQ29udGVudC5JbnB1dENvbHVtbilgXG4gIHdpZHRoOiA4MHB4O1xuYDtcblxuY29uc3QgR3JhbnVsYXJpdHlTZWN0aW9uID0gc3R5bGVkKENvbnRlbnQuSW5wdXRDb2x1bW4pYFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyaW9kIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgc3RhcnREYXRlLFxuICAgIH07XG4gIH1cblxuICBnZXRHcmFudWxhcml0eU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXknLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5EQVksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3dlZWsnLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5XRUVLLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdtb250aCcsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLk1PTlRILFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xuXG4gIGdldFNlbGVjdGVkR3JhbnVsYXJpdHkgPSAoZ3JhbnVsYXJpdGllcywgdmFsdWUpID0+IChcbiAgICBncmFudWxhcml0aWVzLmZpbmQoZ3JhbnVsYXJpdHkgPT4gZ3JhbnVsYXJpdHkudmFsdWUgPT09IHZhbHVlKSB8fCBncmFudWxhcml0aWVzWzBdXG4gICk7XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKHNlbGVjdGVkU3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qgc3RhcnREYXRlID0gc2VsZWN0ZWRTdGFydERhdGUudmFsdWUubW9tZW50ID8gc2VsZWN0ZWRTdGFydERhdGUgOlxuICAgICAge1xuICAgICAgICAuLi5zZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAuLi5zZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgICAgICBtb21lbnQ6IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJULFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlIH0pO1xuICAgIGNvbnN0IGRhdGUgPSBlbmREYXRlLm1vbWVudCA/IGVuZERhdGUgOlxuICAgICAge1xuICAgICAgICAuLi5lbmREYXRlLFxuICAgICAgICBtb21lbnQ6IGVuZERhdGUudGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgICAgfTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IGRhdGUsXG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChlbmREYXRlKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICB2YWx1ZTogZm9ybWF0TGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgICAgcGVyaW9kOiB7XG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRpbWluZyA9IE51bWJlci5pc05hTihldmVudC50YXJnZXQudmFsdWUpID8gMCA6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSB7XG4gICAgICAuLi5lbmREYXRlLFxuICAgICAgdGltaW5nLFxuICAgICAgbW9tZW50OiB0aW1pbmcgPCAwID8gUmVsYXRpdmVDb25zdGFudHMuU1RBUlQgOiBSZWxhdGl2ZUNvbnN0YW50cy5FTkQsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2Uoc2VsZWN0ZWRFbmREYXRlKTtcbiAgfVxuXG4gIGhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlID0gKHVuaXQpID0+IHtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHVuaXQ6IHVuaXQudmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2Uoc2VsZWN0ZWRFbmREYXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGFydERhdGVPcHRpb25zID0gcmVsYXRpdmVEYXRlT3B0aW9ucyh0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZ3JhbnVsYXJpdGllcyA9IHRoaXMuZ2V0R3JhbnVsYXJpdHlPcHRpb25zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmlvZFNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJwZXJpb2RTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdmcm9tJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXJ0RGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8Q291bnRTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWVuZC1kYXRlXCJcbiAgICAgICAgICBpZD1cInBlcmlvZEVuZERhdGVcIlxuICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAndG8nKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQcmltaXRpdmUuSW5wdXQgdmFsdWU9e2VuZERhdGUudGltaW5nfSB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltaW5nQ2hhbmdlfSAvPlxuICAgICAgICA8L0NvdW50U2VjdGlvbj5cbiAgICAgICAgPEdyYW51bGFyaXR5U2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1ncmFudWxhcml0eVwiXG4gICAgICAgICAgaWQ9XCJwZXJpb2RHcmFudWxhcml0eVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlfVxuICAgICAgICAgICAgb3B0aW9ucz17Z3JhbnVsYXJpdGllc31cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFNlbGVjdGVkR3JhbnVsYXJpdHkoZ3JhbnVsYXJpdGllcywgZW5kRGF0ZS51bml0KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyYW51bGFyaXR5U2VjdGlvbj5cbiAgICAgIDwvUGVyaW9kU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cblBlcmlvZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblBlcmlvZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=