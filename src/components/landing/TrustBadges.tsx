import IconBadge from '../ui/IconBadge'
import { IconBolt, IconShieldCheck, IconMessage } from '@tabler/icons-react'

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="text-center p-6 card">
        <IconBadge icon={<IconBolt size={18} />}>
          تسليم سريع
        </IconBadge>
        <p className="mt-2 text-slate-300">استلم عملاتك بسرعة</p>
      </div>
      <div className="text-center p-6 card">
        <IconBadge icon={<IconShieldCheck size={18} />}>
          أمان مضمون
        </IconBadge>
        <p className="mt-2 text-slate-300">طرق تسليم آمنة</p>
      </div>
      <div className="text-center p-6 card">
        <IconBadge icon={<IconMessage size={18} />}>
          دعم دائم
        </IconBadge>
        <p className="mt-2 text-slate-300">مساعدة عبر واتساب</p>
      </div>
    </div>
  )
}


