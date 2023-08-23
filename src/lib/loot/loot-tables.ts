import type { EnemyClass } from './Enemy';
import type { Item } from './Item';
import type { LootTable, LootTableEntry } from './LootTable';
import { celestialClassItems } from './items/celestial';
import { corruptedItems } from './items/corrupted';
import { draconianClassItems } from './items/draconian';
import { feyfolkClassItems } from './items/feyfolk';
import { generalItems } from './items/general';
import { humanClassItems } from './items/human';
import { mechanoidClassItems } from './items/mechanoid';
import { nagaClassItems } from './items/naga';
import { pvpItems } from './items/pvp';
import type { ClassItems } from './items/types';

// This file generates the loot tables.
// This can also be hard-coded, configured, dynamic etc, but I went for an auto-generated method.

const transposeLinear = (multiplier: number, items: Item[]): LootTableEntry[] =>
	items.map((item, i) => ({
		item,
		chance: multiplier / (i + 1)
	}));

const transposeConst = (chance: number, items: Item[]): LootTableEntry[] =>
	items.map((item) => ({
		item,
		chance
	}));

// PvP specific loot table
const pvp: LootTable = {
	id: 'pvp',
	entries: transposeLinear(1.0, pvpItems)
};

// Shared loot table that is used by all (non-player) enemies.
// Items at the top of the array are more common.
const general: LootTable = {
	id: 'general',
	entries: transposeLinear(0.2, generalItems)
};

// Specific corrupted items
const corrupted: LootTable = {
	id: 'corrupted',
	entries: transposeLinear(0.1, corruptedItems)
};

export const lootTables = {
	general,
	corrupted,
	pvp
};
