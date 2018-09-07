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
import styled from 'styled-components';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJtb21lbnQiLCJGb3JtQ29udHJvbCIsIk92ZXJsYXkiLCJ0aGVtZSIsIkRhdGVSYW5nZVBvcG92ZXIiLCJwb3BvdmVyUHJvcFR5cGVzIiwicG9wb3ZlckRlZmF1bHRQcm9wcyIsIlJlYWRPbmx5SW5wdXQiLCJkaXYiLCJjb250ZW50QmFja2dyb3VuZENvbG9yIiwiRGF0ZVJhbmdlIiwicHJvcHMiLCJ2YWx1ZSIsImluaXRWYWx1ZSIsInN0YXRlIiwic2hvd092ZXJsYXkiLCJwb3BvdmVyUHJvcHMiLCJ1bmRlZmluZWQiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJpZCIsImlucHV0UmVmIiwiaW5wdXRQcm9wcyIsIndpZHRoIiwiRGF0ZVJhbmdlU2VjdGlvbiIsImVsIiwiaW5wdXQiLCJoYW5kbGVDbGljayIsImhhbmRsZUhpZGUiLCJtZXJnZVBvcG92ZXJQcm9wcyIsImhhbmRsZUNoYW5nZSIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInNldFN0YXRlIiwiaW5pdEFic29sdXRlUmFuZ2UiLCJpbml0UmVsYXRpdmVSYW5nZSIsImFic29sdXRlUmFuZ2UiLCJlbmREYXRlIiwic3RhcnREYXRlIiwiZGF0ZUZvcm1hdCIsImZyb20iLCJ1dGMiLCJ0byIsImlzVmFsaWQiLCJmb3JtYXQiLCJpc1JlbGF0aXZlRW5hYmxlZCIsInJlbGF0aXZlUmFuZ2UiLCJsYWJlbCIsInRhcmdldCIsInNvdXJjZSIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50IiwiZSIsInBhcmVudE5vZGUiLCJpbmNsdWRlcyIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQ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eEdNTCxTIiwiZmlsZSI6ImRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgT3ZlcmxheSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbmltcG9ydCBEYXRlUmFuZ2VQb3BvdmVyIGZyb20gJy4vcG9wb3Zlci9kYXRlLXJhbmdlLXBvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCBwb3BvdmVyUHJvcFR5cGVzIGZyb20gJy4vcG9wb3Zlci9wcm9wLXR5cGVzJztcbmltcG9ydCBwb3BvdmVyRGVmYXVsdFByb3BzIGZyb20gJy4vcG9wb3Zlci9kZWZhdWx0LXByb3BzJztcblxuY29uc3QgUmVhZE9ubHlJbnB1dCA9IHN0eWxlZC5kaXZgXG4gIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcG9wb3ZlclByb3BzOiBQcm9wVHlwZXMuc2hhcGUocG9wb3ZlclByb3BUeXBlcyksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmOiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgcG9wb3ZlclByb3BzOiBwb3BvdmVyRGVmYXVsdFByb3BzLFxuICAgIHdpZHRoOiAnMjAwcHgnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbml0VmFsdWUocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgICB2YWx1ZSxcbiAgICAgIHBvcG92ZXJQcm9wczogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5pdFZhbHVlKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0VmFsdWUgPSBwcm9wcyA9PiAoXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcylcbiAgKTtcblxuICBpbml0QWJzb2x1dGVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gcHJvcHMucG9wb3ZlclByb3BzIHx8IHt9O1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlLCBkYXRlRm9ybWF0IH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIHJldHVybiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSA/XG4gICAgICAgIGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbml0UmVsYXRpdmVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzUmVsYXRpdmVFbmFibGVkLFxuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICB9ID0gcHJvcHMucG9wb3ZlclByb3BzIHx8IHt9O1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuICAgIHJldHVybiAoaXNSZWxhdGl2ZUVuYWJsZWQgJiYgZW5kRGF0ZSAmJiBzdGFydERhdGUpID9cbiAgICAgIGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWx9YCA6ICcnO1xuICB9XG5cbiAgbWVyZ2VQb3BvdmVyUHJvcHMgPSAodGFyZ2V0ID0ge30sIHNvdXJjZSA9IHt9KSA9PiAoXG4gICAgT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGFyZ2V0LFxuICAgICAgc291cmNlLFxuICAgICAge1xuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgLi4udGFyZ2V0LmFic29sdXRlUmFuZ2UgfHwge30sXG4gICAgICAgICAgLi4uc291cmNlLmFic29sdXRlUmFuZ2UgfHwge30sXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICAuLi50YXJnZXQucmVsYXRpdmVSYW5nZSB8fCB7fSxcbiAgICAgICAgICAuLi5zb3VyY2UucmVsYXRpdmVSYW5nZSB8fCB7fSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgKSk7XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwb3BvdmVyUHJvcHM6IHRoaXMubWVyZ2VQb3BvdmVyUHJvcHModGhpcy5zdGF0ZS5wb3BvdmVyUHJvcHMsIGV2ZW50LnBvcG92ZXJQcm9wcyksXG4gICAgICB2YWx1ZTogZXZlbnQudmFsdWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gZXZlbnQ7XG4gICAgaWYgKHN0YXJ0RGF0ZSB8fCBlbmREYXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogIXRoaXMuc3RhdGUuc2hvd092ZXJsYXkgfSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgZGlydHkgc29sdXRpb24gYW5kIGMvc2hvdWxkIGJlIGZpeGVkLlxuICAgKiBSb290IGNhdXNlOiBkYXktcGlja2VyIGlzIHJlbmRlcmVkIHRvIHJvb3QgZWxlbWVudCwgbm90IGluc2lkZSBwb3BvdmVyIGVsZWVtbnQuXG4gICAqIFRoZXJlZm9yZSBjbGljayBjb21pbmcgZm9ybSBkYXktcGlja2VyIGFyZSBjb25zaWRlcnMgYXMgb3V0c2lkZSBjbGljayBvZiBwb3BvdmVyXG4gICAqIGFuZCBwb3BvdmVyIHdvdWxkIGJlIGNsb3NlIHdpdGhvdXQgZXZlbnQgcHJldmVudERlZmF1bHQuXG4gICAqIE9uZSBzb2x1dGlvbiBpcyBwYXNzaW5nIGF0IGxlYXN0IHRyZWUgY2FsbGJhY2tzIGZvciByZWFjdC1kYXRldGltZTogb25XZWVrQ2xpY2ssXG4gICAqIG9uQ2FwdGlvbkNsaWNrIGFuZCBjdXN0b20gb25DbGljayBmb3IgY3VzdG9tIGNhcHRpb24gb2YgcmVhY3QtZGF0ZXRpbWUuXG4gICAqL1xuICBoYW5kbGVIaWRlID0gZSA9PiAoXG4gICAgZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50Tm9kZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmNsdWRlcygnRGF5UGlja2VyJykgP1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIDpcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogZmFsc2UgfSlcbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWQsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6ICR7d2lkdGh9O1xuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxSZWFkT25seUlucHV0PlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUmVhZE9ubHlJbnB1dD5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd092ZXJsYXkgJiZcbiAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dPdmVybGF5fVxuICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVIaWRlfVxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgY29udGFpbmVyPXt0aGlzfVxuICAgICAgICAgIHJvb3RDbG9zZVxuICAgICAgICA+XG4gICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcbiAgICAgICAgICAgIHsuLi50aGlzLm1lcmdlUG9wb3ZlclByb3BzKHRoaXMucHJvcHMucG9wb3ZlclByb3BzLCB0aGlzLnN0YXRlLnBvcG92ZXJQcm9wcyl9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9PdmVybGF5Pn1cbiAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iXX0=