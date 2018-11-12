'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 80px;\n'], ['\n  width: 80px;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  align-self: flex-end;\n  width: 140px;\n  margin-left: ', ';\n'], ['\n  align-self: flex-end;\n  width: 140px;\n  margin-left: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFloatingSelect = require('@opuscapita/react-floating-select');

var _ocCmCommonLayouts = require('@opuscapita/oc-cm-common-layouts');

var _dateSection = require('../date-section.components');

var _dateSection2 = _interopRequireDefault(_dateSection);

var _defaultProps = require('./default-props');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _periodLabel = require('./period-label.formatter');

var _periodLabel2 = _interopRequireDefault(_periodLabel);

var _hyphen = require('../hyphen.component');

var _hyphen2 = _interopRequireDefault(_hyphen);

var _propTypes = require('./prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('../relative/constants');

var _constants2 = _interopRequireDefault(_constants);

var _relativeOptions = require('../relative/relative-options');

var _relativeOptions2 = _interopRequireDefault(_relativeOptions);

var _translate = require('../../translations/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable jsx-a11y/label-has-for */


var PeriodSection = _styledComponents2.default.div(_templateObject, _ocCmCommonLayouts.theme.gutterWidth);

var CountSection = (0, _styledComponents2.default)(_ocCmCommonLayouts.Content.InputColumn)(_templateObject2);

var GranularitySection = (0, _styledComponents2.default)(_ocCmCommonLayouts.Content.InputColumn)(_templateObject3, _ocCmCommonLayouts.theme.halfGutterWidth);

var Period = (_temp = _class = function (_React$PureComponent) {
  _inherits(Period, _React$PureComponent);

  function Period(props) {
    _classCallCheck(this, Period);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var endDate = props.endDate,
        startDate = props.startDate;

    _this.state = {
      endDate: endDate,
      startDate: startDate
    };
    return _this;
  }

  Period.prototype.render = function render() {
    var translations = this.props.translations;

    var startDateOptions = (0, _relativeOptions2.default)((0, _translate2.default)(translations, 'dates'));
    var _state = this.state,
        endDate = _state.endDate,
        startDate = _state.startDate;

    var granularities = this.getGranularityOptions();

    return _react2.default.createElement(
      PeriodSection,
      null,
      _react2.default.createElement(
        _dateSection2.default,
        null,
        _react2.default.createElement(
          _ocCmCommonLayouts.Content.InputColumn,
          {
            className: 'period-start-date',
            id: 'periodStartDate',
            label: (0, _translate2.default)(translations, 'from')
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
        CountSection,
        {
          className: 'period-end-date',
          id: 'periodEndDate',
          label: (0, _translate2.default)(translations, 'to')
        },
        _react2.default.createElement(_ocCmCommonLayouts.Primitive.Input, { value: endDate.timing, type: 'number', onChange: this.handleTimingChange })
      ),
      _react2.default.createElement(
        GranularitySection,
        {
          className: 'period-granularity',
          id: 'periodGranularity'
        },
        _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
          clearable: false,
          onChange: this.handleGranularityChange,
          options: granularities,
          value: this.getSelectedGranularity(granularities, endDate.unit)
        }))
      )
    );
  };

  return Period;
}(_react2.default.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getGranularityOptions = function () {
    var translations = _this2.props.translations;

    return [{
      label: (0, _translate2.default)(translations, 'day', 'plural'),
      value: _constants2.default.DAY
    }, {
      label: (0, _translate2.default)(translations, 'week', 'plural'),
      value: _constants2.default.WEEK
    }, {
      label: (0, _translate2.default)(translations, 'month', 'plural'),
      value: _constants2.default.MONTH
    }];
  };

  this.getSelectedGranularity = function (granularities, value) {
    return granularities.find(function (granularity) {
      return granularity.value === value;
    }) || granularities[0];
  };

  this.handleStartDateChange = function (selectedStartDate) {
    var translations = _this2.props.translations;
    var endDate = _this2.state.endDate;

    var startDate = _extends({}, selectedStartDate, {
      value: _extends({}, selectedStartDate.value, {
        moment: endDate.timing < 0 ? _constants2.default.END : _constants2.default.START
      })
    });
    _this2.setState({ startDate: startDate });
    var date = endDate.moment ? endDate : _extends({}, endDate, {
      moment: endDate.timing < 0 ? _constants2.default.START : _constants2.default.END
    });
    var state = {
      endDate: date,
      startDate: startDate.value,
      value: (0, _periodLabel2.default)(startDate, endDate, translations),
      period: {
        startDate: startDate,
        endDate: date
      }
    };
    _this2.props.onChange(state);
  };

  this.handleEndDateChange = function (endDate) {
    var translations = _this2.props.translations;
    var startDate = _this2.state.startDate;

    _this2.setState({ endDate: endDate });
    var state = {
      endDate: endDate,
      period: {
        endDate: endDate
      }
    };
    if (startDate) {
      var date = _extends({}, startDate, {
        value: _extends({}, startDate.value, {
          moment: endDate.timing < 0 ? _constants2.default.END : _constants2.default.START
        })
      });
      state = {
        endDate: endDate,
        value: (0, _periodLabel2.default)(startDate, endDate, translations),
        startDate: date.value,
        period: {
          endDate: endDate,
          startDate: date
        }
      };
    }
    _this2.props.onChange(state);
  };

  this.handleTimingChange = function (event) {
    var timing = Number.isNaN(event.target.value) ? 0 : Number(event.target.value);
    var endDate = _this2.state.endDate;

    var selectedEndDate = _extends({}, endDate, {
      timing: timing,
      moment: timing < 0 ? _constants2.default.START : _constants2.default.END
    });
    _this2.handleEndDateChange(selectedEndDate);
  };

  this.handleGranularityChange = function (unit) {
    var endDate = _this2.state.endDate;

    var selectedEndDate = _extends({}, endDate, {
      unit: unit.value
    });
    _this2.handleEndDateChange(selectedEndDate);
  };
}, _temp);
exports.default = Period;


Period.defaultProps = _defaultProps2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJQZXJpb2RTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIkNvbnRlbnQiLCJJbnB1dENvbHVtbiIsIkdyYW51bGFyaXR5U2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIlBlcmlvZCIsInByb3BzIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsInN0YXRlIiwicmVuZGVyIiwidHJhbnNsYXRpb25zIiwic3RhcnREYXRlT3B0aW9ucyIsImdyYW51bGFyaXRpZXMiLCJnZXRHcmFudWxhcml0eU9wdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJ0aW1pbmciLCJoYW5kbGVUaW1pbmdDaGFuZ2UiLCJoYW5kbGVHcmFudWxhcml0eUNoYW5nZSIsImdldFNlbGVjdGVkR3JhbnVsYXJpdHkiLCJ1bml0IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibGFiZWwiLCJ2YWx1ZSIsIlJlbGF0aXZlQ29uc3RhbnRzIiwiREFZIiwiV0VFSyIsIk1PTlRIIiwiZmluZCIsImdyYW51bGFyaXR5Iiwic2VsZWN0ZWRTdGFydERhdGUiLCJtb21lbnQiLCJFTkQiLCJTVEFSVCIsInNldFN0YXRlIiwiZGF0ZSIsInBlcmlvZCIsIm9uQ2hhbmdlIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImV2ZW50IiwiTnVtYmVyIiwiaXNOYU4iLCJ0YXJnZXQiLCJzZWxlY3RlZEVuZERhdGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OzBGQWRBOzs7QUFnQkEsSUFBTUEsZ0JBQWdCQywyQkFBT0MsR0FB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S0k7QUFGUCxNQUFOO0FBSUEsV0FBS2UsbUJBQUwsQ0FBeUJLLGVBQXpCO0FBQ0QsRzs7a0JBOUdrQnZDLE07OztBQWtLckJBLE9BQU93QyxZQUFQLEdBQXNCQSxzQkFBdEIiLCJmaWxlIjoicGVyaW9kLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgRmxvYXRpbmdTZWxlY3QgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1mbG9hdGluZy1zZWxlY3QnO1xuaW1wb3J0IHsgQ29udGVudCwgUHJpbWl0aXZlLCB0aGVtZSB9IGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1sYXlvdXRzJztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBmb3JtYXRMYWJlbCBmcm9tICcuL3BlcmlvZC1sYWJlbC5mb3JtYXR0ZXInO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBSZWxhdGl2ZUNvbnN0YW50cyBmcm9tICcuLi9yZWxhdGl2ZS9jb25zdGFudHMnO1xuaW1wb3J0IHJlbGF0aXZlRGF0ZU9wdGlvbnMgZnJvbSAnLi4vcmVsYXRpdmUvcmVsYXRpdmUtb3B0aW9ucyc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy90cmFuc2xhdGUnO1xuXG5jb25zdCBQZXJpb2RTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gMCAwIDA7XG5gO1xuXG5jb25zdCBDb3VudFNlY3Rpb24gPSBzdHlsZWQoQ29udGVudC5JbnB1dENvbHVtbilgXG4gIHdpZHRoOiA4MHB4O1xuYDtcblxuY29uc3QgR3JhbnVsYXJpdHlTZWN0aW9uID0gc3R5bGVkKENvbnRlbnQuSW5wdXRDb2x1bW4pYFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyaW9kIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgc3RhcnREYXRlLFxuICAgIH07XG4gIH1cblxuICBnZXRHcmFudWxhcml0eU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXknLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5EQVksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3dlZWsnLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5XRUVLLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdtb250aCcsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLk1PTlRILFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xuXG4gIGdldFNlbGVjdGVkR3JhbnVsYXJpdHkgPSAoZ3JhbnVsYXJpdGllcywgdmFsdWUpID0+IChcbiAgICBncmFudWxhcml0aWVzLmZpbmQoZ3JhbnVsYXJpdHkgPT4gZ3JhbnVsYXJpdHkudmFsdWUgPT09IHZhbHVlKSB8fCBncmFudWxhcml0aWVzWzBdXG4gICk7XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKHNlbGVjdGVkU3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHtcbiAgICAgIC4uLnNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgLi4uc2VsZWN0ZWRTdGFydERhdGUudmFsdWUsXG4gICAgICAgIG1vbWVudDogZW5kRGF0ZS50aW1pbmcgPCAwID8gUmVsYXRpdmVDb25zdGFudHMuRU5EIDogUmVsYXRpdmVDb25zdGFudHMuU1RBUlQsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSB9KTtcbiAgICBjb25zdCBkYXRlID0gZW5kRGF0ZS5tb21lbnQgPyBlbmREYXRlIDpcbiAgICAgIHtcbiAgICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgICAgbW9tZW50OiBlbmREYXRlLnRpbWluZyA8IDAgPyBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCA6IFJlbGF0aXZlQ29uc3RhbnRzLkVORCxcbiAgICAgIH07XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlOiBkYXRlLFxuICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudmFsdWUsXG4gICAgICB2YWx1ZTogZm9ybWF0TGFiZWwoc3RhcnREYXRlLCBlbmREYXRlLCB0cmFuc2xhdGlvbnMpLFxuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgZW5kRGF0ZTogZGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUVuZERhdGVDaGFuZ2UgPSAoZW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICBjb25zdCBkYXRlID0ge1xuICAgICAgICAuLi5zdGFydERhdGUsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgLi4uc3RhcnREYXRlLnZhbHVlLFxuICAgICAgICAgIG1vbWVudDogZW5kRGF0ZS50aW1pbmcgPCAwID8gUmVsYXRpdmVDb25zdGFudHMuRU5EIDogUmVsYXRpdmVDb25zdGFudHMuU1RBUlQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0ZS52YWx1ZSxcbiAgICAgICAgcGVyaW9kOiB7XG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGU6IGRhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRpbWluZyA9IE51bWJlci5pc05hTihldmVudC50YXJnZXQudmFsdWUpID8gMCA6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSB7XG4gICAgICAuLi5lbmREYXRlLFxuICAgICAgdGltaW5nLFxuICAgICAgbW9tZW50OiB0aW1pbmcgPCAwID8gUmVsYXRpdmVDb25zdGFudHMuU1RBUlQgOiBSZWxhdGl2ZUNvbnN0YW50cy5FTkQsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2Uoc2VsZWN0ZWRFbmREYXRlKTtcbiAgfVxuXG4gIGhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlID0gKHVuaXQpID0+IHtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0ge1xuICAgICAgLi4uZW5kRGF0ZSxcbiAgICAgIHVuaXQ6IHVuaXQudmFsdWUsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUVuZERhdGVDaGFuZ2Uoc2VsZWN0ZWRFbmREYXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdGFydERhdGVPcHRpb25zID0gcmVsYXRpdmVEYXRlT3B0aW9ucyh0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZ3JhbnVsYXJpdGllcyA9IHRoaXMuZ2V0R3JhbnVsYXJpdHlPcHRpb25zKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmlvZFNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLXN0YXJ0LWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJwZXJpb2RTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdmcm9tJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTdGFydERhdGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3N0YXJ0RGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtzdGFydERhdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29udGVudC5JbnB1dENvbHVtbj5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgICAgPEh5cGhlbiAvPlxuICAgICAgICA8Q291bnRTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWVuZC1kYXRlXCJcbiAgICAgICAgICBpZD1cInBlcmlvZEVuZERhdGVcIlxuICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAndG8nKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxQcmltaXRpdmUuSW5wdXQgdmFsdWU9e2VuZERhdGUudGltaW5nfSB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltaW5nQ2hhbmdlfSAvPlxuICAgICAgICA8L0NvdW50U2VjdGlvbj5cbiAgICAgICAgPEdyYW51bGFyaXR5U2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1ncmFudWxhcml0eVwiXG4gICAgICAgICAgaWQ9XCJwZXJpb2RHcmFudWxhcml0eVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlfVxuICAgICAgICAgICAgb3B0aW9ucz17Z3JhbnVsYXJpdGllc31cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFNlbGVjdGVkR3JhbnVsYXJpdHkoZ3JhbnVsYXJpdGllcywgZW5kRGF0ZS51bml0KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyYW51bGFyaXR5U2VjdGlvbj5cbiAgICAgIDwvUGVyaW9kU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cblBlcmlvZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblBlcmlvZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=