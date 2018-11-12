'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFloatingSelect = require('@opuscapita/react-floating-select');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

var _dateSection = require('../date-section.components');

var _dateSection2 = _interopRequireDefault(_dateSection);

var _hyphen = require('../hyphen.component');

var _hyphen2 = _interopRequireDefault(_hyphen);

var _propTypes = require('./prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _defaultProps = require('./default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _relativeOptions = require('./relative-options');

var _relativeOptions2 = _interopRequireDefault(_relativeOptions);

var _translate = require('../../translations/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable jsx-a11y/label-has-for */


var RelativeRangeSection = _styledComponents2.default.div(_templateObject, _ocCmCommonLayouts.theme.gutterWidth);

var RelativeDateRange = (_temp = _class = function (_React$PureComponent) {
  _inherits(RelativeDateRange, _React$PureComponent);

  function RelativeDateRange(props) {
    _classCallCheck(this, RelativeDateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var endDate = props.endDate,
        startDate = props.startDate,
        translations = props.translations;

    var options = (0, _relativeOptions2.default)((0, _translate2.default)(translations, 'dates'));
    _this.state = {
      endDate: endDate,
      endDateOptions: startDate ? _this.filterEndDateOptions(startDate, options) : options,
      startDate: startDate,
      startDateOptions: endDate ? _this.filterStartDateOptions(endDate, options) : options
    };
    return _this;
  }

  RelativeDateRange.prototype.render = function render() {
    var _state = this.state,
        startDateOptions = _state.startDateOptions,
        endDateOptions = _state.endDateOptions,
        startDate = _state.startDate,
        endDate = _state.endDate;
    var translations = this.props.translations;


    return _react2.default.createElement(
      RelativeRangeSection,
      null,
      _react2.default.createElement(
        _dateSection2.default,
        null,
        _react2.default.createElement(
          _ocCmCommonLayouts.Content.InputColumn,
          {
            className: 'relative-start-date',
            id: 'relativeStartDate',
            label: (0, _translate2.default)(translations, 'startDate')
          },
          _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
            clearable: false,
            onChange: this.handleStartDateChange,
            options: startDateOptions,
            value: startDate
          }))
        )
      ),
      _react2.default.createElement(_hyphen2.default, null),
      _react2.default.createElement(
        _dateSection2.default,
        null,
        _react2.default.createElement(
          _ocCmCommonLayouts.Content.InputColumn,
          {
            className: 'relative-end-date',
            id: 'relativeEndDate',
            label: (0, _translate2.default)(translations, 'endDate')
          },
          _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
            clearable: false,
            onChange: this.handleEndDateChange,
            options: endDateOptions,
            value: endDate
          }))
        )
      )
    );
  };

  return RelativeDateRange;
}(_react2.default.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.filterEndDateOptions = function (startDate, endDateOptions) {
    var options = startDate.past ? endDateOptions : endDateOptions.filter(function (date) {
      return !date.past;
    });
    return options.filter(function (date) {
      return date.granularity !== startDate.granularity || startDate.order <= date.order;
    });
  };

  this.filterStartDateOptions = function (endDate, startDateOptions) {
    var options = endDate.past ? startDateOptions.filter(function (date) {
      return date.past;
    }) : startDateOptions;
    return options.filter(function (date) {
      return date.granularity !== endDate.granularity || date.order <= endDate.order;
    });
  };

  this.handleStartDateChange = function (selectedStartDate) {
    var startDate = selectedStartDate.value.moment ? selectedStartDate : Object.assign({}, selectedStartDate, { value: _extends({}, selectedStartDate.value, { moment: _constants2.default.START }) });
    var endDateOptions = _this2.filterEndDateOptions(startDate, _this2.state.endDateOptions);
    var endDate = _this2.state.endDate;

    _this2.setState({ endDateOptions: endDateOptions, startDate: startDate });
    var state = {
      startDate: startDate.value,
      relativeRange: {
        startDate: startDate
      }
    };
    if (endDate) {
      var endDateValue = endDate.value && !endDate.value.moment ? _extends({}, endDate.value, { moment: _constants2.default.END }) : endDate.value;
      state = _extends({}, state, {
        value: startDate.label + ' - ' + (endDate.label || ''),
        endDate: endDateValue,
        relativeRange: _extends({}, state.relativeRange, {
          endDate: endDate
        })
      });
    }
    _this2.props.onChange(state);
  };

  this.handleEndDateChange = function (selectedEndDate) {
    var endDate = selectedEndDate.value.moment ? selectedEndDate : Object.assign({}, selectedEndDate, { value: _extends({}, selectedEndDate.value, { moment: _constants2.default.END }) });
    var startDateOptions = _this2.filterStartDateOptions(endDate, _this2.state.startDateOptions);
    var startDate = _this2.state.startDate;

    _this2.setState({ startDateOptions: startDateOptions, endDate: endDate });
    var state = {
      endDate: endDate.value,
      relativeRange: {
        endDate: endDate
      }
    };
    if (startDate) {
      var startDateValue = startDate.value && !startDate.value.moment ? _extends({}, startDate.value, { moment: _constants2.default.START }) : startDate.value;
      state = _extends({}, state, {
        value: (startDate.label || '') + ' - ' + endDate.label,
        startDate: startDateValue,
        relativeRange: _extends({}, state.relativeRange, {
          startDate: startDate
        })
      });
    }
    _this2.props.onChange(state);
  };
}, _temp);
exports.default = RelativeDateRange;


