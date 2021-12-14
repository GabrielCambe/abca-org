import { Suspense, useMemo } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

export function Switcher({ routes }) {
  const location = useLocation();
  const background = location.state?.background;

  const renderRoutes = useMemo(
    () => routes.map((route) => <Route key={route.path} {...route} />),
    [routes]
  );

  return (
    <Suspense fallback={<div />}>
      <Switch location={background || location}>{renderRoutes}</Switch>
      {background && <Switch>{renderRoutes}</Switch>}
    </Suspense>
  );
}

const compose = (...args) =>
  args.filter((arg) => !!arg).reduceRight((acc, item) => item(acc));

export function composeRoutes(routes) {
  return routes.map(({ component, ...route }) => ({
    ...route,
    component: compose(component),
  }));
}
