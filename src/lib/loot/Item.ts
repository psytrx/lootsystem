const itemCategory = [
	'body armour',
	'helmet',
	'boots',
	'one-handed weapon',
	'two-handed weapon',
	'potion',
	'crafting material',
	'food',
	'coin',
	'miscellaneous',
	'scroll',
	'accessory',
	'collectible'
] as const;

interface BaseItem {
	name: string;
	category: (typeof itemCategory)[number];
}

export type Item = BaseItem;
