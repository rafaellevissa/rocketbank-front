import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

import store from './states/store';
import setupInterceptors from './services/setupInterceptors';

const rootElement = document.getElementById("root");
render (
	<App />,
	rootElement
);

setupInterceptors(store);