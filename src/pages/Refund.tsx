import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Seo from '../components/seo/Seo'

export default function RefundPage() {
  return (
    <>
      <Seo title="سياسة الاسترجاع" description="سياسة الاسترجاع والاستبدال الخاصة ب ESFALGERIA" image="/og-default.png" />
      <Section>
        <h2 className="text-2xl font-bold">سياسة الاسترجاع</h2>
        <Card className="mt-6 p-6 space-y-3 leading-relaxed text-slate-300">
          <p>نسعى لرضاكم. يمكن النظر في طلبات الاسترجاع وفق الحالات التالية:</p>
          <ul className="list-disc pr-6 space-y-2">
            <li>عدم إتمام التسليم ضمن الوقت المتفق عليه.</li>
            <li>وجود مشكلة مؤكدة في عملية التسليم.</li>
          </ul>
          <p>لا تُقبل الطلبات بعد إتمام التسليم بنجاح. يُرجى التواصل عبر واتساب لبحث الحالة.</p>
        </Card>
      </Section>
    </>
  )
}


