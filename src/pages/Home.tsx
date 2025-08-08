import Section from '../components/ui/Section'
import StickyCTA from '../components/ui/StickyCTA'
import { buildWhatsAppLink } from '../lib/whatsapp'
import Hero from '../components/landing/Hero'
import TrustBadges from '../components/landing/TrustBadges'
import Services from '../components/landing/Services'
import FeaturedCTA from '../components/landing/FeaturedCTA'
import OrderConfigurator from '../components/order/OrderConfigurator'
import { OrderProvider, useOrderSelection } from '../components/order/OrderContext'
import Seo from '../components/seo/Seo'

export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <OrderProvider>
        <Seo title="اشحن عملات FC بسرعة وأمان" description="تسليم فوري، أسعار منافسة، دعم عبر واتساب — بدون تسجيل" image="/og-default.png" />
        <Section>
          <Hero />
          <div className="mt-12">
            <TrustBadges />
          </div>
          <div className="mt-12">
            <Services />
          </div>
          <div className="mt-12">
            <OrderConfigurator />
          </div>
          <div className="mt-12">
            <FeaturedCTA />
          </div>
        </Section>

        <StickyOrderCTA />
      </OrderProvider>

      
    </main>
  )
}

function StickyOrderCTA() {
  const { amount, platform, delivery } = useOrderSelection()
  const message = `أريد الطلب الآن — كمية: ${amount.toLocaleString('ar-DZ')}، منصة: ${platform.toUpperCase()}، التسليم: ${delivery}`
  return (
    <StickyCTA className="sm:hidden">
      <span className="font-semibold">جاهز للطلب؟</span>
      <a className="btn btn-primary" href={buildWhatsAppLink(message)} aria-label="اطلب عبر واتساب الآن">اطلب الآن</a>
    </StickyCTA>
  )
}


