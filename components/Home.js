import React,{useState} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from './Header';
import ListItem from './ListItem';
import InputModal from './InputModal';


const Home = () => {
  

    const intialTodos = [{
        title:"have some snacks",
        date:" Fri , 08 jan" ,
        key:"1"},
        {
            title:"have some ",
            date:" Fri , 08 jan" ,
            key:"2"},
            {
                title:"have ",
                date:" Fri , 08 jan" ,
                key:"3"},
            ]
    const [todos,setTodos]= useState(intialTodos)

            const handleClearTodos = () => {
                setTodos([]);
            }

        const [ModalVisible,setModalVisible] = useState(false);
        const [todoInputValue,setTodoInputValue] = useState();
        const handleAddTodo = (todo) => {
                            const newTodos = [...todos, todo]
                            setTodos(newTodos);
                            setModalVisible(false);
        }

const [todoToBeEdited, setTodoToBeEdited] =  useState(null)

         const handleTriggerEdit = (item) => {
setTodoToBeEdited(item);
setModalVisible(true);
setTodoInputValue(item.title);


         }
         const handleEditTodo = ( editedTodo ) => {
            const newTodos = [...todos];
            const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
            newTodos.splice(todoIndex,1, editedTodo);
            setTodos(newTodos)
            setTodoToBeEdited(null);
            setModalVisible(false);
        }

        return (
            <>
            <Header handleClearTodos={handleClearTodos}  />
            <ListItem
            todos={todos}
            setTodos={setTodos}
            handleTriggerEdit={handleTriggerEdit}
            />
            <InputModal
            
            ModalVisible={ModalVisible}
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
            handleAddTodo={handleAddTodo}
            todoToBeEdited={todoToBeEdited}
            setTodoToBeEdited={setTodoToBeEdited}
            todos={todos}
            handleEditTodo={handleEditTodo}
            />
            </>
        );
    }
export default Home;


