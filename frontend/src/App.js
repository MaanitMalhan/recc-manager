import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import CSVpage from './pages/CSVpage'
import Adminpage from './pages/Adminpage'

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
             {/* <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />  */}
             <Route 
              path="/adminpage"
              element={!user ? <Adminpage /> : <Navigate to="/adminpage" />}
            /> 
            <Route 
              path="/CSVpage"
              element={user ? <CSVpage /> : <Navigate to="/CSVpage" />}
            /> 

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
