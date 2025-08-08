import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Accordion from '../components/ui/Accordion'
import Seo from '../components/seo/Seo'

export default function FAQPage() {
  return (
    <>
      <Seo title="الأسئلة الشائعة — FAQ" description="أجوبة قصيرة وواضحة لأكثر الأسئلة شيوعًا" image="/og-default.png" />
      <Section>
      <h2 className="text-2xl font-bold">الأسئلة الشائعة</h2>
      <Card className="mt-6 p-6">
        <Accordion
          items={[
            { question: 'كم يستغرق التسليم؟', answer: 'عادةً خلال دقائق إلى ساعة حسب الضغط.' },
            { question: 'ما طرق التسليم المتاحة؟', answer: 'Comfort Trade أو Player Auction.' },
            { question: 'هل أحتاج لتسجيل حساب؟', answer: 'لا، كل شيء يتم عبر واتساب.' },
            { question: 'هل الأسعار ثابتة؟', answer: 'قد تتغير حسب السوق، سيتم تأكيد السعر عبر واتساب قبل الدفع.' },
            { question: 'هل البيانات آمنة؟', answer: 'نلتزم بطرق تسليم آمنة وحماية بيانات العملاء.' },
          ]}
        />
      </Card>
      </Section>
    </>
  )
}


