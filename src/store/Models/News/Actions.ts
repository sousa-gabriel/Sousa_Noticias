//importando os tipos dos meus dados
import {INews, INewsState} from './Types';

export function addNews(news : INews){
    return{
        type: 'ADD_NEW_NEWS',
        payload: {
            news,
        }
    }
}

export function removeNews({News}: INewsState){
    return{
        type: 'REMOVE_NEWS',
        payload:{
            News
        }
    }
}

export function editNews({News}:INewsState){
    return{
        type: 'EDIT_NEWS',
        payload:{
            News
        }
    }
}

export function searchNews({News}:INewsState){
    return{
        type: 'SEARCH_NEWS',
        payload:{
            News
        }
    }
}