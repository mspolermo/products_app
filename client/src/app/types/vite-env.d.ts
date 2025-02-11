declare module '*.css';
declare module '*.tsx';

declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;

  export default ReactComponent;
}

declare const __API__: string;

/// <reference types="vite/client" />
