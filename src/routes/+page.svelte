<script lang="ts">
	import type { Enemy } from '$lib/loot/Enemy';
	import { ItemDropper } from '$lib/loot/ItemDropper';
	import { Rng } from '$lib/rng';
	import EnemyDisplay from './EnemyDisplay.svelte';
	import { enemies } from './enemies';

	let enemy = Rng.pick(enemies);
	let consecutiveKills = 0;
	let isDead = false;

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
		ItemDropper.dropItems(e);
		isDead = true;

		consecutiveKills++;
	}
</script>

<section>
	<EnemyDisplay {enemy} />

	<div>
		<button on:click={onFindBoss} disabled={consecutiveKills < 10}>Find Boss</button>
		<button on:click={() => onKill(enemy)} disabled={isDead}>Kill it!</button>
		<button on:click={onNext} disabled={!isDead}>Next</button>
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
