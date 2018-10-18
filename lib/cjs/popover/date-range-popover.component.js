'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PopoverSection = _styledComponents2.default.div(_templateObject, _ocCmCommonLayouts.theme.gutterWidth, _ocCmCommonLayouts.theme.contentBackgroundColor);

var DateRangePopover = function (_React$PureComponent) {
  _inherits(DateRangePopover, _React$PureComponent);

  function DateRangePopover(props) {
    _classCallCheck(this, DateRangePopover);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleChange = function (e) {
      var selectedRangeType = e.target.value;
      _this.setState({ selectedRangeType: selectedRangeType });
      _this.props.onRangeTypeChange({
        popoverProps: {
          selectedRangeType: selectedRangeType
        }
      });
    };

    _this.renderRangeComponent = function () {
      var selectedRange = _rangeTypes2.default[_this.state.selectedRangeType];
      return _react2.default.createElement(selectedRange.component, _extends({}, _this.props[selectedRange.propsKey], {
        onChange: _this.props.onChange,
        translations: _this.props.translations
      }));
    };

    _this.renderOptions = function () {
      return Object.keys(_rangeTypes2.default).map(function (type) {
        return _react2.default.createElement(
          _reactBootstrap.Radio,
          {
            key: type,
            name: 'rangeType',
            value: type,
            onChange: _this.handleChange,
            checked: _this.state.selectedRangeType === type,
            inline: true
          },
          _this.props.translations[type]
        );
      });
    };

    _this.render = function () {
      return _react2.default.createElement(
        PopoverSection,
        null,
        _this.props.isRelativeEnabled && _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _this.renderOptions()
          ),
          _react2.default.createElement('hr', null)
        ),
        _this.renderRangeComponent()
      );
    };

    _this.state = {
      selectedRangeType: props.selectedRangeType
    };
    return _this;
  }

  return DateRangePopover;
}(_react2.default.PureComponent);

exports.default = DateRangePopover;


