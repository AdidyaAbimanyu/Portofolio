import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Main from '../components/main';
import About from '@/components/about';
import './globals.css';

export default function Page() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Footer />
    </>
  );
}