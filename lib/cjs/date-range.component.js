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

var _constants = require('./components/relative/constants');

var _constants2 = _interopRequireDefault(_constants);

var _dateRangePopover = require('./popover/date-range-popover.component');

var _dateRangePopover2 = _interopRequireDefault(_dateRangePopover);

var _propTypes3 = require('./popover/prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _defaultProps = require('./popover/default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _relativeOptions = require('./components/relative/relative-options');

var _relativeOptions2 = _interopRequireDefault(_relativeOptions);

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

    var state = _this.initState(props);
    _this.state = _extends({
      popoverProps: undefined
    }, state, {
      showOverlay: false
    });
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
            onRangeTypeChange: this.handleRangeTypeChange,
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
      var state = _this3.initState(_this3.props);
      if (state) {
        _this3.setState(state);
      }
    }
  };

  this.getAbsoluteRange = function () {
    var _ref = _this3.state || {},
        popoverProps = _ref.popoverProps;

    var _ref2 = popoverProps || {},
        absoluteRange = _ref2.absoluteRange;

    var _ref3 = absoluteRange || {},
        endDate = _ref3.endDate,
        startDate = _ref3.startDate;

    var dateFormat = _this3.props.popoverProps.absoluteRange.dateFormat;

    if (startDate && endDate) {
      var from = _moment2.default.utc(startDate);
      var to = _moment2.default.utc(endDate);
      if (from.isValid() && to.isValid()) {
        return {
          endDate: to.endOf('day').toISOString(),
          startDate: from.startOf('day').toISOString(),
          value: from.format(dateFormat) + ' - ' + to.format(dateFormat)
        };
      }
    }
    return null;
  };

  this.getRelativeOption = function (inputDate) {
    return inputDate ? _relativeOptions2.default.find(function (option) {
      return (!option.value.moment || option.value.moment === inputDate.moment) && option.value.unit === inputDate.unit && option.value.timing === inputDate.timing;
    }) : undefined;
  };

  this.getRelativeRange = function () {
    var popoverProps = _this3.state.popoverProps;

    var _ref4 = popoverProps || {},
        relativeRange = _ref4.relativeRange;

    var _ref5 = relativeRange || {},
        endDate = _ref5.endDate,
        startDate = _ref5.startDate;

    if (endDate && startDate && endDate.value && startDate.value) {
      return {
        endDate: _extends({}, endDate.value, { moment: endDate.value.moment || _constants2.default.END }),
        startDate: _extends({}, startDate.value, { moment: startDate.value.moment || _constants2.default.START }),
        value: startDate.label + ' - ' + endDate.label
      };
    }
    return null;
  };

  this.initState = function (props) {
    return _this3.initAbsoluteRange(props) || _this3.initRelativeRange(props);
  };

  this.initAbsoluteRange = function (props) {
    var _ref6 = props.popoverProps || {},
        absoluteRange = _ref6.absoluteRange;

    var _ref7 = absoluteRange || {},
        endDate = _ref7.endDate,
        startDate = _ref7.startDate,
        dateFormat = _ref7.dateFormat;

    if (startDate && endDate) {
      var from = _moment2.default.utc(startDate);
      var to = _moment2.default.utc(endDate);
      return {
        popoverProps: {
          absoluteRange: {
            endDate: to.endOf('day').toISOString(),
            startDate: from.startOf('day').toISOString()
          },
          selectedRangeType: 'absolute'
        },
        value: from.isValid() && to.isValid() ? from.format(dateFormat) + ' - ' + to.format(dateFormat) : ''
      };
    }
    return null;
  };

  this.initRelativeRange = function (props) {
    var _ref8 = props.popoverProps || {},
        isRelativeEnabled = _ref8.isRelativeEnabled,
        relativeRange = _ref8.relativeRange;

    var _ref9 = relativeRange || {},
        endDate = _ref9.endDate,
        startDate = _ref9.startDate;

    var selectedStartDate = _this3.getRelativeOption(startDate);
    var selectedEndDate = _this3.getRelativeOption(endDate);

    return {
      popoverProps: {
        relativeRange: {
          endDate: selectedEndDate,
          startDate: selectedStartDate
        },
        selectedRangeType: selectedEndDate && selectedStartDate ? 'relative' : undefined
      },
      value: isRelativeEnabled && selectedEndDate && selectedStartDate ? selectedStartDate.label + ' - ' + selectedEndDate.label : ''
    };
  };

  this.mergePopoverProps = function () {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Object.assign({}, target, source, {
      absoluteRange: _extends({}, target.absoluteRange || {}, source.absoluteRange || {}),
      relativeRange: _extends({}, target.relativeRange || {}, source.relativeRange || {})
    });
  };

  this.handleRangeTypeChange = function (event) {
    var onChange = _this3.props.onChange;
    var popoverProps = _this3.state.popoverProps;

    var range = event.popoverProps.selectedRangeType === 'absolute' ? _this3.getAbsoluteRange() : _this3.getRelativeRange();
    _this3.setState({
      popoverProps: _this3.mergePopoverProps(popoverProps, event.popoverProps),
      value: range ? range.value : ''
    });

    var _ref10 = range || {},
        startDate = _ref10.startDate,
        endDate = _ref10.endDate;

    if (startDate && endDate) {
      onChange({ startDate: startDate, endDate: endDate });
    }
  };

  this.handleChange = function (event) {
    var onChange = _this3.props.onChange;
    var popoverProps = _this3.state.popoverProps;

    _this3.setState({
      popoverProps: _this3.mergePopoverProps(popoverProps, event.popoverProps),
      value: event.value
    });

    var startDate = event.startDate,
        endDate = event.endDate;

    if (startDate && endDate) {
      onChange({ startDate: startDate, endDate: endDate });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwic3RhdGUiLCJpbml0U3RhdGUiLCJwb3BvdmVyUHJvcHMiLCJ1bmRlZmluZWQiLCJzaG93T3ZlcmxheSIsInJlbmRlciIsImNsYXNzTmFtZSIsImlkIiwiaW5wdXRSZWYiLCJpbnB1dFByb3BzIiwid2lkdGgiLCJEYXRlUmFuZ2VTZWN0aW9uIiwiZWwiLCJpbnB1dCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVIaWRlIiwibWVyZ2VQb3BvdmVyUHJvcHMiLCJoYW5kbGVSYW5nZVR5cGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkNoYW5nZSIsInBvcG92ZXJEZWZhdWx0UHJvcHMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzZXRTdGF0ZSIsImdldEFic29sdXRlUmFuZ2UiLCJhYnNvbHV0ZVJhbmdlIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsImRhdGVGb3JtYXQiLCJmcm9tIiwibW9tZW50IiwidXRjIiwidG8iLCJpc1ZhbGlkIiwiZW5kT2YiLCJ0b0lTT1N0cmluZyIsInN0YXJ0T2YiLCJmb3JtYXQiLCJnZXRSZWxhdGl2ZU9wdGlvbiIsImlucHV0RGF0ZSIsInJlbGF0aXZlT3B0aW9ucyIsImZpbmQiLCJvcHRpb24iLCJ1bml0IiwidGltaW5nIiwiZ2V0UmVsYXRpdmVSYW5nZSIsInJlbGF0aXZlUmFuZ2UiLCJDb25zdGFudHMiLCJFTkQiLCJTVEFSVCIsImxhYmVsIiwiaW5pdEFic29sdXRlUmFuZ2UiLCJpbml0UmVsYXRpdmVSYW5nZSIsInNlbGVjdGVkUmFuZ2VUeXBlIiwiaXNSZWxhdGl2ZUVuYWJsZWQiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsInNlbGVjdGVkRW5kRGF0ZSIsInRhcmdldCIsInNvdXJjZSIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50IiwicmFuZ2UiLCJlIiwicGFyZW50Tm9kZSIsImluY2x1ZGVzIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OzBGQVhBOzs7QUFhQSxJQUFNQSxnQkFBZ0JDLDJCQUFPQyxHQUF2QixrQkFFa0JDLHlCQUFNQyxzQkFGeEIsQ0FBTjs7SUFNcUJDLFM7OztBQW9CbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBRWpCLFFBQU1DLFFBQVEsTUFBS0MsU0FBTCxDQUFlRixLQUFmLENBQWQ7QUFDQSxVQUFLQyxLQUFMO0FBQ0VFLG9CQUFjQztBQURoQixPQUVLSCxLQUZMO0FBR0VJLG1CQUFhO0FBSGY7QUFIaUI7QUFRbEI7O0FBdUpEOzs7Ozs7Ozs7O3NCQWNBQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBT0gsS0FBS04sS0FQRjtBQUFBLFFBRUxPLFNBRkssVUFFTEEsU0FGSztBQUFBLFFBR0xDLEVBSEssVUFHTEEsRUFISztBQUFBLFFBSUxDLFNBSkssVUFJTEEsUUFKSztBQUFBLFFBS0xDLFVBTEssVUFLTEEsVUFMSztBQUFBLFFBTUxDLEtBTkssVUFNTEEsS0FOSzs7O0FBU1AsUUFBTUMsbUJBQW1CakIsMkJBQU9DLEdBQTFCLG1CQUNLZSxLQURMLENBQU47O0FBSUEsV0FDRTtBQUFDLHFDQUFEO0FBQUEsUUFBZSxPQUFPZCx3QkFBdEI7QUFDRTtBQUFDLHdCQUFEO0FBQUEsVUFBa0IsSUFBSVcsRUFBdEIsRUFBMEIsV0FBV0QsU0FBckM7QUFDRTtBQUFDLHVCQUFEO0FBQUE7QUFDRSx3Q0FBQywyQkFBRDtB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cG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9jb25zdGFudHMnO1xuaW1wb3J0IERhdGVSYW5nZVBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQnO1xuaW1wb3J0IHBvcG92ZXJQcm9wVHlwZXMgZnJvbSAnLi9wb3BvdmVyL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHBvcG92ZXJEZWZhdWx0UHJvcHMgZnJvbSAnLi9wb3BvdmVyL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHJlbGF0aXZlT3B0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5cbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBvcG92ZXJQcm9wczogUHJvcFR5cGVzLnNoYXBlKHBvcG92ZXJQcm9wVHlwZXMpLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHBvcG92ZXJQcm9wczogcG9wb3ZlckRlZmF1bHRQcm9wcyxcbiAgICB3aWR0aDogJzIwMHB4JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9wb3ZlclByb3BzOiB1bmRlZmluZWQsXG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcykgPT4ge1xuICAgIGlmIChwcmV2UHJvcHMucG9wb3ZlclByb3BzICE9PSB0aGlzLnByb3BzLnBvcG92ZXJQcm9wcykge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBYnNvbHV0ZVJhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcG9wb3ZlclByb3BzIH0gPSB0aGlzLnN0YXRlIHx8IHt9O1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gcG9wb3ZlclByb3BzIHx8IHt9O1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMuYWJzb2x1dGVSYW5nZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVPcHRpb24gPSBpbnB1dERhdGUgPT4gKFxuICAgIGlucHV0RGF0ZVxuICAgICAgPyByZWxhdGl2ZU9wdGlvbnMuZmluZChvcHRpb24gPT5cbiAgICAgICAgKCFvcHRpb24udmFsdWUubW9tZW50IHx8IG9wdGlvbi52YWx1ZS5tb21lbnQgPT09IGlucHV0RGF0ZS5tb21lbnQpXG4gICAgICAgICYmIG9wdGlvbi52YWx1ZS51bml0ID09PSBpbnB1dERhdGUudW5pdFxuICAgICAgICAmJiBvcHRpb24udmFsdWUudGltaW5nID09PSBpbnB1dERhdGUudGltaW5nKVxuICAgICAgOiB1bmRlZmluZWRcbiAgKVxuXG4gIGdldFJlbGF0aXZlUmFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwb3BvdmVyUHJvcHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICB9ID0gcG9wb3ZlclByb3BzIHx8IHt9O1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IGVuZERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5FTkQgfSxcbiAgICAgICAgc3RhcnREYXRlOiB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5TVEFSVCB9LFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbml0U3RhdGUgPSBwcm9wcyA9PiAoXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcylcbiAgKTtcblxuICBpbml0QWJzb2x1dGVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gcHJvcHMucG9wb3ZlclByb3BzIHx8IHt9O1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlLCBkYXRlRm9ybWF0IH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogJ2Fic29sdXRlJyxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IChmcm9tLmlzVmFsaWQoKSAmJiB0by5pc1ZhbGlkKCkpID9cbiAgICAgICAgICBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gIDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGluaXRSZWxhdGl2ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXNSZWxhdGl2ZUVuYWJsZWQsXG4gICAgICByZWxhdGl2ZVJhbmdlLFxuICAgIH0gPSBwcm9wcy5wb3BvdmVyUHJvcHMgfHwge307XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGFydERhdGUgPSB0aGlzLmdldFJlbGF0aXZlT3B0aW9uKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0gdGhpcy5nZXRSZWxhdGl2ZU9wdGlvbihlbmREYXRlKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIGVuZERhdGU6IHNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gJ3JlbGF0aXZlJyA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICB2YWx1ZTogKGlzUmVsYXRpdmVFbmFibGVkICYmIHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSkgP1xuICAgICAgICBgJHtzZWxlY3RlZFN0YXJ0RGF0ZS5sYWJlbH0gLSAke3NlbGVjdGVkRW5kRGF0ZS5sYWJlbH1gIDogJycsXG4gICAgfTtcbiAgfVxuXG4gIG1lcmdlUG9wb3ZlclByb3BzID0gKHRhcmdldCA9IHt9LCBzb3VyY2UgPSB7fSkgPT4gKFxuICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRhcmdldCxcbiAgICAgIHNvdXJjZSxcbiAgICAgIHtcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIC4uLnRhcmdldC5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxuICAgICAgICAgIC4uLnNvdXJjZS5hYnNvbHV0ZVJhbmdlIHx8IHt9LFxuICAgICAgICB9LFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4udGFyZ2V0LnJlbGF0aXZlUmFuZ2UgfHwge30sXG4gICAgICAgICAgLi4uc291cmNlLnJlbGF0aXZlUmFuZ2UgfHwge30sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICkpO1xuXG4gIGhhbmRsZVJhbmdlVHlwZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwb3BvdmVyUHJvcHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcmFuZ2UgPSBldmVudC5wb3BvdmVyUHJvcHMuc2VsZWN0ZWRSYW5nZVR5cGUgPT09ICdhYnNvbHV0ZSdcbiAgICAgID8gdGhpcy5nZXRBYnNvbHV0ZVJhbmdlKClcbiAgICAgIDogdGhpcy5nZXRSZWxhdGl2ZVJhbmdlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwb3BvdmVyUHJvcHM6IHRoaXMubWVyZ2VQb3BvdmVyUHJvcHMocG9wb3ZlclByb3BzLCBldmVudC5wb3BvdmVyUHJvcHMpLFxuICAgICAgdmFsdWU6IHJhbmdlID8gcmFuZ2UudmFsdWUgOiAnJyxcbiAgICB9KTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gcmFuZ2UgfHwge307XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcG9wb3ZlclByb3BzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9wb3ZlclByb3BzOiB0aGlzLm1lcmdlUG9wb3ZlclByb3BzKHBvcG92ZXJQcm9wcywgZXZlbnQucG9wb3ZlclByb3BzKSxcbiAgICAgIHZhbHVlOiBldmVudC52YWx1ZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBldmVudDtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogIXRoaXMuc3RhdGUuc2hvd092ZXJsYXkgfSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgZGlydHkgc29sdXRpb24gYW5kIGMvc2hvdWxkIGJlIGZpeGVkLlxuICAgKiBSb290IGNhdXNlOiBkYXktcGlja2VyIGlzIHJlbmRlcmVkIHRvIHJvb3QgZWxlbWVudCwgbm90IGluc2lkZSBwb3BvdmVyIGVsZWVtbnQuXG4gICAqIFRoZXJlZm9yZSBjbGljayBjb21pbmcgZm9ybSBkYXktcGlja2VyIGFyZSBjb25zaWRlcnMgYXMgb3V0c2lkZSBjbGljayBvZiBwb3BvdmVyXG4gICAqIGFuZCBwb3BvdmVyIHdvdWxkIGJlIGNsb3NlIHdpdGhvdXQgZXZlbnQgcHJldmVudERlZmF1bHQuXG4gICAqIE9uZSBzb2x1dGlvbiBpcyBwYXNzaW5nIGF0IGxlYXN0IHRyZWUgY2FsbGJhY2tzIGZvciByZWFjdC1kYXRldGltZTogb25XZWVrQ2xpY2ssXG4gICAqIG9uQ2FwdGlvbkNsaWNrIGFuZCBjdXN0b20gb25DbGljayBmb3IgY3VzdG9tIGNhcHRpb24gb2YgcmVhY3QtZGF0ZXRpbWUuXG4gICAqL1xuICBoYW5kbGVIaWRlID0gZSA9PiAoXG4gICAgZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50Tm9kZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmNsdWRlcygnRGF5UGlja2VyJykgP1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIDpcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogZmFsc2UgfSlcbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaWQsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6ICR7d2lkdGh9O1xuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPFJlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFkT25seUlucHV0PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dPdmVybGF5ICYmXG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd092ZXJsYXl9XG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlSGlkZX1cbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICBjb250YWluZXI9e3RoaXN9XG4gICAgICAgICAgICByb290Q2xvc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZVJhbmdlUG9wb3ZlclxuICAgICAgICAgICAgICB7Li4udGhpcy5tZXJnZVBvcG92ZXJQcm9wcyh0aGlzLnByb3BzLnBvcG92ZXJQcm9wcywgdGhpcy5zdGF0ZS5wb3BvdmVyUHJvcHMpfVxuICAgICAgICAgICAgICBvblJhbmdlVHlwZUNoYW5nZT17dGhpcy5oYW5kbGVSYW5nZVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9PdmVybGF5Pn1cbiAgICAgICAgPC9EYXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==