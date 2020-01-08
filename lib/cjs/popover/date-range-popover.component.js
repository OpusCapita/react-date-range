"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactBootstrap = require("react-bootstrap");

var _ocCmCommonLayouts = require("@opuscapita/oc-cm-common-layouts");

var _rangeTypes = _interopRequireDefault(require("./range-types"));

var _propTypes = _interopRequireDefault(require("./prop-types"));

var _defaultProps = _interopRequireDefault(require("./default-props"));

var _translate = _interopRequireDefault(require("../translations/translate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  input[type=\"radio\"] {\n    height: 100%;\n    line-height: 100%;\n    margin: 0 0 0 -20px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid ", ";\n  padding: ", ";\n  background-color: ", ";\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  z-index: 1;\n  hr {\n    color: ", ";\n    size: 0.1rem;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var PopoverSection = _styledComponents["default"].div(_templateObject(), _ocCmCommonLayouts.theme.colors.grey3, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.contentBackgroundColor, _ocCmCommonLayouts.theme.colors.grey3);

var RadioButton = (0, _styledComponents["default"])(_reactBootstrap.Radio)(_templateObject2());

var DateRangePopover =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DateRangePopover, _React$PureComponent);

  function DateRangePopover(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var selectedRangeType = e.target.value;
      var onRangeTypeChange = _this.props.onRangeTypeChange;

      _this.setState({
        selectedRangeType: selectedRangeType
      });

      onRangeTypeChange({
        selectedRangeType: selectedRangeType
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderRangeComponent", function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          translations = _this$props.translations;
      var selectedRangeType = _this.state.selectedRangeType;
      var selectedRange = _rangeTypes["default"][selectedRangeType];
      return _react["default"].createElement(selectedRange.component, _extends({}, _this.props[selectedRange.propsKey], {
        // eslint-disable-line
        onChange: onChange,
        translations: translations
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderOptions", function () {
      var _this$props2 = _this.props,
          enabled = _this$props2.enabled,
          translations = _this$props2.translations;
      var selectedRangeType = _this.state.selectedRangeType;
      var enabledOptions = Object.keys(_rangeTypes["default"]).filter(function (key) {
        return enabled[key];
      });
      return enabledOptions.length > 1 ? enabledOptions.map(function (type) {
        return _react["default"].createElement(RadioButton, {
          key: type,
          name: "rangeType",
          value: type,
          onChange: _this.handleChange,
          checked: selectedRangeType === type,
          inline: true
        }, (0, _translate["default"])(translations, type));
      }) : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "renderRangeOptions", function () {
      var options = _this.renderOptions();

      return options ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactBootstrap.FormGroup, null, options), _react["default"].createElement("hr", null)) : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return _react["default"].createElement(PopoverSection, null, _this.renderRangeOptions(), _this.renderRangeComponent());
    });

    var _enabled = props.enabled;

    var _selectedRangeType = _enabled[props.selectedRangeType] ? props.selectedRangeType : Object.keys(_enabled).find(function (key) {
      return _enabled[key];
    });

    _this.state = {
      selectedRangeType: _selectedRangeType
    };
    return _this;
  }

  return DateRangePopover;
}(_react["default"].PureComponent);

exports["default"] = DateRangePopover;
DateRangePopover.defaultProps = _defaultProps["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlBvcG92ZXJTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5MyIsImd1dHRlcldpZHRoIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIlJhZGlvQnV0dG9uIiwiUmFkaW8iLCJEYXRlUmFuZ2VQb3BvdmVyIiwicHJvcHMiLCJlIiwic2VsZWN0ZWRSYW5nZVR5cGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uUmFuZ2VUeXBlQ2hhbmdlIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsInRyYW5zbGF0aW9ucyIsInN0YXRlIiwic2VsZWN0ZWRSYW5nZSIsIlJhbmdlVHlwZXMiLCJwcm9wc0tleSIsImVuYWJsZWQiLCJlbmFibGVkT3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJsZW5ndGgiLCJtYXAiLCJ0eXBlIiwiaGFuZGxlQ2hhbmdlIiwidW5kZWZpbmVkIiwib3B0aW9ucyIsInJlbmRlck9wdGlvbnMiLCJyZW5kZXJSYW5nZU9wdGlvbnMiLCJyZW5kZXJSYW5nZUNvbXBvbmVudCIsImZpbmQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUlLQyx5QkFBTUMsTUFBTixDQUFhQyxLQUpsQixFQUtQRix5QkFBTUcsV0FMQyxFQU1FSCx5QkFBTUksc0JBTlIsRUFVUEoseUJBQU1DLE1BQU4sQ0FBYUMsS0FWTixDQUFwQjs7QUFnQkEsSUFBTUcsV0FBVyxHQUFHLGtDQUFPQyxxQkFBUCxDQUFILG9CQUFqQjs7SUFRcUJDLGdCOzs7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QWlCLEVBQWpCQTtBQURXLEtBQWI7QUFOaUI7QUFTbEI7OztFQVYyQzJCLGtCQUFNQyxhOzs7QUE4RXBEL0IsZ0JBQWdCLENBQUNnQyxZQUFqQixHQUFnQ0Esd0JBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBSYWRpbyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgUmFuZ2VUeXBlcyBmcm9tICcuL3JhbmdlLXR5cGVzJztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFBvcG92ZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9O1xuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xuICB6LWluZGV4OiAxO1xuICBociB7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgICBzaXplOiAwLjFyZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBSYWRpb0J1dHRvbiA9IHN0eWxlZChSYWRpbylgXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDAgLTIwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZVBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBlbmFibGVkIH0gPSBwcm9wcztcbiAgICBjb25zdCBzZWxlY3RlZFJhbmdlVHlwZSA9IGVuYWJsZWRbcHJvcHMuc2VsZWN0ZWRSYW5nZVR5cGVdXG4gICAgICA/IHByb3BzLnNlbGVjdGVkUmFuZ2VUeXBlXG4gICAgICA6IE9iamVjdC5rZXlzKGVuYWJsZWQpLmZpbmQoKGtleSkgPT4gZW5hYmxlZFtrZXldKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZVR5cGUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCB7IG9uUmFuZ2VUeXBlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFJhbmdlVHlwZSB9KTtcbiAgICBvblJhbmdlVHlwZUNoYW5nZSh7IHNlbGVjdGVkUmFuZ2VUeXBlIH0pO1xuICB9XG5cbiAgcmVuZGVyUmFuZ2VDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRSYW5nZSA9IFJhbmdlVHlwZXNbc2VsZWN0ZWRSYW5nZVR5cGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0ZWRSYW5nZS5jb21wb25lbnRcbiAgICAgICAgey4uLnRoaXMucHJvcHNbc2VsZWN0ZWRSYW5nZS5wcm9wc0tleV19IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlbmFibGVkLCB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFJhbmdlVHlwZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBlbmFibGVkT3B0aW9ucyA9IE9iamVjdC5rZXlzKFJhbmdlVHlwZXMpLmZpbHRlcigoa2V5KSA9PiBlbmFibGVkW2tleV0pO1xuICAgIHJldHVybiBlbmFibGVkT3B0aW9ucy5sZW5ndGggPiAxXG4gICAgICA/IGVuYWJsZWRPcHRpb25zLm1hcCgodHlwZSkgPT4gKFxuICAgICAgICA8UmFkaW9CdXR0b25cbiAgICAgICAgICBrZXk9e3R5cGV9XG4gICAgICAgICAgbmFtZT1cInJhbmdlVHlwZVwiXG4gICAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkUmFuZ2VUeXBlID09PSB0eXBlfVxuICAgICAgICAgIGlubGluZVxuICAgICAgICA+XG4gICAgICAgICAge3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsIHR5cGUpfVxuICAgICAgICA8L1JhZGlvQnV0dG9uPlxuICAgICAgKSlcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJlbmRlclJhbmdlT3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5yZW5kZXJPcHRpb25zKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIG9wdGlvbnNcbiAgICAgICAgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIHtvcHRpb25zfVxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgICk7XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPFBvcG92ZXJTZWN0aW9uPlxuICAgICAge3RoaXMucmVuZGVyUmFuZ2VPcHRpb25zKCl9XG4gICAgICB7dGhpcy5yZW5kZXJSYW5nZUNvbXBvbmVudCgpfVxuICAgIDwvUG9wb3ZlclNlY3Rpb24+XG4gICk7XG59XG5cbkRhdGVSYW5nZVBvcG92ZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5EYXRlUmFuZ2VQb3BvdmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==