/**
 * Роутинг приложения
*/

import { Suspense, memo, useCallback } from 'react';
import { Route, Routes, RouteProps } from 'react-router-dom';
import { RouteConfig } from '../config/routeConfig';
import { Loader } from '@/shared/ui/Loader';


const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<Loader />}>{route.element}</Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={(element)}
      />
    );
  }, []);

    return <Routes>{Object.values(RouteConfig).map(renderWithWrapper)}</Routes>;
});

export default AppRouter;
