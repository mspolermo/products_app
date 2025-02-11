import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { StoreProvider } from './app/providers/StoreProvider/ui/StoreProvider';
import App from '@/app/App.tsx'
import '@/app/styles/index.css';

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. Не удалось вмонтировать react приложение',
    );
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
)
