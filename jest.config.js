/**
 * Jest configuration
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

module.exports = {
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*.test.{js,jsx,ts,tsx}',
		'!src/index.tsx',
		'!src/App.tsx',
	],
	// individual test will be reported
	verbose: true,
	// Automatically clear mock calls and instances between every test
	clearMocks: true,
	moduleDirectories: ['node_modules', 'src'],
	// configure minimum threshold enforcement for coverage results
	// https://jestjs.io/docs/en/configuration#coveragethreshold-object
	coverageThreshold: {
		global: {
			statements: 98,
			branches: 91,
			functions: 98,
			lines: 98,
		},
	},
}
