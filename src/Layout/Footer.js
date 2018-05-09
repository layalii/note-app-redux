import React from 'react';
import { connect } from 'react-redux';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
            Copyright © 2018 <a href=".">MyNote</a>. All rights reserved. {props.notes.length}
          </div>
        </div>
      </div>
    </footer>
  )
}

const mapStateToProps = (globalStore) => {
  return {
    notes: globalStore.notes,
  }
}

export default connect(mapStateToProps)(Footer);