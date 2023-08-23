export const races = ['human', 'draconian', 'mechanoid', 'naga', 'celestial', 'feyfolk'] as const;

export type EnemyRace = (typeof races)[number];

export const classes = [
	'warlock',
	'berserker',
	'ranger',
	'elementalist',
	'paladin',
	'necromancer',
	'assassin',
	'druid',
	'artificer',
	'monk'
] as const;

export type EnemyClass = (typeof classes)[number];

interface BaseEnemy {
	id: string;
	name: string;
	title?: string;
	race: EnemyRace;
	class: EnemyClass;
	level: number;
}

interface PlayerEnemy {
	isPlayer: true;
}

interface NonPlayerEnemy {
	isPlayer: false;
	isCorrupted: boolean;
}

export type Enemy = BaseEnemy & (PlayerEnemy | NonPlayerEnemy);
