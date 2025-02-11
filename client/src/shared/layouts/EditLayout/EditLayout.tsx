import { memo, ReactElement } from 'react';
import cls from './EditLayout.module.css';

interface Props {
  children: ReactElement;
}

export const EditLayout = memo((props: Props) => {
    const { children} = props;

    return (
      <section className={cls.EditLayout}>
        {children}
      </section>
    );
});
