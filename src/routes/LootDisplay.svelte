<script lang="ts">
	import type { Item } from '$lib/loot/Item';
	import ItemDisplay from './ItemDisplay.svelte';

	export let items: Item[];
</script>

{#if items.length}
	<ul>
		{#each items as item}
			<li>
				<ItemDisplay {item} />
			</li>
		{/each}
	</ul>
{/if}
