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

  this.componentDidUpdate = function () {
    if (!_this3.state.value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwidmFsdWUiLCJpbml0VmFsdWUiLCJzdGF0ZSIsInNob3dPdmVybGF5IiwicG9wb3ZlclByb3BzIiwidW5kZWZpbmVkIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwiaWQiLCJpbnB1dFJlZiIsImlucHV0UHJvcHMiLCJ3aWR0aCIsIkRhdGVSYW5nZVNlY3Rpb24iLCJlbCIsImlucHV0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVIaWRlIiwibWVyZ2VQb3BvdmVyUHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsInBvcG92ZXJEZWZhdWx0UHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJzZXRTdGF0ZSIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJhYnNvbHV0ZVJhbmdlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwibW9tZW50IiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZm9ybWF0IiwiaXNSZWxhdGl2ZUVuYWJsZWQiLCJyZWxhdGl2ZVJhbmdlIiwibGFiZWwiLCJ0YXJnZXQiLCJzb3VyY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudCIsImUiLCJwYXJlbnROb2RlIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFUQTs7O0FBV0EsSUFBTUEsZ0JBQWdCQywyQkFBT0MsR0FBdkIsa0JBRWtCQyx5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ZixLQUFMLENBQVdFLFlBQWxDLEVBQWdEeUMsTUFBTXpDLFlBQXRELENBREY7QUFFWkosYUFBTzZDLE1BQU03QztBQUZELEtBQWQ7O0FBRHdCLFFBTWhCOEIsU0FOZ0IsR0FNT2UsS0FOUCxDQU1oQmYsU0FOZ0I7QUFBQSxRQU1MRCxPQU5LLEdBTU9nQixLQU5QLENBTUxoQixPQU5LOztBQU94QixRQUFJQyxhQUFhRCxPQUFqQixFQUEwQjtBQUN4QixhQUFLOUIsS0FBTCxDQUFXdUIsUUFBWCxDQUFvQixFQUFFUSxvQkFBRixFQUFhRCxnQkFBYixFQUFwQjtBQUNEO0FBQ0YsRzs7T0FFRGQsVyxHQUFjO0FBQUEsV0FBTSxPQUFLVSxRQUFMLENBQWMsRUFBRXRCLGFBQWEsQ0FBQyxPQUFLRCxLQUFMLENBQVdDLFdBQTNCLEVBQWQsQ0FBTjtBQUFBLEc7O09BVWRhLFUsR0FBYTtBQUFBLFdBQ1g4QixFQUFFTCxNQUFGLElBQVlLLEVBQUVMLE1BQUYsQ0FBU00sVUFBckIsSUFBbUNELEVBQUVMLE1BQUYsQ0FBU00sVUFBVCxDQUFvQnhDLFNBQXZELElBQW9FdUMsRUFBRUwsTUFBRixDQUFTTSxVQUFULENBQW9CeEMsU0FBcEIsQ0FBOEJ5QyxRQUE5QixDQUF1QyxXQUF2QyxDQUFwRSxHQUNFRixFQUFFRyxjQUFGLEVBREYsR0FFRSxPQUFLeEIsUUFBTCxDQUFjLEVBQUV0QixhQUFhLEtBQWYsRUFBZCxDQUhTO0FBQUEsRzs7a0JBeEdNTCxTIiwiZmlsZSI6ImRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcclxuaW1wb3J0IERhdGVSYW5nZVBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgcG9wb3ZlclByb3BUeXBlcyBmcm9tICcuL3BvcG92ZXIvcHJvcC10eXBlcyc7XHJcbmltcG9ydCBwb3BvdmVyRGVmYXVsdFByb3BzIGZyb20gJy4vcG9wb3Zlci9kZWZhdWx0LXByb3BzJztcclxuXHJcbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxyXG4gIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMuc2hhcGUocG9wb3ZlclByb3BUeXBlcyksXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIGlucHV0UHJvcHM6IHt9LFxyXG4gICAgaW5wdXRSZWY6ICgpID0+IHt9LFxyXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgcG9wb3ZlclByb3BzOiBwb3BvdmVyRGVmYXVsdFByb3BzLFxyXG4gICAgd2lkdGg6ICcyMDBweCcsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbml0VmFsdWUocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgcG9wb3ZlclByb3BzOiB1bmRlZmluZWQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbml0VmFsdWUodGhpcy5wcm9wcyk7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFZhbHVlID0gcHJvcHMgPT4gKFxyXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcylcclxuICApO1xyXG5cclxuICBpbml0QWJzb2x1dGVSYW5nZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSBwcm9wcy5wb3BvdmVyUHJvcHMgfHwge307XHJcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgZGF0ZUZvcm1hdCB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcclxuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xyXG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xyXG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XHJcbiAgICAgIHJldHVybiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSA/XHJcbiAgICAgICAgYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCA6ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpbml0UmVsYXRpdmVSYW5nZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpc1JlbGF0aXZlRW5hYmxlZCxcclxuICAgICAgcmVsYXRpdmVSYW5nZSxcclxuICAgIH0gPSBwcm9wcy5wb3BvdmVyUHJvcHMgfHwge307XHJcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcclxuICAgIHJldHVybiAoaXNSZWxhdGl2ZUVuYWJsZWQgJiYgZW5kRGF0ZSAmJiBzdGFydERhdGUpID9cclxuICAgICAgYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbH1gIDogJyc7XHJcbiAgfVxyXG5cclxuICBtZXJnZVBvcG92ZXJQcm9wcyA9ICh0YXJnZXQgPSB7fSwgc291cmNlID0ge30pID0+IChcclxuICAgIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHt9LFxyXG4gICAgICB0YXJnZXQsXHJcbiAgICAgIHNvdXJjZSxcclxuICAgICAge1xyXG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcclxuICAgICAgICAgIC4uLnRhcmdldC5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxyXG4gICAgICAgICAgLi4uc291cmNlLmFic29sdXRlUmFuZ2UgfHwge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XHJcbiAgICAgICAgICAuLi50YXJnZXQucmVsYXRpdmVSYW5nZSB8fCB7fSxcclxuICAgICAgICAgIC4uLnNvdXJjZS5yZWxhdGl2ZVJhbmdlIHx8IHt9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICApKTtcclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcG9wb3ZlclByb3BzOiB0aGlzLm1lcmdlUG9wb3ZlclByb3BzKHRoaXMuc3RhdGUucG9wb3ZlclByb3BzLCBldmVudC5wb3BvdmVyUHJvcHMpLFxyXG4gICAgICB2YWx1ZTogZXZlbnQudmFsdWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gZXZlbnQ7XHJcbiAgICBpZiAoc3RhcnREYXRlIHx8IGVuZERhdGUpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogIXRoaXMuc3RhdGUuc2hvd092ZXJsYXkgfSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgZGlydHkgc29sdXRpb24gYW5kIGMvc2hvdWxkIGJlIGZpeGVkLlxyXG4gICAqIFJvb3QgY2F1c2U6IGRheS1waWNrZXIgaXMgcmVuZGVyZWQgdG8gcm9vdCBlbGVtZW50LCBub3QgaW5zaWRlIHBvcG92ZXIgZWxlZW1udC5cclxuICAgKiBUaGVyZWZvcmUgY2xpY2sgY29taW5nIGZvcm0gZGF5LXBpY2tlciBhcmUgY29uc2lkZXJzIGFzIG91dHNpZGUgY2xpY2sgb2YgcG9wb3ZlclxyXG4gICAqIGFuZCBwb3BvdmVyIHdvdWxkIGJlIGNsb3NlIHdpdGhvdXQgZXZlbnQgcHJldmVudERlZmF1bHQuXHJcbiAgICogT25lIHNvbHV0aW9uIGlzIHBhc3NpbmcgYXQgbGVhc3QgdHJlZSBjYWxsYmFja3MgZm9yIHJlYWN0LWRhdGV0aW1lOiBvbldlZWtDbGljayxcclxuICAgKiBvbkNhcHRpb25DbGljayBhbmQgY3VzdG9tIG9uQ2xpY2sgZm9yIGN1c3RvbSBjYXB0aW9uIG9mIHJlYWN0LWRhdGV0aW1lLlxyXG4gICAqL1xyXG4gIGhhbmRsZUhpZGUgPSBlID0+IChcclxuICAgIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnBhcmVudE5vZGUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoJ0RheVBpY2tlcicpID9cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIDpcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPdmVybGF5OiBmYWxzZSB9KVxyXG4gICk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICBpZCxcclxuICAgICAgaW5wdXRSZWYsXHJcbiAgICAgIGlucHV0UHJvcHMsXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgRGF0ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICAgIHdpZHRoOiAke3dpZHRofTtcclxuICAgIGA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgPFJlYWRPbmx5SW5wdXQ+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xyXG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9SZWFkT25seUlucHV0PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXHJcbiAgICAgICAgPE92ZXJsYXlcclxuICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd092ZXJsYXl9XHJcbiAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlSGlkZX1cclxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICBjb250YWluZXI9e3RoaXN9XHJcbiAgICAgICAgICByb290Q2xvc2VcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RGF0ZVJhbmdlUG9wb3ZlclxyXG4gICAgICAgICAgICB7Li4udGhpcy5tZXJnZVBvcG92ZXJQcm9wcyh0aGlzLnByb3BzLnBvcG92ZXJQcm9wcywgdGhpcy5zdGF0ZS5wb3BvdmVyUHJvcHMpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvT3ZlcmxheT59XHJcbiAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==