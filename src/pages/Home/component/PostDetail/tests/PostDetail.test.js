// Dummy jest test
// Remove when get react-testing-library into use

function sub(a, b) {
	return a - b
}

test('subtracts 9 - 5 to equal 4', () => {
	expect(sub(9, 5)).toBe(4)
})
