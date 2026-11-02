export function formatNaira(amt: number): string {
  return `${(amt / 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })} NGN`;
}
