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
      var translations = _this.props.translations;
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

      _this.props.onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (selectedEndDate) {
      var translations = _this.props.translations;
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

      _this.props.onChange(state);
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
      value: startDate
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
      value: this.getSelectedGranularity(granularities, endDate.unit)
    }))));
  };

  return Period;
}(React.PureComponent);

export { Period as default };
Period.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsIlByaW1pdGl2ZSIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJmb3JtYXRMYWJlbCIsIkh5cGhlbiIsInByb3BUeXBlcyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwicmVsYXRpdmVEYXRlT3B0aW9ucyIsInRyYW5zbGF0ZSIsIlBlcmlvZFNlY3Rpb24iLCJkaXYiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIklucHV0Q29sdW1uIiwiY29sb3JzIiwiZ3JleTMiLCJHcmFudWxhcml0eVNlY3Rpb24iLCJoYWxmR3V0dGVyV2lkdGgiLCJQZXJpb2QiLCJwcm9wcyIsInRyYW5zbGF0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJEQVkiLCJXRUVLREFZIiwiV0VFSyIsIk1PTlRIIiwiZ3JhbnVsYXJpdGllcyIsImZpbmQiLCJncmFudWxhcml0eSIsImVuZERhdGUiLCJtb21lbnQiLCJ0aW1pbmciLCJTVEFSVCIsIkVORCIsInN0YXJ0RGF0ZSIsInNlbGVjdGVkU3RhcnREYXRlIiwic3RhdGUiLCJpbml0U3RhcnREYXRlIiwiZGF0ZSIsImluaXRFbmREYXRlIiwic2V0U3RhdGUiLCJwZXJpb2QiLCJvbkNoYW5nZSIsInNlbGVjdGVkRW5kRGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwiTnVtYmVyIiwiaXNOYU4iLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwidW5pdCIsInJlbmRlciIsInN0YXJ0RGF0ZU9wdGlvbnMiLCJnZXRHcmFudWxhcml0eU9wdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJoYW5kbGVUaW1pbmdCbHVyIiwiaGFuZGxlVGltaW5nQ2hhbmdlIiwiaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2UiLCJnZXRTZWxlY3RlZEdyYW51bGFyaXR5IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBRUEsU0FBU0MsY0FBVCxRQUErQixtQ0FBL0I7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxTQUFsQixFQUE2QkMsS0FBN0IsUUFBMEMsa0NBQTFDO0FBRUEsT0FBT0MsV0FBUCxNQUF3Qiw0QkFBeEI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGlCQUF6QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsMEJBQXhCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixxQkFBbkI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGNBQXRCO0FBQ0EsT0FBT0MsaUJBQVAsTUFBOEIsdUJBQTlCO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsOEJBQWhDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQiw4QkFBdEI7QUFFQSxJQUFNQyxhQUFhLEdBQUdiLE1BQU0sQ0FBQ2MsR0FBVixvQkFLTlYsS0FBSyxDQUFDVyxXQUxBLENBQW5CO0FBU0EsSUFBTUMsWUFBWSxHQUFHaEIsTUFBTSxDQUFDRSxPQUFPLENBQUNlLFdBQVQsQ0FBVCxxQkFJRWIsS0FBSyxDQUFDYyxNQUFOLENBQWFDLEtBSmYsQ0FBbEI7QUFRQSxJQUFNQyxrQkFBa0IsR0FBR3BCLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDZSxXQUFULENBQVQscUJBR1BiLEtBQUssQ0FBQ2lCLGVBSEMsRUFJTGpCLEtBQUssQ0FBQ2lCLGVBSkQsQ0FBeEI7O0lBT3FCQyxNOzs7OztBQUNuQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsS0FBTjs7QUFEaUIsNEVBVUssWUFBTTtBQUFBLFVBQ3BCQyxZQURvQixHQUNILE1BQUtELEtBREYsQ0FDcEJDLFlBRG9CO0FBRTVCLGFBQU8sQ0FDTDtBQUNFQyxRQUFBQSxLQUFLLEVBQUViLFNBQVMsQ0FBQ1ksWUFBRCxFQUFlLEtBQWYsRUFBc0IsUUFBdEIsQ0FEbEI7QUFFRUUsUUFBQUEsS0FBSyxFQUFFaEIsaUJBQWlCLENBQUNpQjtBQUYzQixPQURLLEVBS0w7QUFDRUYsUUFBQUEsS0FBSyxFQUFFYixTQUFTLENBQUNZLFlBQUQsRUFBZSxTQUFmLEVBQTBCLFFBQTFCLENBRGxCO0FBRUVFLFFBQUFBLEtBQUssRUFBRWhCLGlCQUFpQixDQUFDa0I7QUFGM0IsT0FMSyxFQVNMO0FBQ0VILFFBQUFBLEtBQUssRUFBRWIsU0FBUyxDQUFDWSxZQUFELEVBQWUsTUFBZixFQUF1QixRQUF2QixDQURsQjtBQUVFRSxRQUFBQSxLQUFLLEVBQUVoQixpQkFBaUIsQ0FBQ21CO0FBRjNCLE9BVEssRUFhTDtBQUNFSixRQUFBQSxLQUFLLEVBQUViLFNBQVMsQ0FBQ1ksWUFBRCxFQUFlLE9BQWYsRUFBd0IsUUFBeEIsQ0FEbEI7QUFFRUUsUUFBQUEsS0FBSyxFQUFFaEIsaUJBQWlCLENBQUNvQjtBQUYzQixPQWJLLENBQVA7QUFrQkQsS0E5QmtCOztBQUFBLDZFQWdDTSxVQUFDQyxhQUFELEVBQWdCTCxLQUFoQjtBQUFBLGFBQ3ZCSyxhQUFhLENBQUNDLElBQWQsQ0FBbUIsVUFBQUMsV0FBVztBQUFBLGVBQUlBLFdBQVcsQ0FBQ1AsS0FBWixLQUFzQkEsS0FBMUI7QUFBQSxPQUE5QixLQUFrRUssYUFBYSxDQUFDLENBQUQsQ0FEeEQ7QUFBQSxLQWhDTjs7QUFBQSxrRUFvQ0wsVUFBQUcsT0FBTztBQUFBLGFBQ25CQSxPQUFPLENBQUNDLE1BQVIsR0FBaUJELE9BQWpCLGdCQUVPQSxPQUZQO0FBR0lDLFFBQUFBLE1BQU0sRUFBRUQsT0FBTyxDQUFDRSxNQUFSLEdBQWlCLENBQWpCLEdBQXFCMUIsaUJBQWlCLENBQUMyQixLQUF2QyxHQUErQzNCLGlCQUFpQixDQUFDNEI7QUFIN0UsUUFEbUI7QUFBQSxLQXBDRjs7QUFBQSxvRUE0Q0gsVUFBQUMsU0FBUztBQUFBLGFBQ3ZCQSxTQUFTLENBQUNiLEtBQVYsSUFBbUJhLFNBQVMsQ0FBQ2IsS0FBVixDQUFnQlMsTUFBbkMsR0FBNENJLFNBQTVDLGdCQUVPQSxTQUZQO0FBR0liLFFBQUFBLEtBQUssZUFDQWEsU0FBUyxDQUFDYixLQURWO0FBRUhTLFVBQUFBLE1BQU0sRUFBRXpCLGlCQUFpQixDQUFDMkI7QUFGdkI7QUFIVCxRQUR1QjtBQUFBLEtBNUNOOztBQUFBLDRFQXVESyxVQUFDRyxpQkFBRCxFQUF1QjtBQUFBLFVBQ3JDaEIsWUFEcUMsR0FDcEIsTUFBS0QsS0FEZSxDQUNyQ0MsWUFEcUM7QUFBQSxVQUVyQ1UsT0FGcUMsR0FFekIsTUFBS08sS0FGb0IsQ0FFckNQLE9BRnFDOztBQUk3QyxVQUFNSyxTQUFTLEdBQUcsTUFBS0csYUFBTCxDQUFtQkYsaUJBQW5CLENBQWxCOztBQUNBLFVBQU1HLElBQUksR0FBRyxNQUFLQyxXQUFMLENBQWlCVixPQUFqQixDQUFiOztBQUNBLFlBQUtXLFFBQUwsQ0FBYztBQUFFTixRQUFBQSxTQUFTLEVBQVRBO0FBQUYsT0FBZDs7QUFDQSxVQUFNRSxLQUFLLEdBQUc7QUFDWlAsUUFBQUEsT0FBTyxFQUFFUyxJQURHO0FBRVpKLFFBQUFBLFNBQVMsRUFBRUEsU0FBUyxDQUFDYixLQUZUO0FBR1pBLFFBQUFBLEtBQUssRUFBRW5CLFdBQVcsQ0FBQ2dDLFNBQUQsRUFBWUwsT0FBWixFQUFxQlYsWUFBckIsQ0FITjtBQUlac0IsUUFBQUEsTUFBTSxFQUFFO0FBQ05QLFVBQUFBLFNBQVMsRUFBVEEsU0FETTtBQUVOTCxVQUFBQSxPQUFPLEVBQUVTO0FBRkg7QUFKSSxPQUFkOztBQVNBLFlBQUtwQixLQUFMLENBQVd3QixRQUFYLENBQW9CTixLQUFwQjtBQUNELEtBeEVrQjs7QUFBQSwwRUEwRUcsVUFBQ08sZUFBRCxFQUFxQjtBQUFBLFVBQ2pDeEIsWUFEaUMsR0FDaEIsTUFBS0QsS0FEVyxDQUNqQ0MsWUFEaUM7QUFBQSxVQUVqQ2UsU0FGaUMsR0FFbkIsTUFBS0UsS0FGYyxDQUVqQ0YsU0FGaUM7O0FBR3pDLFVBQU1JLElBQUksR0FBRyxNQUFLRCxhQUFMLENBQW1CSCxTQUFuQixDQUFiOztBQUNBLFVBQU1MLE9BQU8sR0FBRyxNQUFLVSxXQUFMLENBQWlCSSxlQUFqQixDQUFoQjs7QUFDQSxZQUFLSCxRQUFMLENBQWM7QUFBRVgsUUFBQUEsT0FBTyxFQUFQQTtBQUFGLE9BQWQ7O0FBQ0EsVUFBSU8sS0FBSyxHQUFHO0FBQ1ZQLFFBQUFBLE9BQU8sRUFBUEEsT0FEVTtBQUVWWSxRQUFBQSxNQUFNLEVBQUU7QUFDTlosVUFBQUEsT0FBTyxFQUFQQTtBQURNO0FBRkUsT0FBWjs7QUFNQSxVQUFJSyxTQUFKLEVBQWU7QUFDYkUsUUFBQUEsS0FBSyxHQUFHO0FBQ05QLFVBQUFBLE9BQU8sRUFBUEEsT0FETTtBQUVOUixVQUFBQSxLQUFLLEVBQUVuQixXQUFXLENBQUNnQyxTQUFELEVBQVlMLE9BQVosRUFBcUJWLFlBQXJCLENBRlo7QUFHTmUsVUFBQUEsU0FBUyxFQUFFSSxJQUFJLENBQUNqQixLQUhWO0FBSU5vQixVQUFBQSxNQUFNLEVBQUU7QUFDTlosWUFBQUEsT0FBTyxFQUFQQSxPQURNO0FBRU5LLFlBQUFBLFNBQVMsRUFBVEE7QUFGTTtBQUpGLFNBQVI7QUFTRDs7QUFDRCxZQUFLaEIsS0FBTCxDQUFXd0IsUUFBWCxDQUFvQk4sS0FBcEI7QUFDRCxLQWxHa0I7O0FBQUEseUVBb0dFLFVBQUNRLEtBQUQsRUFBVztBQUM5QixVQUFNYixNQUFNLEdBQUdhLEtBQUssQ0FBQ0MsTUFBTixDQUFheEIsS0FBNUI7QUFEOEIsVUFFdEJRLE9BRnNCLEdBRVYsTUFBS08sS0FGSyxDQUV0QlAsT0FGc0I7O0FBRzlCLFVBQU1jLGVBQWUsZ0JBQ2hCZCxPQURnQjtBQUVuQkUsUUFBQUEsTUFBTSxFQUFOQSxNQUZtQjtBQUduQkQsUUFBQUEsTUFBTSxFQUFFQyxNQUFNLEdBQUcsQ0FBVCxHQUFhMUIsaUJBQWlCLENBQUMyQixLQUEvQixHQUF1QzNCLGlCQUFpQixDQUFDNEI7QUFIOUMsUUFBckI7O0FBS0EsWUFBS08sUUFBTCxDQUFjO0FBQUVYLFFBQUFBLE9BQU8sRUFBRWM7QUFBWCxPQUFkO0FBQ0QsS0E3R2tCOztBQUFBLHVFQStHQSxZQUFNO0FBQUEsVUFDZmQsT0FEZSxHQUNILE1BQUtPLEtBREYsQ0FDZlAsT0FEZTtBQUV2QixVQUFNRSxNQUFNLEdBQUdlLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRCxNQUFNLENBQUNqQixPQUFPLENBQUNFLE1BQVQsQ0FBbkIsSUFBdUMsQ0FBdkMsR0FBMkNlLE1BQU0sQ0FBQ2pCLE9BQU8sQ0FBQ0UsTUFBVCxDQUFoRTs7QUFDQSxZQUFLaUIsbUJBQUwsY0FBOEJuQixPQUE5QjtBQUF1Q0UsUUFBQUEsTUFBTSxFQUFOQTtBQUF2QztBQUNELEtBbkhrQjs7QUFBQSw4RUFxSE8sVUFBQ2tCLElBQUQsRUFBVTtBQUFBLFVBQzFCcEIsT0FEMEIsR0FDZCxNQUFLTyxLQURTLENBQzFCUCxPQUQwQjs7QUFFbEMsVUFBTWMsZUFBZSxnQkFDaEJkLE9BRGdCO0FBRW5Cb0IsUUFBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUM1QjtBQUZRLFFBQXJCOztBQUlBLFlBQUsyQixtQkFBTCxDQUF5QkwsZUFBekI7QUFDRCxLQTVIa0I7O0FBQUEsUUFHVGQsUUFIUyxHQUdjWCxLQUhkLENBR1RXLE9BSFM7QUFBQSxRQUdBSyxVQUhBLEdBR2NoQixLQUhkLENBR0FnQixTQUhBO0FBSWpCLFVBQUtFLEtBQUwsR0FBYTtBQUNYUCxNQUFBQSxPQUFPLEVBQVBBLFFBRFc7QUFFWEssTUFBQUEsU0FBUyxFQUFUQTtBQUZXLEtBQWI7QUFKaUI7QUFRbEI7Ozs7U0FzSERnQixNLEdBQUEsa0JBQVM7QUFBQSxRQUNDL0IsWUFERCxHQUNrQixLQUFLRCxLQUR2QixDQUNDQyxZQUREO0FBRVAsUUFBTWdDLGdCQUFnQixHQUFHN0MsbUJBQW1CLENBQUNDLFNBQVMsQ0FBQ1ksWUFBRCxFQUFlLE9BQWYsQ0FBVixDQUE1QztBQUZPLHNCQUd3QixLQUFLaUIsS0FIN0I7QUFBQSxRQUdDUCxPQUhELGVBR0NBLE9BSEQ7QUFBQSxRQUdVSyxTQUhWLGVBR1VBLFNBSFY7QUFJUCxRQUFNUixhQUFhLEdBQUcsS0FBSzBCLHFCQUFMLEVBQXRCO0FBRUEsV0FDRSxvQkFBQyxhQUFELFFBQ0Usb0JBQUMsV0FBRCxRQUNFLG9CQUFDLE9BQUQsQ0FBUyxXQUFUO0FBQ0UsTUFBQSxTQUFTLEVBQUMsbUJBRFo7QUFFRSxNQUFBLEVBQUUsRUFBQyxpQkFGTDtBQUdFLE1BQUEsS0FBSyxFQUFFN0MsU0FBUyxDQUFDWSxZQUFELEVBQWUsTUFBZjtBQUhsQixPQUtFLG9CQUFDLGNBQUQsZUFDTSxLQUFLRCxLQURYO0FBRUUsTUFBQSxTQUFTLEVBQUUsS0FGYjtBQUdFLE1BQUEsUUFBUSxFQUFFLEtBQUttQyxxQkFIakI7QUFJRSxNQUFBLE9BQU8sRUFBRUYsZ0JBSlg7QUFLRSxNQUFBLEtBQUssRUFBRWpCO0FBTFQsT0FMRixDQURGLENBREYsRUFnQkUsb0JBQUMsTUFBRCxPQWhCRixFQWlCRSxvQkFBQyxZQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUMsaUJBRFo7QUFFRSxNQUFBLEVBQUUsRUFBQyxlQUZMO0FBR0UsTUFBQSxLQUFLLEVBQUUzQixTQUFTLENBQUNZLFlBQUQsRUFBZSxJQUFmO0FBSGxCLE9BS0Usb0JBQUMsU0FBRCxDQUFXLEtBQVg7QUFDRSxNQUFBLEtBQUssRUFBRVUsT0FBTyxDQUFDRSxNQURqQjtBQUVFLE1BQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxNQUFBLE1BQU0sRUFBRSxLQUFLdUIsZ0JBSGY7QUFJRSxNQUFBLFFBQVEsRUFBRSxLQUFLQztBQUpqQixNQUxGLENBakJGLEVBNkJFLG9CQUFDLGtCQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUMsb0JBRFo7QUFFRSxNQUFBLEVBQUUsRUFBQztBQUZMLE9BSUUsb0JBQUMsY0FBRCxlQUNNLEtBQUtyQyxLQURYO0FBRUUsTUFBQSxTQUFTLEVBQUUsS0FGYjtBQUdFLE1BQUEsUUFBUSxFQUFFLEtBQUtzQyx1QkFIakI7QUFJRSxNQUFBLE9BQU8sRUFBRTlCLGFBSlg7QUFLRSxNQUFBLEtBQUssRUFBRSxLQUFLK0Isc0JBQUwsQ0FBNEIvQixhQUE1QixFQUEyQ0csT0FBTyxDQUFDb0IsSUFBbkQ7QUFMVCxPQUpGLENBN0JGLENBREY7QUE0Q0QsRzs7O0VBakxpQ3ZELEtBQUssQ0FBQ2dFLGE7O1NBQXJCekMsTTtBQXNMckJBLE1BQU0sQ0FBQ2hCLFlBQVAsR0FBc0JBLFlBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbG9hdGluZ1NlbGVjdCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWZsb2F0aW5nLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250ZW50LCBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGZvcm1hdExhYmVsIGZyb20gJy4vcGVyaW9kLWxhYmVsLmZvcm1hdHRlcic7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlbGF0aXZlQ29uc3RhbnRzIGZyb20gJy4uL3JlbGF0aXZlL2NvbnN0YW50cyc7XG5pbXBvcnQgcmVsYXRpdmVEYXRlT3B0aW9ucyBmcm9tICcuLi9yZWxhdGl2ZS9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFBlcmlvZFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbmA7XG5cbmNvbnN0IENvdW50U2VjdGlvbiA9IHN0eWxlZChDb250ZW50LklucHV0Q29sdW1uKWBcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGlucHV0IHtcbiAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgfVxuYDtcblxuY29uc3QgR3JhbnVsYXJpdHlTZWN0aW9uID0gc3R5bGVkKENvbnRlbnQuSW5wdXRDb2x1bW4pYFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJpb2QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBzdGFydERhdGUsXG4gICAgfTtcbiAgfVxuXG4gIGdldEdyYW51bGFyaXR5T3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RheScsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLkRBWSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnd2Vla2RheScsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLldFRUtEQVksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3dlZWsnLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5XRUVLLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdtb250aCcsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLk1PTlRILFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xuXG4gIGdldFNlbGVjdGVkR3JhbnVsYXJpdHkgPSAoZ3JhbnVsYXJpdGllcywgdmFsdWUpID0+IChcbiAgICBncmFudWxhcml0aWVzLmZpbmQoZ3JhbnVsYXJpdHkgPT4gZ3JhbnVsYXJpdHkudmFsdWUgPT09IHZhbHVlKSB8fCBncmFudWxhcml0aWVzWzBdXG4gICk7XG5cbiAgaW5pdEVuZERhdGUgPSBlbmREYXRlID0+IChcbiAgICBlbmREYXRlLm1vbWVudCA/IGVuZERhdGUgOlxuICAgICAge1xuICAgICAgICAuLi5lbmREYXRlLFxuICAgICAgICBtb21lbnQ6IGVuZERhdGUudGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgICAgfVxuICApO1xuXG4gIGluaXRTdGFydERhdGUgPSBzdGFydERhdGUgPT4gKFxuICAgIHN0YXJ0RGF0ZS52YWx1ZSAmJiBzdGFydERhdGUudmFsdWUubW9tZW50ID8gc3RhcnREYXRlIDpcbiAgICAgIHtcbiAgICAgICAgLi4uc3RhcnREYXRlLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIC4uLnN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgICAgICBtb21lbnQ6IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJULFxuICAgICAgICB9LFxuICAgICAgfVxuICApO1xuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChzZWxlY3RlZFN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMuaW5pdFN0YXJ0RGF0ZShzZWxlY3RlZFN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuaW5pdEVuZERhdGUoZW5kRGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSB9KTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IGRhdGUsXG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChzZWxlY3RlZEVuZERhdGUpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5pbml0U3RhcnREYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHRoaXMuaW5pdEVuZERhdGUoc2VsZWN0ZWRFbmREYXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0ZS52YWx1ZSxcbiAgICAgICAgcGVyaW9kOiB7XG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRpbWluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHRpbWluZyxcbiAgICAgIG1vbWVudDogdGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGU6IHNlbGVjdGVkRW5kRGF0ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0JsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRpbWluZyA9IE51bWJlci5pc05hTihOdW1iZXIoZW5kRGF0ZS50aW1pbmcpKSA/IDAgOiBOdW1iZXIoZW5kRGF0ZS50aW1pbmcpO1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZSh7IC4uLmVuZERhdGUsIHRpbWluZyB9KTtcbiAgfVxuXG4gIGhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlID0gKHVuaXQpID0+IHtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHVuaXQ6IHVuaXQudmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2Uoc2VsZWN0ZWRFbmREYXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGFydERhdGVPcHRpb25zID0gcmVsYXRpdmVEYXRlT3B0aW9ucyh0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZ3JhbnVsYXJpdGllcyA9IHRoaXMuZ2V0R3JhbnVsYXJpdHlPcHRpb25zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmlvZFNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJwZXJpb2RTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdmcm9tJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXJ0RGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8Q291bnRTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWVuZC1kYXRlXCJcbiAgICAgICAgICBpZD1cInBlcmlvZEVuZERhdGVcIlxuICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAndG8nKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQcmltaXRpdmUuSW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlLnRpbWluZ31cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZVRpbWluZ0JsdXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1pbmdDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db3VudFNlY3Rpb24+XG4gICAgICAgIDxHcmFudWxhcml0eVNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtZ3JhbnVsYXJpdHlcIlxuICAgICAgICAgIGlkPVwicGVyaW9kR3JhbnVsYXJpdHlcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHcmFudWxhcml0eUNoYW5nZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e2dyYW51bGFyaXRpZXN9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTZWxlY3RlZEdyYW51bGFyaXR5KGdyYW51bGFyaXRpZXMsIGVuZERhdGUudW5pdCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmFudWxhcml0eVNlY3Rpb24+XG4gICAgICA8L1BlcmlvZFNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5QZXJpb2QucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5QZXJpb2QuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19