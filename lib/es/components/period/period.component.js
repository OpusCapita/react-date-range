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

    var startDate = _extends({}, selectedStartDate, {
      value: _extends({}, selectedStartDate.value, {
        moment: endDate.timing < 0 ? RelativeConstants.END : RelativeConstants.START
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
      var date = _extends({}, startDate, {
        value: _extends({}, startDate.value, {
          moment: endDate.timing < 0 ? RelativeConstants.END : RelativeConstants.START
        })
      });
      state = {
        endDate: endDate,
        value: formatLabel(startDate, endDate, translations),
        startDate: date.value,
        period: {
          endDate: endDate,
          startDate: date
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkZsb2F0aW5nU2VsZWN0IiwiQ29udGVudCIsIlByaW1pdGl2ZSIsInRoZW1lIiwiRGF0ZVNlY3Rpb24iLCJkZWZhdWx0UHJvcHMiLCJmb3JtYXRMYWJlbCIsIkh5cGhlbiIsInByb3BUeXBlcyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwicmVsYXRpdmVEYXRlT3B0aW9ucyIsInRyYW5zbGF0ZSIsIlBlcmlvZFNlY3Rpb24iLCJkaXYiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIklucHV0Q29sdW1uIiwiR3JhbnVsYXJpdHlTZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiUGVyaW9kIiwicHJvcHMiLCJlbmREYXRlIiwic3RhcnREYXRlIiwic3RhdGUiLCJyZW5kZXIiLCJ0cmFuc2xhdGlvbnMiLCJzdGFydERhdGVPcHRpb25zIiwiZ3JhbnVsYXJpdGllcyIsImdldEdyYW51bGFyaXR5T3B0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsInRpbWluZyIsImhhbmRsZVRpbWluZ0NoYW5nZSIsImhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlIiwiZ2V0U2VsZWN0ZWRHcmFudWxhcml0eSIsInVuaXQiLCJQdXJlQ29tcG9uZW50IiwibGFiZWwiLCJ2YWx1ZSIsIkRBWSIsIldFRUsiLCJNT05USCIsImZpbmQiLCJncmFudWxhcml0eSIsInNlbGVjdGVkU3RhcnREYXRlIiwibW9tZW50IiwiRU5EIiwiU1RBUlQiLCJzZXRTdGF0ZSIsImRhdGUiLCJwZXJpb2QiLCJvbkNoYW5nZSIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJldmVudCIsIk51bWJlciIsImlzTmFOIiwidGFyZ2V0Iiwic2VsZWN0ZWRFbmREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1B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QUFhRixNQUFNRyxNQUFOLENBQWFsQixLQUExQixJQUFtQyxDQUFuQyxHQUF1Q2dCLE9BQU9ELE1BQU1HLE1BQU4sQ0FBYWxCLEtBQXBCLENBQXREO0FBRDhCLFFBRXRCaEIsT0FGc0IsR0FFVixPQUFLRSxLQUZLLENBRXRCRixPQUZzQjs7QUFHOUIsUUFBTW1DLCtCQUNEbkMsT0FEQztBQUVKUyxvQkFGSTtBQUdKYyxjQUFRZCxTQUFTLENBQVQsR0FBYXJCLGtCQUFrQnFDLEtBQS9CLEdBQXVDckMsa0JBQWtCb0M7QUFIN0QsTUFBTjtBQUtBLFdBQUtNLG1CQUFMLENBQXlCSyxlQUF6QjtBQUNELEc7O09BRUR4Qix1QixHQUEwQixVQUFDRSxJQUFELEVBQVU7QUFBQSxRQUMxQmIsT0FEMEIsR0FDZCxPQUFLRSxLQURTLENBQzFCRixPQUQwQjs7QUFFbEMsUUFBTW1DLCtCQUNEbkMsT0FEQztBQUVKYSxZQUFNQSxLQUFLRztBQUZQLE1BQU47QUFJQSxXQUFLYyxtQkFBTCxDQUF5QkssZUFBekI7QUFDRCxHOztTQTlHa0JyQyxNOzs7QUFrS3JCQSxPQUFPZCxZQUFQLEdBQXNCQSxZQUF0QiIsImZpbGUiOiJwZXJpb2QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbG9hdGluZ1NlbGVjdCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWZsb2F0aW5nLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250ZW50LCBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGZvcm1hdExhYmVsIGZyb20gJy4vcGVyaW9kLWxhYmVsLmZvcm1hdHRlcic7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlbGF0aXZlQ29uc3RhbnRzIGZyb20gJy4uL3JlbGF0aXZlL2NvbnN0YW50cyc7XG5pbXBvcnQgcmVsYXRpdmVEYXRlT3B0aW9ucyBmcm9tICcuLi9yZWxhdGl2ZS9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFBlcmlvZFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbmA7XG5cbmNvbnN0IENvdW50U2VjdGlvbiA9IHN0eWxlZChDb250ZW50LklucHV0Q29sdW1uKWBcbiAgd2lkdGg6IDgwcHg7XG5gO1xuXG5jb25zdCBHcmFudWxhcml0eVNlY3Rpb24gPSBzdHlsZWQoQ29udGVudC5JbnB1dENvbHVtbilgXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJpb2QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBzdGFydERhdGUsXG4gICAgfTtcbiAgfVxuXG4gIGdldEdyYW51bGFyaXR5T3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RheScsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLkRBWSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnd2VlaycsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLldFRUssXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ21vbnRoJywgJ3BsdXJhbCcpLFxuICAgICAgICB2YWx1ZTogUmVsYXRpdmVDb25zdGFudHMuTU9OVEgsXG4gICAgICB9LFxuICAgIF07XG4gIH07XG5cbiAgZ2V0U2VsZWN0ZWRHcmFudWxhcml0eSA9IChncmFudWxhcml0aWVzLCB2YWx1ZSkgPT4gKFxuICAgIGdyYW51bGFyaXRpZXMuZmluZChncmFudWxhcml0eSA9PiBncmFudWxhcml0eS52YWx1ZSA9PT0gdmFsdWUpIHx8IGdyYW51bGFyaXRpZXNbMF1cbiAgKTtcblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRTdGFydERhdGUpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc3RhcnREYXRlID0ge1xuICAgICAgLi4uc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICB2YWx1ZToge1xuICAgICAgICAuLi5zZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgICAgbW9tZW50OiBlbmREYXRlLnRpbWluZyA8IDAgPyBSZWxhdGl2ZUNvbnN0YW50cy5FTkQgOiBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlIH0pO1xuICAgIGNvbnN0IGRhdGUgPSBlbmREYXRlLm1vbWVudCA/IGVuZERhdGUgOlxuICAgICAge1xuICAgICAgICAuLi5lbmREYXRlLFxuICAgICAgICBtb21lbnQ6IGVuZERhdGUudGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgICAgfTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IGRhdGUsXG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChlbmREYXRlKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSB7XG4gICAgICAgIC4uLnN0YXJ0RGF0ZSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAuLi5zdGFydERhdGUudmFsdWUsXG4gICAgICAgICAgbW9tZW50OiBlbmREYXRlLnRpbWluZyA8IDAgPyBSZWxhdGl2ZUNvbnN0YW50cy5FTkQgOiBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgdmFsdWU6IGZvcm1hdExhYmVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSxcbiAgICAgICAgc3RhcnREYXRlOiBkYXRlLnZhbHVlLFxuICAgICAgICBwZXJpb2Q6IHtcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogZGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlVGltaW5nQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGltaW5nID0gTnVtYmVyLmlzTmFOKGV2ZW50LnRhcmdldC52YWx1ZSkgPyAwIDogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IHtcbiAgICAgIC4uLmVuZERhdGUsXG4gICAgICB0aW1pbmcsXG4gICAgICBtb21lbnQ6IHRpbWluZyA8IDAgPyBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCA6IFJlbGF0aXZlQ29uc3RhbnRzLkVORCxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZShzZWxlY3RlZEVuZERhdGUpO1xuICB9XG5cbiAgaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2UgPSAodW5pdCkgPT4ge1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSB7XG4gICAgICAuLi5lbmREYXRlLFxuICAgICAgdW5pdDogdW5pdC52YWx1ZSxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZShzZWxlY3RlZEVuZERhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZU9wdGlvbnMgPSByZWxhdGl2ZURhdGVPcHRpb25zKHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBncmFudWxhcml0aWVzID0gdGhpcy5nZXRHcmFudWxhcml0eU9wdGlvbnMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGVyaW9kU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2Qtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cInBlcmlvZFN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2Zyb20nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxDb3VudFNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtZW5kLWRhdGVcIlxuICAgICAgICAgIGlkPVwicGVyaW9kRW5kRGF0ZVwiXG4gICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICd0bycpfVxuICAgICAgICA+XG4gICAgICAgICAgPFByaW1pdGl2ZS5JbnB1dCB2YWx1ZT17ZW5kRGF0ZS50aW1pbmd9IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1pbmdDaGFuZ2V9IC8+XG4gICAgICAgIDwvQ291bnRTZWN0aW9uPlxuICAgICAgICA8R3JhbnVsYXJpdHlTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWdyYW51bGFyaXR5XCJcbiAgICAgICAgICBpZD1cInBlcmlvZEdyYW51bGFyaXR5XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2V9XG4gICAgICAgICAgICBvcHRpb25zPXtncmFudWxhcml0aWVzfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0U2VsZWN0ZWRHcmFudWxhcml0eShncmFudWxhcml0aWVzLCBlbmREYXRlLnVuaXQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JhbnVsYXJpdHlTZWN0aW9uPlxuICAgICAgPC9QZXJpb2RTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuUGVyaW9kLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuUGVyaW9kLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==