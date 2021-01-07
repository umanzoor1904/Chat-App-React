import React, {useState, useEffect} from 'react';
import {IconButton, Input, FormControl} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move'
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');

  useEffect( () => {
    setName(prompt('Please enter your name'))
  }, [] );

  useEffect( () => {
    db.collection('Messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [] );

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('Messages').add({
      name: name,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome {name}</h1>
      
      <div className='formContainer'>
        <form className='form'>
          <FormControl className='formControl'>
            <Input className='input' placeholder = 'Enter your message...' value = {input} onChange = {e => setInput(e.target.value)}/>
            <IconButton className='iconButton' disabled = {!input} variant = 'contained'  type = 'submit' onClick = {sendMessage}>
              <SendIcon/>
            </IconButton>
          </FormControl>
        </form>
      </div>
      <div className='messages' style={{height: '80vh', overflow: 'scroll'}}>
        <FlipMove>
          {
            messages.map(({id, message}) => (
              <Message key={id} name={name} message={message}/>
            ))
          }
        </FlipMove>
      </div>
    </div>
  );
}

export default App;
