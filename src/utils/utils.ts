export const enumToValues = (enumObject: object, isNumberEnum?: boolean) => {
	return Object.keys(enumObject)
		.map(k => enumObject[k])
		.filter(val => typeof val === (!isNumberEnum ? 'string' : 'number'))
}
