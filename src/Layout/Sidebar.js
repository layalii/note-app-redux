import React from 'react';
import classnames from 'classnames';

import NoteItem from '../Components/NoteItem';
import AddNoteInput from '../Components/AddNoteInput';

const Sidebar = (props) => {
  return (
    <div className="col-md-3">
      <h3 className="page-title mb-3">My notes</h3>
      <div>
        <div className="mb-3">
          <AddNoteInput onNoteItemAdded={props.onNoteItemAdded} />
        </div>
        <div className="list-group list-group-transparent">
          <div className={
              classnames("list-group-item list-group-item-action d-flex align-items-center", {
                'active': props.selectedNote === "note-1"
              })
            }
            onClick={e => {
              props.onNoteItemClick('note-1');
            }}>
            <span className="icon mr-3"><i className="fe fe-inbox"></i></span>Default
          </div>
          {props.notesList.filter(note => note.id !== 'note-1').map(noteObject => (
            <NoteItem key={noteObject.id}
              noteId={noteObject.id} 
              selectedNote={props.selectedNote}
              title={noteObject.title}
              onNoteItemClick={props.onNoteItemClick}
              onNoteItemDeleted={props.onNoteItemDeleted} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
