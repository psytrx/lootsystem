const uniform = (min: number, max: number) => min + (max - min) * Math.random();
const int = (min: number, max: number) => Math.floor(uniform(min, max));
const intn = (max: number) => int(0, max);
const pick = <T>(xs: T[]) => xs[intn(xs.length)];
const chance = (chance: number) => uniform(0, 1) < chance;

export const Rng = {
	chance,
	uniform,
	int,
	intn,
	pick
};
