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

var _defaultProps = require('./components/absolute/default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _propTypes3 = require('./components/absolute/prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _constants = require('./components/relative/constants');

var _constants2 = _interopRequireDefault(_constants);

var _dateRangePopover = require('./popover/date-range-popover.component');

var _dateRangePopover2 = _interopRequireDefault(_dateRangePopover);

var _periodLabel = require('./components/period/period-label.formatter');

var _periodLabel2 = _interopRequireDefault(_periodLabel);

var _relativeOptions = require('./components/relative/relative-options');

var _defaultProps3 = require('./components/period/default-props');

var _defaultProps4 = _interopRequireDefault(_defaultProps3);

var _propTypes5 = require('./components/period/prop-types');

var _defaultProps5 = require('./components/relative/default-props');

var _defaultProps6 = _interopRequireDefault(_defaultProps5);

var _propTypes6 = require('./components/relative/prop-types');

var _translate = require('./translations/translate');

var _translate2 = _interopRequireDefault(_translate);

var _defaultProps7 = require('./translations/default-props');

var _defaultProps8 = _interopRequireDefault(_defaultProps7);

var _propTypes7 = require('./translations/prop-types');

var _propTypes8 = _interopRequireDefault(_propTypes7);

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
    _this.state = _extends({}, state, {
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
        enabled = _props.enabled,
        id = _props.id,
        _inputRef = _props.inputRef,
        inputProps = _props.inputProps,
        translations = _props.translations,
        width = _props.width;
    var _state = this.state,
        absoluteRange = _state.absoluteRange,
        period = _state.period,
        relativeRange = _state.relativeRange,
        selectedRangeType = _state.selectedRangeType,
        showOverlay = _state.showOverlay,
        value = _state.value;


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
            value: value,
            onClick: this.handleClick
          }))
        ),
        showOverlay && _react2.default.createElement(
          _reactBootstrap.Overlay,
          {
            show: showOverlay,
            onHide: this.handleHide,
            placement: 'bottom',
            container: this,
            rootClose: true
          },
          _react2.default.createElement(_dateRangePopover2.default, {
            absoluteRange: absoluteRange,
            enabled: enabled,
            onRangeTypeChange: this.handleRangeTypeChange,
            onChange: this.handleChange,
            period: period,
            selectedRangeType: selectedRangeType,
            relativeRange: relativeRange,
            translations: translations
          })
        )
      )
    );
  };

  return DateRange;
}(_react2.default.PureComponent), _class.defaultProps = {
  absoluteRange: _defaultProps2.default,
  className: '',
  enabled: {
    absolute: true,
    period: false,
    relative: false
  },
  inputProps: {},
  inputRef: function inputRef() {},
  onChange: function onChange() {},
  period: _defaultProps4.default,
  relativeRange: _defaultProps6.default,
  translations: _defaultProps8.default,
  width: '300px'
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.componentDidUpdate = function (prevProps) {
    if (prevProps.absoluteRange !== _this3.props.absoluteRange || prevProps.relativeRange !== _this3.props.relativeRange || prevProps.period !== _this3.props.period) {
      var state = _this3.initState(_this3.props);
      if (state) {
        _this3.setState(state);
      }
    }
  };

  this.getAbsoluteState = function () {
    var absoluteRange = _this3.state.absoluteRange;

    var _ref = absoluteRange || {},
        endDate = _ref.endDate,
        startDate = _ref.startDate;

    var dateFormat = _this3.props.absoluteRange.dateFormat;

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
    return { value: '' };
  };

  this.getPeriodState = function () {
    var translations = _this3.props.translations;
    var period = _this3.state.period;

    var _ref2 = period || {},
        endDate = _ref2.endDate,
        startDate = _ref2.startDate;

    if (endDate && startDate && startDate.value) {
      return {
        endDate: _extends({}, endDate, { moment: endDate.moment || _constants2.default.END }),
        startDate: _extends({}, startDate.value, { moment: startDate.value.moment || _constants2.default.START }),
        value: (0, _periodLabel2.default)(startDate, endDate, translations)
      };
    }
    return { value: '' };
  };

  this.getRelativeState = function () {
    var relativeRange = _this3.state.relativeRange;

    var _ref3 = relativeRange || {},
        endDate = _ref3.endDate,
        startDate = _ref3.startDate;

    if (endDate && startDate && endDate.value && startDate.value) {
      return {
        endDate: _extends({}, endDate.value, { moment: endDate.value.moment || _constants2.default.END }),
        startDate: _extends({}, startDate.value, { moment: startDate.value.moment || _constants2.default.START }),
        value: startDate.label + ' - ' + endDate.label
      };
    }
    return { value: '' };
  };

  this.initState = function (props) {
    return _this3.initAbsoluteRange(props) || _this3.initRelativeRange(props) || _this3.initPeriod(props);
  };

  this.initAbsoluteRange = function (props) {
    var absoluteRange = props.absoluteRange;

    var _ref4 = absoluteRange || {},
        endDate = _ref4.endDate,
        startDate = _ref4.startDate,
        dateFormat = _ref4.dateFormat;

    var _ref5 = (_this3.state || {}).absoluteRange || {},
        showOverlay = _ref5.showOverlay;

    if (startDate && endDate) {
      var from = _moment2.default.utc(startDate);
      var to = _moment2.default.utc(endDate);
      return {
        absoluteRange: {
          showOverlay: showOverlay,
          endDate: to.endOf('day').toISOString(),
          startDate: from.startOf('day').toISOString()
        },
        selectedRangeType: 'absolute',
        value: from.isValid() && to.isValid() ? from.format(dateFormat) + ' - ' + to.format(dateFormat) : ''
      };
    }
    return null;
  };

  this.initPeriod = function (props) {
    var enabled = props.enabled,
        period = props.period,
        translations = props.translations;

    var _ref6 = period || {},
        endDate = _ref6.endDate,
        startDate = _ref6.startDate;

    var selectedStartDate = (0, _relativeOptions.getRelativeOption)(startDate, (0, _translate2.default)(translations, 'dates'));

    return {
      period: {
        endDate: endDate,
        startDate: selectedStartDate
      },
      selectedRangeType: endDate && selectedStartDate ? 'period' : undefined,
      value: enabled.period && endDate && selectedStartDate ? (0, _periodLabel2.default)(selectedStartDate, endDate, translations) : ''
    };
  };

  this.initRelativeRange = function (props) {
    var enabled = props.enabled,
        relativeRange = props.relativeRange,
        translations = props.translations;

    var _ref7 = relativeRange || {},
        endDate = _ref7.endDate,
        startDate = _ref7.startDate;

    if (endDate && startDate) {
      var selectedStartDate = (0, _relativeOptions.getRelativeOption)(startDate, (0, _translate2.default)(translations, 'dates'));
      var selectedEndDate = (0, _relativeOptions.getRelativeOption)(endDate, (0, _translate2.default)(translations, 'dates'));

      return {
        relativeRange: {
          endDate: selectedEndDate,
          startDate: selectedStartDate
        },
        selectedRangeType: selectedEndDate && selectedStartDate ? 'relative' : undefined,
        value: enabled.relative && selectedEndDate && selectedStartDate ? selectedStartDate.label + ' - ' + selectedEndDate.label : ''
      };
    }
    return null;
  };

  this.handleRangeTypeChange = function (event) {
    var onChange = _this3.props.onChange;
    var selectedRangeType = event.selectedRangeType;

    var state = _this3['get' + selectedRangeType.replace(/\w/, function (c) {
      return c.toUpperCase();
    }) + 'State']();
    _this3.setState(_extends({}, state, {
      selectedRangeType: selectedRangeType
    }));
    var startDate = state.startDate,
        endDate = state.endDate;

    if (startDate && endDate) {
      onChange({ startDate: startDate, endDate: endDate });
    }
  };

  this.handleChange = function (event) {
    var onChange = _this3.props.onChange;

    _this3.setState(event);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwic3RhdGUiLCJpbml0U3RhdGUiLCJzaG93T3ZlcmxheSIsInJlbmRlciIsImNsYXNzTmFtZSIsImVuYWJsZWQiLCJpZCIsImlucHV0UmVmIiwiaW5wdXRQcm9wcyIsInRyYW5zbGF0aW9ucyIsIndpZHRoIiwiYWJzb2x1dGVSYW5nZSIsInBlcmlvZCIsInJlbGF0aXZlUmFuZ2UiLCJzZWxlY3RlZFJhbmdlVHlwZSIsInZhbHVlIiwiRGF0ZVJhbmdlU2VjdGlvbiIsImVsIiwiaW5wdXQiLCJoYW5kbGVDbGljayIsImhhbmRsZUhpZGUiLCJoYW5kbGVSYW5nZVR5cGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm9uQ2hhbmdlIiwicGVyaW9kRGVmYXVsdFByb3BzIiwicmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyIsInRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInNldFN0YXRlIiwiZ2V0QWJzb2x1dGVTdGF0ZSIsImVuZERhdGUiLCJzdGFydERhdGUiLCJkYXRlRm9ybWF0IiwiZnJvbSIsIm1vbWVudCIsInV0YyIsInRvIiwiaXNWYWxpZCIsImVuZE9mIiwidG9JU09TdHJpbmciLCJzdGFydE9mIiwiZm9ybWF0IiwiZ2V0UGVyaW9kU3RhdGUiLCJDb25zdGFudHMiLCJFTkQiLCJTVEFSVCIsImdldFJlbGF0aXZlU3RhdGUiLCJsYWJlbCIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJpbml0UGVyaW9kIiwic2VsZWN0ZWRTdGFydERhdGUiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZEVuZERhdGUiLCJldmVudCIsInJlcGxhY2UiLCJjIiwidG9VcHBlckNhc2UiLCJlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImluY2x1ZGVzIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFuQkE7OztBQXFCQSxJQUFNQSxnQkFBZ0JDLDJCQUFPQyxHQUF2QixrQkFFa0JDLHlCQUFNQyxzQkFGeEIsQ0FBTjs7SUFNcUJDLFM7OztBQTRDbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBRWpCLFFBQU1DLFFBQVEsTUFBS0MsU0FBTCxDQUFlRixLQUFmLENBQWQ7QUFDQSxVQUFLQyxLQUFMLGdCQUNLQSxLQURMO0FBRUVFLG1CQUFhO0FBRmY7QUFIaUI7QUFPbEI7O0FBbUpEOzs7Ozs7Ozs7O3NCQWNBQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBU0gsS0FBS0osS0FURjtBQUFBLFFBRUxLLFNBRkssVUFFTEEsU0FGSztBQUFBLFFBR0xDLE9BSEssVUFHTEEsT0FISztBQUFBLFFBSUxDLEVBSkssVUFJTEEsRUFKSztBQUFBLFFBS0xDLFNBTEssVUFLTEEsUUFMSztBQUFBLFFBTUxDLFVBTkssVUFNTEEsVUFOSztBQUFBLFFBT0xDLFlBUEssVUFPTEEsWUFQSztBQUFBLFFBUUxDLEtBUkssVUFRTEEsS0FSSztBQUFBLGlCQWlCSCxLQUFLVixLQWpCRjtBQUFBLFFBV0xXLGFBWEssVUFXTEEsYUFYSztBQUFBLFFBWUxDLE1BWkssVUFZTEEsTUFaSztBQUFBLFFBYUxDLGFBYkssVUFhTEEsYUFiSztBQUFBLFFBY0xDLGlCQWRLLFVBY0xBLGlCQWRLO0FBQUEsUUFlTFosV0FmSyxVQWVMQSxXQWZLO0FBQUEsUUFnQkxhLEtBaEJLLFVBZ0JMQSxLQWhCSzs7O0FBbUJQLFFBQU1DLG1CQUFtQnRCLDJCQUFPQyxHQUExQixtQkFDS2UsS0FETCxDQUFOOztBQUlBLFdBQ0U7QUFBQyxxQ0FBRDtBQUFBLFFBQWUsT0FBT2Qsd0JBQXRCO0FBQ0U7QUFBQyx3QkFBRDtBQUFBLFVBQWtCLElBQUlVLEVBQXRCLEVBQTBCLFdBQVdGLFNBQXJDO0FBQ0U7QUFBQyx1QkFBRDtBQUFBO0FBQ0Usd0NBQUMsMkJBQUQ7QUFDRSxrQkFBSyxNQURQO0FBRUUsc0JBQVUsa0JBQUNhLEVBQUQsRUFBUTtBQUNoQixxQkFBS0MsS0FBTCxHQUFhRCxFQUFiO0FBQ0FWLHdCQUFTVSxFQUFUO0FBQ0Q7QUFMSCxhQU1NVCxVQU5OO0FBT0Usc0JBQVMsVUFQWDtBQVFFLG1CQUFPTyxLQVJUO0FBU0UscUJBQVMsS0FBS0k7QUFUaEI7QUFERixTQURGO0FBY0dqQix1QkFDRDtBQUFDLGlDQUFEO0FBQUE7QUFDRSxrQkFBTUEsV0FEUjtBQUVFLG9CQUFRLEtBQUtrQixVQUZmO0FBR0UsdUJBQVUsUUFIWjtBQUlFLHVCQUFXLElBSmI7QUFLRTtBQUxGO0FBT0Usd0NBQUMsMEJBQUQ7QUFDRSwyQkFBZVQsYUFEakI7QUFFRSxxQkFBU04sT0FGWDtBQUdFLCtCQUFtQixLQUFLZ0IscUJBSDFCO0FBSUUsc0JBQVUsS0FBS0MsWUFKakI7QUFLRSxvQkFBUVYsTUFMVjtBQU1FLCtCQUFtQkUsaUJBTnJCO0FBT0UsMkJBQWVELGFBUGpCO0FBUUUsMEJBQWNKO0FBUmhCO0FBUEY7QUFmRjtBQURGLEtBREY7QUFzQ0QsRzs7O0VBalJvQ2MsZ0JBQU1DLGEsVUEyQnBDQyxZLEdBQWU7QUFDcEJkLGlCQUFlZSxzQkFESztBQUVwQnRCLGFBQVcsRUFGUztBQUdwQkMsV0FBUztBQUNQc0IsY0FBVSxJQURIO0FBRVBmLFlBQVEsS0FGRDtBQUdQZ0IsY0FBVTtBQUhILEdBSFc7QUFRcEJwQixjQUFZLEVBUlE7QUFTcEJELFlBQVUsb0JBQU0sQ0FBRSxDQVRFO0FBVXBCc0IsWUFBVSxvQkFBTSxDQUFFLENBVkU7QUFXcEJqQixVQUFRa0Isc0JBWFk7QUFZcEJqQixpQkFBZWtCLHNCQVpLO0FBYXBCdEIsZ0JBQWN1QixzQkFiTTtBQWNwQnRCLFNBQU87QUFkYSxDOzs7T0EwQnRCdUIsa0IsR0FBcUIsVUFBQ0MsU0FBRCxFQUFlO0FBQ2xDLFFBQUlBLFVBQVV2QixhQUFWLEtBQTRCLE9BQUtaLEtBQUwsQ0FBV1ksYUFBdkMsSUFDQXVCLFVBQVVyQixhQUFWLEtBQTRCLE9BQUtkLEtBQUwsQ0FBV2MsYUFEdkMsSUFFQXFCLFVBQVV0QixNQUFWLEtBQXFCLE9BQUtiLEtBQUwsQ0FBV2EsTUFGcEMsRUFFNEM7QUFDMUMsVUFBTVosUUFBUSxPQUFLQyxTQUFMLENBQWUsT0FBS0YsS0FBcEIsQ0FBZDtBQUNBLFVBQUlDLEtBQUosRUFBVztBQUNULGVBQUttQyxRQUFMLENBQWNuQyxLQUFkO0FBQ0Q7QUFDRjtBQUNGLEc7O09BRURvQyxnQixHQUFtQixZQUFNO0FBQUEsUUFDZnpCLGFBRGUsR0FDRyxPQUFLWCxLQURSLENBQ2ZXLGFBRGU7O0FBQUEsZUFFUUEsaUJBQWlCLEVBRnpCO0FBQUEsUUFFZjBCLE9BRmUsUUFFZkEsT0FGZTtBQUFBLFFBRU5DLFNBRk0sUUFFTkEsU0FGTTs7QUFBQSxRQUdmQyxVQUhlLEdBR0EsT0FBS3hDLEtBQUwsQ0FBV1ksYUFIWCxDQUdmNEIsVUFIZTs7QUFJdkIsUUFBSUQsYUFBYUQsT0FBakIsRUFBMEI7QUFDeEIsVUFBTUcsT0FBT0MsaUJBQU9DLEdBQVAsQ0FBV0osU0FBWCxDQUFiO0FBQ0EsVUFBTUssS0FBS0YsaUJBQU9DLEdBQVAsQ0FBV0wsT0FBWCxDQUFYO0FBQ0EsVUFBSUcsS0FBS0ksT0FBTCxNQUFrQkQsR0FBR0MsT0FBSCxFQUF0QixFQUFvQztBQUNsQyxlQUFPO0FBQ0xQLG1CQUFTTSxHQUFHRSxLQUFILENBQVMsS0FBVCxFQUFnQkMsV0FBaEIsRUFESjtBQUVMUixxQkFBV0UsS0FBS08sT0FBTCxDQUFhLEtBQWIsRUFBb0JELFdBQXBCLEVBRk47QUFHTC9CLGlCQUFVeUIsS0FBS1EsTUFBTCxDQUFZVCxVQUFaLENBQVYsV0FBdUNJLEdBQUdLLE1BQUgsQ0FBVVQsVUFBVjtBQUhsQyxTQUFQO0FBS0Q7QUFDRjtBQUNELFdBQU8sRUFBRXhCLE9BQU8sRUFBVCxFQUFQO0FBQ0QsRzs7T0FFRGtDLGMsR0FBaUIsWUFBTTtBQUFBLFFBQ2J4QyxZQURhLEdBQ0ksT0FBS1YsS0FEVCxDQUNiVSxZQURhO0FBQUEsUUFFYkcsTUFGYSxHQUVGLE9BQUtaLEtBRkgsQ0FFYlksTUFGYTs7QUFBQSxnQkFHVUEsVUFBVSxFQUhwQjtBQUFBLFFBR2J5QixPQUhhLFNBR2JBLE9BSGE7QUFBQSxRQUdKQyxTQUhJLFNBR0pBLFNBSEk7O0FBSXJCLFFBQUlELFdBQVdDLFNBQVgsSUFBd0JBLFVBQVV2QixLQUF0QyxFQUE2QztBQUMzQyxhQUFPO0FBQ0xzQiw4QkFBY0EsT0FBZCxJQUF1QkksUUFBUUosUUFBUUksTUFBUixJQUFrQlMsb0JBQVVDLEdBQTNELEdBREs7QUFFTGIsZ0NBQWdCQSxVQUFVdkIsS0FBMUIsSUFBaUMwQixRQUFRSCxVQUFVdkIsS0FBVixDQUFnQjBCLE1BQWhCLElBQTBCUyxvQkFBVUUsS0FBN0UsR0FGSztBQUdMckMsZUFBTywyQkFBa0J1QixTQUFsQixFQUE2QkQsT0FBN0IsRUFBc0M1QixZQUF0QztBQUhGLE9BQVA7QUFLRDtBQUNELFdBQU8sRUFBRU0sT0FBTyxFQUFULEVBQVA7QUFDRCxHOztPQUVEc0MsZ0IsR0FBbUIsWUFBTTtBQUFBLFFBQ2Z4QyxhQURlLEdBQ0csT0FBS2IsS0FEUixDQUNmYSxhQURlOztBQUFBLGdCQUVRQSxpQkFBaUIsRUFGekI7QUFBQSxRQUVmd0IsT0FGZSxTQUVmQSxPQUZlO0FBQUEsUUFFTkMsU0FGTSxTQUVOQSxTQUZNOztBQUd2QixRQUFJRCxXQUFXQyxTQUFYLElBQXdCRCxRQUFRdEIsS0FBaEMsSUFBeUN1QixVQUFVdkIsS0FBdkQsRUFBOEQ7QUFDNUQsYUFBTztBQUNMc0IsOEJBQWNBLFFBQVF0QixLQUF0QixJQUE2QjBCLFFBQVFKLFFBQVF0QixLQUFSLENBQWMwQixNQUFkLElBQXdCUyxvQkFBVUMsR0FBdkUsR0FESztBQUVMYixnQ0FBZ0JBLFVBQVV2QixLQUExQixJQUFpQzBCLFFBQVFILFVBQVV2QixLQUFWLENBQWdCMEIsTUFBaEIsSUFBMEJTLG9CQUFVRSxLQUE3RSxHQUZLO0FBR0xyQyxlQUFVdUIsVUFBVWdCLEtBQXBCLFdBQStCakIsUUFBUWlCO0FBSGxDLE9BQVA7QUFLRDtBQUNELFdBQU8sRUFBRXZDLE9BQU8sRUFBVCxFQUFQO0FBQ0QsRzs7T0FFRGQsUyxHQUFZO0FBQUEsV0FDVixPQUFLc0QsaUJBQUwsQ0FBdUJ4RCxLQUF2QixLQUFpQyxPQUFLeUQsaUJBQUwsQ0FBdUJ6RCxLQUF2QixDQUFqQyxJQUFrRSxPQUFLMEQsVUFBTCxDQUFnQjFELEtBQWhCLENBRHhEO0FBQUEsRzs7T0FJWndELGlCLEdBQW9CLFVBQUN4RCxLQUFELEVBQVc7QUFBQSxRQUNyQlksYUFEcUIsR0FDSFosS0FERyxDQUNyQlksYUFEcUI7O0FBQUEsZ0JBRWNBLGlCQUFpQixFQUYvQjtBQUFBLFFBRXJCMEIsT0FGcUIsU0FFckJBLE9BRnFCO0FBQUEsUUFFWkMsU0FGWSxTQUVaQSxTQUZZO0FBQUEsUUFFREMsVUFGQyxTQUVEQSxVQUZDOztBQUFBLGdCQUdMLENBQUMsT0FBS3ZDLEtBQUwsSUFBYyxFQUFmLEVBQW1CVyxhQUFuQixJQUFvQyxFQUgvQjtBQUFBLFFBR3JCVCxXQUhxQixTQUdyQkEsV0FIcUI7O0FBSzdCLFFBQUlvQyxhQUFhRCxPQUFqQixFQUEwQjtBQUN4QixVQUFNRyxPQUFPQyxpQkFBT0MsR0FBUCxDQUFXSixTQUFYLENBQWI7QUFDQSxVQUFNSyxLQUFLRixpQkFBT0MsR0FBUCxDQUFXTCxPQUFYLENBQVg7QUFDQSxhQUFPO0FBQ0wxQix1QkFBZTtBQUNiVCxrQ0FEYTtBQUVibUMsbUJBQVNNLEdBQUdFLEtBQUgsQ0FBUyxLQUFULEVBQWdCQyxXQUFoQixFQUZJO0FBR2JSLHFCQUFXRSxLQUFLTyxPQUFMLENBQWEsS0FBYixFQUFvQkQsV0FBcEI7QUFIRSxTQURWO0FBTUxoQywyQkFBbUIsVUFOZDtBQU9MQyxlQUFReUIsS0FBS0ksT0FBTCxNQUFrQkQsR0FBR0MsT0FBSCxFQUFuQixHQUNGSixLQUFLUSxNQUFMLENBQVlULFVBQVosQ0FERSxXQUMyQkksR0FBR0ssTUFBSCxDQUFVVCxVQUFWLENBRDNCLEdBQ3FEO0FBUnZELE9BQVA7QUFVRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7O09BRURrQixVLEdBQWEsVUFBQzFELEtBQUQsRUFBVztBQUFBLFFBQ2RNLE9BRGMsR0FDb0JOLEtBRHBCLENBQ2RNLE9BRGM7QUFBQSxRQUNMTyxNQURLLEdBQ29CYixLQURwQixDQUNMYSxNQURLO0FBQUEsUUFDR0gsWUFESCxHQUNvQlYsS0FEcEIsQ0FDR1UsWUFESDs7QUFBQSxnQkFFU0csVUFBVSxFQUZuQjtBQUFBLFFBRWR5QixPQUZjLFNBRWRBLE9BRmM7QUFBQSxRQUVMQyxTQUZLLFNBRUxBLFNBRks7O0FBR3RCLFFBQU1vQixvQkFBb0Isd0NBQWtCcEIsU0FBbEIsRUFBNkIseUJBQVU3QixZQUFWLEVBQXdCLE9BQXhCLENBQTdCLENBQTFCOztBQUVBLFdBQU87QUFDTEcsY0FBUTtBQUNOeUIsd0JBRE07QUFFTkMsbUJBQVdvQjtBQUZMLE9BREg7QUFLTDVDLHlCQUFtQnVCLFdBQVdxQixpQkFBWCxHQUErQixRQUEvQixHQUEwQ0MsU0FMeEQ7QUFNTDVDLGFBQVFWLFFBQVFPLE1BQVIsSUFBa0J5QixPQUFsQixJQUE2QnFCLGlCQUE5QixHQUNMLDJCQUFrQkEsaUJBQWxCLEVBQXFDckIsT0FBckMsRUFBOEM1QixZQUE5QyxDQURLLEdBQ3lEO0FBUDNELEtBQVA7QUFTRCxHOztPQUVEK0MsaUIsR0FBb0IsVUFBQ3pELEtBQUQsRUFBVztBQUFBLFFBQ3JCTSxPQURxQixHQUNvQk4sS0FEcEIsQ0FDckJNLE9BRHFCO0FBQUEsUUFDWlEsYUFEWSxHQUNvQmQsS0FEcEIsQ0FDWmMsYUFEWTtBQUFBLFFBQ0dKLFlBREgsR0FDb0JWLEtBRHBCLENBQ0dVLFlBREg7O0FBQUEsZ0JBRUVJLGlCQUFpQixFQUZuQjtBQUFBLFFBRXJCd0IsT0FGcUIsU0FFckJBLE9BRnFCO0FBQUEsUUFFWkMsU0FGWSxTQUVaQSxTQUZZOztBQUk3QixRQUFJRCxXQUFXQyxTQUFmLEVBQTBCO0FBQ3hCLFVBQU1vQixvQkFBb0Isd0NBQWtCcEIsU0FBbEIsRUFBNkIseUJBQVU3QixZQUFWLEVBQXdCLE9BQXhCLENBQTdCLENBQTFCO0FBQ0EsVUFBTW1ELGtCQUFrQix3Q0FBa0J2QixPQUFsQixFQUEyQix5QkFBVTVCLFlBQVYsRUFBd0IsT0FBeEIsQ0FBM0IsQ0FBeEI7O0FBRUEsYUFBTztBQUNMSSx1QkFBZTtBQUNid0IsbUJBQVN1QixlQURJO0FBRWJ0QixxQkFBV29CO0FBRkUsU0FEVjtBQUtMNUMsMkJBQW1COEMsbUJBQW1CRixpQkFBbkIsR0FBdUMsVUFBdkMsR0FBb0RDLFNBTGxFO0FBTUw1QyxlQUFRVixRQUFRdUIsUUFBUixJQUFvQmdDLGVBQXBCLElBQXVDRixpQkFBeEMsR0FDRkEsa0JBQWtCSixLQURoQixXQUMyQk0sZ0JBQWdCTixLQUQzQyxHQUNxRDtBQVB2RCxPQUFQO0FBU0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOztPQUVEakMscUIsR0FBd0IsVUFBQ3dDLEtBQUQsRUFBVztBQUFBLFFBQ3pCaEMsUUFEeUIsR0FDWixPQUFLOUIsS0FETyxDQUN6QjhCLFFBRHlCO0FBQUEsUUFFekJmLGlCQUZ5QixHQUVIK0MsS0FGRyxDQUV6Qi9DLGlCQUZ5Qjs7QUFHakMsUUFBTWQsUUFBUSxlQUFXYyxrQkFBa0JnRCxPQUFsQixDQUEwQixJQUExQixFQUFnQztBQUFBLGFBQUtDLEVBQUVDLFdBQUYsRUFBTDtBQUFBLEtBQWhDLENBQVgsYUFBZDtBQUNBLFdBQUs3QixRQUFMLGNBQ0tuQyxLQURMO0FBRUVjO0FBRkY7QUFKaUMsUUFRekJ3QixTQVJ5QixHQVFGdEMsS0FSRSxDQVF6QnNDLFNBUnlCO0FBQUEsUUFRZEQsT0FSYyxHQVFGckMsS0FSRSxDQVFkcUMsT0FSYzs7QUFTakMsUUFBSUMsYUFBYUQsT0FBakIsRUFBMEI7QUFDeEJSLGVBQVMsRUFBRVMsb0JBQUYsRUFBYUQsZ0JBQWIsRUFBVDtBQUNEO0FBQ0YsRzs7T0FFRGYsWSxHQUFlLFVBQUN1QyxLQUFELEVBQVc7QUFBQSxRQUNoQmhDLFFBRGdCLEdBQ0gsT0FBSzlCLEtBREYsQ0FDaEI4QixRQURnQjs7QUFFeEIsV0FBS00sUUFBTCxDQUFjMEIsS0FBZDs7QUFGd0IsUUFJaEJ2QixTQUpnQixHQUlPdUIsS0FKUCxDQUloQnZCLFNBSmdCO0FBQUEsUUFJTEQsT0FKSyxHQUlPd0IsS0FKUCxDQUlMeEIsT0FKSzs7QUFLeEIsUUFBSUMsYUFBYUQsT0FBakIsRUFBMEI7QUFDeEJSLGVBQVMsRUFBRVMsb0JBQUYsRUFBYUQsZ0JBQWIsRUFBVDtBQUNEO0FBQ0YsRzs7T0FFRGxCLFcsR0FBYztBQUFBLFdBQU0sT0FBS2dCLFFBQUwsQ0FBYyxFQUFFakMsYUFBYSxDQUFDLE9BQUtGLEtBQUwsQ0FBV0UsV0FBM0IsRUFBZCxDQUFOO0FBQUEsRzs7T0FVZGtCLFUsR0FBYTtBQUFBLFdBQ1g2QyxFQUFFQyxNQUFGLElBQVlELEVBQUVDLE1BQUYsQ0FBU0MsVUFBckIsSUFBbUNGLEVBQUVDLE1BQUYsQ0FBU0MsVUFBVCxDQUFvQi9ELFNBQXZELElBQW9FNkQsRUFBRUMsTUFBRixDQUFTQyxVQUFULENBQW9CL0QsU0FBcEIsQ0FBOEJnRSxRQUE5QixDQUF1QyxXQUF2QyxDQUFwRSxHQUNFSCxFQUFFSSxjQUFGLEVBREYsR0FFRSxPQUFLbEMsUUFBTCxDQUFjLEVBQUVqQyxhQUFhLEtBQWYsRUFBZCxDQUhTO0FBQUEsRzs7a0JBOU1NSixTIiwiZmlsZSI6ImRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE92ZXJsYXkgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5pbXBvcnQgYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvYWJzb2x1dGUvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgYWJzb2x1dGVSYW5nZVByb3BUeXBlcyBmcm9tICcuL2NvbXBvbmVudHMvYWJzb2x1dGUvcHJvcC10eXBlcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9jb25zdGFudHMnO1xuaW1wb3J0IERhdGVSYW5nZVBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyL2RhdGUtcmFuZ2UtcG9wb3Zlci5jb21wb25lbnQnO1xuaW1wb3J0IGZvcm1hdFBlcmlvZExhYmVsIGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvcGVyaW9kLWxhYmVsLmZvcm1hdHRlcic7XG5pbXBvcnQgeyBnZXRSZWxhdGl2ZU9wdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCBwZXJpb2REZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL3BlcmlvZC9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IHBlcmlvZFNoYXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL3BlcmlvZC9wcm9wLXR5cGVzJztcbmltcG9ydCByZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcHJvcC10eXBlcyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5pbXBvcnQgdHJhbnNsYXRpb25zRGVmYXVsdFByb3BzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHRyYW5zbGF0aW9uc1Byb3BUeXBlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9wcm9wLXR5cGVzJztcblxuY29uc3QgUmVhZE9ubHlJbnB1dCA9IHN0eWxlZC5kaXZgXG4gIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbnRlbnRCYWNrZ3JvdW5kQ29sb3J9O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGFic29sdXRlUmFuZ2U6IFByb3BUeXBlcy5zaGFwZShhYnNvbHV0ZVJhbmdlUHJvcFR5cGVzKSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW5hYmxlZDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFic29sdXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHBlcmlvZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICByZWxhdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgfSksXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBlcmlvZDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVuZERhdGU6IHBlcmlvZFNoYXBlLFxuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgc3RhcnREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgIH0pLFxuICAgIHJlbGF0aXZlUmFuZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBlbmREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgc3RhcnREYXRlOiByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlLFxuICAgIH0pLFxuICAgIHRyYW5zbGF0aW9uczogUHJvcFR5cGVzLnNoYXBlKHRyYW5zbGF0aW9uc1Byb3BUeXBlcyksXG4gICAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhYnNvbHV0ZVJhbmdlOiBhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgZW5hYmxlZDoge1xuICAgICAgYWJzb2x1dGU6IHRydWUsXG4gICAgICBwZXJpb2Q6IGZhbHNlLFxuICAgICAgcmVsYXRpdmU6IGZhbHNlLFxuICAgIH0sXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgaW5wdXRSZWY6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBwZXJpb2Q6IHBlcmlvZERlZmF1bHRQcm9wcyxcbiAgICByZWxhdGl2ZVJhbmdlOiByZWxhdGl2ZVJhbmdlRGVmYXVsdFByb3BzLFxuICAgIHRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zRGVmYXVsdFByb3BzLFxuICAgIHdpZHRoOiAnMzAwcHgnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5pbml0U3RhdGUocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNob3dPdmVybGF5OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcykgPT4ge1xuICAgIGlmIChwcmV2UHJvcHMuYWJzb2x1dGVSYW5nZSAhPT0gdGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlIHx8XG4gICAgICAgIHByZXZQcm9wcy5yZWxhdGl2ZVJhbmdlICE9PSB0aGlzLnByb3BzLnJlbGF0aXZlUmFuZ2UgfHxcbiAgICAgICAgcHJldlByb3BzLnBlcmlvZCAhPT0gdGhpcy5wcm9wcy5wZXJpb2QpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5pbml0U3RhdGUodGhpcy5wcm9wcyk7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QWJzb2x1dGVTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IGFic29sdXRlUmFuZ2UgfHwge307XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnByb3BzLmFic29sdXRlUmFuZ2U7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgaWYgKGZyb20uaXNWYWxpZCgpICYmIHRvLmlzVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlOiBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGdldFBlcmlvZFN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGVyaW9kIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBwZXJpb2QgfHwge307XG4gICAgaWYgKGVuZERhdGUgJiYgc3RhcnREYXRlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLCBtb21lbnQ6IGVuZERhdGUubW9tZW50IHx8IENvbnN0YW50cy5FTkQgfSxcbiAgICAgICAgc3RhcnREYXRlOiB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5TVEFSVCB9LFxuICAgICAgICB2YWx1ZTogZm9ybWF0UGVyaW9kTGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBnZXRSZWxhdGl2ZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVsYXRpdmVSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUgJiYgZW5kRGF0ZS52YWx1ZSAmJiBzdGFydERhdGUudmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuZERhdGU6IHsgLi4uZW5kRGF0ZS52YWx1ZSwgbW9tZW50OiBlbmREYXRlLnZhbHVlLm1vbWVudCB8fCBDb25zdGFudHMuRU5EIH0sXG4gICAgICAgIHN0YXJ0RGF0ZTogeyAuLi5zdGFydERhdGUudmFsdWUsIG1vbWVudDogc3RhcnREYXRlLnZhbHVlLm1vbWVudCB8fCBDb25zdGFudHMuU1RBUlQgfSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWx9YCxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgaW5pdFN0YXRlID0gcHJvcHMgPT4gKFxuICAgIHRoaXMuaW5pdEFic29sdXRlUmFuZ2UocHJvcHMpIHx8IHRoaXMuaW5pdFJlbGF0aXZlUmFuZ2UocHJvcHMpIHx8IHRoaXMuaW5pdFBlcmlvZChwcm9wcylcbiAgKTtcblxuICBpbml0QWJzb2x1dGVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUsIGRhdGVGb3JtYXQgfSA9IGFic29sdXRlUmFuZ2UgfHwge307XG4gICAgY29uc3QgeyBzaG93T3ZlcmxheSB9ID0gKHRoaXMuc3RhdGUgfHwge30pLmFic29sdXRlUmFuZ2UgfHwge307XG5cbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhYnNvbHV0ZVJhbmdlOiB7XG4gICAgICAgICAgc2hvd092ZXJsYXksXG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiAnYWJzb2x1dGUnLFxuICAgICAgICB2YWx1ZTogKGZyb20uaXNWYWxpZCgpICYmIHRvLmlzVmFsaWQoKSkgP1xuICAgICAgICAgIGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAgOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaW5pdFBlcmlvZCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgcGVyaW9kLCB0cmFuc2xhdGlvbnMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBwZXJpb2QgfHwge307XG4gICAgY29uc3Qgc2VsZWN0ZWRTdGFydERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihzdGFydERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgc3RhcnREYXRlOiBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgIH0sXG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZTogZW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSA/ICdwZXJpb2QnIDogdW5kZWZpbmVkLFxuICAgICAgdmFsdWU6IChlbmFibGVkLnBlcmlvZCAmJiBlbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlKSA/XG4gICAgICAgIGZvcm1hdFBlcmlvZExhYmVsKHNlbGVjdGVkU3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpIDogJycsXG4gICAgfTtcbiAgfVxuXG4gIGluaXRSZWxhdGl2ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBlbmFibGVkLCByZWxhdGl2ZVJhbmdlLCB0cmFuc2xhdGlvbnMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuXG4gICAgaWYgKGVuZERhdGUgJiYgc3RhcnREYXRlKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFN0YXJ0RGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKHN0YXJ0RGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oZW5kRGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgZW5kRGF0ZTogc2VsZWN0ZWRFbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiBzZWxlY3RlZEVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUgPyAncmVsYXRpdmUnIDogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZTogKGVuYWJsZWQucmVsYXRpdmUgJiYgc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlKSA/XG4gICAgICAgICAgYCR7c2VsZWN0ZWRTdGFydERhdGUubGFiZWx9IC0gJHtzZWxlY3RlZEVuZERhdGUubGFiZWx9YCA6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBoYW5kbGVSYW5nZVR5cGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSYW5nZVR5cGUgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHN0YXRlID0gdGhpc1tgZ2V0JHtzZWxlY3RlZFJhbmdlVHlwZS5yZXBsYWNlKC9cXHcvLCBjID0+IGMudG9VcHBlckNhc2UoKSl9U3RhdGVgXSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICB9KTtcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gc3RhdGU7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoZXZlbnQpO1xuXG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IGV2ZW50O1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgb25DaGFuZ2UoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dPdmVybGF5OiAhdGhpcy5zdGF0ZS5zaG93T3ZlcmxheSB9KTtcblxuICAvKipcbiAgICogVGhpcyBpcyBkaXJ0eSBzb2x1dGlvbiBhbmQgYy9zaG91bGQgYmUgZml4ZWQuXG4gICAqIFJvb3QgY2F1c2U6IGRheS1waWNrZXIgaXMgcmVuZGVyZWQgdG8gcm9vdCBlbGVtZW50LCBub3QgaW5zaWRlIHBvcG92ZXIgZWxlZW1udC5cbiAgICogVGhlcmVmb3JlIGNsaWNrIGNvbWluZyBmb3JtIGRheS1waWNrZXIgYXJlIGNvbnNpZGVycyBhcyBvdXRzaWRlIGNsaWNrIG9mIHBvcG92ZXJcbiAgICogYW5kIHBvcG92ZXIgd291bGQgYmUgY2xvc2Ugd2l0aG91dCBldmVudCBwcmV2ZW50RGVmYXVsdC5cbiAgICogT25lIHNvbHV0aW9uIGlzIHBhc3NpbmcgYXQgbGVhc3QgdHJlZSBjYWxsYmFja3MgZm9yIHJlYWN0LWRhdGV0aW1lOiBvbldlZWtDbGljayxcbiAgICogb25DYXB0aW9uQ2xpY2sgYW5kIGN1c3RvbSBvbkNsaWNrIGZvciBjdXN0b20gY2FwdGlvbiBvZiByZWFjdC1kYXRldGltZS5cbiAgICovXG4gIGhhbmRsZUhpZGUgPSBlID0+IChcbiAgICBlLnRhcmdldCAmJiBlLnRhcmdldC5wYXJlbnROb2RlICYmIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lICYmIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lLmluY2x1ZGVzKCdEYXlQaWNrZXInKSA/XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCkgOlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dPdmVybGF5OiBmYWxzZSB9KVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBlbmFibGVkLFxuICAgICAgaWQsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICB0cmFuc2xhdGlvbnMsXG4gICAgICB3aWR0aCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBhYnNvbHV0ZVJhbmdlLFxuICAgICAgcGVyaW9kLFxuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgc2hvd092ZXJsYXksXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IERhdGVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAgICAgd2lkdGg6ICR7d2lkdGh9O1xuICAgIGA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPERhdGVSYW5nZVNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgPFJlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpbnB1dFJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGVsO1xuICAgICAgICAgICAgICAgIGlucHV0UmVmKGVsKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUmVhZE9ubHlJbnB1dD5cbiAgICAgICAgICB7c2hvd092ZXJsYXkgJiZcbiAgICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgICAgc2hvdz17c2hvd092ZXJsYXl9XG4gICAgICAgICAgICBvbkhpZGU9e3RoaXMuaGFuZGxlSGlkZX1cbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICBjb250YWluZXI9e3RoaXN9XG4gICAgICAgICAgICByb290Q2xvc2VcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGF0ZVJhbmdlUG9wb3ZlclxuICAgICAgICAgICAgICBhYnNvbHV0ZVJhbmdlPXthYnNvbHV0ZVJhbmdlfVxuICAgICAgICAgICAgICBlbmFibGVkPXtlbmFibGVkfVxuICAgICAgICAgICAgICBvblJhbmdlVHlwZUNoYW5nZT17dGhpcy5oYW5kbGVSYW5nZVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcGVyaW9kPXtwZXJpb2R9XG4gICAgICAgICAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlPXtzZWxlY3RlZFJhbmdlVHlwZX1cbiAgICAgICAgICAgICAgcmVsYXRpdmVSYW5nZT17cmVsYXRpdmVSYW5nZX1cbiAgICAgICAgICAgICAgdHJhbnNsYXRpb25zPXt0cmFuc2xhdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvT3ZlcmxheT59XG4gICAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=