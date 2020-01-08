"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFloatingSelect = require("@opuscapita/react-floating-select");

var _ocCmCommonLayouts = require("@opuscapita/oc-cm-common-layouts");

var _dateSection = _interopRequireDefault(require("../date-section.components"));

var _defaultProps = _interopRequireDefault(require("./default-props"));

var _periodLabel = _interopRequireDefault(require("./period-label.formatter"));

var _hyphen = _interopRequireDefault(require("../hyphen.component"));

var _propTypes = _interopRequireDefault(require("./prop-types"));

var _constants = _interopRequireDefault(require("../relative/constants"));

var _relativeOptions = _interopRequireDefault(require("../relative/relative-options"));

var _translate = _interopRequireDefault(require("../../translations/translate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var PeriodSection = _styledComponents["default"].div(_templateObject(), _ocCmCommonLayouts.theme.gutterWidth);

var CountSection = (0, _styledComponents["default"])(_ocCmCommonLayouts.Content.InputColumn)(_templateObject2(), _ocCmCommonLayouts.theme.colors.grey3);
var GranularitySection = (0, _styledComponents["default"])(_ocCmCommonLayouts.Content.InputColumn)(_templateObject3(), _ocCmCommonLayouts.theme.halfGutterWidth, _ocCmCommonLayouts.theme.halfGutterWidth);

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
        label: (0, _translate["default"])(translations, 'day', 'plural'),
        value: _constants["default"].DAY
      }, {
        label: (0, _translate["default"])(translations, 'weekday', 'plural'),
        value: _constants["default"].WEEKDAY
      }, {
        label: (0, _translate["default"])(translations, 'week', 'plural'),
        value: _constants["default"].WEEK
      }, {
        label: (0, _translate["default"])(translations, 'month', 'plural'),
        value: _constants["default"].MONTH
      }];
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedGranularity", function (granularities, value) {
      return granularities.find(function (granularity) {
        return granularity.value === value;
      }) || granularities[0];
    });

    _defineProperty(_assertThisInitialized(_this), "initEndDate", function (endDate) {
      return endDate.moment ? endDate : _extends({}, endDate, {
        moment: endDate.timing < 0 ? _constants["default"].START : _constants["default"].END
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initStartDate", function (startDate) {
      return startDate.value && startDate.value.moment ? startDate : _extends({}, startDate, {
        value: _extends({}, startDate.value, {
          moment: _constants["default"].START
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (selectedStartDate) {
      var _this$props = _this.props,
          translations = _this$props.translations,
          onChange = _this$props.onChange;
      var endDate = _this.state.endDate;

      var startDate = _this.initStartDate(selectedStartDate);

      var date = _this.initEndDate(endDate);

      _this.setState({
        startDate: startDate
      });

      var state = {
        endDate: date,
        startDate: startDate.value,
        value: (0, _periodLabel["default"])(startDate, endDate, translations),
        period: {
          startDate: startDate,
          endDate: date
        }
      };
      onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (selectedEndDate) {
      var _this$props2 = _this.props,
          translations = _this$props2.translations,
          onChange = _this$props2.onChange;
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
          value: (0, _periodLabel["default"])(startDate, endDate, translations),
          startDate: date.value,
          period: {
            endDate: endDate,
            startDate: startDate
          }
        };
      }

      onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTimingChange", function (event) {
      var timing = event.target.value;
      var endDate = _this.state.endDate;

      var selectedEndDate = _extends({}, endDate, {
        timing: timing,
        moment: timing < 0 ? _constants["default"].START : _constants["default"].END
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
    var startDateOptions = (0, _relativeOptions["default"])((0, _translate["default"])(translations, 'dates'));
    var _this$state = this.state,
        endDate = _this$state.endDate,
        startDate = _this$state.startDate;
    var granularities = this.getGranularityOptions();
    return _react["default"].createElement(PeriodSection, null, _react["default"].createElement(_dateSection["default"], null, _react["default"].createElement(_ocCmCommonLayouts.Content.InputColumn, {
      className: "period-start-date",
      id: "periodStartDate",
      label: (0, _translate["default"])(translations, 'from')
    }, _react["default"].createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleStartDateChange,
      options: startDateOptions,
      value: startDate,
      classNamePrefix: "daterange-select"
    })))), _react["default"].createElement(_hyphen["default"], null), _react["default"].createElement(CountSection, {
      className: "period-end-date",
      id: "periodEndDate",
      label: (0, _translate["default"])(translations, 'to')
    }, _react["default"].createElement(_ocCmCommonLayouts.Primitive.Input, {
      value: endDate.timing,
      type: "number",
      onBlur: this.handleTimingBlur,
      onChange: this.handleTimingChange
    })), _react["default"].createElement(GranularitySection, {
      className: "period-granularity",
      id: "periodGranularity"
    }, _react["default"].createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleGranularityChange,
      options: granularities,
      value: this.getSelectedGranularity(granularities, endDate.unit),
      classNamePrefix: "daterange-select"
    }))));
  };

  return Period;
}(_react["default"].PureComponent);

exports["default"] = Period;
Period.defaultProps = _defaultProps["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJQZXJpb2RTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIkNvbnRlbnQiLCJJbnB1dENvbHVtbiIsImNvbG9ycyIsImdyZXkzIiwiR3JhbnVsYXJpdHlTZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiUGVyaW9kIiwicHJvcHMiLCJ0cmFuc2xhdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiUmVsYXRpdmVDb25zdGFudHMiLCJEQVkiLCJXRUVLREFZIiwiV0VFSyIsIk1PTlRIIiwiZ3JhbnVsYXJpdGllcyIsImZpbmQiLCJncmFudWxhcml0eSIsImVuZERhdGUiLCJtb21lbnQiLCJ0aW1pbmciLCJTVEFSVCIsIkVORCIsInN0YXJ0RGF0ZSIsInNlbGVjdGVkU3RhcnREYXRlIiwib25DaGFuZ2UiLCJzdGF0ZSIsImluaXRTdGFydERhdGUiLCJkYXRlIiwiaW5pdEVuZERhdGUiLCJzZXRTdGF0ZSIsInBlcmlvZCIsInNlbGVjdGVkRW5kRGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwiTnVtYmVyIiwiaXNOYU4iLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwidW5pdCIsInJlbmRlciIsInN0YXJ0RGF0ZU9wdGlvbnMiLCJnZXRHcmFudWxhcml0eU9wdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJoYW5kbGVUaW1pbmdCbHVyIiwiaGFuZGxlVGltaW5nQ2hhbmdlIiwiaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2UiLCJnZXRTZWxlY3RlZEdyYW51bGFyaXR5IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNB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LE1BQUEsS0FBSyxFQUFFLDJCQUFVaEIsWUFBVixFQUF3QixJQUF4QjtBQUhULE9BS0UsZ0NBQUMsNEJBQUQsQ0FBVyxLQUFYO0FBQ0UsTUFBQSxLQUFLLEVBQUVXLE9BQU8sQ0FBQ0UsTUFEakI7QUFFRSxNQUFBLElBQUksRUFBQyxRQUZQO0FBR0UsTUFBQSxNQUFNLEVBQUUsS0FBS3VCLGdCQUhmO0FBSUUsTUFBQSxRQUFRLEVBQUUsS0FBS0M7QUFKakIsTUFMRixDQWxCRixFQThCRSxnQ0FBQyxrQkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFDLG9CQURaO0FBRUUsTUFBQSxFQUFFLEVBQUM7QUFGTCxPQUlFLGdDQUFDLG1DQUFELGVBQ00sS0FBS3RDLEtBRFg7QUFFRSxNQUFBLFNBQVMsRUFBRSxLQUZiO0FBR0UsTUFBQSxRQUFRLEVBQUUsS0FBS3VDLHVCQUhqQjtBQUlFLE1BQUEsT0FBTyxFQUFFOUIsYUFKWDtBQUtFLE1BQUEsS0FBSyxFQUFFLEtBQUsrQixzQkFBTCxDQUE0Qi9CLGFBQTVCLEVBQTJDRyxPQUFPLENBQUNvQixJQUFuRCxDQUxUO0FBTUUsTUFBQSxlQUFlLEVBQUM7QUFObEIsT0FKRixDQTlCRixDQURGO0FBOENELEc7OztFQWpMaUNTLGtCQUFNQyxhOzs7QUFzTDFDM0MsTUFBTSxDQUFDNEMsWUFBUCxHQUFzQkEsd0JBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbG9hdGluZ1NlbGVjdCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWZsb2F0aW5nLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250ZW50LCBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGZvcm1hdExhYmVsIGZyb20gJy4vcGVyaW9kLWxhYmVsLmZvcm1hdHRlcic7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlbGF0aXZlQ29uc3RhbnRzIGZyb20gJy4uL3JlbGF0aXZlL2NvbnN0YW50cyc7XG5pbXBvcnQgcmVsYXRpdmVEYXRlT3B0aW9ucyBmcm9tICcuLi9yZWxhdGl2ZS9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFBlcmlvZFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbmA7XG5cbmNvbnN0IENvdW50U2VjdGlvbiA9IHN0eWxlZChDb250ZW50LklucHV0Q29sdW1uKWBcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGlucHV0IHtcbiAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgfVxuYDtcblxuY29uc3QgR3JhbnVsYXJpdHlTZWN0aW9uID0gc3R5bGVkKENvbnRlbnQuSW5wdXRDb2x1bW4pYFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJpb2QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBzdGFydERhdGUsXG4gICAgfTtcbiAgfVxuXG4gIGdldEdyYW51bGFyaXR5T3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RheScsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLkRBWSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnd2Vla2RheScsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLldFRUtEQVksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3dlZWsnLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5XRUVLLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdtb250aCcsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLk1PTlRILFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xuXG4gIGdldFNlbGVjdGVkR3JhbnVsYXJpdHkgPSAoZ3JhbnVsYXJpdGllcywgdmFsdWUpID0+IChcbiAgICBncmFudWxhcml0aWVzLmZpbmQoKGdyYW51bGFyaXR5KSA9PiBncmFudWxhcml0eS52YWx1ZSA9PT0gdmFsdWUpIHx8IGdyYW51bGFyaXRpZXNbMF1cbiAgKTtcblxuICBpbml0RW5kRGF0ZSA9IChlbmREYXRlKSA9PiAoXG4gICAgZW5kRGF0ZS5tb21lbnQgPyBlbmREYXRlIDoge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIG1vbWVudDogZW5kRGF0ZS50aW1pbmcgPCAwID8gUmVsYXRpdmVDb25zdGFudHMuU1RBUlQgOiBSZWxhdGl2ZUNvbnN0YW50cy5FTkQsXG4gICAgfVxuICApO1xuXG4gIGluaXRTdGFydERhdGUgPSAoc3RhcnREYXRlKSA9PiAoXG4gICAgc3RhcnREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgPyBzdGFydERhdGUgOiB7XG4gICAgICAuLi5zdGFydERhdGUsXG4gICAgICB2YWx1ZToge1xuICAgICAgICAuLi5zdGFydERhdGUudmFsdWUsXG4gICAgICAgIG1vbWVudDogUmVsYXRpdmVDb25zdGFudHMuU1RBUlQsXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRTdGFydERhdGUpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5pbml0U3RhcnREYXRlKHNlbGVjdGVkU3RhcnREYXRlKTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5pbml0RW5kRGF0ZShlbmREYXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlIH0pO1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZTogZGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLnZhbHVlLFxuICAgICAgdmFsdWU6IGZvcm1hdExhYmVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSxcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IGRhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChzZWxlY3RlZEVuZERhdGUpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuaW5pdFN0YXJ0RGF0ZShzdGFydERhdGUpO1xuICAgIGNvbnN0IGVuZERhdGUgPSB0aGlzLmluaXRFbmREYXRlKHNlbGVjdGVkRW5kRGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICB2YWx1ZTogZm9ybWF0TGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgICBzdGFydERhdGU6IGRhdGUudmFsdWUsXG4gICAgICAgIHBlcmlvZDoge1xuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlVGltaW5nQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGltaW5nID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSB7XG4gICAgICAuLi5lbmREYXRlLFxuICAgICAgdGltaW5nLFxuICAgICAgbW9tZW50OiB0aW1pbmcgPCAwID8gUmVsYXRpdmVDb25zdGFudHMuU1RBUlQgOiBSZWxhdGl2ZUNvbnN0YW50cy5FTkQsXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZTogc2VsZWN0ZWRFbmREYXRlIH0pO1xuICB9XG5cbiAgaGFuZGxlVGltaW5nQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdGltaW5nID0gTnVtYmVyLmlzTmFOKE51bWJlcihlbmREYXRlLnRpbWluZykpID8gMCA6IE51bWJlcihlbmREYXRlLnRpbWluZyk7XG4gICAgdGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlKHsgLi4uZW5kRGF0ZSwgdGltaW5nIH0pO1xuICB9XG5cbiAgaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2UgPSAodW5pdCkgPT4ge1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSB7XG4gICAgICAuLi5lbmREYXRlLFxuICAgICAgdW5pdDogdW5pdC52YWx1ZSxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZShzZWxlY3RlZEVuZERhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZU9wdGlvbnMgPSByZWxhdGl2ZURhdGVPcHRpb25zKHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBncmFudWxhcml0aWVzID0gdGhpcy5nZXRHcmFudWxhcml0eU9wdGlvbnMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGVyaW9kU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2Qtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cInBlcmlvZFN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2Zyb20nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwiZGF0ZXJhbmdlLXNlbGVjdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8Q291bnRTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWVuZC1kYXRlXCJcbiAgICAgICAgICBpZD1cInBlcmlvZEVuZERhdGVcIlxuICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAndG8nKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQcmltaXRpdmUuSW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlLnRpbWluZ31cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZVRpbWluZ0JsdXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1pbmdDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db3VudFNlY3Rpb24+XG4gICAgICAgIDxHcmFudWxhcml0eVNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtZ3JhbnVsYXJpdHlcIlxuICAgICAgICAgIGlkPVwicGVyaW9kR3JhbnVsYXJpdHlcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHcmFudWxhcml0eUNoYW5nZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e2dyYW51bGFyaXRpZXN9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTZWxlY3RlZEdyYW51bGFyaXR5KGdyYW51bGFyaXRpZXMsIGVuZERhdGUudW5pdCl9XG4gICAgICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJkYXRlcmFuZ2Utc2VsZWN0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyYW51bGFyaXR5U2VjdGlvbj5cbiAgICAgIDwvUGVyaW9kU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cblBlcmlvZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblBlcmlvZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=