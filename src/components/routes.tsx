import { Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { CreateAccount } from '../pages/CreateAccount'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<CreateAccount />} />
    </Routes>
  )
}
