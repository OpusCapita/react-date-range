'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n  margin-bottom: 0;\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: ', ' 0 0 0;\n  margin-bottom: 0;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: 80px;\n  margin-bottom: 0;\n'], ['\n  width: 80px;\n  margin-bottom: 0;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  align-self: flex-end;\n  width: 140px;\n  margin-left: ', ';\n  margin-bottom: ', ';\n'], ['\n  align-self: flex-end;\n  width: 140px;\n  margin-left: ', ';\n  margin-bottom: ', ';\n']);

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

var GranularitySection = (0, _styledComponents2.default)(_ocCmCommonLayouts.Content.InputColumn)(_templateObject3, _ocCmCommonLayouts.theme.halfGutterWidth, _ocCmCommonLayouts.theme.halfGutterWidth);

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
        _react2.default.createElement(_ocCmCommonLayouts.Primitive.Input, {
          value: endDate.timing,
          type: 'number',
          onBlur: this.handleTimingBlur,
          onChange: this.handleTimingChange
        })
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
    _this2.setState({ endDate: selectedEndDate });
  };

  this.handleTimingBlur = function () {
    var endDate = _this2.state.endDate;

    _this2.handleEndDateChange(endDate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlcmlvZC9wZXJpb2QuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJQZXJpb2RTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsIkNvdW50U2VjdGlvbiIsIkNvbnRlbnQiLCJJbnB1dENvbHVtbiIsIkdyYW51bGFyaXR5U2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIlBlcmlvZCIsInByb3BzIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsInN0YXRlIiwicmVuZGVyIiwidHJhbnNsYXRpb25zIiwic3RhcnREYXRlT3B0aW9ucyIsImdyYW51bGFyaXRpZXMiLCJnZXRHcmFudWxhcml0eU9wdGlvbnMiLCJoYW5kbGVTdGFydERhdGVDaGFuZ2UiLCJ0aW1pbmciLCJoYW5kbGVUaW1pbmdCbHVyIiwiaGFuZGxlVGltaW5nQ2hhbmdlIiwiaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2UiLCJnZXRTZWxlY3RlZEdyYW51bGFyaXR5IiwidW5pdCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImxhYmVsIiwidmFsdWUiLCJSZWxhdGl2ZUNvbnN0YW50cyIsIkRBWSIsIldFRUsiLCJNT05USCIsImZpbmQiLCJncmFudWxhcml0eSIsImluaXRFbmREYXRlIiwibW9tZW50IiwiU1RBUlQiLCJFTkQiLCJpbml0U3RhcnREYXRlIiwic2VsZWN0ZWRTdGFydERhdGUiLCJkYXRlIiwic2V0U3RhdGUiLCJwZXJpb2QiLCJvbkNoYW5nZSIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJzZWxlY3RlZEVuZERhdGUiLCJldmVudCIsIk51bWJlciIsImlzTmFOIiwidGFyZ2V0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7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a0JTO0FBSDdELE1BQU47QUFLQSxXQUFLSSxRQUFMLENBQWMsRUFBRWhDLFNBQVNvQyxlQUFYLEVBQWQ7QUFDRCxHOztPQUVEMUIsZ0IsR0FBbUIsWUFBTTtBQUFBLFFBQ2ZWLE9BRGUsR0FDSCxPQUFLRSxLQURGLENBQ2ZGLE9BRGU7O0FBRXZCLFdBQUttQyxtQkFBTCxDQUF5Qm5DLE9BQXpCO0FBQ0QsRzs7T0FFRFksdUIsR0FBMEIsVUFBQ0UsSUFBRCxFQUFVO0FBQUEsUUFDMUJkLE9BRDBCLEdBQ2QsT0FBS0UsS0FEUyxDQUMxQkYsT0FEMEI7O0FBRWxDLFFBQU1vQywrQkFDRHBDLE9BREM7QUFFSmMsWUFBTUEsS0FBS0k7QUFGUCxNQUFOO0FBSUEsV0FBS2lCLG1CQUFMLENBQXlCQyxlQUF6QjtBQUNELEc7O2tCQXhIa0J0QyxNOzs7QUFpTHJCQSxPQUFPMkMsWUFBUCxHQUFzQkEsc0JBQXRCIiwiZmlsZSI6InBlcmlvZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEZsb2F0aW5nU2VsZWN0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZmxvYXRpbmctc2VsZWN0JztcbmltcG9ydCB7IENvbnRlbnQsIFByaW1pdGl2ZSwgdGhlbWUgfSBmcm9tICdAb3B1c2NhcGl0YS9vYy1jbS1jb21tb24tbGF5b3V0cyc7XG5cbmltcG9ydCBEYXRlU2VjdGlvbiBmcm9tICcuLi9kYXRlLXNlY3Rpb24uY29tcG9uZW50cyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgZm9ybWF0TGFiZWwgZnJvbSAnLi9wZXJpb2QtbGFiZWwuZm9ybWF0dGVyJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgUmVsYXRpdmVDb25zdGFudHMgZnJvbSAnLi4vcmVsYXRpdmUvY29uc3RhbnRzJztcbmltcG9ydCByZWxhdGl2ZURhdGVPcHRpb25zIGZyb20gJy4uL3JlbGF0aXZlL3JlbGF0aXZlLW9wdGlvbnMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgUGVyaW9kU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9IDAgMCAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuYDtcblxuY29uc3QgQ291bnRTZWN0aW9uID0gc3R5bGVkKENvbnRlbnQuSW5wdXRDb2x1bW4pYFxuICB3aWR0aDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbmA7XG5cbmNvbnN0IEdyYW51bGFyaXR5U2VjdGlvbiA9IHN0eWxlZChDb250ZW50LklucHV0Q29sdW1uKWBcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHdpZHRoOiAxNDBweDtcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyaW9kIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUgfSA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgc3RhcnREYXRlLFxuICAgIH07XG4gIH1cblxuICBnZXRHcmFudWxhcml0eU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXknLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5EQVksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogdHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ3dlZWsnLCAncGx1cmFsJyksXG4gICAgICAgIHZhbHVlOiBSZWxhdGl2ZUNvbnN0YW50cy5XRUVLLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdtb250aCcsICdwbHVyYWwnKSxcbiAgICAgICAgdmFsdWU6IFJlbGF0aXZlQ29uc3RhbnRzLk1PTlRILFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xuXG4gIGdldFNlbGVjdGVkR3JhbnVsYXJpdHkgPSAoZ3JhbnVsYXJpdGllcywgdmFsdWUpID0+IChcbiAgICBncmFudWxhcml0aWVzLmZpbmQoZ3JhbnVsYXJpdHkgPT4gZ3JhbnVsYXJpdHkudmFsdWUgPT09IHZhbHVlKSB8fCBncmFudWxhcml0aWVzWzBdXG4gICk7XG5cbiAgaW5pdEVuZERhdGUgPSBlbmREYXRlID0+IChcbiAgICBlbmREYXRlLm1vbWVudCA/IGVuZERhdGUgOlxuICAgICAge1xuICAgICAgICAuLi5lbmREYXRlLFxuICAgICAgICBtb21lbnQ6IGVuZERhdGUudGltaW5nIDwgMCA/IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJUIDogUmVsYXRpdmVDb25zdGFudHMuRU5ELFxuICAgICAgfVxuICApO1xuXG4gIGluaXRTdGFydERhdGUgPSBzdGFydERhdGUgPT4gKFxuICAgIHN0YXJ0RGF0ZS52YWx1ZSAmJiBzdGFydERhdGUudmFsdWUubW9tZW50ID8gc3RhcnREYXRlIDpcbiAgICAgIHtcbiAgICAgICAgLi4uc3RhcnREYXRlLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIC4uLnN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgICAgICBtb21lbnQ6IFJlbGF0aXZlQ29uc3RhbnRzLlNUQVJULFxuICAgICAgICB9LFxuICAgICAgfVxuICApO1xuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChzZWxlY3RlZFN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHRoaXMuaW5pdFN0YXJ0RGF0ZShzZWxlY3RlZFN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuaW5pdEVuZERhdGUoZW5kRGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSB9KTtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IGRhdGUsXG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICBwZXJpb2Q6IHtcbiAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlRW5kRGF0ZUNoYW5nZSA9IChzZWxlY3RlZEVuZERhdGUpID0+IHtcbiAgICBjb25zdCB7IHRyYW5zbGF0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkYXRlID0gdGhpcy5pbml0U3RhcnREYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgZW5kRGF0ZSA9IHRoaXMuaW5pdEVuZERhdGUoc2VsZWN0ZWRFbmREYXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBlbmREYXRlLFxuICAgICAgcGVyaW9kOiB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKHN0YXJ0RGF0ZSkge1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIGVuZERhdGUsXG4gICAgICAgIHZhbHVlOiBmb3JtYXRMYWJlbChzdGFydERhdGUsIGVuZERhdGUsIHRyYW5zbGF0aW9ucyksXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF0ZS52YWx1ZSxcbiAgICAgICAgcGVyaW9kOiB7XG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZVRpbWluZ0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRpbWluZyA9IE51bWJlci5pc05hTihldmVudC50YXJnZXQudmFsdWUpID8gMCA6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSB7XG4gICAgICAuLi5lbmREYXRlLFxuICAgICAgdGltaW5nLFxuICAgICAgbW9tZW50OiB0aW1pbmcgPCAwID8gUmVsYXRpdmVDb25zdGFudHMuU1RBUlQgOiBSZWxhdGl2ZUNvbnN0YW50cy5FTkQsXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZTogc2VsZWN0ZWRFbmREYXRlIH0pO1xuICB9XG5cbiAgaGFuZGxlVGltaW5nQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlKGVuZERhdGUpO1xuICB9XG5cbiAgaGFuZGxlR3JhbnVsYXJpdHlDaGFuZ2UgPSAodW5pdCkgPT4ge1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSB7XG4gICAgICAuLi5lbmREYXRlLFxuICAgICAgdW5pdDogdW5pdC52YWx1ZSxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZShzZWxlY3RlZEVuZERhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0YXJ0RGF0ZU9wdGlvbnMgPSByZWxhdGl2ZURhdGVPcHRpb25zKHRyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdkYXRlcycpKTtcbiAgICBjb25zdCB7IGVuZERhdGUsIHN0YXJ0RGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBncmFudWxhcml0aWVzID0gdGhpcy5nZXRHcmFudWxhcml0eU9wdGlvbnMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGVyaW9kU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2Qtc3RhcnQtZGF0ZVwiXG4gICAgICAgICAgICBpZD1cInBlcmlvZFN0YXJ0RGF0ZVwiXG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRlKHRyYW5zbGF0aW9ucywgJ2Zyb20nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxDb3VudFNlY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtZW5kLWRhdGVcIlxuICAgICAgICAgIGlkPVwicGVyaW9kRW5kRGF0ZVwiXG4gICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICd0bycpfVxuICAgICAgICA+XG4gICAgICAgICAgPFByaW1pdGl2ZS5JbnB1dFxuICAgICAgICAgICAgdmFsdWU9e2VuZERhdGUudGltaW5nfVxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlVGltaW5nQmx1cn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWluZ0NoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvdW50U2VjdGlvbj5cbiAgICAgICAgPEdyYW51bGFyaXR5U2VjdGlvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1ncmFudWxhcml0eVwiXG4gICAgICAgICAgaWQ9XCJwZXJpb2RHcmFudWxhcml0eVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdyYW51bGFyaXR5Q2hhbmdlfVxuICAgICAgICAgICAgb3B0aW9ucz17Z3JhbnVsYXJpdGllc31cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFNlbGVjdGVkR3JhbnVsYXJpdHkoZ3JhbnVsYXJpdGllcywgZW5kRGF0ZS51bml0KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyYW51bGFyaXR5U2VjdGlvbj5cbiAgICAgIDwvUGVyaW9kU2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cblBlcmlvZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblBlcmlvZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=