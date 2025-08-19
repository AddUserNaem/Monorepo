module.exports = {
	root: true,
	ignorePatterns: [
		'**/node_modules/**',
		'**/.next/**',
		'**/dist/**',
		'**/build/**',
		'**/coverage/**',
		'**/*.d.ts',
		'apps/api/src/generated/**',
		'apps/api/prisma/**',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'unused-imports'],
	settings: {
		next: { rootDir: ['apps/web'] },
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	rules: {
		'no-console': ['warn', { allow: ['warn', 'error'] }],
	},
	overrides: [
		{
			files: ['**/*.{ts,tsx}'],
			rules: {
				'no-undef': 'off',
				'no-unused-vars': 'off',
				'unused-imports/no-unused-imports': 'error',
			},
		},

		{
			files: ['apps/web/**/*.{ts,tsx}'],
			extends: ['next/core-web-vitals'],
			rules: {
				'@next/next/no-html-link-for-pages': 'off',
			},
		},
		{
			files: ['apps/api/**/*.{ts,tsx}'],
			env: { node: true },
		},
	],
}
