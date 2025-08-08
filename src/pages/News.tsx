import Section from '../components/ui/Section'
import Seo from '../components/seo/Seo'

export default function NewsPage() {
  return (
    <>
      <Seo title="اخبار" description="تحصل علا احدث الاخبار و العروض" image="/og-default.png" />
      <Section>
        <h2 className="text-2xl font-bold">اخبار</h2>
        <p className="mt-2 text-slate-300">تحصل علا احدث الاخبار و العروض</p>
        <div className="min-h-[30vh] flex items-center justify-center mt-8">
          <span className="text-xl font-extrabold text-slate-200">قريبا</span>
        </div>
      </Section>
    </>
  )
}


