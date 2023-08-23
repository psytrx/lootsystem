import type { Item } from '../Item';
import type { ClassItems } from './types';

export const celestialClassItems: ClassItems = {
	warlock: [
		{ name: 'Celestial Robes', category: 'body armour' },
		{ name: 'Halo Circlet', category: 'helmet' },
		{ name: 'Astral Boots', category: 'boots' },
		{ name: 'Starcaller Wand', category: 'one-handed weapon' },
		{ name: 'Cosmic Staff', category: 'two-handed weapon' }
	],
	paladin: [
		{ name: 'Radiant Plate', category: 'body armour' },
		{ name: 'Divine Helm', category: 'helmet' },
		{ name: 'Ethereal Boots', category: 'boots' },
		{ name: 'Luminous Blade', category: 'one-handed weapon' },
		{ name: 'Aegis of Light', category: 'one-handed weapon' }
	],
	necromancer: [
		{ name: 'Shadowed Vestments', category: 'body armour' },
		{ name: 'Crown of Souls', category: 'helmet' },
		{ name: 'Ebon Boots', category: 'boots' },
		{ name: 'Soulstaff', category: 'one-handed weapon' },
		{ name: 'Void Scythe', category: 'two-handed weapon' }
	],
	artificer: [
		{ name: 'Celestial Harness', category: 'body armour' },
		{ name: 'Goggles of the Stars', category: 'helmet' },
		{ name: 'Stardust Boots', category: 'boots' },
		{ name: 'Quantum Wrench', category: 'one-handed weapon' },
		{ name: 'Nova Cannon', category: 'two-handed weapon' }
	],
	monk: [
		{ name: 'Aetherial Robes', category: 'body armour' },
		{ name: 'Halo Crown', category: 'helmet' },
		{ name: 'Celestial Sandals', category: 'boots' },
		{ name: 'Void Gauntlets', category: 'one-handed weapon' },
		{ name: 'Staff of the Cosmos', category: 'two-handed weapon' }
	]
};

export const celestialItems: Item[] = [
	{ name: 'Starlight Pendant', category: 'accessory' },
	{ name: 'Celestial Incense', category: 'consumable' },
	{ name: 'Astral Rune', category: 'scroll' },
	{ name: 'Seraphic Feather', category: 'crafting material' },
	{ name: 'Ethereal Elixir', category: 'potion' },
	{ name: 'Heavenforged Coin', category: 'coin' },
	{ name: 'Divine Lyre', category: 'instrument' },
	{ name: 'Enchanted Quill', category: 'writing tool' },
	{ name: 'Celestial Locket', category: 'accessory' },
	{ name: 'Guiding Star Map', category: 'miscellaneous' }
];
