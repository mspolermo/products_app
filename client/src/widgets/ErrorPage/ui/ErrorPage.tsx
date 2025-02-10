import { memo, useCallback } from "react";
import cls from './ErrorPage.module.css';

export const ErrorPage = memo(() => {
  const reloadPage = useCallback(() => {
    location.reload();
  }, []);

  return (
    <section className={cls.ErrorPage}>
      <h2>Произошла ошибка</h2>
      <p>Информация направлена разработчикам</p>
      <button onClick={reloadPage}>Обновить страницу</button>
    </section>
  );
});
