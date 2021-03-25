import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editNews } from '../../store/Models/News/Actions';
import { 
    ContainerDetails, 
    TitleHeader, 
    TitleHeaderText,
    ContainerData,
    Title,
    DataItem,
    SalvarDados,
    SalvarDadosTitle
} from './styles';

interface InterfaceProps{
    onClose :()=>void;
    Id: string;
}

const EditNews: React.FC<InterfaceProps> = ({onClose, Id}) =>{
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const dispatch = useDispatch(); 
    const ItemEdit = useSelector(state => state.News.News)
    const ItemSelecionado = ItemEdit.findIndex(item => item.id === Id );
        
    const CreatedNewNews={
        author: (author == '') ? ItemEdit[ItemSelecionado].author : author,
        title: (title == '') ? ItemEdit[ItemSelecionado].title : title,
        description: (description == '') ? ItemEdit[ItemSelecionado].description : description,
        image: (img == '') ? ItemEdit[ItemSelecionado].image : img,
        id: Id,
    }
     const sendEditData= ()=>{    
        dispatch( editNews(CreatedNewNews,Id)),
        onClose()
    }
    
    return(
        <ContainerDetails>
            <TitleHeader >
                <TitleHeaderText >Adicionar Nova Noticia</TitleHeaderText>
            </TitleHeader>
            <ContainerData>
                <Title>Digite o nome do Autor: </Title>
                    <DataItem
                        autoCorrect={true}
                        autoCapitalize='words'
                        placeholder={ItemEdit[ItemSelecionado].author}
                        placeholderTextColor='#c1c1c1'
                        onChangeText={(nome:string)=>{setAuthor(nome)}} 
                        value={author}
                        style={{height:50}}
                    />
                <Title>Digite o Title: </Title>
                    <DataItem
                        maxLength={50}
                        autoCorrect={true}
                        autoCapitalize='words'
                        placeholder={ItemEdit[ItemSelecionado].title}
                        placeholderTextColor='#c1c1c1'
                        onChangeText={(title:string)=>{setTitle(title)}} 
                        value={title}
                        style={{height:50}}
                    />
                <Title>Digite um link de imagen Valido: </Title>
                    <DataItem
                        autoCorrect={true}
                        autoCapitalize='words'
                        placeholder={ItemEdit[ItemSelecionado].image}
                        placeholderTextColor='#c1c1c199'
                        onChangeText={(imagem:string)=>{setImg(imagem)}} 
                        value={img}
                        style={{height:50}}
                    />
                <Title>Digite a descrição: </Title>
                    <DataItem
                        autoCorrect={true}
                        multiline={true}
                        textAlignVertical='top'
                        autoCapitalize='words'
                        placeholder={ItemEdit[ItemSelecionado].description}
                        placeholderTextColor='#c1c1c1'
                        onChangeText={(description:string)=>{setDescription(description)}} 
                        value={description}
                        style={{height:200,paddingTop:10 }}
                    />
                <SalvarDados 
                    onPress={()=>{sendEditData()}}>
                    <SalvarDadosTitle> Confirmar edição</SalvarDadosTitle>
                </SalvarDados>
            </ContainerData>
        </ContainerDetails>
    );
}

export default EditNews;
