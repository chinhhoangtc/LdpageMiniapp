import React, { useState } from "react";
import "./index.css";
import menubar from "../../assets/images/menu.png";
export function Header() {
  const [isOpen, setisOpen] = useState(false);

  const handle = () => {
    setisOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="container-fluid position-relative position-fixed" style={{backgroundColor: 'white', zIndex:'9999'}}>
      <div className="header-home d-flex p-4 fw-bold">
        <div className="d-block d-sm-none col-5 d-flex align-items-center">
          <button
            onClick={handle}
            style={{
              border: "none",
              padding: "0px",
              backgroundColor: "transparent",
              width: "24px",
              height: "24px",
            }}
          >
            <img src={menubar} className="w-100 h-100" alt="Menu" />
          </button>
          {isOpen && (
            <div
              className={`momenu h-auto border position-absolute ${
                isOpen ? "open" : ""
              }`}
            >
              <div className={`menuMobile d-flex flex-column`}>
                <a className="text-decoration-none " href="#home" onClick={scrollToTop}>
                  Home
                </a>
                <a className="text-decoration-none " href="#how-it-works">
                  How It Works
                </a>
                <a className="text-decoration-none " href="#stats">
                  Statistics
                </a>
                <a className="text-decoration-none " href="#">
                  Start Mining
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="col-3 col-md-5 logo-header">Memhash</div>
        <div className="col-9 col-md-7 d-none d-sm-block">
          <div className="menu d-flex gap-5 align-items-center h-100 justify-content-end">
            <a className="text-decoration-none" href="#home" onClick={scrollToTop}>
              Home
            </a>
            <a className="text-decoration-none" href="#how-it-works">
              How It Works
            </a>
            <a className="text-decoration-none" href="#stats">
              Statistics
            </a>
            <a className="text-decoration-none" href="#">
              Start Mining
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
