export function randomNumber(min: number, max?: number): number {
  if (max === undefined) {
    return Math.floor(Math.random() * min);
  }
  return Math.floor(Math.random() * (max - min)) + min;
}