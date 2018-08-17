'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0;\n  .Select-control {\n    border-radius: 0;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0;\n  .Select-control {\n    border-radius: 0;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFloatingSelect = require('@opuscapita/react-floating-select');

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable jsx-a11y/label-has-for */


var RelativeRangeSection = _styledComponents2.default.div(_templateObject);

var RelativeDateRange = function (_React$PureComponent) {
  _inherits(RelativeDateRange, _React$PureComponent);

  function RelativeDateRange(props) {
    _classCallCheck(this, RelativeDateRange);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.filterEndDateOptions = function (startDate, endDateOptions) {
      var options = startDate.past ? endDateOptions : endDateOptions.filter(function (date) {
        return !date.past;
      });
      return options.filter(function (date) {
        return date.granularity !== startDate.granularity || startDate.order <= date.order;
      });
    };

    _this.filterStartDateOptions = function (endDate, startDateOptions) {
      var options = endDate.past ? startDateOptions.filter(function (date) {
        return date.past;
      }) : startDateOptions;
      return options.filter(function (date) {
        return date.granularity !== endDate.granularity || date.order <= endDate.order;
      });
    };

    _this.handleStartDateChange = function (selectedStartDate) {
      var startDate = selectedStartDate.value.moment ? selectedStartDate : Object.assign({}, selectedStartDate, { value: _extends({}, selectedStartDate.value, { moment: _constants2.default.START }) });
      var endDateOptions = _this.filterEndDateOptions(startDate, _this.state.endDateOptions);
      var endDate = _this.state.endDate;

      _this.setState({ endDateOptions: endDateOptions, startDate: startDate });
      var state = {
        startDate: startDate.value,
        popoverProps: {
          relativeRange: {
            startDate: startDate
          }
        }
      };
      if (endDate) {
        state = _extends({}, state, {
          value: startDate.label + ' - ' + endDate.label,
          endDate: endDate.value,
          popoverProps: {
            relativeRange: _extends({}, state.popoverProps.relativeRange, {
              endDate: endDate
            })
          }
        });
      }
      _this.props.onChange(state);
    };

    _this.handleEndDateChange = function (selectedEndDate) {
      var endDate = selectedEndDate.value.moment ? selectedEndDate : Object.assign({}, selectedEndDate, { value: _extends({}, selectedEndDate.value, { moment: _constants2.default.END }) });
      var startDateOptions = _this.filterStartDateOptions(endDate, _this.state.startDateOptions);
      var startDate = _this.state.startDate;

      _this.setState({ startDateOptions: startDateOptions, endDate: endDate });
      var state = {
        endDate: endDate.value,
        popoverProps: {
          relativeRange: {
            endDate: endDate
          }
        }
      };
      if (startDate) {
        state = _extends({}, state, {
          value: startDate.label + ' - ' + endDate.label,
          startDate: startDate.value,
          popoverProps: {
            relativeRange: _extends({}, state.popoverProps.relativeRange, {
              startDate: startDate
            })
          }
        });
      }
      _this.props.onChange(state);
    };

    _this.state = {
      endDate: props.endDate,
      endDateOptions: props.startDate ? _this.filterEndDateOptions(props.startDate, props.options) : props.options,
      startDate: props.startDate,
      startDateOptions: props.endDate ? _this.filterStartDateOptions(props.endDate, props.options) : props.options
    };
    return _this;
  }

  RelativeDateRange.prototype.render = function render() {
    var _state = this.state,
        startDateOptions = _state.startDateOptions,
        endDateOptions = _state.endDateOptions,
        startDate = _state.startDate,
        endDate = _state.endDate;


    return _react2.default.createElement(
      RelativeRangeSection,
      null,
      _react2.default.createElement(
        _dateSection2.default,
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'startDate' },
          this.props.translations.startDate
        ),
        _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
          clearable: false,
          inputProps: { name: 'startDate' },
          onChange: this.handleStartDateChange,
          options: startDateOptions,
          value: startDate
        }))
      ),
      _react2.default.createElement(_hyphen2.default, null),
      _react2.default.createElement(
        _dateSection2.default,
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'endDate' },
          this.props.translations.endDate
        ),
        _react2.default.createElement(_reactFloatingSelect.FloatingSelect, _extends({}, this.props, {
          clearable: false,
          inputProps: { name: 'endDate' },
          onChange: this.handleEndDateChange,
          options: endDateOptions,
          value: endDate
        }))
      )
    );
  };

  return RelativeDateRange;
}(_react2.default.PureComponent);

exports.default = RelativeDateRange;


