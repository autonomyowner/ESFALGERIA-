import Card from '../ui/Card'
import Button from '../ui/Button'
import { buildWhatsAppLink } from '../../lib/whatsapp'

export default function FeaturedCTA() {
  return (
    <Card gradientBorder className="p-8 text-center">
      <h3 className="text-2xl font-extrabold">اطلب الآن</h3>
      <p className="mt-2 text-slate-300">أفضل الأسعار وتسليم فوري</p>
      <div className="mt-4 flex items-center justify-center">
        <Button asChild>
          <a href={buildWhatsAppLink('أرغب بالطلب الآن')}>اطلب عبر واتساب</a>
        </Button>
      </div>
    </Card>
  )
}


