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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJUaGVtZVByb3ZpZGVyIiwibW9tZW50IiwiRm9ybUNvbnRyb2wiLCJPdmVybGF5IiwidGhlbWUiLCJEYXRlUmFuZ2VQb3BvdmVyIiwicG9wb3ZlclByb3BUeXBlcyIsInBvcG92ZXJEZWZhdWx0UHJvcHMiLCJSZWFkT25seUlucHV0IiwiZGl2IiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwidmFsdWUiLCJpbml0VmFsdWUiLCJzdGF0ZSIsInNob3dPdmVybGF5IiwicG9wb3ZlclByb3BzIiwidW5kZWZpbmVkIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwiaWQiLCJpbnB1dFJlZiIsImlucHV0UHJvcHMiLCJ3aWR0aCIsIkRhdGVSYW5nZVNlY3Rpb24iLCJlbCIsImlucHV0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVIaWRlIiwibWVyZ2VQb3BvdmVyUHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwib25DaGFuZ2UiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzZXRTdGF0ZSIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJhYnNvbHV0ZVJhbmdlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZm9ybWF0IiwiaXNSZWxhdGl2ZUVuYWJsZWQiLCJyZWxhdGl2ZVJhbmdlIiwibGFiZWwiLCJ0YXJnZXQiLCJzb3VyY2UiLCJPYmplY3QiLCJhc3NpZ24iLCJldmVudCIsImUiLCJwYXJlbnROb2RlIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsSUFBaUJDLGFBQWpCLFFBQXNDLG1CQUF0QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxPQUF0QixRQUFxQyxpQkFBckM7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtDQUF0QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHdDQUE3QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHNCQUE3QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHlCQUFoQzs7QUFFQSxJQUFNQyxnQkFBZ0JULE9BQU9VLEdBQXZCLGtCQUVrQkwsTUFBTU0sc0JBRnhCLENBQU47O0lBTXFCQyxTOzs7QUFvQm5CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBOztBQUVqQixRQUFNQyxRQUFRLE1BQUtDLFNBQUwsQ0FBZUYsS0FBZixDQUFkO0FBQ0EsVUFBS0csS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLEtBREY7QUFFWEgsa0JBRlc7QUFHWEksb0JBQWNDO0FBSEgsS0FBYjtBQUhpQjtBQVFsQjs7QUFvRUQ7Ozs7Ozs7Ozs7c0JBY0FDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFPSCxLQUFLUCxLQVBGO0FBQUEsUUFFTFEsU0FGSyxVQUVMQSxTQUZLO0FBQUEsUUFHTEMsRUFISyxVQUdMQSxFQUhLO0FBQUEsUUFJTEMsU0FKSyxVQUlMQSxRQUpLO0FBQUEsUUFLTEMsVUFMSyxVQUtMQSxVQUxLO0FBQUEsUUFNTEMsS0FOSyxVQU1MQSxLQU5LOzs7QUFTUCxRQUFNQyxtQkFBbUIxQixPQUFPVSxHQUExQixtQkFDS2UsS0FETCxDQUFOOztBQUlBLFdBQ0U7QUFBQyxtQkFBRDtBQUFBLFFBQWUsT0FBT3BCLEtBQXRCO0FBQ0U7QUFBQyx3QkFBRDtBQUFBLFVBQWtCLElBQUlpQixFQUF0QixFQUEwQixXQUFXRCxTQUFyQztBQUNFO0FBQUMsdUJBQUQ7QUFBQTtBQUNFLDhCQUFDLFdBQUQ7QUFDRSxrQkFBSyxNQURQO0FBRUUsc0JBQVUsa0JBQUNNLEVBQUQsRUFBUTtBQUNoQixxQkFBS0MsS0FBTCxHQUFhRCxFQUFiO0FBQ0FKLHdCQUFTSSxFQUFUO0FBQ0Q7QUFMSCxhQU1NSCxVQU5OO0FBT0Usc0JBQVMsVUFQWDtBQVFFLG1CQUFPLEtBQUtSLEtBQUwsQ0FBV0YsS0FScEI7QUFTRSxxQkFBUyxLQUFLZTtBQVRoQjtBQURGLFNBREY7QUFjRyxhQUFLYixLQUFMLENBQVdDLFdBQVgsSUFDRDtBQUFDLGlCQUFEO0FBQUE7QUFDRSxrQkFBTSxLQUFLRCxLQUFMLENBQVdDLFdBRG5CO0FBRUUsb0JBQVEsS0FBS2EsVUFGZjtBQUdFLHVCQUFVLFFBSFo7QUFJRSx1QkFBVyxJQUpiO0FBS0U7QUFMRjtBQU9FLDhCQUFDLGdCQUFELGVBQ00sS0FBS0MsaUJBQUwsQ0FBdUIsS0FBS2xCLEtBQUwsQ0FBV0ssWUFBbEMsRUFBZ0QsS0FBS0YsS0FBTCxDQUFXRSxZQUEzRCxDQUROO0FBRUUsc0JBQVUsS0FBS2M7QUFGakI7QUFQRjtBQWZGO0FBREYsS0FERjtBQWdDRCxHOzs7RUEzSm9DbEMsTUFBTW1DLGEsVUFXcENDLFksR0FBZTtBQUNwQmIsYUFBVyxFQURTO0FBRXBCRyxjQUFZLEVBRlE7QUFHcEJELFlBQVUsb0JBQU0sQ0FBRSxDQUhFO0FBSXBCWSxZQUFVLG9CQUFNLENBQUUsQ0FKRTtBQUtwQmpCLGdCQUFjVixtQkFMTTtBQU1wQmlCLFNBQU87QUFOYSxDOzs7T0FtQnRCVyxrQixHQUFxQixVQUFDQyxTQUFELEVBQWU7QUFDbEMsUUFBSUEsVUFBVW5CLFlBQVYsS0FBMkIsT0FBS0wsS0FBTCxDQUFXSyxZQUExQyxFQUF3RDtBQUN0RCxVQUFNSixRQUFRLE9BQUtDLFNBQUwsQ0FBZSxPQUFLRixLQUFwQixDQUFkO0FBQ0EsVUFBSUMsS0FBSixFQUFXO0FBQ1QsZUFBS3dCLFFBQUwsQ0FBYyxFQUFFeEIsWUFBRixFQUFkO0FBQ0Q7QUFDRjtBQUNGLEc7O09BRURDLFMsR0FBWTtBQUFBLFdBQ1YsT0FBS3dCLGlCQUFMLENBQXVCMUIsS0FBdkIsS0FBaUMsT0FBSzJCLGlCQUFMLENBQXVCM0IsS0FBdkIsQ0FEdkI7QUFBQSxHOztPQUlaMEIsaUIsR0FBb0IsVUFBQzFCLEtBQUQsRUFBVztBQUFBLGVBQ0hBLE1BQU1LLFlBQU4sSUFBc0IsRUFEbkI7QUFBQSxRQUNyQnVCLGFBRHFCLFFBQ3JCQSxhQURxQjs7QUFBQSxnQkFFY0EsaUJBQWlCLEVBRi9CO0FBQUEsUUFFckJDLE9BRnFCLFNBRXJCQSxPQUZxQjtBQUFBLFFBRVpDLFNBRlksU0FFWkEsU0FGWTtBQUFBLFFBRURDLFVBRkMsU0FFREEsVUFGQzs7QUFHN0IsUUFBSUQsYUFBYUQsT0FBakIsRUFBMEI7QUFDeEIsVUFBTUcsT0FBTzNDLE9BQU80QyxHQUFQLENBQVdILFNBQVgsQ0FBYjtBQUNBLFVBQU1JLEtBQUs3QyxPQUFPNEMsR0FBUCxDQUFXSixPQUFYLENBQVg7QUFDQSxhQUFRRyxLQUFLRyxPQUFMLE1BQWtCRCxHQUFHQyxPQUFILEVBQW5CLEdBQ0ZILEtBQUtJLE1BQUwsQ0FBWUwsVUFBWixDQURFLFdBQzJCRyxHQUFHRSxNQUFILENBQVVMLFVBQVYsQ0FEM0IsR0FDcUQsRUFENUQ7QUFFRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7O09BRURKLGlCLEdBQW9CLFVBQUMzQixLQUFELEVBQVc7QUFBQSxnQkFJekJBLE1BQU1LLFlBQU4sSUFBc0IsRUFKRztBQUFBLFFBRTNCZ0MsaUJBRjJCLFNBRTNCQSxpQkFGMkI7QUFBQSxRQUczQkMsYUFIMkIsU0FHM0JBLGFBSDJCOztBQUFBLGdCQUtFQSxpQkFBaUIsRUFMbkI7QUFBQSxRQUtyQlQsT0FMcUIsU0FLckJBLE9BTHFCO0FBQUEsUUFLWkMsU0FMWSxTQUtaQSxTQUxZOztBQU03QixXQUFRTyxxQkFBcUJSLE9BQXJCLElBQWdDQyxTQUFqQyxHQUNGQSxVQUFVUyxLQURSLFdBQ21CVixRQUFRVSxLQUQzQixHQUNxQyxFQUQ1QztBQUVELEc7O09BRURyQixpQixHQUFvQjtBQUFBLFFBQUNzQixNQUFELHVFQUFVLEVBQVY7QUFBQSxRQUFjQyxNQUFkLHVFQUF1QixFQUF2QjtBQUFBLFdBQ2xCQyxPQUFPQyxNQUFQLENBQ0UsRUFERixFQUVFSCxNQUZGLEVBR0VDLE1BSEYsRUFJRTtBQUNFYixrQ0FDS1ksT0FBT1osYUFBUCxJQUF3QixFQUQ3QixFQUVLYSxPQUFPYixhQUFQLElBQXdCLEVBRjdCLENBREY7QUFLRVUsa0NBQ0tFLE9BQU9GLGFBQVAsSUFBd0IsRUFEN0IsRUFFS0csT0FBT0gsYUFBUCxJQUF3QixFQUY3QjtBQUxGLEtBSkYsQ0FEa0I7QUFBQSxHOztPQWlCcEJuQixZLEdBQWUsVUFBQ3lCLEtBQUQsRUFBVztBQUN4QixXQUFLbkIsUUFBTCxDQUFjO0FBQ1pwQixvQkFBYyxPQUFLYSxpQkFBTCxDQUF1QixPQUFLZixLQUFMLENBQVdFLFlBQWxDLEVBQWdEdUMsTUFBTXZDLFlBQXRELENBREY7QUFFWkosYUFBTzJDLE1BQU0zQztBQUZELEtBQWQ7O0FBRHdCLFFBTWhCNkIsU0FOZ0IsR0FNT2MsS0FOUCxDQU1oQmQsU0FOZ0I7QUFBQSxRQU1MRCxPQU5LLEdBTU9lLEtBTlAsQ0FNTGYsT0FOSzs7QUFPeEIsUUFBSUMsYUFBYUQsT0FBakIsRUFBMEI7QUFDeEIsYUFBSzdCLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0IsRUFBRVEsb0JBQUYsRUFBYUQsZ0JBQWIsRUFBcEI7QUFDRDtBQUNGLEc7O09BRURiLFcsR0FBYztBQUFBLFdBQU0sT0FBS1MsUUFBTCxDQUFjLEVBQUVyQixhQUFhLENBQUMsT0FBS0QsS0FBTCxDQUFXQyxXQUEzQixFQUFkLENBQU47QUFBQSxHOztPQVVkYSxVLEdBQWE7QUFBQSxXQUNYNEIsRUFBRUwsTUFBRixJQUFZSyxFQUFFTCxNQUFGLENBQVNNLFVBQXJCLElBQW1DRCxFQUFFTCxNQUFGLENBQVNNLFVBQVQsQ0FBb0J0QyxTQUF2RCxJQUFvRXFDLEVBQUVMLE1BQUYsQ0FBU00sVUFBVCxDQUFvQnRDLFNBQXBCLENBQThCdUMsUUFBOUIsQ0FBdUMsV0FBdkMsQ0FBcEUsR0FDRUYsRUFBRUcsY0FBRixFQURGLEdBRUUsT0FBS3ZCLFFBQUwsQ0FBYyxFQUFFckIsYUFBYSxLQUFmLEVBQWQsQ0FIUztBQUFBLEc7O1NBeEdNTCxTIiwiZmlsZSI6ImRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgRGF0ZVJhbmdlUG9wb3ZlciBmcm9tICcuL3BvcG92ZXIvZGF0ZS1yYW5nZS1wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgcG9wb3ZlclByb3BUeXBlcyBmcm9tICcuL3BvcG92ZXIvcHJvcC10eXBlcyc7XG5pbXBvcnQgcG9wb3ZlckRlZmF1bHRQcm9wcyBmcm9tICcuL3BvcG92ZXIvZGVmYXVsdC1wcm9wcyc7XG5cbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLnNoYXBlKHBvcG92ZXJQcm9wVHlwZXMpLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHBvcG92ZXJQcm9wczogcG9wb3ZlckRlZmF1bHRQcm9wcyxcbiAgICB3aWR0aDogJzIwMHB4JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaW5pdFZhbHVlKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgICAgdmFsdWUsXG4gICAgICBwb3BvdmVyUHJvcHM6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcykgPT4ge1xuICAgIGlmIChwcmV2UHJvcHMucG9wb3ZlclByb3BzICE9PSB0aGlzLnByb3BzLnBvcG92ZXJQcm9wcykge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmluaXRWYWx1ZSh0aGlzLnByb3BzKTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5pdFZhbHVlID0gcHJvcHMgPT4gKFxuICAgIHRoaXMuaW5pdEFic29sdXRlUmFuZ2UocHJvcHMpIHx8IHRoaXMuaW5pdFJlbGF0aXZlUmFuZ2UocHJvcHMpXG4gICk7XG5cbiAgaW5pdEFic29sdXRlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2UgfSA9IHByb3BzLnBvcG92ZXJQcm9wcyB8fCB7fTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgZGF0ZUZvcm1hdCB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICByZXR1cm4gKGZyb20uaXNWYWxpZCgpICYmIHRvLmlzVmFsaWQoKSkgP1xuICAgICAgICBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gIDogJyc7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaW5pdFJlbGF0aXZlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpc1JlbGF0aXZlRW5hYmxlZCxcbiAgICAgIHJlbGF0aXZlUmFuZ2UsXG4gICAgfSA9IHByb3BzLnBvcG92ZXJQcm9wcyB8fCB7fTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcbiAgICByZXR1cm4gKGlzUmVsYXRpdmVFbmFibGVkICYmIGVuZERhdGUgJiYgc3RhcnREYXRlKSA/XG4gICAgICBgJHtzdGFydERhdGUubGFiZWx9IC0gJHtlbmREYXRlLmxhYmVsfWAgOiAnJztcbiAgfVxuXG4gIG1lcmdlUG9wb3ZlclByb3BzID0gKHRhcmdldCA9IHt9LCBzb3VyY2UgPSB7fSkgPT4gKFxuICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRhcmdldCxcbiAgICAgIHNvdXJjZSxcbiAgICAgIHtcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLnRhcmdldC5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxuICAgICAgICAgIC4uLnNvdXJjZS5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4udGFyZ2V0LnJlbGF0aXZlUmFuZ2UgfHwge30sXG4gICAgICAgICAgLi4uc291cmNlLnJlbGF0aXZlUmFuZ2UgfHwge30sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICkpO1xuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9wb3ZlclByb3BzOiB0aGlzLm1lcmdlUG9wb3ZlclByb3BzKHRoaXMuc3RhdGUucG9wb3ZlclByb3BzLCBldmVudC5wb3BvdmVyUHJvcHMpLFxuICAgICAgdmFsdWU6IGV2ZW50LnZhbHVlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IGV2ZW50O1xuICAgIGlmIChzdGFydERhdGUgfHwgZW5kRGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6ICF0aGlzLnN0YXRlLnNob3dPdmVybGF5IH0pO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGRpcnR5IHNvbHV0aW9uIGFuZCBjL3Nob3VsZCBiZSBmaXhlZC5cbiAgICogUm9vdCBjYXVzZTogZGF5LXBpY2tlciBpcyByZW5kZXJlZCB0byByb290IGVsZW1lbnQsIG5vdCBpbnNpZGUgcG9wb3ZlciBlbGVlbW50LlxuICAgKiBUaGVyZWZvcmUgY2xpY2sgY29taW5nIGZvcm0gZGF5LXBpY2tlciBhcmUgY29uc2lkZXJzIGFzIG91dHNpZGUgY2xpY2sgb2YgcG9wb3ZlclxuICAgKiBhbmQgcG9wb3ZlciB3b3VsZCBiZSBjbG9zZSB3aXRob3V0IGV2ZW50IHByZXZlbnREZWZhdWx0LlxuICAgKiBPbmUgc29sdXRpb24gaXMgcGFzc2luZyBhdCBsZWFzdCB0cmVlIGNhbGxiYWNrcyBmb3IgcmVhY3QtZGF0ZXRpbWU6IG9uV2Vla0NsaWNrLFxuICAgKiBvbkNhcHRpb25DbGljayBhbmQgY3VzdG9tIG9uQ2xpY2sgZm9yIGN1c3RvbSBjYXB0aW9uIG9mIHJlYWN0LWRhdGV0aW1lLlxuICAgKi9cbiAgaGFuZGxlSGlkZSA9IGUgPT4gKFxuICAgIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnBhcmVudE5vZGUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoJ0RheVBpY2tlcicpID9cbiAgICAgIGUucHJldmVudERlZmF1bHQoKSA6XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6IGZhbHNlIH0pXG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGlkLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBEYXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICAgIHdpZHRoOiAke3dpZHRofTtcbiAgICBgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxEYXRlUmFuZ2VTZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxSZWFkT25seUlucHV0PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgICByZWFkT25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUmVhZE9ubHlJbnB1dD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93T3ZlcmxheSAmJlxuICAgICAgICAgIDxPdmVybGF5XG4gICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLnNob3dPdmVybGF5fVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUhpZGV9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgY29udGFpbmVyPXt0aGlzfVxuICAgICAgICAgICAgcm9vdENsb3NlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcbiAgICAgICAgICAgICAgey4uLnRoaXMubWVyZ2VQb3BvdmVyUHJvcHModGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMsIHRoaXMuc3RhdGUucG9wb3ZlclByb3BzKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L092ZXJsYXk+fVxuICAgICAgICA8L0RhdGVSYW5nZVNlY3Rpb24+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19