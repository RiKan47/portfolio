import { Layout } from './components/Layout';
import { Hero } from './pages/Hero';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
