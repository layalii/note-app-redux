import React, { Component } from 'react';
import _ from 'lodash';

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
    const id = `note-${this.state.notesList.length + 1}`;
    this.setState({
      notesList: this.state.notesList.concat({
        id,
        title,
        content: ""
      }),
      selectedNote: id
    })
  }

  deleteNoteById = (id) => {
    this.setState({
      notesList: this.state.notesList.filter(note => note.id !== id)
    })
  }

  _getIndexOfNoteById = (id) => {
    let index = 0;
    this.state.notesList.forEach((note, i) => {
      if(note.id === id) {
        index = i;
      }
    })
    return index;
  }

  updateNote = (newContent) => {
    const noteIndex = this._getIndexOfNoteById(this.state.selectedNote);
    const notesList = _.cloneDeep(this.state.notesList);
    notesList[noteIndex].content = newContent;
    this.setState({
      notesList
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
            <Main
              notesList={this.state.notesList}
              selectedNote={this.state.selectedNote}
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
