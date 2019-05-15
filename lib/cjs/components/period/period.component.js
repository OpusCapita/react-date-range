"use strict";

exports.__esModule = true;
exports.default = void 0;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var data = _taggedTemplateLiteralLoose(["\n  width: 80px;\n  margin-bottom: 0;\n"]);

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

var PeriodSection = _styledComponents.default.div(_templateObject(), _ocCmCommonLayouts.theme.gutterWidth);

var CountSection = (0, _styledComponents.default)(_ocCmCommonLayouts.Content.InputColumn)(_templateObject2());
var GranularitySection = (0, _styledComponents.default)(_ocCmCommonLayouts.Content.InputColumn)(_templateObject3(), _ocCmCommonLayouts.theme.halfGutterWidth, _ocCmCommonLayouts.theme.halfGutterWidth);

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
        label: (0, _translate.default)(translations, 'day', 'plural'),
        value: _constants.default.DAY
      }, {
        label: (0, _translate.default)(translations, 'weekday', 'plural'),
        value: _constants.default.WEEKDAY
      }, {
        label: (0, _translate.default)(translations, 'week', 'plural'),
        value: _constants.default.WEEK
      }, {
        label: (0, _translate.default)(translations, 'month', 'plural'),
        value: _constants.default.MONTH
      }];
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedGranularity", function (granularities, value) {
      return granularities.find(function (granularity) {
        return granularity.value === value;
      }) || granularities[0];
    });

    _defineProperty(_assertThisInitialized(_this), "initEndDate", function (endDate) {
      return endDate.moment ? endDate : _extends({}, endDate, {
        moment: endDate.timing < 0 ? _constants.default.START : _constants.default.END
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initStartDate", function (startDate) {
      return startDate.value && startDate.value.moment ? startDate : _extends({}, startDate, {
        value: _extends({}, startDate.value, {
          moment: _constants.default.START
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
        value: (0, _periodLabel.default)(startDate, endDate, translations),
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
          value: (0, _periodLabel.default)(startDate, endDate, translations),
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
        moment: timing < 0 ? _constants.default.START : _constants.default.END
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
    var startDateOptions = (0, _relativeOptions.default)((0, _translate.default)(translations, 'dates'));
    var _this$state = this.state,
        endDate = _this$state.endDate,
        startDate = _this$state.startDate;
    var granularities = this.getGranularityOptions();
    return _react.default.createElement(PeriodSection, null, _react.default.createElement(_dateSection.default, null, _react.default.createElement(_ocCmCommonLayouts.Content.InputColumn, {
      className: "period-start-date",
      id: "periodStartDate",
      label: (0, _translate.default)(translations, 'from')
    }, _react.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleStartDateChange,
      options: startDateOptions,
      value: startDate
    })))), _react.default.createElement(_hyphen.default, null), _react.default.createElement(CountSection, {
      className: "period-end-date",
      id: "periodEndDate",
      label: (0, _translate.default)(translations, 'to')
    }, _react.default.createElement(_ocCmCommonLayouts.Primitive.Input, {
      value: endDate.timing,
      type: "number",
      onBlur: this.handleTimingBlur,
      onChange: this.handleTimingChange
    })), _react.default.createElement(GranularitySection, {
      className: "period-granularity",
      id: "periodGranularity"
    }, _react.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleGranularityChange,
      options: granularities,
      value: this.getSelectedGranularity(granularities, endDate.unit)
    }))));
  };

  return Period;
}(_react.default.PureComponent);

