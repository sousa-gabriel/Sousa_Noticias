export interface INews{
    id: string;
    title: string;
    description: string;
    author: string; 
    image:string;
}

export interface INewsState{
    News: INews[];
}

