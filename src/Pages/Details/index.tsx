import React from 'react';
import {
    Container,
    ContainerDetails,
    ContainerImage,
    ContainerData,
    Title,
    Author,
    Description
} from './styles';

import Fundo from '../../../assets/inter.png'

const Details: React.FC = () => {
    return (
        <Container>
            <ContainerDetails>
                <ContainerImage source={Fundo} />
                <ContainerData>
                    <Title >Marcos Guilherme Atende Pedido da esposa</Title>
                    <Description>
                        Marcos Guilherme recebeu sondagens, pensou e repensou sobre deixar o Inter. Mas decidiu ficar para ser observado e ganhar chances com Miguel Ángel Ramírez. E elas vieram. O meia-atacante foi titular nas duas partidas desde a chegada do técnico e desencantou ao encerrar um jejum de 35 jogos sem gols.
                        A seca durou exatos 211 dias, quase sete meses. E foi encerrada por Marcos Guilherme com o gol da vitória por 1 a 0 sobre o Novo Hamburgo, no último domingo, no Estádio do Vale, pela 5ª rodada do Gauchão. Um gol seguido de lágrimas pelo jogador ainda em campo.
                        O meia-atacante não marcava desde 22 de agosto de 2020. Na ocasião, ele fez um dos gols da vitória por 4 a 0 sobre o Esportivo, também pelo Gauchão.
                        O gol que encerrou o jejum também foi um presente para a esposa, Karoline Souza. Antes da partida, ela pediu o gol como presente de aniversário de casamento. O pedido foi uma ordem (veja na reportagem acima).
                        Marcos Guilherme balançou as redes já no segundo tempo, em seu último toque na bola na partida. Ele aproveitou cruzamento de Moisés após cobrança de falta e apareceu livre no segundo poste para completar de primeira para o gol.
                        O meia-atacante foi às lágrimas imediatamente, após se ajoelhar no gramado. Em seguida, foi substituído por Yuri Alberto.
                        – Vitória importante do grupo, um jogo difícil, gramado difícil. Feliz pela vitória da equipe – disse Marcos Guilherme após o jogo.                    
                    </Description>
                    <Author >Abel braga</Author>
                </ContainerData>
            </ContainerDetails>
        </Container>
    );
}
export default Details;