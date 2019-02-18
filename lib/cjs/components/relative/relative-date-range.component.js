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
            placeholder: translations.startDatePlaceholder,
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
            placeholder: translations.endDatePlaceholder,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JlbGF0aXZlL3JlbGF0aXZlLWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWxhdGl2ZVJhbmdlU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJSZWxhdGl2ZURhdGVSYW5nZSIsInByb3BzIiwiZW5kRGF0ZSIsInN0YXJ0RGF0ZSIsInRyYW5zbGF0aW9ucyIsIm9wdGlvbnMiLCJzdGF0ZSIsImVuZERhdGVPcHRpb25zIiwiZmlsdGVyRW5kRGF0ZU9wdGlvbnMiLCJzdGFydERhdGVPcHRpb25zIiwiZmlsdGVyU3RhcnREYXRlT3B0aW9ucyIsInJlbmRlciIsImhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSIsInN0YXJ0RGF0ZVBsYWNlaG9sZGVyIiwiaGFuZGxlRW5kRGF0ZUNoYW5nZSIsImVuZERhdGVQbGFjZWhvbGRlciIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsInBhc3QiLCJmaWx0ZXIiLCJkYXRlIiwiZ3JhbnVsYXJpdHkiLCJvcmRlciIsInNlbGVjdGVkU3RhcnREYXRlIiwidmFsdWUiLCJtb21lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJDb25zdGFudHMiLCJTVEFSVCIsInNldFN0YXRlIiwicmVsYXRpdmVSYW5nZSIsImVuZERhdGVWYWx1ZSIsIkVORCIsImxhYmVsIiwib25DaGFuZ2UiLCJzZWxlY3RlZEVuZERhdGUiLCJzdGFydERhdGVWYWx1ZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OzswRkFiQTs7O0FBZUEsSUFBTUEsdUJBQXVCQywyQkFBT0MsR0FBOUIsa0JBS09DLHlCQUFNQyxXQUxiLENBQU47O0lBUXFCQyxpQjs7O0FBQ25CLDZCQUFZQyxL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QUFNbEMsVUFBVWtDLGdCQUFnQlosS0FBaEIsQ0FBc0JDLE1BQXRCLEdBQStCVyxlQUEvQixHQUNkVixPQUFPQyxNQUFQLENBQ0UsRUFERixFQUNNUyxlQUROLEVBRUUsRUFBRVosb0JBQVlZLGdCQUFnQlosS0FBNUIsSUFBbUNDLFFBQVFHLG9CQUFVSyxHQUFyRCxHQUFGLEVBRkYsQ0FERjtBQUtBLFFBQU14QixtQkFBbUIsT0FBS0Msc0JBQUwsQ0FBNEJSLE9BQTVCLEVBQXFDLE9BQUtJLEtBQUwsQ0FBV0csZ0JBQWhELENBQXpCO0FBTnlDLFFBT2pDTixTQVBpQyxHQU9uQixPQUFLRyxLQVBjLENBT2pDSCxTQVBpQzs7QUFRekMsV0FBSzJCLFFBQUwsQ0FBYyxFQUFFckIsa0NBQUYsRUFBb0JQLGdCQUFwQixFQUFkO0FBQ0EsUUFBSUksUUFBUTtBQUNWSixlQUFTQSxRQUFRc0IsS0FEUDtBQUVWTyxxQkFBZTtBQUNiN0I7QUFEYTtBQUZMLEtBQVo7QUFNQSxRQUFJQyxTQUFKLEVBQWU7QUFDYixVQUFNa0MsaUJBQWlCbEMsVUFBVXFCLEtBQVYsSUFBbUIsQ0FBQ3JCLFVBQVVxQixLQUFWLENBQWdCQyxNQUFwQyxnQkFDZHRCLFVBQVVxQixLQURJLElBQ0dDLFFBQVFHLG9CQUFVQyxLQURyQixNQUVuQjFCLFVBQVVxQixLQUZkO0FBR0FsQiwyQkFDS0EsS0FETDtBQUVFa0IsZ0JBQVVyQixVQUFVK0IsS0FBVixJQUFtQixFQUE3QixZQUFxQ2hDLFFBQVFnQyxLQUYvQztBQUdFL0IsbUJBQVdrQyxjQUhiO0FBSUVOLG9DQUNLekIsTUFBTXlCLGFBRFg7QUFFRTVCO0FBRkY7QUFKRjtBQVNEO0FBQ0QsV0FBS0YsS0FBTCxDQUFXa0MsUUFBWCxDQUFvQjdCLEtBQXBCO0FBQ0QsRzs7a0JBakdrQk4saUI7OztBQXNKckJBLGtCQUFrQnNDLFlBQWxCLEdBQWlDQSxzQkFBakMiLCJmaWxlIjoicmVsYXRpdmUtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEZsb2F0aW5nU2VsZWN0IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZmxvYXRpbmctc2VsZWN0JztcbmltcG9ydCB7IENvbnRlbnQsIHRoZW1lIH0gZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLWxheW91dHMnO1xuXG5pbXBvcnQgRGF0ZVNlY3Rpb24gZnJvbSAnLi4vZGF0ZS1zZWN0aW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IEh5cGhlbiBmcm9tICcuLi9oeXBoZW4uY29tcG9uZW50JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAnLi9wcm9wLXR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0LXByb3BzJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHJlbGF0aXZlT3B0aW9ucyBmcm9tICcuL3JlbGF0aXZlLW9wdGlvbnMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvdHJhbnNsYXRlJztcblxuY29uc3QgUmVsYXRpdmVSYW5nZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3RoZW1lLmd1dHRlcldpZHRofSAwIDAgMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0aXZlRGF0ZVJhbmdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBlbmREYXRlLCBzdGFydERhdGUsIHRyYW5zbGF0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHJlbGF0aXZlT3B0aW9ucyh0cmFuc2xhdGUodHJhbnNsYXRpb25zLCAnZGF0ZXMnKSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVuZERhdGUsXG4gICAgICBlbmREYXRlT3B0aW9uczogc3RhcnREYXRlID9cbiAgICAgICAgdGhpcy5maWx0ZXJFbmREYXRlT3B0aW9ucyhzdGFydERhdGUsIG9wdGlvbnMpIDpcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIHN0YXJ0RGF0ZU9wdGlvbnM6IGVuZERhdGUgP1xuICAgICAgICB0aGlzLmZpbHRlclN0YXJ0RGF0ZU9wdGlvbnMoZW5kRGF0ZSwgb3B0aW9ucykgOlxuICAgICAgICBvcHRpb25zLFxuICAgIH07XG4gIH1cblxuICBmaWx0ZXJFbmREYXRlT3B0aW9ucyA9IChzdGFydERhdGUsIGVuZERhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHN0YXJ0RGF0ZS5wYXN0ID8gZW5kRGF0ZU9wdGlvbnMgOlxuICAgICAgZW5kRGF0ZU9wdGlvbnMuZmlsdGVyKGRhdGUgPT4gIWRhdGUucGFzdCk7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKGRhdGUgPT5cbiAgICAgIGRhdGUuZ3JhbnVsYXJpdHkgIT09IHN0YXJ0RGF0ZS5ncmFudWxhcml0eSB8fFxuICAgICAgc3RhcnREYXRlLm9yZGVyIDw9IGRhdGUub3JkZXIpO1xuICB9XG5cbiAgZmlsdGVyU3RhcnREYXRlT3B0aW9ucyA9IChlbmREYXRlLCBzdGFydERhdGVPcHRpb25zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGVuZERhdGUucGFzdCA/XG4gICAgICBzdGFydERhdGVPcHRpb25zLmZpbHRlcihkYXRlID0+IGRhdGUucGFzdCkgOlxuICAgICAgc3RhcnREYXRlT3B0aW9ucztcbiAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoZGF0ZSA9PlxuICAgICAgZGF0ZS5ncmFudWxhcml0eSAhPT0gZW5kRGF0ZS5ncmFudWxhcml0eSB8fFxuICAgICAgZGF0ZS5vcmRlciA8PSBlbmREYXRlLm9yZGVyKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RGF0ZUNoYW5nZSA9IChzZWxlY3RlZFN0YXJ0RGF0ZSkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IHNlbGVjdGVkU3RhcnREYXRlLnZhbHVlLm1vbWVudCA/IHNlbGVjdGVkU3RhcnREYXRlIDpcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LCBzZWxlY3RlZFN0YXJ0RGF0ZSxcbiAgICAgICAgeyB2YWx1ZTogeyAuLi5zZWxlY3RlZFN0YXJ0RGF0ZS52YWx1ZSwgbW9tZW50OiBDb25zdGFudHMuU1RBUlQgfSB9LFxuICAgICAgKTtcbiAgICBjb25zdCBlbmREYXRlT3B0aW9ucyA9IHRoaXMuZmlsdGVyRW5kRGF0ZU9wdGlvbnMoc3RhcnREYXRlLCB0aGlzLnN0YXRlLmVuZERhdGVPcHRpb25zKTtcbiAgICBjb25zdCB7IGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuZERhdGVPcHRpb25zLCBzdGFydERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUudmFsdWUsXG4gICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoZW5kRGF0ZSkge1xuICAgICAgY29uc3QgZW5kRGF0ZVZhbHVlID0gZW5kRGF0ZS52YWx1ZSAmJiAhZW5kRGF0ZS52YWx1ZS5tb21lbnRcbiAgICAgICAgPyB7IC4uLmVuZERhdGUudmFsdWUsIG1vbWVudDogQ29uc3RhbnRzLkVORCB9XG4gICAgICAgIDogZW5kRGF0ZS52YWx1ZTtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdmFsdWU6IGAke3N0YXJ0RGF0ZS5sYWJlbH0gLSAke2VuZERhdGUubGFiZWwgfHwgJyd9YCxcbiAgICAgICAgZW5kRGF0ZTogZW5kRGF0ZVZhbHVlLFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uc3RhdGUucmVsYXRpdmVSYW5nZSxcbiAgICAgICAgICBlbmREYXRlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVFbmREYXRlQ2hhbmdlID0gKHNlbGVjdGVkRW5kRGF0ZSkgPT4ge1xuICAgIGNvbnN0IGVuZERhdGUgPSBzZWxlY3RlZEVuZERhdGUudmFsdWUubW9tZW50ID8gc2VsZWN0ZWRFbmREYXRlIDpcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LCBzZWxlY3RlZEVuZERhdGUsXG4gICAgICAgIHsgdmFsdWU6IHsgLi4uc2VsZWN0ZWRFbmREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5FTkQgfSB9LFxuICAgICAgKTtcbiAgICBjb25zdCBzdGFydERhdGVPcHRpb25zID0gdGhpcy5maWx0ZXJTdGFydERhdGVPcHRpb25zKGVuZERhdGUsIHRoaXMuc3RhdGUuc3RhcnREYXRlT3B0aW9ucyk7XG4gICAgY29uc3QgeyBzdGFydERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZU9wdGlvbnMsIGVuZERhdGUgfSk7XG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgZW5kRGF0ZTogZW5kRGF0ZS52YWx1ZSxcbiAgICAgIHJlbGF0aXZlUmFuZ2U6IHtcbiAgICAgICAgZW5kRGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoc3RhcnREYXRlKSB7XG4gICAgICBjb25zdCBzdGFydERhdGVWYWx1ZSA9IHN0YXJ0RGF0ZS52YWx1ZSAmJiAhc3RhcnREYXRlLnZhbHVlLm1vbWVudFxuICAgICAgICA/IHsgLi4uc3RhcnREYXRlLnZhbHVlLCBtb21lbnQ6IENvbnN0YW50cy5TVEFSVCB9XG4gICAgICAgIDogc3RhcnREYXRlLnZhbHVlO1xuICAgICAgc3RhdGUgPSB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmxhYmVsIHx8ICcnfSAtICR7ZW5kRGF0ZS5sYWJlbH1gLFxuICAgICAgICBzdGFydERhdGU6IHN0YXJ0RGF0ZVZhbHVlLFxuICAgICAgICByZWxhdGl2ZVJhbmdlOiB7XG4gICAgICAgICAgLi4uc3RhdGUucmVsYXRpdmVSYW5nZSxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHN0YXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGFydERhdGVPcHRpb25zLFxuICAgICAgZW5kRGF0ZU9wdGlvbnMsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWxhdGl2ZVJhbmdlU2VjdGlvbj5cbiAgICAgICAgPERhdGVTZWN0aW9uPlxuICAgICAgICAgIDxDb250ZW50LklucHV0Q29sdW1uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZS1zdGFydC1kYXRlXCJcbiAgICAgICAgICAgIGlkPVwicmVsYXRpdmVTdGFydERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdzdGFydERhdGUnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmxvYXRpbmdTZWxlY3RcbiAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0RGF0ZUNoYW5nZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RhcnREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0aW9ucy5zdGFydERhdGVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXJ0RGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db250ZW50LklucHV0Q29sdW1uPlxuICAgICAgICA8L0RhdGVTZWN0aW9uPlxuICAgICAgICA8SHlwaGVuIC8+XG4gICAgICAgIDxEYXRlU2VjdGlvbj5cbiAgICAgICAgICA8Q29udGVudC5JbnB1dENvbHVtblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUtZW5kLWRhdGVcIlxuICAgICAgICAgICAgaWQ9XCJyZWxhdGl2ZUVuZERhdGVcIlxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSh0cmFuc2xhdGlvbnMsICdlbmREYXRlJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZsb2F0aW5nU2VsZWN0XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcmFibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbmREYXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtlbmREYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0aW9ucy5lbmREYXRlUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXtlbmREYXRlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbnRlbnQuSW5wdXRDb2x1bW4+XG4gICAgICAgIDwvRGF0ZVNlY3Rpb24+XG4gICAgICA8L1JlbGF0aXZlUmFuZ2VTZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuUmVsYXRpdmVEYXRlUmFuZ2UucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5SZWxhdGl2ZURhdGVSYW5nZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=