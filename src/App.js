
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import JoinForm from './pages/join';
import SignIn from './pages/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserHeader from './component/userHeader';
import User from './pages/user';
import Gigs from './pages/gigs';
import Creategigs from './pages/creategigs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/join' element={<JoinForm/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/gigs' element={<Gigs/>}/>
      <Route path='/creategigs' element={<Creategigs/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
