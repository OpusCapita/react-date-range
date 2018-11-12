'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid #ccc;\n  padding: ', ';\n  background-color: ', '\n  hr {\n    color: #CCC;\n    size: 0.1rem;\n    margin: 0;\n  }\n'], ['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid #ccc;\n  padding: ', ';\n  background-color: ', '\n  hr {\n    color: #CCC;\n    size: 0.1rem;\n    margin: 0;\n  }\n']);

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
        _reactBootstrap.Radio,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlBvcG92ZXJTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJEYXRlUmFuZ2VQb3BvdmVyIiwicHJvcHMiLCJlbmFibGVkIiwic2VsZWN0ZWRSYW5nZVR5cGUiLCJPYmplY3QiLCJrZXlzIiwiZmluZCIsImtleSIsInN0YXRlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25SYW5nZVR5cGVDaGFuZ2UiLCJzZXRTdGF0ZSIsInJlbmRlclJhbmdlQ29tcG9uZW50Iiwib25DaGFuZ2UiLCJ0cmFuc2xhdGlvbnMiLCJzZWxlY3RlZFJhbmdlIiwiUmFuZ2VUeXBlcyIsInByb3BzS2V5IiwicmVuZGVyT3B0aW9ucyIsImVuYWJsZWRPcHRpb25zIiwiZmlsdGVyIiwibGVuZ3RoIiwibWFwIiwidHlwZSIsInVuZGVmaW5lZCIsInJlbmRlclJhbmdlT3B0aW9ucyIsIm9wdGlvbnMiLCJyZW5kZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsMkJBQU9DLEdBQXhCLGtCQUtPQyx5QkFBTUMsV0FMYixFQU1nQkQseUJBQU1FLHNCQU50QixDQUFOOztJQWNxQkMsZ0I7OztBQUNuQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURpQjs7QUFBQTs7QUFBQSxRQUVUQyxPQUZTLEdBRUdELEtBRkgsQ0FFVEMsT0FGUzs7QUFHakIsUUFBTUMsb0JBQW9CRCxRQUFRRCxNQUFNRSxpQkFBZCxJQUN0QkYsTUFBTUUsaUJBRGdCLEdBRXRCQyxPQUFPQyxJQUFQLENBQVlILE9BQVosRUFBcUJJLElBQXJCLENBQTBCO0FBQUEsYUFBT0osUUFBUUssR0FBUixDQUFQO0FBQUEsS0FBMUIsQ0FGSjtBQUdBLFVBQUtDLEtBQUwsR0FBYTtBQUNYTDtBQURXLEtBQWI7QUFOaUI7QUFTbEI7OztFQVYyQ00sZ0JBQU1DLGE7OztPQVlsREMsWSxHQUFlLFVBQUNDLENBQUQsRUFBTztBQUNwQixRQUFNVCxvQkFBb0JTLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbkM7QUFEb0IsUUFFWkMsaUJBRlksR0FFVSxPQUFLZCxLQUZmLENBRVpjLGlCQUZZOztBQUdwQixXQUFLQyxRQUFMLENBQWMsRUFBRWIsb0NBQUYsRUFBZDtBQUNBWSxzQkFBa0IsRUFBRVosb0NBQUYsRUFBbEI7QUFDRCxHOztPQUVEYyxvQixHQUF1QixZQUFNO0FBQUEsaUJBQ1EsT0FBS2hCLEtBRGI7QUFBQSxRQUNuQmlCLFFBRG1CLFVBQ25CQSxRQURtQjtBQUFBLFFBQ1RDLFlBRFMsVUFDVEEsWUFEUztBQUFBLFFBRW5CaEIsaUJBRm1CLEdBRUcsT0FBS0ssS0FGUixDQUVuQkwsaUJBRm1COztBQUczQixRQUFNaUIsZ0JBQWdCQyxxQkFBV2xCLGlCQUFYLENBQXRCO0FBQ0EsV0FDRSw4QkFBQyxhQUFELENBQWUsU0FBZixlQUNNLE9BQUtGLEtBQUwsQ0FBV21CLGNBQWNFLFFBQXpCLENBRE47QUFFRSxnQkFBVUosUUFGWjtBQUdFLG9CQUFjQztBQUhoQixPQURGO0FBT0QsRzs7T0FFREksYSxHQUFnQixZQUFNO0FBQUEsa0JBQ2MsT0FBS3RCLEtBRG5CO0FBQUEsUUFDWkMsT0FEWSxXQUNaQSxPQURZO0FBQUEsUUFDSGlCLFlBREcsV0FDSEEsWUFERztBQUFBLFFBRVpoQixpQkFGWSxHQUVVLE9BQUtLLEtBRmYsQ0FFWkwsaUJBRlk7O0FBR3BCLFFBQU1xQixpQkFBaUJwQixPQUFPQyxJQUFQLENBQVlnQixvQkFBWixFQUF3QkksTUFBeEIsQ0FBK0I7QUFBQSxhQUFPdkIsUUFBUUssR0FBUixDQUFQO0FBQUEsS0FBL0IsQ0FBdkI7QUFDQSxXQUFPaUIsZUFBZUUsTUFBZixHQUF3QixDQUF4QixHQUNIRixlQUFlRyxHQUFmLENBQW1CO0FBQUEsYUFDbkI7QUFBQyw2QkFBRDtBQUFBO0FBQ0UsZUFBS0MsSUFEUDtBQUVFLGdCQUFLLFdBRlA7QUFHRSxpQkFBT0EsSUFIVDtBQUlFLG9CQUFVLE9BQUtqQixZQUpqQjtBQUtFLG1CQUFTUixzQkFBc0J5QixJQUxqQztBQU1FO0FBTkY7QUFRRyxpQ0FBVVQsWUFBVixFQUF3QlMsSUFBeEI7QUFSSCxPQURtQjtBQUFBLEtBQW5CLENBREcsR0FZSEMsU0FaSjtBQWFELEc7O09BRURDLGtCLEdBQXFCLFlBQU07QUFDekIsUUFBTUMsVUFBVSxPQUFLUixhQUFMLEVBQWhCO0FBQ0EsV0FDRVEsVUFDRTtBQUFDLHFCQUFELENBQU8sUUFBUDtBQUFBO0FBQ0U7QUFBQyxpQ0FBRDtBQUFBO0FBQ0dBO0FBREgsT0FERjtBQUlFO0FBSkYsS0FERixHQU9JRixTQVJOO0FBVUQsRzs7T0FFREcsTSxHQUFTO0FBQUEsV0FDUDtBQUFDLG9CQUFEO0FBQUE7QUFDRyxhQUFLRixrQkFBTCxFQURIO0FBRUcsYUFBS2Isb0JBQUw7QUFGSCxLQURPO0FBQUEsRzs7a0JBakVVakIsZ0I7OztBQTJFckJBLGlCQUFpQmlDLFlBQWpCLEdBQWdDQSxzQkFBaEMiLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3BvdmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgUmFkaW8gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IFJhbmdlVHlwZXMgZnJvbSAnLi9yYW5nZS10eXBlcyc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBQb3BvdmVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2NjYztcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn1cbiAgaHIge1xuICAgIGNvbG9yOiAjQ0NDO1xuICAgIHNpemU6IDAuMXJlbTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZVBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBlbmFibGVkIH0gPSBwcm9wcztcbiAgICBjb25zdCBzZWxlY3RlZFJhbmdlVHlwZSA9IGVuYWJsZWRbcHJvcHMuc2VsZWN0ZWRSYW5nZVR5cGVdXG4gICAgICA/IHByb3BzLnNlbGVjdGVkUmFuZ2VUeXBlXG4gICAgICA6IE9iamVjdC5rZXlzKGVuYWJsZWQpLmZpbmQoa2V5ID0+IGVuYWJsZWRba2V5XSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgeyBvblJhbmdlVHlwZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSk7XG4gICAgb25SYW5nZVR5cGVDaGFuZ2UoeyBzZWxlY3RlZFJhbmdlVHlwZSB9KTtcbiAgfVxuXG4gIHJlbmRlclJhbmdlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2UgPSBSYW5nZVR5cGVzW3NlbGVjdGVkUmFuZ2VUeXBlXTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdGVkUmFuZ2UuY29tcG9uZW50XG4gICAgICAgIHsuLi50aGlzLnByb3BzW3NlbGVjdGVkUmFuZ2UucHJvcHNLZXldfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyT3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGVuYWJsZWRPcHRpb25zID0gT2JqZWN0LmtleXMoUmFuZ2VUeXBlcykuZmlsdGVyKGtleSA9PiBlbmFibGVkW2tleV0pO1xuICAgIHJldHVybiBlbmFibGVkT3B0aW9ucy5sZW5ndGggPiAxXG4gICAgICA/IGVuYWJsZWRPcHRpb25zLm1hcCh0eXBlID0+IChcbiAgICAgICAgPFJhZGlvXG4gICAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICAgIG5hbWU9XCJyYW5nZVR5cGVcIlxuICAgICAgICAgIHZhbHVlPXt0eXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFJhbmdlVHlwZSA9PT0gdHlwZX1cbiAgICAgICAgICBpbmxpbmVcbiAgICAgICAgPlxuICAgICAgICAgIHt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCB0eXBlKX1cbiAgICAgICAgPC9SYWRpbz4pKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgcmVuZGVyUmFuZ2VPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnJlbmRlck9wdGlvbnMoKTtcbiAgICByZXR1cm4gKFxuICAgICAgb3B0aW9ucyA/XG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAge29wdGlvbnN9XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlciA9ICgpID0+IChcbiAgICA8UG9wb3ZlclNlY3Rpb24+XG4gICAgICB7dGhpcy5yZW5kZXJSYW5nZU9wdGlvbnMoKX1cbiAgICAgIHt0aGlzLnJlbmRlclJhbmdlQ29tcG9uZW50KCl9XG4gICAgPC9Qb3BvdmVyU2VjdGlvbj5cbiAgKTtcbn1cblxuRGF0ZVJhbmdlUG9wb3Zlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkRhdGVSYW5nZVBvcG92ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19