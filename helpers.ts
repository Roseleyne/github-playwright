export function parsePrice(value: string): number {
  const normalized = value.replace(/[^\d,.-]/g, '').replace('.', '').replace(',', '.');
  return Number(normalized);
}
