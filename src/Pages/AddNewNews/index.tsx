import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addNews } from '../../store/Models/News/Actions';
import { 
    ContainerDetails, 
    TitleHeader, 
    TitleHeaderText,
    ContainerData,
    Title,
    DataItem,
    SalvarDados,
    SalvarDadosTitle,
    TextError
} from './styles';

interface InterfaceProps{
    onClose :()=>void;
}

const AddNewNews: React.FC<InterfaceProps> = ({onClose}) =>{
    const [author, setAuthor] = useState('');
    const [errorauthor, setErrorauthor] = useState(false);
    const [title, setTitle] = useState('');
    const [errortitle, setErrorTitle] = useState(false);
    const [description, setDescription] = useState('');
    const [errordescription, setErrorDescription] = useState(false);

    const [img, setImg] = useState('https://icon-library.net/images/icon-img/icon-img-20.jpg');
    const dispatch = useDispatch(); 
    
    const DateValidate = () => { 

        (author == '' ? setErrorauthor(false) : setErrorauthor(true) ),
        (title == '' ? setErrorTitle(false) : setErrorTitle(true)),
        (description == ''? setErrorDescription(false) : setErrorDescription(true))
        if(errordescription && errortitle && errorauthor){
            const CreatedNewNews={
                author: author,
                title: title,
                description: description,
                image: img,
                id: uuid()
            }
            enviarDados(CreatedNewNews)
        }else{
            Alert.alert('Erro ao Inserir Usuario','Verique os campos obrigatorios')
        }   
    };

     const enviarDados=(CreatedNewNews)=>{    
        dispatch(addNews(CreatedNewNews)),
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
                        placeholder='Digite o nome do autor'
                        placeholderTextColor='#c1c1c1'
                        onChangeText={(nome:string)=>{setAuthor(nome)}} 
                        value={author}
                        style={{height:50}}
                    />
                {!errorauthor && <TextError>Campo obrigatorio</TextError>}
                <Title>Digite o Title: </Title>
                    <DataItem
                        maxLength={50}
                        autoCorrect={true}
                        autoCapitalize='words'
                        placeholder='Digite titulo da noticia'
                        placeholderTextColor='#c1c1c1'
                        onChangeText={(title:string)=>{setTitle(title)}} 
                        value={title}
                        style={{height:50}}
                    />
                    {!errortitle && <TextError>Campo obrigatorio</TextError>}
                <Title>Digite um link de imagen Valido: </Title>
                    <DataItem
                        autoCorrect={true}
                        autoCapitalize='words'
                        placeholder='Deixe em branco para uso do padrão'
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
                        placeholder='Digite a noticia'
                        placeholderTextColor='#c1c1c1'
                        onChangeText={(description:string)=>{setDescription(description)}} 
                        value={description}
                        style={{height:200,paddingTop:10 }}
                    />
                    {!errordescription && <TextError>Campo obrigatorio</TextError>}
                <SalvarDados onPress={DateValidate}>
                    <SalvarDadosTitle> Enviar dados</SalvarDadosTitle>
                </SalvarDados>
            </ContainerData>
        </ContainerDetails>
    );
}

export default AddNewNews;
