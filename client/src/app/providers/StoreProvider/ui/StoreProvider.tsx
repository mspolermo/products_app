import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../config/store';

interface Props {
  children?: ReactNode;
}

export const StoreProvider = (props: Props) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>
}