/**
 * Jest configuration
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

module.exports = {
	preset: 'ts-jest',
	setupFilesAfterEnv: ['react-testing-library/cleanup-after-each'],
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
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node', 'json'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/config/testing/fileMock.ts',
		'\\.(css|less|sass|scss)$': '<rootDir>/config/testing/styleMock.ts',
	},
	// configure minimum threshold enforcement for coverage results
	// https://jestjs.io/docs/en/configuration#coveragethreshold-object
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -10,
		},
	},
}