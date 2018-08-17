import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-css/semantic.min.css";

import GlobalStyles from './GlobalStyles';
import AppRoutes from "./routes";

ReactDOM.render(<AppRoutes />, document.getElementById("root"));
registerServiceWorker();