exports.default = Period;
Period.defaultProps = _defaultProps.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJQZXJpb2RTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIkNvbnRlbnQiLCJJbnB1dENvbHVtbiIsIkdyYW51bGFyaXR5U2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIlBlcmlvZCIsInByb3BzIiwidHJhbnNsYXRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsIlJlbGF0aXZlQ29uc3RhbnRzIiwiREFZIiwiV0VFS0RBWSIsIldFRUsiLCJNT05USCIsImdyYW51bGFyaXRpZXMiLCJmaW5kIiwiZ3JhbnVsYXJpdHkiLCJlbmREYXRlIiwibW9tZW50IiwidGltaW5nIiwiU1RBUlQiLCJFTkQiLCJzdGFydERhdGUiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsInN0YXRlIiwiaW5pdFN0YXJ0RGF0ZSIsImRhdGUiLCJpbml0RW5kRGF0ZSIsInNldFN0YXRlIiwicGVyaW9kIiwib25DaGFuZ2UiLCJzZWxlY3RlZEVuZERhdGUiLCJldmVudCIsInRhcmdldCIsIk51bWJlciIsImlzTmFOIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsInVuaXQiLCJyZW5kZXIiLCJzdGFydERhdGVPcHRpb25zIiwiZ2V0R3JhbnVsYXJpdHlPcHRpb25zIiwiaGFuZGxlU3RhcnREYXRlQ2hhbmdlIiwiaGFuZGxlVGltaW5nQmx1ciIsImhhbmRsZVRpbWluZ0NoYW5nZSIsImhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlIiwiZ2V0U2VsZWN0ZWRHcmFudWxhcml0eSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFBQyxRQUZQO0FBR0UsTUFBQSxNQUFNLEVBQUUsS0FBS3VCLGdCQUhmO0FBSUUsTUFBQSxRQUFRLEVBQUUsS0FBS0M7QUFKakIsTUFMRixDQWpCRixFQTZCRSw2QkFBQyxrQkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFDLG9CQURaO0FBRUUsTUFBQSxFQUFFLEVBQUM7QUFGTCxPQUlFLDZCQUFDLG1DQUFELGVBQ00sS0FBS3RDLEtBRFg7QUFFRSxNQUFBLFNBQVMsRUFBRSxLQUZiO0FBR0UsTUFBQSxRQUFRLEVBQUUsS0FBS3VDLHVCQUhqQjtBQUlFLE1BQUEsT0FBTyxFQUFFOUIsYUFKWDtBQUtFLE1BQUEsS0FBSyxFQUFFLEtBQUsrQixzQkFBTCxDQUE0Qi9CLGFBQTVCLEVBQTJDRyxPQUFPLENBQUNvQixJQUFuRDtBQUxULE9BSkYsQ0E3QkYsQ0FERjtBQTRDRCxHOzs7RUFqTGlDUyxlQUFNQyxhOzs7QUFzTDFDM0MsTUFBTSxDQUFDNEMsWUFBUCxHQUFzQkEscUJBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbG9hdGluZ1NlbGVjdCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWZsb2F0aW5nLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250ZW50LCBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGZvcm1hdExhYmVsIGZyb20gJy4vcGVyaW9kLWxhYmVsLmZvcm1hdHRlcic7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlbGF0aXZlQ29uc3RhbnRzIGZyb20gJy4uL3JlbGF0aXZlL2NvbnN0YW50cyc7XG5pbXBvcnQgcmVsYXRpdmVEYXRlT3B0aW9ucyBmcm9tICcuLi9yZWxhdGl2ZS9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFBlcmlvZFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbmA7XG5cbmNvbnN0IENvdW50U2VjdGlvbiA9IHN0eWxlZChDb250ZW50LklucHV0Q29sdW1uKWBcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG5jb25zdCBHcmFudWxhcml0eVNlY3Rpb24gPSBzdHlsZWQoQ29udGVudC5JbnB1dENvbHVtbilgXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcmlvZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBwcm9wcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0R3JhbnVsYXJpdHlPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF5JywgJ3BsdXJhbCcpLFxuICAgICAgICB2YWx1ZTogUmVsYXRpdmVDb25zdGFudHMuREFZLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICd3ZWVrZGF5JywgJ3BsdXJhbCcpLFxuICAgICAgICB2YWx1ZTogUmVsYXRpdmVDb25zdGFudHMuV0VFS0RBWSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnd2VlaycsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLldFRUssXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ21vbnRoJywgJ3BsdXJhbCcpLFxuICAgICAgICB2YWx1ZTogUmVsYXRpdmVDb25zdGFudHMuTU9OVEgsXG4gICAgICB9LFxuICAgIF07XG4gIH07XG5cbiAgZ2V0U2VsZWN0ZWRHcmFudWxhcml0eSA9IChncmFudWxhcml0aWVzLCB2YWx1ZSkgPT4gKFxuICAgIGdyYW51bGFyaXRpZXMuZmluZChncmFudWxhcml0eSA9PiBncmFudWxhcml0eS52YWx1ZSA9PT0gdmFsdWUpIHx8IGdyYW51bGFyaXRpZXNbMF1cbiAgKTtcblxuICBpbml0RW5kRGF0ZSA9IGVuZERhdGUgPT4gKFxuICAgIGVuZERhdGUubW9tZW50ID8gZW5kRGF0ZSA6XG4gICAgICB7XG4gICAgICAgIC4uLmVuZERhdGUsXG4gICAgICAgIG1vbWVudDogZW5kRGF0ZS50aW1pbmcgPCAwID8gUmVsYXRpdmVDb25zdGFudHMuU1RBUlQgOiBSZWxhdGl2ZUNvbnN0YW50cy5FTkQsXG4gICAgICB9XG4gICk7XG5cbiAgaW5pdFN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZSA9PiAoXG4gICAgc3RhcnREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgPyBzdGFydERhdGUgOlxuICAgICAge1xuICAgICAgICAuLi5zdGFydERhdGUsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgLi4uc3RhcnREYXRlLnZhbHVlLFxuICAgICAgICAgIG1vbWVudDogUmVsYXRpdmVDb25zdGFudHMuU1RBUlQsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICk7XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKHNlbGVjdGVkU3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5pbml0U3RhcnREYXRlKHNlbGVjdGVkU3RhcnREYXRlKTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5pbml0RW5kRGF0ZShlbmREYXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlIH0pO1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZTogZGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLnZhbHVlLFxuICAgICAgdmFsdWU6IGZvcm1hdExhYmVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSxcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IGRhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKHNlbGVjdGVkRW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmluaXRTdGFydERhdGUoc3RhcnREYXRlKTtcbiAgICBjb25zdCBlbmREYXRlID0gdGhpcy5pbml0RW5kRGF0ZShzZWxlY3RlZEVuZERhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgdmFsdWU6IGZvcm1hdExhYmVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSxcbiAgICAgICAgc3RhcnREYXRlOiBkYXRlLnZhbHVlLFxuICAgICAgICBwZXJpb2Q6IHtcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlVGltaW5nQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGltaW5nID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSB7XG4gICAgICAuLi5lbmREYXRlLFxuICAgICAgdGltaW5nLFxuICAgICAgbW9tZW50OiB0aW1pbmcgPCAwID8gUmVsYXRpdmVDb25zdGFudHMuU1RBUlQgOiBSZWxhdGl2ZUNvbnN0YW50cy5FTkQsXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZTogc2VsZWN0ZWRFbmREYXRlIH0pO1xuICB9XG5cbiAgaGFuZGxlVGltaW5nQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdGltaW5nID0gTnVtYmVyLmlzTmFOKE51bWJlcihlbmREYXRlLnRpbWluZykpID8gMCA6IE51bWJlcihlbmREYXRlLnRpbWluZyk7XG4gICAgdGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlKHsgLi4uZW5kRGF0ZSwgdGltaW5nIH0pO1xuICB9XG5cbiAgaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2UgPSAodW5pdCkgPT4ge1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSB7XG4gICAgICAuLi5lbmREYXRlLFxuICAgICAgdW5pdDogdW5pdC52YWx1ZSxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZShzZWxlY3RlZEVuZERhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZU9wdGlvbnMgPSByZWxhdGl2ZURhdGVPcHRpb25zKHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBncmFudWxhcml0aWVzID0gdGhpcy5nZXRHcmFudWxhcml0eU9wdGlvbnMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGVyaW9kU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2Qtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cInBlcmlvZFN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2Zyb20nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxDb3VudFNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtZW5kLWRhdGVcIlxuICAgICAgICAgIGlkPVwicGVyaW9kRW5kRGF0ZVwiXG4gICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICd0bycpfVxuICAgICAgICA+XG4gICAgICAgICAgPFByaW1pdGl2ZS5JbnB1dFxuICAgICAgICAgICAgdmFsdWU9e2VuZERhdGUudGltaW5nfVxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlVGltaW5nQmx1cn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWluZ0NoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvdW50U2VjdGlvbj5cbiAgICAgICAgPEdyYW51bGFyaXR5U2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1ncmFudWxhcml0eVwiXG4gICAgICAgICAgaWQ9XCJwZXJpb2RHcmFudWxhcml0eVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlfVxuICAgICAgICAgICAgb3B0aW9ucz17Z3JhbnVsYXJpdGllc31cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFNlbGVjdGVkR3JhbnVsYXJpdHkoZ3JhbnVsYXJpdGllcywgZW5kRGF0ZS51bml0KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyYW51bGFyaXR5U2VjdGlvbj5cbiAgICAgIDwvUGVyaW9kU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cblBlcmlvZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblBlcmlvZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=