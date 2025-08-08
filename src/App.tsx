import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/Home'
import TradingPage from './pages/Trading'
import BoostingPage from './pages/Boosting'
import SellPage from './pages/Sell'
import RewardsPage from './pages/Rewards'
import FAQPage from './pages/FAQ'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="trading" element={<TradingPage />} />
        <Route path="boosting" element={<BoostingPage />} />
        <Route path="sell" element={<SellPage />} />
        <Route path="rewards" element={<RewardsPage />} />
        <Route path="faq" element={<FAQPage />} />
      </Route>
    </Routes>
  )
}
