"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactBootstrap = require("react-bootstrap");

var _ocCmCommonLayouts = require("@opuscapita/oc-cm-common-layouts");

var _rangeTypes = _interopRequireDefault(require("./range-types"));

var _propTypes = _interopRequireDefault(require("./prop-types"));

var _defaultProps = _interopRequireDefault(require("./default-props"));

var _translate = _interopRequireDefault(require("../translations/translate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid ", ";\n  padding: ", ";\n  background-color: ", ";\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  hr {\n    color: ", ";\n    size: 0.1rem;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var PopoverSection = _styledComponents.default.div(_templateObject(), _ocCmCommonLayouts.theme.colors.grey3, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.contentBackgroundColor, _ocCmCommonLayouts.theme.colors.grey3);

var RadioButton = (0, _styledComponents.default)(_reactBootstrap.Radio)(_templateObject2());

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
      var selectedRange = _rangeTypes.default[selectedRangeType];
      return _react.default.createElement(selectedRange.component, _extends({}, _this.props[selectedRange.propsKey], {
        onChange: onChange,
        translations: translations
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderOptions", function () {
      var _this$props2 = _this.props,
          enabled = _this$props2.enabled,
          translations = _this$props2.translations;
      var selectedRangeType = _this.state.selectedRangeType;
      var enabledOptions = Object.keys(_rangeTypes.default).filter(function (key) {
        return enabled[key];
      });
      return enabledOptions.length > 1 ? enabledOptions.map(function (type) {
        return _react.default.createElement(RadioButton, {
          key: type,
          name: "rangeType",
          value: type,
          onChange: _this.handleChange,
          checked: selectedRangeType === type,
          inline: true
        }, (0, _translate.default)(translations, type));
      }) : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "renderRangeOptions", function () {
      var options = _this.renderOptions();

      return options ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactBootstrap.FormGroup, null, options), _react.default.createElement("hr", null)) : undefined;
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      return _react.default.createElement(PopoverSection, null, _this.renderRangeOptions(), _this.renderRangeComponent());
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
}(_react.default.PureComponent);

exports.default = DateRangePopover;
DateRangePopover.defaultProps = _defaultProps.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlBvcG92ZXJTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5MyIsImd1dHRlcldpZHRoIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIlJhZGlvQnV0dG9uIiwiUmFkaW8iLCJEYXRlUmFuZ2VQb3BvdmVyIiwicHJvcHMiLCJlIiwic2VsZWN0ZWRSYW5nZVR5cGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uUmFuZ2VUeXBlQ2hhbmdlIiwic2V0U3RhdGUiLCJvbkNoYW5nZSIsInRyYW5zbGF0aW9ucyIsInN0YXRlIiwic2VsZWN0ZWRSYW5nZSIsIlJhbmdlVHlwZXMiLCJwcm9wc0tleSIsImVuYWJsZWQiLCJlbmFibGVkT3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJsZW5ndGgiLCJtYXAiLCJ0eXBlIiwiaGFuZGxlQ2hhbmdlIiwidW5kZWZpbmVkIiwib3B0aW9ucyIsInJlbmRlck9wdGlvbnMiLCJyZW5kZXJSYW5nZU9wdGlvbnMiLCJyZW5kZXJSYW5nZUNvbXBvbmVudCIsImZpbmQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLDBCQUFPQyxHQUFWLG9CQUlLQyx5QkFBTUMsTUFBTixDQUFhQyxLQUpsQixFQUtQRix5QkFBTUcsV0FMQyxFQU1FSCx5QkFBTUksc0JBTlIsRUFTUEoseUJBQU1DLE1BQU4sQ0FBYUMsS0FUTixDQUFwQjs7QUFlQSxJQUFNRyxXQUFXLEdBQUcsK0JBQU9DLHFCQUFQLENBQUgsb0JBQWpCOztJQVFxQkMsZ0I7Ozs7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LE1BQUFBLGlCQUFpQixFQUFqQkE7QUFEVyxLQUFiO0FBTmlCO0FBU2xCOzs7RUFWMkMyQixlQUFNQyxhOzs7QUEyRXBEL0IsZ0JBQWdCLENBQUNnQyxZQUFqQixHQUFnQ0EscUJBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBSYWRpbyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgUmFuZ2VUeXBlcyBmcm9tICcuL3JhbmdlLXR5cGVzJztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFBvcG92ZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5M307XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9O1xuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xuICBociB7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkzfTtcbiAgICBzaXplOiAwLjFyZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBSYWRpb0J1dHRvbiA9IHN0eWxlZChSYWRpbylgXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDAgLTIwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZVBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBlbmFibGVkIH0gPSBwcm9wcztcbiAgICBjb25zdCBzZWxlY3RlZFJhbmdlVHlwZSA9IGVuYWJsZWRbcHJvcHMuc2VsZWN0ZWRSYW5nZVR5cGVdXG4gICAgICA/IHByb3BzLnNlbGVjdGVkUmFuZ2VUeXBlXG4gICAgICA6IE9iamVjdC5rZXlzKGVuYWJsZWQpLmZpbmQoa2V5ID0+IGVuYWJsZWRba2V5XSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBvblJhbmdlVHlwZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSk7XG4gICAgb25SYW5nZVR5cGVDaGFuZ2UoeyBzZWxlY3RlZFJhbmdlVHlwZSB9KTtcbiAgfVxuXG4gIHJlbmRlclJhbmdlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2UgPSBSYW5nZVR5cGVzW3NlbGVjdGVkUmFuZ2VUeXBlXTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdGVkUmFuZ2UuY29tcG9uZW50XG4gICAgICAgIHsuLi50aGlzLnByb3BzW3NlbGVjdGVkUmFuZ2UucHJvcHNLZXldfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyT3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGVuYWJsZWRPcHRpb25zID0gT2JqZWN0LmtleXMoUmFuZ2VUeXBlcykuZmlsdGVyKGtleSA9PiBlbmFibGVkW2tleV0pO1xuICAgIHJldHVybiBlbmFibGVkT3B0aW9ucy5sZW5ndGggPiAxXG4gICAgICA/IGVuYWJsZWRPcHRpb25zLm1hcCh0eXBlID0+IChcbiAgICAgICAgPFJhZGlvQnV0dG9uXG4gICAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICAgIG5hbWU9XCJyYW5nZVR5cGVcIlxuICAgICAgICAgIHZhbHVlPXt0eXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFJhbmdlVHlwZSA9PT0gdHlwZX1cbiAgICAgICAgICBpbmxpbmVcbiAgICAgICAgPlxuICAgICAgICAgIHt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCB0eXBlKX1cbiAgICAgICAgPC9SYWRpb0J1dHRvbj4pKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgcmVuZGVyUmFuZ2VPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnJlbmRlck9wdGlvbnMoKTtcbiAgICByZXR1cm4gKFxuICAgICAgb3B0aW9ucyA/XG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlciA9ICgpID0+IChcbiAgICA8UG9wb3ZlclNlY3Rpb24+XG4gICAgICB7dGhpcy5yZW5kZXJSYW5nZU9wdGlvbnMoKX1cbiAgICAgIHt0aGlzLnJlbmRlclJhbmdlQ29tcG9uZW50KCl9XG4gICAgPC9Qb3BvdmVyU2VjdGlvbj5cbiAgKTtcbn1cblxuRGF0ZVJhbmdlUG9wb3Zlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkRhdGVSYW5nZVBvcG92ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19