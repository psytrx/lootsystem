import type { Enemy } from './Enemy';

const options = {
	enemyMaxLevel: 100
};

export const ItemDropper = {
	dropItems(enemy: Enemy) {
		const multiplier = calculateBaseDropMultiplier(enemy);
		const tags = getLootTagsForEnemy(enemy);
		console.log(tags);
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

	return Math.max(0, Math.min(1, base));
}
