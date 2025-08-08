import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { buildWhatsAppLink } from '../lib/whatsapp'
import StepList from '../components/pages/StepList'
import Seo from '../components/seo/Seo'

export default function BoostingPage() {
  return (
    <>
      <Seo title="البوستينغ — Boosting" description="نرفع تقييم فريقك بأمان وشفافية، دون الحاجة لتسجيل" image="/og-default.png" />
      <Section>
      <h2 className="text-2xl font-bold">البوستينغ (Boosting)</h2>
      <Card
        className="mt-6 p-6 relative overflow-hidden"
        style={{ backgroundImage: 'url(/cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-slate-900/60" aria-hidden />
        <div className="relative z-10 space-y-4">
          <p className="text-slate-200">نرفع تقييم فريقك بأمان وشفافية، دون الحاجة لتسجيل</p>
          <StepList
            steps={[
              'اختر الهدف أو المستوى المطلوب',
              'أرسل بيانات الحساب أو تفاصيل الطريقة المتفق عليها بأمان',
              'نتابع التقدم ونخبرك فور الإنهاء',
            ]}
          />
          <div className="pt-2">
            <Button asChild>
              <a href={buildWhatsAppLink('أرغب بخدمة البوستينغ')}>اطلب عبر واتساب</a>
            </Button>
          </div>
        </div>
      </Card>
      </Section>
    </>
  )
}


