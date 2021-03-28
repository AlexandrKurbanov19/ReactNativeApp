import React from 'react';
import { SectionList, Text, View } from 'react-native';
import styled from 'styled-components';
import Appointment from './components/Appointment';
import SectionTitle from './components/SectionTitle';
import {Ionicons} from '@expo/vector-icons'

const DATA = [
  {
    title: '14 сентября',
    data: [{
      time: '13:30',
      active: true,
      diagnosis: 'кастрация',
      user: {
        fullname: 'Мурзик Барсиков',
        avatar: 'https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg',
      }
    },
    {
      time: '15:30',
      diagnosis: 'инголяция',
      user: {
        fullname: 'Кошкин Мышкин',
        avatar: 'https://avatars.mds.yandex.net/get-zen_doc/127081/pub_5a839b65f03173f0e73d432e_5a839c76e86a9eb54f19e8f0/scale_1200',
      }
    },
    {
      time: '16:30',
      diagnosis: 'укольчик',
      user: {
        fullname: 'Ушки Намокушкин',
        avatar: 'http://pro-kotikov.ru/wp-content/uploads/2018/06/cute-exotic12.jpg',
      }
    }
  ],
  },
  {
    title: '16 сентября',
    data: [{
      time: '13:30',
      diagnosis: 'кастрация',
      user: {
        fullname: 'Мурзик Барсиков',
        avatar: 'https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg',
      }
    },
    {
      time: '15:30',
      diagnosis: 'инголяция',
      user: {
        fullname: 'Кошкин Мышкин',
        avatar: 'https://avatars.mds.yandex.net/get-zen_doc/127081/pub_5a839b65f03173f0e73d432e_5a839c76e86a9eb54f19e8f0/scale_1200',
      }
    },
    {
      time: '16:30',
      diagnosis: 'укольчик',
      user: {
        fullname: 'Ушки Намокушкин',
        avatar: 'http://pro-kotikov.ru/wp-content/uploads/2018/06/cute-exotic12.jpg',
      }
    }
    ]
  },
  
  
]


export default function App() {
  return (
    <Container>
      

      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => <Appointment  {...item}/>}
      renderSectionHeader={({ section: {title} }) => (
        <SectionTitle>{title}</SectionTitle>
      )}
      />
<PlusButton>
  <Ionicons name="md-add" size={32} color="white" />
</PlusButton>
      </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
align-items: center;
justify-content: center; 
border-radius: 50px;
width: 64px;
height: 64px;
background: #2a86ff;
position: absolute;
right: 20px;
bottom: 80px;
shadowColor: #000;
  shadowOffset: {
    width: 0,
    height: 4,
  };
  shadowOpacity: 0.60;
  shadowRadius: 5.00;
  
  elevation: 12;
`;
const Container = styled.View`
flex: 1;
margin-top: 30px;
`;

