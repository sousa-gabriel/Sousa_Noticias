// titulo da noticia
//texto da noticia
//Autor da noticia

//interface de criar uma noticia
export interface INews{
    id: number;
    title: string;
    description: string;
    Author: string; 
    Image:string;
}

//interface de varias noticias
export interface INewsState{
    News: INews[];
}

