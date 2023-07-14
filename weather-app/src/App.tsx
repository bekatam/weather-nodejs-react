import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { BaseComponent } from './components/BaseComponent';
import { TypeComponent } from './components/TypeComponent';
import { CityComponent } from './components/CityComponent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BaseComponent/>}>
          <Route path='/:type' element={<TypeComponent/>}>
            <Route path='/:type/:city' element={<CityComponent/>}/>  
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
