"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFloatingSelect = require("@opuscapita/react-floating-select");

var _ocCmCommonLayouts = require("@opuscapita/oc-cm-common-layouts");

var _dateSection = _interopRequireDefault(require("../date-section.components"));

var _hyphen = _interopRequireDefault(require("../hyphen.component"));

var _propTypes = _interopRequireDefault(require("./prop-types"));

var _defaultProps = _interopRequireDefault(require("./default-props"));

var _constants = _interopRequireDefault(require("./constants"));

var _relativeOptions = _interopRequireDefault(require("./relative-options"));

var _translate = _interopRequireDefault(require("../../translations/translate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ", " 0 0 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var RelativeRangeSection = _styledComponents["default"].div(_templateObject(), _ocCmCommonLayouts.theme.gutterWidth);

var RelativeDateRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(RelativeDateRange, _React$PureComponent);

  function RelativeDateRange(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "filterEndDateOptions", function (startDate, endDateOptions) {
      var options = startDate.past ? endDateOptions : endDateOptions.filter(function (date) {
        return !date.past;
      });
      return options.filter(function (date) {
        return date.granularity !== startDate.granularity || startDate.order <= date.order;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterStartDateOptions", function (endDate, startDateOptions) {
      var options = endDate.past ? startDateOptions.filter(function (date) {
        return date.past;
      }) : startDateOptions;
      return options.filter(function (date) {
        return date.granularity !== endDate.granularity || date.order <= endDate.order;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartDateChange", function (selectedStartDate) {
      var onChange = _this.props.onChange;
      var endDateOptionsState = _this.state.endDateOptions;
      var startDate = selectedStartDate.value.moment ? selectedStartDate : _extends({}, selectedStartDate, {
        value: _extends({}, selectedStartDate.value, {
          moment: _constants["default"].START
        })
      });

      var endDateOptions = _this.filterEndDateOptions(startDate, endDateOptionsState);

      var endDate = _this.state.endDate;

      _this.setState({
        endDateOptions: endDateOptions,
        startDate: startDate
      });

      var state = {
        startDate: startDate.value,
        relativeRange: {
          startDate: startDate
        }
      };

      if (endDate) {
        var endDateValue = endDate.value && !endDate.value.moment ? _extends({}, endDate.value, {
          moment: _constants["default"].END
        }) : endDate.value;
        state = _extends({}, state, {
          value: startDate.label + " - " + (endDate.label || ''),
          endDate: endDateValue,
          relativeRange: _extends({}, state.relativeRange, {
            endDate: endDate
          })
        });
      }

      onChange(state);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEndDateChange", function (selectedEndDate) {
      var onChange = _this.props.onChange;
      var startDateOptionsState = _this.state.startDateOptions;
      var endDate = selectedEndDate.value.moment ? selectedEndDate : _extends({}, selectedEndDate, {
        value: _extends({}, selectedEndDate.value, {
          moment: _constants["default"].END
        })
      });

      var startDateOptions = _this.filterStartDateOptions(endDate, startDateOptionsState);

      var startDate = _this.state.startDate;

      _this.setState({
        startDateOptions: startDateOptions,
        endDate: endDate
      });

      var state = {
        endDate: endDate.value,
        relativeRange: {
          endDate: endDate
        }
      };

      if (startDate) {
        var startDateValue = startDate.value && !startDate.value.moment ? _extends({}, startDate.value, {
          moment: _constants["default"].START
        }) : startDate.value;
        state = _extends({}, state, {
          value: (startDate.label || '') + " - " + endDate.label,
          startDate: startDateValue,
          relativeRange: _extends({}, state.relativeRange, {
            startDate: startDate
          })
        });
      }

      onChange(state);
    });

    var _endDate = props.endDate,
        _startDate = props.startDate,
        translations = props.translations;

    var _options = (0, _relativeOptions["default"])((0, _translate["default"])(translations, 'dates'));

    _this.state = {
      endDate: _endDate,
      endDateOptions: _startDate ? _this.filterEndDateOptions(_startDate, _options) : _options,
      startDate: _startDate,
      startDateOptions: _endDate ? _this.filterStartDateOptions(_endDate, _options) : _options
    };
    return _this;
  }

  var _proto = RelativeDateRange.prototype;

  _proto.render = function render() {
    var _this$state = this.state,
        startDateOptions = _this$state.startDateOptions,
        endDateOptions = _this$state.endDateOptions,
        startDate = _this$state.startDate,
        endDate = _this$state.endDate;
    var translations = this.props.translations;
    return _react["default"].createElement(RelativeRangeSection, null, _react["default"].createElement(_dateSection["default"], null, _react["default"].createElement(_ocCmCommonLayouts.Content.InputColumn, {
      className: "relative-start-date",
      id: "relativeStartDate",
      label: (0, _translate["default"])(translations, 'startDate')
    }, _react["default"].createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleStartDateChange,
      options: startDateOptions,
      placeholder: translations.startDatePlaceholder,
      value: startDate,
      classNamePrefix: "daterange-select"
    })))), _react["default"].createElement(_hyphen["default"], null), _react["default"].createElement(_dateSection["default"], null, _react["default"].createElement(_ocCmCommonLayouts.Content.InputColumn, {
      className: "relative-end-date",
      id: "relativeEndDate",
      label: (0, _translate["default"])(translations, 'endDate')
    }, _react["default"].createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
      clearable: false,
      onChange: this.handleEndDateChange,
      options: endDateOptions,
      placeholder: translations.endDatePlaceholder,
      value: endDate,
      classNamePrefix: "daterange-select"
    })))));
  };

  return RelativeDateRange;
}(_react["default"].PureComponent);

