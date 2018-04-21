import React from 'react';

const Sidebar = () => {
  return (
    <div className="col-md-3">
      <h3 className="page-title mb-3">My notes</h3>
      <div>
        <div className="mb-3">
          <div className="input-group">
            <input type="text" className="form-control" aria-label="new note title" />
            <div className="input-group-append">
              <a href="#create" className="btn btn-secondary btn-block">Create new note</a>
            </div>
          </div>
        </div>
        <div className="list-group list-group-transparent">
          <div className="list-group-item list-group-item-action d-flex align-items-center active">
            <span className="icon mr-3"><i className="fe fe-inbox"></i></span>Default
          </div>
          <div className="list-group-item list-group-item-action d-flex align-items-center pr-0">
            <span className="icon mr-3"><i className="fe fe-grid"></i></span>Note 2
            <div className="ml-auto d-inline">
              <a href="#delete" className="text-danger btn p-0">
                <i className="fe fe-delete"></i>
              </a>
            </div>
          </div>
          <div className="list-group-item list-group-item-action d-flex align-items-center pr-0">
            <span className="icon mr-3"><i className="fe fe-grid"></i></span>Note 3
            <div className="ml-auto d-inline">
              <a href="#delete" className="text-danger btn p-0">
                <i className="fe fe-delete"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
