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
        _react2.default.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRlLXJhbmdlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhZE9ubHlJbnB1dCIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsIkRhdGVSYW5nZSIsInByb3BzIiwic3RhdGUiLCJpbml0U3RhdGUiLCJzaG93T3ZlcmxheSIsInJlbmRlciIsImNsYXNzTmFtZSIsImVuYWJsZWQiLCJpZCIsImlucHV0UmVmIiwiaW5wdXRQcm9wcyIsInRyYW5zbGF0aW9ucyIsIndpZHRoIiwicGVyaW9kIiwicmVsYXRpdmVSYW5nZSIsInNlbGVjdGVkUmFuZ2VUeXBlIiwidmFsdWUiLCJhYnNvbHV0ZVJhbmdlIiwiRGF0ZVJhbmdlU2VjdGlvbiIsImVsIiwiaW5wdXQiLCJoYW5kbGVDbGljayIsImhhbmRsZUhpZGUiLCJoYW5kbGVSYW5nZVR5cGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJhYnNvbHV0ZVJhbmdlRGVmYXVsdFByb3BzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm9uQ2hhbmdlIiwicGVyaW9kRGVmYXVsdFByb3BzIiwicmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyIsInRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInNldFN0YXRlIiwiZ2V0QWJzb2x1dGVTdGF0ZSIsImVuZERhdGUiLCJzdGFydERhdGUiLCJkYXRlRm9ybWF0IiwiZnJvbSIsIm1vbWVudCIsInV0YyIsInRvIiwiaXNWYWxpZCIsImVuZE9mIiwidG9JU09TdHJpbmciLCJzdGFydE9mIiwiZm9ybWF0IiwiZ2V0UGVyaW9kU3RhdGUiLCJDb25zdGFudHMiLCJFTkQiLCJTVEFSVCIsImdldFJlbGF0aXZlU3RhdGUiLCJsYWJlbCIsImluaXRBYnNvbHV0ZVJhbmdlIiwiaW5pdFJlbGF0aXZlUmFuZ2UiLCJpbml0UGVyaW9kIiwic2VsZWN0ZWRTdGFydERhdGUiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZEVuZERhdGUiLCJldmVudCIsInJlcGxhY2UiLCJjIiwidG9VcHBlckNhc2UiLCJlIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImluY2x1ZGVzIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFuQkE7OztBQXFCQSxJQUFNQSxnQkFBZ0JDLDJCQUFPQyxHQUF2QixrQkFFa0JDLHlCQUFNQyxzQkFGeEIsQ0FBTjs7SUFNcUJDLFM7OztBQTRDbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUE7O0FBRWpCLFFBQU1DLFFBQVEsTUFBS0MsU0FBTCxDQUFlRixLQUFmLENBQWQ7QUFDQSxVQUFLQyxLQUFMLGdCQUNLQSxLQURMO0FBRUVFLG1CQUFhO0FBRmY7QUFIaUI7QUFPbEI7O0FBbUpEOzs7Ozs7Ozs7O3NCQWNBQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBU0gsS0FBS0osS0FURjtBQUFBLFFBRUxLLFNBRkssVUFFTEEsU0FGSztBQUFBLFFBR0xDLE9BSEssVUFHTEEsT0FISztBQUFBLFFBSUxDLEVBSkssVUFJTEEsRUFKSztBQUFBLFFBS0xDLFNBTEssVUFLTEEsUUFMSztBQUFBLFFBTUxDLFVBTkssVUFNTEEsVUFOSztBQUFBLFFBT0xDLFlBUEssVUFPTEEsWUFQSztBQUFBLFFBUUxDLEtBUkssVUFRTEEsS0FSSztBQUFBLGlCQWdCSCxLQUFLVixLQWhCRjtBQUFBLFFBV0xXLE1BWEssVUFXTEEsTUFYSztBQUFBLFFBWUxDLGFBWkssVUFZTEEs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QTlNTUosUyIsImZpbGUiOiJkYXRlLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBPdmVybGF5IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VEZWZhdWx0UHJvcHMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGFic29sdXRlUmFuZ2VQcm9wVHlwZXMgZnJvbSAnLi9jb21wb25lbnRzL2Fic29sdXRlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvY29uc3RhbnRzJztcbmltcG9ydCBEYXRlUmFuZ2VQb3BvdmVyIGZyb20gJy4vcG9wb3Zlci9kYXRlLXJhbmdlLXBvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCBmb3JtYXRQZXJpb2RMYWJlbCBmcm9tICcuL2NvbXBvbmVudHMvcGVyaW9kL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IHsgZ2V0UmVsYXRpdmVPcHRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgcGVyaW9kRGVmYXVsdFByb3BzIGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyBwZXJpb2RTaGFwZSB9IGZyb20gJy4vY29tcG9uZW50cy9wZXJpb2QvcHJvcC10eXBlcyc7XG5pbXBvcnQgcmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyBmcm9tICcuL2NvbXBvbmVudHMvcmVsYXRpdmUvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyByZWxhdGl2ZURhdGVWYWx1ZVNoYXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL3JlbGF0aXZlL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuaW1wb3J0IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB0cmFuc2xhdGlvbnNQcm9wVHlwZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvcHJvcC10eXBlcyc7XG5cbmNvbnN0IFJlYWRPbmx5SW5wdXQgPSBzdHlsZWQuZGl2YFxuICAuZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb250ZW50QmFja2dyb3VuZENvbG9yfTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBhYnNvbHV0ZVJhbmdlOiBQcm9wVHlwZXMuc2hhcGUoYWJzb2x1dGVSYW5nZVByb3BUeXBlcyksXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuYWJsZWQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhYnNvbHV0ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBwZXJpb2Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgcmVsYXRpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIH0pLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwZXJpb2Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBlbmREYXRlOiBwZXJpb2RTaGFwZSxcbiAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHN0YXJ0RGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICB9KSxcbiAgICByZWxhdGl2ZVJhbmdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZW5kRGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIHN0YXJ0RGF0ZTogcmVsYXRpdmVEYXRlVmFsdWVTaGFwZSxcbiAgICB9KSxcbiAgICB0cmFuc2xhdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh0cmFuc2xhdGlvbnNQcm9wVHlwZXMpLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWJzb2x1dGVSYW5nZTogYWJzb2x1dGVSYW5nZURlZmF1bHRQcm9wcyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGVuYWJsZWQ6IHtcbiAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgcGVyaW9kOiBmYWxzZSxcbiAgICAgIHJlbGF0aXZlOiBmYWxzZSxcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHt9LFxuICAgIGlucHV0UmVmOiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgcGVyaW9kOiBwZXJpb2REZWZhdWx0UHJvcHMsXG4gICAgcmVsYXRpdmVSYW5nZTogcmVsYXRpdmVSYW5nZURlZmF1bHRQcm9wcyxcbiAgICB0cmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyxcbiAgICB3aWR0aDogJzMwMHB4JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzaG93T3ZlcmxheTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMpID0+IHtcbiAgICBpZiAocHJldlByb3BzLmFic29sdXRlUmFuZ2UgIT09IHRoaXMucHJvcHMuYWJzb2x1dGVSYW5nZSB8fFxuICAgICAgICBwcmV2UHJvcHMucmVsYXRpdmVSYW5nZSAhPT0gdGhpcy5wcm9wcy5yZWxhdGl2ZVJhbmdlIHx8XG4gICAgICAgIHByZXZQcm9wcy5wZXJpb2QgIT09IHRoaXMucHJvcHMucGVyaW9kKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuaW5pdFN0YXRlKHRoaXMucHJvcHMpO1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEFic29sdXRlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhYnNvbHV0ZVJhbmdlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlIH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlO1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZnJvbSA9IG1vbWVudC51dGMoc3RhcnREYXRlKTtcbiAgICAgIGNvbnN0IHRvID0gbW9tZW50LnV0YyhlbmREYXRlKTtcbiAgICAgIGlmIChmcm9tLmlzVmFsaWQoKSAmJiB0by5pc1ZhbGlkKCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbmREYXRlOiB0by5lbmRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBzdGFydERhdGU6IGZyb20uc3RhcnRPZignZGF5JykudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZTogYCR7ZnJvbS5mb3JtYXQoZGF0ZUZvcm1hdCl9IC0gJHt0by5mb3JtYXQoZGF0ZUZvcm1hdCl9YCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH07XG4gIH1cblxuICBnZXRQZXJpb2RTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBlcmlvZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcGVyaW9kIHx8IHt9O1xuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSAmJiBzdGFydERhdGUudmFsdWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuZERhdGU6IHsgLi4uZW5kRGF0ZSwgbW9tZW50OiBlbmREYXRlLm1vbWVudCB8fCBDb25zdGFudHMuRU5EIH0sXG4gICAgICAgIHN0YXJ0RGF0ZTogeyAuLi5zdGFydERhdGUudmFsdWUsIG1vbWVudDogc3RhcnREYXRlLnZhbHVlLm1vbWVudCB8fCBDb25zdGFudHMuU1RBUlQgfSxcbiAgICAgICAgdmFsdWU6IGZvcm1hdFBlcmlvZExhYmVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiAnJyB9O1xuICB9XG5cbiAgZ2V0UmVsYXRpdmVTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHJlbGF0aXZlUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHJlbGF0aXZlUmFuZ2UgfHwge307XG4gICAgaWYgKGVuZERhdGUgJiYgc3RhcnREYXRlICYmIGVuZERhdGUudmFsdWUgJiYgc3RhcnREYXRlLnZhbHVlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmREYXRlOiB7IC4uLmVuZERhdGUudmFsdWUsIG1vbWVudDogZW5kRGF0ZS52YWx1ZS5tb21lbnQgfHwgQ29uc3RhbnRzLkVORCB9LFxuICAgICAgICBzdGFydERhdGU6IHsgLi4uc3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgfHwgQ29uc3RhbnRzLlNUQVJUIH0sXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWx9IC0gJHtlbmREYXRlLmxhYmVsfWAsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycgfTtcbiAgfVxuXG4gIGluaXRTdGF0ZSA9IHByb3BzID0+IChcbiAgICB0aGlzLmluaXRBYnNvbHV0ZVJhbmdlKHByb3BzKSB8fCB0aGlzLmluaXRSZWxhdGl2ZVJhbmdlKHByb3BzKSB8fCB0aGlzLmluaXRQZXJpb2QocHJvcHMpXG4gICk7XG5cbiAgaW5pdEFic29sdXRlUmFuZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFic29sdXRlUmFuZ2UgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlLCBkYXRlRm9ybWF0IH0gPSBhYnNvbHV0ZVJhbmdlIHx8IHt9O1xuICAgIGNvbnN0IHsgc2hvd092ZXJsYXkgfSA9ICh0aGlzLnN0YXRlIHx8IHt9KS5hYnNvbHV0ZVJhbmdlIHx8IHt9O1xuXG4gICAgaWYgKHN0YXJ0RGF0ZSAmJiBlbmREYXRlKSB7XG4gICAgICBjb25zdCBmcm9tID0gbW9tZW50LnV0YyhzdGFydERhdGUpO1xuICAgICAgY29uc3QgdG8gPSBtb21lbnQudXRjKGVuZERhdGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWJzb2x1dGVSYW5nZToge1xuICAgICAgICAgIHNob3dPdmVybGF5LFxuICAgICAgICAgIGVuZERhdGU6IHRvLmVuZE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHN0YXJ0RGF0ZTogZnJvbS5zdGFydE9mKCdkYXknKS50b0lTT1N0cmluZygpLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogJ2Fic29sdXRlJyxcbiAgICAgICAgdmFsdWU6IChmcm9tLmlzVmFsaWQoKSAmJiB0by5pc1ZhbGlkKCkpID9cbiAgICAgICAgICBgJHtmcm9tLmZvcm1hdChkYXRlRm9ybWF0KX0gLSAke3RvLmZvcm1hdChkYXRlRm9ybWF0KX1gIDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGluaXRQZXJpb2QgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGVuYWJsZWQsIHBlcmlvZCwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcGVyaW9kIHx8IHt9O1xuICAgIGNvbnN0IHNlbGVjdGVkU3RhcnREYXRlID0gZ2V0UmVsYXRpdmVPcHRpb24oc3RhcnREYXRlLCB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHN0YXJ0RGF0ZTogc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGU6IGVuZERhdGUgJiYgc2VsZWN0ZWRTdGFydERhdGUgPyAncGVyaW9kJyA6IHVuZGVmaW5lZCxcbiAgICAgIHZhbHVlOiAoZW5hYmxlZC5wZXJpb2QgJiYgZW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSkgP1xuICAgICAgICBmb3JtYXRQZXJpb2RMYWJlbChzZWxlY3RlZFN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSA6ICcnLFxuICAgIH07XG4gIH1cblxuICBpbml0UmVsYXRpdmVSYW5nZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgZW5hYmxlZCwgcmVsYXRpdmVSYW5nZSwgdHJhbnNsYXRpb25zIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcmVsYXRpdmVSYW5nZSB8fCB7fTtcblxuICAgIGlmIChlbmREYXRlICYmIHN0YXJ0RGF0ZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRTdGFydERhdGUgPSBnZXRSZWxhdGl2ZU9wdGlvbihzdGFydERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IGdldFJlbGF0aXZlT3B0aW9uKGVuZERhdGUsIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIGVuZERhdGU6IHNlbGVjdGVkRW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGU6IHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZTogc2VsZWN0ZWRFbmREYXRlICYmIHNlbGVjdGVkU3RhcnREYXRlID8gJ3JlbGF0aXZlJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWU6IChlbmFibGVkLnJlbGF0aXZlICYmIHNlbGVjdGVkRW5kRGF0ZSAmJiBzZWxlY3RlZFN0YXJ0RGF0ZSkgP1xuICAgICAgICAgIGAke3NlbGVjdGVkU3RhcnREYXRlLmxhYmVsfSAtICR7c2VsZWN0ZWRFbmREYXRlLmxhYmVsfWAgOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkUmFuZ2VUeXBlIH0gPSBldmVudDtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXNbYGdldCR7c2VsZWN0ZWRSYW5nZVR5cGUucmVwbGFjZSgvXFx3LywgYyA9PiBjLnRvVXBwZXJDYXNlKCkpfVN0YXRlYF0oKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2VsZWN0ZWRSYW5nZVR5cGUsXG4gICAgfSk7XG4gICAgY29uc3QgeyBzdGFydERhdGUsIGVuZERhdGUgfSA9IHN0YXRlO1xuICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xuICAgICAgb25DaGFuZ2UoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKGV2ZW50KTtcblxuICAgIGNvbnN0IHsgc3RhcnREYXRlLCBlbmREYXRlIH0gPSBldmVudDtcbiAgICBpZiAoc3RhcnREYXRlICYmIGVuZERhdGUpIHtcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogIXRoaXMuc3RhdGUuc2hvd092ZXJsYXkgfSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgZGlydHkgc29sdXRpb24gYW5kIGMvc2hvdWxkIGJlIGZpeGVkLlxuICAgKiBSb290IGNhdXNlOiBkYXktcGlja2VyIGlzIHJlbmRlcmVkIHRvIHJvb3QgZWxlbWVudCwgbm90IGluc2lkZSBwb3BvdmVyIGVsZWVtbnQuXG4gICAqIFRoZXJlZm9yZSBjbGljayBjb21pbmcgZm9ybSBkYXktcGlja2VyIGFyZSBjb25zaWRlcnMgYXMgb3V0c2lkZSBjbGljayBvZiBwb3BvdmVyXG4gICAqIGFuZCBwb3BvdmVyIHdvdWxkIGJlIGNsb3NlIHdpdGhvdXQgZXZlbnQgcHJldmVudERlZmF1bHQuXG4gICAqIE9uZSBzb2x1dGlvbiBpcyBwYXNzaW5nIGF0IGxlYXN0IHRyZWUgY2FsbGJhY2tzIGZvciByZWFjdC1kYXRldGltZTogb25XZWVrQ2xpY2ssXG4gICAqIG9uQ2FwdGlvbkNsaWNrIGFuZCBjdXN0b20gb25DbGljayBmb3IgY3VzdG9tIGNhcHRpb24gb2YgcmVhY3QtZGF0ZXRpbWUuXG4gICAqL1xuICBoYW5kbGVIaWRlID0gZSA9PiAoXG4gICAgZS50YXJnZXQgJiYgZS50YXJnZXQucGFyZW50Tm9kZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZSAmJiBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmNsdWRlcygnRGF5UGlja2VyJykgP1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIDpcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93T3ZlcmxheTogZmFsc2UgfSlcbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZW5hYmxlZCxcbiAgICAgIGlkLFxuICAgICAgaW5wdXRSZWYsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgdHJhbnNsYXRpb25zLFxuICAgICAgd2lkdGgsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgcGVyaW9kLFxuICAgICAgcmVsYXRpdmVSYW5nZSxcbiAgICAgIHNlbGVjdGVkUmFuZ2VUeXBlLFxuICAgICAgc2hvd092ZXJsYXksXG4gICAgICB2YWx1ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhYnNvbHV0ZVJhbmdlID0ge1xuICAgICAgLi4udGhpcy5wcm9wcy5hYnNvbHV0ZVJhbmdlLFxuICAgICAgLi4udGhpcy5zdGF0ZS5hYnNvbHV0ZVJhbmdlLFxuICAgIH07XG5cbiAgICBjb25zdCBEYXRlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICAgIHdpZHRoOiAke3dpZHRofTtcbiAgICBgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxEYXRlUmFuZ2VTZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDxSZWFkT25seUlucHV0PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaW5wdXRSZWY9eyhlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBlbDtcbiAgICAgICAgICAgICAgICBpbnB1dFJlZihlbCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgICAgICByZWFkT25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1JlYWRPbmx5SW5wdXQ+XG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIHNob3c9e3Nob3dPdmVybGF5fVxuICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhhbmRsZUhpZGV9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgY29udGFpbmVyPXt0aGlzfVxuICAgICAgICAgICAgcm9vdENsb3NlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERhdGVSYW5nZVBvcG92ZXJcbiAgICAgICAgICAgICAgYWJzb2x1dGVSYW5nZT17YWJzb2x1dGVSYW5nZX1cbiAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgICAgb25SYW5nZVR5cGVDaGFuZ2U9e3RoaXMuaGFuZGxlUmFuZ2VUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHBlcmlvZD17cGVyaW9kfVxuICAgICAgICAgICAgICBzZWxlY3RlZFJhbmdlVHlwZT17c2VsZWN0ZWRSYW5nZVR5cGV9XG4gICAgICAgICAgICAgIHJlbGF0aXZlUmFuZ2U9e3JlbGF0aXZlUmFuZ2V9XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dHJhbnNsYXRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgIDwvRGF0ZVJhbmdlU2VjdGlvbj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iXX0=