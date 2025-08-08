import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { buildWhatsAppLink } from '../../lib/whatsapp'
import { useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinkBase = 'text-slate-200 hover:text-white px-3 py-2 rounded-lg transition'
  const navActive = 'bg-slate-800/60'

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev)
  }

  function handleCloseMenu() {
    setIsMenuOpen(false)
  }

  return (
    <>
    <header className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          ESFALGERIA
        </Link>
      </div>
      {/* Desktop nav */}
      <nav className="hidden sm:flex items-center gap-1">
        <NavLink to="/challenges" className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
          تحديات و حلول
        </NavLink>
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
        {/* Mobile menu button */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/60 p-2 text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/50"
          aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={handleToggleMenu}
        >
          {isMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
        <Button asChild className="hidden sm:inline-flex">
          <a href={buildWhatsAppLink('تواصل عبر واتساب')}>واتساب</a>
        </Button>
      </div>
    </header>
    {/* Mobile menu panel */}
    <div id="mobile-menu" className="sm:hidden" hidden={!isMenuOpen}>
      <div className="container pb-3">
        <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur shadow-glass">
          <nav className="flex flex-col p-2">
            <NavLink to="/challenges" onClick={handleCloseMenu} className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
              تحديات و حلول
            </NavLink>
            <NavLink to="/trading" onClick={handleCloseMenu} className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
              التداول
            </NavLink>
            <NavLink to="/boosting" onClick={handleCloseMenu} className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
              البوستينغ
            </NavLink>
            <NavLink to="/sell" onClick={handleCloseMenu} className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
              البيع لنا
            </NavLink>
            <NavLink to="/rewards" onClick={handleCloseMenu} className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
              المكافآت
            </NavLink>
            <NavLink to="/faq" onClick={handleCloseMenu} className={({ isActive }) => `${navLinkBase} ${isActive ? navActive : ''}`.trim()}>
              الأسئلة الشائعة
            </NavLink>
            <a className="btn btn-primary mx-2 mt-2" href={buildWhatsAppLink('تواصل عبر واتساب')} onClick={handleCloseMenu}>
              واتساب
            </a>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}


