import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { buildWhatsAppLink } from '../lib/whatsapp'
import StepList from '../components/pages/StepList'
import Seo from '../components/seo/Seo'

export default function RewardsPage() {
  return (
    <>
      <Seo title="المكافآت — Rewards" description="اكسب مكافآت على كل عملية شراء. نقاط تُحتسب عبر واتساب" image="/og-default.png" />
      <Section>
      <h2 className="text-2xl font-bold">المكافآت (Rewards)</h2>
      <Card className="mt-6 p-6 space-y-4">
        <p className="text-slate-300">اكسب مكافآت على كل عملية شراء. نقاط تُحتسب عبر واتساب</p>
        <StepList
          steps={[
            'كل عملية شراء تضيف نقاطًا إلى حسابك لدينا',
            'يمكنك استبدال النقاط بخصومات على الطلبات القادمة',
            'أرسل كلمة "مكافآت" عبر واتساب لمعرفة رصيدك',
          ]}
        />
        <div className="pt-2">
          <Button asChild>
            <a href={buildWhatsAppLink('أرغب بمعرفة نظام المكافآت')}>تواصل عبر واتساب</a>
          </Button>
        </div>
      </Card>
      </Section>
    </>
  )
}


