import Section from '../components/ui/Section'
import Seo from '../components/seo/Seo'
import PlayerCard from '../components/sbc/PlayerCard'

export default function ChallengesPage() {
  return (
    <>
      <Seo title="تحديات و حلول — SBC" description="تحديات لحل SBC باستخدام بطاقات لاعبين" image="/og-default.png" />
      <Section>
        <h2 className="text-2xl font-bold">تحديات و حلول (SBC)</h2>
        <p className="mt-2 text-slate-300">اخترنا 3 بطاقات مرجعية لتحديات SBC: تشافي، مارادونا، هالاند — للمثال التعليمي فقط.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <PlayerCard name="تشافي" rating={92} position="CM" nation="إسبانيا" club="برشلونة" imageSrc="/xavi.png" />
          <PlayerCard name="مارادونا" rating={97} position="CAM" nation="الأرجنتين" club="نابولي" imageSrc="/maradona.png" />
          <PlayerCard name="هالاند" rating={91} position="ST" nation="النرويج" club="مانشستر سيتي" imageSrc="/haland.png" />
        </div>
      </Section>
    </>
  )
}


