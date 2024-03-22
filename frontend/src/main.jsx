import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import { Provider } from 'react-redux'
import store from './features/store.js'
import ThemeProvider from './components/Themecontex.jsx'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
  <Provider store={store}>
    <ThemeProvider>
  <Router>
  <App />
  </Router>
  </ThemeProvider>
  </Provider>
  </React.StrictMode>,
)
