/**
    * Роуты приложения
*/

export enum AppRoutes {
  MAIN = 'main',
  CREATE = 'create',
  EDIT = 'edit',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteCreate = () => '/create';
export const getRouteEdit = (id: string) => `/edit/${id}`;;
export const getRouteNotFound = () => '/not_found';
