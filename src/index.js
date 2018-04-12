import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
      <div>
        <Switch>
          
          <Route path="/:isbn" component={App} />
          
        </Switch>
      </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
