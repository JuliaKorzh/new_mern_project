import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from "./redux/store";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
   <Provider store = {store}>           {/*Provider — компонент React из объекта контекста. Контекст разработан для передачи данных, которые можно назвать «глобальными» для всего дерева React-компонентов (например, текущий аутентифицированный пользователь*/}
      <App />
   </Provider>
</BrowserRouter>,
)
