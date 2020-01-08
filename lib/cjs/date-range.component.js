"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  .form-control[readonly] {\n    background-color: ", ";\n    padding-right: 32px;\n    cursor: pointer;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  display: flex;\n  svg {\n    margin: 9px 8px 9px -24px;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ReadOnlyInput = _styledComponents["default"].div(_templateObject(), _ocCmCommonLayouts.theme.contentBackgroundColor, _ocCmCommonLayouts.theme.colors.grey9);

var DateRangeSection = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.width;
});

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
      var _this$props = _this.props,
          absoluteRange = _this$props.absoluteRange,
          relativeRange = _this$props.relativeRange,
          period = _this$props.period;

      if (prevProps.absoluteRange !== absoluteRange || prevProps.relativeRange !== relativeRange || prevProps.period !== period) {
        var state = _this.initState(_this.props);

        if (state) {
          _this.setState(state);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAbsoluteState", function () {
      var dateFormat = _this.props.absoluteRange.dateFormat;
      var absoluteRange = _this.state.absoluteRange;

      var _ref = absoluteRange || {},
          endDate = _ref.endDate,
          startDate = _ref.startDate;

      if (startDate && endDate) {
        var from = _moment["default"].utc(startDate);

        var to = _moment["default"].utc(endDate);

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
            moment: endDate.moment || _constants["default"].END
          }),
          startDate: _extends({}, startDate.value, {
            moment: startDate.value.moment || _constants["default"].START
          }),
          value: (0, _periodLabel["default"])(startDate, endDate, translations)
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
            moment: endDate.value.moment || _constants["default"].END
          }),
          startDate: _extends({}, startDate.value, {
            moment: startDate.value.moment || _constants["default"].START
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
        var from = _moment["default"].utc(startDate);

        var to = _moment["default"].utc(endDate);

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

      var selectedStartDate = (0, _relativeOptions.getRelativeOption)(startDate, (0, _translate["default"])(translations, 'dates'));
      var selectedRangeType = endDate && selectedStartDate ? Constants.PERIOD : undefined;
      return {
        period: {
          endDate: endDate,
          startDate: selectedStartDate
        },
        selectedRangeType: selectedRangeType,
        value: enabled.period && endDate && selectedStartDate ? (0, _periodLabel["default"])(selectedStartDate, endDate, translations) : '',
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
        var selectedStartDate = (0, _relativeOptions.getRelativeOption)(startDate, (0, _translate["default"])(translations, 'dates'));
        var selectedEndDate = (0, _relativeOptions.getRelativeOption)(endDate, (0, _translate["default"])(translations, 'dates'));
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
      return _this.setState(function (prevState) {
        return {
          showOverlay: !prevState.showOverlay
        };
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
      if (e.target && e.target.parentNode && e.target.parentNode.className && e.target.parentNode.className.includes && (e.target.parentNode.className.includes('DayPicker') || e.target.parentNode.className.includes('daterange-select'))) {
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
      return showOverlay ? _react["default"].createElement(_fa.FaCaretUp, {
        onClick: _this.handleClick
      }) : _react["default"].createElement(_fa.FaCaretDown, {
        onClick: _this.handleClick
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputRef", function (el) {
      var inputRef = _this.props.inputRef;
      _this.input = el;
      inputRef(el);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverlayTargetRef", function (el) {
      _this.overlayTarget = el;
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverlayTarget", function () {
      return _reactDom["default"].findDOMNode(_this.overlayTarget);
    });

    var _state = _this.initState(_props);

    _this.state = _extends({}, _state, {
      showOverlay: false
    });
    return _this;
  }

  var _proto = DateRange.prototype;

  // eslint-disable-line
  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        enabled = _this$props2.enabled,
        id = _this$props2.id,
        inputProps = _this$props2.inputProps,
        translations = _this$props2.translations,
        absoluteRangeProp = _this$props2.absoluteRange;
    var _this$state2 = this.state,
        period = _this$state2.period,
        relativeRange = _this$state2.relativeRange,
        selectedRangeType = _this$state2.selectedRangeType,
        showOverlay = _this$state2.showOverlay,
        value = _this$state2.value,
        absoluteRangeState = _this$state2.absoluteRange;

    var absoluteRange = _extends({}, absoluteRangeProp, {}, absoluteRangeState);

    return _react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: _ocCmCommonLayouts.theme
    }, _react["default"].createElement(DateRangeSection, {
      id: id,
      className: className,
      ref: this.handleOverlayTargetRef
    }, _react["default"].createElement(ReadOnlyInput, {
      showOverlay: showOverlay
    }, _react["default"].createElement(_reactBootstrap.FormControl, _extends({
      type: "text",
      inputRef: this.handleInputRef
    }, inputProps, {
      readOnly: "readonly",
      value: value,
      onClick: this.handleClick
    })), this.renderCaret()), _react["default"].createElement(_reactBootstrap.Overlay, {
      show: showOverlay,
      onHide: this.handleHide,
      placement: "bottom",
      container: this,
      rootClose: true,
      target: this.handleOverlayTarget
    }, _react["default"].createElement(_dateRangePopover["default"], {
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
}(_react["default"].PureComponent);

exports["default"] = DateRange;

_defineProperty(DateRange, "defaultProps", {
  absoluteRange: _defaultProps["default"],
  className: '',
  enabled: {
    absolute: true,
    period: false,
    relative: false
  },
  inputProps: {},
  inputRef: function inputRef() {},
  onChange: function onChange() {},
  period: _defaultProps2["default"],
  relativeRange: _defaultProps3["default"],
  translations: _defaultProps4["default"],
  width: '300px'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsImdyZXk5IiwiRGF0ZVJhbmdlU2VjdGlvbiIsInByb3BzIiwid2lkdGgiLCJDb25zdGFudHMiLCJPYmplY3QiLCJmcmVlemUiLCJBQlNPTFVURSIsIlBFUklPRCIsIlJFTEFUSVZFIiwiRGF0ZVJhbmdlIiwicHJldlByb3BzIiwiYWJzb2x1dGVSYW5nZSIsInJlbGF0aXZlUmFuZ2UiLCJwZXJpb2QiLCJzdGF0ZSIsImluaXRTdGF0ZSIsInNldFN0YXRlIiwiZGF0ZUZvcm1hdCIsImVuZERhdGUiLCJzdGFydERhdGUiLCJmcm9tIiwibW9tZW50IiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsInN0YXJ0T2YiLCJ2YWx1ZSIsImZvcm1hdCIsInRyYW5zbGF0aW9ucyIsIlJlbGF0aXZlQ29uc3RhbnRzIiwiRU5EIiwiU1RBUlQiLCJsYWJlbCIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJpbml0UGVyaW9kIiwic2hvd092ZXJsYXkiLCJzZWxlY3RlZFJhbmdlVHlwZSIsImxhc3RWYWxpZFJhbmdlIiwiZW5hYmxlZCIsInNlbGVjdGVkU3RhcnREYXRlIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRFbmREYXRlIiwicmVsYXRpdmUiLCJldmVudCIsIm9uQ2hhbmdlIiwicmVwbGFjZSIsImMiLCJ0b1VwcGVyQ2FzZSIsInByZXZTdGF0ZSIsImUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsaWNrIiwiZWwiLCJpbnB1dFJlZiIsImlucHV0Iiwib3ZlcmxheVRhcmdldCIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZW5kZXIiLCJpZCIsImlucHV0UHJvcHMiLCJhYnNvbHV0ZVJhbmdlUHJvcCIsImFic29sdXRlUmFuZ2VTdGF0ZSIsImhhbmRsZU92ZXJsYXlUYXJnZXRSZWYiLCJoYW5kbGVJbnB1dFJlZiIsInJlbmRlckNhcmV0IiwiaGFuZGxlSGlkZSIsImhhbmRsZU92ZXJsYXlUYXJnZXQiLCJoYW5kbGVSYW5nZVR5cGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzIiwiYWJzb2x1dGUiLCJwZXJpb2REZWZhdWx0UHJvcHMiLCJyZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzIiwidHJhbnNsYXRpb25zRGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYsb0JBRUtDLHlCQUFNQyxzQkFGWCxFQVlORCx5QkFBTUUsTUFBTixDQUFhQyxLQVpQLENBQW5COztBQWdCQSxJQUFNQyxnQkFBZ0IsR0FBR04sNkJBQU9DLEdBQVYscUJBQ1gsVUFBQ00sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBakI7QUFBQSxDQURXLENBQXRCOztBQUtBLElBQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDOUJDLEVBQUFBLFFBQVEsRUFBRSxVQURvQjtBQUU5QkMsRUFBQUEsTUFBTSxFQUFFLFFBRnNCO0FBRzlCQyxFQUFBQSxRQUFRLEVBQUU7QUFIb0IsQ0FBZCxDQUFsQjs7SUFNcUJDLFM7Ozs7O0FBNENuQixxQkFBWVIsTUFBWixFQUFtQjtBQUFBOztBQUNqQiw0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QU0sRUFBRSxLQUZEO0FBR1BnQyxJQUFBQSxRQUFRLEVBQUU7QUFISCxHQUhXO0FBUXBCc0IsRUFBQUEsVUFBVSxFQUFFLEVBUlE7QUFTcEJQLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBVEU7QUFVcEJiLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBVkU7QUFXcEJsQyxFQUFBQSxNQUFNLEVBQUVvRSx5QkFYWTtBQVlwQnJFLEVBQUFBLGFBQWEsRUFBRXNFLHlCQVpLO0FBYXBCcEQsRUFBQUEsWUFBWSxFQUFFcUQseUJBYk07QUFjcEJqRixFQUFBQSxLQUFLLEVBQUU7QUFkYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgT3ZlcmxheSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBGYUNhcmV0RG93biwgRmFDYXJldFVwIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvYWJzb2x1dGUvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgYWJzb2x1dGVSYW5nZVByb3BUeXBlcyBmcm9tICcuL2NvbXBvbmVudHMvYWJzb2x1dGUvcHJvcC10eXBlcyc7XG5pbXBvcnQgUmVsYXRpdmVDb25zdGFudHMgZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL2NvbnN0YW50cyc7XG5pbXBvcnQgRGF0ZVJhbmdlUG9wb3ZlciBmcm9tICcuL3BvcG92ZXIvZGF0ZS1yYW5nZS1wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgZm9ybWF0UGVyaW9kTGFiZWwgZnJvbSAnLi9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QtbGFiZWwuZm9ybWF0dGVyJztcbmltcG9ydCB7IGdldFJlbGF0aXZlT3B0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLW9wdGlvbnMnO1xuaW1wb3J0IHBlcmlvZERlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHsgcGVyaW9kU2hhcGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHsgcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSB9IGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9wcm9wLXR5cGVzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcbmltcG9ydCB0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgdHJhbnNsYXRpb25zUHJvcFR5cGVzIGZyb20gJy4vdHJhbnNsYXRpb25zL3Byb3AtdHlwZXMnO1xuXG5jb25zdCBSZWFkT25seUlucHV0ID0gc3R5bGVkLmRpdmBcbiAgLmZvcm0tY29udHJvbFtyZWFkb25seV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiA5cHggOHB4IDlweCAtMjRweDtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTl9O1xuICB9XG5gO1xuXG5jb25zdCBEYXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aH07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IENvbnN0YW50cyA9IE9iamVjdC5mcmVlemUoe1xuICBBQlNPTFVURTogJ2Fic29sdXRlJyxcbiAgUEVSSU9EOiAncGVyaW9kJyxcbiAgUkVMQVRJVkU6ICdyZWxhdGl2ZScsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhYnNvbHV0ZVJhbmdlOiBQcm9wVHlwZXMuc2hhcGUoYWJzb2x1dGVSYW5nZVByb3BUeXBlcyksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuYWJsZWQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhYnNvbHV0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBwZXJpb2Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgcmVsYXRpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIH0pLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwZXJpb2Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBlbmREYXRlOiBwZXJpb2RTaGFwZSxcbiAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHN0YXJ0RGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICB9KSxcbiAgICByZWxhdGl2ZVJhbmdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW5kRGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHN0YXJ0RGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICB9KSxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh0cmFuc2xhdGlvbnNQcm9wVHlwZXMpLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWJzb2x1dGVSYW5nZTogYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGVuYWJsZWQ6IHtcbiAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgcGVyaW9kOiBmYWxzZSxcbiAgICAgIHJlbGF0aXZlOiBmYWxzZSxcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmOiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgcGVyaW9kOiBwZXJpb2REZWZhdWx0UHJvcHMsXG4gICAgcmVsYXRpdmVSYW5nZTogcmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyxcbiAgICB0cmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyxcbiAgICB3aWR0aDogJzMwMHB4JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2UsIHJlbGF0aXZlUmFuZ2UsIHBlcmlvZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJldlByb3BzLmFic29sdXRlUmFuZ2UgIT09IGFic29sdXRlUmFuZ2VcbiAgICAgICAgfHwgcHJldlByb3BzLnJlbGF0aXZlUmFuZ2UgIT09IHJlbGF0aXZlUmFuZ2VcbiAgICAgICAgfHwgcHJldlByb3BzLnBlcmlvZCAhPT0gcGVyaW9kKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEFic29sdXRlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlOiB7IGRhdGVGb3JtYXQgfSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IGFic29sdXRlUmFuZ2UgfHwge307XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgaWYgKGZyb20uaXNWYWxpZCgpICYmIHRvLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGdldFBlcmlvZFN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGVyaW9kIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBwZXJpb2QgfHwge307XG4gICAgaWYgKGVuZERhdGUgJiYgc3RhcnREYXRlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLCBtb21lbnQ6IGVuZERhdGUubW9tZW50IHx8IFJlbGF0aXZlQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICAuLi5zdGFydERhdGUudmFsdWUsXG4gICAgICAgICAgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJULFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogZm9ybWF0UGVyaW9kTGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBnZXRSZWxhdGl2ZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVsYXRpdmVSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUgJiYgZW5kRGF0ZS52YWx1ZSAmJiBzdGFydERhdGUudmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuZERhdGU6IHsgLi4uZW5kRGF0ZS52YWx1ZSwgbW9tZW50OiBlbmREYXRlLnZhbHVlLm1vbWVudCB8fCBSZWxhdGl2ZUNvbnN0YW50cy5FTkQgfSxcbiAgICAgICAgc3RhcnREYXRlOiB7XG4gICAgICAgICAgLi4uc3RhcnREYXRlLnZhbHVlLFxuICAgICAgICAgIG1vbWVudDogc3RhcnREYXRlLnZhbHVlLm1vbWVudCB8fCBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWx9YCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgaW5pdFN0YXRlID0gKHByb3BzKSA9PiAoXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UGVyaW9kKHByb3BzKVxuICApO1xuXG4gIGluaXRBYnNvbHV0ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgZGF0ZUZvcm1hdCB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSAodGhpcy5zdGF0ZSB8fCB7fSkuYWJzb2x1dGVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICBzaG93T3ZlcmxheSxcbiAgICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IENvbnN0YW50cy5BQlNPTFVURSxcbiAgICAgICAgdmFsdWU6IChmcm9tLmlzVmFsaWQoKSAmJiB0by5pc1ZhbGlkKCkpXG4gICAgICAgICAgPyBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gIDogJycsXG4gICAgICAgIGxhc3RWYWxpZFJhbmdlOiBDb25zdGFudHMuQUJTT0xVVEUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGluaXRQZXJpb2QgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHBlcmlvZCwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcGVyaW9kIHx8IHt9O1xuICAgIGNvbnN0IHNlbGVjdGVkU3RhcnREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oc3RhcnREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZVR5cGUgPSBlbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gQ29uc3RhbnRzLlBFUklPRCA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiB7XG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgc3RhcnREYXRlOiBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgIH0sXG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICAgIHZhbHVlOiAoZW5hYmxlZC5wZXJpb2QgJiYgZW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSlcbiAgICAgICAgPyBmb3JtYXRQZXJpb2RMYWJlbChzZWxlY3RlZFN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSA6ICcnLFxuICAgICAgbGFzdFZhbGlkUmFuZ2U6IHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH07XG4gIH1cblxuICBpbml0UmVsYXRpdmVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgcmVsYXRpdmVSYW5nZSwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRTdGFydERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihzdGFydERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKGVuZERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlXG4gICAgICAgID8gQ29uc3RhbnRzLlJFTEFUSVZFIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgZW5kRGF0ZTogc2VsZWN0ZWRFbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgICB2YWx1ZTogKGVuYWJsZWQucmVsYXRpdmUgJiYgc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlKVxuICAgICAgICAgID8gYCR7c2VsZWN0ZWRTdGFydERhdGUubGFiZWx9IC0gJHtzZWxlY3RlZEVuZERhdGUubGFiZWx9YCA6ICcnLFxuICAgICAgICBsYXN0VmFsaWRSYW5nZTogc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVJhbmdlVHlwZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFJhbmdlVHlwZSB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzW2BnZXQke3NlbGVjdGVkUmFuZ2VUeXBlLnJlcGxhY2UoL1xcdy8sIChjKSA9PiBjLnRvVXBwZXJDYXNlKCkpfVN0YXRlYF0oKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHN0YXRlO1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgb25DaGFuZ2UoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGFzdFZhbGlkUmFuZ2U6IHNlbGVjdGVkUmFuZ2VUeXBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFJhbmdlVHlwZTogbGFzdFZhbGlkUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZShldmVudCk7XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gZXZlbnQ7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0VmFsaWRSYW5nZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IHNob3dPdmVybGF5OiAhcHJldlN0YXRlLnNob3dPdmVybGF5IH0pKTtcblxuICBoYW5kbGVIaWRlID0gKGUpID0+IHtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlmIGlzIGRpcnR5IHNvbHV0aW9uIGFuZCBjL3Nob3VsZCBiZSBmaXhlZC5cbiAgICAgKiBSb290IGNhdXNlOiBkYXktcGlja2VyIGlzIHJlbmRlcmVkIHRvIHJvb3QgZWxlbWVudCwgbm90IGluc2lkZSBwb3BvdmVyIGVsZWVtbnQuXG4gICAgICogVGhlcmVmb3JlIGNsaWNrIGNvbWluZyBmb3JtIGRheS1waWNrZXIgYXJlIGNvbnNpZGVycyBhcyBvdXRzaWRlIGNsaWNrIG9mIHBvcG92ZXJcbiAgICAgKiBhbmQgcG9wb3ZlciB3b3VsZCBiZSBjbG9zZSB3aXRob3V0IGV2ZW50IHByZXZlbnREZWZhdWx0LlxuICAgICAqIE9uZSBzb2x1dGlvbiBpcyBwYXNzaW5nIGF0IGxlYXN0IHRyZWUgY2FsbGJhY2tzIGZvciByZWFjdC1kYXRldGltZTogb25XZWVrQ2xpY2ssXG4gICAgICogb25DYXB0aW9uQ2xpY2sgYW5kIGN1c3RvbSBvbkNsaWNrIGZvciBjdXN0b20gY2FwdGlvbiBvZiByZWFjdC1kYXRldGltZS5cbiAgICAgKi9cbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50Tm9kZVxuICAgICAgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWVcbiAgICAgICYmIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lLmluY2x1ZGVzXG4gICAgICAmJiAoXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lLmluY2x1ZGVzKCdEYXlQaWNrZXInKVxuICAgICAgICB8fCBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmNsdWRlcygnZGF0ZXJhbmdlLXNlbGVjdCcpXG4gICAgICApXG4gICAgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgdmFsdWUsIGxhc3RWYWxpZFJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHN0YXRlID0gIXZhbHVlICYmIGxhc3RWYWxpZFJhbmdlXG4gICAgICA/IHtcbiAgICAgICAgLi4udGhpc1tgZ2V0JHtsYXN0VmFsaWRSYW5nZS5yZXBsYWNlKC9cXHcvLCAoYykgPT4gYy50b1VwcGVyQ2FzZSgpKX1TdGF0ZWBdKCksXG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiBsYXN0VmFsaWRSYW5nZSxcbiAgICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH07XG5cbiAgcmVuZGVyQ2FyZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gc2hvd092ZXJsYXlcbiAgICAgID8gPEZhQ2FyZXRVcCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgOiA8RmFDYXJldERvd24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz47XG4gIH1cblxuICBoYW5kbGVJbnB1dFJlZiA9IChlbCkgPT4ge1xuICAgIGNvbnN0IHsgaW5wdXRSZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgIGlucHV0UmVmKGVsKTtcbiAgfVxuXG4gIGhhbmRsZU92ZXJsYXlUYXJnZXRSZWYgPSAoZWwpID0+IHtcbiAgICB0aGlzLm92ZXJsYXlUYXJnZXQgPSBlbDtcbiAgfVxuXG4gIGhhbmRsZU92ZXJsYXlUYXJnZXQgPSAoKSA9PiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLm92ZXJsYXlUYXJnZXQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGVuYWJsZWQsXG4gICAgICBpZCxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICBhYnNvbHV0ZVJhbmdlOiBhYnNvbHV0ZVJhbmdlUHJvcCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBwZXJpb2QsXG4gICAgICByZWxhdGl2ZVJhbmdlLFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgICBzaG93T3ZlcmxheSxcbiAgICAgIHZhbHVlLFxuICAgICAgYWJzb2x1dGVSYW5nZTogYWJzb2x1dGVSYW5nZVN0YXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICAuLi5hYnNvbHV0ZVJhbmdlUHJvcCxcbiAgICAgIC4uLmFic29sdXRlUmFuZ2VTdGF0ZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxEYXRlUmFuZ2VTZWN0aW9uXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHJlZj17dGhpcy5oYW5kbGVPdmVybGF5VGFyZ2V0UmVmfVxuICAgICAgICA+XG4gICAgICAgICAgPFJlYWRPbmx5SW5wdXQgc2hvd092ZXJsYXk9e3Nob3dPdmVybGF5fT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlucHV0UmVmPXt0aGlzLmhhbmRsZUlucHV0UmVmfVxuICAgICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgICAgcmVhZE9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJldCgpfVxuICAgICAgICAgIDwvUmVhZE9ubHlJbnB1dD5cbiAgICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgICAgc2hvdz17c2hvd092ZXJsYXl9XG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlSGlkZX1cbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICBjb250YWluZXI9e3RoaXN9XG4gICAgICAgICAgICByb290Q2xvc2VcbiAgICAgICAgICAgIHRhcmdldD17dGhpcy5oYW5kbGVPdmVybGF5VGFyZ2V0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXRlUmFuZ2VQb3BvdmVyXG4gICAgICAgICAgICAgIGFic29sdXRlUmFuZ2U9e2Fic29sdXRlUmFuZ2V9XG4gICAgICAgICAgICAgIGVuYWJsZWQ9e2VuYWJsZWR9XG4gICAgICAgICAgICAgIG9uUmFuZ2VUeXBlQ2hhbmdlPXt0aGlzLmhhbmRsZVJhbmdlVHlwZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwZXJpb2Q9e3BlcmlvZH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU9e3NlbGVjdGVkUmFuZ2VUeXBlfVxuICAgICAgICAgICAgICByZWxhdGl2ZVJhbmdlPXtyZWxhdGl2ZVJhbmdlfVxuICAgICAgICAgICAgICB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICA8L0RhdGVSYW5nZVNlY3Rpb24+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19