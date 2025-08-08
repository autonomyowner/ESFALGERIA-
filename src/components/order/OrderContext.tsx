import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { DeliveryMethod, Platform } from '../../data/prices'

export interface OrderSelection {
  amount: number
  platform: Platform
  delivery: DeliveryMethod
}

interface OrderContextValue extends OrderSelection {
  setAmount: (amount: number) => void
  setPlatform: (platform: Platform) => void
  setDelivery: (delivery: DeliveryMethod) => void
}

const OrderContext = createContext<OrderContextValue | undefined>(undefined)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [amount, setAmount] = useState<number>(250_000)
  const [platform, setPlatform] = useState<Platform>('ps')
  const [delivery, setDelivery] = useState<DeliveryMethod>('comfort')

  const value = useMemo<OrderContextValue>(() => ({ amount, platform, delivery, setAmount, setPlatform, setDelivery }), [amount, platform, delivery])
  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export function useOrderSelection(): OrderContextValue {
  const ctx = useContext(OrderContext)
  if (!ctx) throw new Error('useOrderSelection must be used within OrderProvider')
  return ctx
}


