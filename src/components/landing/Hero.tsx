import Button from '../ui/Button'
import { buildWhatsAppLink } from '../../lib/whatsapp'

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 animate-premium-gradient border border-slate-800 shadow-glass">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-[url('/maradona.png')] bg-cover bg-center opacity-20"
        aria-hidden
      />
      <div className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          اشحن عملات FC بسرعة وأمان
        </h1>
        <p className="mt-4 text-slate-200/90 text-base sm:text-lg">
          تسليم فوري، أسعار منافسة، دعم عبر واتساب — بدون تسجيل دخول
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild aria-label="ابدأ الآن">
            <a href={buildWhatsAppLink('أريد البدء بشراء عملات FC')}>ابدأ الآن</a>
          </Button>
          <Button variant="secondary" asChild aria-label="تحدث عبر واتساب للدعم">
            <a href={buildWhatsAppLink('تواصل للدعم')}>تحدث عبر واتساب</a>
          </Button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-10%,rgba(234,179,8,.25),transparent)]" aria-hidden />
    </div>
  )
}


