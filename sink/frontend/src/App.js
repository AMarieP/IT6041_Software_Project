import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useAuthContext } from './hooks/useAuthContext';
//pages & components
import Login from './pages/Login';
import Signup from './pages/Signup';//this could be used after admin has been created
import FandMcurd from './pages/FandMcurd';
import StockCreate from './pages/StockCreate';
import ViewAListing from './pages/ViewAListing';
import ViewFandM from './pages/ViewFandM';
import ViewStock from './pages/ViewStock';
import Home from './pages/Home';
import MainLayout from './components/MainLayout'

function App() {
  //user can be used to verify a user is logged in and redirect accordingly
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route
              path = "/login"
              element = {<Login/>}
            />
            <Route
              path = "/FandMcurd"
              element = {user ? <FandMcurd/> : <Navigate to="/ViewFandM" />}
            />
            <Route
              path = "/StockCreate"
              element = {user ? <StockCreate/> : <Navigate to="/ViewStock" />}
            />
            <Route
              path = "/ViewAListing"
              element = {<ViewAListing/>}
            />
            <Route
              path = "/ViewFandM"
              element = {<ViewFandM/>}
            />
            <Route
              path = "/ViewStock"
              element = {<ViewStock/>}
            />
            <Route
              path = "/Home"
              element = {<Home/>}
            />
            <Route
              path = "/Signup"
              element = {<Signup/>}
            />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