RelativeDateRange.defaultProps = _defaultProps2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsIlJlbGF0aXZlRGF0ZVJhbmdlIiwicHJvcHMiLCJmaWx0ZXJFbmREYXRlT3B0aW9ucyIsInN0YXJ0RGF0ZSIsImVuZERhdGVPcHRpb25zIiwib3B0aW9ucyIsInBhc3QiLCJmaWx0ZXIiLCJkYXRlIiwiZ3JhbnVsYXJpdHkiLCJvcmRlciIsImZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMiLCJlbmREYXRlIiwic3RhcnREYXRlT3B0aW9ucyIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsInNlbGVjdGVkU3RhcnREYXRlIiwidmFsdWUiLCJtb21lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJDb25zdGFudHMiLCJTVEFSVCIsInN0YXRlIiwic2V0U3RhdGUiLCJwb3BvdmVyUHJvcHMiLCJyZWxhdGl2ZVJhbmdlIiwibGFiZWwiLCJvbkNoYW5nZSIsImhhbmRsZUVuZERhdGVDaGFuZ2UiLCJzZWxlY3RlZEVuZERhdGUiLCJFTkQiLCJyZW5kZXIiLCJ0cmFuc2xhdGlvbnMiLCJuYW1lIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OzBGQVZBOzs7QUFZQSxJQUFNQSx1QkFBdUJDLDJCQUFPQyxHQUE5QixpQkFBTjs7SUFXcUJDLGlCOzs7QUFDbkIsNkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFjbkJDLG9CQWRtQixHQWNJLFVBQUNDLFNBQUQsRUFBWUMsY0FBWixFQUErQjtBQUNwRCxVQUFNQyxVQUFVRixV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REY7QUFZRSxvQ0FBQyxnQkFBRCxPQVpGO0FBYUU7QUFBQyw2QkFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU8sU0FBUSxTQUFmO0FBQTBCLGVBQUtGLEtBQUwsQ0FBVytCLFlBQVgsQ0FBd0JwQjtBQUFsRCxTQURGO0FBRUUsc0NBQUMsbUNBQUQsZUFDTSxLQUFLWCxLQURYO0FBRUUscUJBQVcsS0FGYjtBQUdFLHNCQUFZLEVBQUVnQyxNQUFNLFNBQVIsRUFIZDtBQUlFLG9CQUFVLEtBQUtMLG1CQUpqQjtBQUtFLG1CQUFTeEIsY0FMWDtBQU1FLGlCQUFPUTtBQU5UO0FBRkY7QUFiRixLQURGO0FBMkJELEc7OztFQXJJNENzQixnQkFBTUMsYTs7a0JBQWhDbkMsaUI7OztBQTBJckJBLGtCQUFrQm9DLFlBQWxCLEdBQWlDQSxzQkFBakMiLCJmaWxlIjoicmVsYXRpdmUtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEZsb2F0aW5nU2VsZWN0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZmxvYXRpbmctc2VsZWN0JztcblxuaW1wb3J0IERhdGVTZWN0aW9uIGZyb20gJy4uL2RhdGUtc2VjdGlvbi5jb21wb25lbnRzJztcbmltcG9ydCBIeXBoZW4gZnJvbSAnLi4vaHlwaGVuLmNvbXBvbmVudCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcC10eXBlcyc7XG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgUmVsYXRpdmVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIC5TZWxlY3QtY29udHJvbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsYXRpdmVEYXRlUmFuZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVuZERhdGU6IHByb3BzLmVuZERhdGUsXG4gICAgICBlbmREYXRlT3B0aW9uczogcHJvcHMuc3RhcnREYXRlID9cbiAgICAgICAgdGhpcy5maWx0ZXJFbmREYXRlT3B0aW9ucyhwcm9wcy5zdGFydERhdGUsIHByb3BzLm9wdGlvbnMpIDpcbiAgICAgICAgcHJvcHMub3B0aW9ucyxcbiAgICAgIHN0YXJ0RGF0ZTogcHJvcHMuc3RhcnREYXRlLFxuICAgICAgc3RhcnREYXRlT3B0aW9uczogcHJvcHMuZW5kRGF0ZSA/XG4gICAgICAgIHRoaXMuZmlsdGVyU3RhcnREYXRlT3B0aW9ucyhwcm9wcy5lbmREYXRlLCBwcm9wcy5vcHRpb25zKSA6XG4gICAgICAgIHByb3BzLm9wdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIGZpbHRlckVuZERhdGVPcHRpb25zID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gc3RhcnREYXRlLnBhc3QgPyBlbmREYXRlT3B0aW9ucyA6XG4gICAgICBlbmREYXRlT3B0aW9ucy5maWx0ZXIoZGF0ZSA9PiAhZGF0ZS5wYXN0KTtcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoZGF0ZSA9PlxuICAgICAgZGF0ZS5ncmFudWxhcml0eSAhPT0gc3RhcnREYXRlLmdyYW51bGFyaXR5IHx8XG4gICAgICBzdGFydERhdGUub3JkZXIgPD0gZGF0ZS5vcmRlcik7XG4gIH1cblxuICBmaWx0ZXJTdGFydERhdGVPcHRpb25zID0gKGVuZERhdGUsIHN0YXJ0RGF0ZU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gZW5kRGF0ZS5wYXN0ID9cbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnMuZmlsdGVyKGRhdGUgPT4gZGF0ZS5wYXN0KSA6XG4gICAgICBzdGFydERhdGVPcHRpb25zO1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihkYXRlID0+XG4gICAgICBkYXRlLmdyYW51bGFyaXR5ICE9PSBlbmREYXRlLmdyYW51bGFyaXR5IHx8XG4gICAgICBkYXRlLm9yZGVyIDw9IGVuZERhdGUub3JkZXIpO1xuICB9XG5cbiAgaGFuZGxlU3RhcnREYXRlQ2hhbmdlID0gKHNlbGVjdGVkU3RhcnREYXRlKSA9PiB7XG4gICAgY29uc3Qgc3RhcnREYXRlID0gc2VsZWN0ZWRTdGFydERhdGUudmFsdWUubW9tZW50ID8gc2VsZWN0ZWRTdGFydERhdGUgOlxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sIHNlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICB7IHZhbHVlOiB7IC4uLnNlbGVjdGVkU3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5TVEFSVCB9IH0sXG4gICAgICApO1xuICAgIGNvbnN0IGVuZERhdGVPcHRpb25zID0gdGhpcy5maWx0ZXJFbmREYXRlT3B0aW9ucyhzdGFydERhdGUsIHRoaXMuc3RhdGUuZW5kRGF0ZU9wdGlvbnMpO1xuICAgIGNvbnN0IHsgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZW5kRGF0ZU9wdGlvbnMsIHN0YXJ0RGF0ZSB9KTtcbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZS52YWx1ZSxcbiAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgc3RhcnREYXRlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGlmIChlbmREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWx9IC0gJHtlbmREYXRlLmxhYmVsfWAsXG4gICAgICAgIGVuZERhdGU6IGVuZERhdGUudmFsdWUsXG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLnBvcG92ZXJQcm9wcy5yZWxhdGl2ZVJhbmdlLFxuICAgICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKHNlbGVjdGVkRW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGVuZERhdGUgPSBzZWxlY3RlZEVuZERhdGUudmFsdWUubW9tZW50ID8gc2VsZWN0ZWRFbmREYXRlIDpcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LCBzZWxlY3RlZEVuZERhdGUsXG4gICAgICAgIHsgdmFsdWU6IHsgLi4uc2VsZWN0ZWRFbmREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5FTkQgfSB9LFxuICAgICAgKTtcbiAgICBjb25zdCBzdGFydERhdGVPcHRpb25zID0gdGhpcy5maWx0ZXJTdGFydERhdGVPcHRpb25zKGVuZERhdGUsIHRoaXMuc3RhdGUuc3RhcnREYXRlT3B0aW9ucyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZU9wdGlvbnMsIGVuZERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZTogZW5kRGF0ZS52YWx1ZSxcbiAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHZhbHVlOiBgJHtzdGFydERhdGUubGFiZWx9IC0gJHtlbmREYXRlLmxhYmVsfWAsXG4gICAgICAgIHN0YXJ0RGF0ZTogc3RhcnREYXRlLnZhbHVlLFxuICAgICAgICBwb3BvdmVyUHJvcHM6IHtcbiAgICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5wb3BvdmVyUHJvcHMucmVsYXRpdmVSYW5nZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RhcnREYXRlT3B0aW9ucyxcbiAgICAgIGVuZERhdGVPcHRpb25zLFxuICAgICAgc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZSxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVsYXRpdmVSYW5nZVNlY3Rpb24+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXJ0RGF0ZVwiPnt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5zdGFydERhdGV9PC9sYWJlbD5cbiAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgY2xlYXJhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgbmFtZTogJ3N0YXJ0RGF0ZScgfX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3N0YXJ0RGF0ZU9wdGlvbnN9XG4gICAgICAgICAgICB2YWx1ZT17c3RhcnREYXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICAgIDxIeXBoZW4gLz5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW5kRGF0ZVwiPnt0aGlzLnByb3BzLnRyYW5zbGF0aW9ucy5lbmREYXRlfTwvbGFiZWw+XG4gICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBpbnB1dFByb3BzPXt7IG5hbWU6ICdlbmREYXRlJyB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW5kRGF0ZUNoYW5nZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e2VuZERhdGVPcHRpb25zfVxuICAgICAgICAgICAgdmFsdWU9e2VuZERhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EYXRlU2VjdGlvbj5cbiAgICAgIDwvUmVsYXRpdmVSYW5nZVNlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5SZWxhdGl2ZURhdGVSYW5nZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblJlbGF0aXZlRGF0ZVJhbmdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==