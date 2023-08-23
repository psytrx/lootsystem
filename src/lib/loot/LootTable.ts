import type { Item } from './Item';

export type LootTableEntry = {
	item: Item;
	chance: number;
};

export type LootTable = LootTableEntry[];
