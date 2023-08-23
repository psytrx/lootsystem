<script lang="ts">
	import type { Enemy } from '$lib/loot/Enemy';

	export let enemy: Enemy;
</script>

<section>
	<header>
		<span>
			<strong>
				Lvl {enemy.level}
			</strong>

			{#if enemy.isPlayer}Player{:else}NPC{/if}
		</span>

		<span>
			{enemy.race}
			{enemy.class}
		</span>

		<div class="corrupted">
			{#if !enemy.isPlayer && enemy.isCorrupted}
				(corrupted)
			{/if}
		</div>

		<small>
			ID: <code>{enemy.id}</code>
		</small>
	</header>
</section>

<style>
	section {
		box-shadow: var(--shadow-3);
		padding: var(--size-4);
		background-color: var(--gray-8);
		border-radius: var(--radius-2);
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	small {
		display: flex;
		align-items: center;
		gap: var(--size-2);
	}

	.corrupted {
		color: var(--pink-8);
	}
</style>
