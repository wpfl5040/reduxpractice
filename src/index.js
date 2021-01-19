import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import {createStore} from "redux";
import reducers from "./reducers";
import {Provider} from 'react-redux';

const store = createStore(reducers);

// console.log(store.getState());
// const unSubscribe = store.subscribe(() => {
//    //스토어에 변화가 있을때 실행
//     console.log(store.getState());
// });
// store.dispatch(actions.increment())
// store.dispatch(actions.increment())
// store.dispatch(actions.decrement())
//
// //변화 감지 해제
// unSubscribe();
//
// store.dispatch(actions.setColor([200, 200, 200]))


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);


