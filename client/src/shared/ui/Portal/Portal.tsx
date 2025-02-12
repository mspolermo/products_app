import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

/**
 * Компонент-телепорт в корень DOM-дерева
*/

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
