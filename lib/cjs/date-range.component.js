'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n'], ['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      width: ', ';\n    '], ['\n      width: ', ';\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactBootstrap = require('react-bootstrap');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

var _dateRangePopover = require('./popover/date-range-popover.component');

var _dateRangePopover2 = _interopRequireDefault(_dateRangePopover);

var _propTypes3 = require('./popover/prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _defaultProps = require('./popover/default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable react/forbid-prop-types */


var ReadOnlyInput = _styledComponents2.default.div(_templateObject, _ocCmCommonLayouts.theme.contentBackgroundColor);

var DateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(DateRange, _React$PureComponent);

  function DateRange(props) {
    _classCallCheck(this, DateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var value = _this.initValue(props);
    _this.state = {
      showOverlay: false,
      value: value,
      popoverProps: undefined
    };
    return _this;
  }

  /**
   * This is dirty solution and c/should be fixed.
   * Root cause: day-picker is rendered to root element, not inside popover eleemnt.
   * Therefore click coming form day-picker are considers as outside click of popover
   * and popover would be close without event preventDefault.
   * One solution is passing at least tree callbacks for react-datetime: onWeekClick,
   * onCaptionClick and custom onClick for custom caption of react-datetime.
   */


  DateRange.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        id = _props.id,
        _inputRef = _props.inputRef,
        inputProps = _props.inputProps,
        width = _props.width;


    var DateRangeSection = _styledComponents2.default.div(_templateObject2, width);

    return _react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: _ocCmCommonLayouts.theme },
      _react2.default.createElement(
        DateRangeSection,
        { id: id, className: className },
        _react2.default.createElement(
          ReadOnlyInput,
          null,
          _react2.default.createElement(_reactBootstrap.FormControl, _extends({
            type: 'text',
            inputRef: function inputRef(el) {
              _this2.input = el;
              _inputRef(el);
            }
          }, inputProps, {
            readOnly: 'readonly',
            value: this.state.value,
            onClick: this.handleClick
          }))
        ),
        this.state.showOverlay && _react2.default.createElement(
          _reactBootstrap.Overlay,
          {
            show: this.state.showOverlay,
            onHide: this.handleHide,
            placement: 'bottom',
            container: this,
            rootClose: true
          },
          _react2.default.createElement(_dateRangePopover2.default, _extends({}, this.mergePopoverProps(this.props.popoverProps, this.state.popoverProps), {
            onChange: this.handleChange
          }))
        )
      )
    );
  };

  return DateRange;
}(_react2.default.PureComponent), _class.defaultProps = {
  className: '',
  inputProps: {},
  inputRef: function inputRef() {},
  onChange: function onChange() {},
  popoverProps: _defaultProps2.default,
  width: '200px'
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.componentDidUpdate = function (prevProps) {
    if (prevProps.popoverProps !== _this3.props.popoverProps) {
      var value = _this3.initValue(_this3.props);
      if (value) {
        _this3.setState({ value: value });
      }
    }
  };

  this.initValue = function (props) {
    return _this3.initAbsoluteRange(props) || _this3.initRelativeRange(props);
  };

  this.initAbsoluteRange = function (props) {
    var _ref = props.popoverProps || {},
        absoluteRange = _ref.absoluteRange;

    var _ref2 = absoluteRange || {},
        endDate = _ref2.endDate,
        startDate = _ref2.startDate,
        dateFormat = _ref2.dateFormat;

    if (startDate && endDate) {
      var from = _moment2.default.utc(startDate);
      var to = _moment2.default.utc(endDate);
      return from.isValid() && to.isValid() ? from.format(dateFormat) + ' - ' + to.format(dateFormat) : '';
    }
    return null;
  };

  this.initRelativeRange = function (props) {
    var _ref3 = props.popoverProps || {},
        isRelativeEnabled = _ref3.isRelativeEnabled,
        relativeRange = _ref3.relativeRange;

    var _ref4 = relativeRange || {},
        endDate = _ref4.endDate,
        startDate = _ref4.startDate;

    return isRelativeEnabled && endDate && startDate ? startDate.label + ' - ' + endDate.label : '';
  };

  this.mergePopoverProps = function () {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Object.assign({}, target, source, {
      absoluteRange: _extends({}, target.absoluteRange || {}, source.absoluteRange || {}),
      relativeRange: _extends({}, target.relativeRange || {}, source.relativeRange || {})
    });
  };

  this.handleChange = function (event) {
    _this3.setState({
      popoverProps: _this3.mergePopoverProps(_this3.state.popoverProps, event.popoverProps),
      value: event.value
    });

    var startDate = event.startDate,
        endDate = event.endDate;

    if (startDate || endDate) {
      _this3.props.onChange({ startDate: startDate, endDate: endDate });
    }
  };

  this.handleClick = function () {
    return _this3.setState({ showOverlay: !_this3.state.showOverlay });
  };

  this.handleHide = function (e) {
    return e.target && e.target.parentNode && e.target.parentNode.className && e.target.parentNode.className.includes('DayPicker') ? e.preventDefault() : _this3.setState({ showOverlay: false });
  };
}, _temp);
exports.default = DateRange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwidmFsdWUiLCJpbml0VmFsdWUiLCJzdGF0ZSIsInNob3dPdmVybGF5IiwicG9wb3ZlclByb3BzIiwidW5kZWZpbmVkIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwiaWQiLCJpbnB1dFJlZiIsImlucHV0UHJvcHMiLCJ3aWR0aCIsIkRhdGVSYW5nZVNlY3Rpb24iLCJlbCIsImlucHV0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVIaWRlIiwibWVyZ2VQb3BvdmVyUHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsInBvcG92ZXJEZWZhdWx0UHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzZXRTdGF0ZSIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJhYnNvbHV0ZVJhbmdlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwibW9tZW50IiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZm9ybWF0IiwiaXNSZWxhdGl2ZUVuYWJsZWQiLCJyZWxhdGl2ZVJhbmdlIiwibGFiZWwiLCJ0YXJnZXQiLCJzb3VyY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudCIsImUiLCJwYXJlbnROb2RlIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFUQTs7O0FBV0EsSUFBTUEsZ0JBQWdCQywyQkFBT0MsR0FB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R0FBZSxVQUFDNEIsS0FBRCxFQUFXO0FBQ3hCLFdBQUtwQixRQUFMLENBQWM7QUFDWnRCLG9CQUFjLE9BQUthLGlCQUFMLENBQXVCLE9BQUtmLEtBQUwsQ0FBV0UsWUFBbEMsRUFBZ0QwQyxNQUFNMUMsWUFBdEQsQ0FERjtBQUVaSixhQUFPOEMsTUFBTTlDO0FBRkQsS0FBZDs7QUFEd0IsUUFNaEIrQixTQU5nQixHQU1PZSxLQU5QLENBTWhCZixTQU5nQjtBQUFBLFFBTUxELE9BTkssR0FNT2dCLEtBTlAsQ0FNTGhCLE9BTks7O0FBT3hCLFFBQUlDLGFBQWFELE9BQWpCLEVBQTBCO0FBQ3hCLGFBQUsvQixLQUFMLENBQVd1QixRQUFYLENBQW9CLEVBQUVTLG9CQUFGLEVBQWFELGdCQUFiLEVBQXBCO0FBQ0Q7QUFDRixHOztPQUVEZixXLEdBQWM7QUFBQSxXQUFNLE9BQUtXLFFBQUwsQ0FBYyxFQUFFdkIsYUFBYSxDQUFDLE9BQUtELEtBQUwsQ0FBV0MsV0FBM0IsRUFBZCxDQUFOO0FBQUEsRzs7T0FVZGEsVSxHQUFhO0FBQUEsV0FDWCtCLEVBQUVMLE1BQUYsSUFBWUssRUFBRUwsTUFBRixDQUFTTSxVQUFyQixJQUFtQ0QsRUFBRUwsTUFBRixDQUFTTSxVQUFULENBQW9CekMsU0FBdkQsSUFBb0V3QyxFQUFFTCxNQUFGLENBQVNNLFVBQVQsQ0FBb0J6QyxTQUFwQixDQUE4QjBDLFFBQTlCLENBQXVDLFdBQXZDLENBQXBFLEdBQ0VGLEVBQUVHLGNBQUYsRUFERixHQUVFLE9BQUt4QixRQUFMLENBQWMsRUFBRXZCLGFBQWEsS0FBZixFQUFkLENBSFM7QUFBQSxHOztrQkF4R01MLFMiLCJmaWxlIjoiZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgT3ZlcmxheSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbmltcG9ydCBEYXRlUmFuZ2VQb3BvdmVyIGZyb20gJy4vcG9wb3Zlci9kYXRlLXJhbmdlLXBvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCBwb3BvdmVyUHJvcFR5cGVzIGZyb20gJy4vcG9wb3Zlci9wcm9wLXR5cGVzJztcbmltcG9ydCBwb3BvdmVyRGVmYXVsdFByb3BzIGZyb20gJy4vcG9wb3Zlci9kZWZhdWx0LXByb3BzJztcblxuY29uc3QgUmVhZE9ubHlJbnB1dCA9IHN0eWxlZC5kaXZgXG4gIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMuc2hhcGUocG9wb3ZlclByb3BUeXBlcyksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmOiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgcG9wb3ZlclByb3BzOiBwb3BvdmVyRGVmYXVsdFByb3BzLFxuICAgIHdpZHRoOiAnMjAwcHgnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbml0VmFsdWUocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB2YWx1ZSxcbiAgICAgIHBvcG92ZXJQcm9wczogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzKSA9PiB7XG4gICAgaWYgKHByZXZQcm9wcy5wb3BvdmVyUHJvcHMgIT09IHRoaXMucHJvcHMucG9wb3ZlclByb3BzKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5pdFZhbHVlKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0VmFsdWUgPSBwcm9wcyA9PiAoXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcylcbiAgKTtcblxuICBpbml0QWJzb2x1dGVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gcHJvcHMucG9wb3ZlclByb3BzIHx8IHt9O1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlLCBkYXRlRm9ybWF0IH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIHJldHVybiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSA/XG4gICAgICAgIGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbml0UmVsYXRpdmVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzUmVsYXRpdmVFbmFibGVkLFxuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICB9ID0gcHJvcHMucG9wb3ZlclByb3BzIHx8IHt9O1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuICAgIHJldHVybiAoaXNSZWxhdGl2ZUVuYWJsZWQgJiYgZW5kRGF0ZSAmJiBzdGFydERhdGUpID9cbiAgICAgIGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWx9YCA6ICcnO1xuICB9XG5cbiAgbWVyZ2VQb3BvdmVyUHJvcHMgPSAodGFyZ2V0ID0ge30sIHNvdXJjZSA9IHt9KSA9PiAoXG4gICAgT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGFyZ2V0LFxuICAgICAgc291cmNlLFxuICAgICAge1xuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgLi4udGFyZ2V0LmFic29sdXRlUmFuZ2UgfHwge30sXG4gICAgICAgICAgLi4uc291cmNlLmFic29sdXRlUmFuZ2UgfHwge30sXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICAuLi50YXJnZXQucmVsYXRpdmVSYW5nZSB8fCB7fSxcbiAgICAgICAgICAuLi5zb3VyY2UucmVsYXRpdmVSYW5nZSB8fCB7fSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKSk7XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwb3BvdmVyUHJvcHM6IHRoaXMubWVyZ2VQb3BvdmVyUHJvcHModGhpcy5zdGF0ZS5wb3BvdmVyUHJvcHMsIGV2ZW50LnBvcG92ZXJQcm9wcyksXG4gICAgICB2YWx1ZTogZXZlbnQudmFsdWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gZXZlbnQ7XG4gICAgaWYgKHN0YXJ0RGF0ZSB8fCBlbmREYXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogIXRoaXMuc3RhdGUuc2hvd092ZXJsYXkgfSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgZGlydHkgc29sdXRpb24gYW5kIGMvc2hvdWxkIGJlIGZpeGVkLlxuICAgKiBSb290IGNhdXNlOiBkYXktcGlja2VyIGlzIHJlbmRlcmVkIHRvIHJvb3QgZWxlbWVudCwgbm90IGluc2lkZSBwb3BvdmVyIGVsZWVtbnQuXG4gICAqIFRoZXJlZm9yZSBjbGljayBjb21pbmcgZm9ybSBkYXktcGlja2VyIGFyZSBjb25zaWRlcnMgYXMgb3V0c2lkZSBjbGljayBvZiBwb3BvdmVyXG4gICAqIGFuZCBwb3BvdmVyIHdvdWxkIGJlIGNsb3NlIHdpdGhvdXQgZXZlbnQgcHJldmVudERlZmF1bHQuXG4gICAqIE9uZSBzb2x1dGlvbiBpcyBwYXNzaW5nIGF0IGxlYXN0IHRyZWUgY2FsbGJhY2tzIGZvciByZWFjdC1kYXRldGltZTogb25XZWVrQ2xpY2ssXG4gICAqIG9uQ2FwdGlvbkNsaWNrIGFuZCBjdXN0b20gb25DbGljayBmb3IgY3VzdG9tIGNhcHRpb24gb2YgcmVhY3QtZGF0ZXRpbWUuXG4gICAqL1xuICBoYW5kbGVIaWRlID0gZSA9PiAoXG4gICAgZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50Tm9kZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmNsdWRlcygnRGF5UGlja2VyJykgP1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIDpcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogZmFsc2UgfSlcbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWQsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6ICR7d2lkdGh9O1xuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPFJlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFkT25seUlucHV0PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd092ZXJsYXl9XG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlSGlkZX1cbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICBjb250YWluZXI9e3RoaXN9XG4gICAgICAgICAgICByb290Q2xvc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZVJhbmdlUG9wb3ZlclxuICAgICAgICAgICAgICB7Li4udGhpcy5tZXJnZVBvcG92ZXJQcm9wcyh0aGlzLnByb3BzLnBvcG92ZXJQcm9wcywgdGhpcy5zdGF0ZS5wb3BvdmVyUHJvcHMpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvT3ZlcmxheT59XG4gICAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=