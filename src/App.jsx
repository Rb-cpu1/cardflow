import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CardShop from './pages/CardShop'
import MyCards from './pages/MyCards'
import Wallet from './pages/Wallet'
import Payments from './pages/Payments'

function App() {
  const [user, setUser] = useState(null)
  const [balance, setBalance] = useState(2450)
  const [bonus, setBonus] = useState(0)
  const [cards, setCards] = useState([])
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [isDark])

  const loginUser = (name) => {
    setUser({ name })
  }

  const addCard = (type) => {
    const newCard = {
      id: Date.now(),
      type,
      number: type === 'black' ? '5555 4444 3333 2222' : '4111 1111 1111 1111',
      expiry: '12/29',
      cvv: '424',
      limit: type === 'black' ? 500000 : 50000,
      used: 0
    }
    setCards(prev => [...prev, newCard])
  }

  const updateBalance = (amount) => {
    setBalance(prev => prev + amount)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar user={user} isDark={isDark} setIsDark={setIsDark} />
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/register" element={<Register loginUser={loginUser} />} />
          
          {user ? (
            <>
              <Route path="/dashboard" element={<Dashboard user={user} balance={balance} bonus={bonus} cardsCount={cards.length} />} />
              <Route path="/cards" element={<CardShop balance={balance} updateBalance={updateBalance} addCard={addCard} />} />
              <Route path="/mycards" element={<MyCards cards={cards} />} />
              <Route path="/wallet" element={<Wallet balance={balance} updateBalance={updateBalance} setBonus={setBonus} />} />
              <Route path="/payments" element={<Payments cards={cards} />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
      <Toaster />
    </Router>
  )
}

export default App
