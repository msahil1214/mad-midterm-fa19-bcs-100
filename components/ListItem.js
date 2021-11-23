import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { 
    ListView,
    TodoText,
    TodoDate,
    colors,
    ListViewHidden,
    HiddenButton,
    SwipedTodoText,


} from '../assets/styles/appStyles'
import {Entypo} from '@expo/vector-icons'


const ListItem = ({todos, setTodos, handleTriggerEdit}) => {

        const[swipedRow,setSwipedRow]=useState(null);
        const handleDeleteTodo = (rowMap,rowkey) => {
            const newTodos =[...todos];
            const todoIndex = todos.findIndex((todo) => todo.key === rowkey );
            newTodos.splice(todoIndex,1);
            setTodos(newTodos);
        }



    return (
<>
        {todos.length == 0 && <TodoText>You Have No Todos Today </TodoText>}

     {todos.length !== 0 &&  <SwipeListView 
        data={todos}
        renderItem={(data) =>{
            const RowText= data.item.key == swipedRow ? SwipedTodoText : TodoText;

return(
    <ListView
    underlaycolor={colors.primary}
    onPress={() => {
            handleTriggerEdit(data.item)
    }}
    >
        <>
<RowText>{data.item.title}</RowText>
<TodoDate>{data.item.date}</TodoDate>
</>
    </ListView>
)
        }}

        renderHiddenItem={(data, rowMap)=>{
            return(
            <ListViewHidden>
    <HiddenButton
    onPress={()=>handleDeleteTodo(rowMap,data.item.key)}
    >
                <Entypo name="trash" size={25} style={{color:"black"}} />
    </HiddenButton>

    </ListViewHidden>
            )
        }}
leftOpenValue={80}
previewRowKey={"1"}
previewOpenValue={80}
previewOpenDelay={3000}
disableLeftSwipe={true}
showsVerticalScrollIndicator={false}
style={{
    flex:1,
    paddingBottom:30,
    marginBottom:40,

}}

onRowOpen={(rowkey) => {
setSwipedRow(rowkey);
}} 
onRowClose={() =>{
    setSwipedRow(null);
}}
        />} 
        </>
    )
}

export default ListItem;