import {BrowserRouter,Route,Routes} from 'react-router-dom'
import RegisterPage from './pages/register.page';
import LoginPage from './pages/login.page';
import { AuthProvider } from './context/auth.contex';
import ProjectHome from './pages/HomePageProject';
import HomePage from './pages/HomePage';
import FormProject from './pages/FormProject';
import { ApplicationProvider } from './context/application.context';
import ProtectedRoute from './protectedRoute';
import Navbar from './components/navbar';
import Profile from './pages/Profile';
import FormUser from './pages/FormUser';
import ExamplePage from './pages/Example.page';
import ExamplePages from './pages/Example2.page';

//
// Main application component.
// Wraps all routes with necessary providers and renders the navbar and route tree.
//

function App() {
  return(
    <AuthProvider>
      <ApplicationProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/profile_' element={<FormUser/>}/>
              <Route path='/application' element={<ProjectHome/>}/>
              <Route path='/add-project' element={<FormProject/>}/>
              <Route path='/application/:id' element={<FormProject/>}/>
              <Route path='/explore' element={<ExamplePages/>}/>
            </Route>
            <Route path='/explore' element={<ExamplePage/>}/>
          </Routes>
        </BrowserRouter>
      </ApplicationProvider>
    </AuthProvider>
  )
}

export default App;