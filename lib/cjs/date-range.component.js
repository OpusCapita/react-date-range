"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _reactBootstrap = require("react-bootstrap");

var _fa = require("react-icons/fa");

var _ocCmCommonLayouts = require("@opuscapita/oc-cm-common-layouts");

var _defaultProps = _interopRequireDefault(require("./components/absolute/default-props"));

var _propTypes2 = _interopRequireDefault(require("./components/absolute/prop-types"));

var _constants = _interopRequireDefault(require("./components/relative/constants"));

var _dateRangePopover = _interopRequireDefault(require("./popover/date-range-popover.component"));

var _periodLabel = _interopRequireDefault(require("./components/period/period-label.formatter"));

var _relativeOptions = require("./components/relative/relative-options");

var _defaultProps2 = _interopRequireDefault(require("./components/period/default-props"));

var _propTypes3 = require("./components/period/prop-types");

var _defaultProps3 = _interopRequireDefault(require("./components/relative/default-props"));

var _propTypes4 = require("./components/relative/prop-types");

var _translate = _interopRequireDefault(require("./translations/translate"));

var _defaultProps4 = _interopRequireDefault(require("./translations/default-props"));

var _propTypes5 = _interopRequireDefault(require("./translations/prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n      width: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  .form-control[readonly] {\n    background-color: ", ";\n    padding-right: 32px;\n    cursor: pointer;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  display: flex;\n  svg {\n    margin: 9px 8px 9px -24px;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ReadOnlyInput = _styledComponents.default.div(_templateObject(), _ocCmCommonLayouts.theme.contentBackgroundColor, _ocCmCommonLayouts.theme.colors.grey9);

var DateRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DateRange, _React$PureComponent);

  function DateRange(_props) {
    var _this;

    _this = _React$PureComponent.call(this, _props) || this;

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      if (prevProps.absoluteRange !== _this.props.absoluteRange || prevProps.relativeRange !== _this.props.relativeRange || prevProps.period !== _this.props.period) {
        var state = _this.initState(_this.props);

        if (state) {
          _this.setState(state);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAbsoluteState", function () {
      var absoluteRange = _this.state.absoluteRange;

      var _ref = absoluteRange || {},
          endDate = _ref.endDate,
          startDate = _ref.startDate;

      var dateFormat = _this.props.absoluteRange.dateFormat;

      if (startDate && endDate) {
        var from = _moment.default.utc(startDate);

        var to = _moment.default.utc(endDate);

        if (from.isValid() && to.isValid()) {
          return {
            endDate: to.endOf('day').toISOString(),
            startDate: from.startOf('day').toISOString(),
            value: from.format(dateFormat) + " - " + to.format(dateFormat)
          };
        }
      }

      return {
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getPeriodState", function () {
      var translations = _this.props.translations;
      var period = _this.state.period;

      var _ref2 = period || {},
          endDate = _ref2.endDate,
          startDate = _ref2.startDate;

      if (endDate && startDate && startDate.value) {
        return {
          endDate: _extends({}, endDate, {
            moment: endDate.moment || _constants.default.END
          }),
          startDate: _extends({}, startDate.value, {
            moment: startDate.value.moment || _constants.default.START
          }),
          value: (0, _periodLabel.default)(startDate, endDate, translations)
        };
      }

      return {
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getRelativeState", function () {
      var relativeRange = _this.state.relativeRange;

      var _ref3 = relativeRange || {},
          endDate = _ref3.endDate,
          startDate = _ref3.startDate;

      if (endDate && startDate && endDate.value && startDate.value) {
        return {
          endDate: _extends({}, endDate.value, {
            moment: endDate.value.moment || _constants.default.END
          }),
          startDate: _extends({}, startDate.value, {
            moment: startDate.value.moment || _constants.default.START
          }),
          value: startDate.label + " - " + endDate.label
        };
      }

      return {
        value: ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "initState", function (props) {
      return _this.initAbsoluteRange(props) || _this.initRelativeRange(props) || _this.initPeriod(props);
    });

    _defineProperty(_assertThisInitialized(_this), "initAbsoluteRange", function (props) {
      var absoluteRange = props.absoluteRange;

      var _ref4 = absoluteRange || {},
          endDate = _ref4.endDate,
          startDate = _ref4.startDate,
          dateFormat = _ref4.dateFormat;

      var _ref5 = (_this.state || {}).absoluteRange || {},
          showOverlay = _ref5.showOverlay;

      if (startDate && endDate) {
        var from = _moment.default.utc(startDate);

        var to = _moment.default.utc(endDate);

        return {
          absoluteRange: {
            showOverlay: showOverlay,
            endDate: to.endOf('day').toISOString(),
            startDate: from.startOf('day').toISOString()
          },
          selectedRangeType: 'absolute',
          value: from.isValid() && to.isValid() ? from.format(dateFormat) + " - " + to.format(dateFormat) : ''
        };
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "initPeriod", function (props) {
      var enabled = props.enabled,
          period = props.period,
          translations = props.translations;

      var _ref6 = period || {},
          endDate = _ref6.endDate,
          startDate = _ref6.startDate;

      var selectedStartDate = (0, _relativeOptions.getRelativeOption)(startDate, (0, _translate.default)(translations, 'dates'));
      return {
        period: {
          endDate: endDate,
          startDate: selectedStartDate
        },
        selectedRangeType: endDate && selectedStartDate ? 'period' : undefined,
        value: enabled.period && endDate && selectedStartDate ? (0, _periodLabel.default)(selectedStartDate, endDate, translations) : ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "initRelativeRange", function (props) {
      var enabled = props.enabled,
          relativeRange = props.relativeRange,
          translations = props.translations;

      var _ref7 = relativeRange || {},
          endDate = _ref7.endDate,
          startDate = _ref7.startDate;

      if (endDate && startDate) {
        var selectedStartDate = (0, _relativeOptions.getRelativeOption)(startDate, (0, _translate.default)(translations, 'dates'));
        var selectedEndDate = (0, _relativeOptions.getRelativeOption)(endDate, (0, _translate.default)(translations, 'dates'));
        return {
          relativeRange: {
            endDate: selectedEndDate,
            startDate: selectedStartDate
          },
          selectedRangeType: selectedEndDate && selectedStartDate ? 'relative' : undefined,
          value: enabled.relative && selectedEndDate && selectedStartDate ? selectedStartDate.label + " - " + selectedEndDate.label : ''
        };
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "handleRangeTypeChange", function (event) {
      var onChange = _this.props.onChange;
      var selectedRangeType = event.selectedRangeType;

      var state = _this["get" + selectedRangeType.replace(/\w/, function (c) {
        return c.toUpperCase();
      }) + "State"]();

      _this.setState(_extends({}, state, {
        selectedRangeType: selectedRangeType
      }));

      var startDate = state.startDate,
          endDate = state.endDate;

      if (startDate && endDate) {
        onChange({
          startDate: startDate,
          endDate: endDate
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var onChange = _this.props.onChange;

      _this.setState(event);

      var startDate = event.startDate,
          endDate = event.endDate;

      if (startDate && endDate) {
        onChange({
          startDate: startDate,
          endDate: endDate
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      return _this.setState({
        showOverlay: !_this.state.showOverlay
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHide", function (e) {
      return e.target && e.target.parentNode && e.target.parentNode.className && e.target.parentNode.className.includes('DayPicker') ? e.preventDefault() : _this.setState({
        showOverlay: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderCaret", function () {
      var showOverlay = _this.state.showOverlay;
      return showOverlay ? _react.default.createElement(_fa.FaCaretUp, {
        onClick: _this.handleClick
      }) : _react.default.createElement(_fa.FaCaretDown, {
        onClick: _this.handleClick
      });
    });

    var _state = _this.initState(_props);

    _this.state = _extends({}, _state, {
      showOverlay: false
    });
    return _this;
  }

  var _proto = DateRange.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        enabled = _this$props.enabled,
        id = _this$props.id,
        _inputRef = _this$props.inputRef,
        inputProps = _this$props.inputProps,
        translations = _this$props.translations,
        width = _this$props.width;
    var _this$state = this.state,
        period = _this$state.period,
        relativeRange = _this$state.relativeRange,
        selectedRangeType = _this$state.selectedRangeType,
        showOverlay = _this$state.showOverlay,
        value = _this$state.value;

    var absoluteRange = _extends({}, this.props.absoluteRange, this.state.absoluteRange);

    var DateRangeSection = _styledComponents.default.div(_templateObject2(), width);

    return _react.default.createElement(_styledComponents.ThemeProvider, {
      theme: _ocCmCommonLayouts.theme
    }, _react.default.createElement(DateRangeSection, {
      id: id,
      className: className
    }, _react.default.createElement(ReadOnlyInput, {
      showOverlay: showOverlay
    }, _react.default.createElement(_reactBootstrap.FormControl, _extends({
      type: "text",
      inputRef: function inputRef(el) {
        _this2.input = el;

        _inputRef(el);
      }
    }, inputProps, {
      readOnly: "readonly",
      value: value,
      onClick: this.handleClick
    })), this.renderCaret()), _react.default.createElement(_reactBootstrap.Overlay, {
      show: showOverlay,
      onHide: this.handleHide,
      placement: "bottom",
      container: this,
      rootClose: true
    }, _react.default.createElement(_dateRangePopover.default, {
      absoluteRange: absoluteRange,
      enabled: enabled,
      onRangeTypeChange: this.handleRangeTypeChange,
      onChange: this.handleChange,
      period: period,
      selectedRangeType: selectedRangeType,
      relativeRange: relativeRange,
      translations: translations
    }))));
  };

  return DateRange;
}(_react.default.PureComponent);

exports.default = DateRange;

_defineProperty(DateRange, "defaultProps", {
  absoluteRange: _defaultProps.default,
  className: '',
  enabled: {
    absolute: true,
    period: false,
    relative: false
  },
  inputProps: {},
  inputRef: function inputRef() {},
  onChange: function onChange() {},
  period: _defaultProps2.default,
  relativeRange: _defaultProps3.default,
  translations: _defaultProps4.default,
  width: '300px'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImdyZXk5IiwiRGF0ZVJhbmdlIiwicHJvcHMiLCJwcmV2UHJvcHMiLCJhYnNvbHV0ZVJhbmdlIiwicmVsYXRpdmVSYW5nZSIsInBlcmlvZCIsInN0YXRlIiwiaW5pdFN0YXRlIiwic2V0U3RhdGUiLCJlbmREYXRlIiwic3RhcnREYXRlIiwiZGF0ZUZvcm1hdCIsImZyb20iLCJtb21lbnQiLCJ1dGMiLCJ0byIsImlzVmFsaWQiLCJlbmRPZiIsInRvSVNPU3RyaW5nIiwic3RhcnRPZiIsInZhbHVlIiwiZm9ybWF0IiwidHJhbnNsYXRpb25zIiwiQ29uc3RhbnRzIiwiRU5EIiwiU1RBUlQiLCJsYWJlbCIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJpbml0UGVyaW9kIiwic2hvd092ZXJsYXkiLCJzZWxlY3RlZFJhbmdlVHlwZSIsImVuYWJsZWQiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkRW5kRGF0ZSIsInJlbGF0aXZlIiwiZXZlbnQiLCJvbkNoYW5nZSIsInJlcGxhY2UiLCJjIiwidG9VcHBlckNhc2UiLCJlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNsYXNzTmFtZSIsImluY2x1ZGVzIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbGljayIsInJlbmRlciIsImlkIiwiaW5wdXRSZWYiLCJpbnB1dFByb3BzIiwid2lkdGgiLCJEYXRlUmFuZ2VTZWN0aW9uIiwiZWwiLCJpbnB1dCIsInJlbmRlckNhcmV0IiwiaGFuZGxlSGlkZSIsImhhbmRsZVJhbmdlVHlwZUNoYW5nZSIsImhhbmRsZUNoYW5nZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMiLCJhYnNvbHV0ZSIsInBlcmlvZERlZmF1bHRQcm9wcyIsInJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMiLCJ0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsMEJBQU9DLEdBQVYsb0JBRUtDLHlCQUFNQyxzQkFGWCxFQVlORCx5QkFBTUUsTUFBTixDQUFhQyxLQVpQLENBQW5COztJQWdCcUJDLFM7Ozs7O0FBNENuQixxQkFBWUMsTUFBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsTUFBTjs7QUFEaUIseUVBU0UsVUFBQ0MsU0FBRCxFQUFlO0FBQ2xDLFVBQUlBLFNBQVMsQ0FBQ0MsYUFBVixLQUE0QixNQUFLRixLQUFMLENBQVdFLGFBQXZDLElBQ0FELFNBQVMsQ0FBQ0UsYUFBVixLQUE0QixNQUFLSCxLQUFMLENBQVdHLGFBRHZDLElBRUFGLFNBQVMsQ0FBQ0csTUFBVixLQUFxQixNQUFLSixLQUFMLENBQVdJLE1BRnBDLEVBRTRDO0FBQzFDLFlBQU1DLEtBQUssR0FBRyxNQUFLQyxTQUFMLENBQWUsTUFBS04sS0FBcEIsQ0FBZDs7QUFDQSxZQUFJSyxLQUFKLEVBQVc7QUFDVCxnQkFBS0UsUUFBTCxDQUFjRixLQUFkO0FBQ0Q7QUFDRjtBQUNGLEtBbEJrQjs7QUFBQSx1RUFvQkEsWUFBTTtBQUFBLFVBQ2ZILGFBRGUsR0FDRyxNQUFLRyxLQURSLENBQ2ZILGFBRGU7O0FBQUEsaUJBRVFBLGFBQWEsSUFBSSxFQUZ6QjtBQUFBLFVBRWZNLE9BRmUsUUFFZkEsT0FGZTtBQUFBLFVBRU5DLFNBRk0sUUFFTkEsU0FGTTs7QUFBQSxVQUdmQyxVQUhl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Q0FERixDQURGO0FBc0NELEc7OztFQTNSb0N1QyxlQUFNQyxhOzs7O2dCQUF4QjlELFMsa0JBMkJHO0FBQ3BCRyxFQUFBQSxhQUFhLEVBQUU0RCxxQkFESztBQUVwQmxCLEVBQUFBLFNBQVMsRUFBRSxFQUZTO0FBR3BCYixFQUFBQSxPQUFPLEVBQUU7QUFDUGdDLElBQUFBLFFBQVEsRUFBRSxJQURIO0FBRVAzRCxJQUFBQSxNQUFNLEVBQUUsS0FGRDtBQUdQK0IsSUFBQUEsUUFBUSxFQUFFO0FBSEgsR0FIVztBQVFwQmdCLEVBQUFBLFVBQVUsRUFBRSxFQVJRO0FBU3BCRCxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQVRFO0FBVXBCYixFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQVZFO0FBV3BCakMsRUFBQUEsTUFBTSxFQUFFNEQsc0JBWFk7QUFZcEI3RCxFQUFBQSxhQUFhLEVBQUU4RCxzQkFaSztBQWFwQjVDLEVBQUFBLFlBQVksRUFBRTZDLHNCQWJNO0FBY3BCZCxFQUFBQSxLQUFLLEVBQUU7QUFkYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgRmFDYXJldERvd24sIEZhQ2FyZXRVcCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VQcm9wVHlwZXMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvY29uc3RhbnRzJztcbmltcG9ydCBEYXRlUmFuZ2VQb3BvdmVyIGZyb20gJy4vcG9wb3Zlci9kYXRlLXJhbmdlLXBvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCBmb3JtYXRQZXJpb2RMYWJlbCBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZ2V0UmVsYXRpdmVPcHRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgcGVyaW9kRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyBwZXJpb2RTaGFwZSB9IGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvcHJvcC10eXBlcyc7XG5pbXBvcnQgcmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuaW1wb3J0IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB0cmFuc2xhdGlvbnNQcm9wVHlwZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvcHJvcC10eXBlcyc7XG5cbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgZGlzcGxheTogZmxleDtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDlweCA4cHggOXB4IC0yNHB4O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ncmV5OX07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWJzb2x1dGVSYW5nZTogUHJvcFR5cGVzLnNoYXBlKGFic29sdXRlUmFuZ2VQcm9wVHlwZXMpLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbmFibGVkOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYWJzb2x1dGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgcGVyaW9kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHJlbGF0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB9KSxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGVyaW9kOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW5kRGF0ZTogcGVyaW9kU2hhcGUsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzdGFydERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgfSksXG4gICAgcmVsYXRpdmVSYW5nZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVuZERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzdGFydERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgfSksXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUodHJhbnNsYXRpb25zUHJvcFR5cGVzKSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFic29sdXRlUmFuZ2U6IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBlbmFibGVkOiB7XG4gICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgIHBlcmlvZDogZmFsc2UsXG4gICAgICByZWxhdGl2ZTogZmFsc2UsXG4gICAgfSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHBlcmlvZDogcGVyaW9kRGVmYXVsdFByb3BzLFxuICAgIHJlbGF0aXZlUmFuZ2U6IHJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMsXG4gICAgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMsXG4gICAgd2lkdGg6ICczMDBweCcsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZShwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzKSA9PiB7XG4gICAgaWYgKHByZXZQcm9wcy5hYnNvbHV0ZVJhbmdlICE9PSB0aGlzLnByb3BzLmFic29sdXRlUmFuZ2UgfHxcbiAgICAgICAgcHJldlByb3BzLnJlbGF0aXZlUmFuZ2UgIT09IHRoaXMucHJvcHMucmVsYXRpdmVSYW5nZSB8fFxuICAgICAgICBwcmV2UHJvcHMucGVyaW9kICE9PSB0aGlzLnByb3BzLnBlcmlvZCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBYnNvbHV0ZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHMuYWJzb2x1dGVSYW5nZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgZ2V0UGVyaW9kU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwZXJpb2QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUgJiYgc3RhcnREYXRlLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmREYXRlOiB7IC4uLmVuZERhdGUsIG1vbWVudDogZW5kRGF0ZS5tb21lbnQgfHwgQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHsgLi4uc3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgfHwgQ29uc3RhbnRzLlNUQVJUIH0sXG4gICAgICAgIHZhbHVlOiBmb3JtYXRQZXJpb2RMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWxhdGl2ZVJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IGVuZERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5FTkQgfSxcbiAgICAgICAgc3RhcnREYXRlOiB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5TVEFSVCB9LFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBpbml0U3RhdGUgPSBwcm9wcyA9PiAoXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UGVyaW9kKHByb3BzKVxuICApO1xuXG4gIGluaXRBYnNvbHV0ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgZGF0ZUZvcm1hdCB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSAodGhpcy5zdGF0ZSB8fCB7fSkuYWJzb2x1dGVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICBzaG93T3ZlcmxheSxcbiAgICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6ICdhYnNvbHV0ZScsXG4gICAgICAgIHZhbHVlOiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSA/XG4gICAgICAgICAgYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCA6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbml0UGVyaW9kID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBlbmFibGVkLCBwZXJpb2QsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXJ0RGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKHN0YXJ0RGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiBlbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gJ3BlcmlvZCcgOiB1bmRlZmluZWQsXG4gICAgICB2YWx1ZTogKGVuYWJsZWQucGVyaW9kICYmIGVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUpID9cbiAgICAgICAgZm9ybWF0UGVyaW9kTGFiZWwoc2VsZWN0ZWRTdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucykgOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaW5pdFJlbGF0aXZlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHJlbGF0aXZlUmFuZ2UsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XG5cbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3RhcnREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oc3RhcnREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihlbmREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBlbmREYXRlOiBzZWxlY3RlZEVuZERhdGUsXG4gICAgICAgICAgc3RhcnREYXRlOiBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSA/ICdyZWxhdGl2ZScgOiB1bmRlZmluZWQsXG4gICAgICAgIHZhbHVlOiAoZW5hYmxlZC5yZWxhdGl2ZSAmJiBzZWxlY3RlZEVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUpID9cbiAgICAgICAgICBgJHtzZWxlY3RlZFN0YXJ0RGF0ZS5sYWJlbH0gLSAke3NlbGVjdGVkRW5kRGF0ZS5sYWJlbH1gIDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVJhbmdlVHlwZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFJhbmdlVHlwZSB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzW2BnZXQke3NlbGVjdGVkUmFuZ2VUeXBlLnJlcGxhY2UoL1xcdy8sIGMgPT4gYy50b1VwcGVyQ2FzZSgpKX1TdGF0ZWBdKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBzdGF0ZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZShldmVudCk7XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gZXZlbnQ7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6ICF0aGlzLnN0YXRlLnNob3dPdmVybGF5IH0pO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGRpcnR5IHNvbHV0aW9uIGFuZCBjL3Nob3VsZCBiZSBmaXhlZC5cbiAgICogUm9vdCBjYXVzZTogZGF5LXBpY2tlciBpcyByZW5kZXJlZCB0byByb290IGVsZW1lbnQsIG5vdCBpbnNpZGUgcG9wb3ZlciBlbGVlbW50LlxuICAgKiBUaGVyZWZvcmUgY2xpY2sgY29taW5nIGZvcm0gZGF5LXBpY2tlciBhcmUgY29uc2lkZXJzIGFzIG91dHNpZGUgY2xpY2sgb2YgcG9wb3ZlclxuICAgKiBhbmQgcG9wb3ZlciB3b3VsZCBiZSBjbG9zZSB3aXRob3V0IGV2ZW50IHByZXZlbnREZWZhdWx0LlxuICAgKiBPbmUgc29sdXRpb24gaXMgcGFzc2luZyBhdCBsZWFzdCB0cmVlIGNhbGxiYWNrcyBmb3IgcmVhY3QtZGF0ZXRpbWU6IG9uV2Vla0NsaWNrLFxuICAgKiBvbkNhcHRpb25DbGljayBhbmQgY3VzdG9tIG9uQ2xpY2sgZm9yIGN1c3RvbSBjYXB0aW9uIG9mIHJlYWN0LWRhdGV0aW1lLlxuICAgKi9cbiAgaGFuZGxlSGlkZSA9IGUgPT4gKFxuICAgIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnBhcmVudE5vZGUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoJ0RheVBpY2tlcicpID9cbiAgICAgIGUucHJldmVudERlZmF1bHQoKSA6XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6IGZhbHNlIH0pXG4gICk7XG5cbiAgcmVuZGVyQ2FyZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gc2hvd092ZXJsYXlcbiAgICAgID8gPEZhQ2FyZXRVcCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgOiA8RmFDYXJldERvd24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZW5hYmxlZCxcbiAgICAgIGlkLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgcGVyaW9kLFxuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgc2hvd092ZXJsYXksXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgLi4udGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlLFxuICAgICAgLi4udGhpcy5zdGF0ZS5hYnNvbHV0ZVJhbmdlLFxuICAgIH07XG5cbiAgICBjb25zdCBEYXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICAgIHdpZHRoOiAke3dpZHRofTtcbiAgICBgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxEYXRlUmFuZ2VTZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxSZWFkT25seUlucHV0IHNob3dPdmVybGF5PXtzaG93T3ZlcmxheX0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZXQoKX1cbiAgICAgICAgICA8L1JlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIHNob3c9e3Nob3dPdmVybGF5fVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUhpZGV9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgY29udGFpbmVyPXt0aGlzfVxuICAgICAgICAgICAgcm9vdENsb3NlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcbiAgICAgICAgICAgICAgYWJzb2x1dGVSYW5nZT17YWJzb2x1dGVSYW5nZX1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgICAgb25SYW5nZVR5cGVDaGFuZ2U9e3RoaXMuaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBlcmlvZD17cGVyaW9kfVxuICAgICAgICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZT17c2VsZWN0ZWRSYW5nZVR5cGV9XG4gICAgICAgICAgICAgIHJlbGF0aXZlUmFuZ2U9e3JlbGF0aXZlUmFuZ2V9XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=