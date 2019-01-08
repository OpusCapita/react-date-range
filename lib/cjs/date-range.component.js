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
        period = _state.period,
        relativeRange = _state.relativeRange,
        selectedRangeType = _state.selectedRangeType,
        showOverlay = _state.showOverlay,
        value = _state.value;

    var absoluteRange = _extends({}, this.props.absoluteRange, this.state.absoluteRange);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwic3RhdGUiLCJpbml0U3RhdGUiLCJzaG93T3ZlcmxheSIsInJlbmRlciIsImNsYXNzTmFtZSIsImVuYWJsZWQiLCJpZCIsImlucHV0UmVmIiwiaW5wdXRQcm9wcyIsInRyYW5zbGF0aW9ucyIsIndpZHRoIiwicGVyaW9kIiwicmVsYXRpdmVSYW5nZSIsInNlbGVjdGVkUmFuZ2VUeXBlIiwidmFsdWUiLCJhYnNvbHV0ZVJhbmdlIiwiRGF0ZVJhbmdlU2VjdGlvbiIsImVsIiwiaW5wdXQiLCJoYW5kbGVDbGljayIsImhhbmRsZUhpZGUiLCJoYW5kbGVSYW5nZVR5cGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm9uQ2hhbmdlIiwicGVyaW9kRGVmYXVsdFByb3BzIiwicmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyIsInRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInNldFN0YXRlIiwiZ2V0QWJzb2x1dGVTdGF0ZSIsImVuZERhdGUiLCJzdGFydERhdGUiLCJkYXRlRm9ybWF0IiwiZnJvbSIsIm1vbWVudCIsInV0YyIsInRvIiwiaXNWYWxpZCIsImVuZE9mIiwidG9JU09TdHJpbmciLCJzdGFydE9mIiwiZm9ybWF0IiwiZ2V0UGVyaW9kU3RhdGUiLCJDb25zdGFudHMiLCJFTkQiLCJTVEFSVCIsImdldFJlbGF0aXZlU3RhdGUiLCJsYWJlbCIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJpbml0UGVyaW9kIiwic2VsZWN0ZWRTdGFydERhdGUiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZEVuZERhdGUiLCJldmVudCIsInJlcGxhY2UiLCJjIiwidG9VcHBlckNhc2UiLCJlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImluY2x1ZGVzIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFuQkE7OztBQXFCQSxJQUFNQSxnQkFBZ0JDLDJCQUFPQyxHQUF2QixrQkFFa0JDLHlCQUFNQyxzQkFGeEIsQ0FBTjs7SUFNcUJDLFM7OztBQTRDbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBRWpCLFFBQU1DLFFBQVEsTUFBS0MsU0FBTCxDQUFlRixLQUFmLENBQWQ7QUFDQSxVQUFLQyxLQUFMLGdCQUNLQSxLQURMO0FBRUVFLG1CQUFhO0FBRmY7QUFIaUI7QUFPbEI7O0FBbUpEOzs7Ozs7Ozs7O3NCQWNBQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBU0gsS0FBS0osS0FURjtBQUFBLFFBRUxLLFNBRkssVUFFTEEsU0FGSztBQUFBLFFBR0xDLE9BSEssVUFHTEEsT0FISztBQUFBLFFBSUxDLEVBSkssVUFJTEEsRUFKSztBQUFBLFFBS0xDLFNBTEssVUFLTEEsUUFMSztBQUFBLFFBTUxDLFVBTkssVUFNTEEsVUFOSztBQUFBLFFBT0xDLFlBUEssVUFPTEEsWUFQSztBQUFBLFFBUUxDLEtBUkssVUFRTEEsS0FSSztBQUFBLGlCQWdCSCxLQUFLVixLQWhCRjtBQUFBLFFBV0xXLE1BWEssVUFXTEEsTUFYSztBQUFBLFFBWUxDLGFBWkssVUFZTEEs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QSxHOztrQkE5TU1KLFMiLCJmaWxlIjoiZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgT3ZlcmxheSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcbmltcG9ydCBhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9hYnNvbHV0ZS9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBhYnNvbHV0ZVJhbmdlUHJvcFR5cGVzIGZyb20gJy4vY29tcG9uZW50cy9hYnNvbHV0ZS9wcm9wLXR5cGVzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL2NvbnN0YW50cyc7XG5pbXBvcnQgRGF0ZVJhbmdlUG9wb3ZlciBmcm9tICcuL3BvcG92ZXIvZGF0ZS1yYW5nZS1wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgZm9ybWF0UGVyaW9kTGFiZWwgZnJvbSAnLi9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QtbGFiZWwuZm9ybWF0dGVyJztcbmltcG9ydCB7IGdldFJlbGF0aXZlT3B0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLW9wdGlvbnMnO1xuaW1wb3J0IHBlcmlvZERlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHsgcGVyaW9kU2hhcGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IHsgcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSB9IGZyb20gJy4vY29tcG9uZW50cy9yZWxhdGl2ZS9wcm9wLXR5cGVzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcbmltcG9ydCB0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgdHJhbnNsYXRpb25zUHJvcFR5cGVzIGZyb20gJy4vdHJhbnNsYXRpb25zL3Byb3AtdHlwZXMnO1xuXG5jb25zdCBSZWFkT25seUlucHV0ID0gc3R5bGVkLmRpdmBcbiAgLmZvcm0tY29udHJvbFtyZWFkb25seV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYWJzb2x1dGVSYW5nZTogUHJvcFR5cGVzLnNoYXBlKGFic29sdXRlUmFuZ2VQcm9wVHlwZXMpLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbmFibGVkOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYWJzb2x1dGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgcGVyaW9kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHJlbGF0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB9KSxcbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGVyaW9kOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW5kRGF0ZTogcGVyaW9kU2hhcGUsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzdGFydERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgfSksXG4gICAgcmVsYXRpdmVSYW5nZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVuZERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBzdGFydERhdGU6IHJlbGF0aXZlRGF0ZVZhbHVlU2hhcGUsXG4gICAgfSksXG4gICAgdHJhbnNsYXRpb25zOiBQcm9wVHlwZXMuc2hhcGUodHJhbnNsYXRpb25zUHJvcFR5cGVzKSxcbiAgICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFic29sdXRlUmFuZ2U6IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBlbmFibGVkOiB7XG4gICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgIHBlcmlvZDogZmFsc2UsXG4gICAgICByZWxhdGl2ZTogZmFsc2UsXG4gICAgfSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBpbnB1dFJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHBlcmlvZDogcGVyaW9kRGVmYXVsdFByb3BzLFxuICAgIHJlbGF0aXZlUmFuZ2U6IHJlbGF0aXZlUmFuZ2VEZWZhdWx0UHJvcHMsXG4gICAgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGlvbnNEZWZhdWx0UHJvcHMsXG4gICAgd2lkdGg6ICczMDBweCcsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZShwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2hvd092ZXJsYXk6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzKSA9PiB7XG4gICAgaWYgKHByZXZQcm9wcy5hYnNvbHV0ZVJhbmdlICE9PSB0aGlzLnByb3BzLmFic29sdXRlUmFuZ2UgfHxcbiAgICAgICAgcHJldlByb3BzLnJlbGF0aXZlUmFuZ2UgIT09IHRoaXMucHJvcHMucmVsYXRpdmVSYW5nZSB8fFxuICAgICAgICBwcmV2UHJvcHMucGVyaW9kICE9PSB0aGlzLnByb3BzLnBlcmlvZCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmluaXRTdGF0ZSh0aGlzLnByb3BzKTtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRBYnNvbHV0ZVN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgYWJzb2x1dGVSYW5nZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMucHJvcHMuYWJzb2x1dGVSYW5nZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGZyb20gPSBtb21lbnQudXRjKHN0YXJ0RGF0ZSk7XG4gICAgICBjb25zdCB0byA9IG1vbWVudC51dGMoZW5kRGF0ZSk7XG4gICAgICBpZiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW5kRGF0ZTogdG8uZW5kT2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBmcm9tLnN0YXJ0T2YoJ2RheScpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWU6IGAke2Zyb20uZm9ybWF0KGRhdGVGb3JtYXQpfSAtICR7dG8uZm9ybWF0KGRhdGVGb3JtYXQpfWAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgZ2V0UGVyaW9kU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwZXJpb2QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUgJiYgc3RhcnREYXRlLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmREYXRlOiB7IC4uLmVuZERhdGUsIG1vbWVudDogZW5kRGF0ZS5tb21lbnQgfHwgQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHsgLi4uc3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgfHwgQ29uc3RhbnRzLlNUQVJUIH0sXG4gICAgICAgIHZhbHVlOiBmb3JtYXRQZXJpb2RMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGdldFJlbGF0aXZlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyByZWxhdGl2ZVJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSByZWxhdGl2ZVJhbmdlIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBlbmREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5kRGF0ZTogeyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IGVuZERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5FTkQgfSxcbiAgICAgICAgc3RhcnREYXRlOiB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBzdGFydERhdGUudmFsdWUubW9tZW50IHx8IENvbnN0YW50cy5TVEFSVCB9LFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBpbml0U3RhdGUgPSBwcm9wcyA9PiAoXG4gICAgdGhpcy5pbml0QWJzb2x1dGVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UmVsYXRpdmVSYW5nZShwcm9wcykgfHwgdGhpcy5pbml0UGVyaW9kKHByb3BzKVxuICApO1xuXG4gIGluaXRBYnNvbHV0ZVJhbmdlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSwgZGF0ZUZvcm1hdCB9ID0gYWJzb2x1dGVSYW5nZSB8fCB7fTtcbiAgICBjb25zdCB7IHNob3dPdmVybGF5IH0gPSAodGhpcy5zdGF0ZSB8fCB7fSkuYWJzb2x1dGVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFic29sdXRlUmFuZ2U6IHtcbiAgICAgICAgICBzaG93T3ZlcmxheSxcbiAgICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6ICdhYnNvbHV0ZScsXG4gICAgICAgIHZhbHVlOiAoZnJvbS5pc1ZhbGlkKCkgJiYgdG8uaXNWYWxpZCgpKSA/XG4gICAgICAgICAgYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCA6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbml0UGVyaW9kID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBlbmFibGVkLCBwZXJpb2QsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHBlcmlvZCB8fCB7fTtcbiAgICBjb25zdCBzZWxlY3RlZFN0YXJ0RGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKHN0YXJ0RGF0ZSwgdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBlbmREYXRlLFxuICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlOiBlbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gJ3BlcmlvZCcgOiB1bmRlZmluZWQsXG4gICAgICB2YWx1ZTogKGVuYWJsZWQucGVyaW9kICYmIGVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUpID9cbiAgICAgICAgZm9ybWF0UGVyaW9kTGFiZWwoc2VsZWN0ZWRTdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucykgOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaW5pdFJlbGF0aXZlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHJlbGF0aXZlUmFuZ2UsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XG5cbiAgICBpZiAoZW5kRGF0ZSAmJiBzdGFydERhdGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkU3RhcnREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oc3RhcnREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihlbmREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICBlbmREYXRlOiBzZWxlY3RlZEVuZERhdGUsXG4gICAgICAgICAgc3RhcnREYXRlOiBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSA/ICdyZWxhdGl2ZScgOiB1bmRlZmluZWQsXG4gICAgICAgIHZhbHVlOiAoZW5hYmxlZC5yZWxhdGl2ZSAmJiBzZWxlY3RlZEVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUpID9cbiAgICAgICAgICBgJHtzZWxlY3RlZFN0YXJ0RGF0ZS5sYWJlbH0gLSAke3NlbGVjdGVkRW5kRGF0ZS5sYWJlbH1gIDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhbmRsZVJhbmdlVHlwZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZFJhbmdlVHlwZSB9ID0gZXZlbnQ7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzW2BnZXQke3NlbGVjdGVkUmFuZ2VUeXBlLnJlcGxhY2UoL1xcdy8sIGMgPT4gYy50b1VwcGVyQ2FzZSgpKX1TdGF0ZWBdKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgIH0pO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBzdGF0ZTtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZShldmVudCk7XG5cbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gZXZlbnQ7XG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBvbkNoYW5nZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6ICF0aGlzLnN0YXRlLnNob3dPdmVybGF5IH0pO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGRpcnR5IHNvbHV0aW9uIGFuZCBjL3Nob3VsZCBiZSBmaXhlZC5cbiAgICogUm9vdCBjYXVzZTogZGF5LXBpY2tlciBpcyByZW5kZXJlZCB0byByb290IGVsZW1lbnQsIG5vdCBpbnNpZGUgcG9wb3ZlciBlbGVlbW50LlxuICAgKiBUaGVyZWZvcmUgY2xpY2sgY29taW5nIGZvcm0gZGF5LXBpY2tlciBhcmUgY29uc2lkZXJzIGFzIG91dHNpZGUgY2xpY2sgb2YgcG9wb3ZlclxuICAgKiBhbmQgcG9wb3ZlciB3b3VsZCBiZSBjbG9zZSB3aXRob3V0IGV2ZW50IHByZXZlbnREZWZhdWx0LlxuICAgKiBPbmUgc29sdXRpb24gaXMgcGFzc2luZyBhdCBsZWFzdCB0cmVlIGNhbGxiYWNrcyBmb3IgcmVhY3QtZGF0ZXRpbWU6IG9uV2Vla0NsaWNrLFxuICAgKiBvbkNhcHRpb25DbGljayBhbmQgY3VzdG9tIG9uQ2xpY2sgZm9yIGN1c3RvbSBjYXB0aW9uIG9mIHJlYWN0LWRhdGV0aW1lLlxuICAgKi9cbiAgaGFuZGxlSGlkZSA9IGUgPT4gKFxuICAgIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnBhcmVudE5vZGUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgJiYgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5jbHVkZXMoJ0RheVBpY2tlcicpID9cbiAgICAgIGUucHJldmVudERlZmF1bHQoKSA6XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd092ZXJsYXk6IGZhbHNlIH0pXG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGVuYWJsZWQsXG4gICAgICBpZCxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIHRyYW5zbGF0aW9ucyxcbiAgICAgIHdpZHRoLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBlcmlvZCxcbiAgICAgIHJlbGF0aXZlUmFuZ2UsXG4gICAgICBzZWxlY3RlZFJhbmdlVHlwZSxcbiAgICAgIHNob3dPdmVybGF5LFxuICAgICAgdmFsdWUsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYWJzb2x1dGVSYW5nZSA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMuYWJzb2x1dGVSYW5nZSxcbiAgICAgIC4uLnRoaXMuc3RhdGUuYWJzb2x1dGVSYW5nZSxcbiAgICB9O1xuXG4gICAgY29uc3QgRGF0ZVJhbmdlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgICB3aWR0aDogJHt3aWR0aH07XG4gICAgYDtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8RGF0ZVJhbmdlU2VjdGlvbiBpZD17aWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8UmVhZE9ubHlJbnB1dD5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlucHV0UmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gZWw7XG4gICAgICAgICAgICAgICAgaW5wdXRSZWYoZWwpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cbiAgICAgICAgICAgICAgcmVhZE9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFkT25seUlucHV0PlxuICAgICAgICAgIHtzaG93T3ZlcmxheSAmJlxuICAgICAgICAgIDxPdmVybGF5XG4gICAgICAgICAgICBzaG93PXtzaG93T3ZlcmxheX1cbiAgICAgICAgICAgIG9uSGlkZT17dGhpcy5oYW5kbGVIaWRlfVxuICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgIGNvbnRhaW5lcj17dGhpc31cbiAgICAgICAgICAgIHJvb3RDbG9zZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEYXRlUmFuZ2VQb3BvdmVyXG4gICAgICAgICAgICAgIGFic29sdXRlUmFuZ2U9e2Fic29sdXRlUmFuZ2V9XG4gICAgICAgICAgICAgIGVuYWJsZWQ9e2VuYWJsZWR9XG4gICAgICAgICAgICAgIG9uUmFuZ2VUeXBlQ2hhbmdlPXt0aGlzLmhhbmRsZVJhbmdlVHlwZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwZXJpb2Q9e3BlcmlvZH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU9e3NlbGVjdGVkUmFuZ2VUeXBlfVxuICAgICAgICAgICAgICByZWxhdGl2ZVJhbmdlPXtyZWxhdGl2ZVJhbmdlfVxuICAgICAgICAgICAgICB0cmFuc2xhdGlvbnM9e3RyYW5zbGF0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9PdmVybGF5Pn1cbiAgICAgICAgPC9EYXRlUmFuZ2VTZWN0aW9uPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==