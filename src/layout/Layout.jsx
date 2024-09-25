import Navbar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

function Layout({ children }) {
  return (
    <>
    <div className="w-full bg-cover bg-center h-auto bg-fondo">
      <Navbar />
      {children}
      <Footer />
      </div>
    </>
  );
}

export default Layout;

