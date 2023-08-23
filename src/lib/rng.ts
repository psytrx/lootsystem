const uniform = (min: number, max: number) => min + (max - min) * Math.random();
const int = (min: number, max: number) => Math.floor(uniform(min, max));
const intn = (max: number) => int(0, max);
const pick = <T>(xs: T[]) => xs[intn(xs.length)];

export const Rng = {
	uniform,
	int,
	intn,
	pick
};
