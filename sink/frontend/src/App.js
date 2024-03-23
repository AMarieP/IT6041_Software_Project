import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

//pages & components
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  //user can be used to verify a user is logged in and redirect accordingly
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path = "/login"
            element = {<Login/>}
          />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
