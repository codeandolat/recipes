import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import GlobalStyles from './GlobalStyles';
import AppRoutes from "./routes";
import Layout from './components/Layout';

ReactDOM.render(<AppRoutes />, document.getElementById("root"));
registerServiceWorker();
