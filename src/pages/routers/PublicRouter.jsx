import { lazy } from 'react';

import { Switcher, composeRoutes } from './utils';

const Home = lazy(() => import('../home'));
const Acoes = lazy(() => import('../acoes'));
const Artigos = lazy(() => import('../artigos'));
const AreaDeAtuacao = lazy(() => import('../associe-se'));
const AssocieSe = lazy(() => import('../associe-se'));
const Contato = lazy(() => import('../contato'));
const QuemSomos = lazy(() => import('../quem-somos'));

const routes = composeRoutes([
  { path: '/acoes', component: Acoes },
  { path: '/artigos', component: Artigos },
  { path: '/area-de-atuacao', component: AreaDeAtuacao },
  { path: '/associe-se', component: AssocieSe },
  { path: '/contato', component: Contato },
  { path: '/quem-somos', component: QuemSomos },
  { path: '/', component: Home },
]);

export function PublicSwitcher() {
  return <Switcher routes={routes} />;
}

const publicRoutes = routes.map((route) => route.path);
export default publicRoutes;
