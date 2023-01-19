import { Outlet } from 'react-router-dom';
import './_layaout.scss';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Layaout = () => {
  return (
    <Container containerStyle='grid-father'>
      <Container containerStyle='grid-son'>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </Container>
  );
};

export default Layaout;
