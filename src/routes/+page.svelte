<script lang="ts">
	import { races, type Enemy, classes } from '$lib/loot/Enemy';
	import { ItemDropper } from '$lib/loot/ItemDropper';
	import { Rng } from '$lib/rng';
	import EnemyDisplay from './EnemyDisplay.svelte';

	export const enemies: Enemy[] = [
		{
			id: crypto.randomUUID(),
			isPlayer: true,
			race: Rng.pick([...races]),
			level: Rng.int(1, 100),
			class: Rng.pick([...classes])
		},
		{
			id: crypto.randomUUID(),
			isPlayer: false,
			race: Rng.pick([...races]),
			level: Rng.int(1, 100),
			class: Rng.pick([...classes]),
			isCorrupted: Rng.chance(0.1),
			tags: []
		}
	];

	let enemy = Rng.pick(enemies);

	function onDropItems(enemy: Enemy) {
		ItemDropper.dropItems(enemy);
	}
</script>

<section>
	<EnemyDisplay {enemy} />

	<button on:click={() => onDropItems(enemy)}>Drop Items</button>
</section>

<style>
	section {
		display: flex;
		flex-flow: column nowrap;
		gap: var(--size-2);
	}
</style>
