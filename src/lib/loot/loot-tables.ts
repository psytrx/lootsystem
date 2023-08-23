import type { Item } from './Item';
import type { LootTable, LootTableEntry } from './LootTable';
import { celestialItems } from './items/celestial';
import { corruptedItems } from './items/corrupted';
import { generalItems } from './items/general';
import { pvpItems } from './items/pvp';

// This file generates the loot tables.
// This can also be hard-coded, configured, dynamic etc, but I went for an auto-generated method.

const transposeLinear = (multiplier: number, items: Item[]): LootTableEntry[] =>
	items.map((item, i) => ({
		item,
		chance: multiplier / (i + 1)
	}));

export const lootTables: Record<string, LootTable> = {
	general: transposeLinear(0.4, generalItems),
	pvp: transposeLinear(1.0, pvpItems),
	corrupted: transposeLinear(0.4, corruptedItems),
	'class-celestial': transposeLinear(0.5, celestialItems)
};
