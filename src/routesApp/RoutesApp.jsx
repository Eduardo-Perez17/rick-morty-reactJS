import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HOME, CHARACTER, EPISODIE, LOCATION, NOT_FOUND } from '../utils/endPoints';

import { Characters } from '../pages/Characters';
import { Locations } from '../pages/Locations';
import { Episodies } from '../pages/Episodies';
import { NotFound } from '../pages/NotFound';
import { Layaout } from '../Layaout';
import { Home } from '../pages/Home';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME.path} element={<Layaout />}>
          <Route path={HOME.path} element={<Home />} />
          <Route path={CHARACTER.path} element={<Characters />} />
          <Route path={EPISODIE.path} element={<Episodies />} />
          <Route path={LOCATION.path} element={<Locations />} />
          <Route path={NOT_FOUND.path} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
