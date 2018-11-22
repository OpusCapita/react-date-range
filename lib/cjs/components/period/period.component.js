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

  this.initEndDate = function (endDate) {
    return endDate.moment ? endDate : _extends({}, endDate, {
      moment: endDate.timing < 0 ? _constants2.default.START : _constants2.default.END
    });
  };

  this.initStartDate = function (startDate) {
    return startDate.value && startDate.value.moment ? startDate : _extends({}, startDate, {
      value: _extends({}, startDate.value, {
        moment: _constants2.default.START
      })
    });
  };

  this.handleStartDateChange = function (selectedStartDate) {
    var translations = _this2.props.translations;
    var endDate = _this2.state.endDate;


    var startDate = _this2.initStartDate(selectedStartDate);
    var date = _this2.initEndDate(endDate);
    _this2.setState({ startDate: startDate });
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

  this.handleEndDateChange = function (selectedEndDate) {
    var translations = _this2.props.translations;
    var startDate = _this2.state.startDate;

    var date = _this2.initStartDate(startDate);
    var endDate = _this2.initEndDate(selectedEndDate);
    _this2.setState({ endDate: endDate });
    var state = {
      endDate: endDate,
      period: {
        endDate: endDate
      }
    };
    if (startDate) {
      state = {
        endDate: endDate,
        value: (0, _periodLabel2.default)(startDate, endDate, translations),
        startDate: date.value,
        period: {
          endDate: endDate,
          startDate: startDate
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJQZXJpb2RTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIkNvbnRlbnQiLCJJbnB1dENvbHVtbiIsIkdyYW51bGFyaXR5U2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIlBlcmlvZCIsInByb3BzIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsInN0YXRlIiwicmVuZGVyIiwidHJhbnNsYXRpb25zIiwic3RhcnREYXRlT3B0aW9ucyIsImdyYW51bGFyaXRpZXMiLCJnZXRHcmFudWxhcml0eU9wdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJ0aW1pbmciLCJoYW5kbGVUaW1pbmdDaGFuZ2UiLCJoYW5kbGVHcmFudWxhcml0eUNoYW5nZSIsImdldFNlbGVjdGVkR3JhbnVsYXJpdHkiLCJ1bml0IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwibGFiZWwiLCJ2YWx1ZSIsIlJlbGF0aXZlQ29uc3RhbnRzIiwiREFZIiwiV0VFSyIsIk1PTlRIIiwiZmluZCIsImdyYW51bGFyaXR5IiwiaW5pdEVuZERhdGUiLCJtb21lbnQiLCJTVEFSVCIsIkVORCIsImluaXRTdGFydERhdGUiLCJzZWxlY3RlZFN0YXJ0RGF0ZSIsImRhdGUiLCJzZXRTdGF0ZSIsInBlcmlvZCIsIm9uQ2hhbmdlIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsInNlbGVjdGVkRW5kRGF0ZSIsImV2ZW50IiwiTnVtYmVyIiwiaXNOYU4iLCJ0YXJnZXQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OzBGQWRBOzs7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LHVCLEdBQTBCLFVBQUNFLElBQUQsRUFBVTtBQUFBLFFBQzFCYixPQUQwQixHQUNkLE9BQUtFLEtBRFMsQ0FDMUJGLE9BRDBCOztBQUVsQyxRQUFNbUMsK0JBQ0RuQyxPQURDO0FBRUphLFlBQU1BLEtBQUtJO0FBRlAsTUFBTjtBQUlBLFdBQUtpQixtQkFBTCxDQUF5QkMsZUFBekI7QUFDRCxHOztrQkFuSGtCckMsTTs7O0FBdUtyQkEsT0FBTzBDLFlBQVAsR0FBc0JBLHNCQUF0QiIsImZpbGUiOiJwZXJpb2QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBGbG9hdGluZ1NlbGVjdCB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWZsb2F0aW5nLXNlbGVjdCc7XG5pbXBvcnQgeyBDb250ZW50LCBQcmltaXRpdmUsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IGRlZmF1bHRQcm9wcyBmcm9tICcuL2RlZmF1bHQtcHJvcHMnO1xuaW1wb3J0IGZvcm1hdExhYmVsIGZyb20gJy4vcGVyaW9kLWxhYmVsLmZvcm1hdHRlcic7XG5pbXBvcnQgSHlwaGVuIGZyb20gJy4uL2h5cGhlbi5jb21wb25lbnQnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlbGF0aXZlQ29uc3RhbnRzIGZyb20gJy4uL3JlbGF0aXZlL2NvbnN0YW50cyc7XG5pbXBvcnQgcmVsYXRpdmVEYXRlT3B0aW9ucyBmcm9tICcuLi9yZWxhdGl2ZS9yZWxhdGl2ZS1vcHRpb25zJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL3RyYW5zbGF0ZSc7XG5cbmNvbnN0IFBlcmlvZFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbmA7XG5cbmNvbnN0IENvdW50U2VjdGlvbiA9IHN0eWxlZChDb250ZW50LklucHV0Q29sdW1uKWBcbiAgd2lkdGg6IDgwcHg7XG5gO1xuXG5jb25zdCBHcmFudWxhcml0eVNlY3Rpb24gPSBzdHlsZWQoQ29udGVudC5JbnB1dENvbHVtbilgXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJpb2QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBzdGFydERhdGUsXG4gICAgfTtcbiAgfVxuXG4gIGdldEdyYW51bGFyaXR5T3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2RheScsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLkRBWSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnd2VlaycsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLldFRUssXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ21vbnRoJywgJ3BsdXJhbCcpLFxuICAgICAgICB2YWx1ZTogUmVsYXRpdmVDb25zdGFudHMuTU9OVEgsXG4gICAgICB9LFxuICAgIF07XG4gIH07XG5cbiAgZ2V0U2VsZWN0ZWRHcmFudWxhcml0eSA9IChncmFudWxhcml0aWVzLCB2YWx1ZSkgPT4gKFxuICAgIGdyYW51bGFyaXRpZXMuZmluZChncmFudWxhcml0eSA9PiBncmFudWxhcml0eS52YWx1ZSA9PT0gdmFsdWUpIHx8IGdyYW51bGFyaXRpZXNbMF1cbiAgKTtcblxuICBpbml0RW5kRGF0ZSA9IGVuZERhdGUgPT4gKFxuICAgIGVuZERhdGUubW9tZW50ID8gZW5kRGF0ZSA6XG4gICAgICB7XG4gICAgICAgIC4uLmVuZERhdGUsXG4gICAgICAgIG1vbWVudDogZW5kRGF0ZS50aW1pbmcgPCAwID8gUmVsYXRpdmVDb25zdGFudHMuU1RBUlQgOiBSZWxhdGl2ZUNvbnN0YW50cy5FTkQsXG4gICAgICB9XG4gICk7XG5cbiAgaW5pdFN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZSA9PiAoXG4gICAgc3RhcnREYXRlLnZhbHVlICYmIHN0YXJ0RGF0ZS52YWx1ZS5tb21lbnQgPyBzdGFydERhdGUgOlxuICAgICAge1xuICAgICAgICAuLi5zdGFydERhdGUsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgLi4uc3RhcnREYXRlLnZhbHVlLFxuICAgICAgICAgIG1vbWVudDogUmVsYXRpdmVDb25zdGFudHMuU1RBUlQsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICk7XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKHNlbGVjdGVkU3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5pbml0U3RhcnREYXRlKHNlbGVjdGVkU3RhcnREYXRlKTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5pbml0RW5kRGF0ZShlbmREYXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlIH0pO1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZTogZGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLnZhbHVlLFxuICAgICAgdmFsdWU6IGZvcm1hdExhYmVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSxcbiAgICAgIHBlcmlvZDoge1xuICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIGVuZERhdGU6IGRhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKHNlbGVjdGVkRW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RhcnREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmluaXRTdGFydERhdGUoc3RhcnREYXRlKTtcbiAgICBjb25zdCBlbmREYXRlID0gdGhpcy5pbml0RW5kRGF0ZShzZWxlY3RlZEVuZERhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmREYXRlIH0pO1xuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgdmFsdWU6IGZvcm1hdExhYmVsKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdHJhbnNsYXRpb25zKSxcbiAgICAgICAgc3RhcnREYXRlOiBkYXRlLnZhbHVlLFxuICAgICAgICBwZXJpb2Q6IHtcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlVGltaW5nQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGltaW5nID0gTnVtYmVyLmlzTmFOKGV2ZW50LnRhcmdldC52YWx1ZSkgPyAwIDogTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc3QgeyBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IHtcbiAgICAgIC4uLmVuZERhdGUsXG4gICAgICB0aW1pbmcsXG4gICAgICBtb21lbnQ6IHRpbWluZyA8IDAgPyBSZWxhdGl2ZUNvbnN0YW50cy5TVEFSVCA6IFJlbGF0aXZlQ29uc3RhbnRzLkVORCxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZShzZWxlY3RlZEVuZERhdGUpO1xuICB9XG5cbiAgaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2UgPSAodW5pdCkgPT4ge1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSB7XG4gICAgICAuLi5lbmREYXRlLFxuICAgICAgdW5pdDogdW5pdC52YWx1ZSxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZShzZWxlY3RlZEVuZERhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZU9wdGlvbnMgPSByZWxhdGl2ZURhdGVPcHRpb25zKHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBncmFudWxhcml0aWVzID0gdGhpcy5nZXRHcmFudWxhcml0eU9wdGlvbnMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGVyaW9kU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2Qtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cInBlcmlvZFN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2Zyb20nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxDb3VudFNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtZW5kLWRhdGVcIlxuICAgICAgICAgIGlkPVwicGVyaW9kRW5kRGF0ZVwiXG4gICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICd0bycpfVxuICAgICAgICA+XG4gICAgICAgICAgPFByaW1pdGl2ZS5JbnB1dCB2YWx1ZT17ZW5kRGF0ZS50aW1pbmd9IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1pbmdDaGFuZ2V9IC8+XG4gICAgICAgIDwvQ291bnRTZWN0aW9uPlxuICAgICAgICA8R3JhbnVsYXJpdHlTZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWdyYW51bGFyaXR5XCJcbiAgICAgICAgICBpZD1cInBlcmlvZEdyYW51bGFyaXR5XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGbG9hdGluZ1NlbGVjdFxuICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2V9XG4gICAgICAgICAgICBvcHRpb25zPXtncmFudWxhcml0aWVzfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuZ2V0U2VsZWN0ZWRHcmFudWxhcml0eShncmFudWxhcml0aWVzLCBlbmREYXRlLnVuaXQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JhbnVsYXJpdHlTZWN0aW9uPlxuICAgICAgPC9QZXJpb2RTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuUGVyaW9kLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuUGVyaW9kLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==