exports["default"] = RelativeDateRange;
RelativeDateRange.defaultProps = _defaultProps["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJSZWxhdGl2ZURhdGVSYW5nZSIsInByb3BzIiwic3RhcnREYXRlIiwiZW5kRGF0ZU9wdGlvbnMiLCJvcHRpb25zIiwicGFzdCIsImZpbHRlciIsImRhdGUiLCJncmFudWxhcml0eSIsIm9yZGVyIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZU9wdGlvbnMiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsIm9uQ2hhbmdlIiwiZW5kRGF0ZU9wdGlvbnNTdGF0ZSIsInN0YXRlIiwidmFsdWUiLCJtb21lbnQiLCJDb25zdGFudHMiLCJTVEFSVCIsImZpbHRlckVuZERhdGVPcHRpb25zIiwic2V0U3RhdGUiLCJyZWxhdGl2ZVJhbmdlIiwiZW5kRGF0ZVZhbHVlIiwiRU5EIiwibGFiZWwiLCJzZWxlY3RlZEVuZERhdGUiLCJzdGFydERhdGVPcHRpb25zU3RhdGUiLCJmaWx0ZXJTdGFydERhdGVPcHRpb25zIiwic3RhcnREYXRlVmFsdWUiLCJ0cmFuc2xhdGlvbnMiLCJyZW5kZXIiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJzdGFydERhdGVQbGFjZWhvbGRlciIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJlbmREYXRlUGxhY2Vob2xkZXIiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQixHQUFHQyw2QkFBT0MsR0FBVixvQkFLYkMseUJBQU1DLFdBTE8sQ0FBMUI7O0lBUXFCQyxpQjs7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YmVsLWhhcy1mb3IgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRmxvYXRpbmdTZWxlY3QgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1mbG9hdGluZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udGVudCwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBEYXRlU2VjdGlvbiBmcm9tICcuLi9kYXRlLXNlY3Rpb24uY29tcG9uZW50cyc7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgcmVsYXRpdmVPcHRpb25zIGZyb20gJy4vcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBSZWxhdGl2ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9IDAgMCAwO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsYXRpdmVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCBvcHRpb25zID0gcmVsYXRpdmVPcHRpb25zKHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW5kRGF0ZSxcbiAgICAgIGVuZERhdGVPcHRpb25zOiBzdGFydERhdGVcbiAgICAgICAgPyB0aGlzLmZpbHRlckVuZERhdGVPcHRpb25zKHN0YXJ0RGF0ZSwgb3B0aW9ucylcbiAgICAgICAgOiBvcHRpb25zLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgc3RhcnREYXRlT3B0aW9uczogZW5kRGF0ZVxuICAgICAgICA/IHRoaXMuZmlsdGVyU3RhcnREYXRlT3B0aW9ucyhlbmREYXRlLCBvcHRpb25zKVxuICAgICAgICA6IG9wdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIGZpbHRlckVuZERhdGVPcHRpb25zID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gc3RhcnREYXRlLnBhc3QgPyBlbmREYXRlT3B0aW9uc1xuICAgICAgOiBlbmREYXRlT3B0aW9ucy5maWx0ZXIoKGRhdGUpID0+ICFkYXRlLnBhc3QpO1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigoZGF0ZSkgPT4gZGF0ZS5ncmFudWxhcml0eSAhPT0gc3RhcnREYXRlLmdyYW51bGFyaXR5XG4gICAgICB8fCBzdGFydERhdGUub3JkZXIgPD0gZGF0ZS5vcmRlcik7XG4gIH1cblxuICBmaWx0ZXJTdGFydERhdGVPcHRpb25zID0gKGVuZERhdGUsIHN0YXJ0RGF0ZU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gZW5kRGF0ZS5wYXN0XG4gICAgICA/IHN0YXJ0RGF0ZU9wdGlvbnMuZmlsdGVyKChkYXRlKSA9PiBkYXRlLnBhc3QpXG4gICAgICA6IHN0YXJ0RGF0ZU9wdGlvbnM7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKChkYXRlKSA9PiBkYXRlLmdyYW51bGFyaXR5ICE9PSBlbmREYXRlLmdyYW51bGFyaXR5XG4gICAgICB8fCBkYXRlLm9yZGVyIDw9IGVuZERhdGUub3JkZXIpO1xuICB9XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKHNlbGVjdGVkU3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGVPcHRpb25zOiBlbmREYXRlT3B0aW9uc1N0YXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHNlbGVjdGVkU3RhcnREYXRlLnZhbHVlLm1vbWVudCA/IHNlbGVjdGVkU3RhcnREYXRlXG4gICAgICA6ICh7XG4gICAgICAgIC4uLnNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICB2YWx1ZTogeyAuLi5zZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuU1RBUlQgfSxcbiAgICAgIH0pO1xuICAgIGNvbnN0IGVuZERhdGVPcHRpb25zID0gdGhpcy5maWx0ZXJFbmREYXRlT3B0aW9ucyhzdGFydERhdGUsIGVuZERhdGVPcHRpb25zU3RhdGUpO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZU9wdGlvbnMsIHN0YXJ0RGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChlbmREYXRlKSB7XG4gICAgICBjb25zdCBlbmREYXRlVmFsdWUgPSBlbmREYXRlLnZhbHVlICYmICFlbmREYXRlLnZhbHVlLm1vbWVudFxuICAgICAgICA/IHsgLi4uZW5kRGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuRU5EIH1cbiAgICAgICAgOiBlbmREYXRlLnZhbHVlO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbCB8fCAnJ31gLFxuICAgICAgICBlbmREYXRlOiBlbmREYXRlVmFsdWUsXG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5yZWxhdGl2ZVJhbmdlLFxuICAgICAgICAgIGVuZERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBvbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKHNlbGVjdGVkRW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdGFydERhdGVPcHRpb25zOiBzdGFydERhdGVPcHRpb25zU3RhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHNlbGVjdGVkRW5kRGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZEVuZERhdGVcbiAgICAgIDogKHtcbiAgICAgICAgLi4uc2VsZWN0ZWRFbmREYXRlLFxuICAgICAgICB2YWx1ZTogeyAuLi5zZWxlY3RlZEVuZERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLkVORCB9LFxuICAgICAgfSk7XG4gICAgY29uc3Qgc3RhcnREYXRlT3B0aW9ucyA9IHRoaXMuZmlsdGVyU3RhcnREYXRlT3B0aW9ucyhlbmREYXRlLCBzdGFydERhdGVPcHRpb25zU3RhdGUpO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGVPcHRpb25zLCBlbmREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IGVuZERhdGUudmFsdWUsXG4gICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgY29uc3Qgc3RhcnREYXRlVmFsdWUgPSBzdGFydERhdGUudmFsdWUgJiYgIXN0YXJ0RGF0ZS52YWx1ZS5tb21lbnRcbiAgICAgICAgPyB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuU1RBUlQgfVxuICAgICAgICA6IHN0YXJ0RGF0ZS52YWx1ZTtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbCB8fCAnJ30gLSAke2VuZERhdGUubGFiZWx9YCxcbiAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGVWYWx1ZSxcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIC4uLnN0YXRlLnJlbGF0aXZlUmFuZ2UsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgb25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnMsXG4gICAgICBlbmREYXRlT3B0aW9ucyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlbGF0aXZlUmFuZ2VTZWN0aW9uPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJyZWxhdGl2ZVN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3N0YXJ0RGF0ZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3RhcnREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtzdGFydERhdGVPcHRpb25zfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRpb25zLnN0YXJ0RGF0ZVBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJkYXRlcmFuZ2Utc2VsZWN0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJyZWxhdGl2ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtlbmREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0aW9ucy5lbmREYXRlUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJkYXRlcmFuZ2Utc2VsZWN0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgPC9SZWxhdGl2ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cblJlbGF0aXZlRGF0ZVJhbmdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuUmVsYXRpdmVEYXRlUmFuZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19