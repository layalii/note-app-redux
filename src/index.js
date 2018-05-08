import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; 
import { createStore, combineReducers } from 'redux';
import _ from 'lodash';

const notes = localStorage.getItem('notes');
let defaultNotes;
if(notes) {
  defaultNotes = JSON.parse(notes);
} else {
  defaultNotes = [{
    id: 'default',
    title: 'default',
    content: ""
  }]
}

const defaultSelectedNote = localStorage.getItem('selectedNote') || 'default';

const selectedNoteReducer = (state = defaultSelectedNote, action) => {
  if(action.type === 'SET_SELECTED_NOTE'){
    return action.noteId;
  }
  
  if(action.type === 'ADD_NOTE_TO_LIST') {
    return action.newNote.id;
  }
  
  if(action.type === 'DELETE_NOTE_FROM_LIST' && state === action.noteToDelete) {
    return 'default';
  }

  return state;
}

const notesReducer = (state = defaultNotes, action) => {
  if(action.type === 'ADD_NOTE_TO_LIST') {
    const RES = state.concat({
      id: action.newNote.id, 
      title: action.newNote.title, 
      content: action.newNote.content
    });
    return RES;
  }

  if(action.type === 'DELETE_NOTE_FROM_LIST' && action.noteToDelete !== 'default') {
    return state.filter(note => note.id !== action.noteToDelete);
  }
  
  if(action.type === 'UPDATE_NOTE_CONTENT') {
    // let newNotes = _.cloneDeep(state);
    // newNotes.forEach(note => {
    //   if(note.id === action.noteId) {
    //     note.content = action.newContent;
    //   }
    // })
    // return newNotes;
    return state.map(note => {
      if(note.id === action.noteId) {
        return {
          ...note,
          content: action.newContent
        }
      }
      return note;
    })
  }

  return state;
}

const globalStore = {
  selectedNote: selectedNoteReducer,
  notes:notesReducer,
}

const rootReducer = combineReducers(globalStore);
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
 document.getElementById('root'));
