import {INews} from './Types';

export function addNews(news : INews){
    return{
        type: 'ADD_NEW_NEWS',
        payload: {
            news,
        }
    }
}

export function removeNew(id:string){
    return{
        type: 'REMOVE_NEW',
        payload:{
            id
        }
    }
}

export function editNews(News:INews, id:string){
    return{
        type: 'EDIT_NEWS',
        payload:{
            News,
            id
        }
    }
}
