import type { Item } from './Item';

export type LootTableEntry = {
	item: Item;
	chance: number;
};

export interface LootTable {
	id: string;
	entries: LootTableEntry[];
}
