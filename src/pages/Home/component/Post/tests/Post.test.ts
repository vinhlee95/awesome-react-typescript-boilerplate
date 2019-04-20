// Dummy jest test
// Remove when get react-testing-library into use

function sum(a: number, b: number): number {
	return a + b
}

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3)
})
