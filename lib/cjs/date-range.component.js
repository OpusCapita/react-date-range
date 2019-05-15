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

var ReadOnlyInput = _styledComponents.default.div(_templateObject(), _ocCmCommonLayouts.theme.contentBackgroundColor, function (props) {
  return props.showOverlay ? "" + _ocCmCommonLayouts.theme.colors.grey9 : "" + _ocCmCommonLayouts.theme.colors.grey3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsInByb3BzIiwic2hvd092ZXJsYXkiLCJjb2xvcnMiLCJncmV5OSIsImdyZXkzIiwiRGF0ZVJhbmdlIiwicHJldlByb3BzIiwiYWJzb2x1dGVSYW5nZSIsInJlbGF0aXZlUmFuZ2UiLCJwZXJpb2QiLCJzdGF0ZSIsImluaXRTdGF0ZSIsInNldFN0YXRlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwibW9tZW50IiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsInN0YXJ0T2YiLCJ2YWx1ZSIsImZvcm1hdCIsInRyYW5zbGF0aW9ucyIsIkNvbnN0YW50cyIsIkVORCIsIlNUQVJUIiwibGFiZWwiLCJpbml0QWJzb2x1dGVSYW5nZSIsImluaXRSZWxhdGl2ZVJhbmdlIiwiaW5pdFBlcmlvZCIsInNlbGVjdGVkUmFuZ2VUeXBlIiwiZW5hYmxlZCIsInNlbGVjdGVkU3RhcnREYXRlIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRFbmREYXRlIiwicmVsYXRpdmUiLCJldmVudCIsIm9uQ2hhbmdlIiwicmVwbGFjZSIsImMiLCJ0b1VwcGVyQ2FzZSIsImUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsaWNrIiwicmVuZGVyIiwiaWQiLCJpbnB1dFJlZiIsImlucHV0UHJvcHMiLCJ3aWR0aCIsIkRhdGVSYW5nZVNlY3Rpb24iLCJlbCIsImlucHV0IiwicmVuZGVyQ2FyZXQiLCJoYW5kbGVIaWRlIiwiaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyIsImFic29sdXRlIiwicGVyaW9kRGVmYXVsdFByb3BzIiwicmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyIsInRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQywwQkFBT0MsR0FBVixvQkFFS0MseUJBQU1DLHNCQUZYLEVBWU4sVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsV0FBTixRQUF1QkgseUJBQU1JLE1BQU4sQ0FBYUMsS0FBcEMsUUFBaURMLHlCQUFNSSxNQUFOLENBQWFFLEtBQW5FO0FBQUEsQ0FaQyxDQUFuQjs7SUFnQnFCQyxTOzs7OztBQTRDbkIscUJBQVlMLE1BQVosRUFBbUI7QUFBQTs7QUFDakIsNENBQU1BLE1BQU47O0FBRGlCLHlFQVNFLFVBQUNNLFNBQUQsRUFBZTtBQUNsQyxVQUFJQSxTQUFTLENBQUNDLGFBQVYsS0FBNEIsTUFBS1AsS0FBTCxDQUFXTyxhQUF2QyxJQUNBRCxTQUFTLENBQUNFLGFBQVYsS0FBNEIsTUFBS1IsS0FBTCxDQUFXUSxhQUR2QyxJQUVBRixTQUFTLENBQUNHLE1BQVYsS0FBcUIsTUFBS1QsS0FBTCxDQUFXUyxNQUZwQyxFQUU0QztBQUMxQyxZQUFNQyxLQUFLLEdBQUcsTUFBS0MsU0FBTCxDQUFlLE1BQUtYLEtBQXBCLENBQWQ7O0FBQ0EsWUFBSVUsS0FBSixFQUFXO0FBQ1QsZ0JBQUtFLFFBQUwsQ0FBY0YsS0FBZDtBQUNEO0FBQ0Y7QUFDRixLQWxCa0I7O0FBQUEsdUVBb0JBLFlBQU07QUFBQSxVQUNmSCxhQURlLEdBQ0csTUFBS0csS0FEUixDQUNmSCxhQURlOztBQUFB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aUJBQWlCLEVBQUV5QixpQkFOckI7QUFPRSxNQUFBLGFBQWEsRUFBRTFCLGFBUGpCO0FBUUUsTUFBQSxZQUFZLEVBQUVrQjtBQVJoQixNQVBGLENBZkYsQ0FERixDQURGO0FBc0NELEc7OztFQTNSb0NzQyxlQUFNQyxhOzs7O2dCQUF4QjVELFMsa0JBMkJHO0FBQ3BCRSxFQUFBQSxhQUFhLEVBQUUyRCxxQkFESztBQUVwQmxCLEVBQUFBLFNBQVMsRUFBRSxFQUZTO0FBR3BCYixFQUFBQSxPQUFPLEVBQUU7QUFDUGdDLElBQUFBLFFBQVEsRUFBRSxJQURIO0FBRVAxRCxJQUFBQSxNQUFNLEVBQUUsS0FGRDtBQUdQOEIsSUFBQUEsUUFBUSxFQUFFO0FBSEgsR0FIVztBQVFwQmdCLEVBQUFBLFVBQVUsRUFBRSxFQVJRO0FBU3BCRCxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQVRFO0FBVXBCYixFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQVZFO0FBV3BCaEMsRUFBQUEsTUFBTSxFQUFFMkQsc0JBWFk7QUFZcEI1RCxFQUFBQSxhQUFhLEVBQUU2RCxzQkFaSztBQWFwQjNDLEVBQUFBLFlBQVksRUFBRTRDLHNCQWJNO0FBY3BCZCxFQUFBQSxLQUFLLEVBQUU7QUFkYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgRmFDYXJldERvd24sIEZhQ2FyZXRVcCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VQcm9wVHlwZXMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvY29uc3RhbnRzJztcbmltcG9ydCBEYXRlUmFuZ2VQb3BvdmVyIGZyb20gJy4vcG9wb3Zlci9kYXRlLXJhbmdlLXBvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCBmb3JtYXRQZXJpb2RMYWJlbCBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZ2V0UmVsYXRpdmVPcHRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgcGVyaW9kRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyBwZXJpb2RTaGFwZSB9IGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvcHJvcC10eXBlcyc7XG5pbXBvcnQgcmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuaW1wb3J0IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB0cmFuc2xhdGlvbnNQcm9wVHlwZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvcHJvcC10eXBlcyc7XG5cbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgZGlzcGxheTogZmxleDtcbiAgc3ZnIHtcbiAgICBtYXJnaW46IDlweCA4cHggOXB4IC0yNHB4O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5zaG93T3ZlcmxheSA/IGAke3RoZW1lLmNvbG9ycy5ncmV5OX1gIDogYCR7dGhlbWUuY29sb3JzLmdyZXkzfWApfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhYnNvbHV0ZVJhbmdlOiBQcm9wVHlwZXMuc2hhcGUoYWJzb2x1dGVSYW5nZVByb3BUeXBlcyksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuYWJsZWQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhYnNvbHV0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBwZXJpb2Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgcmVsYXRpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIH0pLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwZXJpb2Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBlbmREYXRlOiBwZXJpb2RTaGFwZSxcbiAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHN0YXJ0RGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICB9KSxcbiAgICByZWxhdGl2ZVJhbmdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW5kRGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHN0YXJ0RGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICB9KSxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh0cmFuc2xhdGlvbnNQcm9wVHlwZXMpLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWJzb2x1dGVSYW5nZTogYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGVuYWJsZWQ6IHtcbiAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgcGVyaW9kOiBmYWxzZSxcbiAgICAgIHJlbGF0aXZlOiBmYWxzZSxcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmOiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgcGVyaW9kOiBwZXJpb2REZWZhdWx0UHJvcHMsXG4gICAgcmVsYXRpdmVSYW5nZTogcmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyxcbiAgICB0cmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyxcbiAgICB3aWR0aDogJzMwMHB4JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLmFic29sdXRlUmFuZ2UgIT09IHRoaXMucHJvcHMuYWJzb2x1dGVSYW5nZSB8fFxuICAgICAgICBwcmV2UHJvcHMucmVsYXRpdmVSYW5nZSAhPT0gdGhpcy5wcm9wcy5yZWxhdGl2ZVJhbmdlIHx8XG4gICAgICAgIHByZXZQcm9wcy5wZXJpb2QgIT09IHRoaXMucHJvcHMucGVyaW9kKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEFic29sdXRlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlO1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIGlmIChmcm9tLmlzVmFsaWQoKSAmJiB0by5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBnZXRQZXJpb2RTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBlcmlvZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcGVyaW9kIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBzdGFydERhdGUudmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuZERhdGU6IHsgLi4uZW5kRGF0ZSwgbW9tZW50OiBlbmREYXRlLm1vbWVudCB8fCBDb25zdGFudHMuRU5EIH0sXG4gICAgICAgIHN0YXJ0RGF0ZTogeyAuLi5zdGFydERhdGUudmFsdWUsIG1vbWVudDogc3RhcnREYXRlLnZhbHVlLm1vbWVudCB8fCBDb25zdGFudHMuU1RBUlQgfSxcbiAgICAgICAgdmFsdWU6IGZvcm1hdFBlcmlvZExhYmVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlbGF0aXZlUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XG4gICAgaWYgKGVuZERhdGUgJiYgc3RhcnREYXRlICYmIGVuZERhdGUudmFsdWUgJiYgc3RhcnREYXRlLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmREYXRlOiB7IC4uLmVuZERhdGUudmFsdWUsIG1vbWVudDogZW5kRGF0ZS52YWx1ZS5tb21lbnQgfHwgQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHsgLi4uc3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgfHwgQ29uc3RhbnRzLlNUQVJUIH0sXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWx9IC0gJHtlbmREYXRlLmxhYmVsfWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGluaXRTdGF0ZSA9IHByb3BzID0+IChcbiAgICB0aGlzLmluaXRBYnNvbHV0ZVJhbmdlKHByb3BzKSB8fCB0aGlzLmluaXRSZWxhdGl2ZVJhbmdlKHByb3BzKSB8fCB0aGlzLmluaXRQZXJpb2QocHJvcHMpXG4gICk7XG5cbiAgaW5pdEFic29sdXRlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2UgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlLCBkYXRlRm9ybWF0IH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXkgfSA9ICh0aGlzLnN0YXRlIHx8IHt9KS5hYnNvbHV0ZVJhbmdlIHx8IHt9O1xuXG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIHNob3dPdmVybGF5LFxuICAgICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogJ2Fic29sdXRlJyxcbiAgICAgICAgdmFsdWU6IChmcm9tLmlzVmFsaWQoKSAmJiB0by5pc1ZhbGlkKCkpID9cbiAgICAgICAgICBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gIDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGluaXRQZXJpb2QgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHBlcmlvZCwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcGVyaW9kIHx8IHt9O1xuICAgIGNvbnN0IHNlbGVjdGVkU3RhcnREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oc3RhcnREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHN0YXJ0RGF0ZTogc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IGVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUgPyAncGVyaW9kJyA6IHVuZGVmaW5lZCxcbiAgICAgIHZhbHVlOiAoZW5hYmxlZC5wZXJpb2QgJiYgZW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSkgP1xuICAgICAgICBmb3JtYXRQZXJpb2RMYWJlbChzZWxlY3RlZFN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSA6ICcnLFxuICAgIH07XG4gIH1cblxuICBpbml0UmVsYXRpdmVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgcmVsYXRpdmVSYW5nZSwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRTdGFydERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihzdGFydERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKGVuZERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIGVuZERhdGU6IHNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gJ3JlbGF0aXZlJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWU6IChlbmFibGVkLnJlbGF0aXZlICYmIHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSkgP1xuICAgICAgICAgIGAke3NlbGVjdGVkU3RhcnREYXRlLmxhYmVsfSAtICR7c2VsZWN0ZWRFbmREYXRlLmxhYmVsfWAgOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSBldmVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXNbYGdldCR7c2VsZWN0ZWRSYW5nZVR5cGUucmVwbGFjZSgvXFx3LywgYyA9PiBjLnRvVXBwZXJDYXNlKCkpfVN0YXRlYF0oKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHN0YXRlO1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgb25DaGFuZ2UoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKGV2ZW50KTtcblxuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBldmVudDtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogIXRoaXMuc3RhdGUuc2hvd092ZXJsYXkgfSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgZGlydHkgc29sdXRpb24gYW5kIGMvc2hvdWxkIGJlIGZpeGVkLlxuICAgKiBSb290IGNhdXNlOiBkYXktcGlja2VyIGlzIHJlbmRlcmVkIHRvIHJvb3QgZWxlbWVudCwgbm90IGluc2lkZSBwb3BvdmVyIGVsZWVtbnQuXG4gICAqIFRoZXJlZm9yZSBjbGljayBjb21pbmcgZm9ybSBkYXktcGlja2VyIGFyZSBjb25zaWRlcnMgYXMgb3V0c2lkZSBjbGljayBvZiBwb3BvdmVyXG4gICAqIGFuZCBwb3BvdmVyIHdvdWxkIGJlIGNsb3NlIHdpdGhvdXQgZXZlbnQgcHJldmVudERlZmF1bHQuXG4gICAqIE9uZSBzb2x1dGlvbiBpcyBwYXNzaW5nIGF0IGxlYXN0IHRyZWUgY2FsbGJhY2tzIGZvciByZWFjdC1kYXRldGltZTogb25XZWVrQ2xpY2ssXG4gICAqIG9uQ2FwdGlvbkNsaWNrIGFuZCBjdXN0b20gb25DbGljayBmb3IgY3VzdG9tIGNhcHRpb24gb2YgcmVhY3QtZGF0ZXRpbWUuXG4gICAqL1xuICBoYW5kbGVIaWRlID0gZSA9PiAoXG4gICAgZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50Tm9kZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmNsdWRlcygnRGF5UGlja2VyJykgP1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIDpcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogZmFsc2UgfSlcbiAgKTtcblxuICByZW5kZXJDYXJldCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiBzaG93T3ZlcmxheVxuICAgICAgPyA8RmFDYXJldFVwIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IC8+XG4gICAgICA6IDxGYUNhcmV0RG93biBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBlbmFibGVkLFxuICAgICAgaWQsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBwZXJpb2QsXG4gICAgICByZWxhdGl2ZVJhbmdlLFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgICBzaG93T3ZlcmxheSxcbiAgICAgIHZhbHVlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGFic29sdXRlUmFuZ2UgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLmFic29sdXRlUmFuZ2UsXG4gICAgICAuLi50aGlzLnN0YXRlLmFic29sdXRlUmFuZ2UsXG4gICAgfTtcblxuICAgIGNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6ICR7d2lkdGh9O1xuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPFJlYWRPbmx5SW5wdXQgc2hvd092ZXJsYXk9e3Nob3dPdmVybGF5fT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgICAgcmVhZE9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJldCgpfVxuICAgICAgICAgIDwvUmVhZE9ubHlJbnB1dD5cbiAgICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgICAgc2hvdz17c2hvd092ZXJsYXl9XG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlSGlkZX1cbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICBjb250YWluZXI9e3RoaXN9XG4gICAgICAgICAgICByb290Q2xvc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZVJhbmdlUG9wb3ZlclxuICAgICAgICAgICAgICBhYnNvbHV0ZVJhbmdlPXthYnNvbHV0ZVJhbmdlfVxuICAgICAgICAgICAgICBlbmFibGVkPXtlbmFibGVkfVxuICAgICAgICAgICAgICBvblJhbmdlVHlwZUNoYW5nZT17dGhpcy5oYW5kbGVSYW5nZVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGVyaW9kPXtwZXJpb2R9XG4gICAgICAgICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlPXtzZWxlY3RlZFJhbmdlVHlwZX1cbiAgICAgICAgICAgICAgcmVsYXRpdmVSYW5nZT17cmVsYXRpdmVSYW5nZX1cbiAgICAgICAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvT3ZlcmxheT5cbiAgICAgICAgPC9EYXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==