RelativeDateRange.defaultProps = _defaultProps2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJSZWxhdGl2ZURhdGVSYW5nZSIsInByb3BzIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsInRyYW5zbGF0aW9ucyIsIm9wdGlvbnMiLCJzdGF0ZSIsImVuZERhdGVPcHRpb25zIiwiZmlsdGVyRW5kRGF0ZU9wdGlvbnMiLCJzdGFydERhdGVPcHRpb25zIiwiZmlsdGVyU3RhcnREYXRlT3B0aW9ucyIsInJlbmRlciIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJwYXN0IiwiZmlsdGVyIiwiZGF0ZSIsImdyYW51bGFyaXR5Iiwib3JkZXIiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsInZhbHVlIiwibW9tZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiQ29uc3RhbnRzIiwiU1RBUlQiLCJzZXRTdGF0ZSIsInJlbGF0aXZlUmFuZ2UiLCJlbmREYXRlVmFsdWUiLCJFTkQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRFbmREYXRlIiwic3RhcnREYXRlVmFsdWUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7MEZBYkE7OztBQWVBLElBQU1BLHVCQUF1QkMsMkJBQU9DLEdBQTlCLGtCQUtPQyx5QkFBTUMsV0FMYixDQUFOOztJQVFxQkMsaUI7OztBQUNuQiw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixnQ0FBTUEsS0FBTixDQURp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LEVBQUVaLG9CQUFZWSxnQkFBZ0JaLEtBQTVCLElBQW1DQyxRQUFRRyxvQkFBVUssR0FBckQsR0FBRixFQUZGLENBREY7QUFLQSxRQUFNdEIsbUJBQW1CLE9BQUtDLHNCQUFMLENBQTRCUixPQUE1QixFQUFxQyxPQUFLSSxLQUFMLENBQVdHLGdCQUFoRCxDQUF6QjtBQU55QyxRQU9qQ04sU0FQaUMsR0FPbkIsT0FBS0csS0FQYyxDQU9qQ0gsU0FQaUM7O0FBUXpDLFdBQUt5QixRQUFMLENBQWMsRUFBRW5CLGtDQUFGLEVBQW9CUCxnQkFBcEIsRUFBZDtBQUNBLFFBQUlJLFFBQVE7QUFDVkosZUFBU0EsUUFBUW9CLEtBRFA7QUFFVk8scUJBQWU7QUFDYjNCO0FBRGE7QUFGTCxLQUFaO0FBTUEsUUFBSUMsU0FBSixFQUFlO0FBQ2IsVUFBTWdDLGlCQUFpQmhDLFVBQVVtQixLQUFWLElBQW1CLENBQUNuQixVQUFVbUIsS0FBVixDQUFnQkMsTUFBcEMsZ0JBQ2RwQixVQUFVbUIsS0FESSxJQUNHQyxRQUFRRyxvQkFBVUMsS0FEckIsTUFFbkJ4QixVQUFVbUIsS0FGZDtBQUdBaEIsMkJBQ0tBLEtBREw7QUFFRWdCLGdCQUFVbkIsVUFBVTZCLEtBQVYsSUFBbUIsRUFBN0IsWUFBcUM5QixRQUFROEIsS0FGL0M7QUFHRTdCLG1CQUFXZ0MsY0FIYjtBQUlFTixvQ0FDS3ZCLE1BQU11QixhQURYO0FBRUUxQjtBQUZGO0FBSkY7QUFTRDtBQUNELFdBQUtGLEtBQUwsQ0FBV2dDLFFBQVgsQ0FBb0IzQixLQUFwQjtBQUNELEc7O2tCQWpHa0JOLGlCOzs7QUFvSnJCQSxrQkFBa0JvQyxZQUFsQixHQUFpQ0Esc0JBQWpDIiwiZmlsZSI6InJlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbG9hdGluZ1NlbGVjdCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWZsb2F0aW5nLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250ZW50LCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCByZWxhdGl2ZU9wdGlvbnMgZnJvbSAnLi9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFJlbGF0aXZlUmFuZ2VTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAwIDA7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxhdGl2ZURhdGVSYW5nZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgZW5kRGF0ZSwgc3RhcnREYXRlLCB0cmFuc2xhdGlvbnMgfSA9IHByb3BzO1xuICAgIGNvbnN0IG9wdGlvbnMgPSByZWxhdGl2ZU9wdGlvbnModHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RhdGVzJykpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgZW5kRGF0ZU9wdGlvbnM6IHN0YXJ0RGF0ZSA/XG4gICAgICAgIHRoaXMuZmlsdGVyRW5kRGF0ZU9wdGlvbnMoc3RhcnREYXRlLCBvcHRpb25zKSA6XG4gICAgICAgIG9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBzdGFydERhdGVPcHRpb25zOiBlbmREYXRlID9cbiAgICAgICAgdGhpcy5maWx0ZXJTdGFydERhdGVPcHRpb25zKGVuZERhdGUsIG9wdGlvbnMpIDpcbiAgICAgICAgb3B0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgZmlsdGVyRW5kRGF0ZU9wdGlvbnMgPSAoc3RhcnREYXRlLCBlbmREYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzdGFydERhdGUucGFzdCA/IGVuZERhdGVPcHRpb25zIDpcbiAgICAgIGVuZERhdGVPcHRpb25zLmZpbHRlcihkYXRlID0+ICFkYXRlLnBhc3QpO1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihkYXRlID0+XG4gICAgICBkYXRlLmdyYW51bGFyaXR5ICE9PSBzdGFydERhdGUuZ3JhbnVsYXJpdHkgfHxcbiAgICAgIHN0YXJ0RGF0ZS5vcmRlciA8PSBkYXRlLm9yZGVyKTtcbiAgfVxuXG4gIGZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMgPSAoZW5kRGF0ZSwgc3RhcnREYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBlbmREYXRlLnBhc3QgP1xuICAgICAgc3RhcnREYXRlT3B0aW9ucy5maWx0ZXIoZGF0ZSA9PiBkYXRlLnBhc3QpIDpcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnM7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKGRhdGUgPT5cbiAgICAgIGRhdGUuZ3JhbnVsYXJpdHkgIT09IGVuZERhdGUuZ3JhbnVsYXJpdHkgfHxcbiAgICAgIGRhdGUub3JkZXIgPD0gZW5kRGF0ZS5vcmRlcik7XG4gIH1cblxuICBoYW5kbGVTdGFydERhdGVDaGFuZ2UgPSAoc2VsZWN0ZWRTdGFydERhdGUpID0+IHtcbiAgICBjb25zdCBzdGFydERhdGUgPSBzZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgPyBzZWxlY3RlZFN0YXJ0RGF0ZSA6XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSwgc2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgIHsgdmFsdWU6IHsgLi4uc2VsZWN0ZWRTdGFydERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLlNUQVJUIH0gfSxcbiAgICAgICk7XG4gICAgY29uc3QgZW5kRGF0ZU9wdGlvbnMgPSB0aGlzLmZpbHRlckVuZERhdGVPcHRpb25zKHN0YXJ0RGF0ZSwgdGhpcy5zdGF0ZS5lbmREYXRlT3B0aW9ucyk7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlT3B0aW9ucywgc3RhcnREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLnZhbHVlLFxuICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKGVuZERhdGUpIHtcbiAgICAgIGNvbnN0IGVuZERhdGVWYWx1ZSA9IGVuZERhdGUudmFsdWUgJiYgIWVuZERhdGUudmFsdWUubW9tZW50XG4gICAgICAgID8geyAuLi5lbmREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5FTkQgfVxuICAgICAgICA6IGVuZERhdGUudmFsdWU7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWx9IC0gJHtlbmREYXRlLmxhYmVsIHx8ICcnfWAsXG4gICAgICAgIGVuZERhdGU6IGVuZERhdGVWYWx1ZSxcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIC4uLnN0YXRlLnJlbGF0aXZlUmFuZ2UsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChzZWxlY3RlZEVuZERhdGUpID0+IHtcbiAgICBjb25zdCBlbmREYXRlID0gc2VsZWN0ZWRFbmREYXRlLnZhbHVlLm1vbWVudCA/IHNlbGVjdGVkRW5kRGF0ZSA6XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSwgc2VsZWN0ZWRFbmREYXRlLFxuICAgICAgICB7IHZhbHVlOiB7IC4uLnNlbGVjdGVkRW5kRGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuRU5EIH0gfSxcbiAgICAgICk7XG4gICAgY29uc3Qgc3RhcnREYXRlT3B0aW9ucyA9IHRoaXMuZmlsdGVyU3RhcnREYXRlT3B0aW9ucyhlbmREYXRlLCB0aGlzLnN0YXRlLnN0YXJ0RGF0ZU9wdGlvbnMpO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGVPcHRpb25zLCBlbmREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IGVuZERhdGUudmFsdWUsXG4gICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgY29uc3Qgc3RhcnREYXRlVmFsdWUgPSBzdGFydERhdGUudmFsdWUgJiYgIXN0YXJ0RGF0ZS52YWx1ZS5tb21lbnRcbiAgICAgICAgPyB7IC4uLnN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuU1RBUlQgfVxuICAgICAgICA6IHN0YXJ0RGF0ZS52YWx1ZTtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbCB8fCAnJ30gLSAke2VuZERhdGUubGFiZWx9YCxcbiAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGVWYWx1ZSxcbiAgICAgICAgcmVsYXRpdmVSYW5nZToge1xuICAgICAgICAgIC4uLnN0YXRlLnJlbGF0aXZlUmFuZ2UsXG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RhcnREYXRlT3B0aW9ucyxcbiAgICAgIGVuZERhdGVPcHRpb25zLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVsYXRpdmVSYW5nZVNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cInJlbGF0aXZlU3RhcnREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnc3RhcnREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXJ0RGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8RGF0ZVNlY3Rpb24+XG4gICAgICAgICAgPENvbnRlbnQuSW5wdXRDb2x1bW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlLWVuZC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicmVsYXRpdmVFbmREYXRlXCJcbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZW5kRGF0ZScpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17ZW5kRGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICA8L1JlbGF0aXZlUmFuZ2VTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuUmVsYXRpdmVEYXRlUmFuZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5SZWxhdGl2ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=