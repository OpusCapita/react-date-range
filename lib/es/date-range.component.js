var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n'], ['\n  .form-control[readonly] {\n    background-color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      width: ', ';\n    '], ['\n      width: ', ';\n    ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import moment from 'moment';
import { FormControl, Overlay } from 'react-bootstrap';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import DateRangePopover from './popover/date-range-popover.component';
import popoverPropTypes from './popover/prop-types';
import popoverDefaultProps from './popover/default-props';

var ReadOnlyInput = styled.div(_templateObject, theme.contentBackgroundColor);

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


    var DateRangeSection = styled.div(_templateObject2, width);

    return React.createElement(
      ThemeProvider,
      { theme: theme },
      React.createElement(
        DateRangeSection,
        { id: id, className: className },
        React.createElement(
          ReadOnlyInput,
          null,
          React.createElement(FormControl, _extends({
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
        this.state.showOverlay && React.createElement(
          Overlay,
          {
            show: this.state.showOverlay,
            onHide: this.handleHide,
            placement: 'bottom',
            container: this,
            rootClose: true
          },
          React.createElement(DateRangePopover, _extends({}, this.mergePopoverProps(this.props.popoverProps, this.state.popoverProps), {
            onChange: this.handleChange
          }))
        )
      )
    );
  };

  return DateRange;
}(React.PureComponent), _class.defaultProps = {
  className: '',
  inputProps: {},
  inputRef: function inputRef() {},
  onChange: function onChange() {},
  popoverProps: popoverDefaultProps,
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
      var from = moment.utc(startDate);
      var to = moment.utc(endDate);
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
export { DateRange as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwibW9tZW50IiwiRm9ybUNvbnRyb2wiLCJPdmVybGF5IiwidGhlbWUiLCJEYXRlUmFuZ2VQb3BvdmVyIiwicG9wb3ZlclByb3BUeXBlcyIsInBvcG92ZXJEZWZhdWx0UHJvcHMiLCJSZWFkT25seUlucHV0IiwiZGl2IiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwidmFsdWUiLCJpbml0VmFsdWUiLCJzdGF0ZSIsInNob3dPdmVybGF5IiwicG9wb3ZlclByb3BzIiwidW5kZWZpbmVkIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwiaWQiLCJpbnB1dFJlZiIsImlucHV0UHJvcHMiLCJ3aWR0aCIsIkRhdGVSYW5nZVNlY3Rpb24iLCJlbCIsImlucHV0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVIaWRlIiwibWVyZ2VQb3BvdmVyUHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzZXRTdGF0ZSIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJhYnNvbHV0ZVJhbmdlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZm9ybWF0IiwiaXNSZWxhdGl2ZUVuYWJsZWQiLCJyZWxhdGl2ZVJhbmdlIiwibGFiZWwiLCJ0YXJnZXQiLCJzb3VyY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudCIsImUiLCJwYXJlbnROb2RlIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQ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QThCdUMsUUFBOUIsQ0FBdUMsV0FBdkMsQ0FBcEUsR0FDRUYsRUFBRUcsY0FBRixFQURGLEdBRUUsT0FBS3ZCLFFBQUwsQ0FBYyxFQUFFckIsYUFBYSxLQUFmLEVBQWQsQ0FIUztBQUFBLEc7O1NBeEdNTCxTIiwiZmlsZSI6ImRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBPdmVybGF5IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XHJcbmltcG9ydCBEYXRlUmFuZ2VQb3BvdmVyIGZyb20gJy4vcG9wb3Zlci9kYXRlLXJhbmdlLXBvcG92ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHBvcG92ZXJQcm9wVHlwZXMgZnJvbSAnLi9wb3BvdmVyL3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgcG9wb3ZlckRlZmF1bHRQcm9wcyBmcm9tICcuL3BvcG92ZXIvZGVmYXVsdC1wcm9wcyc7XHJcblxyXG5jb25zdCBSZWFkT25seUlucHV0ID0gc3R5bGVkLmRpdmBcclxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLnNoYXBlKHBvcG92ZXJQcm9wVHlwZXMpLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICBpbnB1dFByb3BzOiB7fSxcclxuICAgIGlucHV0UmVmOiAoKSA9PiB7fSxcclxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICAgIHBvcG92ZXJQcm9wczogcG9wb3ZlckRlZmF1bHRQcm9wcyxcclxuICAgIHdpZHRoOiAnMjAwcHgnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5pdFZhbHVlKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIHBvcG92ZXJQcm9wczogdW5kZWZpbmVkLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMpID0+IHtcclxuICAgIGlmIChwcmV2UHJvcHMucG9wb3ZlclByb3BzICE9PSB0aGlzLnByb3BzLnBvcG92ZXJQcm9wcykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5pdFZhbHVlKHRoaXMucHJvcHMpO1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRWYWx1ZSA9IHByb3BzID0+IChcclxuICAgIHRoaXMuaW5pdEFic29sdXRlUmFuZ2UocHJvcHMpIHx8IHRoaXMuaW5pdFJlbGF0aXZlUmFuZ2UocHJvcHMpXHJcbiAgKTtcclxuXHJcbiAgaW5pdEFic29sdXRlUmFuZ2UgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gcHJvcHMucG9wb3ZlclByb3BzIHx8IHt9O1xyXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUsIGRhdGVGb3JtYXQgfSA9IGFic29sdXRlUmFuZ2UgfHwge307XHJcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcclxuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcclxuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xyXG4gICAgICByZXR1cm4gKGZyb20uaXNWYWxpZCgpICYmIHRvLmlzVmFsaWQoKSkgP1xyXG4gICAgICAgIGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAgOiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaW5pdFJlbGF0aXZlUmFuZ2UgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaXNSZWxhdGl2ZUVuYWJsZWQsXHJcbiAgICAgIHJlbGF0aXZlUmFuZ2UsXHJcbiAgICB9ID0gcHJvcHMucG9wb3ZlclByb3BzIHx8IHt9O1xyXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XHJcbiAgICByZXR1cm4gKGlzUmVsYXRpdmVFbmFibGVkICYmIGVuZERhdGUgJiYgc3RhcnREYXRlKSA/XHJcbiAgICAgIGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWx9YCA6ICcnO1xyXG4gIH1cclxuXHJcbiAgbWVyZ2VQb3BvdmVyUHJvcHMgPSAodGFyZ2V0ID0ge30sIHNvdXJjZSA9IHt9KSA9PiAoXHJcbiAgICBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7fSxcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICBzb3VyY2UsXHJcbiAgICAgIHtcclxuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XHJcbiAgICAgICAgICAuLi50YXJnZXQuYWJzb2x1dGVSYW5nZSB8fCB7fSxcclxuICAgICAgICAgIC4uLnNvdXJjZS5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xyXG4gICAgICAgICAgLi4udGFyZ2V0LnJlbGF0aXZlUmFuZ2UgfHwge30sXHJcbiAgICAgICAgICAuLi5zb3VyY2UucmVsYXRpdmVSYW5nZSB8fCB7fSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgKSk7XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBvcG92ZXJQcm9wczogdGhpcy5tZXJnZVBvcG92ZXJQcm9wcyh0aGlzLnN0YXRlLnBvcG92ZXJQcm9wcywgZXZlbnQucG9wb3ZlclByb3BzKSxcclxuICAgICAgdmFsdWU6IGV2ZW50LnZhbHVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IGV2ZW50O1xyXG4gICAgaWYgKHN0YXJ0RGF0ZSB8fCBlbmREYXRlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6ICF0aGlzLnN0YXRlLnNob3dPdmVybGF5IH0pO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGlzIGRpcnR5IHNvbHV0aW9uIGFuZCBjL3Nob3VsZCBiZSBmaXhlZC5cclxuICAgKiBSb290IGNhdXNlOiBkYXktcGlja2VyIGlzIHJlbmRlcmVkIHRvIHJvb3QgZWxlbWVudCwgbm90IGluc2lkZSBwb3BvdmVyIGVsZWVtbnQuXHJcbiAgICogVGhlcmVmb3JlIGNsaWNrIGNvbWluZyBmb3JtIGRheS1waWNrZXIgYXJlIGNvbnNpZGVycyBhcyBvdXRzaWRlIGNsaWNrIG9mIHBvcG92ZXJcclxuICAgKiBhbmQgcG9wb3ZlciB3b3VsZCBiZSBjbG9zZSB3aXRob3V0IGV2ZW50IHByZXZlbnREZWZhdWx0LlxyXG4gICAqIE9uZSBzb2x1dGlvbiBpcyBwYXNzaW5nIGF0IGxlYXN0IHRyZWUgY2FsbGJhY2tzIGZvciByZWFjdC1kYXRldGltZTogb25XZWVrQ2xpY2ssXHJcbiAgICogb25DYXB0aW9uQ2xpY2sgYW5kIGN1c3RvbSBvbkNsaWNrIGZvciBjdXN0b20gY2FwdGlvbiBvZiByZWFjdC1kYXRldGltZS5cclxuICAgKi9cclxuICBoYW5kbGVIaWRlID0gZSA9PiAoXHJcbiAgICBlLnRhcmdldCAmJiBlLnRhcmdldC5wYXJlbnROb2RlICYmIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lICYmIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lLmluY2x1ZGVzKCdEYXlQaWNrZXInKSA/XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKSA6XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogZmFsc2UgfSlcclxuICApO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgaWQsXHJcbiAgICAgIGlucHV0UmVmLFxyXG4gICAgICBpbnB1dFByb3BzLFxyXG4gICAgICB3aWR0aCxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgICB3aWR0aDogJHt3aWR0aH07XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgICAgICA8UmVhZE9ubHlJbnB1dD5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcclxuICAgICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1JlYWRPbmx5SW5wdXQ+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxyXG4gICAgICAgICAgPE92ZXJsYXlcclxuICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93T3ZlcmxheX1cclxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUhpZGV9XHJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcj17dGhpc31cclxuICAgICAgICAgICAgcm9vdENsb3NlXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxEYXRlUmFuZ2VQb3BvdmVyXHJcbiAgICAgICAgICAgICAgey4uLnRoaXMubWVyZ2VQb3BvdmVyUHJvcHModGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMsIHRoaXMuc3RhdGUucG9wb3ZlclByb3BzKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L092ZXJsYXk+fVxyXG4gICAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19