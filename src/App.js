import React,{ Component } from 'react';
import uid from 'uid';
import { connect } from 'react-redux';


import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import Main from './Layout/Main';


class App extends Component {
  
  showContent = (id) => {
    const action = { 
      type: 'SET_SELECTED_NOTE',
      noteId: id
    }
    this.props.dispatch(action);
  }

  addNoteToList = (title) => {
    const action = {
      type : 'ADD_NOTE_TO_LIST',
      newNote: {
        id :  uid(),
        content: '',
        title: title,
      }  
    }
    this.props.dispatch(action);  
  }

  deleteNoteFromList = (id) => {
    const action = {
      type :'DELETE_NOTE_FROM_LIST',
      noteToDelete : id
    }
    this.props.dispatch(action);
  }

  updateNote = (newContent) => {
    const action ={
      type : 'UPDATE_NOTE_CONTENT',
      noteId : this.props.selectedNote,
      newContent: newContent
    }
    this.props.dispatch(action)
  }

  render() {
    return [
      <div key={0} className="page-main d-flex flex-column">
        <Header />
        <div className="container my-3 d-flex flex-grow-1">
          <div className="row flex-nowrap flex-grow-1 flex-column flex-md-row">
            <Sidebar
              notesList={this.props.notes}
              selectedNote={this.props.selectedNote}
              onNoteItemAdded={title => {
                this.addNoteToList(title);
              }}
              onNoteItemClick={id => {
                this.showContent(id);
              }}
              onNoteItemDeleted={id => {
                this.deleteNoteFromList(id);
              }} />
            <Main
              notesList={this.props.notes}
              selectedNote={this.props.selectedNote}
              onNoteUpdated={newContent => {
                this.updateNote(newContent);
              }}
              />
          </div>
        </div>
      </div>,
      <Footer key={1} />
    ]
  }
}

const mapStateToProps = (globalStore) => {
  return { 
    selectedNote: globalStore.selectedNote,
    notes:globalStore.notes,
  }
}

export default connect(mapStateToProps)(App);
