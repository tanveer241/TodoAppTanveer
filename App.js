import React, { useState, useEffect } from "react";
import {StyleSheet, Text, TextInput, View, Button, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const [title, Apptitle] = useState("");
  const [todo, setTodo] = useState({});
  const [todos, Apptodos] = useState([]);

  const addTodo = () => 
  {

      Apptodos([...todos, { key: Date.now(), name: title, isChecked: false }]);
      Apptitle(""); 
};

  const checkTodo = id => {
   
    Apptodos(
      todos.map(todo => {
        if (todo.key === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      })
    );
  };

  const deleteTodo = id => {
   
    Apptodos(todos.filter(todo => {
      return todo.key !== id;
    }));
  };

  

  return (
    <View style={styles.MainArea}>
      <View style={styles.TopBar}></View>
      <View style={styles.Todobar}>
      <Text style={styles.heading}>Todo App</Text>
    </View>
      <View style={styles.todo}>
        <TextInput
          placeholder="Add a todo"
          value={title}
          onChangeText={value => Apptitle(value)}
          style={styles.TextArea}
        />
        <Button title="Add now" color="#FF3333" onPress={() => addTodo()} />
      </View>

      <ScrollView>
        {todos.map(todo => (
          <TodoItems
            key={todo.key}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ScrollView>
    </View>
  );
}
function TodoItems(props) {
  return (
    <View style={styles.listTile}>
      <Icon
        name={props.todo.isChecked ? "check-circle" : "radio-button-unchecked"}
        style={styles.leading}
        size={20}
        color="#FF0B0B"
        onPress={() => props.checkTodo(props.todo.key)}
      />
      <Text style={styles.title}>{props.todo.name}</Text>
      <Icon
        name="delete"
        style={styles.trailing}
        size={20}
        color="#666666"
        onPress={() => props.deleteTodo(props.todo.key)}
      />
    </View>
  );
}
function Todo(props) {
  
  const [title, Apptitle] = useState('');

  return (
    <View style={styles.todo}>
      <TextInput 
        placeholder="Add Todo" 
        value={title}
        onChangeText={value=>Apptitle(value)}
        style={styles.TextArea} />
      <Button 
        title="Add" 
        color='#7F39FB'
        onPress={props.addTodo}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  TopBar: {
    backgroundColor: "#3399FF",
    color: "#fff",
    width: "100%",
    height: 30
  },
  MainArea: {
    flex: 1,
    backgroundColor: "#93E897",
    alignItems: "center",
    justifyContent: "flex-start",
    color:'black'
  },
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    color:'black'
  },
  TextArea: {
    borderWidth: 1,
    borderColor: "#7F39FB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: "80%",
    color:'black'
  },
  Todobar: {
    backgroundColor: "#3399FF",
    color: "white",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    color: "white",
    fontSize: 24,
    fontWeight: "400"
  },
  todo: {
    flexDirection: "row",
    width: "100%",
    justifyContent:'center',
    alignItems:'center'
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#7F39FB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width:'80%'
  },
  listTile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#DADADA",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#666666",
    color:'black'
  },
  leading: {
    width: "20%"
  },
  title: {
    width: "60%",
    fontSize: 18,
    color:'black'
  },
  trailing: {
    width: "20%"
  }
});