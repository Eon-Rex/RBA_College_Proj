import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/utils/Global.css';
import MCA from './components/pages/Courses/MCA';

const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Courses = lazy(() => import('./components/pages/Courses'));
const Contact = lazy(() => import('./components/pages/Contact'));
const BCA = lazy(() => import('./components/pages/Courses/BCA'));
const BCom = lazy(() => import('./components/pages/Courses/BCOM'));
const BBA = lazy(() => import('./components/pages/Courses/BBA'));
const MBA = lazy(() => import('./components/pages/Courses/MBA'));
const BEd = lazy(() => import('./components/pages/Courses/BEd'));
const LLB = lazy(() => import('./components/pages/Courses/LLB'));
function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses/bca" element={<BCA />} />
            <Route path="/courses/bcom" element={<BCom />} />
            <Route path="/courses/bba" element={<BBA />} />
            <Route path="/courses/mca" element={<MCA />} />
            <Route path="/courses/bed" element={<BEd />} />
            <Route path="/courses/llb" element={<LLB />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;