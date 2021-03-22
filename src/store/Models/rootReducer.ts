//usando a função conbiner reducer para unir varios reduders em apenas um  
import { combineReducers } from 'redux';
import News from './News/Reducers';

export default combineReducers({
    News,
})