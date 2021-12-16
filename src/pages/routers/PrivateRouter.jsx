import { lazy } from 'react';

import { Switcher, composeRoutes } from './utils';

const AreaAssociado = lazy(() => import('../area-associade'));
const AreaGestao = lazy(() => import('../area-gestao'));

const routes = composeRoutes([
  { path: '/area-associade', component: AreaAssociado, isPrivate: true },
  { path: '/area-gestao', component: AreaGestao, isPrivate: true },
]);

export function PrivateSwitcher() {
  return <Switcher routes={routes} />;
}

const privateRoutes = routes.map((route) => route.path);
export default privateRoutes;
