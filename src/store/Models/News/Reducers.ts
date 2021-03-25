import {Reducer} from 'redux';
import {produce} from 'immer';
import {INewsState} from './Types';

const INITIAL_STATE={
    News : [],
    Selecionado: '',
}

const News : Reducer<INewsState> = ( state = INITIAL_STATE, action)=>{
    return produce(state, draft =>{
        switch(action.type){
            case 'ADD_NEW_NEWS':{
                const {news} = action.payload;
                    draft.News.push(news)
                break;
            }
            case 'REMOVE_NEW':{
                const {id} = action.payload;
                const DeleteItem = draft.News.findIndex(item => item.id === id );
                if(DeleteItem >= 0){
                    draft.News.splice(DeleteItem,1);
                }else{
                    return draft;
                }
                break;
            }
            case 'EDIT_NEWS':{
                const news = action.payload;
                const EditItem = draft.News.findIndex(item => item.id === news.id);
                if(EditItem >= 0){
                    draft.News[EditItem] = news.News;
                }else{
                    return draft;
                }                
                break;
            }
        }
    })
}

export default News;
