import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('./pages/Home'))
const TradingPage = lazy(() => import('./pages/Trading'))
const BoostingPage = lazy(() => import('./pages/Boosting'))
const SellPage = lazy(() => import('./pages/Sell'))
const RewardsPage = lazy(() => import('./pages/Rewards'))
const FAQPage = lazy(() => import('./pages/FAQ'))
const TermsPage = lazy(() => import('./pages/Terms'))
const RefundPage = lazy(() => import('./pages/Refund'))
const ChallengesPage = lazy(() => import('./pages/Challenges'))

export default function App() {
  return (
    <Suspense fallback={<div className="section">...جارِ التحميل</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="trading" element={<TradingPage />} />
          <Route path="boosting" element={<BoostingPage />} />
          <Route path="sell" element={<SellPage />} />
          <Route path="rewards" element={<RewardsPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="refund" element={<RefundPage />} />
          <Route path="challenges" element={<ChallengesPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
