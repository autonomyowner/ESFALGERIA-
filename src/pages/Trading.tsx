import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { buildWhatsAppLink } from '../lib/whatsapp'
import StepList from '../components/pages/StepList'
import Seo from '../components/seo/Seo'

export default function TradingPage() {
  return (
    <>
      <Seo title="التداول — Trading" description="تداول آمن بإشراف فريقنا. المنصات: PlayStation / Xbox / PC" image="/og-default.png" />
      <Section>
      <h2 className="text-2xl font-bold">التداول (Trading)</h2>
      <Card className="mt-6 p-6 space-y-4">
        <p className="text-slate-300">تداول آمن بإشراف فريقنا. المنصات: PlayStation / Xbox / PC</p>
        <StepList
          steps={[
            'اختر المنصة والكمية المناسبة',
            'حدد طريقة التسليم (Comfort Trade / Player Auction)',
            'أرسل التفاصيل عبر واتساب وسيتم تأكيد الطلب',
          ]}
        />
        <div className="pt-2">
          <Button asChild>
            <a href={buildWhatsAppLink('أرغب بالتداول')}>اطلب عبر واتساب</a>
          </Button>
        </div>
      </Card>
      </Section>
    </>
  )
}


