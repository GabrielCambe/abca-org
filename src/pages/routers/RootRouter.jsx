import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import publicRoutes, { PublicSwitcher } from './PublicRouter';
import privateRoutes, { PrivateSwitcher } from './PrivateRouter';

export default function RootRouter() {
  const location = useLocation();

  return (
    <Switch>
      <Redirect from="/:url*(/+)" to={location.pathname.slice(0, -1)} />
      <Route path={publicRoutes} component={PublicSwitcher} />
      <Route path={privateRoutes} component={PrivateSwitcher} />
    </Switch>
  );
}
