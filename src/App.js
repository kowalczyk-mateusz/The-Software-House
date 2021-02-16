import React from 'react'
//Pages
import Login from './Pages/Login'
import MainPage from './Pages/MainPage'
import {Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Route path='/' exact>
        <Login />
        </Route>
        <Route path={['/product/:id', "/product"]} exact>
        <MainPage />
        </Route>
    </div>
  );
}

export default App;
