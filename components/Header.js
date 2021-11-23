import React from 'react';

import {
 HeaderView,
 HeaderButton,
 HeaderTitle,
 colors,
} from '../assets/styles/appStyles';

import {Entypo} from '@expo/vector-icons'

const Header = ({handleClearTodos}) => {
return(
    <HeaderView
    >
        <HeaderTitle style={{color:"black"}}>Fa19-bcs-100  </HeaderTitle>
        <HeaderButton onPress={handleClearTodos}>
<Entypo name="trash" size={25} style={{color:"black"}} />
        </HeaderButton>
    </HeaderView>
);
}


export default Header;