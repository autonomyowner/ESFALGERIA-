import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { buildWhatsAppLink } from '../../lib/whatsapp'

export default function Header() {
  const navLinkBase = 'text-slate-200 hover:text-white px-3 py-2 rounded-lg transition'
  const navActive = 'bg-slate-800/60'

  return (
    <header className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          ESFALGERIA
        </Link>
      </div>
      <nav className="hidden sm:flex items-center gap-1">
        <NavLink to="/trading" className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
          التداول
        </NavLink>
        <NavLink to="/boosting" className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
          البوستينغ
        </NavLink>
        <NavLink to="/sell" className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
          البيع لنا
        </NavLink>
        <NavLink to="/rewards" className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
          المكافآت
        </NavLink>
        <NavLink to="/faq" className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
          الأسئلة الشائعة
        </NavLink>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild>
          <a href={buildWhatsAppLink('تواصل عبر واتساب')}>واتساب</a>
        </Button>
      </div>
    </header>
  )
}


