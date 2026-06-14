import Navbar from "./components/NavBar"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Navbar />
      {/* baki routes yahan hongi */}
    </AuthProvider>
  )
}

export default App
