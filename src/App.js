import React, {useState} from 'react'
//Pages
import Login from './Pages/Login'
import MainPage from './Pages/MainPage'
import {Route} from 'react-router-dom'
import Loader from './Components/Loader'
function App() {
  const [isLoged, setIsLoged] = useState(false)
  return (
    <div className="App">
      <Route path='/' exact>
        <Login isLoged={setIsLoged}/>
        </Route>
        <Route path={['/product/:id', "/product"]} exact>
        <MainPage isLoged={isLoged} setIsLoged={setIsLoged} />
        </Route>
    </div>
  );
}

export default App;
