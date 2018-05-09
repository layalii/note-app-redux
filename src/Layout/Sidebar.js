import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import uid from 'uid';

import NoteItem from '../Components/NoteItem';
import AddNoteInput from '../Components/AddNoteInput';


const addNoteToList = (title, dispatch) => {
  const action = {
    type: 'ADD_NOTE_TO_LIST',
    newNote: {
      id:  uid(),
      content: '',
      title: title,
    }  
  }
  dispatch(action);  
}

const deleteNoteFromList = (id, dispatch) => {
  const action = {
    type :'DELETE_NOTE_FROM_LIST',
    noteToDelete : id
  }
  dispatch(action);
}

const showContent = (id, dispatch) => {
  const action = { 
    type: 'SET_SELECTED_NOTE',
    noteId: id
  }
  dispatch(action);
}

const Sidebar = (props) => {
  return (
    <div className="col-md-3">
      <h3 className="page-title mb-3">My notes</h3>
      <div>
        <div className="mb-3">
          <AddNoteInput onNoteItemAdded={title => {
            addNoteToList(title, props.dispatch);
          }} />
        </div>
        <div className="list-group list-group-transparent">
          <div className={
              classnames("list-group-item list-group-item-action d-flex align-items-center", {
                'active': props.selectedNote === "default"
              })
            }
            onClick={e => {
              showContent('default', props.dispatch);
            }}>
            <span className="icon mr-3"><i className="fe fe-inbox"></i></span>Default
          </div>
          {props.notes.filter(note => note.id !== 'default').map(noteObject => (
            <NoteItem key={noteObject.id}
              noteId={noteObject.id} 
              selectedNote={props.selectedNote}
              title={noteObject.title}
              onNoteItemClick={noteId => {
                showContent(noteId, props.dispatch);
              }}
              onNoteItemDeleted={noteId => {
                deleteNoteFromList(noteId, props.dispatch);
              }} />
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (globalStore) => {
  return { 
    selectedNote: globalStore.selectedNote,
    notes: globalStore.notes,
  }
}

export default connect(mapStateToProps)(Sidebar);
