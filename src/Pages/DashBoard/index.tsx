import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CarouselNews from '../../Components/carouselNews';
import SmallNews from '../../Components/SmallNews';
import Modal from 'react-native-modal';
import AddNewNews from '../AddNewNews';
import EditNews from '../EditNews';
import { removeNew } from '../../store/Models/News/Actions';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import {
    Container,
    ListNews,
    ContainerModal,
    ButtonNewNews,
    CampoDeBusca,
} from './styles'
import Details from '../Details';
import { INewsState } from '../../store/Models/News/Types';

const Dashboard : React.FC = ()=>{
    const [iconSelected,setIconSelected] = useState('Add')
    const [idSelected,setIdSelected] = useState('')
    const [selected, setSelected] = useState(false);
    const [modalNewNews, setModalNewNews] = useState(false);
    const ItemNews = useSelector(state => state.News.News)
    const dispatch = useDispatch(); 
    const [text, setText] = useState('');
    const [list, setList] = useState<INewsState[]>([]);

    const handleInsertNews = () => {
        setIconSelected('Add')
        setModalNewNews(!modalNewNews)
    };
    const handleEditNews = () =>{
        setIconSelected('Edit')
        setModalNewNews(!modalNewNews)
    }
    const handleViewNew = () => {
        setIconSelected('View')
        setModalNewNews(!modalNewNews)
    }
    const handleDeleteNew = ()=>{
        dispatch( removeNew(idSelected));
    }
    const handleSelected = (ID:string) =>{  
        setSelected(!selected);
        setIdSelected(ID);
    }
    const Busca =(text:string)=>{
        const filtrarLista = ItemNews.filter((item:any) => {
          const itemFilter = item.title ? item.title.toUpperCase() : ''.toUpperCase();
          
          const newText = text.toUpperCase();
          return (
            itemFilter.indexOf(newText) > -1
          );
        });
        setList(filtrarLista)
        setText(text)
      }
    return (
        <>
            <Modal
                isVisible={modalNewNews}
                hasBackdrop={true}
                transparent={true}
                animationInTiming={100}
                animationOutTiming={100}
                animationType={'fade'}
                onBackdropPress={handleInsertNews}
            >
                <ContainerModal >
                    {
                        iconSelected == 'Add' ?   
                            <AddNewNews onClose={handleInsertNews}/>
                        :   
                        iconSelected == 'Edit'?   
                            <EditNews Id={idSelected} onClose={handleInsertNews}/>
                        :   
                            <Details Id={idSelected} onClose={handleInsertNews}/> 
                    }
                </ContainerModal>
            </Modal>
            <Container>
                <CampoDeBusca
                    placeholder={'Pesquisar...'}
                    placeholderTextColor={'#FFF'}
                    onChangeText={(Item:string)=>Busca(Item)} 
                    value={text}
                />
                {
                    (ItemNews.length-1>=0) && <CarouselNews  />   
                }
                
                <ListNews
                    data={list == '' ? ItemNews : list }
                    renderItem={Item=>(
                        <SmallNews
                            Key={Item.index}
                            ID={Item.item.id}
                            author={Item.item.author}
                            title={Item.item.title}
                            image={Item.item.image}
                            onselected={handleSelected}
                        />
                    )}    
                />
            </Container>
            {
                selected ?
                    <>
                        <ButtonNewNews onPress={handleInsertNews}>
                            <Icon name='plus' size={35} color="#6272a4"/>
                        </ButtonNewNews>
                        <ButtonNewNews style={{right:90}} onPress={handleViewNew}>
                            <Icon name='file-text' size={35} color="#6272a4"/>
                        </ButtonNewNews>
                        <ButtonNewNews style={{right:160}} onPress={handleEditNews}>
                            <Icon name='edit' size={35} color="#6272a4"/>
                        </ButtonNewNews>
                        <ButtonNewNews style={{right:230}} onPress={handleDeleteNew}>
                            <Icon name='trash-2' size={35} color="#6272a4"/>
                        </ButtonNewNews>
                    </>
                    :
                        <ButtonNewNews onPress={handleInsertNews}>
                            <Icon name='plus' size={35} color="#6272a4"/>
                        </ButtonNewNews>
            }
        </>
    );
}

export default Dashboard;