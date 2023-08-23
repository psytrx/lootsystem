import type { Item } from '../Item';
import type { ClassItems } from './types';

export const nagaClassItems: ClassItems = {
	warlock: [
		{ name: 'Serpentine Robes', category: 'body armour' },
		{ name: 'Crest of Scales', category: 'helmet' },
		{ name: 'Slithering Boots', category: 'boots' },
		{ name: 'Viper Wand', category: 'one-handed weapon' },
		{ name: "Serpent's Embrace", category: 'two-handed weapon' }
	],
	berserker: [
		{ name: 'Scalemail Vest', category: 'body armour' },
		{ name: "Serpent's Visage", category: 'helmet' },
		{ name: 'Constrictor Boots', category: 'boots' },
		{ name: 'Venomfang Axe', category: 'one-handed weapon' },
		{ name: 'Coiled Halberd', category: 'two-handed weapon' }
	],
	ranger: [
		{ name: 'Serpenthide Vest', category: 'body armour' },
		{ name: "Naga's Gaze", category: 'helmet' },
		{ name: 'Cobra Boots', category: 'boots' },
		{ name: 'Poisoned Shortbow', category: 'one-handed weapon' },
		{ name: 'Fanglong Bow', category: 'two-handed weapon' }
	],
	elementalist: [
		{ name: 'Serpentine Robes', category: 'body armour' },
		{ name: 'Crest of Scales', category: 'helmet' },
		{ name: 'Slithering Boots', category: 'boots' },
		{ name: 'Aqua Staff', category: 'one-handed weapon' },
		{ name: 'Tempest Trident', category: 'two-handed weapon' }
	],
	paladin: [
		{ name: 'Scale Defender', category: 'body armour' },
		{ name: "Seraph's Visage", category: 'helmet' },
		{ name: 'Serpentcoil Boots', category: 'boots' },
		{ name: 'Luminous Blade', category: 'one-handed weapon' },
		{ name: 'Aegis of the Depths', category: 'one-handed weapon' }
	],
	necromancer: [
		{ name: "Naga's Shroud", category: 'body armour' },
		{ name: 'Skull Crown', category: 'helmet' },
		{ name: 'Shadowcoil Boots', category: 'boots' },
		{ name: 'Soulbound Dagger', category: 'one-handed weapon' },
		{ name: 'Scepter of Shadows', category: 'one-handed weapon' }
	],
	assassin: [
		{ name: 'Venomweave Garb', category: 'body armour' },
		{ name: 'Hood of Venom', category: 'helmet' },
		{ name: 'Silent Scale Boots', category: 'boots' },
		{ name: 'Venomstrike Dagger', category: 'one-handed weapon' },
		{ name: 'Fangblade', category: 'one-handed weapon' }
	],
	druid: [
		{ name: "Nature's Enchantment", category: 'body armour' },
		{ name: "Serpent's Crown", category: 'helmet' },
		{ name: 'Vinebound Boots', category: 'boots' },
		{ name: 'Thorn Whip', category: 'one-handed weapon' },
		{ name: 'Grove Staff', category: 'two-handed weapon' }
	],
	artificer: [
		{ name: "Artificer's Harness", category: 'body armour' },
		{ name: 'Goggles of Ingenuity', category: 'helmet' },
		{ name: 'Gnomish Boots', category: 'boots' },
		{ name: 'Wrench', category: 'one-handed weapon' },
		{ name: "Inventor's Contraption", category: 'two-handed weapon' }
	],
	monk: [
		{ name: 'Mystic Robes', category: 'body armour' },
		{ name: 'Crown of Tranquility', category: 'helmet' },
		{ name: 'Serpent Spirit Boots', category: 'boots' },
		{ name: 'Kundalini Fist', category: 'one-handed weapon' },
		{ name: 'Serpentstaff', category: 'two-handed weapon' }
	]
};

export const nagaItems: Item[] = [
	{ name: 'Serpent Scale Amulet', category: 'accessory' },
	{ name: 'Venomous Vial', category: 'consumable' },
	{ name: 'Serpentine Coil', category: 'crafting material' },
	{ name: 'Naga Script Scroll', category: 'scroll' },
	{ name: 'Serpent Eye Gem', category: 'accessory' },
	{ name: 'Cobra Fang Dagger', category: 'one-handed weapon' },
	{ name: 'Serpent Tail Bracelet', category: 'accessory' },
	{ name: 'Seafoam Quill', category: 'writing tool' },
	{ name: 'Naga Totem', category: 'accessory' },
	{ name: 'Seashell Necklace', category: 'accessory' }
];
