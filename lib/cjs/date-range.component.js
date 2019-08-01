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

var Constants = Object.freeze({
  ABSOLUTE: 'absolute',
  PERIOD: 'period',
  RELATIVE: 'relative'
});

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
          selectedRangeType: Constants.ABSOLUTE,
          value: from.isValid() && to.isValid() ? from.format(dateFormat) + " - " + to.format(dateFormat) : '',
          lastValidRange: Constants.ABSOLUTE
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
      var selectedRangeType = endDate && selectedStartDate ? Constants.PERIOD : undefined;
      return {
        period: {
          endDate: endDate,
          startDate: selectedStartDate
        },
        selectedRangeType: selectedRangeType,
        value: enabled.period && endDate && selectedStartDate ? (0, _periodLabel.default)(selectedStartDate, endDate, translations) : '',
        lastValidRange: selectedRangeType
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
        var selectedRangeType = selectedEndDate && selectedStartDate ? Constants.RELATIVE : undefined;
        return {
          relativeRange: {
            endDate: selectedEndDate,
            startDate: selectedStartDate
          },
          selectedRangeType: selectedRangeType,
          value: enabled.relative && selectedEndDate && selectedStartDate ? selectedStartDate.label + " - " + selectedEndDate.label : '',
          lastValidRange: selectedRangeType
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

        _this.setState({
          lastValidRange: selectedRangeType
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var onChange = _this.props.onChange;
      var lastValidRange = _this.state.selectedRangeType;

      _this.setState(event);

      var startDate = event.startDate,
          endDate = event.endDate;

      if (startDate && endDate) {
        onChange({
          startDate: startDate,
          endDate: endDate
        });

        _this.setState({
          lastValidRange: lastValidRange
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      return _this.setState({
        showOverlay: !_this.state.showOverlay
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHide", function (e) {
      /**
       * This if is dirty solution and c/should be fixed.
       * Root cause: day-picker is rendered to root element, not inside popover eleemnt.
       * Therefore click coming form day-picker are considers as outside click of popover
       * and popover would be close without event preventDefault.
       * One solution is passing at least tree callbacks for react-datetime: onWeekClick,
       * onCaptionClick and custom onClick for custom caption of react-datetime.
       */
      if (e.target && e.target.parentNode && e.target.parentNode.className && e.target.parentNode.className.includes('DayPicker')) {
        e.preventDefault();
        return;
      }

      var _this$state = _this.state,
          value = _this$state.value,
          lastValidRange = _this$state.lastValidRange;
      var state = !value && lastValidRange ? _extends({}, _this["get" + lastValidRange.replace(/\w/, function (c) {
        return c.toUpperCase();
      }) + "State"](), {
        selectedRangeType: lastValidRange,
        showOverlay: false
      }) : {
        showOverlay: false
      };

      _this.setState(state);
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
    var _this$state2 = this.state,
        period = _this$state2.period,
        relativeRange = _this$state2.relativeRange,
        selectedRangeType = _this$state2.selectedRangeType,
        showOverlay = _this$state2.showOverlay,
        value = _this$state2.value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImdyZXk5IiwiQ29uc3RhbnRzIiwiT2JqZWN0IiwiZnJlZXplIiwiQUJTT0xVVEUiLCJQRVJJT0QiLCJSRUxBVElWRSIsIkRhdGVSYW5nZSIsInByb3BzIiwicHJldlByb3BzIiwiYWJzb2x1dGVSYW5nZSIsInJlbGF0aXZlUmFuZ2UiLCJwZXJpb2QiLCJzdGF0ZSIsImluaXRTdGF0ZSIsInNldFN0YXRlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwibW9tZW50IiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsInN0YXJ0T2YiLCJ2YWx1ZSIsImZvcm1hdCIsInRyYW5zbGF0aW9ucyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwiRU5EIiwiU1RBUlQiLCJsYWJlbCIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJpbml0UGVyaW9kIiwic2hvd092ZXJsYXkiLCJzZWxlY3RlZFJhbmdlVHlwZSIsImxhc3RWYWxpZFJhbmdlIiwiZW5hYmxlZCIsInNlbGVjdGVkU3RhcnREYXRlIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRFbmREYXRlIiwicmVsYXRpdmUiLCJldmVudCIsIm9uQ2hhbmdlIiwicmVwbGFjZSIsImMiLCJ0b1VwcGVyQ2FzZSIsImUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsaWNrIiwicmVuZGVyIiwiaWQiLCJpbnB1dFJlZiIsImlucHV0UHJvcHMiLCJ3aWR0aCIsIkRhdGVSYW5nZVNlY3Rpb24iLCJlbCIsImlucHV0IiwicmVuZGVyQ2FyZXQiLCJoYW5kbGVIaWRlIiwiaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyIsImFic29sdXRlIiwicGVyaW9kRGVmYXVsdFByb3BzIiwicmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyIsInRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQywwQkFBT0MsR0FBVixvQkFFS0MseUJBQU1DLHNCQUZYLEVBWU5ELHlCQUFNRSxNQUFOLENBQWFDLEtBWlAsQ0FBbkI7O0FBZ0JBLElBQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDOUJDLEVBQUFBLFFBQVEsRUFBRSxVQURvQjtBQUU5QkMsRUFBQUEsTUFBTSxFQUFFLFFBRnNCO0FBRzlCQyxFQUFBQSxRQUFRLEVBQUU7QUFIb0IsQ0FBZCxDQUFsQjs7SUFNcUJDLFM7Ozs7O0FBNENuQixxQkFBWUMsTUFBWixFQUFtQjtBQUFBOztBQUNqQiw0Q0FBTUEsTUFBTjs7QUFEaUIseUVBU0UsVUFBQ0MsU0FBRCxFQUFlO0FBQ2xDLFVBQUlBLFNBQVMsQ0FBQ0MsYUFBVixLQUE0QixNQUFLRixLQUFMLENBQVdFLGFBQXZDLElBQ0FELFNBQVMsQ0FBQ0UsYUFBVixLQUE0QixNQUFLSCxLQUFMLENBQVdHLGFBRHZDLElBRUFGLFNBQVMsQ0FBQ0csTUFBVixLQUFxQixNQUFLSixLQUFMLENBQVdJLE1BRnBDLEVBRTRDO0FBQzFDLFlBQU1DLEtBQUssR0FBRyxNQUFLQyxTQUFMLENBQWUsTUFBS04sS0FBcEIsQ0FBZDs7QUFD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TUFBQSxZQUFZLEVBQUVrQjtBQVJoQixNQVBGLENBZkYsQ0FERixDQURGO0FBc0NELEc7OztFQXhUb0N3QyxlQUFNQyxhOzs7O2dCQUF4Qi9ELFMsa0JBMkJHO0FBQ3BCRyxFQUFBQSxhQUFhLEVBQUU2RCxxQkFESztBQUVwQmxCLEVBQUFBLFNBQVMsRUFBRSxFQUZTO0FBR3BCYixFQUFBQSxPQUFPLEVBQUU7QUFDUGdDLElBQUFBLFFBQVEsRUFBRSxJQURIO0FBRVA1RCxJQUFBQSxNQUFNLEVBQUUsS0FGRDtBQUdQZ0MsSUFBQUEsUUFBUSxFQUFFO0FBSEgsR0FIVztBQVFwQmdCLEVBQUFBLFVBQVUsRUFBRSxFQVJRO0FBU3BCRCxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQVRFO0FBVXBCYixFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQVZFO0FBV3BCbEMsRUFBQUEsTUFBTSxFQUFFNkQsc0JBWFk7QUFZcEI5RCxFQUFBQSxhQUFhLEVBQUUrRCxzQkFaSztBQWFwQjdDLEVBQUFBLFlBQVksRUFBRThDLHNCQWJNO0FBY3BCZCxFQUFBQSxLQUFLLEVBQUU7QUFkYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgRmFDYXJldERvd24sIEZhQ2FyZXRVcCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VQcm9wVHlwZXMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlbGF0aXZlQ29uc3RhbnRzIGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9jb25zdGFudHMnO1xuaW1wb3J0IERhdGVSYW5nZVBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQnO1xuaW1wb3J0IGZvcm1hdFBlcmlvZExhYmVsIGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvcGVyaW9kLWxhYmVsLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBnZXRSZWxhdGl2ZU9wdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCBwZXJpb2REZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL3BlcmlvZC9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IHBlcmlvZFNoYXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BlcmlvZC9wcm9wLXR5cGVzJztcbmltcG9ydCByZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcHJvcC10eXBlcyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRpb25zRGVmYXVsdFByb3BzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHRyYW5zbGF0aW9uc1Byb3BUeXBlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9wcm9wLXR5cGVzJztcblxuY29uc3QgUmVhZE9ubHlJbnB1dCA9IHN0eWxlZC5kaXZgXG4gIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuICBzdmcge1xuICAgIG1hcmdpbjogOXB4IDhweCA5cHggLTI0cHg7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXk5fTtcbiAgfVxuYDtcblxuY29uc3QgQ29uc3RhbnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIEFCU09MVVRFOiAnYWJzb2x1dGUnLFxuICBQRVJJT0Q6ICdwZXJpb2QnLFxuICBSRUxBVElWRTogJ3JlbGF0aXZlJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFic29sdXRlUmFuZ2U6IFByb3BUeXBlcy5zaGFwZShhYnNvbHV0ZVJhbmdlUHJvcFR5cGVzKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW5hYmxlZDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFic29sdXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHBlcmlvZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICByZWxhdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgfSksXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBlcmlvZDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVuZERhdGU6IHBlcmlvZFNoYXBlLFxuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgc3RhcnREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgIH0pLFxuICAgIHJlbGF0aXZlUmFuZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBlbmREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgc3RhcnREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgIH0pLFxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHRyYW5zbGF0aW9uc1Byb3BUeXBlcyksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhYnNvbHV0ZVJhbmdlOiBhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgZW5hYmxlZDoge1xuICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICBwZXJpb2Q6IGZhbHNlLFxuICAgICAgcmVsYXRpdmU6IGZhbHNlLFxuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWY6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBwZXJpb2Q6IHBlcmlvZERlZmF1bHRQcm9wcyxcbiAgICByZWxhdGl2ZVJhbmdlOiByZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzLFxuICAgIHRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zRGVmYXVsdFByb3BzLFxuICAgIHdpZHRoOiAnMzAwcHgnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5pbml0U3RhdGUocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcykgPT4ge1xuICAgIGlmIChwcmV2UHJvcHMuYWJzb2x1dGVSYW5nZSAhPT0gdGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlIHx8XG4gICAgICAgIHByZXZQcm9wcy5yZWxhdGl2ZVJhbmdlICE9PSB0aGlzLnByb3BzLnJlbGF0aXZlUmFuZ2UgfHxcbiAgICAgICAgcHJldlByb3BzLnBlcmlvZCAhPT0gdGhpcy5wcm9wcy5wZXJpb2QpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5pbml0U3RhdGUodGhpcy5wcm9wcyk7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QWJzb2x1dGVTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IGFic29sdXRlUmFuZ2UgfHwge307XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzLmFic29sdXRlUmFuZ2U7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgaWYgKGZyb20uaXNWYWxpZCgpICYmIHRvLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGdldFBlcmlvZFN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGVyaW9kIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBwZXJpb2QgfHwge307XG4gICAgaWYgKGVuZERhdGUgJiYgc3RhcnREYXRlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLCBtb21lbnQ6IGVuZERhdGUubW9tZW50IHx8IFJlbGF0aXZlQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICAuLi5zdGFydERhdGUudmFsdWUsXG4gICAgICAgICAgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJULFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogZm9ybWF0UGVyaW9kTGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBnZXRSZWxhdGl2ZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVsYXRpdmVSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUgJiYgZW5kRGF0ZS52YWx1ZSAmJiBzdGFydERhdGUudmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuZERhdGU6IHsgLi4uZW5kRGF0ZS52YWx1ZSwgbW9tZW50OiBlbmREYXRlLnZhbHVlLm1vbWVudCB8fCBSZWxhdGl2ZUNvbnN0YW50cy5FTkQgfSxcbiAgICAgICAgc3RhcnREYXRlOiB7XG4gICAgICAgICAgLi4uc3RhcnREYXRlLnZhbHVlLFxuICAgICAgICAgIG1vbWVudDogc3RhcnREYXRlLnZhbHVlLm1vbWVudCB8fCBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWx9YCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgaW5pdFN0YXRlID0gcHJvcHMgPT4gKFxuICAgIHRoaXMuaW5pdEFic29sdXRlUmFuZ2UocHJvcHMpIHx8IHRoaXMuaW5pdFJlbGF0aXZlUmFuZ2UocHJvcHMpIHx8IHRoaXMuaW5pdFBlcmlvZChwcm9wcylcbiAgKTtcblxuICBpbml0QWJzb2x1dGVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUsIGRhdGVGb3JtYXQgfSA9IGFic29sdXRlUmFuZ2UgfHwge307XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gKHRoaXMuc3RhdGUgfHwge30pLmFic29sdXRlUmFuZ2UgfHwge307XG5cbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgc2hvd092ZXJsYXksXG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiBDb25zdGFudHMuQUJTT0xVVEUsXG4gICAgICAgIHZhbHVlOiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSA/XG4gICAgICAgICAgYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCA6ICcnLFxuICAgICAgICBsYXN0VmFsaWRSYW5nZTogQ29uc3RhbnRzLkFCU09MVVRFLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbml0UGVyaW9kID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBlbmFibGVkLCBwZXJpb2QsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXJ0RGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKHN0YXJ0RGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gZW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSA/IENvbnN0YW50cy5QRVJJT0QgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHN0YXJ0RGF0ZTogc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgICB2YWx1ZTogKGVuYWJsZWQucGVyaW9kICYmIGVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUpID9cbiAgICAgICAgZm9ybWF0UGVyaW9kTGFiZWwoc2VsZWN0ZWRTdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucykgOiAnJyxcbiAgICAgIGxhc3RWYWxpZFJhbmdlOiBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICB9O1xuICB9XG5cbiAgaW5pdFJlbGF0aXZlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHJlbGF0aXZlUmFuZ2UsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XG5cbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3RhcnREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oc3RhcnREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihlbmREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgICBjb25zdCBzZWxlY3RlZFJhbmdlVHlwZSA9IHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZVxuICAgICAgICA/IENvbnN0YW50cy5SRUxBVElWRSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIGVuZERhdGU6IHNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICAgICAgdmFsdWU6IChlbmFibGVkLnJlbGF0aXZlICYmIHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSkgP1xuICAgICAgICAgIGAke3NlbGVjdGVkU3RhcnREYXRlLmxhYmVsfSAtICR7c2VsZWN0ZWRFbmREYXRlLmxhYmVsfWAgOiAnJyxcbiAgICAgICAgbGFzdFZhbGlkUmFuZ2U6IHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYW5kbGVSYW5nZVR5cGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHN0YXRlID0gdGhpc1tgZ2V0JHtzZWxlY3RlZFJhbmdlVHlwZS5yZXBsYWNlKC9cXHcvLCBjID0+IGMudG9VcHBlckNhc2UoKSl9U3RhdGVgXSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gc3RhdGU7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0VmFsaWRSYW5nZTogc2VsZWN0ZWRSYW5nZVR5cGUgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlOiBsYXN0VmFsaWRSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKGV2ZW50KTtcblxuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBldmVudDtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RWYWxpZFJhbmdlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogIXRoaXMuc3RhdGUuc2hvd092ZXJsYXkgfSk7XG5cbiAgaGFuZGxlSGlkZSA9IChlKSA9PiB7XG4gICAgLyoqXG4gICAgICogVGhpcyBpZiBpcyBkaXJ0eSBzb2x1dGlvbiBhbmQgYy9zaG91bGQgYmUgZml4ZWQuXG4gICAgICogUm9vdCBjYXVzZTogZGF5LXBpY2tlciBpcyByZW5kZXJlZCB0byByb290IGVsZW1lbnQsIG5vdCBpbnNpZGUgcG9wb3ZlciBlbGVlbW50LlxuICAgICAqIFRoZXJlZm9yZSBjbGljayBjb21pbmcgZm9ybSBkYXktcGlja2VyIGFyZSBjb25zaWRlcnMgYXMgb3V0c2lkZSBjbGljayBvZiBwb3BvdmVyXG4gICAgICogYW5kIHBvcG92ZXIgd291bGQgYmUgY2xvc2Ugd2l0aG91dCBldmVudCBwcmV2ZW50RGVmYXVsdC5cbiAgICAgKiBPbmUgc29sdXRpb24gaXMgcGFzc2luZyBhdCBsZWFzdCB0cmVlIGNhbGxiYWNrcyBmb3IgcmVhY3QtZGF0ZXRpbWU6IG9uV2Vla0NsaWNrLFxuICAgICAqIG9uQ2FwdGlvbkNsaWNrIGFuZCBjdXN0b20gb25DbGljayBmb3IgY3VzdG9tIGNhcHRpb24gb2YgcmVhY3QtZGF0ZXRpbWUuXG4gICAgICovXG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LnBhcmVudE5vZGVcbiAgICAgICYmIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lXG4gICAgICAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmNsdWRlcygnRGF5UGlja2VyJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyB2YWx1ZSwgbGFzdFZhbGlkUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc3RhdGUgPSAhdmFsdWUgJiYgbGFzdFZhbGlkUmFuZ2VcbiAgICAgID8ge1xuICAgICAgICAuLi50aGlzW2BnZXQke2xhc3RWYWxpZFJhbmdlLnJlcGxhY2UoL1xcdy8sIGMgPT4gYy50b1VwcGVyQ2FzZSgpKX1TdGF0ZWBdKCksXG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiBsYXN0VmFsaWRSYW5nZSxcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH07XG5cbiAgcmVuZGVyQ2FyZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gc2hvd092ZXJsYXlcbiAgICAgID8gPEZhQ2FyZXRVcCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgOiA8RmFDYXJldERvd24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZW5hYmxlZCxcbiAgICAgIGlkLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgcGVyaW9kLFxuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgc2hvd092ZXJsYXksXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgLi4udGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlLFxuICAgICAgLi4udGhpcy5zdGF0ZS5hYnNvbHV0ZVJhbmdlLFxuICAgIH07XG5cbiAgICBjb25zdCBEYXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICAgIHdpZHRoOiAke3dpZHRofTtcbiAgICBgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxEYXRlUmFuZ2VTZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxSZWFkT25seUlucHV0IHNob3dPdmVybGF5PXtzaG93T3ZlcmxheX0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZXQoKX1cbiAgICAgICAgICA8L1JlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIHNob3c9e3Nob3dPdmVybGF5fVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUhpZGV9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgY29udGFpbmVyPXt0aGlzfVxuICAgICAgICAgICAgcm9vdENsb3NlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcbiAgICAgICAgICAgICAgYWJzb2x1dGVSYW5nZT17YWJzb2x1dGVSYW5nZX1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgICAgb25SYW5nZVR5cGVDaGFuZ2U9e3RoaXMuaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBlcmlvZD17cGVyaW9kfVxuICAgICAgICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZT17c2VsZWN0ZWRSYW5nZVR5cGV9XG4gICAgICAgICAgICAgIHJlbGF0aXZlUmFuZ2U9e3JlbGF0aXZlUmFuZ2V9XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=