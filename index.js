module.exports = {
    "extends": ["airbnb", "prettier", "prettier/react"],
	"plugins": ["prettier"],
	"rules": {
		"prettier/prettier": [
			"error",
			{
				"singleQuote": true,
				"tabWidth": 4,
				"useTabs": true,
				"arrowParens": "always",
				"bracketSpacing": true,
				"jsxBracketSameLine": false,
				"printWidth": 100
			}
		],
		"no-unused-vars": "warn",
		"no-console": "off",
		"no-shadow": "off",
		"indent": [
			"error",
			"tab",
			{
				"ignoredNodes": [
					"JSXElement",
					"JSXElement > *",
					"JSXAttribute",
					"JSXIdentifier",
					"JSXNamespacedName",
					"JSXMemberExpression",
					"JSXSpreadAttribute",
					"JSXExpressionContainer",
					"JSXOpeningElement",
					"JSXClosingElement",
					"JSXText",
					"JSXEmptyExpression",
					"JSXSpreadChild"
				]
			}
		],
		"react/no-unescaped-entities": ["warn"],
		"camelcase": "off"
	}
};
