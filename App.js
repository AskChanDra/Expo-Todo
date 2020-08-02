import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import Header from './src/components/Header'

export default function App() {

  const [ todoItem, setTodoItem] = useState('')
  const [ todoList, setTodoList ] = useState([])

  const textHandler = textEntered => {
    //console.log(textEntered)
    setTodoItem(textEntered)
  }

  const addTodoList = () => {
    setTodoList([...todoList, todoItem ])
    //console.log(todoList)
  }
  return (
    <View>
      <Header title="Todo List"/>
      <View style={styles.container}>
        <View>
          <TextInput 
          placeholder="Enter Todo"
          onChangeText={textHandler}
          value={todoItem}
          style={styles.textInput}
          />
          <Button 
          title="Add Todo"
          onPress={addTodoList}
          />
        
        </View>
        <ScrollView>
          {todoList.map((todo, i) =><View style={styles.todoItem} key={i}><Text>{todo}</Text></View>)}
        </ScrollView>
        <View>
          <StatusBar style="auto" />
        </View>      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  textInput: {
    padding: 10,
    color: "#333333",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 3,
  },
  todoItem: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#efefef",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#efefef",
  }
})