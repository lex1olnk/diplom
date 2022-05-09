import React from 'react' 
import NavRoutes from './content/routers/Routes'
import store from './content/store';
import { Provider } from 'react-redux';
import './App.css'

const App = () => {
  return (
    <Provider store={ store }>
      <NavRoutes />
    </Provider>
  );
}

export default App;
