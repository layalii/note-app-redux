import React from 'react';
import RichTextEditor from 'react-rte';

const Main = () => {
  return (
    <div className="col-md-9 mt-4 mt-md-0 d-flex flex-grow-1">
      <div className="card d-flex flex-grow-1 mb-0 flex-grow-1">
        <div className="card-header">
          <h3 className="card-title">Note 1</h3>
        </div>
        <div className="card-body d-flex flex-grow-1 p-1">
          <div className="d-flex flex-grow-1">
            <RichTextEditor
              value={RichTextEditor.createValueFromString('hello world', 'markdown')}
              onChange={onChange}
              readOnly={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function onChange(content) {
  console.log(content.toString('markdown'))
}

export default Main;
