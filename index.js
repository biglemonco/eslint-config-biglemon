module.exports = {
    "extends": ["airbnb"],
	"rules": {
		"no-unused-vars": "warn",
		"no-console": "off",
		"no-shadow": "off",
		"no-underscore-dangle": 0,
		"camelcase": "off",
		"consistent-return": 0,
		"global-require": 0,
		"no-tabs": 0,
		"quotes": ['error', 'single'],
		"comma-dangle": ['error', 'always-multiline'],
		"max-len": ["error", { "code": 110 }],
		"arrow-parens": ["error", "always"],
		"object-curly-spacing": ["error", "always"],
		"array-bracket-spacing": ["error", "always"],
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
		"jsx-a11y/label-has-associated-control": [
			2,
			{
				"labelComponents": [
					"CustomInputLabel"
				],
				"labelAttributes": [
					"label"
				],
				"controlComponents": [
					"CustomInput"
				],
				"depth": 3
			}
		],
		"import/no-extraneous-dependencies": "off",
		"import/no-named-as-default": "off",
		"import/no-named-as-default-member": "off",
		"import/prefer-default-export": 0,
		"react/no-unescaped-entities": ["warn"],
		"react/jsx-first-prop-new-line": [
			1,
			"multiline"
		],
		"react/no-unescaped-entities": 0,
		"react/jsx-max-props-per-line": [
			1,
			{
				"maximum": 1
			}
		],
		"react/jsx-indent-props": [
			1,
			"tab"
		],
		"react/jsx-closing-bracket-location": 1,
		"react/jsx-indent": [
			1,
			"tab"
		],
	}
};
