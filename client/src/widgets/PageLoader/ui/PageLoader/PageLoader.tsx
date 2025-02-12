import { memo } from "react";
import { Loader } from '@/shared/ui/Loader/Loader';

import cls from './PageLoader.module.css';

export const PageLoader = memo(() => {

    return (
        <div className={cls.PageLoader}>
            <Loader/>
        </div>
    )}
);
