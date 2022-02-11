import React from 'react';
import ReactDOM from 'react-dom';
import { NextUIProvider } from '@nextui-org/react';
import Todolist from './Todolist';

import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider>
    <Todolist />
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
