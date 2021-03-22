import {Reducer} from 'redux';
import {produce} from 'immer';
import {INewsState} from './Types';

const INITIAL_STATE={
    News : [
        {"Author": "teste 1", "description": "", "id": 0, "title": ""}, {"Author": "teste 2", "description": "", "id": 0, "title": ""}, {"Author": "teste 3", "description": "", "id": 0, "title": ""}, {"Author": "teste 3", "description": "", "id": 0, "title": ""},
    ],
}

const News : Reducer<INewsState> = ( state = INITIAL_STATE, action)=>{
    return produce(state, draft =>{
        switch(action.type){
            case 'ADD_NEW_NEWS':{
                const {news} = action.payload;
                    draft.News.push(news)
                break;
            }
            case 'REMOVE_NEWS':{
                const {news} = action.payload;
                    console.log(news.id);
                break;
            }
            case 'EDIT_NEWS':{
                const {news} = action.payload;
                    console.log(news.id);
                break;
            }
            case 'SEARCH_NEWS':{
                const {Listnews} = action.payload;
                    draft.News = Listnews;
                    console.log(Listnews);
            }
        }
    })
}

export default News;
