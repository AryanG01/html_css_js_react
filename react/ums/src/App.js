import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import NavBar from './components/layout/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PageNotFound from './components/pages/PageNotFound';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import ViewUser from './components/user/ViewUser';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/view" element={<ViewUser />} />
          <Route path="/users/edit" element={<EditUser />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
