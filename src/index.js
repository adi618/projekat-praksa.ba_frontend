import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import App from './App';
import { store } from './features/store';
import { api } from './services/posts';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <ApiProvider api={api}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApiProvider>,
);
