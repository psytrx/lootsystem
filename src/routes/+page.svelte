<script lang="ts">
	import { dev } from '$app/environment';
	import type { Enemy } from '$lib/loot/Enemy';
	import type { Item } from '$lib/loot/Item';
	import { ItemDropper } from '$lib/loot/ItemDropper';
	import { Rng } from '$lib/rng';
	import EnemyDisplay from './EnemyDisplay.svelte';
	import LootDisplay from './LootDisplay.svelte';
	import { enemies } from './enemies';

	let enemy = Rng.pick(enemies);
	let consecutiveKills = 0;
	let isDead = false;
	let loot: Item[] = [];

	function onFindBoss() {
		const bosses = enemies.filter((e) => e.title);
		enemy = Rng.pick(bosses);

		consecutiveKills = 0;
		isDead = false;
	}

	function onNext() {
		enemy = Rng.pick(enemies);
		isDead = false;
	}

	function onKill(e: Enemy) {
		loot = ItemDropper.dropItems(e);

		isDead = true;
		consecutiveKills++;
	}
</script>

<section>
	<EnemyDisplay {enemy} />

	<div>
		<button on:click={onFindBoss} disabled={!dev && consecutiveKills < 10}>Find Boss</button>
		<button on:click={() => onKill(enemy)} disabled={isDead}>Kill it!</button>
		<button on:click={() => onKill(enemy)} disabled={!isDead}>Kill it again</button>
		<button on:click={onNext} disabled={!isDead}>Next</button>
	</div>

	<LootDisplay items={loot} />
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
