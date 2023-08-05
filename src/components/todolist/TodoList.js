import React, { useState } from 'react';
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCCYHtf5_IhrkAIaEN2OAhM4VsmQT25Zrc",

  authDomain: "fir-intecap.firebaseapp.com",

  projectId: "fir-intecap",

  storageBucket: "fir-intecap.appspot.com",

  messagingSenderId: "389999079107",

  appId: "1:389999079107:web:9cb045ccd567d828a5fc76",

  measurementId: "G-6SM9M2RM65"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const storage = getStorage(app)




  
  



const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = async () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');

      // Aquí puedes agregar lógica para subir un archivo a Firebase Storage si es necesario
      const storageRef = ref(storage, 'todos/' + newTodo);
      await uploadString(storageRef, newTodo);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Firebase</h1>
      <div className="d-flex">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="form-control"
        />
        <button onClick={addTodo} className="btn btn-primary ml-2">
          Add
        </button>
      </div>
      <ul className="list-group mt-3">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button onClick={() => deleteTodo(index)} className="btn btn-danger">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


const analytics = getAnalytics(app);

export default TodoList;
