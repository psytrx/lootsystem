<script lang="ts">
	import { races, type Enemy, classes, type EnemyRace, type EnemyClass } from '$lib/loot/Enemy';
	import { Rng } from '$lib/rng';
	import EnemyDisplay from './EnemyDisplay.svelte';
	import { celestialNames } from './names/celestial';
	import { draconianNames } from './names/draconian';
	import { feyfolkNames } from './names/feyfolk';
	import { humanNames } from './names/human';
	import { mechanoidNames } from './names/mechanoid';
	import { nagaNames } from './names/naga';
	import { playerNames } from './names/players';
	import { uniqueBosses } from './bosses';

	const enemies: Enemy[] = [];

	playerNames.forEach((name) => {
		enemies.push({
			id: crypto.randomUUID(),
			name,
			isPlayer: true,
			race: Rng.pick([...races]),
			class: Rng.pick([...classes]),
			level: Rng.int(1, 100)
		});
	});

	const createNpc = (race: EnemyRace, name: string) =>
		({
			id: crypto.randomUUID(),
			name,
			isPlayer: false,
			isCorrupted: Rng.chance(0.05),
			race,
			class: Rng.pick([...classes]),
			level: Rng.int(1, 100)
		} satisfies Enemy);

	celestialNames.forEach((name) => {
		enemies.push(createNpc('celestial', name));
	});

	draconianNames.forEach((name) => {
		enemies.push(createNpc('draconian', name));
	});

	feyfolkNames.forEach((name) => {
		enemies.push(createNpc('feyfolk', name));
	});

	humanNames.forEach((name) => {
		enemies.push(createNpc('human', name));
	});

	mechanoidNames.forEach((name) => {
		enemies.push(createNpc('mechanoid', name));
	});

	nagaNames.forEach((name) => {
		enemies.push(createNpc('naga', name));
	});

	uniqueBosses.forEach((boss) => {
		enemies.push({
			id: crypto.randomUUID(),
			name: boss.name,
			title: boss.title,
			isPlayer: false,
			isCorrupted: Rng.chance(0.05),
			race: boss.race as EnemyRace,
			class: boss.class as EnemyClass,
			level: Rng.int(1, 100)
		});
	});

	let enemy = Rng.pick(enemies);

	function onFindBoss() {
		const bosses = enemies.filter((e) => e.title);
		enemy = Rng.pick(bosses);
	}

	function onNext() {
		enemy = Rng.pick(enemies);
	}

	function onKill(e: Enemy) {
		enemy = Rng.pick(enemies);
	}
</script>

<section>
	<EnemyDisplay {enemy} />

	<div>
		<button on:click={onFindBoss}>Find Boss</button>
		<button on:click={() => onKill(enemy)}>Kill it!</button>
		<button on:click={onNext}>Next</button>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-flow: column nowrap;
		gap: var(--size-2);
	}

	div {
		display: flex;
		justify-content: space-between;
	}
</style>
