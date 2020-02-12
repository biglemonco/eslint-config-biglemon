## Installing

```
yarn add --dev @biglemon/eslint-config
```

Then include this in your package.json

```
"eslintConfig": {
	"extends": "biglemon"
},
```

## VSCode Settings

```
{
	"editor.formatOnSave": true,
	// turn it off for JS and JSX, we will do this via eslint
	"[javascript]": {
		"editor.formatOnSave": false
	},
	"[javascriptreact]": {
		"editor.formatOnSave": false
	},
	// tell the ESLint plugin to run on save
	"editor.codeActionsOnSave": {
		"source.fixAll": true
	},
	// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
	"prettier.disableLanguages": ["javascript", "javascriptreact"],
	"prettier.jsxSingleQuote": true,
	"prettier.useTabs": true,
	"editor.insertSpaces": false
}
```
