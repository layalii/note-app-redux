import React from 'react';

const Header = () => {
  return (
    <div className="header py-4">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <a className="header-brand" href="./index.html">
            <img src="./logo.svg" className="header-brand-img" alt="logo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;
