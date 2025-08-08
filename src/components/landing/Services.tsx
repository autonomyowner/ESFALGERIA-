import Card from '../ui/Card'
import { IconExchange, IconRocket, IconCash, IconGift } from '@tabler/icons-react'

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-slate-800/70 border border-slate-700 p-2 text-yellow-400">
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="mt-3 text-slate-300">{description}</p>
    </Card>
  )
}

export default function Services() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ServiceCard icon={<IconExchange size={22} />} title="التداول" description="تداول آمن بإشراف فريقنا" />
      <ServiceCard icon={<IconRocket size={22} />} title="البوستينغ" description="رفع تقييم فريقك بأمان" />
      <ServiceCard icon={<IconCash size={22} />} title="البيع لنا" description="بع عملاتك لنا بأفضل سعر" />
      <ServiceCard icon={<IconGift size={22} />} title="المكافآت" description="اكسب نقاط ومكافآت على كل عملية" />
    </div>
  )
}


