import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Main from '../components/main';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';

export default function Page() {
  return (
    <>
    {/* tes */}
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}