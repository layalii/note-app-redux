import React, { Component } from 'react';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import Main from './Layout/Main';

export default class App extends Component {
  state = {
    notesList: [
      {
        id: "note-1",
        title: "default",
        content: ""
      },
      {
        id: "note-2",
        title: "note 2",
        content: ""
      },
      {
        id: "note-3",
        title: "note 3",
        content: ""
      },
      {
        id: "note-4",
        title: "note 4",
        content: ""
      }
    ],
    selectedNote: "note-1"
  }

  selectNote = (id) => {
    this.setState({
      selectedNote: id
    }, () => {
      console.log(this.state.selectedNote);
    })
  }

  addNote = (title) => {
    this.setState({
      notesList: this.state.notesList.concat({
        id: `note-${this.state.notesList.length + 1}`,
        title,
        content: ""
      })
    })
  }

  deleteNoteById = (id) => {
    this.setState({
      notesList: this.state.notesList.filter(note => note.id !== id)
    })
  }

  render() {
    return [
      <div key={0} className="page-main d-flex flex-column">
        <Header />
        <div className="container my-3 d-flex flex-grow-1">
          <div className="row flex-nowrap flex-grow-1 flex-column flex-md-row">
            <Sidebar
              notesList={this.state.notesList}
              selectedNote={this.state.selectedNote}
              onNoteItemAdded={title => {
                this.addNote(title);
              }}
              onNoteItemClick={id => {
                this.selectNote(id);
              }}
              onNoteItemDeleted={id => {
                this.deleteNoteById(id);
              }} />
            <Main />
          </div>
        </div>
      </div>,
      <Footer key={1} />
    ]
  }
}
