import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { useAuthContext } from './hooks/useAuthContext';
//pages & components

//Handles the layout of page
import MainLayout from './components/MainLayout'

//View Pages
import Home from './pages/Home';
import ViewListing from './pages/ViewListing';
import ViewAllMatteboardAndMouldings from './pages/ViewAllMatteboardAndMoulding'
import ViewAllStock from './pages/ViewAllStock';

//Auth
import Login from './pages/Login';
import Signup from './pages/Signup';//this could be used after admin has been created

//CRUD FORMS
import MatteboardCreate from './pages/MatteboardCreate';
import MatteboardUpdate from './pages/MatteboardUpdate';
import MouldingCreate from './pages/MouldingCreate';
import MouldingUpdate from './pages/MouldingUpdate';
import StockCreate from './pages/StockCreate';
import StockUpdate from './pages/StockUpdate';

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
              path = "/framing/moulding/new"
              element = {user ? <MouldingCreate/> : <Navigate to="/login" />}
            />
            <Route
              path = "/framing/matteboard/new"
              element = {user ? <MatteboardCreate/> : <Navigate to="/login" />}
            />
            <Route
              path = "/framing/moulding/edit/:id"
              element = {user ? <MouldingUpdate/> : <Navigate to="/login" />}
            />
            <Route
              path = "/framing/matteboard/edit/:id"
              element = {user ? <MatteboardUpdate/> : <Navigate to="/login" />}
            />
            <Route
              path = "/stock/new"
              element = {user ? <StockCreate/> : <Navigate to="/login" />}
            />
            <Route
              path = '/stock/edit/:id'
              element = {user ? <StockUpdate/> : <Navigate to="/login" />}
            />
            <Route
              path = "/stock/:id"
              element = {<ViewListing/>}
            />
            <Route
              path = "/framing/matteboard/:id"
              element = {<ViewListing/>}
            />
            <Route
              path = "/framing/moulding/:id"
              element = {<ViewListing/>}
            />
            <Route
              path = "/framing"
              element = {<ViewAllMatteboardAndMouldings/>}
            />
            <Route
              path = "/stock"
              element = {<ViewAllStock/>}
            />
            <Route
              path = "/home"
              element = {<Home/>}
            />
            <Route
              path = "/signup"
              element = {<Signup/>}
            />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
