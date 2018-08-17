'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid #ccc;\n  padding: 1rem;\n  background-color: ', '\n  hr {\n    color: #CCC;\n    size: 0.1rem;\n    margin: 0;\n  }\n'], ['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  border: 0.1rem solid #ccc;\n  padding: 1rem;\n  background-color: ', '\n  hr {\n    color: #CCC;\n    size: 0.1rem;\n    margin: 0;\n  }\n']);

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

var PopoverSection = _styledComponents2.default.div(_templateObject, _ocCmCommonLayouts.theme.contentBackgroundColor);

var DateRangePopover = function (_React$PureComponent) {
  _inherits(DateRangePopover, _React$PureComponent);

  function DateRangePopover(props) {
    _classCallCheck(this, DateRangePopover);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleChange = function (e) {
      var selectedRangeType = e.target.value;
      _this.setState({ selectedRangeType: selectedRangeType });
      _this.props.onChange({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlBvcG92ZXJTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiRGF0ZVJhbmdlUG9wb3ZlciIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNlbGVjdGVkUmFuZ2VUeXBlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwicG9wb3ZlclByb3BzIiwicmVuZGVyUmFuZ2VDb21wb25lbnQiLCJzZWxlY3RlZFJhbmdlIiwiUmFuZ2VUeXBlcyIsInN0YXRlIiwicHJvcHNLZXkiLCJ0cmFuc2xhdGlvbnMiLCJyZW5kZXJPcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInR5cGUiLCJyZW5kZXIiLCJpc1JlbGF0aXZlRW5hYmxlZCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLDJCQUFPQyxHQUF4QixrQkFNZ0JDLHlCQUFNQyxzQkFOdEIsQ0FBTjs7SUFjcUJDLGdCOzs7QUFDbkIsNEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFPbkJDLFlBUG1CLEdBT0osVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCLFVBQU1DLG9CQUFvQkQsRUFBRUUsTUFBRixDQUFTQyxLQUFuQztBQUNBLFlBQUtDLFFBQUwsQ0FBYyxFQUFFSCxvQ0FBRixFQUFkO0FBQ0EsWUFBS0gsS0FBTCxDQUFXTyxRQUFYLENBQW9CO0FBQ2xCQyxzQkFBYztBQUNaTDtBQURZO0FBREksT0FBcEI7QUFLRCxLQWZrQjs7QUFBQSxVQWlCbkJNLG9CQWpCbUIsR0FpQkksWUFBTTtBQUMzQixVQUFNQyxnQkFBZ0JDLHFCQUFXLE1BQUtDLEtBQUwsQ0FBV1QsaUJBQXRCLENBQXRCO0FBQ0EsYUFDRSw4QkFBQyxhQUFELENBQWUsU0FBZixlQUNNLE1BQUtILEtBQUwsQ0FBV1UsY0FBY0csUUFBekIsQ0FETjtBQUVFLGtCQUFVLE1BQUtiLEtBQUwsQ0FBV08sUUFGdkI7QUFHRSxzQkFBYyxNQUFLUCxLQUFMLENBQVdjO0FBSDNCLFNBREY7QUFPRCxLQTFCa0I7O0FBQUEsVUE0Qm5CQyxhQTVCbUIsR0E0Qkg7QUFBQSxhQUNkQyxPQUFPQyxJQUFQLENBQVlOLG9CQUFaLEVBQXdCTyxHQUF4QixDQUE0QjtBQUFBLGVBQzFCO0FBQUMsK0JBQUQ7QUFBQTtBQUNFLGlCQUFLQyxJQURQO0FBRUUsa0JBQUssV0FGUDtBQUdFLG1CQUFPQSxJQUhUO0FBSUUsc0JBQVUsTUFBS2xCLFlBSmpCO0FBS0UscUJBQVMsTUFBS1csS0FBTCxDQUFXVCxpQkFBWCxLQUFpQ2dCLElBTDVDO0FBTUU7QUFORjtBQVFHLGdCQUFLbkIsS0FBTCxDQUFXYyxZQUFYLENBQXdCSyxJQUF4QjtBQVJILFNBRDBCO0FBQUEsT0FBNUIsQ0FEYztBQUFBLEtBNUJHOztBQUFBLFVBMENuQkMsTUExQ21CLEdBMENWO0FBQUEsYUFDUDtBQUFDLHNCQUFEO0FBQUE7QUFDRyxjQUFLcEIsS0FBTCxDQUFXcUIsaUJBQVgsSUFDRDtBQUFDLHlCQUFELENBQU8sUUFBUDtBQUFBO0FBQ0U7QUFBQyxxQ0FBRDtBQUFBO0FBQ0csa0JBQUtOLGFBQUw7QUFESCxXQURGO0FBSUU7QUFKRixTQUZGO0FBUUcsY0FBS04sb0JBQUw7QUFSSCxPQURPO0FBQUEsS0ExQ1U7O0FBRWpCLFVBQUtHLEtBQUwsR0FBYTtBQUNYVCx5QkFBbUJILE1BQU1HO0FBRGQsS0FBYjtBQUZpQjtBQUtsQjs7O0VBTjJDbUIsZ0JBQU1DLGE7O2tCQUEvQnhCLGdCOzs7QUEyRHJCQSxpQkFBaUJ5QixZQUFqQixHQUFnQ0Esc0JBQWhDIiwiZmlsZSI6ImRhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIFJhZGlvIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBSYW5nZVR5cGVzIGZyb20gJy4vcmFuZ2UtdHlwZXMnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuXG5jb25zdCBQb3BvdmVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgI2NjYztcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfVxuICBociB7XG4gICAgY29sb3I6ICNDQ0M7XG4gICAgc2l6ZTogMC4xcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlUG9wb3ZlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IHByb3BzLnNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2VUeXBlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkUmFuZ2VUeXBlIH0pO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclJhbmdlQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkUmFuZ2UgPSBSYW5nZVR5cGVzW3RoaXMuc3RhdGUuc2VsZWN0ZWRSYW5nZVR5cGVdO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0ZWRSYW5nZS5jb21wb25lbnRcbiAgICAgICAgey4uLnRoaXMucHJvcHNbc2VsZWN0ZWRSYW5nZS5wcm9wc0tleV19XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICB0cmFuc2xhdGlvbnM9e3RoaXMucHJvcHMudHJhbnNsYXRpb25zfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyT3B0aW9ucyA9ICgpID0+IChcbiAgICBPYmplY3Qua2V5cyhSYW5nZVR5cGVzKS5tYXAodHlwZSA9PiAoXG4gICAgICA8UmFkaW9cbiAgICAgICAga2V5PXt0eXBlfVxuICAgICAgICBuYW1lPVwicmFuZ2VUeXBlXCJcbiAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZFJhbmdlVHlwZSA9PT0gdHlwZX1cbiAgICAgICAgaW5saW5lXG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLnRyYW5zbGF0aW9uc1t0eXBlXX1cbiAgICAgIDwvUmFkaW8+KSlcbiAgKTtcblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPFBvcG92ZXJTZWN0aW9uPlxuICAgICAge3RoaXMucHJvcHMuaXNSZWxhdGl2ZUVuYWJsZWQgJiZcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJPcHRpb25zKCl9XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8aHIgLz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+fVxuICAgICAge3RoaXMucmVuZGVyUmFuZ2VDb21wb25lbnQoKX1cbiAgICA8L1BvcG92ZXJTZWN0aW9uPlxuICApO1xufVxuXG5EYXRlUmFuZ2VQb3BvdmVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuRGF0ZVJhbmdlUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=