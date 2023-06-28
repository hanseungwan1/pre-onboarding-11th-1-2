module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "react-hooks", "@typescript-eslint"],
	"rules": {
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@typescript-eslint/explicit-function-return-type": "off",
		"prettier/prettier": "error",
		"react/jsx-filename-extension": [
			2,
			{ "extensions": [".js", ".jsx", ".ts", ".tsx"] }
		],
		"import/extensions": [
			'off',
		]
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx", ".ts", ".tsx"],
				"moduleDirectory": ["node_modules", "@types"]
			},
			"typescript": {}
		},
		"react": {
			"version": "detect",
		  },
	}
};

