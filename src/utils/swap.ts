export default function swap<T>(arr: T[], a: number, b: number): void {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}