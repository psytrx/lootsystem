<script lang="ts">
	import type { Enemy } from '$lib/loot/Enemy';

	export let enemy: Enemy;

	const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
</script>

<section>
	<header>
		<span>
			Lvl: {enemy.level}
		</span>

		<span>
			{#if enemy.isPlayer}
				Player
			{:else if enemy.isCorrupted}
				<span class="corrupted">corrupted</span>
			{/if}

			<strong>
				<span class:big={enemy.title}>
					{enemy.name}
				</span>

				{#if enemy.title}
					<span class="golden">
						{enemy.title}
					</span>
				{/if}
			</strong>
		</span>

		<span>
			{capitalize(enemy.race)}
			{capitalize(enemy.class)}
		</span>
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
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-4);
	}

	span {
		display: flex;
		gap: var(--size-1);
	}

	strong {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		gap: var(--size-1);
	}

	.corrupted {
		color: var(--pink-8);
	}

	.golden {
		color: var(--yellow-6);
	}

	.big {
		font-size: var(--font-size-3);
	}
</style>
