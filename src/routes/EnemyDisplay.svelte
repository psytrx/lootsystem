<script lang="ts">
	import { browser } from '$app/environment';
	import type { Enemy } from '$lib/loot/Enemy';
	import { capitalize } from './util';

	export let enemy: Enemy;
	let image = '';

	$: {
		if (browser) {
			image = '';

			if (enemy.title) {
				const slug = enemy.name.toLowerCase().replaceAll(' ', '-');
				image = `/boss-images/${slug}.png`;
			}
		}
	}
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

	{#if image}
		<img src={image} alt={enemy.name} />
	{/if}
</section>

<style>
	section {
		box-shadow: var(--shadow-3);
		padding: var(--size-4);
		background-color: var(--gray-8);
		border-radius: var(--radius-2);

		text-align: center;
		display: flex;
		flex-flow: column nowrap;
		gap: var(--size-4);
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
		gap: var(--size-2);
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

	img {
		max-height: 50vh;
		margin: 0 auto;
		border-radius: var(--radius-3);
		box-shadow: var(--shadow-2);
	}
</style>
