import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/utils/Global.css';
import CourseDetails from './components/pages/courseDetails';
import CourseList from './components/pages/CoursesSees';
import Contact from './components/pages/Contact';

const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course/:courseId" Component={CourseDetails} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;