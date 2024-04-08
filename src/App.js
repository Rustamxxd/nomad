import { Routes, Route } from 'react-router-dom';
import './styles/style.scss'
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Students from './pages/Students/Students';
import Student from './pages/Student/Student';
import Price from './pages/Price/Price';
import Spec from './pages/Spec/Spec';
import Prev from './pages/Prev/Prev';
import Register from './pages/Register/Register';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/price"} element={<Price />} />
        <Route path={"/spec"} element={<Spec />} />
        <Route path={"/prev"} element={<Prev />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/students"} element={<Students />} />
        <Route path={"/student/:id"} element={<Student />} />
      </Route>
    </Routes>
  );
}
export default App;