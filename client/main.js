import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Match, Route} from 'react-router-dom';
import thunk from 'redux-thunk';

import App from './list/App.jsx';
import Hat from './components/Hat.jsx';
import Report from './components/Report.jsx';
import * as reducers from './reducers/reducer.js';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

    render(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Hat />
                    <Route path='/:name' component={App}/>
                    <Route path='/report' component={Report}/>
                </div>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
store.subscribe(()=> {
    console.log('Store subscribe: ', store.getState());
});
