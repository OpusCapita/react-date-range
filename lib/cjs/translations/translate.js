"use strict";

exports.__esModule = true;
exports.default = void 0;

var _defaultProps = _interopRequireDefault(require("./default-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(translations, key, subKey) {
  return subKey ? (translations[key] || {})[subKey] || _defaultProps.default[key][subKey] : translations[key] || _defaultProps.default[key];
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2xhdGlvbnMvdHJhbnNsYXRlLmpzIl0sIm5hbWVzIjpbInRyYW5zbGF0aW9ucyIsImtleSIsInN1YktleSIsInRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztlQUVlLGtCQUFDQSxZQUFELEVBQWVDLEdBQWYsRUFBb0JDLE1BQXBCO0FBQUEsU0FDYkEsTUFBTSxHQUNGLENBQUNGLFlBQVksQ0FBQ0MsR0FBRCxDQUFaLElBQXFCLEVBQXRCLEVBQTBCQyxNQUExQixLQUFxQ0Msc0JBQXlCRixHQUF6QixFQUE4QkMsTUFBOUIsQ0FEbkMsR0FFRkYsWUFBWSxDQUFDQyxHQUFELENBQVosSUFBcUJFLHNCQUF5QkYsR0FBekIsQ0FIWjtBQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhbnNsYXRpb25zRGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdC1wcm9wcyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh0cmFuc2xhdGlvbnMsIGtleSwgc3ViS2V5KSA9PiAoXG4gIHN1YktleVxuICAgID8gKHRyYW5zbGF0aW9uc1trZXldIHx8IHt9KVtzdWJLZXldIHx8IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wc1trZXldW3N1YktleV1cbiAgICA6IHRyYW5zbGF0aW9uc1trZXldIHx8IHRyYW5zbGF0aW9uc0RlZmF1bHRQcm9wc1trZXldXG4pO1xuIl19