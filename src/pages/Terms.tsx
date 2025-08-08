import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Seo from '../components/seo/Seo'

export default function TermsPage() {
  return (
    <>
      <Seo title="الشروط والأحكام" description="الشروط والأحكام الخاصة باستخدام موقع ESFALGERIA" image="/og-default.png" />
      <Section>
        <h2 className="text-2xl font-bold">الشروط والأحكام</h2>
        <Card className="mt-6 p-6 space-y-3 leading-relaxed text-slate-300">
          <p>باستخدامك لموقع ESFALGERIA فإنك توافق على الشروط التالية:</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>الأسعار قد تتغير حسب السوق قبل تأكيد الطلب عبر واتساب.</li>
            <li>يجب تقديم بيانات صحيحة لإتمام الطلب.</li>
            <li>أي إساءة استخدام أو احتيال يؤدي لإلغاء الطلب.</li>
            <li>طرق التسليم المتاحة: Comfort Trade أو Player Auction حسب التوفر.</li>
          </ul>
          <p>للاستفسارات يرجى التواصل عبر واتساب.</p>
        </Card>
      </Section>
    </>
  )
}


