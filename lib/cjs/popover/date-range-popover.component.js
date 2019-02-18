'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid #ccc;\n  padding: ', ';\n  background-color: ', '\n  hr {\n    color: #CCC;\n    size: 0.1rem;\n    margin: 0;\n  }\n'], ['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid #ccc;\n  padding: ', ';\n  background-color: ', '\n  hr {\n    color: #CCC;\n    size: 0.1rem;\n    margin: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  input[type="radio"] {\n    height: 100%;\n    line-height: 100%;\n    margin: 0 0 0 -20px;\n  }\n'], ['\n  input[type="radio"] {\n    height: 100%;\n    line-height: 100%;\n    margin: 0 0 0 -20px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactBootstrap = require('react-bootstrap');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

var _rangeTypes = require('./range-types');

var _rangeTypes2 = _interopRequireDefault(_rangeTypes);

var _propTypes = require('./prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _defaultProps = require('./default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _translate = require('../translations/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PopoverSection = _styledComponents2.default.div(_templateObject, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.contentBackgroundColor);

var RadioButton = (0, _styledComponents2.default)(_reactBootstrap.Radio)(_templateObject2);

var DateRangePopover = (_temp = _class = function (_React$PureComponent) {
  _inherits(DateRangePopover, _React$PureComponent);

  function DateRangePopover(props) {
    _classCallCheck(this, DateRangePopover);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var enabled = props.enabled;

    var selectedRangeType = enabled[props.selectedRangeType] ? props.selectedRangeType : Object.keys(enabled).find(function (key) {
      return enabled[key];
    });
    _this.state = {
      selectedRangeType: selectedRangeType
    };
    return _this;
  }

  return DateRangePopover;
}(_react2.default.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChange = function (e) {
    var selectedRangeType = e.target.value;
    var onRangeTypeChange = _this2.props.onRangeTypeChange;

    _this2.setState({ selectedRangeType: selectedRangeType });
    onRangeTypeChange({ selectedRangeType: selectedRangeType });
  };

  this.renderRangeComponent = function () {
    var _props = _this2.props,
        onChange = _props.onChange,
        translations = _props.translations;
    var selectedRangeType = _this2.state.selectedRangeType;

    var selectedRange = _rangeTypes2.default[selectedRangeType];
    return _react2.default.createElement(selectedRange.component, _extends({}, _this2.props[selectedRange.propsKey], {
      onChange: onChange,
      translations: translations
    }));
  };

  this.renderOptions = function () {
    var _props2 = _this2.props,
        enabled = _props2.enabled,
        translations = _props2.translations;
    var selectedRangeType = _this2.state.selectedRangeType;

    var enabledOptions = Object.keys(_rangeTypes2.default).filter(function (key) {
      return enabled[key];
    });
    return enabledOptions.length > 1 ? enabledOptions.map(function (type) {
      return _react2.default.createElement(
        RadioButton,
        {
          key: type,
          name: 'rangeType',
          value: type,
          onChange: _this2.handleChange,
          checked: selectedRangeType === type,
          inline: true
        },
        (0, _translate2.default)(translations, type)
      );
    }) : undefined;
  };

  this.renderRangeOptions = function () {
    var options = _this2.renderOptions();
    return options ? _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        options
      ),
      _react2.default.createElement('hr', null)
    ) : undefined;
  };

  this.render = function () {
    return _react2.default.createElement(
      PopoverSection,
      null,
      _this2.renderRangeOptions(),
      _this2.renderRangeComponent()
    );
  };
}, _temp);
exports.default = DateRangePopover;


DateRangePopover.defaultProps = _defaultProps2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlBvcG92ZXJTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJSYWRpb0J1dHRvbiIsIlJhZGlvIiwiRGF0ZVJhbmdlUG9wb3ZlciIsInByb3BzIiwiZW5hYmxlZCIsInNlbGVjdGVkUmFuZ2VUeXBlIiwiT2JqZWN0Iiwia2V5cyIsImZpbmQiLCJrZXkiLCJzdGF0ZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uUmFuZ2VUeXBlQ2hhbmdlIiwic2V0U3RhdGUiLCJyZW5kZXJSYW5nZUNvbXBvbmVudCIsIm9uQ2hhbmdlIiwidHJhbnNsYXRpb25zIiwic2VsZWN0ZWRSYW5nZSIsIlJhbmdlVHlwZXMiLCJwcm9wc0tleSIsInJlbmRlck9wdGlvbnMiLCJlbmFibGVkT3B0aW9ucyIsImZpbHRlciIsImxlbmd0aCIsIm1hcCIsInR5cGUiLCJ1bmRlZmluZWQiLCJyZW5kZXJSYW5nZU9wdGlvbnMiLCJvcHRpb25zIiwicmVuZGVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQywyQkFBT0MsR0FBeEIsa0JBS09DLHlCQUFNQyxXQUxiLEVBTWdCRCx5QkFBTUUsc0JBTnRCLENBQU47O0FBY0EsSUFBTUMsY0FBYyxnQ0FBT0MscUJBQVAsQ0FBZCxrQkFBTjs7SUFRcUJDLGdCOzs7QUFDbkIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBQUEsUUFFVEMsT0FGUyxHQUVHRCxLQUZILENBRVRDLE9BRlM7O0FBR2pCLFFBQU1DLG9CQUFvQkQsUUFBUUQsTUFBTUUsaUJBQWQsSUFDdEJGLE1BQU1FLGlCQURnQixHQUV0QkMsT0FBT0MsSUFBUCxDQUFZSCxPQUFaLEVBQXFCSSxJQUFyQixDQUEwQjtBQUFBLGFBQU9KLFFBQVFLLEdBQVIsQ0FBUDtBQUFBLEtBQTFCLENBRko7QUFHQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEw7QUFEVyxLQUFiO0FBTmlCO0FBU2xCOzs7RUFWMkNNLGdCQUFNQyxhOzs7T0FZbERDLFksR0FBZSxVQUFDQyxDQUFELEVBQU87QUFDcEIsUUFBTVQsb0JBQW9CUyxFQUFFQyxNQUFGLENBQVNDLEtBQW5DO0FBRG9CLFFBRVpDLGlCQUZZLEdBRVUsT0FBS2QsS0FGZixDQUVaYyxpQkFGWTs7QUFHcEIsV0FBS0MsUUFBTCxDQUFjLEVBQUViLG9DQUFGLEVBQWQ7QUFDQVksc0JBQWtCLEVBQUVaLG9DQUFGLEVBQWxCO0FBQ0QsRzs7T0FFRGMsb0IsR0FBdUIsWUFBTTtBQUFBLGlCQUNRLE9BQUtoQixLQURiO0FBQUEsUUFDbkJpQixRQURtQixVQUNuQkEsUUFEbUI7QUFBQSxRQUNUQyxZQURTLFVBQ1RBLFlBRFM7QUFBQSxRQUVuQmhCLGlCQUZtQixHQUVHLE9BQUtLLEtBRlIsQ0FFbkJMLGlCQUZtQjs7QUFHM0IsUUFBTWlCLGdCQUFnQkMscUJBQVdsQixpQkFBWCxDQUF0QjtBQUNBLFdBQ0UsOEJBQUMsYUFBRCxDQUFlLFNBQWYsZUFDTSxPQUFLRixLQUFMLENBQVdtQixjQUFjRSxRQUF6QixDQUROO0FBRUUsZ0JBQVVKLFFBRlo7QUFHRSxvQkFBY0M7QUFIaEIsT0FERjtBQU9ELEc7O09BRURJLGEsR0FBZ0IsWUFBTTtBQUFBLGtCQUNjLE9BQUt0QixLQURuQjtBQUFBLFFBQ1pDLE9BRFksV0FDWkEsT0FEWTtBQUFBLFFBQ0hpQixZQURHLFdBQ0hBLFlBREc7QUFBQSxRQUVaaEIsaUJBRlksR0FFVSxPQUFLSyxLQUZmLENBRVpMLGlCQUZZOztBQUdwQixRQUFNcUIsaUJBQWlCcEIsT0FBT0MsSUFBUCxDQUFZZ0Isb0JBQVosRUFBd0JJLE1BQXhCLENBQStCO0FBQUEsYUFBT3ZCLFFBQVFLLEdBQVIsQ0FBUDtBQUFBLEtBQS9CLENBQXZCO0FBQ0EsV0FBT2lCLGVBQWVFLE1BQWYsR0FBd0IsQ0FBeEIsR0FDSEYsZUFBZUcsR0FBZixDQUFtQjtBQUFBLGFBQ25CO0FBQUMsbUJBQUQ7QUFBQTtBQUNFLGVBQUtDLElBRFA7QUFFRSxnQkFBSyxXQUZQO0FBR0UsaUJBQU9BLElBSFQ7QUFJRSxvQkFBVSxPQUFLakIsWUFKakI7QUFLRSxtQkFBU1Isc0JBQXNCeUIsSUFMakM7QUFNRTtBQU5GO0FBUUcsaUNBQVVULFlBQVYsRUFBd0JTLElBQXhCO0FBUkgsT0FEbUI7QUFBQSxLQUFuQixDQURHLEdBWUhDLFNBWko7QUFhRCxHOztPQUVEQyxrQixHQUFxQixZQUFNO0FBQ3pCLFFBQU1DLFVBQVUsT0FBS1IsYUFBTCxFQUFoQjtBQUNBLFdBQ0VRLFVBQ0U7QUFBQyxxQkFBRCxDQUFPLFFBQVA7QUFBQTtBQUNFO0FBQUMsaUNBQUQ7QUFBQTtBQUNHQTtBQURILE9BREY7QUFJRTtBQUpGLEtBREYsR0FPSUYsU0FSTjtBQVVELEc7O09BRURHLE0sR0FBUztBQUFBLFdBQ1A7QUFBQyxvQkFBRDtBQUFBO0FBQ0csYUFBS0Ysa0JBQUwsRUFESDtBQUVHLGFBQUtiLG9CQUFMO0FBRkgsS0FETztBQUFBLEc7O2tCQWpFVWpCLGdCOzs7QUEyRXJCQSxpQkFBaUJpQyxZQUFqQixHQUFnQ0Esc0JBQWhDIiwiZmlsZSI6ImRhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIFJhZGlvIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBSYW5nZVR5cGVzIGZyb20gJy4vcmFuZ2UtdHlwZXMnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgUG9wb3ZlclNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9XG4gIGhyIHtcbiAgICBjb2xvcjogI0NDQztcbiAgICBzaXplOiAwLjFyZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBSYWRpb0J1dHRvbiA9IHN0eWxlZChSYWRpbylgXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDAgLTIwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZVBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBlbmFibGVkIH0gPSBwcm9wcztcbiAgICBjb25zdCBzZWxlY3RlZFJhbmdlVHlwZSA9IGVuYWJsZWRbcHJvcHMuc2VsZWN0ZWRSYW5nZVR5cGVdXG4gICAgICA/IHByb3BzLnNlbGVjdGVkUmFuZ2VUeXBlXG4gICAgICA6IE9iamVjdC5rZXlzKGVuYWJsZWQpLmZpbmQoa2V5ID0+IGVuYWJsZWRba2V5XSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBvblJhbmdlVHlwZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSk7XG4gICAgb25SYW5nZVR5cGVDaGFuZ2UoeyBzZWxlY3RlZFJhbmdlVHlwZSB9KTtcbiAgfVxuXG4gIHJlbmRlclJhbmdlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2UgPSBSYW5nZVR5cGVzW3NlbGVjdGVkUmFuZ2VUeXBlXTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdGVkUmFuZ2UuY29tcG9uZW50XG4gICAgICAgIHsuLi50aGlzLnByb3BzW3NlbGVjdGVkUmFuZ2UucHJvcHNLZXldfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyT3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGVuYWJsZWRPcHRpb25zID0gT2JqZWN0LmtleXMoUmFuZ2VUeXBlcykuZmlsdGVyKGtleSA9PiBlbmFibGVkW2tleV0pO1xuICAgIHJldHVybiBlbmFibGVkT3B0aW9ucy5sZW5ndGggPiAxXG4gICAgICA/IGVuYWJsZWRPcHRpb25zLm1hcCh0eXBlID0+IChcbiAgICAgICAgPFJhZGlvQnV0dG9uXG4gICAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICAgIG5hbWU9XCJyYW5nZVR5cGVcIlxuICAgICAgICAgIHZhbHVlPXt0eXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFJhbmdlVHlwZSA9PT0gdHlwZX1cbiAgICAgICAgICBpbmxpbmVcbiAgICAgICAgPlxuICAgICAgICAgIHt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCB0eXBlKX1cbiAgICAgICAgPC9SYWRpb0J1dHRvbj4pKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgcmVuZGVyUmFuZ2VPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnJlbmRlck9wdGlvbnMoKTtcbiAgICByZXR1cm4gKFxuICAgICAgb3B0aW9ucyA/XG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlciA9ICgpID0+IChcbiAgICA8UG9wb3ZlclNlY3Rpb24+XG4gICAgICB7dGhpcy5yZW5kZXJSYW5nZU9wdGlvbnMoKX1cbiAgICAgIHt0aGlzLnJlbmRlclJhbmdlQ29tcG9uZW50KCl9XG4gICAgPC9Qb3BvdmVyU2VjdGlvbj5cbiAgKTtcbn1cblxuRGF0ZVJhbmdlUG9wb3Zlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkRhdGVSYW5nZVBvcG92ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19