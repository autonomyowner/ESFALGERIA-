import { buildWhatsAppLink, getOwnerName } from '../../lib/whatsapp'
import { Link } from 'react-router-dom'

export default function Footer() {
  const owner = getOwnerName()
  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="container py-8 text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          واتساب: <a className="underline decoration-dotted" href={buildWhatsAppLink('السلام عليكم')}>تواصل معنا</a> — {owner}
        </p>
        <nav className="flex items-center gap-3">
          <Link className="text-slate-400 hover:text-slate-200" to="/terms">الشروط</Link>
          <Link className="text-slate-400 hover:text-slate-200" to="/refund">سياسة الاسترجاع</Link>
        </nav>
      </div>
    </footer>
  )
}


