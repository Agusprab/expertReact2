import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import { Provider } from 'react-redux';
import store from './states';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <BrowserRouter>  
        <App />
    </BrowserRouter>
  </Provider>
  </StrictMode>,

)
