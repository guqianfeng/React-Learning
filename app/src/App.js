import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import IndexRoute from './router/index'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <IndexRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
