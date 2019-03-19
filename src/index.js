import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './components/App';
import Stack from './components/Stack';
import { setStack } from './redux/actions';

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(setStack({ id: 0, title: 'example', cards: []}))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path ='/stack' component={Stack} />
      </Switch>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
)

// https://codesandbox.io/s/9on71rvnyo