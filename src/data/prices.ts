export type Platform = 'ps' | 'xbox' | 'pc'
export type DeliveryMethod = 'comfort' | 'auction'

export const platformLabel: Record<Platform, string> = {
  ps: 'PlayStation',
  xbox: 'Xbox',
  pc: 'PC',
}

export const deliveryLabel: Record<DeliveryMethod, string> = {
  comfort: 'Comfort Trade',
  auction: 'Player Auction',
}

// Static base price per 100K (DZD) — adjust as needed
const basePricePer100k: Record<Platform, number> = {
  ps: 300,
  xbox: 320,
  pc: 280,
}

const deliveryMultiplier: Record<DeliveryMethod, number> = {
  comfort: 1,
  auction: 1.05,
}

export function estimatePriceDzd(params: { amount: number; platform: Platform; delivery: DeliveryMethod }): number {
  const { amount, platform, delivery } = params
  const units = Math.max(0, Math.round(amount / 100_000))
  const base = basePricePer100k[platform] * units
  const price = base * deliveryMultiplier[delivery]
  return Math.round(price)
}

export function formatNumber(num: number): string {
  return num.toLocaleString('ar-DZ')
}


