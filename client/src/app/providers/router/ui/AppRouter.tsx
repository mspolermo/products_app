/**
 * Роутинг приложения
*/

import { Suspense, memo, useCallback } from 'react';
import { Route, Routes, RouteProps } from 'react-router-dom';
import { RouteConfig } from '../config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';


const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
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
