import type { Enemy } from './Enemy';
import type { LootTable } from './LootTable';
import { lootTables } from './loot-tables';

const options = {
	enemyMaxLevel: 100
};

export const ItemDropper = {
	dropItems(enemy: Enemy) {
		const multiplier = calculateBaseDropMultiplier(enemy);
		const tables = getLootTablesForEnemy(enemy);
		console.log(tables);
	}
};

function getLootTablesForEnemy(enemy: Enemy) {
	// If it's a player character, only drop PvP specific items
	if (enemy.isPlayer) {
		return [lootTables.pvp];
	}

	// Use strong typing here so we get proper autocomplete based on the defined loot tables.
	const tables: LootTable[] = [];

	// We start with a shared base loot table for all enemies
	tables.push(lootTables.base);

	// Depending on the enemy's race, we add more loot tables
	const raceLootTable = lootTables.races[enemy.race];
	if (raceLootTable) {
		tables.push(raceLootTable);
	}

	// Same for classes
	const classLootTable = lootTables.classes[enemy.class];
	if (classLootTable) {
		tables.push(classLootTable);
	}

	// If the enemy is corrupted, a few specific items can drop
	if (enemy.isCorrupted) {
		tables.push(lootTables.corrupted);
	}

	return tables;
}

function calculateBaseDropMultiplier(enemy: Enemy) {
	// Scale multiplier based on enemy level
	//
	// level | multiplier
	// ------|-----------
	//     1 | 0.02
	//    25 | 0.46
	//    50 | 0.76
	//    75 | 0.91
	//   100 | 0.96

	// Hyperbolic scaling
	const base = Math.tanh(enemy.level / (options.enemyMaxLevel / 2));
	// Clamp multiplier between 0 and 1

	return Math.max(0, Math.min(1, base));
}
