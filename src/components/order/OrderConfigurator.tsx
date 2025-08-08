import { useMemo } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import AmountSelector from './AmountSelector'
import Selectors from './Selectors'
import { estimatePriceDzd, formatNumber } from '../../data/prices'
import { buildWhatsAppLink, getOwnerName } from '../../lib/whatsapp'
import { useOrderSelection } from './OrderContext'

export default function OrderConfigurator() {
  const { amount, platform, delivery, setAmount, setPlatform, setDelivery } = useOrderSelection()

  const price = useMemo(() => estimatePriceDzd({ amount, platform, delivery }), [amount, platform, delivery])
  const owner = getOwnerName()

  const whatsappMessage = useMemo(() => {
    return `مرحبا ${owner}، أريد شراء ${formatNumber(amount)} عملة FC لمنصة ${platform.toUpperCase()}. طريقة التسليم: ${delivery}.`
  }, [owner, amount, platform, delivery])

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold">اطلب عملاتك</h3>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <AmountSelector amount={amount} onAmountChange={setAmount} />
        <Selectors
          platform={platform}
          delivery={delivery}
          onPlatformChange={setPlatform}
          onDeliveryChange={setDelivery}
        />
        <div className="flex items-center justify-between bg-slate-900/40 border border-slate-800 rounded-xl px-4 py-3">
          <div>
            <p className="text-sm text-slate-400">السعر التقديري</p>
            <p className="text-lg font-bold">{formatNumber(price)} دج</p>
          </div>
          <Button asChild aria-label="اطلب عبر واتساب">
            <a href={buildWhatsAppLink(whatsappMessage)}>اطلب عبر واتساب</a>
          </Button>
        </div>
      </div>
    </Card>
  )
}


