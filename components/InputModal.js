import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import{
    ModalButton,
    ModalContainer,
    StyledInput,
    ModalAction,
    ModalActionGroup,
    ModalIcon,
    HeaderTitle,colors, ModalView

} from '../assets/styles/appStyles';
import {AntDesign} from "@expo/vector-icons"


const InputModal = ({ModalVisible,
    setModalVisible,todoInputValue,
    setTodoInputValue, handleAddTodo,
    todos,todoToBeEdited, setTodoToBeEdited,
    handleEditTodo

}) => {

const handleCloseModal = () => {
    setModalVisible(false);
    setTodoInputValue("");
    setTodoToBeEdited(null);
}

const handleSubmit = () => {

    if(!todoToBeEdited){
    handleAddTodo({
        title: todoInputValue,
        date: new Date().toUTCString(),
        key: '${todos[todos.length-1] && parseInt(todos[todos.length -1].key)+1 || 1}'

    });
}else{
    handleEditTodo({
        title: todoInputValue,
        date: todoToBeEdited.date,
        key: todoToBeEdited.key

    })
}
    setTodoInputValue("");
}

    return(
        <>
        <ModalButton
        onPress={() => {setModalVisible(true)}} >
                    <AntDesign name="plus" size={30} color={colors.secondary} />
 
        </ModalButton>
<Modal
animationType="slide"
transparent={true}
visible={ModalVisible}
onRequestClose={handleCloseModal}
>
<ModalContainer >
    <ModalView>
<ModalIcon>
    <HeaderTitle>New Task</HeaderTitle>
<AntDesign name="edit" size={30} color={colors.tertiary} />

</ModalIcon>
<StyledInput
placeholder="add a Task"
placeholderTextColor={colors.alternative}
selectionColor={colors.secondary}
autofocus={true}
onChangeText={(text) => setTodoInputValue(text)}
value={todoInputValue}
onSubmitEditing={handleSubmit}
/>

<ModalActionGroup>
    <ModalAction
    color={colors.primary}
    onPress={handleCloseModal}
    >
        <AntDesign name="close" size={28} color={colors.tertiary} />

    </ModalAction>
    <ModalAction
     color={colors.tertiary}
     onPress={handleSubmit}
    >
        <AntDesign name="check" size={28} color={colors.secondary} />

    </ModalAction>

</ModalActionGroup>
</ModalView>
</ModalContainer>
</Modal>

        </>
    );
}

export default InputModal;
const styles = StyleSheet.create({
    
})
