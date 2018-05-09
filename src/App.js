import React from 'react';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Sidebar from './Layout/Sidebar';
import Main from './Layout/Main';

const App = () => {
  return [
    <div key={0} className="page-main d-flex flex-column">
      <Header />
      <div className="container my-3 d-flex flex-grow-1">
        <div className="row flex-nowrap flex-grow-1 flex-column flex-md-row">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>,
    <Footer key={1} />
  ]
}

export default App;
