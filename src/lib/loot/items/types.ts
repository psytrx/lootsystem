import type { classes } from '../Enemy';
import type { Item } from '../Item';

export type ClassItems = Partial<Record<(typeof classes)[number], Item[]>>;
