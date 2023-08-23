import { Rng } from '$lib/rng';
import type { Enemy } from './Enemy';
import type { Item } from './Item';
import type { LootTable } from './LootTable';
import { lootTables } from './loot-tables';

const options = {
	enemyMaxLevel: 100
};

export const ItemDropper = {
	dropItems(enemy: Enemy) {
		const tags = getLootTagsForEnemy(enemy);

		const tables: LootTable[] = [];
		tags.forEach((tag) => {
			const table = lootTables[tag];
			if (table) {
				tables.push(table);
			}
		});

		const multiplier = calculateBaseDropMultiplier(enemy);

		const items: Item[] = [];
		tables.forEach((table) => {
			table.forEach((entry) => {
				const threshold = multiplier * entry.chance;
				const r = Rng.uniform(0, 1);

				if (r < threshold) {
					items.push(entry.item);
				}
			});
		});

		return items;
	}
};

function getLootTagsForEnemy(enemy: Enemy) {
	// If it's a player character, only drop PvP specific items
	if (enemy.isPlayer) {
		return ['pvp'];
	}

	const tags: string[] = [];

	// We start with a shared base loot table for all enemies
	tags.push('general');

	// If the enemy is corrupted, a few specific items can drop
	if (enemy.isCorrupted) {
		tags.push('corrupted');
	}

	// Add race-specific tags
	tags.push(`race:${enemy.race}`);

	// Add class-specific tags
	tags.push(`class:${enemy.class}`);

	// Add race-class-specific tags
	tags.push(`race:${enemy.race} class:${enemy.class}`);

	return tags;
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

	const clamped = Math.max(0, Math.min(1, base));

	// If enemy is a boss (he has a title), multiply with boss level
	if (enemy.title) {
		return clamped * enemy.level;
	}

	return clamped;
}
