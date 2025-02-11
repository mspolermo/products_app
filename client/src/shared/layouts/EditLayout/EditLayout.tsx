import { memo, ReactElement } from 'react';
import cls from './EditLayout.module.css';

interface Props {
  title: string;
  children: ReactElement;
}

export const EditLayout = memo((props: Props) => {
    const { title, children} = props;

    return (
      <section className={cls.EditLayout}>
        <h1 className={cls.title}>{title}</h1>
        {children}
      </section>
    );
});