DateRangePopover.defaultProps = _defaultProps2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlBvcG92ZXJTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJEYXRlUmFuZ2VQb3BvdmVyIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2VsZWN0ZWRSYW5nZVR5cGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwib25SYW5nZVR5cGVDaGFuZ2UiLCJwb3BvdmVyUHJvcHMiLCJyZW5kZXJSYW5nZUNvbXBvbmVudCIsInNlbGVjdGVkUmFuZ2UiLCJSYW5nZVR5cGVzIiwic3RhdGUiLCJwcm9wc0tleSIsIm9uQ2hhbmdlIiwidHJhbnNsYXRpb25zIiwicmVuZGVyT3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJ0eXBlIiwicmVuZGVyIiwiaXNSZWxhdGl2ZUVuYWJsZWQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQywyQkFBT0MsR0FBeEIsa0JBS09DLHlCQUFNQyxXQUxiLEVBTWdCRCx5QkFBTUUsc0JBTnRCLENBQU47O0lBY3FCQyxnQjs7O0FBQ25CLDRCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBT25CQyxZQVBtQixHQU9KLFVBQUNDLENBQUQsRUFBTztBQUNwQixVQUFNQyxvQkFBb0JELEVBQUVFLE1BQUYsQ0FBU0MsS0FBbkM7QUFDQSxZQUFLQyxRQUFMLENBQWMsRUFBRUgsb0NBQUYsRUFBZDtBQUNBLFlBQUtILEtBQUwsQ0FBV08saUJBQVgsQ0FBNkI7QUFDM0JDLHNCQUFjO0FBQ1pMO0FBRFk7QUFEYSxPQUE3QjtBQUtELEtBZmtCOztBQUFBLFVBaUJuQk0sb0JBakJtQixHQWlCSSxZQUFNO0FBQzNCLFVBQU1DLGdCQUFnQkMscUJBQVcsTUFBS0MsS0FBTCxDQUFXVCxpQkFBdEIsQ0FBdEI7QUFDQSxhQUNFLDhCQUFDLGFBQUQsQ0FBZSxTQUFmLGVBQ00sTUFBS0gsS0FBTCxDQUFXVSxjQUFjRyxRQUF6QixDQUROO0FBRUUsa0JBQVUsTUFBS2IsS0FBTCxDQUFXYyxRQUZ2QjtBQUdFLHNCQUFjLE1BQUtkLEtBQUwsQ0FBV2U7QUFIM0IsU0FERjtBQU9ELEtBMUJrQjs7QUFBQSxVQTRCbkJDLGFBNUJtQixHQTRCSDtBQUFBLGFBQ2RDLE9BQU9DLElBQVAsQ0FBWVAsb0JBQVosRUFBd0JRLEdBQXhCLENBQTRCO0FBQUEsZUFDMUI7QUFBQywrQkFBRDtBQUFBO0FBQ0UsaUJBQUtDLElBRFA7QUFFRSxrQkFBSyxXQUZQO0FBR0UsbUJBQU9BLElBSFQ7QUFJRSxzQkFBVSxNQUFLbkIsWUFKakI7QUFLRSxxQkFBUyxNQUFLVyxLQUFMLENBQVdULGlCQUFYLEtBQWlDaUIsSUFMNUM7QUFNRTtBQU5GO0FBUUcsZ0JBQUtwQixLQUFMLENBQVdlLFlBQVgsQ0FBd0JLLElBQXhCO0FBUkgsU0FEMEI7QUFBQSxPQUE1QixDQURjO0FBQUEsS0E1Qkc7O0FBQUEsVUEwQ25CQyxNQTFDbUIsR0EwQ1Y7QUFBQSxhQUNQO0FBQUMsc0JBQUQ7QUFBQTtBQUNHLGNBQUtyQixLQUFMLENBQVdzQixpQkFBWCxJQUNEO0FBQUMseUJBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDRTtBQUFDLHFDQUFEO0FBQUE7QUFDRyxrQkFBS04sYUFBTDtBQURILFdBREY7QUFJRTtBQUpGLFNBRkY7QUFRRyxjQUFLUCxvQkFBTDtBQVJILE9BRE87QUFBQSxLQTFDVTs7QUFFakIsVUFBS0csS0FBTCxHQUFhO0FBQ1hULHlCQUFtQkgsTUFBTUc7QUFEZCxLQUFiO0FBRmlCO0FBS2xCOzs7RUFOMkNvQixnQkFBTUMsYTs7a0JBQS9CekIsZ0I7OztBQTJEckJBLGlCQUFpQjBCLFlBQWpCLEdBQWdDQSxzQkFBaEMiLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3BvdmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgUmFkaW8gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IFJhbmdlVHlwZXMgZnJvbSAnLi9yYW5nZS10eXBlcyc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5cbmNvbnN0IFBvcG92ZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfVxuICBociB7XG4gICAgY29sb3I6ICNDQ0M7XG4gICAgc2l6ZTogMC4xcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlUG9wb3ZlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IHByb3BzLnNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUmFuZ2VUeXBlIH0pO1xuICAgIHRoaXMucHJvcHMub25SYW5nZVR5cGVDaGFuZ2Uoe1xuICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclJhbmdlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2UgPSBSYW5nZVR5cGVzW3RoaXMuc3RhdGUuc2VsZWN0ZWRSYW5nZVR5cGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0ZWRSYW5nZS5jb21wb25lbnRcbiAgICAgICAgey4uLnRoaXMucHJvcHNbc2VsZWN0ZWRSYW5nZS5wcm9wc0tleV19XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICB0cmFuc2xhdGlvbnM9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyT3B0aW9ucyA9ICgpID0+IChcbiAgICBPYmplY3Qua2V5cyhSYW5nZVR5cGVzKS5tYXAodHlwZSA9PiAoXG4gICAgICA8UmFkaW9cbiAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICBuYW1lPVwicmFuZ2VUeXBlXCJcbiAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZFJhbmdlVHlwZSA9PT0gdHlwZX1cbiAgICAgICAgaW5saW5lXG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLnRyYW5zbGF0aW9uc1t0eXBlXX1cbiAgICAgIDwvUmFkaW8+KSlcbiAgKTtcblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPFBvcG92ZXJTZWN0aW9uPlxuICAgICAge3RoaXMucHJvcHMuaXNSZWxhdGl2ZUVuYWJsZWQgJiZcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJPcHRpb25zKCl9XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8aHIgLz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+fVxuICAgICAge3RoaXMucmVuZGVyUmFuZ2VDb21wb25lbnQoKX1cbiAgICA8L1BvcG92ZXJTZWN0aW9uPlxuICApO1xufVxuXG5EYXRlUmFuZ2VQb3BvdmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuRGF0ZVJhbmdlUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=