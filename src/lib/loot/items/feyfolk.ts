import type { Item } from '../Item';
import type { ClassItems } from './types';

export const feyfolkClassItems: ClassItems = {
	warlock: [
		{ name: 'Fey Robes', category: 'body armour' },
		{ name: 'Fairy Circlet', category: 'helmet' },
		{ name: 'Elven Boots', category: 'boots' },
		{ name: 'Moonstone Wand', category: 'one-handed weapon' },
		{ name: 'Starseeker Staff', category: 'two-handed weapon' }
	],
	ranger: [
		{ name: 'Leafweave Tunic', category: 'body armour' },
		{ name: 'Antlered Crown', category: 'helmet' },
		{ name: 'Elven Boots', category: 'boots' },
		{ name: 'Sylvan Bow', category: 'one-handed weapon' },
		{ name: 'Celestial Longbow', category: 'two-handed weapon' }
	],
	elementalist: [
		{ name: "Nature's Garb", category: 'body armour' },
		{ name: 'Crown of the Elements', category: 'helmet' },
		{ name: 'Feystep Boots', category: 'boots' },
		{ name: 'Scepter of Growth', category: 'one-handed weapon' },
		{ name: 'Verdant Staff', category: 'two-handed weapon' }
	],
	druid: [
		{ name: 'Fey Vestments', category: 'body armour' },
		{ name: 'Crown of Vines', category: 'helmet' },
		{ name: 'Feybound Boots', category: 'boots' },
		{ name: 'Thorned Staff', category: 'one-handed weapon' },
		{ name: 'Grove Staff', category: 'two-handed weapon' }
	],
	artificer: [
		{ name: 'Feyforged Harness', category: 'body armour' },
		{ name: 'Goggles of Enchantment', category: 'helmet' },
		{ name: 'Feywoven Boots', category: 'boots' },
		{ name: 'Arcane Wrench', category: 'one-handed weapon' },
		{ name: 'Enchanted Apparatus', category: 'two-handed weapon' }
	],
	monk: [
		{ name: 'Monastic Vestments', category: 'body armour' },
		{ name: 'Circlet of Tranquility', category: 'helmet' },
		{ name: 'Sandals of Harmony', category: 'boots' },
		{ name: 'Ki Fist', category: 'one-handed weapon' },
		{ name: 'Harmony Staff', category: 'two-handed weapon' }
	]
};

export const feyfolkItems: Item[] = [
	{ name: 'Enchanted Flower Crown', category: 'accessory' },
	{ name: 'Feyglow Lantern', category: 'light source' },
	{ name: 'Whisperwind Flute', category: 'instrument' },
	{ name: 'Faerie Dust Vial', category: 'consumable' },
	{ name: 'Moonlit Coin', category: 'coin' },
	{ name: 'Elven Script Scroll', category: 'scroll' },
	{ name: "Nature's Pouch", category: 'bag' },
	{ name: 'Thornweave Bracelet', category: 'accessory' },
	{ name: 'Feyfolk Trinket', category: 'accessory' },
	{ name: 'Starlit Crystal', category: 'crafting material' }
];
