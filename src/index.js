import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ModalProvider } from 'context';
import App from './App';
import './index.css';
import { TourProvider } from '@reactour/tour';
import { tourSteps, tourStyles } from 'helpers/tourSteps';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/node_fs98_front_Zymbsis">
          <ModalProvider>
            <TourProvider steps={tourSteps} styles={tourStyles}>
              <App />
            </TourProvider>
          </ModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
