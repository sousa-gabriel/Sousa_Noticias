import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../store/Models/News/Actions';


const Teste: React.FC = () =>{
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    
    const CreatedNewNews={
        Author:author,
        title:title,
        description:description,
        id: 0
    }
     function enviarDados(){
         console.log(CreatedNewNews);
        dispatch( addNews(CreatedNewNews))
    }
    function BuscarDados(){
        const NewsList = useSelector(state => state);    
        console.log(NewsList)
    }

    return(
        <>
            <View style={{flex: 1}}>
                <View>
                    <Text>Digite o nome do Autor: </Text>
                    <TextInput
                        onChangeText={(nome:string)=>{setAuthor(nome)}} 
                        value={author}
                        style={{height:100, backgroundColor: 'red'}}
                    />
                </View>
                <View>
                    <Text>Digite o Title: </Text>
                    <TextInput
                        onChangeText={(title:string)=>{setTitle(title)}} 
                        value={title}
                        style={{height:100, backgroundColor: 'red'}}
                    />
                </View>
                <View>
                    <Text>Digite a descrição: </Text>
                    <TextInput
                        onChangeText={(description:string)=>{setDescription(description)}} 
                        value={description}
                        style={{height:200, backgroundColor: 'red'}}
                    />
                </View>
                <View style={{flexDirection:'row', height:70}}>
                    <TouchableOpacity 
                        style={{width: 200, height: 60, backgroundColor:'green' }}
                    onPress={()=>{enviarDados()}}>
                        <Text> Enviar dados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{width: 200, height: 60, backgroundColor:'blue' }}
                    onPress={()=>{BuscarDados()}}>
                        <Text> Buscar dados</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default Teste;

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
