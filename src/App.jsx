import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Proyects from './pages/HomeProyects.jsx';
import Estudies from './pages/HomeStudies.jsx';
import Intro from './pages/Intro.jsx';
import Contact from './pages/HomeContact.jsx';


function App() {
  return (
    <>
     
        <Routes>
          <Route path='/*' element={<Intro />} />
          <Route
            path='/Home' element={<Layout> <Home /> </Layout>} />
          <Route
            path='/proyects' element={<Layout> <Proyects /> </Layout>} />
          <Route
            path='/estudies' element={<Layout> <Estudies /> </Layout>} />
          <Route
            path='/Contact' element={<Layout> <Contact /> </Layout>} />
        </Routes>
     
    </>
  );
}

export default App;
