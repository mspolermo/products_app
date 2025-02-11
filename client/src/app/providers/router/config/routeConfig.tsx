/**
 * Конфигурация роутинга приложения
*/

import { CreatePage } from '@/pages/CreatePage';
import { EditPage } from '@/pages/EditPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    AppRoutes,
    getRouteMain,
    getRouteCreate,
    getRouteEdit,
} from '@/shared/const/router';
import { RouteProps } from 'react-router-dom';

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.CREATE]: {
        path: getRouteCreate(),
        element: <CreatePage />,
    },
    [AppRoutes.EDIT]: {
        path: getRouteEdit(':id'),
        element: <EditPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
