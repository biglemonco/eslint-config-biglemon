module.exports = {
    "extends": ["airbnb", "prettier", "prettier/react"],
	"plugins": ["prettier"],
	"rules": {
		"no-unused-vars": "warn",
		"no-console": "off",
		"no-shadow": "off",
		"no-underscore-dangle": 0,
		"camelcase": "off",
		"import/no-extraneous-dependencies": "off",
		"import/no-named-as-default": "off",
		"import/no-named-as-default-member": "off",
		"import/prefer-default-export": 0,
		"react/no-unescaped-entities": ["warn"],
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
		]
	}
};
