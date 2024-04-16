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
import StockEditDelete from './pages/StockEditDelete';
import MainLayout from './components/MainLayout'

function App() {
  //user can be used to verify a user is logged in and redirect accordingly
  const { user } = useAuthContext()

  return (
    <div className="App">
       <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
      </style>
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
              path = '/StockEditDelete/:id'
              element = {user ? <StockEditDelete/> : <Navigate to="/ViewStock" />}
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
