import React from 'react';
import RichTextEditor from 'react-rte';

const _getNoteById = (id, notesList) => {
	const found = notesList.filter(note => note.id === id);
	if(found.length > 0) {
		return found[0];
	}
	return null;
}

const _getValidContent = (currentNote) => {
  if(currentNote.content) {
    return RichTextEditor.createValueFromString(currentNote.content, 'markdown');
  }
  return RichTextEditor.createEmptyValue();
}

const Main = (props) => {
  const currentNote = _getNoteById(props.selectedNote, props.notesList);
  if(!currentNote) {
    return (
      <div className="col-md-9 mt-4 mt-md-0 d-flex flex-grow-1">
      <div className="card d-flex flex-grow-1 mb-0 flex-grow-1">
        <div className="card-header">
          <h3 className="card-title">No note selected</h3>
        </div>
        <div className="card-body d-flex flex-grow-1 p-1">
          <div className="d-flex flex-grow-1">
            <h3>Please select a note to edit.</h3>
          </div>
        </div>
      </div>
    </div>
    )
  }
  return (
    <div className="col-md-9 mt-4 mt-md-0 d-flex flex-grow-1">
      <div className="card d-flex flex-grow-1 mb-0 flex-grow-1">
        <div className="card-header">
          <h3 className="card-title">{currentNote.title}</h3>
        </div>
        <div className="card-body d-flex flex-grow-1 p-1">
          <div className="d-flex flex-grow-1">
            <RichTextEditor
              value={_getValidContent(currentNote)}
              autoFocus={true}
              onChange={value => {
                props.onNoteUpdated(value.toString('markdown'))
              }}
              readOnly={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
