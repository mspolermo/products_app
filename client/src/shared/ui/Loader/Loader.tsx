/**
 * Анимированный лоадер
*/

import { memo } from 'react';
import './Loader.css';

export const Loader = memo(() => {
  return (
    <div className='lds-ellipsis'>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
