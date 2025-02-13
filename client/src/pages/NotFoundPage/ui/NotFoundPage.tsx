import { memo } from "react";
import cls from './NotFoundPage.module.css'
import { useNavigate } from "react-router-dom";
import { getRouteMain } from "@/shared/const/router";
import { Button } from "@/shared/ui/Button/Button";

const NotFoundPage = memo(() => {
    const navigate = useNavigate();
    const redirectHandler = () => {
      navigate(getRouteMain());
    }

  return (
    <section className={cls.wrapper}>
      <h1 className={cls.title}>Страница не найдена</h1>
      <Button variant="yellow" onClick={redirectHandler}>На главную</Button>
    </section>
  );
});

export default NotFoundPage;