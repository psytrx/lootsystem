import type { Item } from '../Item';
import type { ClassItems } from './types';

export const mechanoidClassItems: ClassItems = {
	warlock: [
		{ name: 'Mechanized Robes', category: 'body armour' },
		{ name: 'Circuit Helm', category: 'helmet' },
		{ name: 'Servo Boots', category: 'boots' },
		{ name: 'Energy Orb', category: 'one-handed weapon' },
		{ name: 'Tesla Coil Staff', category: 'two-handed weapon' }
	],
	berserker: [
		{ name: 'Armor Plating', category: 'body armour' },
		{ name: 'Crusher Helm', category: 'helmet' },
		{ name: 'Hydraulic Boots', category: 'boots' },
		{ name: 'Power Fist', category: 'one-handed weapon' },
		{ name: 'Plasma Maul', category: 'two-handed weapon' }
	],
	ranger: [
		{ name: 'Scout Chassis', category: 'body armour' },
		{ name: 'Visor Goggles', category: 'helmet' },
		{ name: 'Stealth Treads', category: 'boots' },
		{ name: 'Laser Crossbow', category: 'one-handed weapon' },
		{ name: 'Railgun', category: 'two-handed weapon' }
	],
	elementalist: [
		{ name: 'Elemental Coresuit', category: 'body armour' },
		{ name: 'Fusion Crown', category: 'helmet' },
		{ name: 'Plasma Boots', category: 'boots' },
		{ name: 'Plasma Wand', category: 'one-handed weapon' },
		{ name: 'Nuclear Staff', category: 'two-handed weapon' }
	],
	paladin: [
		{ name: 'Guardian Plating', category: 'body armour' },
		{ name: 'Radiant Helm', category: 'helmet' },
		{ name: 'Aegis Boots', category: 'boots' },
		{ name: 'Energy Blade', category: 'one-handed weapon' },
		{ name: 'Energy Shield', category: 'one-handed weapon' }
	],
	necromancer: [
		{ name: 'Mechanized Robes', category: 'body armour' },
		{ name: 'Circuit Helm', category: 'helmet' },
		{ name: 'Servo Boots', category: 'boots' },
		{ name: 'Death Ray Emitter', category: 'one-handed weapon' },
		{ name: 'Reanimation Staff', category: 'two-handed weapon' }
	],
	assassin: [
		{ name: 'Stealth Frame', category: 'body armour' },
		{ name: 'Optics Hood', category: 'helmet' },
		{ name: 'Silent Gear', category: 'boots' },
		{ name: 'Plasma Dagger', category: 'one-handed weapon' },
		{ name: 'Assault Cannon', category: 'two-handed weapon' }
	],
	druid: [
		{ name: 'Nature Coreframe', category: 'body armour' },
		{ name: 'Crown of Vines', category: 'helmet' },
		{ name: 'Rooted Boots', category: 'boots' },
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
		{ name: 'Machina Robes', category: 'body armour' },
		{ name: 'Crown of Cogs', category: 'helmet' },
		{ name: 'Steam Boots', category: 'boots' },
		{ name: 'Mech Fist', category: 'one-handed weapon' },
		{ name: 'Cogstaff', category: 'two-handed weapon' }
	]
};

export const mechanoidItems: Item[] = [
	{ name: 'Cogwork Widget', category: 'crafting material' },
	{ name: 'Circuitry Blueprint', category: 'scroll' },
	{ name: 'Oil Flask', category: 'consumable' },
	{ name: 'Techno Coin', category: 'coin' },
	{ name: 'Gyromech Key', category: 'accessory' },
	{ name: 'Scrap Metal Pouch', category: 'bag' },
	{ name: 'Enhancement Kit', category: 'tool' },
	{ name: 'Schematic Scroll', category: 'scroll' },
	{ name: 'Mechanoid Identifier', category: 'accessory' },
	{ name: 'Electric Torch', category: 'light source' }
];
