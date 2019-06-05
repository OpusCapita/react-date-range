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

var PeriodSection = _styledComponents.default.div(_templateObject(), _ocCmCommonLayouts.theme.gutterWidth);

var CountSection = (0, _styledComponents.default)(_ocCmCommonLayouts.Content.InputColumn)(_templateObject2(), _ocCmCommonLayouts.theme.colors.grey3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJQZXJpb2RTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIkNvbnRlbnQiLCJJbnB1dENvbHVtbiIsImNvbG9ycyIsImdyZXkzIiwiR3JhbnVsYXJpdHlTZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiUGVyaW9kIiwicHJvcHMiLCJ0cmFuc2xhdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiUmVsYXRpdmVDb25zdGFudHMiLCJEQVkiLCJXRUVLREFZIiwiV0VFSyIsIk1PTlRIIiwiZ3JhbnVsYXJpdGllcyIsImZpbmQiLCJncmFudWxhcml0eSIsImVuZERhdGUiLCJtb21lbnQiLCJ0aW1pbmciLCJTVEFSVCIsIkVORCIsInN0YXJ0RGF0ZSIsInNlbGVjdGVkU3RhcnREYXRlIiwic3RhdGUiLCJpbml0U3RhcnREYXRlIiwiZGF0ZSIsImluaXRFbmREYXRlIiwic2V0U3RhdGUiLCJwZXJpb2QiLCJvbkNoYW5nZSIsInNlbGVjdGVkRW5kRGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwiTnVtYmVyIiwiaXNOYU4iLCJoYW5kbGVFbmREYXRlQ2hhbmdlIiwidW5pdCIsInJlbmRlciIsInN0YXJ0RGF0ZU9wdGlvbnMiLCJnZXRHcmFudWxhcml0eU9wdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJoYW5kbGVUaW1pbmdCbHVyIiwiaGFuZGxlVGltaW5nQ2hhbmdlIiwiaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2UiLCJnZXRTZWxlY3RlZEdyYW51bGFyaXR5IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNB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QUEsS0FBSyxFQUFFVyxPQUFPLENBQUNFLE1BRGpCO0FBRUUsTUFBQSxJQUFJLEVBQUMsUUFGUDtBQUdFLE1BQUEsTUFBTSxFQUFFLEtBQUt1QixnQkFIZjtBQUlFLE1BQUEsUUFBUSxFQUFFLEtBQUtDO0FBSmpCLE1BTEYsQ0FqQkYsRUE2QkUsNkJBQUMsa0JBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBQyxvQkFEWjtBQUVFLE1BQUEsRUFBRSxFQUFDO0FBRkwsT0FJRSw2QkFBQyxtQ0FBRCxlQUNNLEtBQUt0QyxLQURYO0FBRUUsTUFBQSxTQUFTLEVBQUUsS0FGYjtBQUdFLE1BQUEsUUFBUSxFQUFFLEtBQUt1Qyx1QkFIakI7QUFJRSxNQUFBLE9BQU8sRUFBRTlCLGFBSlg7QUFLRSxNQUFBLEtBQUssRUFBRSxLQUFLK0Isc0JBQUwsQ0FBNEIvQixhQUE1QixFQUEyQ0csT0FBTyxDQUFDb0IsSUFBbkQ7QUFMVCxPQUpGLENBN0JGLENBREY7QUE0Q0QsRzs7O0VBakxpQ1MsZUFBTUMsYTs7O0FBc0wxQzNDLE1BQU0sQ0FBQzRDLFlBQVAsR0FBc0JBLHFCQUF0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRmxvYXRpbmdTZWxlY3QgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1mbG9hdGluZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udGVudCwgUHJpbWl0aXZlLCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBmb3JtYXRMYWJlbCBmcm9tICcuL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBSZWxhdGl2ZUNvbnN0YW50cyBmcm9tICcuLi9yZWxhdGl2ZS9jb25zdGFudHMnO1xuaW1wb3J0IHJlbGF0aXZlRGF0ZU9wdGlvbnMgZnJvbSAnLi4vcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBQZXJpb2RTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAwIDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG5jb25zdCBDb3VudFNlY3Rpb24gPSBzdHlsZWQoQ29udGVudC5JbnB1dENvbHVtbilgXG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBpbnB1dCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gIH1cbmA7XG5cbmNvbnN0IEdyYW51bGFyaXR5U2VjdGlvbiA9IHN0eWxlZChDb250ZW50LklucHV0Q29sdW1uKWBcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHdpZHRoOiAxNDBweDtcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyaW9kIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgc3RhcnREYXRlLFxuICAgIH07XG4gIH1cblxuICBnZXRHcmFudWxhcml0eU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXknLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5EQVksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3dlZWtkYXknLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5XRUVLREFZLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICd3ZWVrJywgJ3BsdXJhbCcpLFxuICAgICAgICB2YWx1ZTogUmVsYXRpdmVDb25zdGFudHMuV0VFSyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnbW9udGgnLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5NT05USCxcbiAgICAgIH0sXG4gICAgXTtcbiAgfTtcblxuICBnZXRTZWxlY3RlZEdyYW51bGFyaXR5ID0gKGdyYW51bGFyaXRpZXMsIHZhbHVlKSA9PiAoXG4gICAgZ3JhbnVsYXJpdGllcy5maW5kKGdyYW51bGFyaXR5ID0+IGdyYW51bGFyaXR5LnZhbHVlID09PSB2YWx1ZSkgfHwgZ3JhbnVsYXJpdGllc1swXVxuICApO1xuXG4gIGluaXRFbmREYXRlID0gZW5kRGF0ZSA9PiAoXG4gICAgZW5kRGF0ZS5tb21lbnQgPyBlbmREYXRlIDpcbiAgICAgIHtcbiAgICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgICAgbW9tZW50OiBlbmREYXRlLnRpbWluZyA8IDAgPyBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCA6IFJlbGF0aXZlQ29uc3RhbnRzLkVORCxcbiAgICAgIH1cbiAgKTtcblxuICBpbml0U3RhcnREYXRlID0gc3RhcnREYXRlID0+IChcbiAgICBzdGFydERhdGUudmFsdWUgJiYgc3RhcnREYXRlLnZhbHVlLm1vbWVudCA/IHN0YXJ0RGF0ZSA6XG4gICAgICB7XG4gICAgICAgIC4uLnN0YXJ0RGF0ZSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAuLi5zdGFydERhdGUudmFsdWUsXG4gICAgICAgICAgbW9tZW50OiBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgKTtcblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRTdGFydERhdGUpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLmluaXRTdGFydERhdGUoc2VsZWN0ZWRTdGFydERhdGUpO1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmluaXRFbmREYXRlKGVuZERhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUgfSk7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlOiBkYXRlLFxuICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudmFsdWUsXG4gICAgICB2YWx1ZTogZm9ybWF0TGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogZGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRFbmREYXRlKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuaW5pdFN0YXJ0RGF0ZShzdGFydERhdGUpO1xuICAgIGNvbnN0IGVuZERhdGUgPSB0aGlzLmluaXRFbmREYXRlKHNlbGVjdGVkRW5kRGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChzdGFydERhdGUpIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICB2YWx1ZTogZm9ybWF0TGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgICBzdGFydERhdGU6IGRhdGUudmFsdWUsXG4gICAgICAgIHBlcmlvZDoge1xuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVUaW1pbmdDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0aW1pbmcgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IHtcbiAgICAgIC4uLmVuZERhdGUsXG4gICAgICB0aW1pbmcsXG4gICAgICBtb21lbnQ6IHRpbWluZyA8IDAgPyBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCA6IFJlbGF0aXZlQ29uc3RhbnRzLkVORCxcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlOiBzZWxlY3RlZEVuZERhdGUgfSk7XG4gIH1cblxuICBoYW5kbGVUaW1pbmdCbHVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0aW1pbmcgPSBOdW1iZXIuaXNOYU4oTnVtYmVyKGVuZERhdGUudGltaW5nKSkgPyAwIDogTnVtYmVyKGVuZERhdGUudGltaW5nKTtcbiAgICB0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2UoeyAuLi5lbmREYXRlLCB0aW1pbmcgfSk7XG4gIH1cblxuICBoYW5kbGVHcmFudWxhcml0eUNoYW5nZSA9ICh1bml0KSA9PiB7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IHtcbiAgICAgIC4uLmVuZERhdGUsXG4gICAgICB1bml0OiB1bml0LnZhbHVlLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlKHNlbGVjdGVkRW5kRGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3RhcnREYXRlT3B0aW9ucyA9IHJlbGF0aXZlRGF0ZU9wdGlvbnModHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGdyYW51bGFyaXRpZXMgPSB0aGlzLmdldEdyYW51bGFyaXR5T3B0aW9ucygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJpb2RTZWN0aW9uPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicGVyaW9kU3RhcnREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZnJvbScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtzdGFydERhdGVPcHRpb25zfVxuICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPENvdW50U2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1lbmQtZGF0ZVwiXG4gICAgICAgICAgaWQ9XCJwZXJpb2RFbmREYXRlXCJcbiAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3RvJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8UHJpbWl0aXZlLklucHV0XG4gICAgICAgICAgICB2YWx1ZT17ZW5kRGF0ZS50aW1pbmd9XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVUaW1pbmdCbHVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltaW5nQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ291bnRTZWN0aW9uPlxuICAgICAgICA8R3JhbnVsYXJpdHlTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWdyYW51bGFyaXR5XCJcbiAgICAgICAgICBpZD1cInBlcmlvZEdyYW51bGFyaXR5XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2V9XG4gICAgICAgICAgICBvcHRpb25zPXtncmFudWxhcml0aWVzfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0U2VsZWN0ZWRHcmFudWxhcml0eShncmFudWxhcml0aWVzLCBlbmREYXRlLnVuaXQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JhbnVsYXJpdHlTZWN0aW9uPlxuICAgICAgPC9QZXJpb2RTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuUGVyaW9kLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuUGVyaW9kLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==