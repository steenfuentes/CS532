import Acomplishments from '../components/QuickMenu/QuickMenu';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/HeaderLP/Hero';
import Services from '../components/Services_dumb/Services';
import Impact from '../components/Impact/Impact';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

import { Provider } from 'react-redux';


const Home = () => {
  return (
    <>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Impact />
      <About />
      <Acomplishments />
    </>
  );
};
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Home;
