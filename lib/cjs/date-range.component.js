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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwidmFsdWUiLCJpbml0VmFsdWUiLCJzdGF0ZSIsInNob3dPdmVybGF5IiwicG9wb3ZlclByb3BzIiwidW5kZWZpbmVkIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwiaWQiLCJpbnB1dFJlZiIsImlucHV0UHJvcHMiLCJ3aWR0aCIsIkRhdGVSYW5nZVNlY3Rpb24iLCJlbCIsImlucHV0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVIaWRlIiwibWVyZ2VQb3BvdmVyUHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsInBvcG92ZXJEZWZhdWx0UHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzZXRTdGF0ZSIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJhYnNvbHV0ZVJhbmdlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwibW9tZW50IiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZm9ybWF0IiwiaXNSZWxhdGl2ZUVuYWJsZWQiLCJyZWxhdGl2ZVJhbmdlIiwibGFiZWwiLCJ0YXJnZXQiLCJzb3VyY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudCIsImUiLCJwYXJlbnROb2RlIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFUQTs7O0FBV0EsSUFBTUEsZ0JBQWdCQywyQkFBT0MsR0FB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R0FBZSxVQUFDNEIsS0FBRCxFQUFXO0FBQ3hCLFdBQUtwQixRQUFMLENBQWM7QUFDWnRCLG9CQUFjLE9BQUthLGlCQUFMLENBQXVCLE9BQUtmLEtBQUwsQ0FBV0UsWUFBbEMsRUFBZ0QwQyxNQUFNMUMsWUFBdEQsQ0FERjtBQUVaSixhQUFPOEMsTUFBTTlDO0FBRkQsS0FBZDs7QUFEd0IsUUFNaEIrQixTQU5nQixHQU1PZSxLQU5QLENBTWhCZixTQU5nQjtBQUFBLFFBTUxELE9BTkssR0FNT2dCLEtBTlAsQ0FNTGhCLE9BTks7O0FBT3hCLFFBQUlDLGFBQWFELE9BQWpCLEVBQTBCO0FBQ3hCLGFBQUsvQixLQUFMLENBQVd1QixRQUFYLENBQW9CLEVBQUVTLG9CQUFGLEVBQWFELGdCQUFiLEVBQXBCO0FBQ0Q7QUFDRixHOztPQUVEZixXLEdBQWM7QUFBQSxXQUFNLE9BQUtXLFFBQUwsQ0FBYyxFQUFFdkIsYUFBYSxDQUFDLE9BQUtELEtBQUwsQ0FBV0MsV0FBM0IsRUFBZCxDQUFOO0FBQUEsRzs7T0FVZGEsVSxHQUFhO0FBQUEsV0FDWCtCLEVBQUVMLE1BQUYsSUFBWUssRUFBRUwsTUFBRixDQUFTTSxVQUFyQixJQUFtQ0QsRUFBRUwsTUFBRixDQUFTTSxVQUFULENBQW9CekMsU0FBdkQsSUFBb0V3QyxFQUFFTCxNQUFGLENBQVNNLFVBQVQsQ0FBb0J6QyxTQUFwQixDQUE4QjBDLFFBQTlCLENBQXVDLFdBQXZDLENBQXBFLEdBQ0VGLEVBQUVHLGNBQUYsRUFERixHQUVFLE9BQUt4QixRQUFMLENBQWMsRUFBRXZCLGFBQWEsS0FBZixFQUFkLENBSFM7QUFBQSxHOztrQkF4R01MLFMiLCJmaWxlIjoiZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcclxuaW1wb3J0IERhdGVSYW5nZVBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgcG9wb3ZlclByb3BUeXBlcyBmcm9tICcuL3BvcG92ZXIvcHJvcC10eXBlcyc7XHJcbmltcG9ydCBwb3BvdmVyRGVmYXVsdFByb3BzIGZyb20gJy4vcG9wb3Zlci9kZWZhdWx0LXByb3BzJztcclxuXHJcbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxyXG4gIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMuc2hhcGUocG9wb3ZlclByb3BUeXBlcyksXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIGlucHV0UHJvcHM6IHt9LFxyXG4gICAgaW5wdXRSZWY6ICgpID0+IHt9LFxyXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgcG9wb3ZlclByb3BzOiBwb3BvdmVyRGVmYXVsdFByb3BzLFxyXG4gICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbml0VmFsdWUocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgcG9wb3ZlclByb3BzOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcykgPT4ge1xyXG4gICAgaWYgKHByZXZQcm9wcy5wb3BvdmVyUHJvcHMgIT09IHRoaXMucHJvcHMucG9wb3ZlclByb3BzKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbml0VmFsdWUodGhpcy5wcm9wcyk7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFZhbHVlID0gcHJvcHMgPT4gKFxyXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcylcclxuICApO1xyXG5cclxuICBpbml0QWJzb2x1dGVSYW5nZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSBwcm9wcy5wb3BvdmVyUHJvcHMgfHwge307XHJcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgZGF0ZUZvcm1hdCB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcclxuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xyXG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xyXG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XHJcbiAgICAgIHJldHVybiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSA/XHJcbiAgICAgICAgYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCA6ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpbml0UmVsYXRpdmVSYW5nZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpc1JlbGF0aXZlRW5hYmxlZCxcclxuICAgICAgcmVsYXRpdmVSYW5nZSxcclxuICAgIH0gPSBwcm9wcy5wb3BvdmVyUHJvcHMgfHwge307XHJcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcclxuICAgIHJldHVybiAoaXNSZWxhdGl2ZUVuYWJsZWQgJiYgZW5kRGF0ZSAmJiBzdGFydERhdGUpID9cclxuICAgICAgYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbH1gIDogJyc7XHJcbiAgfVxyXG5cclxuICBtZXJnZVBvcG92ZXJQcm9wcyA9ICh0YXJnZXQgPSB7fSwgc291cmNlID0ge30pID0+IChcclxuICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICB0YXJnZXQsXHJcbiAgICAgIHNvdXJjZSxcclxuICAgICAge1xyXG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcclxuICAgICAgICAgIC4uLnRhcmdldC5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxyXG4gICAgICAgICAgLi4uc291cmNlLmFic29sdXRlUmFuZ2UgfHwge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XHJcbiAgICAgICAgICAuLi50YXJnZXQucmVsYXRpdmVSYW5nZSB8fCB7fSxcclxuICAgICAgICAgIC4uLnNvdXJjZS5yZWxhdGl2ZVJhbmdlIHx8IHt9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICApKTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcG9wb3ZlclByb3BzOiB0aGlzLm1lcmdlUG9wb3ZlclByb3BzKHRoaXMuc3RhdGUucG9wb3ZlclByb3BzLCBldmVudC5wb3BvdmVyUHJvcHMpLFxyXG4gICAgICB2YWx1ZTogZXZlbnQudmFsdWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gZXZlbnQ7XHJcbiAgICBpZiAoc3RhcnREYXRlIHx8IGVuZERhdGUpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogIXRoaXMuc3RhdGUuc2hvd092ZXJsYXkgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgZGlydHkgc29sdXRpb24gYW5kIGMvc2hvdWxkIGJlIGZpeGVkLlxyXG4gICAqIFJvb3QgY2F1c2U6IGRheS1waWNrZXIgaXMgcmVuZGVyZWQgdG8gcm9vdCBlbGVtZW50LCBub3QgaW5zaWRlIHBvcG92ZXIgZWxlZW1udC5cclxuICAgKiBUaGVyZWZvcmUgY2xpY2sgY29taW5nIGZvcm0gZGF5LXBpY2tlciBhcmUgY29uc2lkZXJzIGFzIG91dHNpZGUgY2xpY2sgb2YgcG9wb3ZlclxyXG4gICAqIGFuZCBwb3BvdmVyIHdvdWxkIGJlIGNsb3NlIHdpdGhvdXQgZXZlbnQgcHJldmVudERlZmF1bHQuXHJcbiAgICogT25lIHNvbHV0aW9uIGlzIHBhc3NpbmcgYXQgbGVhc3QgdHJlZSBjYWxsYmFja3MgZm9yIHJlYWN0LWRhdGV0aW1lOiBvbldlZWtDbGljayxcclxuICAgKiBvbkNhcHRpb25DbGljayBhbmQgY3VzdG9tIG9uQ2xpY2sgZm9yIGN1c3RvbSBjYXB0aW9uIG9mIHJlYWN0LWRhdGV0aW1lLlxyXG4gICAqL1xyXG4gIGhhbmRsZUhpZGUgPSBlID0+IChcclxuICAgIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnBhcmVudE5vZGUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoJ0RheVBpY2tlcicpID9cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIDpcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPdmVybGF5OiBmYWxzZSB9KVxyXG4gICk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICBpZCxcclxuICAgICAgaW5wdXRSZWYsXHJcbiAgICAgIGlucHV0UHJvcHMsXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgRGF0ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICAgIHdpZHRoOiAke3dpZHRofTtcclxuICAgIGA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8RGF0ZVJhbmdlU2VjdGlvbiBpZD17aWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICAgIDxSZWFkT25seUlucHV0PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHk9XCJyZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvUmVhZE9ubHlJbnB1dD5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXHJcbiAgICAgICAgICA8T3ZlcmxheVxyXG4gICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dPdmVybGF5fVxyXG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlSGlkZX1cclxuICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgY29udGFpbmVyPXt0aGlzfVxyXG4gICAgICAgICAgICByb290Q2xvc2VcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcclxuICAgICAgICAgICAgICB7Li4udGhpcy5tZXJnZVBvcG92ZXJQcm9wcyh0aGlzLnByb3BzLnBvcG92ZXJQcm9wcywgdGhpcy5zdGF0ZS5wb3BvdmVyUHJvcHMpfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvT3ZlcmxheT59XHJcbiAgICAgICAgPC9EYXRlUmFuZ2VTZWN0aW9uPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=