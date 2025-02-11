import { GetProductsList } from "@/features/getProductsList";
import { MainLayout } from "@/shared/layouts/MainLayout/MainLayout";

const MainPage = () => {
  return (
    <MainLayout>
      <GetProductsList />
    </MainLayout>
  );
};

export default MainPage;
