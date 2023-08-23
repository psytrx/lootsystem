import type { Item } from './Item';

type LootTableEntry = {
	item: Item;
	chance: number;
};

export interface LootTable {
	id: string;
	entries: LootTableEntry[];
}
