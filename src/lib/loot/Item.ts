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
	'collectible',
	'consumable',
	'writing tool',
	'instrument',
	'bag',
	'tool',
	'light source',
	'book',
	'game'
] as const;

interface BaseItem {
	name: string;
	category: (typeof itemCategory)[number];
}

export type Item = BaseItem;
