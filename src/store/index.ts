import { createStore } from 'redux';
import { INewsState } from './Models/News/Types';

import rootReducer from './Models/rootReducer';

export interface IState{
    News: INewsState;
}

const store = createStore(
    rootReducer,
    );

export default store;