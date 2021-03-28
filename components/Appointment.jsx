import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

const Group = ({ user, diagnosis, active, time}) => {
   return (
    
    <GroupItem>
      <Avatar
         source={{ uri: user.avatar }}/>
      <View style={{ flex: 1 }}>
      <FullName>{user.fullname}</FullName>
      <GrayText>{diagnosis}</GrayText> 
      </View>
      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>
  
   ); 
};
Group.defaultProps = {
    title: 'Untitled',
    items: [],
}

const GroupDate = styled.Text`
background:${props => (props.active ? "#2a86ff;" : " #e9f5ff;")};
color:${props => (props.active ? "#fff;" : " #4294ff;")};
border-radius: 18;
font-size: 14px;
font-weight: 600;
width: 70px;
height: 32px;
text-align: center;
line-height: 32px;
overflow: hidden;
`;

const GrayText = styled.Text`
color: #8b979f;
font-size: 16px;
`;
const FullName = styled.Text`
font-size: 16px;
font-weight: 800;
`;

const Avatar = styled.Image`
border-radius: 50;
width: 50px;
height: 50px;
margin-right: 15px;
`;
const GroupItem = styled.TouchableOpacity`
padding: 20px 20px;
flex-direction: row;
align-items: center;
border-bottom-width: 1px;
border-bottom-color: #f3f3f3;

`;



export default Group;