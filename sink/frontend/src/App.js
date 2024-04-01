import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

//pages & components
import Login from './pages/Login';
import Signup from './pages/Signup';//this could be used after admin has been created
import FandMcurd from './pages/FandMcurd';
import Stockcurd from './pages/Stockcurd';
import ViewAListing from './pages/ViewAListing';
import ViewFandM from './pages/ViewFandM';
import ViewStock from './pages/ViewStock';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  //user can be used to verify a user is logged in and redirect accordingly
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
            path = "/Stockcurd"
            element = {user ? <Stockcurd/> : <Navigate to="/ViewStock" />}
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
