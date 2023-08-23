import { races, type EnemyRace, classes } from './Enemy';
import type { Item } from './Item';
import type { LootTable, LootTableEntry } from './LootTable';
import { celestialClassItems, celestialItems } from './items/celestial';
import { corruptedItems } from './items/corrupted';
import { draconianClassItems, draconianItems } from './items/draconian';
import { feyfolkClassItems, feyfolkItems } from './items/feyfolk';
import { generalItems } from './items/general';
import { humanClassItems, humanItems } from './items/human';
import { mechanoidClassItems, mechanoidItems } from './items/mechanoid';
import { nagaClassItems, nagaItems } from './items/naga';
import { pvpItems } from './items/pvp';

// This file generates the loot tables.
// This can also be hard-coded, configured, dynamic etc, but I went for an auto-generated method.

// A dummy function to create a loot table entries from a list of items
const transposeLinear = (multiplier: number, items: Item[]): LootTableEntry[] =>
	items.map((item, i) => ({
		item,
		chance: multiplier / (i + 1)
	}));

const raceItems: Record<EnemyRace, Item[]> = {
	celestial: celestialItems,
	draconian: draconianItems,
	feyfolk: feyfolkItems,
	human: humanItems,
	mechanoid: mechanoidItems,
	naga: nagaItems
};

const raceClassItems = {
	celestial: celestialClassItems,
	draconian: draconianClassItems,
	feyfolk: feyfolkClassItems,
	human: humanClassItems,
	mechanoid: mechanoidClassItems,
	naga: nagaClassItems
};

export const lootTables: Record<string, LootTable> = {
	general: transposeLinear(0.4, generalItems),
	pvp: transposeLinear(1.0, pvpItems),
	corrupted: transposeLinear(0.4, corruptedItems),

	...races.reduce((acc, race) => {
		const items = raceItems[race];
		return {
			...acc,
			[`race:${race}`]: transposeLinear(0.4, items)
		};
	}, {}),

	...races.reduce((acc, race) => {
		return {
			...acc,
			...classes.reduce((acc, cls) => {
				const raceData = raceClassItems[race];
				if (raceData) {
					const classData = raceData[cls];
					if (classData) {
						return {
							...acc,
							[`race:${race} class:${cls}`]: transposeLinear(0.4, classData)
						};
					}
				}

				return acc;
			}, {})
		};
	}, {})
};
