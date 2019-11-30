import kebabCase from '@queso/kebab-case';

export const reduceProps = props =>
	Object.keys(props)
		.filter(p => !p.startsWith('$$'))
		.reduce(
			(styles, p) => [ ...styles, `${kebabCase(p)}: ${props[p]}` ],
			[]
		);
