import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { buildWhatsAppLink } from '../lib/whatsapp'
import RatesTable from '../components/pages/RatesTable'
import Seo from '../components/seo/Seo'

export default function SellPage() {
  return (
    <>
      <Seo title="البيع لنا — Sell" description="بع عملاتك لنا بأفضل سعر — الدفعات سريعة" image="/og-default.png" />
      <Section>
      <h2 className="text-2xl font-bold">البيع لنا (Sell)</h2>
      <Card className="mt-6 p-6 space-y-4">
        <p className="text-slate-300">بع عملاتك لنا بأفضل سعر — الدفعات سريعة</p>
        <RatesTable
          rows={[
            { amount: '100K', price: '2000 دج' },
            { amount: '250K', price: '4800 دج' },
            { amount: '500K', price: '9000 دج' },
            { amount: '1M', price: '17000 دج' },
          ]}
        />
        <div className="pt-2">
          <Button asChild>
            <a href={buildWhatsAppLink('أرغب ببيع العملات')}>تواصل عبر واتساب</a>
          </Button>
        </div>
      </Card>
      </Section>
    </>
  )
}


