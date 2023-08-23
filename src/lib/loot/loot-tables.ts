import type { EnemyClass, EnemyRace } from './Enemy';
import type { LootTable } from './LootTable';
import { items } from './items';

// PvP specific loot table
const pvp: LootTable = {
	id: 'pvp',
	entries: [
		{ item: items.pvpCoin, chance: 1 },
		{ item: items.championsMedal, chance: 0.01 }
	]
};

// Shared loot table that is used by all (non-player) enemies
const base: LootTable = {
	id: 'base',
	entries: [
		{ item: items.goldCoin, chance: 0.25 },
		{ item: items.healthPotion, chance: 0.05 },
		{ item: items.ancientRelic, chance: 0.01 },
		{ item: items.etherealEssence, chance: 0.01 },
		{ item: items.glimmeringShard, chance: 0.01 },
		{ item: items.mysticEmber, chance: 0.01 },
		{ item: items.crackedPotionVial, chance: 0.01 },
		{ item: items.rustyDagger, chance: 0.01 }
	]
};

// Each race has it's own specific loot
const races: Partial<Record<EnemyRace, LootTable>> = {
	human: {
		id: 'human',
		entries: []
	}
};

const classes: Partial<Record<EnemyClass, LootTable>> = {};

// Specific corrupted items
const corrupted: LootTable = {
	id: 'corrupted',
	entries: []
};

export const lootTables = {
	base,
	classes,
	corrupted,
	pvp,
	races
};
