import { memo, ReactElement } from 'react';
import cls from './MainLayout.module.css';

interface Props {
  children: ReactElement;
}

export const MainLayout = memo((props: Props) => {
    const { children} = props;

    return (
      <section className={cls.MainLayout}>
        {children}
      </section>
    );
});
