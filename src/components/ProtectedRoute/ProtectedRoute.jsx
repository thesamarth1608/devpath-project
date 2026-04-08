import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.currentUser)

  // ❌ agar user nahi hai → login bhej do
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // ✅ agar user hai → andar aane do
  return children
}

export default ProtectedRoute