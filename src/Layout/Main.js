import React, { PureComponent } from 'react';
import RichTextEditor from 'react-rte';

const _getNoteById = (id, notesList) => {
	const found = notesList.filter(note => note.id === id);
	if(found.length > 0) {
		return found[0];
	}
	return null;
}

const _getValidContent = (props) => {
  const selectedNote = _getNoteById(props.selectedNote, props.notesList);
  if(selectedNote && selectedNote.content) {
    return RichTextEditor.createValueFromString(selectedNote.content, 'markdown');
  }
  return RichTextEditor.createEmptyValue();
}

const Main = (props) => {
  return (
    <div className="col-md-9 mt-4 mt-md-0 d-flex flex-grow-1">
      <div className="card d-flex flex-grow-1 mb-0 flex-grow-1">
        <div className="card-header">
          <h3 className="card-title">Note 1</h3>
        </div>
        <div className="card-body d-flex flex-grow-1 p-1">
          <div className="d-flex flex-grow-1">
            <Editor value={_getValidContent(props)} selectedNote={props.selectedNote}
              onNoteUpdated={val => {
                props.onNoteUpdated(val);
              }}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

class Editor extends PureComponent {
  state = {
    value: this.props.value,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    })
  }

  render() {
    return (
      <RichTextEditor
        value={this.props.value}
        autoFocus={true}
        onChange={value => {
          this.setState({ value }, () => {
            this.props.onNoteUpdated(value.toString('markdown'))
          });
        }}
        readOnly={false}
      />
    )
  }
}

export default Main;
