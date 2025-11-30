import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { AppProvider, useApp } from './context/AppContext'
import AuthPage from './components/Auth/AuthPage'
import Login from './components/Login'
import Home from './pages/Home'
import CourseCatalog from './pages/CourseCatalog'
import MySchedule from './pages/MySchedule'
import MyRegistrations from './pages/MyRegistrations'
import AdminPanel from './pages/AdminPanel'
import Profile from './pages/Profile'
import ToastContainer from './components/common/ToastContainer'
import './App.css'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useApp()
  const [isChecking, setIsChecking] = React.useState(true)
  
  React.useEffect(() => {
    // Give a moment for context to update
    const timer = setTimeout(() => {
      setIsChecking(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  
  // Check if user exists in context or localStorage
  const savedUser = localStorage.getItem('user')
  let currentUser = user
  
  if (!currentUser && savedUser) {
    try {
      currentUser = JSON.parse(savedUser)
    } catch (e) {
      console.error('Error parsing saved user:', e)
    }
  }
  
  if (isChecking) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: '#faf8f3'
      }}>
        <div>Loading...</div>
      </div>
    )
  }
  
  if (!currentUser) {
    return <Navigate to="/auth" replace />
  }
  
  return children
}

// Component to handle auth redirects
const AuthRedirect = () => {
  const { user } = useApp()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (user && location.pathname === '/auth') {
      navigate('/home', { replace: true })
    }
  }, [user, location.pathname, navigate])

  return null
}

function AppContent() {
  const { login } = useApp()

  const handleLoginSuccess = (userData) => {
    login(userData)
  }

  return (
    <div className="App">
      <Router>
        <AuthRedirect />
        <Routes>
          <Route path="/auth" element={<AuthPage onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/auth/admin" element={<AuthPage adminMode={true} onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/login" element={<Login role="student" />} />
          <Route path="/login/admin" element={<Login role="admin" />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog"
            element={
              <ProtectedRoute>
                <CourseCatalog role="student" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog/admin"
            element={
              <ProtectedRoute>
                <CourseCatalog role="admin" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/schedule"
            element={
              <ProtectedRoute>
                <MySchedule />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registrations"
            element={
              <ProtectedRoute>
                <MyRegistrations />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/auth" replace />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
