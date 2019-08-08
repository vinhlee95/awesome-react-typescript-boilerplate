export const maxWidth = (maxWidth: number) =>
	`@media (max-width: ${maxWidth / 16}em)`
export const minWidth = (minWidth: number) =>
	`@media (min-width: ${minWidth / 16}em)`

export const media = {
	phone: maxWidth(600),
	tabPort: maxWidth(900),
	tabLand: maxWidth(1200),
	bigDesktop: minWidth(1800),
}
